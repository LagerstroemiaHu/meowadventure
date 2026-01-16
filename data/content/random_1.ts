
import { GameEvent } from '../../types';
import { roll, pick, getImg } from '../utils';

export const RANDOM_EVENTS_EXTRA: GameEvent[] = [
  {
      id: 'sell_fish_brother',
      title: '卖鱼强哥的兵法',
      description: '菜市场深处，一个穿着旧夹克的鱼贩子正如痴如醉地读着《孙子兵法》。他的眼神深邃，让你想起了那句：“风浪越大，鱼越贵。”',
      image: getImg('强哥卖鱼', '0369a1'),
      type: 'RANDOM',
      choices: [
          {
              id: 'read_art_of_war',
              text: '和他一起读《兵法》',
              calculateChance: (stats) => Math.min(95, 30 + stats.smarts * 0.6),
              effect: (stats) => {
                  if (roll(30 + stats.smarts * 0.6)) {
                      const msg = pick([
                          '你悟出了“围师必阙”的道理。以后堵老鼠更有心得了。',
                          '强哥摸了摸你的头：“这只猫有当大佬的潜质。” 你的气质变得更加冷酷。',
                          '你学会了如何用眼神压制对手。哈气值暴涨。'
                      ]);
                      return { changes: { smarts: 10, hissing: 10 }, message: msg, success: true, effectType: 'neutral' };
                  }
                  const failMsg = pick([
                      '书太深奥了，你看得直打瞌睡。',
                      '你试图翻书，结果把书抓破了。强哥默默地拿起了杀鱼刀...',
                      '你没悟出兵法，只学会了怎么装深沉。'
                  ]);
                  return { changes: { smarts: -2, hissing: 3 }, message: failMsg, success: false, effectType: 'neutral' };
              }
          },
          {
              id: 'eat_fish',
              text: '告诉老默我想吃鱼了',
              calculateChance: (stats) => 50,
              effect: (stats) => {
                  if (roll(50)) {
                      const msg = pick([
                          '老默面无表情地丢给你一条刚杀的鱼。这鱼充满了江湖的味道。',
                          '强哥笑了：“给这只猫安排一下。” 你享受了一顿免费的霸王餐。',
                          '你得到了一条大鱼，但你也感觉自己欠了某种还不起的人情。'
                      ]);
                      return { changes: { satiety: 25, health: 5, hissing: 5 }, message: msg, success: true, effectType: 'heal' };
                  }
                  const failMsg = pick([
                      '老默冷冷地看了你一眼。你感觉背脊发凉，落荒而逃。',
                      '你刚想偷鱼，就被一条冻硬的咸鱼拍飞了。',
                      '“你什么档次，跟我吃一样的鱼？” 你被轰了出去。'
                  ]);
                  return { changes: { health: -10, hissing: -2 }, message: failMsg, success: false, effectType: 'damage' };
              }
          }
      ]
  },
  {
      id: 'true_fragrance',
      title: '真香定律的轮回',
      description: '面前放着一碗看起来像是隔夜的炒饭。你的尊严告诉你：流浪猫也是有底线的！我就是饿死，死外边，从这里跳下去，也不会吃你们一点东西！',
      image: getImg('真香炒饭', 'd97706'),
      type: 'RANDOM',
      choices: [
          {
              id: 'deny_eat',
              text: '傲娇拒绝 (然后...)',
              calculateChance: (stats) => 60, // 60%概率触发真香
              effect: (stats) => {
                  if (roll(60)) {
                      const msg = pick([
                          '两分钟后... “真香！” 你把脸埋进饭碗里，吃得比谁都快。尊严-100，饱腹+100。',
                          '你本想拒绝，但身体很诚实。这炒饭里竟然有火腿丁！真香！',
                          '你打破了誓言。在饥饿面前，所有猫都会变成王境泽。'
                      ]);
                      return { changes: { satiety: 25, hissing: -5, smarts: -2 }, message: msg, success: true, effectType: 'heal' };
                  }
                  const failMsg = pick([
                      '你真的饿着肚子走了。虽然保住了尊严，但差点饿晕在路边。',
                      '你刚想回头吃，饭就被狗抢走了。这就是傲娇的代价。',
                      '你坚守了底线，但底线不能当饭吃。胃在抽搐。'
                  ]);
                  return { changes: { satiety: -10, health: -5, hissing: 5 }, message: failMsg, success: false, effectType: 'damage' };
              }
          },
          {
              id: 'eat_now',
              text: '直接吃 (无聊)',
              calculateChance: (stats) => 100,
              effect: (stats) => {
                  const msg = pick([
                      '你直接吃了。没有任何戏剧性，只是一顿普通的饭。',
                      '填饱了肚子，但失去了一个成为网红表情包的机会。',
                      '味道一般，勉强果腹。'
                  ]);
                  return { changes: { satiety: 15 }, message: msg, success: true, effectType: 'neutral' };
              }
          }
      ]
  },
  {
      id: 'white_door',
      title: '白色的异次元之门',
      description: '你看到了一个发光的白色矩形（可能是手机屏幕，也可能是一扇门）。一个声音在你脑海中回荡：“异世相遇，尽享美味...”',
      image: getImg('启动！', 'f3f4f6'),
      type: 'RANDOM',
      choices: [
          {
              id: 'start_game',
              text: '触碰：启动！',
              calculateChance: (stats) => 50,
              effect: (stats) => {
                  if (roll(50)) {
                      const msg = pick([
                          '你的意识进入了提瓦特大陆。虽然身体在现实中饿着，但精神得到了极大的满足。原来你是一只草元素猫。',
                          '你盯着屏幕看了一整天。虽然智力下降了，但你觉得那个叫“可莉”的家伙和你一样喜欢炸鱼。',
                          '门酱附体！你摆出了一个奇怪的姿势。虽然很蠢，但很有趣。'
                      ]);
                      return { changes: { smarts: -5, satiety: -5, health: 5 }, message: msg, success: true, effectType: 'sleep' };
                  }
                  const failMsg = pick([
                      '你的手机没电了/门关上了。巨大的空虚感袭来。',
                      '你被强光晃瞎了眼，什么也没发生，除了短暂的失明。',
                      '有人大喊“OP收收味”，把你踢回了现实。'
                  ]);
                  return { changes: { smarts: -2, hissing: 5 }, message: failMsg, success: false, effectType: 'damage' };
              }
          },
          {
              id: 'guard_door',
              text: '守护这扇门',
              calculateChance: (stats) => 90,
              effect: (stats) => {
                  const msg = pick([
                      '你像个守门员一样挡在发光体前。谁也别想过去！哈气值提升。',
                      '你成为了“门之主”。路过的猫都觉得你疯了，但你觉得自己很帅。',
                      '你拒绝了二次元的诱惑，坚守了三次元的猫生。'
                  ]);
                  return { changes: { hissing: 10, smarts: 4 }, message: msg, success: true, effectType: 'neutral' };
              }
          }
      ]
  }
];