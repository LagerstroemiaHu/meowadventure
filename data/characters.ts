
import { Character } from '../types';

export const CHARACTERS: Character[] = [
    {
        id: 'senior_cat',
        name: '圆头耄耋',
        description: '一只历经沧桑的老猫。虽然身体机能下降，但经验丰富，头特别圆。',
        avatar: 'https://placehold.co/200x200/f59e0b/FFFFFF.png?text=CAT',
        initialStats: {
            health: 60, 
            satiety: 60,
            hissing: 20,
            smarts: 30
        }
    },
    {
        id: 'locked_cat',
        name: '敬请期待',
        description: '???',
        avatar: 'https://placehold.co/200x200/333333/FFFFFF.png?text=?',
        initialStats: { health: 0, satiety: 0, hissing: 0, smarts: 0 },
        locked: true
    }
];
