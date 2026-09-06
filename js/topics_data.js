const TOPICS_DATA = [
  {
    "id": "transport",
    "title": "Transport & Public Transit",
    "titleVi": "Giao thông & Phương tiện công cộng",
    "icon": "🚲",
    "advantages": [
      {
        "idea": "Be safer",
        "detail": "have fewer accidents",
        "vi": "An toàn hơn - ít xảy ra tai nạn"
      },
      {
        "idea": "Feel comfortable and relaxed",
        "detail": "listen to music, read a book, take a nap",
        "vi": "Thoải mái và thư giãn - nghe nhạc, đọc sách, chợp mắt"
      },
      {
        "idea": "Feel comfortable and fast",
        "detail": "travel wherever I want and whenever I want",
        "vi": "Thuận tiện & nhanh chóng - đi bất cứ đâu, bất cứ lúc nào"
      },
      {
        "idea": "Never think about weather",
        "detail": "avoid rain, storm, sun, dark in night, avoid dust and wet",
        "vi": "Không lo thời tiết - tránh mưa bão, nắng, bụi bẩn và ẩm ướt"
      }
    ],
    "disadvantages": [
      {
        "idea": "Be inconvenient",
        "detail": "run slowly, infrastructure in bad conditions",
        "vi": "Bất tiện - xe chạy chậm, hạ tầng kém chất lượng"
      },
      {
        "idea": "Higher chance of getting diseases",
        "detail": "viruses/infections on public transport",
        "vi": "Nguy cơ lây bệnh truyền nhiễm trên phương tiện công cộng"
      },
      {
        "idea": "Pretty crowded in rush hours",
        "detail": "stuck in traffic jams",
        "vi": "Rất đông đúc vào giờ cao điểm"
      },
      {
        "idea": "Public transport system is quite bad",
        "detail": "old buses, run slowly",
        "vi": "Hệ thống giao thông công cộng kém - xe buýt cũ kỹ, di chuyển chậm"
      }
    ],
    "solutions": [
      {
        "idea": "Upgrade infrastructure",
        "detail": "build modern roads and high-speed trains",
        "vi": "Nâng cấp hạ tầng - xây đường hiện đại và tàu cao tốc"
      },
      {
        "idea": "Improve service quality",
        "detail": "train drivers and staff to be more polite and punctual",
        "vi": "Nâng cao chất lượng dịch vụ - đào tạo nhân viên đúng giờ, lịch sự"
      }
    ],
    "keywords": [
      "vehicle",
      "traffic jam",
      "rush hour",
      "public transport",
      "commute",
      "infrastructure",
      "accident",
      "passenger"
    ]
  },
  {
    "id": "countryside",
    "title": "Countryside Life",
    "titleVi": "Cuộc sống ở Nông thôn",
    "icon": "🌾",
    "advantages": [
      {
        "idea": "Clean environment",
        "detail": "fresher air, many trees, rivers, mountains, rice fields",
        "vi": "Môi trường sạch - không khí trong lành, nhiều cây xanh, sông núi, ruộng lúa"
      },
      {
        "idea": "Cost of living is cheap",
        "detail": "save a lot of money on food and housing",
        "vi": "Chi phí sinh hoạt rẻ - tiết kiệm được nhiều tiền"
      },
      {
        "idea": "People are friendly and open",
        "detail": "live near each other, meet and talk every day",
        "vi": "Con người thân thiện, cởi mở - sống gần gũi, trò chuyện hàng ngày"
      }
    ],
    "disadvantages": [
      {
        "idea": "Life is boring",
        "detail": "lack of convenience and entertainment places (restaurants, parks, cinemas, boutiques)",
        "vi": "Cuộc sống tẻ nhạt - thiếu chỗ vui chơi, giải trí, nhà hàng, rạp phim"
      },
      {
        "idea": "Fewer job opportunities",
        "detail": "harder to find high-paying modern careers",
        "vi": "Ít cơ hội việc làm - khó tìm công việc lương cao"
      }
    ],
    "solutions": [
      {
        "idea": "Invest in rural development",
        "detail": "build entertainment hubs, better hospitals and schools in villages",
        "vi": "Đầu tư phát triển nông thôn - xây dựng trường học, bệnh viện, khu vui chơi"
      }
    ],
    "keywords": [
      "fresh air",
      "peaceful",
      "cost of living",
      "friendly neighbors",
      "rural area",
      "rice field",
      "lack of facilities"
    ]
  },
  {
    "id": "city",
    "title": "City Life",
    "titleVi": "Cuộc sống ở Thành thị",
    "icon": "🏙️",
    "advantages": [
      {
        "idea": "Life is interesting and convenient",
        "detail": "many entertainments, restaurants, shopping malls, parks, cinemas, near hospitals and schools",
        "vi": "Cuộc sống thú vị & tiện nghi - nhiều trung tâm thương mại, công viên, gần bệnh viện, trường học"
      },
      {
        "idea": "Higher incomes",
        "detail": "save more money, buy what I like",
        "vi": "Thu nhập cao hơn - tiết kiệm và mua sắm thoải mái"
      },
      {
        "idea": "More career opportunities",
        "detail": "easier to find good jobs in multinational companies",
        "vi": "Nhiều cơ hội thăng tiến nghề nghiệp"
      }
    ],
    "disadvantages": [
      {
        "idea": "Polluted environment",
        "detail": "polluted air, heavy traffic, bad road conditions, fewer trees and rivers",
        "vi": "Môi trường ô nhiễm - không khí bụi bẩn, kẹt xe, ít cây xanh"
      },
      {
        "idea": "Expensive cost of living",
        "detail": "spend much more money on housing, food, and services",
        "vi": "Chi phí sống đắt đỏ - tốn nhiều tiền cho thuê nhà, ăn uống"
      },
      {
        "idea": "Dangerous life",
        "detail": "higher crime rates, social evils (drinking, drugs, gambling)",
        "vi": "Cuộc sống nhiều rủi ro - tệ nạn xã hội, tội phạm"
      }
    ],
    "solutions": [
      {
        "idea": "Plant more green trees",
        "detail": "expand public parks and green spaces",
        "vi": "Trồng thêm cây xanh - mở rộng công viên công cộng"
      },
      {
        "idea": "Enhance public security",
        "detail": "install CCTV cameras and increase police patrols",
        "vi": "Tăng cường an ninh - lắp camera và tăng cảnh sát tuần tra"
      }
    ],
    "keywords": [
      "skyscraper",
      "entertainment",
      "high income",
      "job opportunity",
      "pollution",
      "traffic congestion",
      "social evils",
      "expensive"
    ]
  },
  {
    "id": "crime",
    "title": "Crime & Social Issues",
    "titleVi": "Tội phạm & Tệ nạn Xã hội",
    "icon": "⚖️",
    "causes": [
      {
        "idea": "Lack of love and support",
        "detail": "parents are too busy with work to nurture children",
        "vi": "Thiếu sự quan tâm - cha mẹ quá bận rộn không chăm sóc con cái"
      },
      {
        "idea": "Access to violent games & internet",
        "detail": "children copy negative behaviors online",
        "vi": "Tiếp xúc game bạo lực - trẻ em bắt chước hành vi xấu trên mạng"
      },
      {
        "idea": "Poverty and unemployment",
        "detail": "not having enough money for living -> commit crimes as the easiest way without skills",
        "vi": "Nghèo đói & thất nghiệp - không có thu nhập nên vi phạm pháp luật để kiếm sống"
      }
    ],
    "solutions": [
      {
        "idea": "Parental guidance & supervision",
        "detail": "parents spend more time, control activities, give advice, prevent mistakes",
        "vi": "Cha mẹ đồng hành - dành thời gian định hướng, quản lý hành vi của con"
      },
      {
        "idea": "Strict punishment & rehabilitation",
        "detail": "send criminals to rehab, teach good behavior, vocational training to find jobs later",
        "vi": "Xử phạt nghiêm & cải tạo - học nghề, giáo dục nhân cách để tái hòa nhập"
      }
    ],
    "keywords": [
      "offense",
      "criminal",
      "rehabilitation",
      "poverty",
      "violence",
      "punishment",
      "vocational training",
      "parental supervision"
    ]
  },
  {
    "id": "hobbies",
    "title": "Hobbies & Leisure Activities",
    "titleVi": "Sở thích & Hoạt động Rảnh rỗi",
    "icon": "⚽",
    "advantages": [
      {
        "idea": "Bring happiness and relaxation",
        "detail": "feel much happier, reduce stress from hard work and study",
        "vi": "Mang lại hạnh phúc & thư giãn - giải tỏa căng thẳng học tập và làm việc"
      },
      {
        "idea": "Share joy and strengthen relationships",
        "detail": "talk and share feelings with friends and family",
        "vi": "Gắn kết tình cảm - chia sẻ niềm vui với bạn bè, gia đình"
      },
      {
        "idea": "Develop creativity & cognitive skills",
        "detail": "broaden knowledge, foster imagination",
        "vi": "Phát triển tư duy & sáng tạo - mở rộng tri thức, rèn luyện trí não"
      }
    ],
    "disadvantages": [
      {
        "idea": "Contains violence (video games)",
        "detail": "increase aggressive feelings and violent thoughts",
        "vi": "Chứa yếu tố bạo lực - gia tăng cảm xúc hung hăng"
      },
      {
        "idea": "Distraction from study/work",
        "detail": "no focus on study -> perform worse and worse at school",
        "vi": "Gây xao nhãng - sụt giảm kết quả học tập"
      }
    ],
    "solutions": [
      {
        "idea": "Select suitable games & activities",
        "detail": "ban violent content, encourage physical sports",
        "vi": "Lựa chọn sở thích lành mạnh - cấm game bạo lực, khuyến khích thể thao"
      },
      {
        "idea": "Set time limits",
        "detail": "balance between leisure time and study/work",
        "vi": "Giới hạn thời gian chơi - cân bằng giữa giải trí và học tập"
      }
    ],
    "keywords": [
      "leisure",
      "relaxation",
      "creativity",
      "cognitive skill",
      "reduce stress",
      "addiction",
      "time management",
      "balance"
    ]
  },
  {
    "id": "language",
    "title": "Learning Foreign Languages",
    "titleVi": "Học Ngoại ngữ (Tiếng Anh)",
    "icon": "🗣️",
    "advantages": [
      {
        "idea": "Access global information",
        "detail": "read books, documents, websites written in English",
        "vi": "Tiếp cận tri thức thế giới - đọc sách, tài liệu tiếng Anh"
      },
      {
        "idea": "Boost confidence when traveling & working",
        "detail": "talk easily with foreigners, do business without an interpreter",
        "vi": "Tự tin giao tiếp & làm việc - du lịch nước ngoài, làm ăn không cần phiên dịch"
      },
      {
        "idea": "Make international friends",
        "detail": "connect with people worldwide",
        "vi": "Kết bạn toàn cầu - mở rộng mối quan hệ quốc tế"
      }
    ],
    "disadvantages": [
      {
        "idea": "Time-consuming and challenging",
        "detail": "requires persistent practice and memory effort",
        "vi": "Tốn thời gian & khó khăn - đòi hỏi kiên trì luyện tập"
      }
    ],
    "solutions": [
      {
        "idea": "Practice daily & use interactive apps",
        "detail": "listen to English podcasts, practice speaking with native speakers",
        "vi": "Luyện tập hàng ngày - nghe podcast, dùng ứng dụng thông minh"
      }
    ],
    "keywords": [
      "bilingual",
      "global communication",
      "interpreter",
      "confidence",
      "vocabulary",
      "fluency",
      "career prospect"
    ]
  },
  {
    "id": "health",
    "title": "Health & Habits",
    "titleVi": "Sức khỏe & Thói quen Sinh hoạt",
    "icon": "🥗",
    "goodHabits": [
      {
        "idea": "Healthy diet",
        "detail": "drink enough water, eat fruits, fish, vegetables; eat less fast food & meat",
        "vi": "Ăn uống lành mạnh - uống nhiều nước, ăn rau quả, cá; hạn chế đồ ăn nhanh"
      },
      {
        "idea": "Regular exercise & health check-ups",
        "detail": "exercise daily, visit doctors regularly to detect diseases early",
        "vi": "Tập thể dục & khám định kỳ - giữ vóc dáng, phát hiện bệnh sớm"
      }
    ],
    "badHabits": [
      {
        "idea": "Unhealthy diet & fast food",
        "detail": "eat too much fast food, junk food, high cholesterol, low vegetables",
        "vi": "Thói quen ăn uống xấu - ăn nhiều đồ chiên rán, thiếu chất xơ"
      },
      {
        "idea": "Sedentary lifestyle",
        "detail": "don't exercise regularly, lack of physical movement",
        "vi": "Lười vận động - không luyện tập thể thao"
      }
    ],
    "diseases": [
      {
        "idea": "Common health problems",
        "detail": "obesity, high blood pressure, heart disease",
        "vi": "Các bệnh phổ biến - béo phì, cao huyết áp, bệnh tim mạch"
      }
    ],
    "keywords": [
      "healthy diet",
      "regular exercise",
      "cholesterol",
      "obesity",
      "blood pressure",
      "health check-up",
      "keep fit"
    ]
  },
  {
    "id": "house",
    "title": "House & Accommodation",
    "titleVi": "Nhà ở & Căn hộ",
    "icon": "🏠",
    "features": [
      {
        "idea": "Rooms & Spaces",
        "detail": "living room, bedroom, bathroom, garden, garage, balcony",
        "vi": "Các phòng - phòng khách, phòng ngủ, sân vườn, ban công"
      },
      {
        "idea": "Adjectives & Characteristics",
        "detail": "large, quiet, peaceful, cozy, beautiful, modern",
        "vi": "Tính từ miêu tả - rộng rãi, yên tĩnh, ấm cúng, xinh đẹp"
      },
      {
        "idea": "Furniture & Activities",
        "detail": "sofa, bookshelf, TV; grow plants, read books, welcome guests",
        "vi": "Nội thất & hoạt động - sofa, kệ sách; trồng cây, tiếp khách"
      }
    ],
    "keywords": [
      "apartment",
      "balcony",
      "peaceful",
      "furniture",
      "cozy",
      "spacious",
      "accommodation"
    ]
  },
  {
    "id": "machine",
    "title": "Machines & Electronic Devices",
    "titleVi": "Máy móc & Thiết bị Điện tử",
    "icon": "💻",
    "advantages": [
      {
        "idea": "Good way of learning & information",
        "detail": "read online newspapers, download study materials, learn online",
        "vi": "Công cụ học tập tuyệt vời - đọc báo mạng, tải tài liệu, học trực tuyến"
      },
      {
        "idea": "Convenient for work & study",
        "detail": "work faster, typing, printing documents, storing massive data",
        "vi": "Tiện lợi cho công việc - gõ máy, in ấn, lưu trữ dữ liệu nhanh chóng"
      },
      {
        "idea": "Great entertainment tool",
        "detail": "play games, listen to music, watch movies, join social media groups",
        "vi": "Giải trí đa dạng - chơi game, nghe nhạc, xem phim, tham gia diễn đàn"
      }
    ],
    "keywords": [
      "electronic device",
      "store data",
      "digitalization",
      "convenience",
      "online learning",
      "efficiency"
    ]
  },
  {
    "id": "environment",
    "title": "Environment & Protection",
    "titleVi": "Môi trường & Bảo vệ Môi trường",
    "icon": "🌱",
    "goodHabits": [
      {
        "idea": "Eco-friendly actions",
        "detail": "reuse & recycle products, save energy, sort trash, use reusable bags",
        "vi": "Hành động xanh - tái chế, tiết kiệm năng lượng, phân loại rác"
      },
      {
        "idea": "Long-term benefits",
        "detail": "protect environment, reduce pollution levels, conserve natural resources",
        "vi": "Lợi ích lâu dài - giảm ô nhiễm, bảo tồn tài nguyên thiên nhiên"
      }
    ],
    "drawbacks": [
      {
        "idea": "Environmental threats",
        "detail": "global warming, greenhouse gas emissions, overexploitation of natural resources",
        "vi": "Thảm họa môi trường - biến đổi khí hậu, khí nhà kính, cạn kiệt tài nguyên"
      }
    ],
    "keywords": [
      "recycle",
      "global warming",
      "greenhouse gas",
      "eco-friendly",
      "natural resources",
      "pollution",
      "sustainability"
    ]
  },
  {
    "id": "technology",
    "title": "Technology & Science",
    "titleVi": "Công nghệ & Khoa học",
    "icon": "🤖",
    "advantages": [
      {
        "idea": "High efficiency & speed",
        "detail": "perform tasks faster, increase labor productivity",
        "vi": "Hiệu suất vượt trội - hoàn thành công việc nhanh chóng, tăng năng suất"
      }
    ],
    "disadvantages": [
      {
        "idea": "Less social interaction & lazier",
        "detail": "people depend too much on machines, lack face-to-face talk",
        "vi": "Giảm tương tác xã hội - con người lười biếng, phụ thuộc máy móc"
      },
      {
        "idea": "Increase unemployment rate",
        "detail": "automation replaces human workers in factories",
        "vi": "Tăng tỷ lệ thất nghiệp - máy móc thay thế con người"
      }
    ],
    "solutions": [
      {
        "idea": "Balance tech & social activities",
        "detail": "join team building, outdoor picnics, raise personal responsibility",
        "vi": "Cân bằng cuộc sống - tham gia dã ngoại, sinh hoạt cộng đồng"
      },
      {
        "idea": "Vocational training for new tech",
        "detail": "take training courses to control modern machines",
        "vi": "Đào tạo kỹ năng mới - học cách vận hành công nghệ hiện đại"
      }
    ],
    "keywords": [
      "automation",
      "productivity",
      "unemployment",
      "social interaction",
      "dependence",
      "modernization"
    ]
  },
  {
    "id": "holiday",
    "title": "Holidays & Tourism",
    "titleVi": "Kỳ nghỉ & Du lịch",
    "icon": "🏖️",
    "advantages": [
      {
        "idea": "Magnificent scenery & fresh air",
        "detail": "breathtaking mountain/sea views, enjoy pure fresh air",
        "vi": "Cảnh quan ngoạn mục - không khí trong lành, núi biển hùng vĩ"
      },
      {
        "idea": "Delicious local food",
        "detail": "variety of fresh seafood at reasonable prices",
        "vi": "Ẩm thực địa phương hấp dẫn - hải sản tươi ngon, giá hợp lý"
      },
      {
        "idea": "Friendly local people",
        "detail": "hospitable, polite, sociable locals",
        "vi": "Người dân hiếu khách, lịch sự"
      },
      {
        "idea": "Exciting outdoor activities",
        "detail": "swimming on beach, visiting famous sights, watching sunrise/sunset",
        "vi": "Hoạt động thú vị - tắm biển, ngắm bình minh, thăm danh thắng"
      }
    ],
    "keywords": [
      "breathtaking view",
      "destination",
      "local cuisine",
      "hospitality",
      "scenery",
      "relaxation",
      "sightseeing"
    ]
  },
  {
    "id": "person",
    "title": "Describing People",
    "titleVi": "Mô tả Con người & Tính cách",
    "icon": "👤",
    "features": [
      {
        "idea": "Appearance",
        "detail": "medium-height, handsome/pretty, short black hair, sunny smile",
        "vi": "Ngoại hình - chiều cao trung bình, xinh xắn/lịch lầm, nụ cười tỏa nắng"
      },
      {
        "idea": "Good Personality",
        "detail": "kind, helpful, honest, generous",
        "vi": "Phẩm chất tốt - tốt bụng, hay giúp đỡ, thật thà, hào phóng"
      },
      {
        "idea": "Activities & Bond",
        "detail": "known each other for 10 years, go shopping, share life stories",
        "vi": "Mối quan hệ & hoạt động - quen nhau 10 năm, đi mua sắm, tâm sự"
      }
    ],
    "keywords": [
      "appearance",
      "personality",
      "generous",
      "helpful",
      "honest",
      "sunny smile",
      "friendship"
    ]
  },
  {
    "id": "education",
    "title": "Education & Career",
    "titleVi": "Giáo dục & Sự nghiệp (Chuẩn B2)",
    "icon": "🎓",
    "advantages": [
      {
        "idea": "Higher education benefits",
        "detail": "obtain university degrees, acquire professional knowledge and practical skills",
        "vi": "Lợi ích học vấn - có bằng đại học, trang bị kiến thức & kỹ năng chuyên môn"
      },
      {
        "idea": "Career advancement",
        "detail": "secure well-paid jobs, promotion opportunities, financial independence",
        "vi": "Thăng tiến sự nghiệp - công việc lương cao, cơ hội thăng tiến"
      }
    ],
    "disadvantages": [
      {
        "idea": "Academic pressure & stress",
        "detail": "heavy workload, exam anxiety, high competition among students",
        "vi": "Áp lực học tập - khối lượng bài vở lớn, thi cử căng thẳng"
      }
    ],
    "solutions": [
      {
        "idea": "Modern teaching methods",
        "detail": "combine online learning with group projects, career orientation in high schools",
        "vi": "Phương pháp dạy hiện đại - học trực tuyến kết hợp định hướng nghề nghiệp"
      }
    ],
    "keywords": [
      "degree",
      "curriculum",
      "scholarship",
      "career path",
      "qualification",
      "academic stress",
      "promotion"
    ]
  }
];
