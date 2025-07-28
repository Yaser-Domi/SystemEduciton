// Start Top-bar
        document.addEventListener('DOMContentLoaded', function() {
            const hamburger = document.getElementById('hamburger');
            const mobileMenu = document.getElementById('mobileMenu');
            const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
            
            // التحكم في قائمة الجوال
            hamburger.addEventListener('click', function() {
                mobileMenu.classList.toggle('active');
                this.querySelector('i').classList.toggle('fa-bars');
                this.querySelector('i').classList.toggle('fa-times');
            });
            
            // التحكم في القوائم المنسدلة للجوال
            dropdownToggles.forEach(toggle => {
                toggle.addEventListener('click', function() {
                    const targetId = this.getAttribute('data-target');
                    const dropdown = document.getElementById(targetId);
                    
                    this.classList.toggle('active');
                    dropdown.classList.toggle('active');
                });
            });
            
            // إغلاق القائمة عند النقر خارجها
            document.addEventListener('click', function(e) {
                if (!mobileMenu.contains(e.target) && !hamburger.contains(e.target)) {
                    mobileMenu.classList.remove('active');
                    hamburger.querySelector('i').classList.remove('fa-times');
                    hamburger.querySelector('i').classList.add('fa-bars');
                }
            });
            
        // Start research Input
        
        // فهرس الصفحات مع روابط حقيقية
        const pageIndex = [
            {
                title: "الجامعات الحكومية",
                url: "public universities.html",
                content: "دليلك الشامل للجامعات التركية الحكومية"
            },
            {
                title: "الجامعات الخاصة",
                url: "private universities.html",
                content: "دليلك الشامل للجامعات التركية الخاصة"
            },
            {
                title: "الخريطة التفاعلية",
                url: "map.html",
                content: "خريطة تفاعلية ديناميكية للولايات التركية والجامعات المتاحة بكل ولاية"
            },
            {
                title: "جدول المفاضلات",
                url: "Table.html",
                content: "جدول مفاضلات الجامعات التركية العامة وتواريخ مفاضلة كل جامعة"
            },
            {
                title: "منحة الحكومة التركية",
                url: "TurkishScholarship.html",
                content: "منحة الحكومة التركية التي تشمل راتب شهري وتغطية النفقات الدراسية وغيرها من المزايا"
            },
            {
                title: "منحة وقف الديانة التركية",
                url: "Endowment Grant.html",
                content: "منحة وقف الديانة التركية التي تشمل برامج الدراسة الإسلامية وغيرها من البرامج الدراسية الأخرى"
            },
            {
                title: "جامعة البيروني",
                url: "Biruni.html",
                content: " جامعة تركية رائدة في العلوم الصحية والتعليم متعدد اللغات بإمكانات بحثية متقدمة ومستشفيات تدريبية داخل إسطنبول."
            },
            {
                title: "جامعة إسينورت",
                url: "Esinurt.html",
                content: "جامعة خاصة ذات تنمية سريعة ومرافق حديثة وشراكات عبر برنامج إيراسموس في قلب الجانب الأوروبي من إسطنبول."
            },
            {
                title: "جامعة كارابوك",
                url: "Karabük.html",
                content: "تعد جامعة كارابوك من الجامعات الحكومية الحديثة في تركيا، وتتميز بتخصصاتها المتنوعة، وبنيتها التحتية المتطورة، وحرمها الجامعي المتكامل. توفر تعليمًا عالي الجودة بلغات متعددة، وتشارك بفعالية في برامج التبادل الدولي، مع تصنيفات عالمية متقدمة."
            },
            {
                title: "جامعة أكسراي ",
                url: "Aksaray.html",
                content: "جامعة أكسراي هي جامعة حكومية تركية وتتميز بحرم جامعي واسع مليء بالمساحات الخضراء وتصميم معماري حديث "
            },
            {
                title: "جامعة أديمان",
                url: "Adıyaman.html",
                content: "مؤسسة حكومية حديثة تجمع بين جودة التعليم وتعدد التخصصات والبنية البحثية المتقدمة في بيئة جامعية مستقرة بجنوب شرق الأناضول"
            },
            {
                title: "جامعة تشانكري كراتكين",
                url: "Çankırı.html",
                content: "جامعة تشانكري كراتكين بوابة التميز الأكاديمي والبحث العلمي في قلب الأناضول, بيئة تعليمية داعمة لجيل المستقبل في تركيا"
            },
            {
                title: "جامعة بورصة التقنية",
                url: "Bursateknik.html",
                content: "جامعة بورصة التقنية  بيئة أكاديمية متقدمة تميّز في التخصصات الهندسية وشراكات صناعية فاعلة في عاصمة الإنتاج التركي"
            },
        ];
        // عناصر DOM
        const searchInput = document.getElementById('searchInput');
        const searchIcon = document.getElementById('searchIcon');
        const searchResults = document.getElementById('searchResults');
        const resultsContainer = document.getElementById('resultsContainer');
        
        // دالة البحث
        function performSearch() {
            const query = searchInput.value.trim().toLowerCase();
            
            if (query.length < 2) {
                searchResults.style.display = 'none';
                return;
            }
            
            const results = [];
            
            // البحث في فهرس الصفحات
            pageIndex.forEach(page => {
                const title = page.title.toLowerCase();
                const content = page.content.toLowerCase();
                
                // حساب درجة المطابقة
                let score = 0;
                
                // مطابقة العنوان (أهمية عالية)
                if (title.includes(query)) {
                    score += 5;
                    
                    // إذا كانت الكلمة في بداية العنوان
                    if (title.indexOf(query) === 0) {
                        score += 2;
                    }
                }
                
                // مطابقة المحتوى
                const contentMatches = content.split(query).length - 1;
                score += contentMatches;
                
                // إذا كانت المطابقة في أول 100 حرف من المحتوى
                if (content.indexOf(query) >= 0 && content.indexOf(query) < 100) {
                    score += 3;
                }
                
                // إذا كانت هناك مطابقة
                if (score > 0) {
                    results.push({
                        title: page.title,
                        url: page.url,
                        content: page.content,
                        score: score
                    });
                }
            });
            
            // ترتيب النتائج حسب الأهمية
            results.sort((a, b) => b.score - a.score);
            
            // عرض النتائج
            displayResults(results, query);
        }

        // دالة عرض النتائج
        function displayResults(results, query) {
            if (results.length === 0) {
                resultsContainer.innerHTML = `
                    <div class="no-results">
                        <i class="fas fa-search-minus"></i>
                        <h3>لم نعثر على النتيجة</h3>
                        <p>من فضلك أعد المحاولة بكلمات بحث أخرى</p>
                    </div>
                `;
                searchResults.style.display = 'block';
                return;
            }
            
            let resultsHTML = '';
            
            results.slice(0, 5).forEach(result => {
                // تمييز كلمة البحث في العنوان
                const highlightedTitle = result.title.replace(
                    new RegExp(query, 'gi'), 
                    match => `<span class="highlight">${match}</span>`
                );
                
                // إنشاء مقتطف من المحتوى مع تمييز كلمة البحث
                const contentIndex = result.content.toLowerCase().indexOf(query);
                let snippet = result.content;
                
                if (contentIndex !== -1) {
                    const start = Math.max(0, contentIndex - 50);
                    const end = Math.min(result.content.length, contentIndex + query.length + 100);
                    snippet = '...' + snippet.substring(start, end) + '...';
                    
                    snippet = snippet.replace(
                        new RegExp(query, 'gi'), 
                        match => `<span class="highlight">${match}</span>`
                    );
                }
                
                resultsHTML += `
                    <div class="result-item" data-url="${result.url}">
                        <h3 class="result-title">
                         ${highlightedTitle}
                        </h3>
                        <p class="result-content">${snippet}</p>
                    </div>
                `;
            });
            
            resultsContainer.innerHTML = resultsHTML;
            searchResults.style.display = 'block';
            
            // إضافة معالجات الأحداث لعناصر النتائج
            document.querySelectorAll('.result-item').forEach(item => {
                item.addEventListener('click', function() {
                    const url = this.getAttribute('data-url');
                    // الانتقال إلى الصفحة المحددة
                    window.location.href = url;
                });
            });
        }

        // إضافة معالجات الأحداث
        searchIcon.addEventListener('click', performSearch);
        
        searchInput.addEventListener('input', performSearch);
        
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
        
        // إغلاق نتائج البحث عند النقر خارجها
        document.addEventListener('click', function(e) {
            if (!e.target.closest('.nav-search')) {
                searchResults.style.display = 'none';
            }
        });
    });

    // End research Input

// End Top-bar

// Start Slideshow

document.addEventListener('DOMContentLoaded', function() {
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');
  const prevArrow = document.querySelector('.prev-arrow');
  const nextArrow = document.querySelector('.next-arrow');
  let currentSlide = 0;
  
  // عرض الشريحة الأولى
  showSlide(currentSlide);
  
  // أحداث الأسهم
  prevArrow.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  });
  
  nextArrow.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  });
  
  // أحداث النقاط
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      currentSlide = index;
      showSlide(currentSlide);
    });
  });
  
  // وظيفة عرض الشريحة
  function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    slides[index].classList.add('active');
    dots[index].classList.add('active');
    
    // تحديث العداد
    const counters = document.querySelectorAll('.slide-counter');
    counters.forEach((counter, i) => {
      counter.textContent = `${i+1}/${slides.length}`;
    });
  }
  
  // التنقل بالسحب على الأجهزة التي تدعم اللمس
  let touchStartX = 0;
  let touchEndX = 0;
  
  const slider = document.querySelector('.gallery-slideshow');
  
  slider.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, false);
  
  slider.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  }, false);
  
  function handleSwipe() {
    if (touchEndX < touchStartX - 50) {
      // مسح لليسار - التالي
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }
    
    if (touchEndX > touchStartX + 50) {
      // مسح لليمين - السابق
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      showSlide(currentSlide);
    }
  }
});

// End Slideshow


// تنشيط الأكورديون
    const accordionItems = document.querySelectorAll('.accordion-item');
    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');
        
        header.addEventListener('click', function() {
            const isActive = item.classList.contains('active');
            
            // إغلاق جميع العناصر الأخرى
            accordionItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            
            // تبديل الحالة للعنصر الحالي
            if (!isActive) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    });
    
    // معالجة نموذج التواصل
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // هنا يمكنك إضافة كود إرسال النموذج إلى الخادم
            alert('تم استلام رسالتك بنجاح! سنتواصل معك قريبًا.');
            
            // إعادة تعيين النموذج
            contactForm.reset();
        });
    }

// End Section

// Start Quick Interaction Tools Section

       // شريط تقدم التمرير في الأسفل
        const progressBar = document.querySelector('.scroll-progress-bar');
        
        window.addEventListener('scroll', () => {
            const totalHeight = document.body.scrollHeight - window.innerHeight;
            const progress = (window.scrollY / totalHeight) * 100;
            progressBar.style.width = `${progress}%`;
        });
        
        // زر العودة لأعلى - إلى شريط التنقل
        const scrollTopBtn = document.getElementById('scrollTopBtn');
        const navbar = document.querySelector('nav');
        
        scrollTopBtn.addEventListener('click', () => {
            navbar.scrollIntoView({
                behavior: 'smooth'
            });
        });
        
        // أزرار التواصل الاجتماعي
        const actionBtn = document.getElementById('actionBtn');
        const socialButtons = document.querySelectorAll('.social-btn');
        let socialVisible = false;
        
        actionBtn.addEventListener('click', () => {
            socialVisible = !socialVisible;
            
            if (socialVisible) {
                socialButtons.forEach(btn => {
                    btn.classList.add('show');
                });
                actionBtn.innerHTML = '<i class="fas fa-times"></i>';
            } else {
                socialButtons.forEach(btn => {
                    btn.classList.remove('show');
                });
                actionBtn.innerHTML = '<i class="fas fa-plus"></i>';
            }
        });
        
        // إضافة وظائف لأزرار التواصل
        document.getElementById('whatsappBtn').addEventListener('click', () => {
            window.open('https://wa.me/905343498411', '_blank');
        });
        
        document.getElementById('telegramBtn').addEventListener('click', () => {
            window.open('https://t.me/systemtr', '_blank');
        });
        
        document.getElementById('facebookBtn').addEventListener('click', () => {
            window.open('https://www.facebook.com/profile.php?id=100094096810288&mibextid=ZbWKwL', '_blank');
        });
        
        // إظهار زر العودة لأعلى عند التمرير لأسفل
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                scrollTopBtn.style.opacity = '1';
                scrollTopBtn.style.visibility = 'visible';
            } else {
                scrollTopBtn.style.opacity = '0';
                scrollTopBtn.style.visibility = 'hidden';
            }
        });
                // تهيئة أولية لإخفاء زر العودة لأعلى
        scrollTopBtn.style.opacity = '0';
        scrollTopBtn.style.visibility = 'hidden';
        
// End Quick Interaction Tools Section

