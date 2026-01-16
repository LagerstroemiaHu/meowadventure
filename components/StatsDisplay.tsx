
import React from 'react';
import { GameStats } from '../types';
import { Heart, Fish, Zap, Brain } from 'lucide-react';

interface Props {
  stats: GameStats;
  className?: string;
}

const StatBar = ({ 
  icon: Icon, 
  value, 
  color, 
  label 
}: { 
  icon: any, 
  value: number, 
  color: string, 
  label: string 
}) => (
  <div className="flex flex-col flex-1 h-full justify-center px-1 md:px-3 border-r-[2px] md:border-r-[4px] border-black last:border-r-0 bg-white">
    <div className="flex justify-between items-end mb-0.5">
      <div className="flex items-center gap-1">
        <Icon size={12} className="text-black shrink-0" strokeWidth={3} />
        <span className="text-[8px] md:text-[10px] font-black uppercase leading-none tracking-tighter truncate">{label}</span>
      </div>
      <span className="text-[12px] md:text-[18px] font-black font-mono leading-none">{Math.round(value)}</span>
    </div>
    <div className="w-full h-1.5 md:h-3 border-[2px] md:border-[3px] border-black bg-stone-100 relative overflow-hidden shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]">
      <div 
        className={`h-full transition-all duration-700 ease-out ${color} ${value < 30 ? 'animate-pulse' : ''}`} 
        style={{ width: `${Math.max(0, Math.min(100, value))}%` }}
      />
    </div>
  </div>
);

const StatsDisplay: React.FC<Props> = ({ stats, className = '' }) => {
  return (
    <div className={`flex h-full w-full ${className}`}>
        <StatBar icon={Heart} value={stats.health} color="bg-rose-500" label="健康" />
        <StatBar icon={Fish} value={stats.satiety} color="bg-amber-500" label="饱腹" />
        <StatBar icon={Zap} value={stats.hissing} color="bg-purple-600" label="哈气" />
        <StatBar icon={Brain} value={stats.smarts} color="bg-blue-500" label="智力" />
    </div>
  );
};

export default StatsDisplay;
