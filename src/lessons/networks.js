// src/lessons/networks.js
// =============================================================
// COURSE: Computer Networks — Structured like python.js
// LEVEL: Hybrid (Medium Explanation)
// =============================================================

export default [

  /* ============================================================
     فصل ۱ — معماری و اصول بنیادین اینترنت
  ============================================================ */
  {
    section: "فصل ۱: معماری و اصول بنیادین اینترنت",
    topics: [
      {
        title: "1- سوئیچینگ",
        content: "",
        subtopics: [
          {
            title: "Circuit Switching",
            content:
              "اتصال قبل از ارسال داده رزرو می‌شود؛ تضمین کیفیت دارد اما منابع بلااستفاده می‌مانند."
          },
          {
            title: "Packet Switching",
            content:
              "داده به بسته تقسیم می‌شود و هر بسته مستقل مسیریابی می‌شود؛ کارایی بالاتر، بدون تضمین QoS."
          }
        ]
      },

      {
        title: "2- ساختار اینترنت و ISPها",
        content: "",
        subtopics: [
          {
            title: "Peering & Transit",
            content:
              "Peering تبادل مستقیم بین دو ISP؛ Transit زمانی که یک ISP از مسیر ISP دیگر استفاده می‌کند."
          }
        ]
      },

      {
        title: "3- استانداردها",
        content: "",
        subtopics: [
          { title: "IEEE 802", content: "استاندارد شبکه LAN و WiFi." },
          { title: "RFC", content: "مستندات رسمی پروتکل‌های اینترنت." }
        ]
      }
    ]
  },

  /* ============================================================
     فصل ۲ — لایه فیزیکی و پیوند داده
  ============================================================ */
  {
    section: "فصل ۲: لایه فیزیکی و لایه پیوند داده",
    topics: [
      {
        title: "1- محیط‌های انتقال",
        content: "",
        subtopics: [
          { title: "کابل کواکسیال", content: "پایداری بالا، تلفات کم." },
          { title: "Twisted Pair", content: "Cat5e/6؛ پرکاربردترین." },
          { title: "Fiber Optics", content: "سرعت بسیار بالا با بازتاب کلی." },
          { title: "Wireless Spectrum", content: "۲.۴GHz و ۵GHz؛ حساس به تداخل." }
        ]
      },

      {
        title: "2- تشخیص خطا",
        content: "",
        subtopics: [
          { title: "Parity Bit", content: "تشخیص تک‌بیتی ساده." },
          { title: "Checksum", content: "جمع‌بندی بایت‌ها، خطای متوسط." },
          { title: "CRC", content: "قوی‌ترین؛ استفاده در Ethernet و 802.11." }
        ]
      },

      {
        title: "3- MAC Address",
        content: "",
        subtopics: [
          {
            title: "ساختار",
            content: "آدرس ۴۸ بیتی؛ بخش OUI برای شرکت سازنده."
          },
          {
            title: "محدودیت دامنه",
            content: "فقط در شبکه محلی استفاده می‌شود (Broadcast Domain)."
          }
        ]
      }
    ]
  },

  /* ============================================================
     فصل ۳ — لایه شبکه (IP, Routing)
  ============================================================ */
  {
    section: "فصل ۳: لایه شبکه (Network Layer)",
    topics: [
      {
        title: "1- پروتکل IP",
        content: "",
        subtopics: [
          { title: "وظیفه اصلی", content: "مسیریابی بین شبکه‌ها؛ بدون تضمین تحویل." },
          { title: "IPv4 vs IPv6", content: "کمبود IPv4؛ فضای آدرس عظیم‌تر در IPv6." }
        ]
      },

      {
        title: "2- پروتکل ICMP",
        content: "",
        subtopics: [
          { title: "Ping", content: "بررسی دسترسی و تاخیر." },
          { title: "Source Quench", content: "پیام قدیمی کنترل ازدحام (منسوخ شده)." }
        ]
      },

      {
        title: "3- DHCP",
        content: "",
        subtopics: [
          { title: "Discover", content: "دستگاه درخواست آدرس می‌دهد." },
          { title: "Offer", content: "سرور پیشنهاد می‌دهد." },
          { title: "Request", content: "کلاینت درخواست رسمی می‌فرستد." },
          { title: "ACK", content: "تایید و تخصیص نهایی." }
        ]
      },

      {
        title: "4- NAT",
        content: "",
        subtopics: [
          {
            title: "چرا NAT؟",
            content: "کمبود IPv4؛ قابلیت مخفی‌سازی شبکه داخلی."
          },
          {
            title: "مشکل P2P",
            content: "اتصال مستقیم بین دو دستگاه پشت NAT دشوار است."
          }
        ]
      },

      {
        title: "5- الگوریتم‌های مسیریابی",
        content: "",
        subtopics: [
          {
            title: "Dijkstra (Link-State)",
            content: "محاسبه کوتاه‌ترین مسیر؛ نیاز به Heap برای صف اولویت."
          },
          {
            title: "Distance-Vector",
            content: "الگوریتم ساده‌تر؛ اطلاعات صرفاً فاصله تا مقصد."
          }
        ]
      }
    ]
  },

  /* ============================================================
     فصل ۴ — لایه انتقال (TCP / UDP)
  ============================================================ */
  {
    section: "فصل ۴: لایه انتقال (Transport Layer)",
    topics: [
      {
        title: "1- TCP vs UDP",
        content: "",
        subtopics: [
          {
            title: "TCP",
            content: "Reliable، دارای ترتیب، کنترل جریان و ازدحام."
          },
          {
            title: "UDP",
            content: "بدون اتصال، سریع، مناسب بازی و ویدئو."
          }
        ]
      },

      {
        title: "2- Socket API",
        content: "",
        subtopics: [
          { title: "Socket چیست؟", content: "رابط برنامه با لایه انتقال." },
          { title: "TCP Socket", content: "اتصال‌محور؛ نیازمند handshake." },
          { title: "UDP Socket", content: "بدون اتصال؛ ارسال سریع بسته." }
        ]
      },

      {
        title: "3- مکانیزم‌های TCP",
        content: "",
        subtopics: [
          {
            title: "3-Way Handshake",
            content: "SYN → SYN-ACK → ACK"
          },
          {
            title: "Flow Control",
            content: "مدیریت سرعت ارسال با Receive Window (rwnd)."
          },
          {
            title: "Congestion Control",
            content: "مدیریت ازدحام با Congestion Window (cwnd)."
          },
          {
            title: "RTT Estimation",
            content: "تخمین زمان با الگوریتم EWMA."
          }
        ]
      }
    ]
  },

  /* ============================================================
     فصل ۵ — لایه کاربرد (Application Layer)
  ============================================================ */
  {
    section: "فصل ۵: لایه کاربرد",
    topics: [
      {
        title: "1- HTTP",
        content: "",
        subtopics: [
          {
            title: "Statelessness",
            content: "سرور وضعیت کاربر را نگه نمی‌دارد؛ کوکی‌ها برای حفظ حالت."
          },
          {
            title: "ساختار پیام",
            content: "Request Line، Headerها، Body."
          }
        ]
      },

      {
        title: "2- ایمیل",
        content: "",
        subtopics: [
          { title: "SMTP", content: "ارسال ایمیل — مدل Push." },
          { title: "POP3", content: "دریافت ایمیل — مدل Pull." }
        ]
      },

      {
        title: "3- DNS",
        content: "",
        subtopics: [
          {
            title: "ساختار سلسله‌مراتبی",
            content: "Root → TLD → Authoritative"
          },
          {
            title: "Query Resolution",
            content: "Recursive vs Iterative."
          }
        ]
      }
    ]
  },

  /* ============================================================
     فصل ۶ — مفاهیم عملکردی و عمومی
  ============================================================ */
  {
    section: "فصل ۶: مفاهیم تکمیلی",
    topics: [
      {
        title: "1- Bandwidth vs Throughput",
        content: "",
        subtopics: [
          {
            title: "Bandwidth",
            content: "حداکثر ظرفیت کانال."
          },
          {
            title: "Throughput",
            content: "سرعت واقعی داده؛ متاثر از ازدحام و خطا."
          }
        ]
      },

      {
        title: "2- Elastic Applications",
        content: "",
        subtopics: [
          { title: "تعریف", content: "برنامه‌هایی که با کاهش پهنای باند کیفیت را کاهش نمی‌دهند." },
          { title: "مثال", content: "استریم ویدئو — Adaptive Bitrate." }
        ]
      },

      {
        title: "3- مالتی‌پلکسینگ",
        content: "",
        subtopics: [
          { title: "FDM", content: "تقسیم فرکانس بین کاربران." },
          { title: "TDM", content: "تقسیم زمان بین کاربران." }
        ]
      }
    ]
  }
];
