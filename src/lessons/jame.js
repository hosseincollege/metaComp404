// src/lessons/jame.js

export default [

  /* ============================================================
     درس ۱ — شبکه (Networking)
  ============================================================ */
  {
    section: "درس ۱ — شبکه (Networking)",
    topics: [
      { title: "1- Bit & Frame", content: "فیزیکی: بیت؛ پیوند داده: Frame." },
      { title: "2- LAN vs WAN", content: "LAN سریع محلی؛ WAN گسترده کندتر." },
      { title: "3- IP و MAC", content: "IP منطقی و تغییرپذیر؛ MAC ثابت." },
      { title: "4- NAT", content: "تبدیل IP خصوصی به عمومی." },
      { title: "5- DHCP", content: "Discover → Offer → Request → ACK." },
      { title: "6- TCP vs UDP", content: "TCP قابل‌اعتماد؛ UDP سریع." },
      { title: "7- DNS", content: "تبدیل نام دامنه به IP." },
      { title: "8- HTTP", content: "Stateless – پروتکل وب." }
    ]
  },

  /* ============================================================
     درس ۲ — اینترنت اشیا (IoT)
  ============================================================ */
  {
    section: "درس ۲ — اینترنت اشیا (IoT)",
    topics: [
      {
        title: "1- مفاهیم پایه",
        content: "",
        subtopics: [
          { title: "IoT چیست؟", content: "اتصال اشیا به اینترنت." },
          { title: "اجزا", content: "سنسور، شبکه، گیت‌وی، ابر، داشبورد." }
        ]
      },
      {
        title: "2- سخت‌افزار",
        content: "",
        subtopics: [
          { title: "Microcontrollers", content: "Arduino, ESP32." },
          { title: "Communication Models", content: "Device↔Cloud؛ Device↔Device." }
        ]
      },
      {
        title: "3- امنیت IoT",
        content: "",
        subtopics: [
          { title: "حملات", content: "DoS، Sniffing، Spoofing." },
          { title: "راهکارها", content: "رمزنگاری، احراز هویت، VPN." }
        ]
      }
    ]
  },

  /* ============================================================
     درس ۳ — مدار منطقی و الکترونیک دیجیتال
  ============================================================ */
  {
    section: "درس ۳ — مدار منطقی و الکترونیک دیجیتال",
    topics: [
      {
        title: "1- لایه‌های پایه",
        content: "",
        subtopics: [
          { title: "مفاهیم الکتریکی", content: "V، I، R، P." },
          { title: "قانون اهم", content: "V = IR." }
        ]
      },
      {
        title: "2- تحلیل مدار",
        content: "",
        subtopics: [
          { title: "Node (KCL)", content: "تحلیل گره." },
          { title: "Mesh (KVL)", content: "تحلیل مش." },
          { title: "تونن/نورتن", content: "معادل‌سازی." },
          { title: "Superposition", content: "فقط مدار خطی." }
        ]
      },
      {
        title: "3- خازن و سلف",
        content: "",
        subtopics: [
          { title: "خازن", content: "I = C dv/dt — در DC باز." },
          { title: "سلف", content: "V = L di/dt — در DC اتصال کوتاه." },
          { title: "ثابت زمانی", content: "RC و RL." }
        ]
      },
      {
        title: "4- دیود و نیمه‌هادی",
        content: "",
        subtopics: [
          { title: "N و P", content: "دو ناحیه پایه." },
          { title: "پیوند PN", content: "ناحیه تهی." }
        ]
      }
    ]
  },

  /* ============================================================
     درس ۴ — پایتون و یادگیری ماشین (Python + ML)
  ============================================================ */
  {
    section: "درس ۴ — پایتون و یادگیری ماشین (Python + ML)",
    topics: [
      {
        title: "1- OOP",
        content: "",
        subtopics: [
          { title: "Class", content: "نقشهٔ شیء." },
          { title: "Object", content: "نمونه." },
          { title: "__init__", content: "سازنده." },
          { title: "self", content: "اشاره به شیء." }
        ]
      },
      {
        title: "2- Machine Learning",
        content: "",
        subtopics: [
          { title: "Supervised", content: "با برچسب." },
          { title: "Unsupervised", content: "بی‌برچسب." },
          { title: "Classification", content: "کلاس." },
          { title: "Regression", content: "عدد." }
        ]
      },
      {
        title: "3- Algorithms",
        content: "",
        subtopics: [
          { title: "KNN", content: "همسایه نزدیک." },
          { title: "K-Means", content: "خوشه‌بندی." }
        ]
      },
      {
        title: "4- NLP",
        content: "",
        subtopics: [
          { title: "Tokenization", content: "تقسیم متن." },
          { title: "Bag of Words", content: "بردارسازی." },
          { title: "Naive Bayes", content: "متن/احساسات." }
        ]
      },
      {
        title: "5- Data Mining",
        content: "",
        subtopics: [
          { title: "Apriori", content: "قوانین انجمنی." },
          { title: "معیارها", content: "Support, Confidence, Lift." }
        ]
      },
      {
        title: "6- Deep Learning",
        content: "",
        subtopics: [
          { title: "ML vs DL", content: "تفاوت‌ها." },
          { title: "کاربردها", content: "تصویر، صدا، NLP." }
        ]
      }
    ]
  },

  /* ============================================================
     درس ۵ — رایانش ابری (Cloud Computing)
  ============================================================ */
  {
    section: "درس ۵ — رایانش ابری",
    topics: [
      {
        title: "1- Service Models",
        content: "",
        subtopics: [
          { title: "IaaS", content: "زیرساخت خام." },
          { title: "PaaS", content: "پلتفرم توسعه." },
          { title: "SaaS", content: "نرم‌افزار آماده." }
        ]
      },
      {
        title: "2- Deployment Models",
        content: "",
        subtopics: [
          { title: "Public", content: "عمومی." },
          { title: "Private", content: "خصوصی." },
          { title: "Hybrid", content: "ترکیبی." },
          { title: "Community", content: "سازمانی." }
        ]
      },
      {
        title: "3- مزایا",
        content: "",
        subtopics: [
          { title: "کاهش هزینه", content: "پرداخت به‌مصرف." },
          { title: "Scalability", content: "مقیاس‌پذیری." },
          { title: "High Availability", content: "دسترسی بالا." },
          { title: "امنیت", content: "بهبود امنیت." }
        ]
      },
      {
        title: "4- Virtualization & Containers",
        content: "",
        subtopics: [
          { title: "VM", content: "ماشین مجازی." },
          { title: "Docker", content: "کانتینر." }
        ]
      }
    ]
  },

  /* ============================================================
     درس ۶ — طراحی و تحلیل الگوریتم‌ها
  ============================================================ */
  {
    section: "درس ۶ — طراحی و تحلیل الگوریتم‌ها",
    topics: [
      {
        title: "1- پیچیدگی‌ها",
        content: "",
        subtopics: [
          { title: "Big O", content: "کران بالا." },
          { title: "Big Θ", content: "کران دقیق." },
          { title: "Big Ω", content: "کران پایین." }
        ]
      },
      {
        title: "2- تحلیل حالت‌ها",
        content: "",
        subtopics: [
          { title: "Best", content: "بهترین." },
          { title: "Average", content: "میانگین." },
          { title: "Worst", content: "بدترین." }
        ]
      },
      {
        title: "3- بازگشت‌ها",
        content: "",
        subtopics: [
          { title: "Recurrence", content: "رابطه." },
          { title: "Master Theorem", content: "حل سریع." }
        ]
      },
      {
        title: "4- Divide & Conquer",
        content: "",
        subtopics: [
          { title: "مراحل", content: "Divide → Conquer → Combine." },
          { title: "Merge Sort", content: "O(n log n)." }
        ]
      },
      {
        title: "5- گراف‌ها",
        content: "",
        subtopics: [
          { title: "BFS", content: "سطحی." },
          { title: "DFS", content: "عمقی." },
          { title: "Dijkstra", content: "کوتاه‌ترین مسیر." },
          { title: "Kruskal", content: "MST." }
        ]
      },
      {
        title: "6- بهینه‌سازی",
        content: "",
        subtopics: [
          { title: "DP", content: "برنامه‌ریزی پویا." },
          { title: "Backtracking", content: "جستجو." },
          { title: "Branch & Bound", content: "بریده‌سازی." },
          { title: "Floyd-Warshall", content: "O(n³)." }
        ]
      },
      {
        title: "7- نظریه پیچیدگی",
        content: "",
        subtopics: [
          { title: "P", content: "چندجمله‌ای." },
          { title: "NP", content: "راستی‌آزمایی سریع." },
          { title: "NP-Complete", content: "سخت‌ترین NP." },
          { title: "NP-Hard", content: "حتی سخت‌تر." }
        ]
      }
    ]
  },

  /* ============================================================
     جمع‌بندی نهایی
  ============================================================ */
  {
    section: "جمع‌بندی نهایی فوق‌فوق‌فشرده",
    topics: [
      { title: "1- شبکه", content: "IP/MAC، TCP/UDP، DHCP، DNS." },
      { title: "2- IoT", content: "سنسور→نت→ابر، ESP32، امنیت." },
      { title: "3- مدار", content: "KCL/KVL، خازن/سلف، تونن/نورتن." },
      { title: "4- Python/ML", content: "OOP، ML، KNN/K-Means، DL." },
      { title: "5- ابر", content: "IaaS/PaaS/SaaS، VM vs Docker." },
      { title: "6- الگوریتم", content: "Big-O، DP، Dijkstra، Kruskal." }
    ]
  }

];
