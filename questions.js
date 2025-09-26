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
    },
    {
        question: "Bạn",
        answers: ["你 (nǐ)", "我 (wǒ)"],
        correct: "你 (nǐ)",
    },
    {
        question: "Năm",
        answers: ["一 (yī)", "五 (wǔ)"],
        correct: "五 (wǔ)",
    },
    {
        question: "Xin chào",
        answers: ["好 (hǎo)", "你好 (nǐ hǎo)"],
        correct: "你好 (nǐ hǎo)",
    },
    {
        question: "Tám",
        answers: ["八 (bā)", "三 (sān)"],
        correct: "八 (bā)",
    },
    {
        question: "Nhỏ",
        answers: ["大 (dà)", "小 (xiǎo)"],
        correct: "小 (xiǎo)",
    },
    {
        question: "Không",
        answers: ["不 (bù)", "有 (yǒu)"],
        correct: "不 (bù)",
    },
    {
        question: "Cái miệng",
        answers: ["口 (kǒu)", "嘴 (zuǐ)"],
        correct: "嘴 (zuǐ)",
    },
    {
        question: "Đen",
        answers: ["白 (bái)", "黑 (hēi)"],
        correct: "黑 (hēi)",
    },
    {
        question: "Nữ, con gái",
        answers: ["女 (nǚ)", "马 (mǎ)"],
        correct: "女 (nǚ)",
    },
    {
        question: "Có thời gian rảnh",
        answers: ["忙 (máng)", "有空 (yǒu kòng)"],
        correct: "有空 (yǒu kòng)",
    },
    {
        question: "Mẹ",
        answers: ["吗 (ma)", "妈妈 (māma)"],
        correct: "妈妈 (māma)",
    },
    {
        question: "Khó",
        answers: ["很 (hěn)", "难 (nán)"],
        correct: "难 (nán)",
    },
    {
        question: "Tiếng Trung",
        answers: ["汉语 (Hànyǔ)", "中文 (Zhōngwén)"],
        correct: "中文 (Zhōngwén)",
    },
    {
        question: "To",
        answers: ["太 (tài)", "大 (dà)"],
        correct: "大 (dà)",
    },
    {
        question: "Anh trai",
        answers: ["爸爸 (bàba)", "哥哥 (gēge)"],
        correct: "哥哥 (gēge)",
    },
    {
        question: "Cô ấy",
        answers: ["她 (tā)", "他 (tā)"],
        correct: "她 (tā)",
    },
    {
        question: "Nam, con trai",
        answers: ["南 (nán)", "男 (nán)"],
        correct: "男 (nán)",
    },
    {
        question: "Em trai",
        answers: ["弟弟 (dìdi)", "哥哥 (gēge)"],
        correct: "弟弟 (dìdi)",
    },
    {
        question: "Chị gái",
        answers: ["姐姐 (jiějie)", "妹妹 (mèimei)"],
        correct: "姐姐 (jiějie)",
    },
    {
        question: "Tháng",
        answers: ["越 (Yuè)", "月 (yuè)"],
        correct: "月 (yuè)",
    },
    {
        question: "Tuyết",
        answers: ["学 (xué)", "雪 (xuě)"],
        correct: "雪 (xuě)",
    },
    {
        question: "Tiếng Anh",
        answers: ["英语 (Yīngyǔ)", "德语 (Déyǔ)"],
        correct: "英语 (Yīngyǔ)",
    },
    {
        question: "Tiếng Pháp",
        answers: ["阿拉伯语 (Ālābóyǔ)", "法语 (Fǎyǔ)"],
        correct: "法语 (Fǎyǔ)",
    },
    {
        question: "Tiếng Nga",
        answers: ["俄语 (Éyǔ)", "韩国语 (Hánguóyǔ)"],
        correct: "俄语 (Éyǔ)",
    },
    {
        question: "Tiếng Tây Ban Nha",
        answers: ["日语 (Rìyǔ)", "西班牙语 (Xībānyáyǔ)"],
        correct: "西班牙语 (Xībānyáyǔ)",
    },
    {
        question: "Sai",
        answers: ["对 (duì)", "错 (cuò)"],
        correct: "错 (cuò)",
    },
    {
        question: "Hôm qua",
        answers: ["明天 (míngtiān)", "昨天 (zuótiān)"],
        correct: "昨天 (zuótiān)",
    },
    {
        question: "Gặp, diện kiến",
        answers: ["见 (jiàn)", "去 (qù)"],
        correct: "见 (jiàn)",
    },
    {
        question: "Bưu điện",
        answers: ["邮局 (yóujú)", "寄 (jì)"],
        correct: "邮局 (yóujú)",
    },
    {
        question: "Bưu kiện",
        answers: ["包裹 (bāoguǒ)", "信 (xìn)"],
        correct: "包裹 (bāoguǒ)",
    },
    {
        question: "Tâm, tim, tấm lòng",
        answers: ["新 (xīn)", "心 (xīn)"],
        correct: "心 (xīn)",
    },
    {
        question: "Ngân hàng",
        answers: ["银行 (yínháng)", "取 (qǔ)"],
        correct: "银行 (yínháng)",
    },
    {
        question: "Tiền",
        answers: ["钱 (qián)", "七 (qī)"],
        correct: "钱 (qián)",
    },
    {
        question: "Chín",
        answers: ["六 (liù)", "九 (jiǔ)"],
        correct: "九 (jiǔ)",
    },
    {
        question: "Tên riêng",
        answers: ["北京 (Běijīng)", "专名 (zhuānmíng)"],
        correct: "专名 (zhuānmíng)",
    },
    {
        question: "Ngày, trời",
        answers: ["今天 (jīntiān)", "天 (tiān)"],
        correct: "天 (tiān)",
    },
    {
        question: "Ngày kia",
        answers: ["后天 (hòutiān)", "大后天 (dàhòutiān)"],
        correct: "大后天 (dàhòutiān)",
    },
    {
        question: "Tuần, thứ",
        answers: ["星期 (xīngqī)", "周末 (zhōumò)"],
        correct: "星期 (xīngqī)",
    },
    {
        question: "Thứ 6",
        answers: ["星期一 (xīngqī yī)", "星期五 (xīngqī wǔ)"],
        correct: "星期五 (xīngqī wǔ)",
    },
    {
        question: "Thứ 3",
        answers: ["星期二 (xīngqī èr)", "星期三 (xīngqī sān)"],
        correct: "星期二 (xīngqī èr)",
    },
    {
        question: "Thứ 7",
        answers: ["星期四 (xīngqī sì)", "星期六 (xīngqī liù)"],
        correct: "星期六 (xīngqī liù)",
    },
    {
        question: "Chủ nhật",
        answers: ["星期天 (xīngqī tiān)", "周末 (zhōumò)"],
        correct: "星期天 (xīngqī tiān)",
    },
    {
        question: "Cuối tuần",
        answers: ["周末 (zhōumò)", "星期日 (xīngqī rì)"],
        correct: "周末 (zhōumò)",
    },
    {
        question: "Hai",
        answers: ["几 (jǐ)", "二 (èr)"],
        correct: "二 (èr)",
    },
    {
        question: "Bốn",
        answers: ["三 (sān)", "四 (sì)"],
        correct: "四 (sì)",
    },
    {
        question: "Ở đâu",
        answers: ["哪儿 (nǎr)", "那儿 (nàr)"],
        correct: "哪儿 (nǎr)",
    },
    {
        question: "Biết, sẽ, có thể",
        answers: ["会 (huì)", "回 (huí)"],
        correct: "会 (huì)",
    },
    {
        question: "Lớp học, phòng học",
        answers: ["学校 (xuéxiào)", "教室 (jiàoshì)"],
        correct: "教室 (jiàoshì)",
    },
    {
        question: "Lại đến, làm lại lần nữa",
        answers: ["再见 (zàijiàn)", "再来 (zài lái)"],
        correct: "再来 (zài lái)",
    },
    {
        question: "Xin lỗi",
        answers: ["对不起 (duìbuqǐ)", "不客气 (bú kèqi)"],
        correct: "对不起 (duìbuqǐ)",
    },
    {
        question: "Không sao",
        answers: ["没关系 (méiguānxi)", "不客气 (bú kèqi)"],
        correct: "没关系 (méiguānxi)",
    },
    {
        question: "Thiên An",
        answers: ["天安门 (Tiān’ānmén)", "天安 (Tiān’ān)"],
        correct: "天安 (Tiān’ān)",
    },
    {
        question: "Đây, này",
        answers: ["这 (zhè)", "是 (shì)"],
        correct: "这 (zhè)",
    },
    {
        question: "Thầy giáo, cô giáo",
        answers: ["老师 (lǎoshī)", "您 (nín)"],
        correct: "老师 (lǎoshī)",
    },
    {
        question: "Mời, xin",
        answers: ["请 (qǐng)", "进 (jìn)"],
        correct: "请 (qǐng)",
    },
    {
        question: "Ngồi",
        answers: ["做 (zuò)", "坐 (zuò)"],
        correct: "坐 (zuò)",
    },
    {
        question: "Uống",
        answers: ["和 (hé)", "喝 (hē)"],
        correct: "喝 (hē)",
    },
    {
        question: "Trà",
        answers: ["茶 (chá)", "谢谢 (xièxie)"],
        correct: "茶 (chá)",
    },
    {
        question: "Cảm tạ, cảm ơn, biết ơn",
        answers: ["感谢 (gǎnxiè)", "客气 (kèqi)"],
        correct: "感谢 (gǎnxiè)",
    },
    {
        question: "Thân thể, sức khoẻ",
        answers: ["多谢 (duōxiè)", "身体 (shēntǐ)"],
        correct: "身体 (shēntǐ)",
    },
    {
        question: "Việc, sự việc",
        answers: ["十 (shí)", "事 (shì)"],
        correct: "事 (shì)",
    },
    {
        question: "Vương",
        answers: ["日 (rì)", "王 (Wáng)"],
        correct: "王 (Wáng)",
    },
    {
        question: "Giáo sư",
        answers: ["教授 (jiàoshòu)", "校长 (xiàozhǎng)"],
        correct: "教授 (jiàoshòu)",
    }
];


