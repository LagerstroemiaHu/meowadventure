
import { Character } from '../types';

export const CHARACTERS: Character[] = [
    {
        id: 'senior_cat',
        name: '圆头耄耋',
        description: '名字源于“猫爹”的谐音。拥有一颗硕大圆润的脑袋和凶狠的眼神。虽然动作不再敏捷，但那是历经百战的霸气，而非衰老。',
        avatar: 'pics/idle/stray.jpg', // Updated to relative path
        initialStats: {
            health: 60, 
            satiety: 60,
            hissing: 40, // 初始哈气值提高，体现凶狠
            smarts: 30
        },

        statMultipliers: {
            health: 1.0,
            satiety: 1.0,
            hissing: 1.5, // 容易获得哈气值
            smarts: 0.8
        }
    },
    {
        id: 'professor_orange',
        name: '橘座教授',
        description: '戴着隐形眼镜的高智商橘猫。虽然不太能打，但擅长利用人类的规则。胃口像黑洞一样，很难吃饱。',
        avatar: 'https://placehold.co/200x200/ea580c/FFFFFF.png?text=PROF',
        initialStats: { 
            health: 50, 
            satiety: 50, 
            hissing: 10, 
            smarts: 60 
        },
        locked: true,
     
        statMultipliers: {
            health: 1.0,
            satiety: 0.8,
            hissing: 0.6,
            smarts: 1.3
        }
    },
    {
        id: 'locked_cat',
        name: '敬请期待',
        description: '???',
        avatar: 'https://placehold.co/200x200/333333/FFFFFF.png?text=?',
        initialStats: { health: 0, satiety: 0, hissing: 0, smarts: 0 },
        statMultipliers: { health: 1, satiety: 1, hissing: 1, smarts: 1 },
        locked: true
    }
];
