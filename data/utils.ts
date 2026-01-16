
export const roll = (chance: number): boolean => Math.random() * 100 < chance;

export const pick = <T>(array: T[]): T => array[Math.floor(Math.random() * array.length)];

export const getImg = (text: string, color: string): string => 
    `https://placehold.co/600x400/${color}/ffffff?text=${encodeURIComponent(text)}`;
