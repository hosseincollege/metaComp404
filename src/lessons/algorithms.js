/* ============================================================
   درس طراحی الگوریتم‌ها — ساختار شبیه پایتون (python.js)
   نسخه نهایی مخصوص متاورس دانشگاهی حسین
============================================================ */

export default [

  /* ============================================================
     فصل ۱ — تحلیل الگوریتم و پیچیدگی زمانی/فضایی
  ============================================================ */
  {
    section: "فصل ۱: تحلیل الگوریتم و پیچیدگی",
    topics: [
      {
        title: "1- نمادهای مجانبی (Asymptotic Notations)",
        content: "آشنایی با Growth Rate و رفتار الگوریتم در مقیاس بالا.",
        subtopics: [
          {
            title: "Big-O",
            content: "نشان‌دهنده کران بالا؛ بدترین حالت عملکرد الگوریتم."
          },
          {
            title: "Big-Theta",
            content: "نشان‌دهنده رفتار دقیق؛ بهترین بیان برای پیچیدگی واقعی."
          },
          {
            title: "Big-Omega",
            content: "کران پایین؛ نشان می‌دهد الگوریتم حداقل چقدر زمان نیاز دارد."
          }
        ]
      },

      {
        title: "2- بهترین، متوسط و بدترین حالت",
        content: "",
        subtopics: [
          {
            title: "Best Case",
            content: "وقتی ورودی در بهترین حالت ممکن باشد. مثل پیدا کردن عنصر در اولین تلاش."
          },
          {
            title: "Worst Case",
            content: "وقتی بدترین ورودی ممکن باعث بیشترین زمان می‌شود."
          },
          {
            title: "Average Case",
            content: "میانگین رفتار الگوریتم روی تمام ورودی‌ها."
          }
        ]
      },

      {
        title: "3- حل روابط بازگشتی",
        content: "",
        subtopics: [
          {
            title: "Recurrence Relation",
            content: "معادله‌ای برای بیان هزینه مراحل بازگشتی مثل Merge Sort."
          },
          {
            title: "Master Theorem",
            content: "روشی سریع برای حل T(n) = aT(n/b) + f(n)."
          }
        ]
      }
    ]
  },

  /* ============================================================
     فصل ۲ — تقسیم و حل (Divide and Conquer)
  ============================================================ */
  {
    section: "فصل ₂: تقسیم و حل (Divide and Conquer)",
    topics: [
      {
        title: "1- ساختار کلی D&C",
        content: "",
        subtopics: [
          { title: "Divide", content: "تقسیم مسئله به زیرمسئله‌ها." },
          { title: "Conquer", content: "حل هر زیرمسئله به‌صورت بازگشتی." },
          { title: "Combine", content: "ترکیب جواب زیرمسئله‌ها." }
        ]
      },

      {
        title: "2- Merge Sort",
        content: "مرتب‌سازی با استراتژی تقسیم و حل.",
        subtopics: [
          { title: "درخت بازگشتی", content: "ساختار درختی نشان‌دهنده تعداد تقسیم‌هاست." },
          { title: "پیچیدگی", content: "همه حالات: O(n log n)." }
        ]
      },

      {
        title: "3- Quick Sort",
        content: "",
        subtopics: [
          { title: "Pivot Selection", content: "انتخاب محور نقش مهمی دارد." },
          { title: "Best/Average", content: "O(n log n)." },
          { title: "Worst Case", content: "O(n²) وقتی pivot بد انتخاب شود." }
        ]
      }
    ]
  },

  /* ============================================================
     فصل ۳ — برنامه‌نویسی پویا (Dynamic Programming)
  ============================================================ */
  {
    section: "فصل ۳: برنامه‌نویسی پویا (Dynamic Programming)",
    topics: [
      {
        title: "1- مبانی DP",
        content: "",
        subtopics: [
          { title: "Optimal Substructure", content: "راه‌حل بهینه از زیربخش‌های بهینه ساخته می‌شود." },
          { title: "Overlapping Subproblems", content: "زیرمسئله‌ها تکراری هستند، پس ذخیره‌سازی لازم است." }
        ]
      },

      {
        title: "2- روش Top-Down و Bottom-Up",
        content: "",
        subtopics: [
          { title: "Memoization", content: "بازگشتی + ذخیره‌سازی نتایج." },
          { title: "Tabulation", content: "ساخت جدول از پایین به بالا." }
        ]
      },

      {
        title: "3- مسئله کوله‌پشتی ۰/۱",
        content: "",
        subtopics: [
          { title: "رابطه بازگشتی", content: "max(value[i]+…, value without i)." },
          { title: "پیچیدگی", content: "O(nW)." }
        ]
      },

      {
        title: "4- LCS — طولانی‌ترین زیررشته مشترک",
        content: "",
        subtopics: [
          { title: "رابطه DP", content: "اگر کاراکتر برابر باشد ۱+ زیرمسئله." },
          { title: "پیچیدگی", content: "O(n*m)." }
        ]
      },

      {
        title: "5- TSP با برنامه‌نویسی پویا",
        content: "",
        subtopics: [
          { title: "DP with Bitmask", content: "استفاده از نگاشت زیرمجموعه‌ها." },
          { title: "پیچیدگی", content: "O(n² * 2^n) — بهینه ولی بسیار سنگین." }
        ]
      }
    ]
  },

  /* ============================================================
     فصل ۴ — الگوریتم‌های حریصانه (Greedy)
  ============================================================ */
  {
    section: "فصل ۴: الگوریتم‌های حریصانه (Greedy)",
    topics: [
      {
        title: "1- تفاوت DP و Greedy",
        content: "",
        subtopics: [
          { title: "Local vs Global", content: "Greedy انتخاب محلی؛ DP ساخت انتخاب‌های بهینه." }
        ]
      },

      {
        title: "2- Huffman Coding",
        content: "",
        subtopics: [
          { title: "Min-Heap", content: "ترتیب‌گذاری بر اساس فرکانس." },
          { title: "Prefix-Free", content: "هیچ کدی پیشوند دیگری نیست." }
        ]
      },

      {
        title: "3- MST: Prim & Kruskal",
        content: "",
        subtopics: [
          { title: "Prim", content: "استفاده از Priority Queue و انتخاب یال بعدی." },
          { title: "Kruskal", content: "مرتب‌سازی یال‌ها و استفاده از Union-Find." }
        ]
      },

      {
        title: "4- Dijkstra",
        content: "",
        subtopics: [
          { title: "Relaxation", content: "به‌روزرسانی فاصله‌ها." },
          { title: "محدودیت", content: "وزن منفی باعث خرابی الگوریتم می‌شود." }
        ]
      }
    ]
  },

  /* ============================================================
     فصل ۵ — جستجوی فضای حالت
  ============================================================ */
  {
    section: "فصل ۵: جستجوی فضای حالت (State-Space Search)",
    topics: [
      {
        title: "1- Backtracking",
        content: "",
        subtopics: [
          { title: "Pruning", content: "حذف شاخه‌های غیرممکن." },
          { title: "N-Queens", content: "کلاسیک‌ترین مثال." }
        ]
      },

      {
        title: "2- Branch and Bound",
        content: "",
        subtopics: [
          { title: "Cost Function", content: "استفاده از Bound برای حذف مسیرهای بی‌فایده." },
          { title: "TSP", content: "با B&B می‌توان بهترین مسیر را یافت." }
        ]
      }
    ]
  },

  /* ============================================================
     فصل ۶ — الگوریتم‌های گراف
  ============================================================ */
  {
    section: "فصل ۶: الگوریتم‌های گراف",
    topics: [
      {
        title: "1- BFS",
        content: "",
        subtopics: [
          { title: "Queue", content: "سطح‌به‌سطح جلو می‌رود." },
          { title: "کوتاه‌ترین مسیر بدون وزن", content: "در گراف بدون وزن بهترین انتخاب است." }
        ]
      },

      {
        title: "2- DFS",
        content: "",
        subtopics: [
          { title: "Stack / Recursion", content: "تا عمق پیش می‌رود." },
          { title: "Topological Sort", content: "برای گراف‌های جهت‌دار بدون دور." }
        ]
      },

      {
        title: "3- Floyd–Warshall",
        content: "",
        subtopics: [
          { title: "پیچیدگی", content: "O(n³)." },
          { title: "وزن منفی", content: "با وزن منفی کار می‌کند ولی نه دور منفی." }
        ]
      }
    ]
  },

  /* ============================================================
     فصل ۷ — نظریه پیچیدگی و NP
  ============================================================ */
  {
    section: "فصل ۷: نظریه پیچیدگی (P vs NP)",
    topics: [
      {
        title: "1- تعاریف اصلی",
        content: "",
        subtopics: [
          { title: "P", content: "حل سریع در زمان چندجمله‌ای." },
          { title: "NP", content: "بررسی جواب سریع اما یافتن سخت." },
          { title: "NP-Complete", content: "سخت‌ترین مسائل NP." },
          { title: "NP-Hard", content: "حتی از NP-Complete سخت‌تر." }
        ]
      },

      {
        title: "2- Hamiltonian vs TSP",
        content: "",
        subtopics: [
          { title: "Hamiltonian Cycle", content: "مسئله تصمیم: آیا دور وجود دارد؟" },
          { title: "TSP", content: "مسئله بهینه‌سازی: کمترین هزینه." }
        ]
      }
    ]
  }

];
