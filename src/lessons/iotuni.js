export default [

/* ============================================================
   فصل ۱ — Introduction to Internet of Things (IoT)
============================================================ */
{
  section: "فصل ۱: Introduction to Internet of Things (IoT) | مقدمه اینترنت اشیا",
  topics: [
    {
      title: "1- What is Internet of Things (IoT)",
      content: "اینترنت اشیا به شبکه‌ای از اشیاء فیزیکی گفته می‌شود که با سنسورها، نرم‌افزار و اتصال به اینترنت، داده جمع‌آوری و تبادل می‌کنند.",
      subtopics: [
        {
          title: "Definition of IoT | تعریف IoT",
          content: "IoT یعنی اتصال اشیاء روزمره (مثل خودرو، ساعت، سنسور) به اینترنت برای جمع‌آوری و تحلیل داده."
        },
        {
          title: "IoT Concept | مفهوم IoT",
          content: "ترکیب دنیای فیزیکی و دیجیتال با هدف هوشمندسازی تصمیم‌گیری."
        }
      ]
    },
    {
      title: "2- IoT Ecosystem",
      content: "اکوسیستم IoT شامل دستگاه‌ها، شبکه، پلتفرم پردازش و اپلیکیشن است.",
      subtopics: [
        {
          title: "IoT Devices | دستگاه‌های IoT",
          content: "شامل سنسورها، اکچویتورها و بردهای پردازشی."
        },
        {
          title: "IoT Platform",
          content: "محل ذخیره، تحلیل و نمایش داده‌های IoT."
        }
      ]
    }
  ]
},

/* ============================================================
   فصل ۲ — IoT Architecture
============================================================ */
{
  section: "فصل ۲: IoT Architecture | معماری اینترنت اشیا",
  topics: [
    {
      title: "1- IoT Architecture Models",
      content: "به دلیل تنوع کاربردها، معماری استاندارد واحدی برای IoT وجود ندارد.",
      subtopics: [
        {
          title: "Three-Layer Architecture",
          content: "Perception، Network و Application."
        },
        {
          title: "Four-Layer Architecture",
          content: "افزودن Support Layer برای پردازش داده."
        },
        {
          title: "Five-Layer Architecture",
          content: "Perception، Transport، Processing، Middleware و Business."
        }
      ]
    },
    {
      title: "2- IoT vs OSI / TCP-IP",
      content: "معماری IoT با مدل‌های کلاسیک شبکه تفاوت دارد.",
      subtopics: [
        {
          title: "OSI Model Comparison",
          content: "در IoT تمرکز بیشتر روی Application و Data Management است."
        },
        {
          title: "Security in Architecture",
          content: "امنیت با TLS و DTLS پیاده‌سازی می‌شود."
        }
      ]
    }
  ]
},

/* ============================================================
   فصل ۳ — Applications of IoT
============================================================ */
{
  section: "فصل ۳: Applications of IoT | کاربردهای اینترنت اشیا",
  topics: [
    {
      title: "1- Smart Cities",
      content: "استفاده از IoT برای مدیریت ترافیک، انرژی و خدمات شهری.",
      subtopics: [
        {
          title: "Examples",
          content: "New York، Singapore"
        }
      ]
    },
    {
      title: "2- Industrial IoT (IIoT)",
      content: "افزایش بهره‌وری و کاهش هزینه در صنایع.",
      subtopics: [
        {
          title: "Smart Factories",
          content: "مانیتورینگ ماشین‌آلات و نگهداری پیش‌بینانه."
        }
      ]
    },
    {
      title: "3- Healthcare IoT",
      content: "پایش سلامت بیماران به‌صورت آنی.",
      subtopics: [
        {
          title: "Remote Monitoring",
          content: "کنترل علائم حیاتی از راه دور."
        }
      ]
    },
    {
      title: "4- Agriculture IoT",
      content: "هوشمندسازی کشاورزی و مدیریت منابع.",
      subtopics: [
        {
          title: "Smart Irrigation",
          content: "کاهش مصرف آب و افزایش بازدهی."
        }
      ]
    }
  ]
},

/* ============================================================
   فصل ۴ — Benefits of IoT
============================================================ */
{
  section: "فصل ۴: Benefits of IoT | مزایای اینترنت اشیا",
  topics: [
    {
      title: "1- Efficiency and Cost",
      content: "IoT باعث افزایش بهره‌وری و کاهش هزینه‌ها می‌شود.",
      subtopics: [
        {
          title: "Predictive Maintenance",
          content: "کاهش خرابی ناگهانی تجهیزات."
        },
        {
          title: "Data Driven Decisions",
          content: "تصمیم‌گیری بر اساس داده واقعی."
        }
      ]
    }
  ]
},

/* ============================================================
   فصل ۵ — Challenges of IoT
============================================================ */
{
  section: "فصل ۵: Challenges of IoT | چالش‌های اینترنت اشیا",
  topics: [
    {
      title: "1- Security Challenges",
      content: "دستگاه‌های IoT هدف حملات سایبری هستند.",
      subtopics: [
        {
          title: "Weak Authentication",
          content: "رمزهای پیش‌فرض و احراز هویت ضعیف."
        },
        {
          title: "Firmware Vulnerabilities",
          content: "به‌روزرسانی نکردن دستگاه‌ها."
        }
      ]
    },
    {
      title: "2- Data Privacy",
      content: "جمع‌آوری داده شخصی بدون رضایت.",
      subtopics: [
        {
          title: "Privacy Risks",
          content: "نقض حریم خصوصی کاربران."
        }
      ]
    }
  ]
},

/* ============================================================
   فصل ۶ — IoT Hardware and Boards
============================================================ */
{
  section: "فصل ۶: IoT Hardware and Boards | سخت‌افزار IoT",
  topics: [
    {
      title: "1- Microcontroller vs Microprocessor",
      content: "دو رویکرد سخت‌افزاری در IoT.",
      subtopics: [
        {
          title: "Microcontroller",
          content: "مصرف کم، ساده، مناسب سنسورها."
        },
        {
          title: "Microprocessor",
          content: "قدرت پردازش بالا، مناسب سیستم‌عامل."
        }
      ]
    },
    {
      title: "2- Popular Boards",
      content: "بردهای پرکاربرد اینترنت اشیا.",
      subtopics: [
        {
          title: "Arduino UNO",
          content: "Atmega328، پین‌های دیجیتال و آنالوگ."
        },
        {
          title: "Raspberry Pi",
          content: "پردازنده قدرتمند و سیستم‌عامل."
        },
        {
          title: "NodeMCU (ESP8266)",
          content: "دارای Wi‑Fi داخلی."
        }
      ]
    }
  ]
},

/* ============================================================
   فصل ۷ — Basic Electronics
============================================================ */
{
  section: "فصل ۷: Basic Electronics | مبانی الکترونیک",
  topics: [
    {
      title: "1- Electrical Concepts",
      content: "مبانی جریان و مدار الکتریکی.",
      subtopics: [
        {
          title: "AC vs DC",
          content: "جریان متناوب و مستقیم."
        },
        {
          title: "Resistor",
          content: "مقاومت برای محدودسازی جریان."
        }
      ]
    },
    {
      title: "2- Transistor and LED",
      content: "قطعات کلیدی الکترونیکی.",
      subtopics: [
        {
          title: "Transistor (NPN / PNP)",
          content: "سوئیچ و تقویت‌کننده."
        },
        {
          title: "LED",
          content: "دیود نورافشان با مقاومت محافظ."
        }
      ]
    }
  ]
},

/* ============================================================
   فصل ۸ — IoT Data Protocols
============================================================ */
{
  section: "فصل ۸: IoT Data Protocols | پروتکل‌های داده",
  topics: [
    {
      title: "1- MQTT",
      content: "سبک‌ترین پروتکل IoT مبتنی بر Publish/Subscribe.",
      subtopics: [
        {
          title: "Broker and Topics",
          content: "مدیریت پیام‌ها در MQTT."
        }
      ]
    },
    {
      title: "2- AMQP",
      content: "پروتکل پیام‌رسان مطمئن.",
      subtopics: [
        {
          title: "Exchange and Queue",
          content: "ساختار مسیریابی پیام."
        }
      ]
    },
    {
      title: "3- DDS",
      content: "ارتباط بلادرنگ با تأخیر کم.",
      subtopics: [
        {
          title: "Real-Time Systems",
          content: "کاربرد در شهر هوشمند و صنعت."
        }
      ]
    }
  ]
},

/* ============================================================
   فصل ۹ — IoT Network Protocols
============================================================ */
{
  section: "فصل ۹: IoT Network Protocols | پروتکل‌های شبکه",
  topics: [
    {
      title: "1- Short Range",
      content: "پروتکل‌های برد کوتاه.",
      subtopics: [
        {
          title: "Wi-Fi",
          content: "سرعت بالا، مصرف انرژی زیاد."
        },
        {
          title: "Bluetooth / BLE",
          content: "کم‌مصرف و برد کوتاه."
        },
        {
          title: "Zigbee",
          content: "Mesh، Low Power."
        }
      ]
    },
    {
      title: "2- Long Range",
      content: "پروتکل‌های برد بلند.",
      subtopics: [
        {
          title: "LoRaWAN",
          content: "برد زیاد، داده کم."
        },
        {
          title: "NB-IoT",
          content: "شبکه اپراتوری."
        }
      ]
    }
  ]
},

/* ============================================================
   فصل ۱۰ — Internet Delivery Models
============================================================ */
{
  section: "فصل ۱۰: Internet Delivery Models | مدل‌های تحویل داده",
  topics: [
    {
      title: "Delivery Models",
      content: "نحوه ارسال بسته‌های داده در شبکه.",
      subtopics: [
        {
          title: "Unicast",
          content: "یک به یک."
        },
        {
          title: "Broadcast",
          content: "یک به همه."
        },
        {
          title: "Multicast",
          content: "یک به گروه."
        },
        {
          title: "Anycast",
          content: "بهترین مقصد."
        }
      ]
    }
  ]
},

/* ============================================================
   فصل ۱۱ — IoT Security
============================================================ */
{
  section: "فصل ۱۱: IoT Security | امنیت اینترنت اشیا",
  topics: [
    {
      title: "Security Elements",
      content: "اصول پایه امنیت در IoT.",
      subtopics: [
        {
          title: "Authentication",
          content: "احراز هویت دستگاه."
        },
        {
          title: "Encryption",
          content: "رمزنگاری داده."
        },
        {
          title: "Secure Updates",
          content: "به‌روزرسانی امن."
        }
      ]
    }
  ]
},

/* ============================================================
   فصل ۱۲ — Privacy and Regulations
============================================================ */
{
  section: "فصل ۱۲: Privacy and Regulations | حریم خصوصی و قوانین",
  topics: [
    {
      title: "1- GDPR",
      content: "قانون حفاظت از داده در اتحادیه اروپا.",
      subtopics: [
        {
          title: "Right to be Forgotten",
          content: "حق حذف داده."
        }
      ]
    },
    {
      title: "2- HIPAA",
      content: "قانون حفاظت اطلاعات سلامت آمریکا.",
      subtopics: [
        {
          title: "Healthcare Data",
          content: "امنیت داده پزشکی."
        }
      ]
    }
  ]
}

];
