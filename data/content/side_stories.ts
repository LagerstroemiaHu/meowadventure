
import { GameEvent } from '../../types';
import { roll, pick, getImg } from '../utils';

export const SIDE_STORIES: GameEvent[] = [
    // ===================== 哈基米恋爱线 =====================
    {
        id: 'side_hakimi_1',
        chainId: 'hakimi_love',
        title: '支线：哈基米之恋',
        description: '你听到一阵魔性的旋律：“哈基米~哈基米~”。一只舞步轻盈的猫咪正在便利店门口踩着节奏，那是一只甜美的三花。',
        image: getImg('哈基米', 'f472b6'),
        type: 'SIDE_QUEST',
        allowedStages: ['STRAY'],
        unlockCondition: (day) => ({ unlocked: day >= 2, reason: '需第2天' }),
        choices: [
            {
                id: 'join_dance',
                text: '加入节奏：哈基米！',
                calculateChance: (stats) => 80,
                effect: (stats) => {
                    if (roll(80)) {
                        return {
                            changes: { hissing: -5, satiety: -5, smarts: -2 },
                            message: '你跟上了她的节拍！她停下来看着你，眼神拉丝：“哈基米，你这家伙，舞跳得不错嘛。” 你们交换了微信号（气味）。',
                            success: true,
                            effectType: 'heal'
                        }
                    }
                    return {
                        changes: { hissing: 2 },
                        message: '你踩到了她的脚，音乐戛然而止。她嫌弃地看着你：“下头猫，真晦气。”',
                        success: false,
                        effectType: 'damage'
                    }
                }
            },
            {
                id: 'reject_type',
                text: '不是我的Type',
                calculateChance: (stats) => 100,
                effect: (stats) => ({
                    changes: { hissing: 2 },
                    message: '你冷酷地走开了。心中无女人，拔刀自然神。这种只会跳舞的猫，不是我喜欢的类型，直接拒绝。',
                    success: false, // 标记为false表示未开启后续
                    effectType: 'neutral'
                })
            }
        ]
    },
    {
        id: 'side_hakimi_2',
        chainId: 'hakimi_love',
        title: '支线：南北绿豆汤',
        description: '哈基米约你在垃圾桶后面的秘密基地见面。她端出了两碗颜色可疑的液体，问你：“你猜这是甜的还是咸的？”',
        image: getImg('绿豆汤之约', '10b981'),
        type: 'SIDE_QUEST',
        allowedStages: ['STRAY', 'CAT_LORD'],
        unlockCondition: (day, stats, completed, history) => ({
            unlocked: completed.includes('side_hakimi_1') && history.includes('join_dance') && day > 5,
            reason: '需认识哈基米'
        }),
        choices: [
            {
                id: 'drink_soup',
                text: '干了这碗绿豆汤',
                calculateChance: (stats) => 60,
                effect: (stats) => {
                    if (roll(60)) {
                        return {
                            changes: { satiety: 20, health: 5, hissing: -5 },
                            message: '不管是甜党还是咸党，此刻的氛围是甜的。你们一起喝了南北绿豆汤，她靠在了你的肩膀上，夕阳无限好。',
                            success: true,
                            effectType: 'heal'
                        }
                    }
                    return {
                        changes: { satiety: -5, smarts: -2 },
                        message: '你猛地醒来，发现自己在舔一个绿色的塑料袋。原来是饿出幻觉了...又幻想了...幻想...小猫咪能有什么坏心眼呢？',
                        success: false,
                        effectType: 'damage'
                    }
                }
            }
        ]
    },
    {
        id: 'side_hakimi_3',
        chainId: 'hakimi_love',
        title: '支线：豪宅里的孤独',
        description: '你现在住进了豪宅/成了网红，拥有一切。哈基米站在落地窗外看着你，眼神复杂。窗外的风很大，窗内的暖气很足。',
        image: getImg('豪宅与野猫', '3b82f6'),
        type: 'SIDE_QUEST',
        allowedStages: ['MANSION', 'CELEBRITY'],
        unlockCondition: (day, stats, completed, history) => ({
            unlocked: completed.includes('side_hakimi_2') && history.includes('drink_soup'),
            reason: '需前缘未了'
        }),
        choices: [
            {
                id: 'confess_lonely',
                text: '坦白孤独',
                calculateChance: (stats) => 90,
                effect: (stats) => {
                    return {
                        changes: { health: 10, hissing: -10, smarts: 5 },
                        message: '你打开了窗户，深情地说：“我的豪宅里有许多小鱼干，但现实中的朋友没有几个。” 哈基米跳了进来，虽然你失去了野性，但收获了爱情。',
                        success: true,
                        effectType: 'heal'
                    }
                }
            },
            {
                id: 'galgame_option',
                text: '试图读档/送礼',
                calculateChance: (stats) => 10,
                effect: (stats) => {
                    return {
                        changes: { hissing: 5, smarts: -5 },
                        message: '你试图寻找“赠送礼物”的按钮。哈基米冷笑：“在噶拉给目（Galgame）里根本不是这样的，你应该先提升我的好感度。” 说完，她的建模消失在了夜色中。',
                        success: false,
                        effectType: 'damage'
                    }
                }
            }
        ]
    },

    // ===================== 原有支线 (保持不变) =====================
    {
        id: 'side_apprentice_1',
        chainId: 'apprentice',
        title: '支线：废柴徒弟',
        description: '你在垃圾桶后面发现了一只被遗弃的长毛猫。它看起来连抓老鼠都不会，饿得喵喵叫。',
        image: getImg('落魄猫咪', 'd97706'),
        type: 'SIDE_QUEST',
        allowedStages: ['STRAY'],
        unlockCondition: (day) => ({ unlocked: day >= 1, reason: '需第1天' }),
        choices: [
            {
                id: 'choice_teach_apprentice',
                text: '教它生存之道',
                calculateChance: (stats) => 80,
                effect: (stats) => {
                    if (roll(80)) {
                        return {
                            changes: { hissing: -2, smarts: 8, satiety: -5 },
                            message: '你分了它一点食物，耐心地教它如何翻找垃圾。它感激地叫你“师父”，并记住了你的技巧。',
                            success: true,
                            effectType: 'neutral'
                        }
                    }
                    return {
                        changes: { satiety: -5, smarts: 2 },
                        message: '它太笨了，学不会。你浪费了一顿饭的时间和精力。',
                        success: false,
                        effectType: 'damage'
                    }
                }
            },
            {
                id: 'choice_rob_apprentice',
                text: '抢走它的铃铛',
                calculateChance: (stats) => 90,
                effect: (stats) => {
                    if (roll(90)) {
                        return {
                            changes: { hissing: 10, satiety: 5, smarts: -2 },
                            message: '你抢走了它脖子上的名牌铃铛去换了食物。虽然残忍，但这就是街头。',
                            success: true,
                            effectType: 'damage'
                        }
                    }
                    return {
                        changes: { health: -5, hissing: 5 },
                        message: '这小猫反抗剧烈，抓伤了你的鼻子。',
                        success: false,
                        effectType: 'damage'
                    }
                }
            }
        ]
    },
    {
        id: 'side_apprentice_2_good',
        chainId: 'apprentice',
        title: '支线：徒弟的报恩',
        description: '你又见到了那个废柴。它现在强壮多了，叼着一只肥老鼠等在路口，那是给你的。',
        image: getImg('徒弟的报恩', 'fbbf24'),
        type: 'SIDE_QUEST',
        allowedStages: ['STRAY', 'CAT_LORD'],
        unlockCondition: (day, stats, completed = [], history = [], completedAt = {}) => {
            const finishedDay = completedAt['side_apprentice_1'];
            const isFinished = completed.includes('side_apprentice_1');
            const isGoodPath = history.includes('choice_teach_apprentice');
            
            const unlocked = isFinished && isGoodPath && finishedDay !== undefined && day > finishedDay;
            
            let reason = '需前置情谊';
            if (isFinished && isGoodPath && day <= finishedDay) reason = '明日方会出现';
            
            return { unlocked, reason };
        },
        choices: [
            {
                id: 'choice_accept_gift',
                text: '欣慰吃下',
                calculateChance: (stats) => 100,
                effect: (stats) => ({
                    changes: { satiety: 25, health: 5, smarts: 5 },
                    message: '孺子可教！你感受到了一种作为长辈的成就感，你的智慧和饱腹感都得到了提升。',
                    success: true,
                    effectType: 'heal'
                })
            }
        ]
    },
    {
        id: 'side_egg_crisis',
        chainId: 'eggs',
        title: '支线：蛋蛋的忧伤',
        description: '豪宅的主人在谈论“拆弹计划”。他们看你的眼神充满了某种危险的关爱。',
        image: getImg('绝育危机', 'ef4444'),
        type: 'SIDE_QUEST',
        allowedStages: ['MANSION'],
        unlockCondition: (day) => ({ unlocked: day >= 7, reason: '需在豪宅待一段时日' }),
        choices: [
            {
                id: 'choice_egg_surrender',
                text: '顺从命运 (永久失去蛋蛋)',
                calculateChance: (stats) => 100,
                effect: (stats) => ({
                    changes: { health: 25, hissing: -30, satiety: 15 },
                    message: '手术很成功。你感觉身体轻盈了，对世俗的纷争也失去了兴趣，健康大幅回升。',
                    success: true,
                    effectType: 'heal'
                })
            },
            {
                id: 'choice_egg_resist',
                text: '誓死捍卫！',
                calculateChance: (stats) => Math.min(95, 30 + stats.hissing * 0.6),
                effect: (stats) => {
                    if (roll(30 + stats.hissing * 0.6)) {
                        return { 
                            changes: { hissing: 10, smarts: 5, health: -5 }, 
                            message: '你把航空箱抓烂了，并躲在吊顶里三天没出来。他们暂时放弃了念头。', 
                            success: true,
                            effectType: 'neutral'
                        };
                    }
                    return { 
                        changes: { health: 5, hissing: -20, satiety: 5 }, 
                        message: '反抗失败，你还是被带去了诊所。你失去了蛋蛋，还被扣了几天罐头。', 
                        success: false, 
                        effectType: 'damage' 
                    };
                }
            }
        ]
    },
    {
        id: 'side_hater_war',
        chainId: 'internet',
        title: '支线：键盘侠反击',
        description: '网上有人公开diss你，说你这只圆头猫全是摆拍，其实性格极其恶劣。',
        image: getImg('网络战争', '3b82f6'),
        type: 'SIDE_QUEST',
        allowedStages: ['CELEBRITY'],
        choices: [
            {
                id: 'choice_hater_ignore',
                text: '不予理睬',
                calculateChance: (stats) => 90,
                effect: (stats) => ({
                    changes: { smarts: 5, hissing: -5 },
                    message: '智者不入爱河，强者不理键盘。你的大度反而引来了更多路人粉，智商上线。',
                    success: true,
                    effectType: 'neutral'
                })
            },
            {
                id: 'choice_hater_attack',
                text: '直播对线',
                calculateChance: (stats) => 50,
                effect: (stats) => {
                    if (roll(50)) {
                        return {
                            changes: { hissing: 10, smarts: -2, satiety: 5 },
                            message: '你对着镜头哈了十分钟气，反向带货。流量爆炸了，但你的猫设变得暴力。',
                            success: true,
                            effectType: 'damage'
                        }
                    }
                    return {
                        changes: { hissing: 5, smarts: -5, health: -5 },
                        message: '对线失败，你被网友挖出了以前偷吃狗粮的黑料，气得肝疼。',
                        success: false,
                        effectType: 'damage'
                    }
                }
            }
        ]
    }
];