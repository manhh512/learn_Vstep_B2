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
    ]
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
    ]
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
    ]
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
    ]
  }
];
