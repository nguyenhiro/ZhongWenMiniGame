const questions = [
    {
        question: "Máy tính",
        answers: ["电脑 (diànnǎo)", "电话 (diànhuà)"],
        correct: "电脑 (diànnǎo)",
    },
    {
        question: "Khăn giấy",
        answers: ["纸巾 (zhǐjīn)", "报纸 (bàozhǐ)"],
        correct: "纸巾 (zhǐjīn)",
    },
    {
        question: "Đồng hồ",
        answers: ["手表 (shǒubiǎo)", "手机 (shǒujī)"],
        correct: "手表 (shǒubiǎo)",
    },
    {
        question: "Bàn chải đánh răng",
        answers: ["牙刷 (yáshuā)", "牙膏 (yágāo)"],
        correct: "牙刷 (yáshuā)",
    },
    {
        question: "Điện thoại",
        answers: ["手机 (shǒujī)", "手表 (shǒubiǎo)"],
        correct: "手机 (shǒujī)",
    },
    {
        question: "Cái tủ",
        answers: ["柜子 (guìzi)", "箱子 (xiāngzi)"],
        correct: "柜子 (guìzi)",
    },
    {
        question: "Kem đánh răng",
        answers: ["牙膏 (yágāo)", "牙刷 (yáshuā)"],
        correct: "牙膏 (yágāo)",
    },
    {
        question: "Máy sấy tóc",
        answers: ["吹风机 (chuīfēngjī)", "洗衣机 (xǐyījī)"],
        correct: "吹风机 (chuīfēngjī)",
    },
    {
        question: "Quần áo",
        answers: ["衣服 (yīfu)", "裤子 (kùzi)"],
        correct: "衣服 (yīfu)",
    },
    {
        question: "Cái bàn",
        answers: ["桌子 (zhuōzi)", "椅子 (yǐzi)"],
        correct: "桌子 (zhuōzi)",
    },
    {
        question: "Được không?",
        answers: ["行不行?", "好不好?"],
        correct: "行不行?",
    },
        {
        question: "Gà trống",
        answers: ["攻击 (gōngjī)", "公鸡 (gōngjī)"],
        correct: "公鸡 (gōngjī)",
    },
        {
        question: "Ký ức, trí nhớ",
        answers: ["记忆 (jìyì)", "技艺 (jìyì)"],
        correct: "记忆 (jìyì)",
    },
        {
        question: "Ý tưởng, ý kiến",
        answers: ["注意 (zhùyì)", "主意 (zhǔyi)"],
        correct: "主意 (zhǔyi)",
    },
        {
        question: "Lợi hại",
        answers: ["厉害 (lìhai)", "利害 (lìhài)"],
        correct: "厉害 (lìhai)",
    },
        {
        question: "Mục đích",
        answers: ["目的 (mùdì)", "墓地 (mùdì)"],
        correct: "目的 (mùdì)",
    },
        {
        question: "Đồ trang sức",
        answers: ["首饰 (shǒushì)", "手势 (shǒushì)"],
        correct: "首饰 (shǒushì)",
    },
        {
        question: "Cuộc họp",
        answers: ["会议 (huìyì)", "回忆 (huíyì)"],
        correct: "会议 (huìyì)",
    },
        {
        question: "Giám đốc",
        answers: ["经历 (jīnglì)", "经理 (jīnglǐ)"],
        correct: "经理 (jīnglǐ)",
    },
        {
        question: "Luyện tập",
        answers: ["练习 (liànxí)", "联系 (liánxì)"],
        correct: "练习 (liànxí)",
    },
        {
        question: "Hoài bão, ước mơ",
        answers: ["抱负 (bàofù)", "报复 (bàofù)"],
        correct: "抱负 (bàofù)",
    },
            {
        question: "Bệnh viện",
        answers: ["医院 (yīyuàn)", "一院 (yīyuàn)"],
        correct: "医院 (yīyuàn)",
    },
            {
        question: "Mặt trời",
        answers: ["太阳 (tàiyáng)", "太痒 (tàiyǎng)"],
        correct: "太阳 (tàiyáng)",
    },
            {
        question: "Ban ngày",
        answers: ["白天 (báitiān)", "明白 (míng bái)"],
        correct: "白天 (báitiān)",
    },
            {
        question: "Nhà vệ sinh",
        answers: ["洗手间 (xǐshǒujiān)", "洗手 (xǐ shǒu)"],
        correct: "洗手间 (xǐshǒujiān)",
    },
            {
        question: "Áo khoác",
        answers: ["外套 (wàitào)", "衣服 (yīfu)"],
        correct: "外套 (wàitào)",
    },
            {
        question: "Cái đinh",
        answers: ["钉子 (dīngzi)", "锤子 (chuízi)"],
        correct: "钉子 (dīngzi)",
    },
            {
        question: "Gội đầu",
        answers: ["洗发 (xǐfà)", "洗脸 (xǐ liǎn)"],
        correct: "洗发 (xǐfà)",
    },
            {
        question: "Rau củ",
        answers: ["蔬菜 (shūcài)", "炒菜 (chǎo cài)"],
        correct: "蔬菜 (shūcài)",
    },
            {
        question: "Bia",
        answers: ["酒 (jiǔ)", "啤酒 (píjiǔ)"],
        correct: "啤酒 (píjiǔ)",
    },
            {
        question: "Hài lòng",
        answers: ["满溢 (mǎnyì)", "满意 (mǎnyì)"],
        correct: "满意 (mǎnyì)",
    },
            {
        question: "Văn phòng",
        answers: ["办公室 (bàngōngshì)", "公司 (gōngsī)"],
        correct: "办公室 (bàngōngshì)",
    },
            {
        question: "Báo cáo",
        answers: ["报告 (bàogào)", "包子 (bāozi)"],
        correct: "报告 (bàogào)",
    },
            {
        question: "Sổ tay, máy tính xách tay (laptop)",
        answers: ["笔记本 (bǐjìběn)", "圆珠笔 (yuánzhūbǐ)"],
        correct: "笔记本 (bǐjìběn)",
    },
            {
        question: "Báo cáo tuần",
        answers: ["周报 (zhōubào)", "周末 (zhōumò)"],
        correct: "周报 (zhōubào)",
    },
            {
        question: "Thăm bạn bè",
        answers: ["看朋友 (kàn péngyǒu)", "看报 (kànbào)"],
        correct: "看朋友 (kàn péngyǒu)",
    },
            {
        question: "Đi làm",
        answers: ["上班 (shàngbān)", "上课 (shàngkè)"],
        correct: "上班 (shàngbān)",
    },
            {
        question: "Tan học",
        answers: ["下班 (xiàbān)", "下课 (xiàkè)"],
        correct: "下课 (xiàkè)",
    },
            {
        question: "Ông chủ",
        answers: ["老板 (lǎobǎn)", "老伴 (lǎobàn)"],
        correct: "老板 (lǎobǎn)",
    },
            {
        question: "Tài liệu",
        answers: ["文件 (wénjiàn)", "课文 (kèwén)"],
        correct: "文件 (wénjiàn)",
    },
                {
        question: "Giá cả",
        answers: ["价格 (jiàgé)", "讨价还价 (tǎojià huánjià)"],
        correct: "价格 (jiàgé)",
    },
                {
        question: "Đồng nghiệp",
        answers: ["同事 (tóngshì)", "同桌 (tóngzhuō)"],
        correct: "同事 (tóngshì)",
    },
                {
        question: "Khách hàng",
        answers: ["客户 (kèhù)", "客气 (kèqi)"],
        correct: "客户 (kèhù)",
    },
                {
        question: "Đầu tư",
        answers: ["投资 (tóuzī)", "亏损 (kuīsǔn)"],
        correct: "投资 (tóuzī)",
    }
];

