
import React from 'react';
import { EndingType } from '../types';
import { Skull, Crown, Star, Home, Cat, ArrowLeft, Lock, Sword, Fish, UserX, Heart, Trash2, Armchair, Timer, Smartphone, Camera, Trophy, Zap, Ghost } from 'lucide-react';

interface Props {
  unlockedEndings: EndingType[];
  onBack: () => void;
}

const ENDING_CONFIG: Record<EndingType, { title: string; desc: string; icon: any; color: string }> = {
  DOMESTICATED: { title: "被驯化", desc: "你的哈气值归零。你放弃了流浪猫的尊严，成为了人类的宠物。其实，软饭也很香。", icon: Home, color: "text-pink-500" },
  STARVED: { title: "饿死街头", desc: "流浪生活是残酷的。你在饥寒交迫中闭上了眼睛。", icon: Skull, color: "text-stone-500" },
  STRAY_HEALTH_0: { title: "冻毙荒野", desc: "在某个寒冷的冬夜，你再也没有睁开眼。", icon: Ghost, color: "text-stone-400" },
  STRAY_SATIETY_0: { title: "饥饿的终点", desc: "寻遍了三条街，却没能找到一口吃的。", icon: Skull, color: "text-stone-600" },
  STRAY_HISSING_0: { title: "被收编的灵魂", desc: "放弃了抵抗，有了名字，却失去了荒野。", icon: Home, color: "text-rose-400" },
  
  LORD_HEALTH_0: { title: "帮派喋血", desc: "王座之下皆是枯骨，死得像个斗士。", icon: Sword, color: "text-red-600" },
  LORD_SATIETY_0: { title: "饿死的狮子", desc: "领主的尊严让你付出了最后的代价。", icon: Fish, color: "text-purple-400" },
  LORD_HISSING_0: { title: "威严扫地", desc: "你变得太温顺了，被赶出了领地。", icon: UserX, color: "text-stone-400" },
  
  MANSION_HEALTH_0: { title: "富贵病", desc: "顶级罐头和缺乏运动毁了你的老心脏。", icon: Heart, color: "text-rose-600" },
  MANSION_SATIETY_0: { title: "被逐出家门", desc: "因为过度挑食激怒了主人，被扔回街头。", icon: Trash2, color: "text-stone-700" },
  MANSION_HISSING_0: { title: "彻底玩偶化", desc: "你穿上了粉色裙子，任由人类摆布。", icon: Armchair, color: "text-sky-400" },
  
  CELEBRITY_HEALTH_0: { title: "过劳死", desc: "没完没了的直播榨干了最后一丝精力。", icon: Timer, color: "text-rose-500" },
  CELEBRITY_SATIETY_0: { title: "过气明星", desc: "流量退去，在奢华公寓里渐渐虚弱。", icon: Smartphone, color: "text-stone-500" },
  CELEBRITY_HISSING_0: { title: "工业假猫", desc: "你不再是一只猫，而是一个赚钱符号。", icon: Camera, color: "text-stone-400" },
  
  STUPID: { title: "好奇害死猫", desc: "你的智商不足以支撑你活到明天。", icon: Skull, color: "text-stone-700" },
  OLD_CAT: { title: "耄耋传奇", desc: "活过了15天，生存本身就是胜利。", icon: Cat, color: "text-amber-600" },
  LORD_ONLY: { title: "街头教父", desc: "你统治了这片区域，直到老死。", icon: Crown, color: "text-purple-600" },
  SUPERSTAR: { title: "喵星巨星", desc: "征服了街头、豪宅和互联网！", icon: Star, color: "text-amber-400" },
  
  END_APPRENTICE_MASTER: { title: "师徒同心", desc: "不仅登上了神坛，还培养了完美的继承人。", icon: Trophy, color: "text-amber-500" },
  END_APPRENTICE_REVENGE: { title: "众叛亲离", desc: "被你欺辱的徒弟正带着帮派在阴影中注视着你。", icon: Ghost, color: "text-rose-900" },
  END_EGG_FREEDOM: { title: "自由的灵魂", desc: "捍卫了身体的完整，自由跑路！", icon: Zap, color: "text-yellow-400" },
};

const Gallery: React.FC<Props> = ({ unlockedEndings, onBack }) => {
  const allEndings = Object.keys(ENDING_CONFIG) as EndingType[];

  return (
    <div className="h-screen flex flex-col items-center p-4 bg-stone-100 overflow-y-auto custom-scrollbar">
      <div className="w-full max-w-4xl pb-10">
        <button 
          onClick={onBack}
          className="mb-8 flex items-center gap-2 font-black uppercase text-xl hover:text-amber-600 transition-colors"
        >
          <ArrowLeft size={24} strokeWidth={3} /> 返回
        </button>

        <h1 className="text-4xl font-black mb-2 uppercase italic tracking-tighter">猫生成就 (LEGENDS)</h1>
        <p className="text-stone-500 font-bold mb-8 uppercase text-xs tracking-widest">收集所有可能的猫生结局 ({unlockedEndings.length}/{allEndings.length})</p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
          {allEndings.map((type) => {
            const isUnlocked = unlockedEndings.includes(type);
            const config = ENDING_CONFIG[type];
            const Icon = config.icon;

            return (
              <div 
                key={type}
                className={`
                  relative border-[3px] md:border-4 p-4 md:p-6 min-h-[140px] md:min-h-[160px] flex flex-col items-center justify-center text-center transition-all
                  ${isUnlocked 
                    ? 'bg-white border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]' 
                    : 'bg-stone-200 border-stone-400 text-stone-400 border-dashed'}
                `}
              >
                {isUnlocked ? (
                  <>
                    <Icon size={32} className={`mb-2 md:mb-4 ${config.color}`} strokeWidth={2.5} />
                    <h3 className="text-[10px] md:text-xl font-black uppercase mb-1 leading-none">{config.title}</h3>
                    <p className="text-[7px] md:text-xs font-bold text-stone-500 leading-tight line-clamp-2">{config.desc}</p>
                  </>
                ) : (
                  <>
                     <Lock size={24} className="mb-2 opacity-50" />
                     <p className="font-black text-[10px] md:text-sm uppercase tracking-tighter">LOCKED</p>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
