
import { AUDIO_ASSETS } from '../data/audio_assets';

type BgmKey = keyof typeof AUDIO_ASSETS.bgm;
type SfxKey = keyof typeof AUDIO_ASSETS.sfx;

class AudioManager {
  private static instance: AudioManager;
  
  // Audio state management
  private bgmAudio: HTMLAudioElement | null = null;
  private currentBgmKey: string | null = null;
  private sfxCache: Map<string, HTMLAudioElement> = new Map();
  
  // Timer references for clearing intervals
  private fadeInterval: ReturnType<typeof setInterval> | null = null;
  
  // Settings
  private _isMuted: boolean = false;
  private _bgmVolume: number = 0.3; // Default BGM volume
  private _sfxVolume: number = 0.6;

  private constructor() {
    const savedMute = localStorage.getItem('cat_audio_muted');
    if (savedMute !== null) {
      this._isMuted = savedMute === 'true';
    }
  }

  public static getInstance(): AudioManager {
    if (!AudioManager.instance) {
      AudioManager.instance = new AudioManager();
    }
    return AudioManager.instance;
  }

  public async init() {
    this.preloadSfx('click');
    this.preloadSfx('hover');
    this.preloadSfx('success');
    this.preloadSfx('fail');
  }

  private preloadSfx(key: SfxKey) {
    if (!this.sfxCache.has(key)) {
      const audio = new Audio(AUDIO_ASSETS.sfx[key]);
      audio.volume = this._sfxVolume;
      this.sfxCache.set(key, audio);
    }
  }

  public playBgm(key: BgmKey) {
    if (this.currentBgmKey === key && this.bgmAudio && !this.bgmAudio.paused) {
        return; // Already playing this track
    }

    // 1. Clear any pending fade operations immediately
    if (this.fadeInterval) {
        clearInterval(this.fadeInterval);
        this.fadeInterval = null;
    }

    // 2. Hard Stop previous BGM to prevent overlap
    if (this.bgmAudio) {
        this.bgmAudio.pause();
        this.bgmAudio.currentTime = 0;
        this.bgmAudio = null;
    }

    const url = AUDIO_ASSETS.bgm[key];
    if (!url) return;

    // 3. Start new BGM
    const newBgm = new Audio(url);
    newBgm.loop = true;
    // If muted, volume is 0 effectively, but we manage muted property
    newBgm.muted = this._isMuted; 
    
    // Start with volume 0 for fade-in
    newBgm.volume = 0; 
    
    const playPromise = newBgm.play();
    
    if (playPromise !== undefined) {
        playPromise.then(() => {
            this.bgmAudio = newBgm;
            this.currentBgmKey = key;
            this.fadeIn(newBgm);
        }).catch(error => {
            console.warn("Auto-play prevented or audio failed:", error);
        });
    }
  }

  public stopBgm() {
    if (this.fadeInterval) {
        clearInterval(this.fadeInterval);
        this.fadeInterval = null;
    }
    
    if (this.bgmAudio) {
        this.fadeOut(this.bgmAudio);
        // Note: fadeOut will handle the nulling after fade complete, 
        // but currentBgmKey should be cleared now to allow re-play.
        this.currentBgmKey = null;
    }
  }

  public playSfx(key: SfxKey) {
    if (this._isMuted) return;

    const url = AUDIO_ASSETS.sfx[key];
    if (!url) return;

    // Clone or new instance to allow overlapping SFX
    const audio = new Audio(url);
    audio.volume = this._sfxVolume;
    audio.play().catch(() => {});
  }

  public playClick() {
      this.playSfx('click');
  }

  public playHover() {
      // Optional: re-enable if desired, currently quiet
      // this.playSfx('hover'); 
  }

  public toggleMute() {
    this._isMuted = !this._isMuted;
    localStorage.setItem('cat_audio_muted', String(this._isMuted));
    
    if (this.bgmAudio) {
      this.bgmAudio.muted = this._isMuted;
    }
    return this._isMuted;
  }

  public get isMuted() {
    return this._isMuted;
  }

  private fadeIn(audio: HTMLAudioElement) {
    // Safety check
    if (this.fadeInterval) clearInterval(this.fadeInterval);

    let vol = 0;
    this.fadeInterval = setInterval(() => {
      // Check if audio is still valid and playing
      if (!audio || audio.paused || audio !== this.bgmAudio) {
          if (this.fadeInterval) clearInterval(this.fadeInterval);
          return;
      }

      if (vol < this._bgmVolume) {
        vol = Math.min(vol + 0.05, this._bgmVolume);
        audio.volume = vol;
      } else {
        if (this.fadeInterval) clearInterval(this.fadeInterval);
        this.fadeInterval = null;
      }
    }, 100); // 100ms * 6 steps = ~0.6s fade in
  }

  private fadeOut(audio: HTMLAudioElement) {
    // We don't track fadeOut interval globally because we might want to fade out 
    // an OLD track while fading in a NEW one. 
    // However, in this strict singleton implementation, we usually just stop it.
    // If we want a smooth stop, we run a local interval.
    
    let vol = audio.volume;
    const interval = setInterval(() => {
      if (vol > 0) {
        vol = Math.max(0, vol - 0.1);
        try {
            audio.volume = vol;
        } catch (e) {
            clearInterval(interval);
        }
      } else {
        audio.pause();
        audio.currentTime = 0;
        clearInterval(interval);
        if (this.bgmAudio === audio) {
            this.bgmAudio = null;
        }
      }
    }, 50);
  }
}

export const audioManager = AudioManager.getInstance();
