
import { NightThought } from '../../types';
import { roll, pick } from '../utils';

export const NIGHT_THOUGHTS: NightThought[] = [
    // ================= STRAY: 蛮荒/奴隶 (生存是唯一的真理) =================
    {
        id: 'stray_trash_philosophy',
        stage: 'STRAY',
        title: '沙子味香肠',
        content: '半根香肠沾了泥水，吃起来牙碜。吞下去那一刻，胃里火辣辣的饿劲儿终于停了。脏不脏无所谓，肚子里有东西才是真的。',
        condition: (stats, history, daily) => daily.includes('forage_trash')
    },
    {
        id: 'stray_begging',
        stage: 'STRAY',
        title: '热乎的手心',
        content: '那人蹲下来，身上带着呛人的烟味。我蹭了蹭他的裤脚，换来一个温热的丸子。手心的温度，比穿堂风暖和得多。',
        condition: (stats, history, daily) => daily.includes('beg_human')
    },
    {
        id: 'stray_fight',
        stage: 'STRAY',
        title: '能睡的纸箱',
        content: '耳朵突突地跳着痛，橘猫留下的记号。它逃远了，今晚这个干燥快递箱归我。用力蹭蹭纸板，盖住血腥味，这里只剩我的味道。',
        condition: (stats, history, daily) => daily.includes('fight_stray')
    },
    {
        id: 'stray_generic_1',
        stage: 'STRAY',
        title: '躲雨',
        content: '楼越来越高，灯光刺眼。这些跟我没关系。今夜我只关心饭店排气扇里吹出的那阵油腻热风。',
    },
    {
        id: 'stray_rain',
        stage: 'STRAY',
        title: '苦水',
        content: '雨下个不停，毛发湿透贴在身上，死沉。低头喝一口积水，满嘴土腥味。倒影里那只猫，狼狈到了极点。',
    },
    {
        id: 'stray_car',
        stage: 'STRAY',
        title: '铁兽的余温',
        content: '车底盘热乎着，这只铁做的巨兽也在沉睡。紧贴着它的肚子，听雨点敲打铁皮。这里没有风，只有机油味和一点残存的暖意。',
    },
    // --- NEW STRAY ---
    {
        id: 'stray_hunt_fail',
        stage: 'STRAY',
        title: '空的爪子',
        content: '爪子划过水泥地，磨出了火星。那老鼠钻进了墙缝，留给我一个嘲讽的尾巴尖。肚子空响，像是在嘲笑我的无能。',
        condition: (stats, history, daily) => daily.includes('hunt_mouse') && stats.satiety < 40
    },
    {
        id: 'stray_cold',
        stage: 'STRAY',
        title: '锁住体温',
        content: '风像刀子刮。缩成一个紧紧的球，鼻尖埋进肚皮。尾巴紧紧箍住身体，像条锁链。要把最后一点热气锁在身体里，别散了。',
        condition: (stats) => stats.health < 30
    },
    {
        id: 'stray_stars',
        stage: 'STRAY',
        title: '下水道星空',
        content: '躺在下水道口看天。星星很亮，像洒了一地的猫砂。那么远，那么冷，够不着。',
    },
    {
        id: 'stray_dog_bark',
        stage: 'STRAY',
        title: '远处的吠叫',
        content: '远处有狗叫，一声接一声。肌肉本能地绷紧，睡意全无。在这条街，闭上眼可能就再也睁不开。',
    },
    {
        id: 'stray_trash_juice',
        stage: 'STRAY',
        title: '复杂的味道',
        content: '舔到了垃圾袋上的汁水。酸的，臭的，辣的。舌头麻了。为了活着，味蕾早就死了。',
    },


    // ================= CAT LORD: 封建/领主 (地盘与规矩) =================
    {
        id: 'lord_mark',
        stage: 'CAT_LORD',
        title: '我的味道',
        content: '电线杆根部滋了一泡尿，味道冲得我自己都皱鼻。心里异常踏实。气味是无形的墙，告诉路过的家伙，这块地盘姓圆。',
        condition: (stats, history, daily) => daily.includes('patrol_turf')
    },
    {
        id: 'lord_tribute',
        stage: 'CAT_LORD',
        title: '小弟的孝敬',
        content: '小狸花推来半只死老鼠，不敢抬头。我没客气，一口叼走。受我庇护，交点保护费天经地义。',
        condition: (stats, history, daily) => daily.includes('collect_fees')
    },
    {
        id: 'lord_generic_1',
        stage: 'CAT_LORD',
        title: '墙头风景',
        content: '趴在最高围墙俯瞰巷子，争食的野猫像蚂蚁一样小。晚风吹得胡子痒。在这个高度，不用担心谁会突然踢我一脚。',
    },
    {
        id: 'lord_scar',
        stage: 'CAT_LORD',
        title: '新伤',
        content: '鼻子上添了新疤，舔起来火辣辣的疼。对手丢了半只耳朵。痛感让我清醒，时刻提醒我，谁才是这片废墟的王。',
    },
    {
        id: 'lord_moon',
        stage: 'CAT_LORD',
        title: '俯视',
        content: '今晚月亮很圆，像个干净的盘子。独自坐在屋顶，听巷弄里此起彼伏的猫叫。每一声里的恐惧我都听得懂，它们在怕我。',
    },
    // --- NEW LORD ---
    {
        id: 'lord_lonely',
        stage: 'CAT_LORD',
        title: '石头的王',
        content: '它们低着头路过，没人敢看我的眼睛。我很强，强得像块石头。石头是没有朋友的。',
        condition: (stats) => stats.hissing > 80
    },
    {
        id: 'lord_high_place',
        stage: 'CAT_LORD',
        title: '灯火脚下',
        content: '站在最高的空调外机上。风吹得毛发乱舞。整个街区的灯火都在脚下。我是这片黑夜唯一的王。',
    },
    {
        id: 'lord_old_bones',
        stage: 'CAT_LORD',
        title: '隐痛',
        content: '湿气重，后腿关节隐隐作痛。咬着牙不哼一声。王不能老，王不能痛。',
        condition: (stats) => stats.health < 50
    },
    {
        id: 'lord_fight_win',
        stage: 'CAT_LORD',
        title: '赢家',
        content: '爪缝里还残留着别的猫的毛。血腥味刺激着鼻腔。这种赢的感觉，比吃饱了还让人上瘾。',
        condition: (stats, history, daily) => daily.includes('fight_stray') || daily.includes('collect_fees')
    },
    {
        id: 'lord_morning',
        stage: 'CAT_LORD',
        title: '退潮',
        content: '天快亮了。环卫工人的扫帚声近了。该散了。白天的世界不属于我们。',
    },


    // ================= MANSION: 资本/安逸 (舒适的牢笼) =================
    {
        id: 'mansion_food',
        stage: 'MANSION',
        title: '满出来的碗',
        content: '喂食器嗡嗡作响，哗啦啦掉出一堆褐色颗粒。以前听到这声音会发疯，现在眼皮懒得抬。肚子从没饿过，嘴里却淡出鸟来。',
        condition: (stats, history, daily) => daily.includes('luxury_food')
    },
    {
        id: 'mansion_sofa',
        stage: 'MANSION',
        title: '不能抓的地方',
        content: '真皮沙发手感极好，指甲陷进去那刻让人上瘾。女主人尖叫跑来，轻轻拍了我一下。人把这些死物看得比我还重。',
        condition: (stats, history, daily) => daily.includes('destroy_furniture')
    },
    {
        id: 'mansion_generic_1',
        stage: 'MANSION',
        title: '透明的墙',
        content: '窗外麻雀飞得很低，本能扑过去，‘咚’一声撞在玻璃上。看不见的墙。屋里暖气很足，快忘了风吹在脸上是什么感觉。',
    },
    {
        id: 'mansion_toy',
        stage: 'MANSION',
        title: '假猎物',
        content: '逗猫棒的羽毛飞来飞去，跳起来抓住它。不挣扎，没有血，没有体温，嘴里只有干巴巴的鸡毛味。全是假的，真没劲。',
    },
    {
        id: 'mansion_dream',
        stage: 'MANSION',
        title: '软禁',
        content: '昨晚梦见翻垃圾桶，鱼骨头真香。醒来头枕着丝绸枕头，空气里飘着薰衣草香。忍不住打喷嚏，这安逸的日子像是软禁。',
    },
    // --- NEW MANSION ---
    {
        id: 'mansion_rain',
        stage: 'MANSION',
        title: '隔岸观火',
        content: '窗户上有水珠滑落。外面在下暴雨。我伸了个懒腰，踩在干燥的地毯上。那个湿漉漉的世界，像上辈子的事。',
    },
    {
        id: 'mansion_laser',
        stage: 'MANSION',
        title: '被光骗了',
        content: '那个红点又消失了。就在爪子按下去的瞬间。地板凉凉的。我又被光骗了，像个傻子。',
        condition: (stats, history, daily) => daily.includes('play_laser')
    },
    {
        id: 'mansion_collar',
        stage: 'MANSION',
        title: '带响的玩具',
        content: '脖子上的铃铛响个不停。每走一步都在提醒我：我属于某个人。我是个带响声的玩具。',
    },
    {
        id: 'mansion_fat',
        stage: 'MANSION',
        title: '重力',
        content: '跳不上那个柜子了。肚子上的肉坠着我，像挂了两个沙袋。曾经飞檐走壁的腿，现在只能用来走路。',
        condition: (stats) => stats.satiety > 80
    },
    {
        id: 'mansion_groom',
        stage: 'MANSION',
        title: '布娃娃',
        content: '身上全是香波味，薰衣草味。舌头舔上去是苦的。我的野兽味没了，闻起来像个布娃娃。',
        condition: (stats, history, daily) => daily.includes('groom')
    },


    // ================= CELEBRITY: 流量/景观 (被观看的表演) =================
    {
        id: 'celeb_live',
        stage: 'CELEBRITY',
        title: '圆形的灯',
        content: '圆形补光灯太亮，照得眼睛生疼。规矩我懂，灯一亮，就得打滚，或者叫两声。屏幕上飞过的弹幕，大概是另一种我看不到的罐头。',
        condition: (stats, history, daily) => daily.includes('live_stream')
    },
    {
        id: 'celeb_goods',
        stage: 'CELEBRITY',
        title: '印着我的脸',
        content: '家里到处是印着我照片的抱枕。凑过去闻闻，只有刺鼻的工厂胶水味，一点我的气味都没有。看着那个傻笑的脸，它一点也不像我。',
        condition: (stats, history, daily) => daily.includes('product_review') || daily.includes('brand_deal')
    },
    {
        id: 'celeb_generic_1',
        stage: 'CELEBRITY',
        title: '好多只手',
        content: '今天又有好多陌生人伸手，各种香水味混在一起，熏得头晕。他们喊着‘好萌’，我只觉得累，想找个没光的黑箱子躲起来。',
    },
    {
        id: 'celeb_camera',
        stage: 'CELEBRITY',
        title: '快门',
        content: '咔嚓，咔嚓。黑洞洞的镜头死死盯着，说是抓拍微表情。其实我只是困得睁不开眼，单纯想睡觉。',
    },
    {
        id: 'celeb_diet',
        stage: 'CELEBRITY',
        title: '形象管理',
        content: '最近开始拿秤算卡路里，碗里的粮永远只有半满。说是为了上镜好看。我是大明星，为什么还要饿得胃疼？',
    },
    // --- NEW CELEBRITY ---
    {
        id: 'celeb_screen',
        stage: 'CELEBRITY',
        title: '电子幽灵',
        content: '屏幕里的那只猫眼睛很大，脸很圆，那是滤镜。我看着它，觉得很陌生。它在笑，我在打哈欠。',
    },
    {
        id: 'celeb_travel',
        stage: 'CELEBRITY',
        title: '货物',
        content: '又是航空箱。摇晃，黑暗，闷热。不知道下一站是哪里。我只是一件被寄来寄去的昂贵货物。',
        condition: (stats, history, daily) => daily.includes('fan_meet')
    },
    {
        id: 'celeb_fake',
        stage: 'CELEBRITY',
        title: '同事',
        content: '旁边那只布偶猫在镜头前蹭我，导演喊卡后它就走开了。演戏而已。大家都是混口饭吃。',
        condition: (stats, history, daily) => daily.includes('scandal')
    },
    {
        id: 'celeb_costume',
        stage: 'CELEBRITY',
        title: '皮囊',
        content: '蕾丝裙子勒得慌，痒。想撕烂它，想打滚。但闪光灯一亮，还得僵硬地坐着。尊严在发痒。',
        condition: (stats, history, daily) => daily.includes('costume_shoot')
    },
    {
        id: 'celeb_tired',
        stage: 'CELEBRITY',
        title: '谢幕',
        content: '终于关灯了。脸部肌肉笑僵了。只想找个最黑的角落，把头埋起来。别看我，谁也别看我。',
        condition: (stats) => stats.health < 40
    }
];