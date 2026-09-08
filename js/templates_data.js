const TEMPLATES_DATA = [
  {
    "id": "formal_letter",
    "type": "task1",
    "title": "Formal Letter (Thư Trang Trọng)",
    "titleVi": "Mẫu Thư Trang Trọng (Hỏi thông tin, Khiếu nại, Xin việc, Xin nghỉ)",
    "targetWords": 120,
    "description": "Sử dụng cho các đề bài viết thư cho tổ chức, người quản lý, trường học hoặc người chưa quen biết.",
    "skeletonText": "Salutation:\nDear Sir or Madam, (hoặc Dear Mr. [Họ] / Dear Ms. [Họ])\n\nOpening Paragraph:\nI am writing this letter with regard to [Mục đích / Khóa học / Vấn đề]... Thank you very much for your prompt assistance.\n\nBody Paragraph 1 (Background & Experience):\nRegarding my academic background, I obtained a [Chứng chỉ] last year and I have over [Số năm] years of experience as a [Chức danh công việc]. My main responsibilities include [Nhiệm vụ chính].\n\nBody Paragraph 2 (Reasons & Expectations):\nFirst of all, I am particularly interested in [Khóa học / Vấn đề] because [Lý do 1]. The main reason for choosing your institute is that [Lý do 2]. Furthermore, I hope this course provides me with practical knowledge so that I can [Mục tiêu].\n\nClosing Paragraph & Sign-off:\nIf you require any further information, please do not hesitate to contact me via email. Thank you in advance for your consideration. I look forward to hearing from you soon.\n\nYours faithfully,\n[Your Name]",
    "sampleText": "Dear Sir or Madam,\n\nI am writing this letter with regard to the English course at your training center. Thank you very much for your prompt assistance.\n\nRegarding my academic background, I obtained a B1 VSTEP certificate last year and I have over three years of experience as a software assistant. My main responsibilities include supporting customer requests and managing daily documentation.\n\nFirst of all, I am particularly interested in this course because I want to enhance my professional communication skills. The main reason for choosing your institute is that your flexible schedule suits my current work routine. Furthermore, I hope this course provides me with practical knowledge so that I can manage projects more efficiently.\n\nIf you require any further information, please do not hesitate to contact me via email. Thank you in advance for your consideration. I look forward to hearing from you soon.\n\nYours faithfully,\n[Your Name]",
    "translationVi": "Kính gửi Ông/Bà,\n\nTôi viết thư này liên quan đến khóa học tiếng Anh tại trung tâm của bạn. Cảm ơn sự hỗ trợ kịp thời của bạn.\n\nVề học vấn của tôi, tôi đã đạt chứng chỉ B1 VSTEP năm ngoái và có hơn 3 năm kinh nghiệm làm trợ lý phần mềm. Nhiệm vụ chính của tôi bao gồm hỗ trợ khách hàng và quản lý tài liệu.\n\nĐầu tiên, tôi rất quan tâm đến khóa học này vì muốn nâng cao kỹ năng giao tiếp chuyên nghiệp. Lý do chính tôi chọn trung tâm là lịch học linh hoạt phù hợp với công việc. Hơn nữa, tôi hy vọng khóa học mang lại kiến thức thực tế để quản lý dự án tốt hơn.\n\nNếu ông/bà cần thêm thông tin, xin vui lòng liên hệ với tôi qua email. Xin cảm ơn ông/bà trước vì đã xem xét. Tôi rất mong sớm nhận được phản hồi.\n\nTrân trọng,\n[Tên của bạn]",
    "keywordsSentenceMap": [
      {
        "sentenceIndex": 1,
        "keywords": ["Dear Sir or Madam", "Salutation"]
      },
      {
        "sentenceIndex": 2,
        "keywords": ["writing with regard to", "English course", "prompt assistance"]
      },
      {
        "sentenceIndex": 3,
        "keywords": ["academic background", "B1 certificate", "three years experience"]
      },
      {
        "sentenceIndex": 4,
        "keywords": ["main responsibilities", "customer requests", "documentation"]
      },
      {
        "sentenceIndex": 5,
        "keywords": ["interested in course", "enhance communication skills"]
      },
      {
        "sentenceIndex": 6,
        "keywords": ["main reason", "flexible schedule", "work routine"]
      },
      {
        "sentenceIndex": 7,
        "keywords": ["hope course provides", "practical knowledge", "manage projects"]
      },
      {
        "sentenceIndex": 8,
        "keywords": ["require further information", "hesitate to contact", "consideration", "look forward"]
      },
      {
        "sentenceIndex": 9,
        "keywords": ["Yours faithfully", "Your Name"]
      }
    ],
    "structure": [
      {
        "section": "Salutation",
        "options": [
          "Dear Sir or Madam, (Khi không biết tên người nhận)",
          "Dear Mr. [Họ] / Dear Ms. [Họ], (Khi đã biết tên người nhận)"
        ]
      },
      {
        "section": "Opening Paragraph",
        "phrases": [
          "I am writing this letter to inquire about [Topic]...",
          "I am writing this letter to express my dissatisfaction regarding [Topic]...",
          "I am writing this letter with regard to [Topic]..."
        ]
      },
      {
        "section": "Body Paragraphs",
        "phrases": [
          "I have a Bachelor's degree in [Field] from [University].",
          "I have over [Number] years of experience as a [Job Title].",
          "The main reason for choosing this course is that [Reason]...",
          "Would you kindly allow me to [Request]...?"
        ]
      },
      {
        "section": "Closing Paragraph & Sign-off",
        "phrases": [
          "If you require any further information, please do not hesitate to contact me.",
          "Thank you in advance for your consideration / assistance.",
          "I look forward to hearing from you soon.",
          "Yours faithfully, / Yours sincerely,"
        ]
      }
    ],
    "masterV2": {
      "title": "Formal Letter (Bản Master V2 - Band C1)",
      "targetWords": 150,
      "description": "Phiên bản nâng cao C1 với văn phong hành chính cao cấp, từ vựng chuyên môn và cấu trúc câu phức chuẩn mực.",
      "skeletonText": "Salutation:\nDear Sir or Madam, (or Dear Mr./Ms. [Surname],)\n\nOpening Paragraph:\nI am writing to formally express my keen interest in [Subject/Course/Position] at your esteemed organization. Having followed your institution’s academic achievements with great admiration, I am eager to contribute to and benefit from your professional domain.\n\nBody Paragraph 1 (Academic Background & Qualifications):\nRegarding my professional background, I hold a Bachelor’s degree in [Field] and have accumulated over [Number] years of hands-on experience as a [Job Title]. In my current role, I am primarily responsible for overseeing complex operations, managing client communications, and optimizing workflow efficiency.\n\nBody Paragraph 2 (Strategic Alignment & Rationale):\nMy primary motivation for applying for this program stems from a desire to acquire cutting-edge methodologies in [Domain]. Given your institution's stellar reputation for academic rigor, I am confident that this course will equip me with the strategic insights required to elevate my career.\n\nClosing Paragraph & Sign-off:\nThank you in advance for considering my application. Should you require any further documentation, please do not hesitate to contact me at your earliest convenience. I look forward to hearing from you soon.\n\nYours faithfully,\n[Your Name]",
      "sampleText": "Dear Sir or Madam,\n\nI am writing to formally express my keen interest in the Advanced Business English Course at your esteemed training institute. Having followed your organization’s academic achievements with great admiration, I am eager to contribute to and benefit from your professional domain.\n\nRegarding my professional background, I hold a Bachelor’s degree in Information Technology and have accumulated over three years of hands-on experience as a senior software specialist. In my current role, I am primarily responsible for overseeing complex client projects, facilitating international communications, and optimizing workflow efficiency.\n\nMy primary motivation for applying for this program stems from a desire to acquire cutting-edge communication methodologies in corporate environments. Given your institution's stellar reputation for academic rigor and flexible scheduling, I am confident that this course will equip me with the strategic insights required to manage international software deployments seamlessly.\n\nThank you in advance for considering my application. Should you require any further documentation, please do not hesitate to contact me at your earliest convenience via email. I look forward to hearing from you soon.\n\nYours faithfully,\n[Your Name]",
      "translationVi": "Kính gửi Ông/Bà,\n\nTôi viết thư này để chính thức bày tỏ sự quan tâm sâu sắc đến Khóa học Tiếng Anh Thương mại Nâng cao tại viện đào tạo quý báu của ông/bà. Sau khi theo dõi những thành tựu học thuật của tổ chức với sự ngưỡng mộ lớn, tôi rất khao khát được đóng góp và thụ hưởng từ lĩnh vực chuyên môn của quý viện.\n\nVề nền tảng chuyên môn, tôi sở hữu bằng Cử nhân Công nghệ Thông tin và đã tích lũy hơn 3 năm kinh nghiệm thực chiến với tư cách là chuyên viên phần mềm cao cấp. Trong vai trò hiện tại, tôi chịu trách nhiệm chính về việc giám sát các dự án khách hàng phức tạp, thúc đẩy giao tiếp quốc tế và tối ưu hóa hiệu suất làm việc.\n\nĐộng lực chính của tôi khi nộp đơn cho chương trình này xuất phát từ mong muốn tiếp thu các phương pháp luận giao tiếp tiên tiến trong môi trường doanh nghiệp. Với uy tín lừng lẫy của quý viện về sự nghiêm túc học thuật và lịch học linh hoạt, tôi tin tưởng chắc chắn rằng khóa học này sẽ trang bị cho tôi những góc nhìn chiến lược cần thiết để quản lý các dự án triển khai phần mềm quốc tế một cách mượt mà.\n\nXin cảm ơn ông/bà trước vì đã xem xét đơn đăng ký của tôi. Nếu ông/bà yêu cầu thêm bất kỳ tài liệu nào, xin vui lòng liên hệ với tôi sớm nhất có thể qua email. Tôi rất mong nhận được phản hồi từ ông/bà.\n\nTrân trọng,\n[Tên của bạn]",
      "keywordsSentenceMap": [
        {
          "sentenceIndex": 1,
          "keywords": ["formally express keen interest", "esteemed training institute", "followed achievements admiration"]
        },
        {
          "sentenceIndex": 2,
          "keywords": ["Bachelor's degree IT", "accumulated three years experience", "senior software specialist"]
        },
        {
          "sentenceIndex": 3,
          "keywords": ["primarily responsible for", "overseeing complex projects", "facilitating communications"]
        },
        {
          "sentenceIndex": 4,
          "keywords": ["primary motivation stems from", "acquire cutting-edge methodologies", "corporate environments"]
        },
        {
          "sentenceIndex": 5,
          "keywords": ["stellar reputation academic rigor", "equip strategic insights", "manage deployments seamlessly"]
        },
        {
          "sentenceIndex": 6,
          "keywords": ["considering application", "require further documentation", "earliest convenience", "Yours faithfully"]
        }
      ],
      "structure": [
        {
          "section": "Formal Salutation",
          "options": [
            "Dear Sir or Madam, (Khi không biết tên người nhận)",
            "Dear Mr./Ms. [Surname], (Khi đã biết tên người nhận)"
          ]
        },
        {
          "section": "C1 Opening Statement",
          "phrases": [
            "I am writing to formally express my keen interest in [Subject]...",
            "Having followed your organization's achievements with great admiration...",
            "I am eager to contribute to and benefit from your professional domain."
          ]
        },
        {
          "section": "C1 Qualifications & Experience",
          "phrases": [
            "I hold a Bachelor's degree in [Field] and have accumulated over [N] years of experience...",
            "In my current role, I am primarily responsible for overseeing [Operations]..."
          ]
        },
        {
          "section": "C1 Strategic Rationale",
          "phrases": [
            "My primary motivation stems from a desire to acquire cutting-edge methodologies in...",
            "Given your institution's stellar reputation for academic rigor...",
            "I am confident this program will equip me with strategic insights..."
          ]
        },
        {
          "section": "C1 Formal Closing",
          "phrases": [
            "Thank you in advance for considering my application.",
            "Should you require any further documentation, please do not hesitate to contact me at your earliest convenience.",
            "Yours faithfully, / Yours sincerely,"
          ]
        }
      ]
    }
  },
  {
    "id": "informal_letter",
    "type": "task1",
    "title": "Informal Letter (Thư Thân Mật)",
    "titleVi": "Mẫu Thư Thân Mật (Viết cho bạn bè, người thân, đồng nghiệp)",
    "targetWords": 120,
    "description": "Sử dụng cho đề bài viết thư chia sẻ kinh nghiệm, cho lời khuyên, mời dự tiệc hoặc cảm ơn bạn bè.",
    "skeletonText": "Salutation:\nDear [Tên bạn],\n\nOpening Paragraph:\nHow are you? How has your family been? Many thanks for your last letter. It is great to hear from you again. I am sorry I haven't written for such a long time, but I am really busy studying English to pass the B2 VSTEP exam. I hope you and your family are all doing well.\n\nBody Paragraph 1:\nI am writing to give you some advice about [Chủ đề]. Firstly, I think you should [Lời khuyên 1] because [Lý do 1]. Regarding [Khía cạnh 2], you should [Lời khuyên 2] to [Lợi ích 2].\n\nBody Paragraph 2:\nLastly, don't worry about [Khó khăn/Lo lắng] because [Lý do 3]. Anyway, I must go and get on with my study now. Give my best love to your family. We must try and meet up soon!\n\nSign-off:\nI look forward to hearing from you soon.\n\nBest regards,\n[Your Name]",
    "sampleText": "Dear Alex,\n\nHow are you? How has your family been? Many thanks for your last letter. It is great to hear from you again. I am sorry I haven't written for such a long time, but I am really busy studying English to pass the B2 VSTEP exam. I hope you and your family are all doing well.\n\nI am writing to give you some advice about traveling to Vietnam this summer. Firstly, I think you should visit Da Nang city because the scenery is magnificent and the local food is delicious yet affordable. Regarding accommodation, you should book a room near the beach to enjoy fresh air and breathtaking views of the sunrise.\n\nLastly, don't worry about language barriers because local people are very friendly, polite, and hospitable. Anyway, I must go and get on with my study now. Give my best love to your family. We must try and meet up soon!\n\nI look forward to hearing from you soon.\n\nBest regards,\n[Your Name]",
    "translationVi": "Alex thân mến,\n\nBạn khỏe không? Gia đình bạn thế nào? Cảm ơn bạn rất nhiều vì lá thư trước. Rất vui được nhận lại tin từ bạn. Tớ xin lỗi vì đã lâu không viết thư, nhưng tớ đang rất bận học tiếng Anh để vượt qua kỳ thi B2 VSTEP. Tớ hy vọng bạn và gia đình đều khỏe mạnh.\n\nTớ viết thư này để cho bạn vài lời khuyên về chuyến du lịch Việt Nam hè này. Đầu tiên, tớ nghĩ bạn nên đến thăm Đà Nẵng vì phong cảnh tuyệt đẹp và đồ ăn địa phương ngon mà rẻ. Về chỗ ở, bạn nên đặt phòng gần biển để tận hưởng không khí trong lành và cảnh bình minh hùng vĩ.\n\nCuối cùng, đừng lo về rào cản ngôn ngữ vì người dân địa phương rất thân thiện, lịch sự và hiếu khách. Dù sao thì tớ phải tiếp tục học bài đây. Cho tớ gửi lời chúc tới gia đình nhé. Chúng ta nhất định phải gặp nhau sớm đấy!\n\nMong sớm nhận thư bạn.\n\nThân ái,\n[Tên của bạn]",
    "keywordsSentenceMap": [
      {
        "sentenceIndex": 1,
        "keywords": ["Dear Alex", "Salutation"]
      },
      {
        "sentenceIndex": 2,
        "keywords": ["How are you", "thanks for last letter", "sorry haven't written", "busy studying B2 VSTEP"]
      },
      {
        "sentenceIndex": 3,
        "keywords": ["writing to give advice", "traveling to Vietnam"]
      },
      {
        "sentenceIndex": 4,
        "keywords": ["visit Da Nang", "scenery magnificent", "local food delicious"]
      },
      {
        "sentenceIndex": 5,
        "keywords": ["accommodation", "book room near beach", "enjoy fresh air", "breathtaking views"]
      },
      {
        "sentenceIndex": 6,
        "keywords": ["language barriers", "people friendly, polite, hospitable"]
      },
      {
        "sentenceIndex": 7,
        "keywords": ["get on with study", "give love to family", "meet up soon"]
      },
      {
        "sentenceIndex": 8,
        "keywords": ["Best regards", "Your Name"]
      }
    ],
    "structure": [
      {
        "section": "Opening",
        "phrases": [
          "Dear [Name],",
          "How are you? How has your family been?",
          "Many thanks for your last letter. It is great to hear from you again."
        ]
      },
      {
        "section": "Purpose & Main Body",
        "phrases": [
          "I am writing to [suggest a gift / give advice / invite you to...].",
          "Firstly, I think you should...",
          "Regarding [Topic], you can...",
          "Lastly, don't worry about..."
        ]
      },
      {
        "section": "Closing & Sign-off",
        "phrases": [
          "Anyway, I must go and get on with my study.",
          "Give my love to your family. We must try and meet up soon.",
          "Best regards, / Warm wishes,"
        ]
      }
    ],
    "masterV2": {
      "title": "Informal Letter (Bản Master V2 - Band C1)",
      "targetWords": 150,
      "description": "Phiên bản nâng cao C1 với ngôn ngữ tự nhiên, từ vựng bản ngữ phong phú (idiomatic expressions) và lối viết cuốn hút.",
      "skeletonText": "Salutation:\nDear [Friend's Name],\n\nOpening Paragraph:\nI hope this letter finds you and your family in high spirits! It was such a delight to receive your recent update. Please accept my sincere apologies for the slight delay in replying; I have been fully immersed in an intensive preparation program over the past few weeks.\n\nBody Paragraph 1 (Core Advice & Insider Insights):\nI was thrilled to hear about your upcoming journey to [Destination], and I would love to share a few insider recommendations to ensure your trip is nothing short of extraordinary. First and foremost, visiting [Location] is an absolute must. The breathtaking natural scenery, combined with its vibrant culinary scene, offers a uniquely enriching atmosphere.\n\nBody Paragraph 2 (Practical Logistics & Encouragement):\nRegarding accommodation, I highly recommend securing a room in advance to wake up to spectacular views. Furthermore, please rest assured regarding any potential language barriers—the locals are renowned for their exceptional warmth and hospitality, always ready to lend a helping hand.\n\nClosing Paragraph & Sign-off:\nAnyway, I must wrap this up and get back to my evening study session. Please convey my warmest regards to your family. I am truly looking forward to catching up in person soon!\n\nWarmest wishes,\n[Your Name]",
      "sampleText": "Dear Alex,\n\nI hope this letter finds you and your family in high spirits! It was such a delight to receive your recent update. Please accept my sincere apologies for the slight delay in replying; I have been fully immersed in an intensive VSTEP B2/C1 preparation program over the past few weeks.\n\nI was thrilled to hear about your upcoming summer trip to Vietnam, and I would love to share a few insider recommendations to ensure your experience is nothing short of extraordinary. First and foremost, spending a few days exploring Da Nang city is an absolute must. The breathtaking coastal vistas, combined with its vibrant street food culture, offer a uniquely enriching atmosphere that you simply cannot miss.\n\nRegarding accommodation, I highly recommend securing a beachfront boutique hotel well in advance to enjoy fresh ocean breezes and spectacular sunrise views. Furthermore, please rest assured regarding any potential language barriers—the local people are renowned for their exceptional warmth and hospitality, always eager to lend a helping hand to travelers.\n\nAnyway, I must wrap this up and get back to my evening study session. Please convey my warmest regards to your family. I am truly looking forward to catching up in person soon!\n\nWarmest wishes,\n[Your Name]",
      "translationVi": "Alex thân mến,\n\nTớ hy vọng lá thư này đến tay bạn khi bạn và gia đình đều tràn đầy tinh thần phấn chấn! Rất vui mừng khi nhận được tin tức mới nhất từ bạn. Xin hãy chấp nhận lời xin lỗi chân thành của tớ vì sự phản hồi chậm trễ này; tớ đã hoàn toàn đắm chìm vào một chương trình luyện thi VSTEP B2/C1 cấp tốc trong vài tuần qua.\n\nTớ vô cùng hào hứng khi nghe về chuyến du lịch hè sắp tới của bạn tới Việt Nam, và tớ rất muốn chia sẻ vài gợi ý mang tính 'người trong cuộc' để đảm bảo trải nghiệm của bạn không có gì tuyệt vời hơn thế. Trước hết và quan trọng nhất, dành vài ngày khám phá thành phố Đà Nẵng là điều tuyệt đối không thể bỏ qua. Cảnh quan bờ biển hùng vĩ, kết hợp với văn hóa ẩm thực đường phố sôi động, mang lại một không khí phong phú độc đáo mà bạn đơn giản là không thể bỏ lỡ.\n\nVề chỗ ở, tớ rất khuyên bạn nên đặt trước một khách sạn boutique ven biển từ sớm để tận hưởng làn gió biển tươi mát và cảnh bình minh ngoạn mục. Hơn nữa, xin bạn hãy yên tâm về bất kỳ rào cản ngôn ngữ tiềm ẩn nào—người dân địa phương nổi tiếng với sự nồng hậu và hiếu khách tuyệt vời, luôn sẵn sàng giúp đỡ du khách.\n\nDù sao thì tớ phải khép lại lá thư này để quay lại buổi học tối đây. Cho tớ gửi lời chào ấm áp nhất tới gia đình bạn nhé. Tớ thực sự rất mong chờ được gặp mặt và trò chuyện trực tiếp với bạn sớm!\n\nNhững lời chúc ấm áp nhất,\n[Tên của bạn]",
      "keywordsSentenceMap": [
        {
          "sentenceIndex": 1,
          "keywords": ["finds high spirits", "delight to receive update", "apologies slight delay", "fully immersed"]
        },
        {
          "sentenceIndex": 2,
          "keywords": ["thrilled upcoming trip", "insider recommendations", "nothing short of extraordinary"]
        },
        {
          "sentenceIndex": 3,
          "keywords": ["exploring Da Nang absolute must", "breathtaking coastal vistas", "vibrant street food", "enriching atmosphere"]
        },
        {
          "sentenceIndex": 4,
          "keywords": ["securing beachfront hotel", "spectacular sunrise views", "rest assured language barriers"]
        },
        {
          "sentenceIndex": 5,
          "keywords": ["renowned exceptional warmth", "hospitality eager to lend hand"]
        },
        {
          "sentenceIndex": 6,
          "keywords": ["wrap this up", "warmest regards family", "catching up in person", "Warmest wishes"]
        }
      ],
      "structure": [
        {
          "section": "C1 Warm Opening",
          "phrases": [
            "I hope this letter finds you and your family in high spirits!",
            "It was such a delight to receive your recent update.",
            "Please accept my sincere apologies for the slight delay in replying..."
          ]
        },
        {
          "section": "C1 Insider Recommendations",
          "phrases": [
            "I would love to share a few insider recommendations to ensure your trip is nothing short of extraordinary.",
            "First and foremost, [Location] is an absolute must.",
            "The breathtaking vistas combined with [Aspect] offer a uniquely enriching atmosphere..."
          ]
        },
        {
          "section": "C1 Practical Advice & Reassurance",
          "phrases": [
            "Regarding accommodation, I highly recommend securing [Room] well in advance...",
            "Please rest assured regarding any potential language barriers...",
            "The locals are renowned for their exceptional warmth and hospitality..."
          ]
        },
        {
          "section": "C1 Affectionate Sign-off",
          "phrases": [
            "Anyway, I must wrap this up and get back to my study session.",
            "Please convey my warmest regards to your family.",
            "I am truly looking forward to catching up in person soon!",
            "Warmest wishes, / Best regards,"
          ]
        }
      ]
    }
  },
  {
    "id": "advantage_essay",
    "type": "task2",
    "title": "Advantage & Disadvantage Essay",
    "titleVi": "Bài Luận Lợi Ích & Tác hại (Advantages / Disadvantages)",
    "targetWords": 250,
    "description": "Sử dụng cho đề bài phân tích 2 mặt tốt và xấu của một chủ đề (Ví dụ: Cuộc sống thành thị, Phương tiện công cộng, Công nghệ).",
    "skeletonText": "Introduction:\n[Topic] has become an integral part of the rising debate in the present world, including Vietnam. While proponents highlight its obvious merits, opponents argue against its negative impacts. This essay will discuss the benefits and drawbacks of such a situation and draw a conclusion.\n\nBody 1: Advantages:\nTo commence with, [Topic] offers several significant advantages. The most prominent one is that [Advantage 1: Diễn giải ưu điểm 1 + ví dụ/giải thích ngắn]. Another good point would be that [Advantage 2: Diễn giải ưu điểm 2]. In addition, [Advantage 3: Diễn giải ưu điểm 3], which brings substantial value to individuals and society.\n\nBody 2: Disadvantages:\nOn the other hand, critics may point out that one of the most significant disadvantages of [Topic] is that [Disadvantage 1: Diễn giải nhược điểm 1 + hệ quả]. Another major concern is that [Disadvantage 2: Diễn giải nhược điểm 2], creating potential challenges for users or the community.\n\nConclusion:\nTo conclude, there are two sides to everything, and this situation is not an exception. While [Topic] presents undeniable drawbacks, its benefits are also clearly evident. Therefore, the efficient and sensible use of [Topic] should be promoted, whereas its misuse should be prevented.",
    "sampleText": "In recent years, public transport has become an integral part of the rising debate in the modern world, including Vietnam. While proponents highlight its obvious merits, opponents argue against its negative impacts. This essay will discuss both the benefits and drawbacks of such a situation before drawing a logical conclusion.\n\nTo commence with, public transport offers several significant advantages. The most prominent one is that traveling by bus or train is much safer for passengers, leading to fewer traffic accidents on the roads. Another good point would be that it allows commuters to feel comfortable and relaxed, as they can listen to music, read books, or take a short nap during the journey. In addition, using public transit helps protect the environment by reducing greenhouse gas emissions.\n\nOn the other hand, critics may point out that one of the main disadvantages of public transport is its inconvenience. For instance, buses often run slowly and infrastructure in some areas remains in poor condition. Another major concern is that public vehicles can become extremely crowded during rush hours, increasing the risk of spreading infectious diseases among passengers.\n\nTo conclude, there are two sides to everything, and public transport is not an exception. While it presents undeniable drawbacks in terms of peak-hour crowding and delay, its environmental and safety benefits are clearly evident. Therefore, governments should invest in upgrading infrastructure, whereas citizens should be encouraged to utilize public transport wisely.",
    "translationVi": "Trong những năm gần đây, phương tiện giao thông công cộng đã trở thành một phần quan trọng trong các cuộc thảo luận ở thế giới hiện đại, bao gồm cả Việt Nam. Trong khi những người ủng hộ nhấn mạnh những lợi ích rõ ràng, thì những người phản đối lại tranh luận về tác động tiêu cực của nó. Bài luận này sẽ thảo luận về cả ưu điểm và nhược điểm của thực trạng này trước khi đưa ra kết luận hợp lý.\n\nĐầu tiên, phương tiện công cộng mang lại một số ưu điểm đáng kể. Nổi bật nhất là việc đi lại bằng xe buýt hoặc tàu hỏa an toàn hơn nhiều cho hành khách, dẫn đến ít tai nạn giao thông hơn trên đường. Một điểm tốt khác là nó cho phép người đi làm cảm thấy thoải mái và thư giãn, vì họ có thể nghe nhạc, đọc sách hoặc chợp mắt một lúc trong chuyến đi. Thêm vào đó, sử dụng giao thông công cộng giúp bảo vệ môi trường bằng cách giảm phát thải khí nhà kính.\n\nMặt khác, các nhà phê bình có thể chỉ ra rằng một trong những nhược điểm chính của giao thông công cộng là sự bất tiện của nó. Ví dụ, xe buýt thường chạy chậm và hạ tầng ở một số khu vực vẫn còn kém chất lượng. Một mối lo ngại lớn khác là các phương tiện công cộng có thể trở nên cực kỳ đông đúc vào giờ cao điểm, làm tăng nguy cơ lây truyền bệnh truyền nhiễm giữa các hành khách.\n\nTóm lại, mọi thứ đều có hai mặt và giao thông công cộng cũng không ngoại lệ. Mặc dù nó bộc lộ những nhược điểm không thể phủ nhận về sự đông đúc và chậm trễ giờ cao điểm, nhưng lợi ích về môi trường và an toàn của nó là rõ ràng. Do đó, chính phủ nên đầu tư nâng cấp hạ tầng, trong khi người dân nên được khuyến khích sử dụng phương tiện công cộng một cách hợp lý.",
    "keywordsSentenceMap": [
      {
        "sentenceIndex": 1,
        "keywords": ["integral part of rising debate", "proponents merits opponents negative impacts"]
      },
      {
        "sentenceIndex": 2,
        "keywords": ["discuss benefits drawbacks", "drawing logical conclusion"]
      },
      {
        "sentenceIndex": 3,
        "keywords": ["To commence with", "prominent one", "safer for passengers", "fewer accidents"]
      },
      {
        "sentenceIndex": 4,
        "keywords": ["Another good point", "comfortable relaxed", "listen to music nap"]
      },
      {
        "sentenceIndex": 5,
        "keywords": ["In addition", "protect environment", "reducing emissions"]
      },
      {
        "sentenceIndex": 6,
        "keywords": ["On the other hand", "main disadvantage", "inconvenience", "run slowly infrastructure"]
      },
      {
        "sentenceIndex": 7,
        "keywords": ["Another major concern", "crowded rush hours", "infectious diseases"]
      },
      {
        "sentenceIndex": 8,
        "keywords": ["To conclude", "two sides to everything", "undeniable drawbacks", "benefits clearly evident"]
      }
    ],
    "structure": [
      {
        "section": "Introduction",
        "phrases": [
          "[Topic] has become an integral part of the rising debate in the present world, including Vietnam.",
          "While proponents highlight its obvious merits, opponents argue against its negative impacts.",
          "This essay will discuss both the benefits and drawbacks before drawing a conclusion."
        ]
      },
      {
        "section": "Body 1: Advantages",
        "phrases": [
          "To commence with, [Topic] offers several significant advantages.",
          "The most prominent one is that [Advantage 1 + Example].",
          "Another good point would be that [Advantage 2].",
          "In addition, [Advantage 3], which brings substantial value to individuals."
        ]
      },
      {
        "section": "Body 2: Disadvantages",
        "phrases": [
          "On the other hand, critics may point out that one of the main disadvantages is that [Disadvantage 1].",
          "Another major concern is that [Disadvantage 2], creating potential challenges."
        ]
      },
      {
        "section": "Conclusion",
        "phrases": [
          "To conclude, there are two sides to everything, and this situation is not an exception.",
          "While [Topic] presents undeniable drawbacks, its benefits are also clearly evident.",
          "Therefore, efficient use should be promoted, whereas misuse should be prevented."
        ]
      }
    ],
    "masterV2": {
      "title": "Advantage & Disadvantage Essay (Bản Master V2 - Band C1)",
      "targetWords": 280,
      "description": "Phiên bản nâng cao C1 phân tích đa chiều với cấu trúc lập luận quy chuẩn, từ vựng học thuật cao và đánh giá tác động sâu sắc.",
      "skeletonText": "Introduction:\nIn the contemporary era, the rapid development of [Topic] has emerged as a cornerstone of socio-economic progress, yielding both profound merits and notable complexities. Although critics point toward certain intrinsic vulnerabilities, I am convinced that the constructive outcomes far outweigh the adverse ramifications. This essay aims to critically evaluate both sides of the issue before drawing a logical conclusion.\n\nBody 1: Multifaceted Advantages:\nTo begin with, the adoption of [Topic] offers a myriad of compelling benefits. Paramount among these is that [Advantage 1: Diễn giải ưu điểm 1 + hệ quả tích cực]. Furthermore, it is noteworthy that [Advantage 2: Diễn giải ưu điểm 2]. Additionally, [Advantage 3: Diễn giải ưu điểm 3], thereby driving sustainable societal advancement.\n\nBody 2: Inherent Shortcomings & Strategic Mitigation:\nConversely, it would be remiss to ignore the underlying shortcomings associated with [Topic]. A primary drawback lies in [Disadvantage 1: Diễn giải nhược điểm 1 + tác động tiêu cực]. Furthermore, concerns have been voiced regarding [Disadvantage 2: Diễn giải nhược điểm 2]. In addition, empirical evidence suggests that without robust policy frameworks and sensible utilization, such drawbacks could inadvertently impede long-term growth.\n\nConclusion:\nTo synthesize, every major societal evolution inevitably entails a duality of advantages and drawbacks. While [Topic] presents non-negligible challenges, its multifaceted benefits remain indispensable to modern progress. Consequently, visionary policies must be instituted to harness its full potential while systematically mitigating its negative externalities.",
      "sampleText": "In the contemporary era, the exponential expansion of public transit networks has emerged as a cornerstone of urban progress, yielding both profound merits and notable complexities. Although critics point toward certain operational vulnerabilities, I am convinced that the constructive outcomes far outweigh the adverse ramifications. This essay aims to critically evaluate both sides of the issue before drawing a logical conclusion.\n\nTo begin with, the comprehensive adoption of public transport offers a myriad of compelling benefits. Paramount among these is that traveling via high-speed buses or rail systems drastically enhances passenger safety, resulting in a substantial decline in road fatalities. Furthermore, it is noteworthy that public transit fosters environmental sustainability by curbing greenhouse gas emissions and reducing urban carbon footprints. Additionally, commuting on modern transit systems liberates individuals from driving stress, enabling them to engage in productive tasks or mental relaxation during transit, thereby elevating overall living standards.\n\nConversely, it would be remiss to ignore the underlying shortcomings associated with mass public transport. A primary drawback lies in infrastructural bottlenecks and periodic delays, particularly in rapidly growing metropolitan areas. Furthermore, serious concerns have been voiced regarding severe peak-hour congestion, which heightens discomfort and escalates the transmission risk of airborne illnesses. In addition, empirical evidence suggests that without continuous municipal investment and modernized management, such systems may fail to satisfy growing commuting demands.\n\nTo synthesize, every major infrastructure evolution inevitably entails a duality of advantages and drawbacks. While public transit presents non-negligible challenges regarding peak-hour congestion and operational delays, its multifaceted safety and environmental benefits remain indispensable to modern civilization. Consequently, visionary policies must be instituted to upgrade transit infrastructure while systematically mitigating its negative externalities.",
      "translationVi": "Trong kỷ nguyên hiện đại, sự mở rộng theo cấp số nhân của các mạng lưới giao thông công cộng đã nổi lên như một viên đá tảng của sự tiến bộ đô thị, mang lại cả những lợi ích sâu sắc lẫn những phức tạp đáng chú ý. Mặc dù các nhà phê bình chỉ ra một số lỗ hổng vận hành nhất định, tôi tin tưởng chắc chắn rằng những kết quả tích cực vượt xa các hệ lụy tiêu cực. Bài luận này nhằm mục đích đánh giá một cách phê phán cả hai mặt của vấn đề trước khi đưa ra kết luận hợp lý.\n\nĐầu tiên, việc áp dụng toàn diện giao thông công cộng mang lại vô số lợi ích thuyết phục. Tối quan trọng trong số này là việc di chuyển qua hệ thống xe buýt tốc độ cao hoặc đường sắt giúp tăng cường đáng kể sự an toàn của hành khách, dẫn đến sự sụt giảm đáng kể tỷ lệ tử vong do tai nạn giao thông. Hơn nữa, đáng chú ý là giao thông công cộng thúc đẩy sự bền vững môi trường bằng cách cắt giảm lượng phát thải khí nhà kính và giảm dấu chân cacbon đô thị. Thêm vào đó, việc đi lại trên các hệ thống giao thông hiện đại giải phóng cá nhân khỏi căng thẳng khi lái xe, cho phép họ tham gia vào các công việc năng suất hoặc thư giãn tinh thần trong quá trình di chuyển, từ đó nâng cao mức sống tổng thể.\n\nNgược lại, sẽ là thiếu sót nếu bỏ qua những nhược điểm tiềm ẩn gắn liền với giao thông công cộng khối lượng lớn. Một nhược điểm chính nằm ở các điểm nghẽn hạ tầng và sự chậm trễ định kỳ, đặc biệt là ở các khu vực đô thị phát triển nhanh chóng. Hơn nữa, những lo ngại nghiêm trọng đã được dấy lên về tình trạng ùn tắc cực kỳ gay gắt vào giờ cao điểm, làm tăng sự khó chịu và leo thang nguy cơ lây truyền các bệnh lây qua đường hô hấp. Ngoài ra, các bằng chứng thực nghiệm cho thấy rằng nếu không có sự đầu tư liên tục của thành phố và quản lý hiện đại hóa, các hệ thống như vậy có thể thất bại trong việc đáp ứng nhu cầu đi lại ngày càng tăng.\n\nTóm lại, mọi sự phát triển hạ tầng lớn đều tất yếu kéo theo hai mặt ưu điểm và nhược điểm. Mặc dù giao thông công cộng đặt ra những thách thức không thể coi nhẹ về sự đông đúc giờ cao điểm và chậm trễ vận hành, nhưng những lợi ích đa chiều về an toàn và môi trường của nó vẫn là không thể thiếu đối với văn minh hiện đại. Do đó, các chính sách tầm nhìn xa phải được ban hành để nâng cấp hạ tầng giao thông đồng thời giảm thiểu một cách hệ thống các tác động ngoại ứng tiêu cực của nó.",
      "keywordsSentenceMap": [
        {
          "sentenceIndex": 1,
          "keywords": ["exponential expansion public transit", "cornerstone urban progress", "profound merits notable complexities"]
        },
        {
          "sentenceIndex": 2,
          "keywords": ["constructive outcomes outweigh adverse ramifications", "critically evaluate both sides"]
        },
        {
          "sentenceIndex": 3,
          "keywords": ["myriad compelling benefits", "drastically enhances safety", "decline road fatalities"]
        },
        {
          "sentenceIndex": 4,
          "keywords": ["fosters environmental sustainability", "curbing greenhouse emissions", "reducing carbon footprints"]
        },
        {
          "sentenceIndex": 5,
          "keywords": ["liberates driving stress", "engage in productive tasks", "elevating living standards"]
        },
        {
          "sentenceIndex": 6,
          "keywords": ["remiss ignore underlying shortcomings", "infrastructural bottlenecks", "periodic delays"]
        },
        {
          "sentenceIndex": 7,
          "keywords": ["peak-hour congestion", "transmission risk airborne illnesses", "empirical evidence suggests"]
        },
        {
          "sentenceIndex": 8,
          "keywords": ["duality advantages drawbacks", "indispensable modern civilization", "visionary policies negative externalities"]
        }
      ],
      "structure": [
        {
          "section": "C1 Sophisticated Introduction",
          "phrases": [
            "In the contemporary era, the expansion of [Topic] has emerged as a cornerstone of socio-economic progress...",
            "Although critics point toward certain vulnerabilities, I am convinced that the constructive outcomes far outweigh the adverse ramifications.",
            "This essay aims to critically evaluate both sides of the issue before drawing a logical conclusion."
          ]
        },
        {
          "section": "C1 Multifaceted Advantages",
          "phrases": [
            "To begin with, the adoption of [Topic] offers a myriad of compelling benefits.",
            "Paramount among these is that [Advantage 1 + Consequence].",
            "Furthermore, it is noteworthy that [Advantage 2].",
            "Additionally, [Advantage 3], thereby elevating overall quality of life."
          ]
        },
        {
          "section": "C1 Inherent Shortcomings & Evidence",
          "phrases": [
            "Conversely, it would be remiss to ignore the underlying shortcomings associated with [Topic].",
            "A primary drawback lies in [Disadvantage 1 + Impact].",
            "Furthermore, serious concerns have been voiced regarding [Disadvantage 2].",
            "In addition, empirical evidence suggests that without robust management, such drawbacks could impede growth."
          ]
        },
        {
          "section": "C1 Balanced Conclusion",
          "phrases": [
            "To synthesize, every major evolution inevitably entails a duality of advantages and drawbacks.",
            "While [Topic] presents non-negligible challenges, its multifaceted benefits remain indispensable.",
            "Consequently, visionary policies must be instituted to harness its potential while mitigating negative externalities."
          ]
        }
      ]
    }
  },
  {
    "id": "discussion_essay",
    "type": "task2",
    "title": "Discussion / Opinion Essay",
    "titleVi": "Bài Luận Bàn Luận Quan Điểm (Discussion / Opinion)",
    "targetWords": 250,
    "description": "Sử dụng cho đề bài yêu cầu thảo luận 2 quan điểm trái chiều hoặc đưa ra ý kiến cá nhân (Đồng ý / Không đồng ý).",
    "skeletonText": "Introduction:\nIn recent years, [Topic] has become an essential part of the rising debate in the present world, including Vietnam. It is widely debated whether [Issue/Bàn luận]. Personally, I strongly agree that [Quan điểm cá nhân]. This essay will provide key reasons and relevant examples to support my arguments.\n\nBody 1: First View / Argument:\nFirst and foremost, it should be recognized that [Ý chính 1]. This means that [Giải thích]. One clear example that supports this view is [Ví dụ 1]. This clearly demonstrates that [Tác động/Kết luận 1].\n\nBody 2: Second View / Counter-argument:\nOn the other hand, an interesting perspective is that [Ý chính 2]. This is because of the fact that [Giải thích 2]. For instance, [Ví dụ 2]. In addition, the evidence suggests that [Giải pháp / Bằng chứng bổ sung].\n\nConclusion:\nTo conclude, this essay argued that [Tóm tắt quan điểm] despite some drawbacks. However, everything has two sides, and this situation is no exception. Therefore, the efficient and sensible use of [Topic] should be promoted, whereas its misuse should be controlled.",
    "sampleText": "In recent years, the impact of artificial intelligence and machines has become an essential part of the rising debate in the modern world, including Vietnam. It is widely debated whether technology brings more benefits or creates unemployment for workers. Personally, I strongly agree that technological innovation plays a vital role in enhancing human productivity and living standards. This essay will provide key reasons and relevant examples to support my perspective.\n\nFirst and foremost, it should be recognized that automated machines allow people to work much faster and more efficiently. This means that repetitive tasks such as data entry, document printing, and manufacturing can be handled seamlessly by technology. One clear example that supports this view is that online banking platforms allow millions of users to transfer money instantly without waiting in long queues at bank branches. This clearly demonstrates that technology saves valuable time for individuals and enterprises.\n\nOn the other hand, an interesting perspective is that over-reliance on machines might decrease direct social interaction. This is because people spend too much time staring at computer screens rather than engaging in face-to-face conversations with colleagues or family members. For instance, many teenagers nowadays prefer playing online video games over joining outdoor sports clubs with friends. In addition, available evidence suggests that setting reasonable time limits for digital device usage can help mitigate these potential drawbacks.\n\nTo conclude, this essay argued that technology brings unprecedented convenience despite some social drawbacks. However, everything has two sides, and technological development is no exception. Therefore, the efficient and sensible use of technology should be promoted, whereas its over-dependence should be strictly controlled.",
    "translationVi": "Trong những năm gần đây, tác động của trí tuệ nhân tạo và máy móc đã trở thành một phần thiết yếu trong các cuộc thảo luận đang gia tăng ở thế giới hiện đại, bao gồm cả Việt Nam. Việc liệu công nghệ mang lại nhiều lợi ích hơn hay tạo ra thất nghiệp cho người lao động đang được tranh luận rộng rãi. Cá nhân tôi hoàn toàn đồng ý rằng đổi mới công nghệ đóng vai trò quan trọng trong việc nâng cao năng suất và mức sống của con người. Bài luận này sẽ đưa ra các lý do chính và ví dụ liên quan để hỗ trợ quan điểm của tôi.\n\nTrước hết, cần phải nhận ra rằng máy móc tự động cho phép con người làm việc nhanh hơn và hiệu quả hơn nhiều. Điều này có nghĩa là các nhiệm vụ lặp đi lặp lại như nhập dữ liệu, in tài liệu và sản xuất có thể được xử lý mượt mà bởi công nghệ. Một ví dụ rõ ràng ủng hộ quan điểm này là các nền tảng ngân hàng trực tuyến cho phép hàng triệu người dùng chuyển tiền tức thì mà không phải xếp hàng chờ đợi tại các chi nhánh ngân hàng. Điều này chứng minh rõ ràng rằng công nghệ tiết kiệm thời gian quý báu cho cá nhân và doanh nghiệp.\n\nMặt khác, một góc nhìn thú vị là sự phụ thuộc quá mức vào máy móc có thể làm giảm tương tác xã hội trực tiếp. Điều này là do mọi người dành quá nhiều thời gian nhìn vào màn hình máy tính thay vì tham gia vào các cuộc trò chuyện trực tiếp với đồng nghiệp hoặc thành viên gia đình. Chẳng hạn, nhiều thanh thiếu niên ngày nay thích chơi game trực tuyến hơn là tham gia các câu lạc bộ thể thao ngoài trời với bạn bè. Ngoài ra, các bằng chứng hiện có cho thấy rằng việc thiết lập giới hạn thời gian hợp lý cho việc sử dụng thiết bị kỹ thuật số có thể giúp giảm thiểu những nhược điểm tiềm ẩn này.\n\nTóm lại, bài luận này lập luận rằng công nghệ mang lại sự tiện lợi chưa từng có mặc dù có một số nhược điểm về mặt xã hội. Tuy nhiên, mọi thứ đều có hai mặt và sự phát triển công nghệ cũng không ngoại lệ. Do đó, việc sử dụng công nghệ hiệu quả và hợp lý nên được khuyến khích, trong khi sự phụ thuộc quá mức vào nó cần được kiểm soát chặt chẽ.",
    "keywordsSentenceMap": [
      {
        "sentenceIndex": 1,
        "keywords": ["essential part of rising debate", "widely debated whether", "strongly agree that", "vital role"]
      },
      {
        "sentenceIndex": 2,
        "keywords": ["First and foremost", "automated machines work faster", "repetitive tasks data entry"]
      },
      {
        "sentenceIndex": 3,
        "keywords": ["One clear example", "online banking transfer money", "saves valuable time"]
      },
      {
        "sentenceIndex": 4,
        "keywords": ["On the other hand", "over-reliance decrease social interaction", "face-to-face conversations"]
      },
      {
        "sentenceIndex": 5,
        "keywords": ["For instance", "teenagers online video games outdoor sports"]
      },
      {
        "sentenceIndex": 6,
        "keywords": ["In addition", "evidence suggests that", "reasonable time limits"]
      },
      {
        "sentenceIndex": 7,
        "keywords": ["To conclude", "unprecedented convenience", "two sides to everything", "sensible use promoted"]
      }
    ],
    "structure": [
      {
        "section": "Introduction",
        "phrases": [
          "In recent years, [Topic] has become an essential part of the rising debate in the present world, including Vietnam.",
          "It is widely debated whether [Issue]. Personally, I strongly agree that [My View].",
          "This essay will provide some reasons and relevant examples to support my arguments."
        ]
      },
      {
        "section": "Body 1: First Argument",
        "phrases": [
          "First and foremost, it should be recognized that [Point 1].",
          "This means that [Explanation].",
          "One example that supports this view is [Example 1].",
          "This clearly demonstrates that [Impact]."
        ]
      },
      {
        "section": "Body 2: Counter Argument & Solutions / Evidence",
        "phrases": [
          "On the other hand, an interesting point is that [Point 2].",
          "This is because of the fact that [Explanation].",
          "For instance, [Example 2].",
          "In addition, the evidence suggests that [Solution / Evidence]..."
        ]
      },
      {
        "section": "Conclusion",
        "phrases": [
          "To conclude, this essay argued that [Summary of View].",
          "However, everything has two sides, and this situation is not an exception.",
          "Therefore, efficient use should be promoted, whereas misuse should be prevented."
        ]
      }
    ],
    "masterV2": {
      "title": "Discussion / Opinion Essay (Bản Master V2 - Band C1)",
      "targetWords": 280,
      "description": "Phiên bản nâng cao C1 lập luận phản biện sắc bén, kết hợp cấu trúc câu phức academic và phân tích giải pháp chuyên sâu.",
      "skeletonText": "Introduction:\nIn contemporary society, the rapid expansion of [Topic] has sparked intense academic and public discourse worldwide, particularly in developing economies like Vietnam. While one school of thought contends that [Opposing View/Drawback], I firmly side with those who maintain that [My Stance/Advantage] exerts a far more transformative influence. This essay will examine both perspectives before corroborating my position with compelling evidence.\n\nBody 1: Primary Argument & Empirical Support:\nOn the one hand, substantial evidence indicates that [Point 1: e.g. technological integration enhances operational efficiency]. To elaborate, [Explanation]. A salient example illustrating this is [Example 1]. This underscores the premise that [Topic] serves as a vital catalyst for human progress rather than a temporary trend.\n\nBody 2: Counter Perspective & Evidence-based Mitigation:\nOn the other hand, skeptics frequently raise legitimate concerns regarding [Point 2: e.g. potential social isolation or job displacement]. This sentiment stems from the fact that [Explanation 2]. For instance, [Example 2]. In addition, available research and evidence suggest that implementing strategic policy frameworks and proactive education can effectively harmonize technological adoption with societal well-being.\n\nConclusion:\nIn conclusion, while the apprehension surrounding [Topic] is understandable, the overwhelming benefits it yields in terms of productivity and living standards cannot be overlooked. Ultimately, visionary governance and continuous human adaptation remain essential to maximizing its potential while mitigating societal risks.",
      "sampleText": "In contemporary society, the rapid expansion of artificial intelligence and automated systems has sparked intense academic and public discourse worldwide, particularly in emerging economies like Vietnam. While one school of thought contends that technological automation threatens job security for manual laborers, I firmly side with those who maintain that technological innovation exerts a far more transformative influence on human productivity. This essay will examine both perspectives before corroborating my position with compelling evidence.\n\nOn the one hand, substantial evidence indicates that automated systems drastically optimize operational efficiency across industries. To elaborate, smart algorithms and robotic machinery handle repetitive, labor-intensive tasks—such as big data processing and precision manufacturing—with unprecedented speed and accuracy. A salient example illustrating this is the widespread adoption of online banking platforms, which allow millions of citizens to complete complex financial transactions instantaneously. This underscores the premise that technological integration serves as a vital catalyst for economic evolution rather than a hindrance to employment.\n\nOn the other hand, skeptics frequently raise legitimate concerns regarding potential social isolation and skill obsolescence among workers. This sentiment stems from the fact that excessive reliance on digital screens reduces direct interpersonal communication in workplaces and domestic environments. For instance, many young individuals nowadays prioritize virtual interactions over face-to-face community engagements. In addition, available research and evidence suggest that implementing proactive reskilling programs and digital governance can effectively harmonize technological adoption with workforce stability.\n\nIn conclusion, while the apprehension surrounding rapid technological automation is understandable, the overwhelming benefits it yields in terms of productivity and living standards cannot be overlooked. Ultimately, visionary governance and continuous human adaptation remain essential to maximizing technological potential while systematically mitigating societal risks.",
      "translationVi": "Trong xã hội đương đại, sự phát triển nhanh chóng của trí tuệ nhân tạo và các hệ thống tự động hóa đã châm ngòi cho các cuộc thảo luận học thuật và công cộng gay gắt trên toàn thế giới, đặc biệt là ở các nền kinh tế đang nổi như Việt Nam. Trong khi một trường phái tư tưởng cho rằng tự động hóa công nghệ đe dọa an ninh việc làm cho lao động chân tay, tôi hoàn toàn đứng về phía những người khẳng định rằng đổi mới công nghệ tạo ra một ảnh hưởng mang tính biến đổi sâu sắc hơn nhiều đối với năng suất của con người. Bài luận này sẽ xem xét cả hai góc nhìn trước khi chứng minh quan điểm của tôi bằng những bằng chứng thuyết phục.\n\nMột mặt, các bằng chứng đáng kể chỉ ra rằng các hệ thống tự động hóa giúp tối ưu hóa mạnh mẽ hiệu suất vận hành trong các ngành công nghiệp. Chi tiết hơn, các thuật toán thông minh và máy móc rô-bốt xử lý các nhiệm vụ lặp đi lặp lại, tốn nhiều sức lao động—như xử lý dữ liệu lớn và sản xuất chính xác—với tốc độ và độ chính xác chưa từng có. Một ví dụ nổi bật minh họa cho điều này là việc áp dụng rộng rãi các nền tảng ngân hàng trực tuyến, cho phép hàng triệu người dân hoàn thành các giao dịch tài chính phức tạp ngay lập tức. Điều này nhấn mạnh tiền đề rằng sự tích hợp công nghệ đóng vai trò như một chất xúc tác thiết yếu cho sự phát triển kinh tế chứ không phải là một vật cản đối với việc làm.\n\nMặt khác, những người hoài nghi thường xuyên dấy lên những lo ngại chính đáng về nguy cơ cô lập xã hội và sự lỗi thời kỹ năng của người lao động. Quan điểm này xuất phát từ thực tế là sự phụ thuộc quá mức vào màn hình kỹ thuật số làm giảm sự giao tiếp trực tiếp giữa người với người tại nơi làm việc và môi trường gia đình. Chẳng hạn, nhiều người trẻ ngày nay ưu tiên các tương tác ảo hơn là tham gia các hoạt động cộng đồng trực tiếp. Ngoài ra, các nghiên cứu và bằng chứng hiện có cho thấy rằng việc thực thi các chương trình đào tạo lại kỹ năng chủ động và quản trị kỹ thuật số có thể hài hòa một cách hiệu quả việc áp dụng công nghệ với sự ổn định của lực lượng lao động.\n\nTóm lại, mặc dù sự lo lắng xung quanh việc tự động hóa công nghệ nhanh chóng là điều có thể hiểu được, những lợi ích áp đảo mà nó mang lại về mặt năng suất và mức sống là không thể phủ nhận. Cuối cùng, quản trị có tầm nhìn xa và sự thích ứng liên tục của con người vẫn là yếu tố thiết yếu để tối đa hóa tiềm năng công nghệ đồng thời giảm thiểu một cách hệ thống các rủi ro xã hội.",
      "keywordsSentenceMap": [
        {
          "sentenceIndex": 1,
          "keywords": ["contemporary society expansion AI", "sparked intense academic discourse", "emerging economies"]
        },
        {
          "sentenceIndex": 2,
          "keywords": ["automation threatens job security", "firmly side with technological innovation", "transformative influence"]
        },
        {
          "sentenceIndex": 3,
          "keywords": ["substantial evidence indicates", "drastically optimize operational efficiency", "repetitive labor-intensive tasks"]
        },
        {
          "sentenceIndex": 4,
          "keywords": ["salient example online banking", "transactions instantaneously", "vital catalyst economic evolution"]
        },
        {
          "sentenceIndex": 5,
          "keywords": ["skeptics raise legitimate concerns", "social isolation skill obsolescence", "excessive reliance digital screens"]
        },
        {
          "sentenceIndex": 6,
          "keywords": ["In addition evidence suggests", "proactive reskilling programs", "harmonize technological adoption"]
        },
        {
          "sentenceIndex": 7,
          "keywords": ["apprehension understandable", "overwhelming benefits productivity", "visionary governance human adaptation"]
        }
      ],
      "structure": [
        {
          "section": "C1 Academic Introduction",
          "phrases": [
            "In contemporary society, the rapid expansion of [Topic] has sparked intense academic discourse...",
            "While one school of thought contends that [Opposing View], I firmly side with those who maintain that [My Stance]...",
            "This essay will examine both perspectives before corroborating my position with compelling evidence."
          ]
        },
        {
          "section": "C1 Primary Argument & Evidence",
          "phrases": [
            "On the one hand, substantial evidence indicates that [Point 1 + Optimization].",
            "To elaborate, [Explanation].",
            "A salient example illustrating this is [Example 1].",
            "This underscores the premise that [Topic] serves as a vital catalyst for economic evolution."
          ]
        },
        {
          "section": "C1 Counter Stance & Evidence-based Mitigation",
          "phrases": [
            "On the other hand, skeptics frequently raise legitimate concerns regarding [Point 2].",
            "This sentiment stems from the fact that [Explanation 2].",
            "For instance, [Example 2].",
            "In addition, available research and evidence suggest that proactive policy frameworks can harmonize adoption with stability."
          ]
        },
        {
          "section": "C1 Nuanced Conclusion",
          "phrases": [
            "In conclusion, while the apprehension surrounding [Topic] is understandable, the overwhelming benefits cannot be overlooked.",
            "Ultimately, visionary governance and continuous human adaptation remain essential to maximizing potential while mitigating risks."
          ]
        }
      ]
    }
  }
];
