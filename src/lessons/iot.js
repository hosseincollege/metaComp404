// src/lessons/iot.js
// ===============================================
// COURSE: Internet of Things (Structured Data)
// Version: Hybrid (Medium Detail) — matches python.js schema
// ===============================================

export default [
  /* ============================================================
     فصل ۱ — مفاهیم پایه IoT (Basic Concepts)
  ============================================================ */
  {
    section: "فصل ۱: مفاهیم پایه IoT",
    topics: [
      {
        title: "IoT چیست؟",
        content: "",
        subtopics: [
          {
            title: "تعریف",
            content: "اتصال اشیاء فیزیکی به اینترنت برای دریافت داده، تحلیل و کنترل."
          },
          {
            title: "اجزای اصلی",
            content: "سنسورها، میکروکنترلر، شبکه، گیت‌وی، پایگاه داده، سرور ابری."
          }
        ]
      },

      {
        title: "Sensors & Actuators",
        content: "",
        subtopics: [
          {
            title: "سنسورها",
            content: "دما (DHT22)، گاز (MQ2)، حرکت (PIR)، فاصله (Ultrasonic)."
          },
          {
            title: "عملگرها",
            content: "رله‌ها، موتورهای سروو، LED، شیرهای برقی."
          }
        ]
      }
    ]
  },

  /* ============================================================
     فصل ۲ — سخت‌افزار IoT (Hardware & Microcontrollers)
  ============================================================ */
  {
    section: "فصل ۲: سخت‌افزار و میکروکنترلرها",
    topics: [
      {
        title: "بردهای IoT",
        content: "",
        subtopics: [
          {
            title: "ESP32",
            content: "پشتیبانی از WiFi + BLE، کم‌مصرف، مناسب پروژه‌های Edge."
          },
          {
            title: "Raspberry Pi",
            content: "قدرت پردازش بالا، مناسب پردازش تصویر و AI در لبه."
          },
          {
            title: "Arduino",
            content: "مناسب سنسورهای ساده و کنترل آنی."
          }
        ]
      },

      {
        title: "اتصالات سخت‌افزاری",
        content: "",
        subtopics: [
          {
            title: "آشنایی با Pinها",
            content: "دیجیتال، آنالوگ، PWM، I2C، SPI، UART."
          },
          {
            title: "منبع تغذیه",
            content: "۵ ولت، ۳.۳ ولت، جریان مصرفی سنسورها."
          }
        ]
      }
    ]
  },

  /* ============================================================
     فصل ۳ — پروتکل‌ها (Communication Protocols)
  ============================================================ */
  {
    section: "فصل ۳: پروتکل‌های ارتباطی IoT",
    topics: [
      {
        title: "MQTT",
        content: "",
        subtopics: [
          {
            title: "معماری",
            content: "Publisher → Broker → Subscriber — سبک و بهینه."
          },
          {
            title: "مزایا",
            content: "Low Bandwidth، مناسب شبکه‌های ناپایدار."
          }
        ]
      },

      {
        title: "HTTP vs MQTT",
        content: "",
        subtopics: [
          {
            title: "HTTP",
            content: "Request/Response، سنگین‌تر، Latency بالاتر."
          },
          {
            title: "MQTT",
            content: "Real-time، پایدار، مصرف پهنای باند کم."
          }
        ]
      },

      {
        title: "پروتکل‌های برد کوتاه",
        content: "",
        subtopics: [
          { title: "Bluetooth LE", content: "مصرف کم، مناسب Wearables." },
          { title: "Zigbee", content: "Mesh Network، مناسب خانه هوشمند." },
          { title: "RFID", content: "برچسب‌های شناسایی بدون تماس." }
        ]
      },

      {
        title: "شبکه‌های برد بلند (LPWAN)",
        content: "",
        subtopics: [
          { title: "LoRaWAN", content: "برد طولانی، باتری‌خور کم." },
          { title: "NB-IoT", content: "روی شبکه اپراتور، مناسب شهر هوشمند." }
        ]
      }
    ]
  },

  /* ============================================================
     فصل ۴ — پردازش و ذخیره‌سازی (Edge, Cloud, Data)
  ============================================================ */
  {
    section: "فصل ۴: پردازش داده و معماری سیستم",
    topics: [
      {
        title: "پردازش در لبه (Edge Computing)",
        content: "",
        subtopics: [
          {
            title: "مزایا",
            content: "کاهش Latency، پردازش نزدیک سنسور، امنیت بهتر."
          },
          {
            title: "کاربردها",
            content: "تشخیص چهره روی دوربین‌ها، فیلتر نویز سنسورها."
          }
        ]
      },

      {
        title: "پردازش ابری (Cloud)",
        content: "",
        subtopics: [
          {
            title: "زیرساخت",
            content: "AWS IoT Core، Google IoT، Azure IoT Hub."
          },
          {
            title: "جمع‌آوری داده",
            content: "MQTT Broker در Cloud، دیتابیس‌های Time-Series."
          }
        ]
      },

      {
        title: "Data Pipeline در IoT",
        content: "",
        subtopics: [
          { title: "Stream Processing", content: "Kafka, Redis Streams" },
          { title: "Data Lake", content: "ذخیره‌سازی بلندمدت داده‌های سنسوری." }
        ]
      }
    ]
  },

  /* ============================================================
     فصل ۵ — امنیت و مقیاس‌پذیری (Security & Scalability)
  ============================================================ */
  {
    section: "فصل ۵: امنیت و مقیاس‌پذیری IoT",
    topics: [
      {
        title: "امنیت در IoT",
        content: "",
        subtopics: [
          {
            title: "تهدیدهای رایج",
            content: "Spoofing، Sniffing، کنترل غیرمجاز دستگاه."
          },
          {
            title: "مکانیزم‌های امنیتی",
            content: "TLS، رمزنگاری End-to-End، احراز هویت دستگاه."
          }
        ]
      },

      {
        title: "مقیاس‌پذیری",
        content: "",
        subtopics: [
          {
            title: "Load Balancing",
            content: "پخش بار بین سرورها."
          },
          {
            title: "Auto-Scaling",
            content: "افزایش منابع در زمان پیک داده."
          }
        ]
      }
    ]
  }
];
