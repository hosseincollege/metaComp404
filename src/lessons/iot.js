// src/lessons/iot.js
// ================================================================
// COURSE: Internet of Things (Full Enhanced Exam Edition)
// نسخه فوق‌کامل — بازسازی شده براساس سؤالات امتحانی پیام‌نور
// ================================================================

export default [

  /* ============================================================
     فصل ۱ — مفاهیم پایه IoT (Basic Concepts)
  ============================================================ */
  {
    section: "فصل ۱: مفاهیم پایه IoT",
    topics: [

      {
        title: "1- IoT چیست؟",
        content: "",
        subtopics: [
          {
            title: "تعریف",
            content:
              "اتصال اشیاء فیزیکی به اینترنت برای دریافت داده، تحلیل و کنترل از راه دور. هر شیء یک شناسه یکتا دارد."
          },
          {
            title: "اجزای اصلی IoT",
            content:
              "سنسورها، عملگرها، میکروکنترلر، شبکه، گیت‌وی، پایگاه داده، پردازش ابری، داشبورد نظارتی."
          },
          {
            title: "مثلث ارزش‌محور IoT",
            content:
              "سه راس: تولیدکننده، مصرف‌کننده، شیء. گزینه 'کسب‌وکار کننده' بخشی از مثلث نیست."
          }
        ]
      },

      {
        title: "2- شناسه الکترونیکی محصول (EPC / RFID)",
        content: "",
        subtopics: [
          {
            title: "ساختار EPC",
            content:
              "۲۴ بیت شناسایی شرکت، ۲۸ بیت شناسایی رده شی، ۳۶ بیت شناسه منحصر‌به‌فرد شی."
          },
          {
            title: "کاربرد EPC",
            content:
              "ردیابی کالا، انبارداری، لجستیک، جلوگیری از جعل."
          }
        ]
      },

      {
        title: "3- مدل‌های کسب درآمد در IoT",
        content: "",
        subtopics: [
          {
            title: "درآمد داده‌ای (Data Monetization)",
            content:
              "فروش داده‌های جمع‌آوری‌شده از حسگرها. مثال: شرکت Smart Things."
          },
          {
            title: "ساخت اکوسیستم",
            content:
              "ایجاد پلتفرم برای دیگران تا روی آن سرویس ارائه دهند."
          },
          {
            title: "سخت‌افزار عالی (Premium Hardware)",
            content:
              "درآمد از فروش تجهیزات پیشرفته IoT."
          },
          {
            title: "درآمد خدماتی",
            content:
              "فروش اشتراک، پشتیبانی، سرویس‌های ابری."
          }
        ]
      },

      {
        title: "4- دوره‌های تاریخی IoT",
        content: "",
        subtopics: [
          {
            title: "وب نسل ۱ (Web 1.0)",
            content:
              "دوره اینترنت سرویس — فقط خواندن محتوا."
          },
          {
            title: "Web 2.0",
            content:
              "تعامل کاربران، شبکه اجتماعی."
          },
          {
            title: "Internet of Things",
            content:
              "اتصال اشیا به اینترنت و داده‌محوری."
          }
        ]
      }
    ]
  },

  /* ============================================================
     فصل ۲ — سخت‌افزار IoT
  ============================================================ */
  {
    section: "فصل ۲: سخت‌افزار و میکروکنترلرها",
    topics: [

      {
        title: "1- بردهای IoT",
        content: "",
        subtopics: [
          {
            title: "ESP32",
            content: "WiFi + BLE، مناسب پردازش لبه."
          },
          {
            title: "Arduino",
            content: "برای کنترل سنسورهای ساده."
          },
          {
            title: "Raspberry Pi",
            content: "پردازنده قوی برای AI و تصویری."
          }
        ]
      },

      {
        title: "2- اتصالات",
        content: "",
        subtopics: [
          {
            title: "Pinها",
            content: "دیجیتال، آنالوگ، PWM، I2C، SPI، UART."
          },
          {
            title: "منبع تغذیه",
            content: "۳.۳ ولت / ۵ ولت."
          }
        ]
      },

      {
        title: "3- RFID (آر اف آی دی)",
        content: "",
        subtopics: [
          {
            title: "اجزا",
            content: "تگ، آنتن، بازخوان RFID، سرویس میان‌افزار RFID."
          },
          {
            title: "تگ فعال",
            content: "دارای باتری؛ برد بیشتر؛ مناسب ردیابی."
          },
          {
            title: "تگ غیرفعال",
            content: "بدون باتری؛ ارزان‌تر."
          }
        ]
      },

      {
        title: "4- NFC",
        content: "",
        subtopics: [
          {
            title: "فناوری پایه",
            content: "بر پایه RFID فرکانس 13.56MHz."
          }
        ]
      }
    ]
  },

  /* ============================================================
     فصل ۳ — پروتکل‌های ارتباطی
  ============================================================ */
  {
    section: "فصل ۳: پروتکل‌های ارتباطی IoT",
    topics: [

      {
        title: "1- WiFi Standards",
        content: "",
        subtopics: [
          {
            title: "802.11b (DSSS)",
            content: "تنها استانداردی که از DSSS استفاده می‌کند."
          },
          {
            title: "802.11a/g/n",
            content: "همگی مبتنی بر OFDM هستند."
          }
        ]
      },

      {
        title: "2- ZigBee",
        content: "",
        subtopics: [
          {
            title: "استاندارد پایه",
            content: "IEEE 802.15.4"
          },
          {
            title: "ویژگی اصلی",
            content: "Mesh Network — علت کاربری در خانه هوشمند."
          },
          {
            title: "اجزا",
            content: "Coordinator، Router، End Device."
          }
        ]
      },

      {
        title: "3- Z-Wave",
        content: "",
        subtopics: [
          {
            title: "اجزای شبکه",
            content: "Controller، Slave Nodes، Home ID."
          },
          {
            title: "نکته امتحانی",
            content: "گزینه 'کم‌مصرف بودن' جزء عناصر شبکه نیست."
          }
        ]
      },

      {
        title: "4- RFID / NFC",
        content: "",
        subtopics: [
          { title: "فرکانس‌ها", content: "LF، HF، UHF" },
          { title: "نحوه خواندن", content: "Inductive Coupling." }
        ]
      },

      {
        title: "5- MQTT vs HTTP",
        subtopics: [
          { title: "MQTT", content: "سبک، Real-Time، Publish/Subscribe." },
          { title: "HTTP", content: "سنگین‌تر، Request/Response." }
        ]
      }
    ]
  },

  /* ============================================================
     فصل ۴ — پردازش، داده و معماری
  ============================================================ */
  {
    section: "فصل ۴: پردازش داده و معماری سیستم",
    topics: [

      {
        title: "1- Cloud Computing",
        content: "",
        subtopics: [
          {
            title: "IaaS / PaaS / SaaS",
            content:
              "IaaS: زیرساخت؛ PaaS: پلتفرم توسعه؛ SaaS: نرم‌افزار روی ابر."
          },
          {
            title: "مثال سؤال امتحانی",
            content: "SaaS یعنی کاربران از طریق اینترنت به نرم‌افزار آماده دسترسی دارند."
          }
        ]
      },

      {
        title: "2- Edge / Fog / Dew",
        content: "",
        subtopics: [
          {
            title: "Edge Computing",
            content: "نصف پردازش روی دستگاه؛ مناسب کاهش Latency."
          },
          {
            title: "Fog Computing",
            content: "میان‌رده بین Edge و Cloud — پردازش منطقه‌ای."
          },
          {
            title: "Dew Computing",
            content: "بخش بسیار سبک پردازش روی دستگاه‌های بسیار کوچک."
          }
        ]
      },

      {
        title: "3- معماری Cisco IoT",
        content: "",
        subtopics: [
          {
            title: "لایه‌های اصلی",
            content: "فیزیکی، اتصال شبکه، Edge، دیتا، کاربرد."
          }
        ]
      },

      {
        title: "4- میان‌افزار در IoT",
        content: "",
        subtopics: [
          { title: "MOM", content: "Message Oriented Middleware" },
          { title: "SOM", content: "Service Oriented Middleware" },
          { title: "TP", content: "Transaction Processing" },
          { title: "غیرمیان‌افزار", content: "UDP میان‌افزار نیست." }
        ]
      },

      {
        title: "5- اتصال در Fog/Edge",
        content: "",
        subtopics: [
          { title: "TCP", content: "ارتباط پایدار" },
          { title: "UDP", content: "سبک، سریع" },
          { title: "SSH / FTP", content: "در مواقع مدیریتی" }
        ]
      }
    ]
  },

  /* ============================================================
     فصل ۵ — امنیت در IoT
  ============================================================ */
  {
    section: "فصل ۵: امنیت و حملات",
    topics: [

      {
        title: "1- حملات امنیتی",
        content: "",
        subtopics: [
          {
            title: "Active Attacks (حملات فعال)",
            content: "DoS، DDoS، Jamming، Packet Injection."
          },
          {
            title: "Passive Attacks",
            content: "Sniffing — شنود بدون تغییر محتوا."
          },
          {
            title: "Spoofing",
            content: "جعل هویت دستگاه."
          },
          {
            title: "Cloning",
            content: "کپی‌کردن تگ RFID."
          },
          {
            title: "Shielding",
            content: "جلوگیری از خواندن تگ با ابزار مکانیکی."
          },
          {
            title: "Malicious Code",
            content: "واردکردن کد مخرب — مثل ویروس."
          }
        ]
      },

      {
        title: "2- IDS / NIDS / HIDS",
        content: "",
        subtopics: [
          {
            title: "NIDS",
            content: "نظارت ترافیک تمام شبکه — کشف الگوهای حمله."
          },
          {
            title: "HIDS",
            content: "نصب روی یک میزبان — بررسی فایل‌ها و لاگ‌ها."
          }
        ]
      },

      {
        title: "3- مکانیزم‌های امنیتی",
        content: "",
        subtopics: [
          { title: "TLS", content: "رمزنگاری کانال." },
          { title: "E2E Encryption", content: "جلوگیری از خواندن محتوا حتی توسط گیت‌وی." },
          { title: "Device Authentication", content: "جلوگیری از Spoofing." }
        ]
      }
    ]
  }
];
