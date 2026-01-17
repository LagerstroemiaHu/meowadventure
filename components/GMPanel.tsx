
import React, { useState } from 'react';
import { GameStats, GameEvent } from '../types';
import { RANDOM_EVENTS, RANDOM_EVENTS_EXTRA, DAILY_ACTIONS, STORY_QUESTS, SUDDEN_EVENTS, SIDE_STORIES } from '../data/events';
import { Wrench, X } from 'lucide-react';

interface Props {
  stats: GameStats;
  day: number;
  onUpdateStats: (newStats: Partial<GameStats>) => void;
  onSetDay: (day: number) => void;
  onTriggerEvent: (event: GameEvent) => void;
}

const GMPanel: React.FC<Props> = ({ stats, day, onUpdateStats, onSetDay, onTriggerEvent }) => {
  const [isOpen, setIsOpen] = useState(false);

  if (!isOpen) {
    return (
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 p-3 bg-stone-800 text-white rounded-full shadow-lg hover:bg-stone-700 z-[100] opacity-50 hover:opacity-100 transition-opacity"
      >
        <Wrench size={20} />
      </button>
    );
  }

  const allEvents: GameEvent[] = [
    ...STORY_QUESTS,
    ...SIDE_STORIES,
    ...SUDDEN_EVENTS,
    ...RANDOM_EVENTS,
    ...RANDOM_EVENTS_EXTRA,
    ...DAILY_ACTIONS
  ];

  return (
    <div className="fixed bottom-4 right-4 w-80 bg-white shadow-2xl rounded-xl border-4 border-black z-[100] p-4 text-sm font-sans">
      <div className="flex justify-between items-center mb-4 border-b-2 border-black pb-2">
        <h3 className="font-black text-stone-800 flex items-center gap-2 uppercase tracking-tighter"><Wrench size={16} /> GM Debug Console</h3>
        <button onClick={() => setIsOpen(false)} className="text-stone-400 hover:text-stone-600"><X size={16}/></button>
      </div>

      <div className="space-y-4 max-h-[60vh] overflow-y-auto no-scrollbar">
        {/* Day Control */}
        <div>
            <label className="block text-xs font-black text-stone-500 mb-1 uppercase">Set Current Day</label>
            <input 
                type="number" 
                value={day} 
                onChange={(e) => onSetDay(parseInt(e.target.value) || 1)}
                className="w-full border-2 border-black rounded p-1 font-mono"
            />
        </div>

        {/* Stats Control */}
        <div className="grid grid-cols-2 gap-2">
            {(Object.keys(stats) as Array<keyof GameStats>).map(key => (
                <div key={key}>
                    <label className="block text-[10px] font-black text-stone-500 mb-0.5 capitalize">{key}</label>
                    <input 
                        type="number"
                        value={stats[key]}
                        onChange={(e) => onUpdateStats({ [key]: parseInt(e.target.value) || 0 })}
                        className="w-full border-2 border-black rounded p-1 font-mono text-xs"
                    />
                </div>
            ))}
        </div>

        {/* Event Trigger */}
        <div>
            <label className="block text-xs font-black text-stone-500 mb-1 uppercase">Instant Trigger Event</label>
            <select 
                className="w-full border-2 border-black rounded p-1 text-xs"
                onChange={(e) => {
                    const evt = allEvents.find(ev => ev.id === e.target.value);
                    if (evt) onTriggerEvent(evt);
                }}
                defaultValue=""
            >
                <option value="" disabled>-- Select Event to Launch --</option>
                <optgroup label="Daily Actions">
                    {DAILY_ACTIONS.map(e => <option key={e.id} value={e.id}>{e.title}</option>)}
                </optgroup>
                <optgroup label="Main Quests (Stage)">
                    {STORY_QUESTS.map(e => <option key={e.id} value={e.id}>{e.title}</option>)}
                </optgroup>
                <optgroup label="Side Quests">
                    {SIDE_STORIES.map(e => <option key={e.id} value={e.id}>{e.title}</option>)}
                </optgroup>
                <optgroup label="Sudden Events">
                    {SUDDEN_EVENTS.map(e => <option key={e.id} value={e.id}>{e.title}</option>)}
                </optgroup>
                <optgroup label="Meme Events">
                    {RANDOM_EVENTS_EXTRA.map(e => <option key={e.id} value={e.id}>{e.title}</option>)}
                </optgroup>
                <optgroup label="Random Events">
                    {RANDOM_EVENTS.map(e => <option key={e.id} value={e.id}>{e.title}</option>)}
                </optgroup>
            </select>
        </div>
      </div>
    </div>
  );
};

export default GMPanel;
