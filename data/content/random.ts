
import { GameEvent } from '../../types';
import { roll, pick, getImg } from '../utils';

export const RANDOM_EVENTS: GameEvent[] = [
  {
      id: 'snow_leopard_boy',
      title: '淳朴的少年',
      description: '你遇到了一位眼神清澈的少年，他手里拿着话筒。他的身边似乎跟着一只白色的猛兽，少年正在对着它大喊：“雪豹闭嘴！”',
      image: getImg('雪豹闭嘴', '0ea5e9'),
      type: 'RANDOM',
      choices: [
          {
              id: 'approach_beast',
              text: '挑衅那只“大猫”',
              calculateChance: (stats) => 50,
              effect: (stats) => {
                  if (roll(50)) {
                      const msg = pick([
                          '你冲上去哈气，结果发现那是电子烟雾幻化成的雪豹。少年赞赏你的勇气：“这是悦刻五代。”',
                          '那只雪豹被你的气势震慑，居然发出了一声“喵”。原来是只染色的家猫。',
                          '少年把你抱了起来，对着镜头说：“家人们，这是我在理塘捡到的猞猁。”你火了。'
                      ]);
                      return { changes: { hissing: 5, smarts: 2, satiety: 2 }, message: msg, success: true, effectType: 'neutral' };
                  }
                  const failMsg = pick([
                      '那真的是一只雪豹！它给了你一巴掌。你飞出了三米远。',
                      '少年把你当成了电子烟，对着你猛吸了一口。你差点窒息。',
                      '你被少年的高音震晕了。这就是顶流的压迫感吗？'
                  ]);
                  return { changes: { health: -10, hissing: -2 }, message: failMsg, success: false, effectType: 'damage' };
              }
          },
          {
              id: 'listen_song',
              text: '聆听他的歌声',
              calculateChance: (stats) => 100,
              effect: (stats) => {
                  const msg = pick([
                      '他唱起了《Zood》。那空灵的嗓音净化了你的心灵，虽然你一句也没听懂。',
                      '你感觉自己在草原上奔跑，周围全是名为“芝士”的小马。',
                      '你悟出了“回笼”的真谛。世界变得简单而纯粹。'
                  ]);
                  return { changes: { smarts: -2, health: 5, hissing: -5 }, message: msg, success: true, effectType: 'heal' };
              }
          }
      ]
  },
  {
      id: 'intestine_judge',
      title: '顶级厨师的试炼',
      description: '一位胖胖的厨师端着一盘九转大肠站在你面前。他的眼神中透露着一丝狡黠和骄傲。评委正死死盯着他。',
      image: getImg('九转大肠', 'b45309'),
      type: 'RANDOM',
      choices: [
          {
              id: 'taste_it',
              text: '品尝一口',
              calculateChance: (stats) => 60,
              effect: (stats) => {
                  if (roll(60)) {
                      const msg = pick([
                          '这是...猫屎味？不，是发酵的艺术！你作为一只猫，居然觉得有点上头。',
                          '你品尝到了人生百味。酸甜苦辣咸，还有那一抹无法忽视的...原味。',
                          '你的味蕾被重击了，但你的肠胃居然适应了这种强度。饱腹感+MAX。'
                      ]);
                      return { changes: { satiety: 25, health: -2, smarts: 2 }, message: msg, success: true, effectType: 'neutral' };
                  }
                  const failMsg = pick([
                      '呕！你当场把隔夜饭吐了出来。这根本不是给人吃的，也不是给猫吃的！',
                      '那种直冲天灵盖的腥臭味让你晕了过去。这是生化武器！',
                      '你愤怒地打翻了盘子。评委曹可凡给你点了个赞。'
                  ]);
                  return { changes: { health: -15, satiety: -10 }, message: failMsg, success: false, effectType: 'damage' };
              }
          },
          {
              id: 'ask_intent',
              text: '是故意的还是不小心的？',
              calculateChance: (stats) => 100,
              effect: (stats) => {
                  const msg = pick([
                      '厨师挺起胸膛：“是故意的！” 你被这种诚实（和无耻）震撼了。智力+10。',
                      '他承认保留了一部分原味，为了让你知道你吃的是大肠。多么朴素的真理。',
                      '你通过眼神确认了，他是带着骄傲端上来的。你默默敬了个礼，然后跑路。'
                  ]);
                  return { changes: { smarts: 5, hissing: 2 }, message: msg, success: true, effectType: 'neutral' };
              }
          }
      ]
  },
  {
      id: 'macarthur_review',
      title: '五星上将的点评',
      description: '周围的空气突然凝固，背景音乐变成了严肃的纪录片风格。一个深沉的男声响起：“如果让我去评价这只猫...”',
      image: getImg('大型纪录片', '1e1b4b'),
      type: 'RANDOM',
      choices: [
          {
              id: 'accept_review',
              text: '接受采访',
              calculateChance: (stats) => 90,
              effect: (stats) => {
                  const msg = pick([
                      '麦克阿瑟表示：这只猫的圆头比我的军衔还要闪耀。连我也要在它的哈气面前退避三舍。',
                      '五星上将评论道：当年我在菲律宾如果有这只猫的一半勇气，我也不会撤退得那么狼狈。',
                      '大型纪录片《传奇老猫》正在播出。你的威望值在猫圈达到了顶峰。'
                  ]);
                  return { changes: { hissing: 8, smarts: 2 }, message: msg, success: true, effectType: 'neutral' };
              }
          },
          {
              id: 'salute',
              text: '向将军敬礼',
              calculateChance: (stats) => 50,
              effect: (stats) => {
                  if (roll(50)) {
                      const msg = pick([
                          '你标准地举起了爪子。麦克阿瑟感动落泪，送了你一根在这个年纪睡得着的玉米芯（其实是火腿肠）。',
                          '老兵不死，只是凋零。你们在精神层面达成了共鸣。',
                          '这一刻，你不再是一只流浪猫，你是麦克阿瑟认证的战略合作伙伴。'
                      ]);
                      return { changes: { satiety: 10, hissing: 5 }, message: msg, success: true, effectType: 'heal' };
                  }
                  const failMsg = pick([
                      '你敬礼的时候爪子钩住了胡子，场面一度十分滑稽。纪录片变成了喜剧片。',
                      '旁白突然卡壳了：“这...这只猫在干什么？” 导演喊了卡。',
                      '你把敬礼做成了招财猫的动作。麦克阿瑟觉得你在向他要钱。'
                  ]);
                  return { changes: { smarts: -2 }, message: failMsg, success: false, effectType: 'neutral' };
              }
          }
      ]
  },
  {
      id: 'lightning_whips',
      title: '浑元形意喵：闪电五连鞭',
      description: '你遇到一只穿着对襟小褂的老猫，它自称是混元形意太极门掌门。它突然开始全身疯狂抽动，并对你大喊：“年轻人不讲武德，快来领教我的闪电五连鞭！”',
      image: getImg('闪电五连鞭', '1e1b4b'),
      type: 'RANDOM',
      choices: [
          {
              id: 'learn_whips',
              text: '尝试学习“松果弹抖”',
              calculateChance: (stats) => Math.min(95, 20 + stats.health * 0.6),
              effect: (stats) => {
                  if (roll(20 + stats.health * 0.6)) {
                      const msg = pick([
                          '你掌握了高频振动的精髓！现在的你只要一炸毛，频率快到肉眼看不见。对方被你的气势吓得直呼“耗子尾汁”。',
                          '你悟出了“接化发”的真谛，老猫欣慰地摸了摸你的圆头。你感觉全身充满了武林正气。',
                          '你在抖动中产生了一股神秘的生物电，整条街的感应灯都为你闪烁。老猫直呼你为“奇才”。'
                      ]);
                      return { changes: { hissing: 10, smarts: -2, health: 5 }, message: msg, success: true, effectType: 'neutral' };
                  }
                  const failMsg = pick([
                      '你还没弹抖起来，就因为频率过高导致老腰闪了。大师摇头叹息：“年轻人，你大意了，没有闪。”',
                      '你用力过猛，把自己摔成了“咸鱼大翻身”。大师表示这种武德需要回炉重造。',
                      '你尝试模仿大师，结果看起来像是在抽筋。路过的一只泰迪对你投来了同情的目光。'
                  ]);
                  return { changes: { health: -10, hissing: -5 }, message: failMsg, success: false, effectType: 'damage' };
              }
          },
          {
              id: 'rat_tail_juice',
              text: '劝他“好自为之”',
              calculateChance: (stats) => 100,
              effect: (stats) => {
                  const msg = pick([
                      '你优雅地走开，并留下了一个鄙视的眼神。大师愣在原地，开始反思自己的武德。你的智力得到了社会实践的提升。',
                      '你轻蔑地打了个哈欠，大师气得跳脚，却因为腰椎间盘突出无法追赶。你的冷静赢得了围观猫咪的掌声。',
                      '你留下了一句模糊的“喵（傻）”，飘然而去。这种不战而屈人之兵的境界让你的智力大幅上涨。'
                  ]);
                  return { changes: { smarts: 5, hissing: 2 }, message: msg, success: true, effectType: 'neutral' };
              }
          }
      ]
  },
  {
      id: 'nezha_meatballs',
      title: '魔童降世：哪吒磨丸',
      description: '海边，一个扎着两个揪揪、套着红肚兜的小屁孩正对着一堆食材疯狂研磨。一股混合了仙气和牛肉的香味飘来，这是传说中的“灵珠磨丸”！',
      image: getImg('哪吒磨丸', 'ef4444'),
      type: 'RANDOM',
      choices: [
          {
              id: 'help_grind',
              text: '帮他一起磨（为了吃）',
              calculateChance: (stats) => Math.min(95, 30 + stats.health * 0.5),
              effect: (stats) => {
                  if (roll(30 + stats.health * 0.5)) {
                      const msg = pick([
                          '你用爪子帮他搓出了完美的球体。哪吒很高兴，分了你一颗磨好的金青色肉丸。吃下去后，你感觉浑身充满了混元珠的力量！',
                          '你那圆润的头和磨盘意外地合拍。磨出来的肉丸色泽晶莹。哪吒赏了你一大碗肉糜。',
                          '磨丸过程中你悟出了离心力原理。哪吒觉得你这只猫很上道，和你共享了这顿仙肴。'
                      ]);
                      return { changes: { satiety: 25, health: 10, smarts: 2 }, message: msg, success: true, effectType: 'heal' };
                  }
                  const failMsg = pick([
                      '你磨得太慢了，哪吒不耐烦地一脚把你踢进了海里。海水很凉，你的自尊心和身体都受到了伤害。',
                      '你不小心把口水掉进了磨盘里，哪吒大发雷霆，把你当成混天绫一样甩了三圈。',
                      '你的爪子被磨盘夹住了，痛得你发出了杀猪般的喵叫。肉丸没吃到，反而损兵折将。'
                  ]);
                  return { changes: { health: -8, satiety: -2 }, message: failMsg, success: false, effectType: 'damage' };
              }
          },
          {
              id: 'dragon_warning',
              text: '提醒他：龙王在看着你',
              calculateChance: (stats) => 80,
              effect: (stats) => {
                  const msg = pick([
                      '哪吒停下了手中的磨盘，若有所思地看向大海。他觉得你这只猫很有见地，送了你一块乾坤圈碎屑（其实是块磨牙饼干）。',
                      '由于你的提醒，哪吒避开了巡海夜叉。他称赞你为“猫中诸葛”。',
                      '哪吒觉得你的直觉很准，他分了一些极品和牛给你，让你帮他放哨。'
                  ]);
                  return { changes: { smarts: 8, hissing: 4 }, message: msg, success: true, effectType: 'neutral' };
              }
          }
      ]
  },
  {
      id: 'mamba_destiny',
      title: '曼巴：被改写的命运',
      description: '清晨四点的洛杉矶大雾弥漫。你看到一个穿着紫金24号球衣的巨人正走向一架直升机。你的直觉疯狂预警，那是通往天堂的单程票。',
      image: getImg('凌晨四点的救赎', '4b2a89'),
      type: 'RANDOM',
      allowedStages: ['MANSION', 'CELEBRITY'],
      choices: [
          {
              id: 'mamba_bite',
              text: '死命咬住他的球鞋不松口',
              calculateChance: (stats) => Math.min(95, 20 + stats.hissing * 0.5 + stats.health * 0.3),
              effect: (stats) => {
                  if (roll(20 + stats.hissing * 0.5 + stats.health * 0.3)) {
                      const msg = pick([
                          '你死死咬住那双Kobe 5。他无奈地停下来蹲下安抚你，错过了起飞时间。直升机独自飞入浓雾。你救了一个时代。',
                          '你那锋利的牙齿咬穿了昂贵的皮料。他为了抓住你耽误了时间，远方的雾气中传来闷响。他摸着你的头，一脸庆幸。',
                          '他把你从鞋子上拽下来，准备说教时，看到了新闻。他沉默了很久，给了你一个紧紧的拥抱。Man, what can I say?'
                      ]);
                      return { changes: { health: 10, smarts: 10, hissing: -5 }, message: msg, success: true, effectType: 'heal' };
                  }
                  const failMsg = pick([
                      '你被轻轻拨开了。他回头给了你一个标志性的笑容，转身上了机。旋律响起，那是遗憾的声音。',
                      '你还没跳上去就被保安拎走了。你只能对着天空中远去的螺旋桨发声长叹。',
                      '你的牙齿滑了一下。那个伟岸的身影在浓雾中渐渐消失。See You Again 旋律在脑中回响。'
                  ]);
                  return { changes: { health: -5, hissing: 5 }, message: failMsg, success: false, effectType: 'damage' };
              }
          },
          {
              id: 'mamba_backpack',
              text: '钻进他的背包里撒尿',
              calculateChance: (stats) => Math.min(95, 30 + stats.smarts * 0.6),
              effect: (stats) => {
                  if (roll(30 + stats.smarts * 0.6)) {
                      const msg = pick([
                          '他闻到了异味，不得不回屋更换装备。直升机因塔台指令先行起飞。他摸着你的圆头叹了口气。这泡尿拯救了世界。',
                          '这一招虽然恶心，但极其见效。他不得不留下来清理背包。你看着他避开了死神，深藏功与名。',
                          '异味让他陷入了沉思，他决定今天不出远门了。他不知道，你的一泡尿改变了篮球史。'
                      ]);
                      return { changes: { smarts: 10, hissing: 10, satiety: 5 }, message: msg, success: true, effectType: 'neutral' };
                  }
                  const failMsg = pick([
                      '你钻进去了，但他并没有发现。这下真的 See You Again 了。',
                      '你还没来得及施展，就被他顺手塞进了一个豪华猫包带走了。你不得不面对未知的航程。',
                      '你在背包里睡着了，直到降落。虽然很安全，但你什么都没改变。'
                  ]);
                  return { changes: { hissing: -2, smarts: -2 }, message: failMsg, success: false, effectType: 'damage' };
              }
          }
      ]
  },
  {
      id: 'sakiko_crying',
      title: '丰川祥子的眼泪',
      description: '你看到一个穿着黑色衣服的蓝发女孩在街角哭泣，她的琴包散落在地，口中念叨着“没法变回去了”。',
      image: getImg('丰川祥子', '1e1b4b'),
      type: 'RANDOM',
      allowedStages: ['STRAY', 'CAT_LORD'],
      choices: [
          {
              id: 'sakiko_comfort',
              text: '蹭蹭她的腿',
              calculateChance: (stats) => 90,
              effect: (stats) => {
                  const msg = pick([
                      '祥子把你抱在怀里失声痛哭。你虽然被眼泪打湿了，但她最后把便当里的三文鱼分给了你。',
                      '由于你的蹭蹭，祥子露出了一丝苦笑。她摸了摸你的圆头，送了你一块高档牛肉片。',
                      '温暖的体温平复了她的情绪。她觉得你这只老猫懂她的孤独，分了一半晚餐给你。'
                  ]);
                  return { changes: { satiety: 10, hissing: -2, smarts: 2 }, message: msg, success: true, effectType: 'heal' };
              }
          },
          {
              id: 'sakiko_steal',
              text: '抢走她的吉他拨片',
              calculateChance: (stats) => 50,
              effect: (stats) => {
                  if (roll(50)) {
                      const msg = pick([
                          '你叼起那个写着“Ave Mujica”的拨片拔腿就跑。祥子愣住了，暂时忘了哭泣。',
                          '拨片被你藏进了下水道。祥子找了半天，最终决定放下过去（或者陷入更深的绝望）。',
                          '这块塑料片成了你的磨牙工具。你感觉口中充满了重金属的味道。'
                      ]);
                      return { changes: { hissing: 8, smarts: 4 }, message: msg, success: true, effectType: 'neutral' };
                  }
                  const failMsg = pick([
                      '你刚动手，就被一个叫长崎素世的人类抓住了后颈皮，你被强制教育了一番。',
                      '祥子的手速极快，一把按住了你。她用那种极其冰冷的眼神看着你，让你不寒而栗。',
                      '你还没叼稳就掉进了排水沟。祥子连看都没看你一眼，继续沉浸在悲伤中。'
                  ]);
                  return { changes: { health: -5, hissing: 2 }, message: failMsg, success: false, effectType: 'damage' };
              }
          }
      ]
  },
  {
      id: 'tui_tui_tui',
      title: '击退邪灵：退！退！退！',
      description: '你只是想在那个车位晒太阳，一位大妈突然冲过来，一边跺脚一边对着你大喊：“退！退！退！”',
      image: getImg('退退退', 'ef4444'),
      type: 'RANDOM',
      choices: [
          {
              id: 'counter_tui',
              text: '哈回去：退！退！退！',
              calculateChance: (stats) => Math.min(95, 30 + stats.hissing * 0.7),
              effect: (stats) => {
                  if (roll(30 + stats.hissing * 0.7)) {
                      const msg = pick([
                          '你弓起背部疯狂哈气。大妈被你的气势震住了，骂骂咧咧地走开了。你保住了你的领地。',
                          '这一刻你仿佛被野兽附体，咆哮声让整条街的感应灯熄灭。大妈落荒而逃。',
                          '你展示了比她更夸张的跺脚动作。大妈觉得你中邪了，赶忙回家找符纸。'
                      ]);
                      return { changes: { hissing: 8, smarts: 4 }, message: msg, success: true, effectType: 'neutral' };
                  }
                  const failMsg = pick([
                      '大妈的施法等级更高！你被震得耳膜发疼，不得不灰溜溜地溜走。',
                      '由于你中气不足，哈气变成了打喷嚏。大妈趁机拿扫帚把你赶出了车位。',
                      '你跳起来想反击，结果在湿滑的地面上劈了个叉。这下真的要“退”了。'
                  ]);
                  return { changes: { hissing: -5, health: -2 }, message: failMsg, success: false, effectType: 'damage' };
              }
          },
          {
              id: 'ignore_madness',
              text: '假装听见',
              calculateChance: (stats) => 90,
              effect: (stats) => {
                  const msg = pick([
                      '你闭上眼继续睡觉。大妈闹了一会儿觉得没趣，自己走了。这就是老猫的定力。',
                      '你优雅地舔着爪子，把她当成背景音乐。路人都觉得你这只猫太淡定了。',
                      '此时无声胜有声。你的无视让大妈感到一阵尴尬，她悻悻然收工回家。'
                  ]);
                  return { changes: { smarts: 3, hissing: -2 }, message: msg, success: true, effectType: 'sleep' };
              }
          }
      ]
  },
  {
      id: 'basketball_chicken',
      title: '练习生猫咪',
      description: '你发现了一个篮球，背景音突然响起了某种极具节奏感的旋律。你感觉身体不由自主地想动起来。',
      image: getImg('只因你太美', '6366f1'),
      type: 'RANDOM',
      choices: [
          {
              id: 'tie_shan_kao',
              text: '施展“铁山靠”',
              calculateChance: (stats) => Math.min(95, 40 + stats.health * 0.5),
              effect: (stats) => {
                  if (roll(40 + stats.health * 0.5)) {
                      const msg = pick([
                          '你的肩膀猛地一撞，篮球飞得老远。全场都在为你欢呼（大概）。你感觉自己练习了两年半。',
                          '这一撞充满了灵魂！你不仅击飞了球，还完成了一个优雅的转身。Ikung! ',
                          '背带裤瞬间穿在身（幻觉）。你的爆发力让周围的小猫惊掉下巴。'
                      ]);
                      return { changes: { health: 5, hissing: 5, smarts: -2 }, message: msg, success: true, effectType: 'neutral' };
                  }
                  const failMsg = pick([
                      '你用力过猛，撞到了电线杆上。那个旋律仿佛在嘲笑你。',
                      '你重心不稳，由于头太圆直接滚进了下水道。练习时长增加中。',
                      '你的毛发被篮球弹到了，产生了静电，把你电得外焦里嫩。'
                  ]);
                  return { changes: { health: -5 }, message: failMsg, success: false, effectType: 'damage' };
              }
          },
          {
              id: 'rap_meow',
              text: '来一段Rap',
              calculateChance: (stats) => Math.min(95, 20 + stats.smarts * 0.8),
              effect: (stats) => {
                  const msg = pick([
                      '你对着路人喵喵叫，节奏感拉满。路人被你逗乐了，给了你两块肉干。',
                      '你的快节奏喵叫极具感染力。路过的音乐博主把你拍了下来。',
                      '哟哟哟，你是这一带最顶级的说唱猫。智慧的火花在燃烧。'
                  ]);
                  return { changes: { smarts: 5, satiety: -2 }, message: msg, success: true, effectType: 'heal' };
              }
          }
      ]
  },
  {
      id: 'disrespect',
      title: '不懂事的后辈',
      description: '一只新来的黑猫见你没有低头，甚至还想抢你的阳光位。',
      image: getImg('挑衅', '171717'),
      type: 'RANDOM',
      allowedStages: ['CAT_LORD'],
      choices: [
          {
              id: 'teach',
              text: '教训它',
              calculateChance: (stats) => Math.min(95, 30 + stats.hissing * 0.7),
              effect: (stats) => {
                  if(roll(30 + stats.hissing * 0.7)) {
                      const msg = pick(['你只用了一个眼神，它就吓得翻肚皮投降了。', '你轻轻拍了它一巴掌，它立刻明白了谁是老大。', '你把它追到了树上，三天不敢下来。']);
                      return { changes: { hissing: 3, smarts: 2 }, message: msg, success: true, effectType: 'neutral' };
                  }
                  const failMsg = pick(['这小子练过！你大意了，被抓伤了鼻子。', '你扑了个空，扭到了腰。老了老了。', '它跑得太快了，你在后面吃了一嘴灰。']);
                  return { changes: { health: -5, hissing: -2 }, message: failMsg, success: false, effectType: 'damage' };
              }
          },
          {
              id: 'ignore',
              text: '大度无视',
              calculateChance: (stats) => 100,
              effect: (stats) => {
                  const msg = pick(['狮子不会在意苍蝇的嗡嗡声。你的淡定让其他猫更崇拜你了。', '你继续睡觉。它自讨没趣走了。', '这叫格局。']);
                  return { changes: { smarts: 3, hissing: -1 }, message: msg, success: true, effectType: 'sleep' };
              }
          }
      ]
  },
  {
      id: 'tribute_day',
      title: '进贡日',
      description: '小弟们把它们今天找到的“好东西”堆在了你面前。',
      image: getImg('进贡', 'ca8a04'),
      type: 'RANDOM',
      allowedStages: ['CAT_LORD'],
      choices: [
          {
              id: 'inspect',
              text: '视察贡品',
              calculateChance: (stats) => 100,
              effect: (stats) => {
                  if (roll(60)) {
                      const msg = pick(['是一只肥美的麻雀！不错不错。', '虽然是半个三明治，但里面的火腿还在。', '居然有一个完整的罐头！不知道它们怎么偷来的。']);
                      return { changes: { satiety: 15, health: 2 }, message: msg, success: true, effectType: 'heal' };
                  }
                  const failMsg = pick(['全是死蟑螂...这群家伙把你当什么了？', '一堆塑料袋。你看起来像收破烂的吗？', '一块发霉的面包。你把它们骂了一顿。']);
                  return { changes: { satiety: -2, hissing: 3 }, message: failMsg, success: false, effectType: 'neutral' };
              }
          }
      ]
  },
  {
      id: 'vacuum_monster',
      title: '吸尘器怪兽',
      description: '那个发出巨大轰鸣声的圆形怪兽又启动了！它正在吞噬地板上的一切！',
      image: getImg('吸尘器', '525252'),
      type: 'RANDOM',
      allowedStages: ['MANSION'],
      choices: [
          {
              id: 'fight',
              text: '攻击它！',
              calculateChance: (stats) => Math.min(80, 20 + stats.hissing * 0.6),
              effect: (stats) => {
                  if (roll(20 + stats.hissing * 0.6)) {
                      const msg = pick(['你对着它一顿狂抓，它终于停了下来（其实是主人关了）。胜利！', '你骑在了它身上！驾！驾！', '你咬断了它的电线（危险动作）。怪兽死了。']);
                      return { changes: { hissing: 5, smarts: -2 }, message: msg, success: true, effectType: 'damage' };
                  }
                  const failMsg = pick(['你的尾巴毛被吸进去了！救命！', '它根本不怕你，还把你推着走。', '你被吓得炸毛，撞到了椅子腿。']);
                  return { changes: { hissing: -2, health: -5 }, message: failMsg, success: false, effectType: 'damage' };
              }
          },
          {
              id: 'high_ground',
              text: '跳上高处',
              calculateChance: (stats) => 100,
              effect: (stats) => {
                  const msg = pick(['你跳上了冰箱顶。这里是绝对安全区。', '你在柜顶俯视着愚蠢的圆盘。', '只要离地一米，它就伤不到你。']);
                  return { changes: { smarts: 2 }, message: msg, success: true, effectType: 'neutral' };
              }
          }
      ]
  },
  {
      id: 'vet_visit',
      title: '外出笼的阴影',
      description: '主人拿出了那个可怕的航空箱。你知道这意味着什么——医院！',
      image: getImg('宠物医院', 'ffffff'),
      type: 'RANDOM',
      allowedStages: ['MANSION', 'CELEBRITY'],
      choices: [
          {
              id: 'hide',
              text: '消失术',
              calculateChance: (stats) => Math.min(90, 40 + stats.smarts * 0.6),
              effect: (stats) => {
                  if (roll(40 + stats.smarts * 0.6)) {
                      const msg = pick(['你把自己融化在了沙发缝里。他们找了一小时也没找到。', '你躲在窗帘后面，完美伪装。', '你钻进了床底的最深处。计划取消了。']);
                      return { changes: { smarts: 4, hissing: -2 }, message: msg, success: true, effectType: 'neutral' };
                  }
                  const failMsg = pick(['你的尾巴露在外面。被抓获。', '一包零食就把你骗出来了。你这个吃货。', '他们动用了强光手电筒。你无处遁形。']);
                  return { changes: { health: 5, hissing: 5, satiety: -5 }, message: failMsg, success: false, effectType: 'neutral' };
              }
          },
          {
              id: 'accept',
              text: '认命',
              calculateChance: (stats) => 100,
              effect: (stats) => {
                  const msg = pick(['虽然被打了一针，但医生夸你乖，奖励了冻干。', '只是剪指甲而已。虽然很不爽，但忍忍就过去了。', '体检一切正常。你是个健康的老伙计。']);
                  return { changes: { health: 8, satiety: 5, hissing: -2 }, message: msg, success: true, effectType: 'neutral' };
              }
          }
      ]
  },
  {
      id: 'bad_comment',
      title: '恶评如潮',
      description: '你在偷看主人的手机时，发现有人在评论区说你“长得像个发面馒头”。',
      image: getImg('网络恶评', 'ef4444'),
      type: 'RANDOM',
      allowedStages: ['CELEBRITY'],
      choices: [
          {
              id: 'angry',
              text: '气抖冷',
              calculateChance: (stats) => 100,
              effect: (stats) => {
                  const msg = pick(['你把手机推到了地上。屏幕碎了，爽！', '你对着屏幕哈气。无知的凡人！', '你气得多吃了一罐罐头。发面馒头怎么了？吃你家大米了？']);
                  return { changes: { hissing: 4, satiety: 5 }, message: msg, success: true, effectType: 'damage' };
              }
          },
          {
              id: 'ignore',
              text: '黑红也是红',
              calculateChance: (stats) => 100,
              effect: (stats) => {
                  const msg = pick(['你根本不在乎。凡人的审美无法理解你的高级。', '这条评论反而带来了更多流量。', '你对着镜头翻了个白眼，粉丝更爱你了。']);
                  return { changes: { smarts: 2, hissing: -2 }, message: msg, success: true, effectType: 'neutral' };
              }
          }
      ]
  },
  {
      id: 'brand_deal',
      title: '奇怪的代言',
      description: '有个宠物假发品牌想找你做代言人。',
      image: getImg('假发代言', 'a855f7'),
      type: 'RANDOM',
      allowedStages: ['CELEBRITY'],
      choices: [
          {
              id: 'accept',
              text: '赚钱恰饭',
              calculateChance: (stats) => 100,
              effect: (stats) => {
                  const msg = pick(['你戴上了金色的卷发。虽然看起来像个大妈，但通告费很高。', '你戴着杀马特假发。粉丝笑疯了，热度+1。', '这假发居然有点暖和...真香。']);
                  return { changes: { satiety: 15, hissing: 2 }, message: msg, success: true, effectType: 'neutral' };
              }
          },
          {
              id: 'reject',
              text: '拒绝丑东西',
              calculateChance: (stats) => 100,
              effect: (stats) => {
                  const msg = pick(['你把假发撕碎了。很有态度。', '我是实力派，不搞这些花里胡哨的。', '你用行动证明了自然美才是真的美。']);
                  return { changes: { hissing: 2, smarts: 2 }, message: msg, success: true, effectType: 'damage' };
              }
          }
      ]
  },
  {
      id: 'catnip_sim',
      title: '完蛋！我被猫薄荷包围了',
      description: '你误入了一片长满猫薄荷的草丛。六种不同品种的猫薄荷让你眼花缭乱，你该选择哪一个？',
      image: getImg('猫薄荷包围', '10b981'),
      type: 'RANDOM',
      choices: [
          {
              id: 'pure_one',
              text: '选那个清纯的',
              calculateChance: (stats) => 80,
              effect: (stats) => {
                  const msg = pick([
                      '你吸了一口，整只猫都飘了起来。世界变得如此美好，你甚至想去亲吻那只泰迪。',
                      '淡淡的香气让你如痴如醉。你感觉体内的旧伤都被治愈了。',
                      '这种清新脱俗的味道让你找回了童年的纯真。你瘫倒在草丛里。'
                  ]);
                  return { changes: { health: 10, hissing: -5 }, message: msg, success: true, effectType: 'sleep' };
              }
          },
          {
              id: 'all_in',
              text: '我全都要！',
              calculateChance: (stats) => 30,
              effect: (stats) => {
                  if (roll(30)) {
                      const msg = pick([
                          '你陷入了极致的疯狂。你感觉自己成了猫神。虽然智商暂时归零，但身体状态拉满了。',
                          '狂欢吧！你的每一个毛孔都在尖叫。虽然明天醒来会宿醉，但现在你是王。',
                          '六种口味在脑中交织成一首宏大的交响曲。你快乐得快飞向外太空了。'
                      ]);
                      return { changes: { health: 25, smarts: -15, satiety: -5 }, message: msg, success: true, effectType: 'heal' };
                  }
                  const failMsg = pick([
                      '虚假宣传！那是假货！你吸了一嘴灰，还过敏了。',
                      '由于剂量太大，你当场晕了过去，甚至还说起了梦话。',
                      '这些猫薄荷里混入了薄荷脑，刺鼻的味道让你泪流满面。'
                  ]);
                  return { changes: { health: -10, smarts: -5 }, message: failMsg, success: false, effectType: 'damage' };
              }
          }
      ]
  },
  {
      id: 'sunny_boy',
      title: '阳光开朗大男孩',
      description: '一个穿着白T恤的少年哼着歌走过来，他手里拿着一个袋子，笑容灿烂。但他的眼神似乎藏着什么...',
      image: getImg('阳光开朗大男孩', 'fbbf24'),
      type: 'RANDOM',
      choices: [
          {
              id: 'dance_with_him',
              text: '和他一起跳舞',
              calculateChance: (stats) => 90,
              effect: (stats) => {
                  const msg = pick([
                      '你们在夕阳下完成了一场跨物种的华尔兹。少年很开心，分给你半个火腿肠。',
                      '由于你的配合，少年完成了他的拍摄任务。他非常慷慨地赏了你一个罐头。',
                      '伴随着他的口哨，你踩着优雅的猫步。这温馨的一幕治愈了路人。'
                  ]);
                  return { changes: { smarts: 2, hissing: -2, satiety: 5 }, message: msg, success: true, effectType: 'heal' };
              }
          },
          {
              id: 'check_bag',
              text: '调查他的袋子',
              calculateChance: (stats) => 50,
              effect: (stats) => {
                  if (roll(50)) {
                      const msg = pick([
                          '那是刚出炉的生煎包！你趁他不注意顺走了一个。这就是“阳光开朗”的代价。',
                          '袋子里竟然装满了小鱼干！你一爪子扯开袋子，开始了自助餐。',
                          '通过敏锐的嗅觉，你发现了他藏在底层的鸡肉干。真是一场成功的潜行。'
                      ]);
                      return { changes: { satiety: 25, smarts: 5 }, message: msg, success: true, effectType: 'heal' };
                  }
                  const failMsg = pick([
                      '袋子里竟然是一只尖叫鸡！少年按了一下，刺耳的声音让你差点心脏病发作。',
                      '那是给狗买的零食，由于由于味道太重，呛得你直咳嗽。',
                      '里面装着他的脏衣服。你闻了一口，感觉整个猫生都灰暗了。'
                  ]);
                  return { changes: { health: -5, hissing: 8 }, message: failMsg, success: false, effectType: 'damage' };
              }
          }
      ]
  },
  {
      id: 'butterfly_chase',
      title: '蝴蝶的诱惑',
      description: '一只闪着蓝色光芒的蝴蝶在你面前飞舞。它飞得很慢，像是在挑衅你。',
      image: getImg('追逐蝴蝶', '8b5cf6'),
      type: 'RANDOM',
      choices: [
          {
              id: 'chase',
              text: '抓住它！',
              calculateChance: (stats) => 50,
              effect: (stats) => {
                  if (roll(50)) {
                      const msg = pick([
                          '你追了它三条街，虽然没抓到，但锻炼了身体，心情大好。',
                          '你一个纵身飞跃，差点就够到了！这种由于运动带来的多巴胺让你很爽。',
                          '你敏捷的身姿在小巷中穿梭。由于运动，你的血液循环变好了。'
                      ]);
                      return { changes: { health: 2, satiety: -2 }, message: msg, success: true, effectType: 'neutral' };
                  }
                  const failMsg = pick([
                      '你光顾着看蝴蝶，一头撞在了电线杆上。蝴蝶似乎在嘲笑你。',
                      '你在草丛里打滚想扑蝴蝶，结果扑到了一堆刺，痛得你直叫唤。',
                      '蝴蝶飞进了狗窝，你差点就成了大狼狗的午餐。'
                  ]);
                  return { changes: { health: -2, satiety: -5 }, message: failMsg, success: false, effectType: 'damage' };
              }
          },
          {
              id: 'ignore',
              text: '成熟稳重',
              calculateChance: (stats) => 95,
              effect: (stats) => {
                  if (roll(95)) {
                      const msg = pick([
                          '只有小猫才会追这种东西。你是一只成熟的猫。',
                          '你冷静地分析了蝴蝶的飞行路线，由于智力压制而感到无趣。',
                          '老猫志在千里。蝴蝶这种小玩意无法动摇你的道心。'
                      ]);
                      return { changes: { smarts: 2 }, message: msg, success: true, effectType: 'neutral' };
                  }
                  const failMsg = pick([
                      '蝴蝶停在了你的鼻子上，你没忍住打了个喷嚏，很丢脸。',
                      '虽然嘴上说不在乎，但你的眼睛一直跟着它转。智力由于分心而受损。',
                      '蝴蝶在你头上跳舞。你感觉作为领主的威严受到了挑战。'
                  ]);
                  return { changes: { hissing: -1 }, message: failMsg, success: false, effectType: 'neutral' };
              }
          }
      ]
  },
  {
      id: 'human_feeding',
      title: '可疑的火腿肠',
      description: '一个人类在冲你招手，手里拿着一根看起来像火腿肠的东西。但也可能是一根炸药。',
      image: getImg('人类投喂', 'ca8a04'),
      type: 'RANDOM',
      allowedStages: ['STRAY', 'CAT_LORD'],
      choices: [
        {
          id: 'eat',
          text: '赌一把！',
          calculateChance: (stats) => 50,
          effect: (stats) => {
              if (roll(50)) {
                  const msg = pick([
                      '是淀粉肠！虽然没有肉，但那种廉价的香精味简直让人欲罢不能。',
                      '极品黑猪肉肠！你咬开肠衣的一瞬间感觉自己上了天堂。',
                      '居然是自家灌的香肠。虽然有点咸，但肉感十足。'
                  ]);
                  return { changes: { satiety: 25, health: 5, smarts: -2 }, message: msg, success: true, effectType: 'heal' };
              }
              const failMsg = pick([
                  '陷阱！那人试图抓你的后颈皮。你拼死挣脱，留下了几撮毛作为代价。',
                  '人类在你刚张嘴的时候把火腿肠拿走了，还嘲笑你：“看，这只傻猫。”',
                  '那根火腿肠过期了。你吃了一口就由于恶心而全部吐了出来。'
              ]);
              return { changes: { health: -10, hissing: 10 }, message: failMsg, success: false, effectType: 'damage' };
          }
        },
        {
          id: 'sniff',
          text: '先闻闻看',
          calculateChance: (stats) => 80,
          effect: (stats) => {
              if(roll(80)) {
                  const msg = pick([
                      '你谨慎地嗅了嗅，确定安全后叼起就跑。真刺激。',
                      '由于你的谨慎，你避开了夹在中间的苦味。这是一只老猫的智慧。',
                      '你发现那是涂了芥末的恶作剧，你冷静地走开，人类一脸失望。'
                  ]);
                  return { changes: { satiety: 8, smarts: 2 }, message: msg, success: true, effectType: 'heal' };
              }
              const failMsg = pick([
                  '你闻得太久了，那人失去了耐心，把火腿肠喂给了旁边的泰迪。职业耻辱啊！',
                  '就在你闻的时候，一阵风把火腿肠吹进了下水道。煮熟的鸭子飞了。',
                  '你还没开始闻，火腿肠就被另一只手速极快的小猫抢走了。'
              ]);
              return { changes: { satiety: 0, hissing: 3 }, message: failMsg, success: false, effectType: 'neutral' };
          }
        }
      ]
  },
  {
    id: 'flea_attack',
    title: '跳蚤危机',
    description: '身上突然奇痒无比！该死，一定是昨天那个垃圾桶不干净。',
    image: getImg('跳蚤', '713f12'),
    type: 'RANDOM',
    allowedStages: ['STRAY', 'CAT_LORD'],
    choices: [
        {
            id: 'scratch',
            text: '疯狂抓痒',
            calculateChance: (stats) => 30,
            effect: (stats) => {
                if (roll(30)) {
                    const msg = pick([
                        '你把跳蚤甩掉了，虽然抓掉了几根毛。',
                        '你灵巧地用后腿击中了那个吸血鬼。危机解除。',
                        '你对着墙壁一顿疯狂摩擦，终于把那玩意蹭掉了。'
                    ]);
                    return { changes: { health: 2, hissing: 3 }, message: msg, success: true, effectType: 'neutral' };
                }
                const failMsg = pick([
                    '你抓破了皮，但还是痒！这让你变得暴躁易怒。',
                    '由于用力过猛，你把自己抓秃了一块。跳蚤由于血腥味变得更兴奋了。',
                    '你在抓痒的时候把自己抓翻了，由于头太圆，半天没站起来。'
                ]);
                return { changes: { health: -5, hissing: 3 }, message: failMsg, success: false, effectType: 'damage' };
            }
        },
        {
            id: 'roll_dirt',
            text: '泥地打滚',
            calculateChance: (stats) => 60,
            effect: (stats) => {
                if (roll(60)) {
                     const msg = pick([
                         '你在干土里滚了一圈，利用尘土窒息了跳蚤。古老的智慧！',
                         '由于沙子的摩擦，跳蚤被全部抖落。你现在是一只灰头土脸的胜利猫。',
                         '你成功利用大地的力量驱逐了邪魔。虽然脏，但健康。'
                     ]);
                     return { changes: { health: 2, smarts: 2 }, message: msg, success: true, effectType: 'heal' };
                }
                const failMsg = pick([
                    '跳蚤没死，你变成了一只泥猫。路过的母猫露出了嫌弃的眼神。',
                    '你在泥地里滚到了碎玻璃，这下不仅痒，还痛。',
                    '泥土里有更可怕的寄生虫。你感觉自己越洗越脏。'
                ]);
                return { changes: { hissing: -2, health: -2 }, message: failMsg, success: false, effectType: 'neutral' };
            }
        }
    ]
  },
  {
      id: 'sunbeam',
      title: '完美光束',
      description: '地板上出现了一束完美的阳光。这是神的恩赐。',
      image: getImg('晒太阳', 'fcd34d'),
      type: 'RANDOM',
      choices: [
          {
              id: 'sleep',
              text: '光合作用',
              calculateChance: (stats) => 90,
              effect: (stats) => {
                  if (roll(90)) {
                      const msg = pick([
                          '你随着光斑移动。这就是猫生的意义。浑身暖洋洋的。',
                          '阳光穿透了你的白毛。你感觉自己正在充能。',
                          '这种温暖让你想起了母亲。你的心情得到了极大慰藉。'
                      ]);
                      return { changes: { health: 5, hissing: -3 }, message: msg, success: true, effectType: 'sleep' };
                  }
                  const failMsg = pick([
                      '一片云飘过来挡住了太阳。心情变差了。',
                      '阳光太强烈，把你晒得口干舌燥，饱腹感下降。',
                      '你刚躺下，人类就拉上了窗帘。这一定是针对你！'
                  ]);
                  return { changes: { hissing: 2 }, message: failMsg, success: false, effectType: 'neutral' };
              }
          },
          {
              id: 'play_dust',
              text: '抓空气尘埃',
              calculateChance: (stats) => 100,
              effect: (stats) => {
                  const msg = pick([
                      '你发现光束里有飞舞的灰尘，抓了半天什么也没抓到，但你思考了物理学。',
                      '你在光中挥爪，像个指挥家。虽然看起来很蠢，但智商微涨。',
                      '这些闪烁的微粒让你陷入了禅定状态。'
                  ]);
                  return { changes: { smarts: 2, satiety: -2 }, message: msg, success: true, effectType: 'neutral' };
              }
          }
      ]
  }
];