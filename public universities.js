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
                url: "/HTML/public universities.html",
                content: "دليلك الشامل للجامعات التركية الحكومية"
            },
            {
                title: "الجامعات الخاصة",
                url: "/HTML/private universities.html",
                content: "دليلك الشامل للجامعات التركية الخاصة"
            },
            {
                title: "الخريطة التفاعلية",
                url: "/HTML/map.html",
                content: "خريطة تفاعلية ديناميكية للولايات التركية والجامعات المتاحة بكل ولاية"
            },
            {
                title: "جدول المفاضلات",
                url: "/HTML/Table.html",
                content: "جدول مفاضلات الجامعات التركية العامة وتواريخ مفاضلة كل جامعة"
            },
            {
                title: "منحة الحكومة التركية",
                url: "/HTML/TurkishScholarship.html",
                content: "منحة الحكومة التركية التي تشمل راتب شهري وتغطية النفقات الدراسية وغيرها من المزايا"
            },
            {
                title: "منحة وقف الديانة التركية",
                url: "/HTML/Endowment Grant.html",
                content: "منحة وقف الديانة التركية التي تشمل برامج الدراسة الإسلامية وغيرها من البرامج الدراسية الأخرى"
            },
            {
                title: "جامعة البيروني",
                url: "/HTML/Biruni.html",
                content: " جامعة تركية رائدة في العلوم الصحية والتعليم متعدد اللغات بإمكانات بحثية متقدمة ومستشفيات تدريبية داخل إسطنبول."
            },
            {
                title: "جامعة إسينورت",
                url: "/HTML/Esinurt.html",
                content: "جامعة خاصة ذات تنمية سريعة ومرافق حديثة وشراكات عبر برنامج إيراسموس في قلب الجانب الأوروبي من إسطنبول."
            },
            {
                title: "جامعة كارابوك",
                url: "/HTML/Karabük.html",
                content: "تعد جامعة كارابوك من الجامعات الحكومية الحديثة في تركيا، وتتميز بتخصصاتها المتنوعة، وبنيتها التحتية المتطورة، وحرمها الجامعي المتكامل. توفر تعليمًا عالي الجودة بلغات متعددة، وتشارك بفعالية في برامج التبادل الدولي، مع تصنيفات عالمية متقدمة."
            },
            {
                title: "جامعة أكسراي ",
                url: "/HTML/Aksaray.html",
                content: "جامعة أكسراي هي جامعة حكومية تركية وتتميز بحرم جامعي واسع مليء بالمساحات الخضراء وتصميم معماري حديث "
            },
            {
                title: "جامعة أديمان",
                url: "/HTML/Adıyaman.html",
                content: "مؤسسة حكومية حديثة تجمع بين جودة التعليم وتعدد التخصصات والبنية البحثية المتقدمة في بيئة جامعية مستقرة بجنوب شرق الأناضول"
            },
            {
                title: "جامعة تشانكري كراتكين",
                url: "/HTML/Çankırı.html",
                content: "جامعة تشانكري كراتكين بوابة التميز الأكاديمي والبحث العلمي في قلب الأناضول, بيئة تعليمية داعمة لجيل المستقبل في تركيا"
            },
            {
                title: "جامعة بورصة التقنية",
                url: "/HTML/Bursateknik.html",
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

  
// Start Header Section

 document.addEventListener('DOMContentLoaded', function() {
            // Elements
            const slides = document.querySelectorAll('.slide');
            const navBtns = document.querySelectorAll('.nav-btns');
            const prevBtn = document.querySelector('.arrow.prev');
            const nextBtn = document.querySelector('.arrow.next');
            const slideImages = document.querySelectorAll('.slide-img');
            const lightbox = document.querySelector('.lightbox');
            const lightboxImg = document.querySelector('.lightbox-content img');
            const closeBtn = document.querySelector('.close-btns');
            
            let currentSlide = 0;
            let slideInterval;
            
            // Initialize slider
            function initSlider() {
                showSlide(currentSlide);
                startSlideShow();
                
                // Add event listeners
                navBtns.forEach(btn => {
                    btn.addEventListener('click', function() {
                        const slideIndex = parseInt(this.getAttribute('data-slide'));
                        goToSlide(slideIndex);
                    });
                });
                
                prevBtn.addEventListener('click', () => {
                    goToSlide(currentSlide - 1);
                });
                
                nextBtn.addEventListener('click', () => {
                    goToSlide(currentSlide + 1);
                });
                
                // Lightbox functionality
                slideImages.forEach(img => {
                    img.addEventListener('click', function() {
                        const imgSrc = this.getAttribute('data-src');
                        lightboxImg.src = imgSrc;
                        lightbox.classList.add('active');
                        document.body.style.overflow = 'hidden';
                    });
                });
                
                closeBtn.addEventListener('click', closeLightbox);
                lightbox.addEventListener('click', function(e) {
                    if (e.target === lightbox) {
                        closeLightbox();
                    }
                });
            }
            
            // Show specific slide
            function showSlide(index) {
                // Hide all slides
                slides.forEach(slide => {
                    slide.classList.remove('active');
                });
                
                // Remove active class from nav buttons
                navBtns.forEach(btn => {
                    btn.classList.remove('active');
                });
                
                // Show current slide
                slides[index].classList.add('active');
                navBtns[index].classList.add('active');
                
                currentSlide = index;
            }
            
            // Go to specific slide
            function goToSlide(index) {
                resetSlideShow();
                if (index < 0) {
                    index = slides.length - 1;
                } else if (index >= slides.length) {
                    index = 0;
                }
                showSlide(index);
            }
            
            // Start automatic slideshow
            function startSlideShow() {
                slideInterval = setInterval(() => {
                    goToSlide(currentSlide + 1);
                }, 5000);
            }
            
            // Reset slideshow interval
            function resetSlideShow() {
                clearInterval(slideInterval);
                startSlideShow();
            }
            
            // Close lightbox
            function closeLightbox() {
                lightbox.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
            
            // Initialize the slider
            initSlider();
            
            // Pause slideshow when user hovers over slider
            const sliderContainer = document.querySelector('.slider-container');
            sliderContainer.addEventListener('mouseenter', () => {
                clearInterval(slideInterval);
            });
            
            sliderContainer.addEventListener('mouseleave', startSlideShow);
        });


// End Header Section

  
// Start Universities-Section 

        const universities = [
            {
                id: 1,
                span: "حكومية",
                name: "جامعة إسطنبول",
                state: "إسطنبول",
                url: "/HTML/index3.html",
                languages: [ ""],
                majors: [ "كلية الحاسبات والتكنولوجيا والمعلومات" , "كلية التمريض" , "كلية الهندسة المعمارية" , "كلية النقل والخدمات اللوجستية" , "كلية التعليم المفتوح والتعليم عن بعد" , "كلية الشريعة" , "كلية العلوم المائية" , "كلية الاتصالات" , "كلية العلوم السياسية" , "كلية طب الأسنان" , "كلية الصيدلة" , "كلية الاقتصاد والعلوم الإدارية" , "كلية العلوم" , "كلية الأداب" , "كلية الحقوق" , "كليةالطب البشري" ],
                certificates: ["شهادة اليوس الموحد TR-YÖS" , "شهادة السات"],
                image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            },

            {
                id: 2,
                span: "حكومية",
                name: "جامعة أنقرة للعلوم الاجتماعية",
                state: "أنقرة",
                url: "",
                languages: ["التركية", "الإنجليزية"],
                majors: [ "علم النفس إنجليزي"  , "علم الاجتماع إنجليزي"  , "حقوق"  , "اللغة التركية وأدابها"  , "اللغة الإنجليزية وأدابها"  , "العلوم السياسية والإدارة العامة إنجليزي"  , "العلاقات الدولية إنجليزي"  , "الترجمة اليابانية والتفسير"  , "الترجمة الروسية والتفسير"  ,"التاريخ إنجليزي"  , "الاهيات"  , "الاقتصاد إنجليزي", "إدارة الأعمال إنجليزي"],
                certificates: ["شهادة الثانوية العامة", "شهادة اليوس الموحد TR-YÖS", "شهادة السات", "شهادة الثانوية التركية"],
                image: "https://images.unsplash.com/photo-1590069261209-f8e9b8642343?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 3,
                span: "حكومية",
                name: "جامعة أنقرة يلدرم بيازيد",
                state: "أنقرة",
                url: "",
                languages: ["الإنجليزية" ,"التركية"],
                majors: [ "هندسة نظم الطاقة إنجليزي"  , "هندسة مدنية إنجليزي"  , "هندسة صناعية إنجليزي"  , "هندسة الميكانيك  إنجليزي"  , "هندسة المعادن والمواد إنجليزي"  , "هندسة الكهرباء والإلكترون إنجليزي"  , "هندسة الطيران والفضاء إنجليزي"  , "هندسة الحاسوب إنجليزي"  , "هندسة البرمجيات إنجليزي"  , "نظم المعلومات الإدارية إنجليزي"  , "علم النفس إنجليزي"  , "علم الاجتماع"  , "علاج النطق واللغة"  ,"طب بشري إنجليزي"  , "طب بشري"  , "طب الأسنان"  , "حقوق"  , "تنمية الطفل"  , "تصميم الاتصالات المرئية"  , "ترجمة اللغة العربية"  , "المالية والمصرفية"  , "المالية إنجليزي"  , "اللغة التركية وأدابها"  , "الفلسفة"  , "العمارة إنجليزي"  , "العلوم المالية والمصرفية إنجليزي"  , "العلوم السياسية والإدارة العامة إنجليزي"  , "العلوم الإسلامية"  ,"العلاقات الدولية إنجليزي"  , "العلاج الطبيعي وإعادة التأهيل"  ,"السمعيات"  , "الرياضيات إنجليزي"  , "الخدمات الاجتماعية"  ,"التمريض"  ,"التغذية والحمية"  , "الترجمة الإنجليزية"  , "التجارة الدولية والخدمات اللوجستيات"  ,"التجارة الدولية والأعمال إنجليزي"  ,"التاريخ"  , "الاقتصاد إنجليزي"  , "الإدارة الصحية"  ,"إدارة المعلومات والوثائق", "إدارة الإعمال إنجليزي"],
                certificates: ["شهادة الثانوية العامة", "شهادة اليوس الموحد TR-YÖS", "شهادة السات", "شهادة الثانوية التركية"],
                image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 4,
                span: "حكومية",
                name: "جامعة اينونو",
                state: "ملاطيا",
                url: "",
                languages: ["الإنجليزية", "التركية"],
                majors: [ "هندسة المناظر الطبيعية" , "هندسة المعادن" , "هندسة الكهرباء والالكترون" ,"هندسة الحاسوب" , "هندسة البرمجيات" ,"معلم ما قبل المدرسة" , "معلم للغة تركية" , "معلم للغة إنجليزية" , "معلم صف" , "معلم رياضيات للمرحلة الابتدائية" , "معلم المواد العلمية" , "معلم المواد الاجتماعية" , "مدرس التربية الخاصة" , "فنون الطهي والطبخ" , "علم النفس" , "علم الشيخوخة" , "علم الاجتماع" , "علاج النطق واللغة" , "طب بشري إنجليزي" , "طب بشري" , "طب الأسنان" , "صيدلة" , "الراديو والتلفزيون والسينما" , "حقوق" , "تنمية الطفل" , "الهندسة الميكيانيكية" , "الهندسة المدنية" , "الهندسة الكيميائية" , "الهندسة الغذائية" , "الهندسة الطبية الحيوية" , "المالية" , "اللغة التركية وأدابها" , "اللغة الإنجليزية وأدابها" , "الكيمياء" , "القبالة" , "الفيزياء" , "الفلسفة" , "العلوم السياسية والعلاقات الدولية" , "العلوم السياسية والإدارة العامة" , "العلاقات العامة والترويج" , "العلاج الطبيعي وإعادة التأهيل" , "الصحافة" , "السمعيات" , "الرياضيات" , "الجغرافيا" , "التوجيه والإرشاد النفسي" , "التمريض" , "التغذية والحمية" ,"التجارة الدولية والأعمال إنجليزي" , "التاريخ" , "البيولوجيا الجزئية وعلم الوراثة إنجليزي" , "الاهيات" , "الاقتصاد القياسي" , "الاقتصاد" ,"الإدارة الرياضية" , "علم الأحياء" , "اقتصاديات العمل والعلاقات الصناعية", "إدارة الأعمال"],
                certificates: ["شهادة الثانوية العامة", "شهادة اليوس الموحد TR-YÖS", "شهادة السات", "شهادة الثانوية التركية"],
                image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 5,
                span: "حكومية",
                name: "جامعة إسكي شيهر عثمان غازي",
                state: "إسكي شيهير",
                url: "",
                languages: ["الإنجليزية", "التركية"],
                majors: [   "هندسة المعادت والمواد" , "هندسة المعادن" , "هندسة الكهرباء والالكترون إنجليزي" , "هندسة الطائرات إنجليزي" ,"هندسة الحاسوب" , "نباتات المزرعة" , "نباتات الحدائق" , "معلم ما قبل المدرسة" , "معلم للغة إنجليزية" , "معلم صف" , "معلم رياضيات للمرحلة الابتدائية" , "معلم المواد العلمية" , "معلم المواد الاجتماعية" , "مدرس تربية خاصة" , "فنون الطهي والطبخ" , "علم النفس" , "طب بشري" , "طب الأسنان" , "حماية النبات" , "حقوق" , "تقنيات تربية الحيوانات" , "تصميم الاتصالات المرئية" , "الهندسة الميكانيكية" , "الهندسة المدنية" , "الهندسة الكيميائية" ,"الهندسة الغذائية" , "الهندسة الصناعية" , "المالية" , "اللغة التركية وادابها" , "الكيمياء" , "القبالة" , "الفيزياء" , "العمارة" , "العلوم السياسية والادارة العامة" , "العلاقات الدولية" , "الرياضيات وعلم الحاسوب" , "التوجيه والارشاد النفسي" , "التمريض" , "التكنولوجيا الحيوية والزراعة" , "التصميم الصناعي" , "التاريخ" , "الاهيات" , "الاقتصاد" , "الادب المقارن" , "الادارة الصحية" , "الادارة السياحة" , "الاحياء" ,"الاحصاء", "ادارة الأعمال"],
                certificates: ["شهادة اليوس الموحد TR-YÖS", "شهادة السات"],
                image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 6,
                span: "حكومية",
                name: "جامعة  ارزروم التقنية",
                state: "أرزروم",
                url: "",
                languages: ["الإنجليزية", "التركية"],
                majors: [ "كلية علوم الرياضة" , "كلية الاقتصاد والعلوم الإدارية" , "كلية العلوم" , "كلية الأداب" , "كلية العلوم الصحية", "كلية الهندسة والعمارة"],
                certificates: ["شهادة الثانوية العامة", "شهادة اليوس الموحد TR-YÖS", "شهادة السات"],
                image: "https://images.unsplash.com/photo-1590069261209-f8e9b8642343?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 7,
                span: "حكومية",
                name: "جامعة اغري ابراهيم تشيتشان",
                state: "أغري",
                url: "",
                languages: ["الإنجليزية", "التركية"],
                majors: [  "كليو علوم الرياضة" , "كلية التربية" , "كلية العلوم والأداب" , "كلية الاقتصاد والعلوم الإدارية" , "كلية العلوم الإسلامية" , "كلية الهندسة والعلوم الطبيعية" , "كلية الصيدلة", "كلية الطب البشري"],
                certificates: ["شهادة الثانوية العامة", "شهادة اليوس الموحد TR-YÖS", "شهادة السات", "شهادة الثانوية التركية"],
                image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 8,
                span: "حكومية",
                name: "جامعة العثمانية كوركوت اتا",
                state: "العثمانية",
                url: "",
                languages: ["الإنجليزية", "التركية"],
                majors: [ "كلية العلوم الصحية" , "كلية الهندسة والعلوم التطبيقية" , "كلية التصميم والفنون الجميلة" , "كلية الهندسة المعمارية" , "كلية العلوم التطبيقية" , "كلية العلوم الإنسانية والاجتماعية" , "كلية الشريعة", "كلية الاقتصاد والعلوم الإدارية"],
                certificates: ["شهادة اليوس الموحد TR-YÖS"],
                image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            },
/*             {
                id: 9,
                span: "حكومية",
                name: "جامعة  اناضولو",
                state: "إسكي شيهير",
                url: "",
                languages: ["الروسية" ,"الإنجليزية", "التركية"],
                majors: ["الهندسة", "إدارة الأعمال"],
                certificates: ["شهادة الثانوية العامة", "شهادة اليوس الموحد TR-YÖS", "شهادة الثانوية التركية"],
                image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 10,
                span: "حكومية",
                name: "جامعة ازمير كاتب تشلبي",
                state: "إزمير",
                url: "",
                languages: ["الإنجليزية", "التركية"],
                majors: ["الطب", "الصيدلة"],
                certificates: ["شهادة الثانوية العامة", "شهادة اليوس الموحد TR-YÖS", "شهادة السات", "شهادة الثانوية التركية"],
                image: "https://images.unsplash.com/photo-1590069261209-f8e9b8642343?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            }, 

            {
                id: 11,
                span: "حكومية",
                name: "جامعة اغدير",
                state: "أغدير",
                url: "",
                languages: ["التركية"],
                majors: ["الطب", "الحقوق"],
                certificates: ["شهادة الثانوية العامة", "شهادة اليوس الموحد TR-YÖS", "شهادة السات", "شهادة الثانوية التركية"],
                image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            }, */
            {
                id: 12,
                span: "حكومية",
                name: "جامعة إسطنبول تكنيك",
                state: "إسطنبول",
                url: "",
                languages: ["الإنجليزية", "التركية"],
                majors: [ "كلية تقنيات وتصميم المنسوجات" , "كلية التعدين" , "كلية المعادن" , "كلية الكيمياء" , "كلية إدارة الأعمال" , "كلية الهندسة البحرية وعلوم البحار" , "كلية العلوم والأداب" , "كلية البحرية" , "كلية الطيران والملاحة الفضائية" , "كلية الهندسة", "كلية الحاسوب والمعلوتية"],
                certificates: ["شهادة اليوس الموحد TR-YÖS", "شهادة السات"],
                image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 13,
                span: "حكومية",
                name: "جامعة ارجيس",
                state: "قيصري",
                url: "",
                languages: ["الإنجليزية", "التركية"],
                majors: [ "كلية الزراعة" , "كلية الطب البيطري" ,"كلية السياحة" , "كلية العلوم الرياضية" , "كلية الاتصالات" , "كلية الشريعة" , "كلية الاقتصاد والعلوم الإدارية" , "كلية الحقوق" , "كلية الطيران والملاحة الفضائية" , "كلية الفنون الجميلة" , "كلية العلوم" ,"كلية التربية" , "كلية الأداب" , "كلية العلوم الصحية" , "كلية الهندسة المعمارية" , "كلية الهندسة" , "كلية الصيدلة" , "كلية طب الأسنان" ,"كلية الطب البشري"],
                certificates: ["شهادة الثانوية العامة","شهادة اليوس الموحد TR-YÖS", "شهادة السات", "شهادة الثانوية التركية"],
                image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            },
/*             {
                id: 14,
                name: "حكومية",
                state: "جامعة اماسيا",
                location: "أماسيا",
                url: "",
                languages: ["التركية"],
                majors: ["إدارة الأعمال", "الحقوق"],
                certificates: ["شهادة الثانوية العامة", "شهادة اليوس الموحد TR-YÖS", "شهادة الثانوية التركية"],
                image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            }, */
            {
                id: 15,
                span: "حكومية",
                name: "جامعة إزمير باكرتشاي",
                state: "إزمير",
                url: "",
                languages: ["الإنجليزية", "التركية"],
                majors: [ "كلية العلوم الصحية" , "كلية الهندسة والعمارة" , "كلية العلوم الإنسانية والاجتماعية" , "كلية الاقتصاد والعلوم الإدارية" , "كلية الحقوق" , "كلية الصيدلة", "كلية الطب البشري"],
                certificates: ["شهادة اليوس الموحد TR-YÖS", "شهادة السات"],
                image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            },
/*             {
                id: 16,
                span: "حكومية",
                name: "جامعة إيجه",
                state: "إزمير",
                url: "",
                languages: ["الألمانية" ,"الإنجليزية", "التركية"],
                majors: ["الطب", "الصيدلة"],
                certificates: ["شهادة اليوس الموحد TR-YÖS"],
                image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 17,
                span: "حكومية",
                name: "جامعة إسطنبول جراح باشا",
                state: "إسطنبول",
                url: "",
                languages: ["الفرنسية" ,"الألمانية" ,"التركية", "الإنجليزية"],
                majors: ["الطب", "الصيدلة"],
                certificates: ["شهادة اليوس الموحد TR-YÖS", "شهادة السات"],
                image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 18,
                span: "حكومية",
                name: "جامعة إسبارطة للعلوم التطبيقية",
                state: "إسبارطة",
                url: "",
                languages: ["التركية"],
                majors: ["الطب", "السياحة"],
                certificates: ["شهادة الثانوية العامة", "شهادة اليوس الموحد TR-YÖS", "شهادة السات", "شهادة الثانوية التركية"],
                image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            }, */
            {
                id: 19,
                span: "حكومية",
                name: "جامعة أنقرة حجي بيرام فالي",
                state: "أنقرة",
                url: "",
                languages: ["العربية" ,"الإنجليزية", "التركية"],
                majors: [ "كلية علوم الاتصالات" , "كلية الأداب" , "كلية الفنون والتصميم" , "كلية الاقتصاد والعلوم الإدارية" , "كلية العلوم الإسلامية" , "كلية السياحة", " كلية الحقوق"],
                certificates: ["شهادة الثانوية العامة", "شهادة اليوس الموحد TR-YÖS", "شهادة السات"],
                image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 20,
                span: "حكومية",
                name: "جامعة اون دوكوز مايس",
                state: "سامسون",
                url: "",
                languages: ["الإنجليزية" ,"التركية"],
                majors: [   "كلية الرزاعة" ,   "كلية علوم الرياضة" , "كلية الطب البيطري" , "كلية السياحة" , "كلية الطب البشري" ,  "كلية العلوم الصحية" , "كلية الهندسة" , "كلية الهندسة المعمارية" , "كلية العلوم الإنسانية والاجتماعية" , "كلية الاتصالات" , "كلية الشريعة" , "كلية الفنون الجميلة" , "كلية العلوم" , "كلية التربية" , "كلية الصيدلة" , "كلية طب الأسنان" , "كلية العلوم الإنسانية والاجتماعية" , "كلية الاقتصاد والعلوم الإدارية", "كلية الحقوق"],
                certificates: ["شهادة الثانوية العامة", "شهادة اليوس الموحد TR-YÖS", "شهادة السات", "شهادة الثانوية التركية"],
                image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 21,
                span: "حكومية",
                name: "جامعة افيون كوجاتبه",
                state: "افيون",
                url: "",
                languages: ["الإنجليزية", "التركية"],
                majors: [  "معهد الموسيقى" , "معهد العلوم التطبيقية" , "معهد اللغات الأجنبية" , "كلية السياحة" , "كلية التكنولوجيا"    , "كلية العلوم الرياضية" , "كلية التربية" , "كلية العلوم والأداب" , "كلية الاقتصاد والعلوم الإدارية" , "كلية الشريعة" , "كلية الطب البيطري" , "كلية الحقوق", "كلية الهندسة"],
                certificates: ["شهادة الثانوية العامة", "شهادة اليوس الموحد TR-YÖS", "شهادة السات", "شهادة الثانوية التركية"],
                image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            },
/*             {
                id: 22,
                span: "حكومية",
                name: "جامعة إسكندرون تكنيك",
                state: "هاتاي",
                url: "",
                languages: ["التركية"],
                majors: ["الطب", "الصيدلة"],
                certificates: ["شهادة اليوس الموحد TR-YÖS"],
                image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 23,
                span: "حكومية",
                name: "جامعة أوردو",
                state: "أوردو",
                url: "",
                languages: ["الإنجليزية", "التركية"],
                majors: ["الطب", "الصيدلة"],
                certificates: ["شهادة السات"],
                image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 24,
                span: "حكومية",
                name: "جامعة أوشاك",
                state: "أوشاك",
                url: "",
                languages: [ "الإنجليزية" ,"التركية"],
                majors: ["الهندسة المدنية", "الهندسة الكهربائية"],
                certificates: ["شهادة الثانوية العامة", "شهادة اليوس الموحد TR-YÖS", "شهادة السات", "شهادة الثانوية التركية"],
                image: "https://images.unsplash.com/photo-1590069261209-f8e9b8642343?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            }, */
            {
                id: 25,
                span: "حكومية",
                name: "جامعة الشرق الأوسط التقنية",
                state: "أنقرة",
                url: "",
                languages: ["الإنجليزية" ,"التركية"],
                majors: [ "كلية التربية" , "كلية الاقتصاد والعلوم الإدارية" , "كلية العلوم والأداب", "كلية الهندسة المعمارية"],
                certificates: ["شهادة الثانوية العامة", "شهادة اليوس الموحد TR-YÖS", "شهادة السات"],
                image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            },
/*             {
                id: 26,
                span: "حكومية",
                name: "جامعة أنقرة",
                state: "أنقرة",
                url: "",
                languages: ["الأرمينية" ,"البلغارية" ,"الإسبانية" ,"الإيطالية" ,"الروسية" ,"الفرنسية" ,"الألمانية" ,"الإنجليزية", "التركية"],
                majors: ["الطب", "الصيدلة"],
                certificates: ["شهادة اليوس الموحد TR-YÖS", "شهادة السات"],
                image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 27,
                span: "حكومية",
                name: "جامعة أرزنجان بن علي يلدرم",
                state: "أرزنجان",
                url: "",
                languages: ["الإنجليزية", "التركية"],
                majors: ["علم الاجتماع", "علم النفس"],
                certificates: ["شهادة الثانوية العامة", "شهادة اليوس الموحد TR-YÖS", "شهادة السات", "شهادة الثانوية التركية"],
                image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            }, */
            {
                id: 28,
                span: "حكومية",
                name: "جامعة أكسراي",
                state: "أكسراي",
                url: "",
                languages: ["الإنجليزية", "التركية"],
                majors: [  "كلية العلوم الرياضية" , "كلية السياحة" ,"كلية العلوم الصحية" , "كلية الاتصالات" , "كلية العلوم الإسلامية" , "كلية الاقتصاد والعلوم الإدارية" , "كلية العلوم والأداب" , "كلية التربية" , "كلية الهندسة المعمارية والتصميم" , "كلية الهندسة" , "كلية الطب البيطري" , "كلية طب الأسنان", "كلية الطب البشري"],
                certificates: ["شهادة الثانوية العامة", "شهادة اليوس الموحد TR-YÖS", "شهادة الثانوية التركية"],
                image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            },
/*             {
                id: 29,
                span: "حكومية",
                name: "جامعة أفيون للعلوم الصحية",
                state: "أفيون",
                url: "",
                languages: ["التركية"],
                majors: ["الطب", "الصيدلة"],
                certificates: ["شهادة اليوس الموحد TR-YÖS"],
                image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 30,
                span: "حكومية",
                name: "جامعة أضنة للعلوم والتكنولوجيا",
                state: "أضنة",
                url: "",
                languages: ["الإنجليزية", "التركية"],
                majors: ["الطب", "الصيدلة"],
                certificates: ["شهادة اليوس الموحد TR-YÖS", "شهادة السات"],
                image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            }, */
            {
                id: 31,
                span: "حكومية",
                name: "جامعة أتاتورك",
                state: "أرزروم",
                url: "",
                languages: ["العربية" ,"الإنجليزية", "التركية"],
                majors: [   "كلية مصايد الأسماك" , "كلية علوم الرياضة" , "كلية العلوم الإنسانية والاجتماعية" , "كلية التربية" , "كلية الاتصالات" , "كلية التعليم المفتوح عن بعد" , "كلية الزراعة" , "كلية الطب البيطري" , "كلية العلوم التطبيقية" , "كلية السياحة" , "كلية الاقتصاد والعلوم الإدارية" , "كلية الشريعة" , "كلية العلوم الصحية" , "كلية العمارة والتصميم" , "كلية الهندسة" , "كلية الحقوق" , "كلية الفنون الجميلة" , "كلية العلوم" , "كلية الأداب" , "كلية التمريض" , "كلية الصيدلة" , "كلية طب الأسنان", "كلية الطب البشري"],
                certificates: ["شهادة الثانوية العامة", "شهادة اليوس الموحد TR-YÖS", "شهادة السات", "شهادة الثانوية التركية"],
                image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            },
/*             {
                id: 32,
                span: "حكومية",
                name: "جامعة إزمير الديموقراطية",
                state: "إزمير",
                url: "",
                languages: ["الإنجليزية", "التركية"],
                majors: ["الطب", "الصيدلة"],
                certificates: ["شهادة اليوس الموحد TR-YÖS"],
                image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            }, */
            {
                id: 33,
                span: "حكومية",
                name: "جامعة العلوم الصحية",
                state: "إسطنبول",
                url: "",
                languages: ["التركية"],
                majors: [ "كلية التمريض" , "كلية العلوم الصحية" ,"كلية الصيدلة" , "كلية طب الأسنان", "كلية الطب البشري"],
                certificates: ["شهادة اليوس الموحد TR-YÖS"],
                image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 34,
                span: "حكومية",
                name: "جامعة إسطنبول مدنيات",
                state: "إسطنبول",
                url: "",
                languages: ["الإنجليزية", "التركية"],
                majors: [   "كلية السياحة" , "كلية العلوم السياسية" , "كلية العلوم الإسلامية" , "كلية الحقوق" , "كلية العلوم التربوية" , "كلية الأداب" , "كلية الفنون والتصميم والعمارة" , "كلية العلوم الصحية" , "كلية الهندسة والعلوم التطبيقية" , "كلية طب الأسنان", "كلية الطب البشري"],
                certificates: ["شهادة اليوس الموحد TR-YÖS"],
                image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            },
/*             {
                id: 35,
                span: "حكومية",
                name: "جامعة أرداهان",
                state: "أرداهان",
                url: "",
                languages: ["الإنجليزية", "التركية"],
                majors: ["الطب", "الصيدلة"],
                certificates: ["شهادة اليوس الموحد TR-YÖS", "شهادة السات"],
                image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 36,
                span: "حكومية",
                name: "جامعة أكدينيز",
                state: "أنطاليا",
                url: "",
                languages: ["الإنجليزية", "التركية"],
                majors: ["الطب", "الصيدلة"],
                certificates: ["شهادة اليوس الموحد TR-YÖS"],
                image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            }, */
            {
                id: 37,
                span: "حكومية",
                name: "جامعة الفرات",
                state: "إيلازيغ",
                url: "",
                languages: ["الألمانية" ,"الإنجليزية", "التركية"],
                majors: [  "كلية الطب البيطري" , "كلية التعليم التقني" , "كلية التكنولوجيا" , "كلية علوم الرياضة" , "كلية مصايد الأسماك" , "كلية الاتصالات" , "كلية الشريعة" , "كلية الاقتصاد والعلوم الإدارية" , "كلية العلوم الإنسانية والاجتماعية" , "كلية العلوم" , "كلية التربية" , "كلية العلوم الصحية" , "كلية الهندسة" , "كلية الهندسة المعمارية" , "كلية الصيدلة" , "كلية طب الأسنان", "كلية الطب البشري"],
                certificates: ["شهادة اليوس الموحد TR-YÖS", "شهادة السات"],
                image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 38,
                span: "حكومية",
                name: "جامعة إسكي شيهير التقنية",
                state: "إسكي شيهير",
                url: "",
                languages: ["الإنجليزية", "التركية"],
                majors: [ "كلية علوم الرياضة" , "كلية الهندسة" , "كلية الهندسة المعمارية والتصميم" , "كلية الطيران والملاحة الفضائية", "كلية العلوم"],
                certificates: ["شهادة اليوس الموحد TR-YÖS", "شهادة السات"],
                image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 39,
                span: "حكومية",
                name: "الجامعةالتركية الألمانية",
                state: "إسطنبول",
                url: "",
                languages: ["الألمانية", "التركية"],
                majors: [ "كلية الهندسة" , "كلية الثقافة والعلوم الاجتماعية" , "كلية الاقتصاد والعلوم الإدارية" , "كلية الحقوق", "كلية العلوم"],
                certificates: ["شهادة اليوس الموحد TR-YÖS"],
                image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 40,
                span: "حكومية",
                name: "جامعة أرتفين تشوروه",
                state: "أرتفين",
                url: "",
                languages: ["الإنجليزية", "التركية"],
                majors: [  "كلية الغابات" , "كلية العلوم الصحية" , "كلية الفنون والتصميم" ,"كلية الاقتصاد والعلوم الإدارية" , "كلية التربية" , "كلية العلوم والأداب" , "كلية الشريعة", "كلية الهندسة"],
                certificates: ["شهادة الثانوية العامة", "شهادة اليوس الموحد TR-YÖS", "شهادة السات", "شهادة الثانوية التركية"],
                image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 41,
                span: "حكومية",
                name: "جامعةألانيا علاء الدين كيكوبات",
                state: "أنطاليا",
                url: "",
                languages: ["الإنجليزية", "التركية"],
                majors: [  "كلية الطيران والملاحة الفضائية" ,  "كلية علوم الرياضة" , "كلية السياحة" , "كلية العلوم الصحية" , "كلية الاقتصاد والإدارة" , "كلية التربية" , "كلية العمارة" , "كلية الفنون الجميلة والتصميم" , "كلية الهندسة" , "كلية طب الأسنان", "كليةالطب البشري"],
                certificates: ["شهادة الثانوية العامة", "شهادة اليوس الموحد TR-YÖS", "شهادة الثانوية التركية"],
                image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            },
/*             {
                id: 42,
                span: "حكومية",
                name: "جامعة إزمير للتكنولوجيا",
                state: "إزمير",
                url: "",
                languages: ["الإنجليزية", "التركية"],
                majors: ["علم الاجتماع", "علم النفس"],
                certificates: ["شهادة الثانوية العامة", "شهادة اليوس الموحد TR-YÖS", "شهادة السات", "شهادة الثانوية التركية"],
                image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            }, */
            {
                id: 43,
                span: "حكومية",
                name: "جامعة أديمان",
                state: "أديمان",
                url: "",
                languages: ["الإنجليزية", "التركية"],
                majors: [ "معهد الموسيقى العالي" , "معهد التربية البدنية" , "كلية الزراعة" , "كلية السياحة" , "كلية العلوم الصحية" , "كلية العلوم الإسلامية" , "كلية الاقتصاد والعلوم الإدارية" , "كلية الفنون الجميلة" , "كلية العلوم والأداب" , "كلية التربية" , "كلية العمارة" , "كلية الهندسة" , "كلية الصيدلة" , "كلية طب الأسنان", "كلية الطب البشري"],
                certificates: ["شهادة الثانوية العامة", "شهادة اليوس الموحد TR-YÖS", "شهادة السات", "شهادة الثانوية التركية"],
                image: "https://images.unsplash.com/photo-1590069261209-f8e9b8642343?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 44,
                span: "حكومية",
                name: "جامعة بورصة تكنيك",
                state: "بورصة",
                url: "",
                languages: ["التركية"],
                majors: [ "كلية الهندسة "],
                certificates: ["شهادة الثانوية العامة", "شهادة اليوس الموحد TR-YÖS", "شهادة السات"],
                image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            },
 /*            {
                id: 45,
                span: "حكومية",
                name: "جامعة باموكالة",
                state: "دينيزلي",
                url: "",
                languages: ["الإنجليزية", "التركية"],
                majors: ["الطب", "الصيدلة"],
                certificates: ["شهادة اليوس الموحد TR-YÖS"],
                image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            }, */
            {
                id: 46,
                span: "حكومية",
                name: "جامعة بوغازتشي",
                state: "إسطنبول",
                url: "",
                languages: ["الإنجليزية", "التركية"],
                majors: [  "كلية العلوم والأداب" , "كلية الاتصالات" , "كلية التربية" , "كلية الهندسة" , "كلية الاقتصاد والعلوم الإدارية", "كلية الحقوق"],
                certificates: ["شهادة اليوس الموحد TR-YÖS", "شهادة السات"],
                image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            },
/*             {
                id: 47,
                span: "حكومية",
                name: "جامعة باتمان",
                state: "باتمان",
                url: "",
                languages: ["الإنجليزية" ,"التركية"],
                majors: ["الهندسة", "إدارة الأعمال"],
                certificates: ["شهادة الثانوية العامة", "شهادة اليوس الموحد TR-YÖS", "شهادة السات", "شهادة الثانوية التركية"],
                image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 48,
                span: "حكومية",
                name: "جامعة بينغول",
                state: "بينغول",
                url: "",
                languages: ["التركية"],
                majors: ["الطب", "الصيدلة"],
                certificates: ["شهادة الثانوية العامة", "شهادة اليوس الموحد TR-YÖS", "شهادة السات", "شهادة الثانوية التركية"],
                image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 49,
                span: "حكومية",
                name: "جامعة بولو أبانت عزت بايسال",
                state: "بولو",
                url: "",
                languages: ["العربية" ,"الإنجليزية", "التركية"],
                majors: ["الهندسة", "العمارة"],
                certificates: ["شهادة الثانوية العامة", "شهادة اليوس الموحد TR-YÖS", "شهادة السات", "شهادة الثانوية التركية"],
                image: "https://images.unsplash.com/photo-1590069261209-f8e9b8642343?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            }, */
            {
                id: 50,
                span: "حكومية",
                name: "جامعة بيلجيك",
                state: "بيلجيك",
                url: "",
                languages: ["التركية"],
                majors: [  "كلية العلوم الإنسانية والاجتماعية" , "كلية العلوم" , "كلية العلوم التطبيقية" , "كلية العلوم الإسلامية" , "كلية الفنون الجميلة والتصميم" , "كلية العلوم الطبيعية" , "كلية الزراعة" , "كلية الهندسة" , "كلية الاقتصاد والعلوم الإدارية" , "كلية العلوم الصحية" ,"كلية طب الأسنان", "كلية الطب البشري"],
                certificates: ["شهادة الثانوية العامة", "شهادة اليوس الموحد TR-YÖS"],
                image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            },
/*             {
                id: 51,
                span: "حكومية",
                name: "جامعة بيتليس إيرن",
                state: "بيتليس إيرن",
                url: "",
                languages: ["التركية"],
                majors: ["الطب", "التمريض"],
                certificates: ["شهادة الثانوية العامة", "شهادة اليوس الموحد TR-YÖS", "شهادة السات", "شهادة الثانوية التركية"],
                image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 52,
                span: "حكومية",
                name: "جامعة بورصة أولوداغ",
                state: "بورصة",
                url: "",
                languages: ["الإنجليزية", "التركية"],
                majors: ["الطب", "الصيدلة"],
                certificates: ["شهادة اليوس الموحد TR-YÖS", "شهادة السات"],
                image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            }, */
            {
                id: 53,
                span: "حكومية",
                name: "جامعة باندرما 17 إيلول",
                state: "بالك إسير",
                url: "",
                languages: ["الإنجليزية", "التركية"],
                majors: [  "كلية علوم الرياضة" , "كلية الاتصالات" , "كلية الزراعة" , "كلية العلوم الإسلامية" , "كلية البحرية" , "كلية الاقتصاد والعلوم الإدارية" , "كلية العلوم الصحية" , "كلية العلوم التطبيقية" , "كلية العلوم الإنسانية والاجتماعية" , "كلية الهندسة", "كلية الطب البشري"],
                certificates: ["شهادة الثانوية العامة", "شهادة اليوس الموحد TR-YÖS", "شهادة السات", "شهادة الثانوية التركية"],
                image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 54,
                span: "حكومية",
                name: "جامعة بولنت أجاويد",
                state: "زونجولداك",
                url: "",
                languages: ["الإنجليزية", "التركية"],
                majors: [   "كلية البحرية" ,"كلية السياحة" , "كلية العلوم الإنسانية والاجتماعية" , "كلية الاتصالات" , "كلية الشريعة" , "كلية الاقتصاد والعلوم الإدارية" , "كليةالفنون الجميلة" , "كلية العلوم" , "كلية التربية" , "كلية العلوم الصحية" , "كلية الهندسة المعمارية والتصميم" , "كلية الهندسة" , "كلية الصيدلة" , "كلية طب الأسنان", "كلية الطب البشري"],
                certificates: ["شهادة الثانوية العامة", "شهادة اليوس الموحد TR-YÖS", "شهادة السات", "شهادة الثانوية التركية"],
                image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 55,
                span: "حكومية",
                name: "جامعة بارتن",
                state: "بارتن",
                url: "",
                languages: ["الإنجليزية", "التركية"],
                majors: [ "كلية العلوم الرياضية" , "كلية العلوم الصحية" , "كلية الهندسة والتصميم والعمارة والتصميم" , "كلية العلوم الإسلامية" , "كلية العلوم" , "كلية الغابات" , "كلية العلوم الصحية" , "كلية الأداب" , "كلية التربية", "كلية الاقتصاد والعلوم الإدارية"],
                certificates: ["شهادة الثانوية العامة", "شهادة اليوس الموحد TR-YÖS", "شهادة السات", "شهادة الثانوية التركية"],
                image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            },
/*             {
                id: 56,
                span: "حكومية",
                name: "جامعة بالك إسير",
                state: "بالك إسير",
                url: "",
                languages: ["التركية"],
                majors: ["التربية", "التعليم"],
                certificates: ["شهادة الثانوية العامة", "شهادة اليوس الموحد TR-YÖS", "شهادة السات", "شهادة الثانوية التركية"],
                image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            }, */
            {
                id: 57,
                span: "حكومية",
                name: "جامعة بايبورت",
                state: "بايبورت",
                url: "",
                languages: ["التركية"],
                majors: [  "كلية العلوم التطبيقية" , "كلية علوم الرياضة" , "كلية التربية" , "كلية العلوم الصحية" , "كلية الهندسة" , "كلية الشريعة" , "كلية الاقتصاد والعلوم الإدارية" , "كلية الفنون الجميلة والتصميم", "كلية العلوم الإنسانية والاجتماعية"],
                certificates: ["شهادة الثانوية العامة", "شهادة اليوس الموحد TR-YÖS", "شهادة السات", "شهادة الثانوية التركية"],
                image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 58,
                span: "حكومية",
                name: "جامعة توكات غازي عثمان باشا",
                state: "توكات",
                url: "",
                languages: ["الإنجليزية", "التركية"],
                majors: [ "كلية الزراعة" , "كلية العلوم الرياضية" , "كلية العلوم الصحية" , "كلية العلوم التطبيقية" , "كلية الهندسة والعمارة" , "كلية العلوم الإسلامية" , "كلية الاقتصاد والعلوم الإدارية" , "كلية الحقوق" , "كلية الفنون الجميلة" , "كلية العلوم والأداب" , "كلية العلوم الاجتماعية والإنسانية" , "كلية العلوم الصحية" , "كلية التربية" , "كلية الصيدلة" ,"كلية طب الأسنان", "كلية الطب البشري"],
                certificates: ["شهادة اليوس الموحد TR-YÖS", "شهادة السات"],
                image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 59,
                span: "حكومية",
                name: "جامعة تشاناكري كراتكين",
                state: "تشاناكري",
                url: "",
                languages: ["الإنجليزية" ,"التركية"],
                majors: [ "كلية الفنون والتصميم والعمارة" ,"كلية العلوم الصحية" , "كلية الغابات" , "كلية الهندسة" , "كلية العلوم الإسلامية" , "كلية العلوم الإنسانية والاجتماعية" , "كلية الاقتصاد والعلوم الإدارية" , "كلية الحقوق" , "كلية العلوم", "كلية طب الأسنان"],
                certificates: ["شهادة الثانوية العامة", "شهادة اليوس الموحد TR-YÖS", "شهادة الثانوية التركية"],
                image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            },
           {
                id: 60,
                span: "حكومية",
                name: "جامعة تراكيا",
                state: "أدرنة",
                url: "",
                languages: ["الألمانية" ,"الإنجليزية", "التركية"],
                majors: [ "كلية العلوم التطبيقية" , "كلية العلوم الصحية" , "كلية الهندسة" , "كلية الهندسة المعمارية" , "كلية علوم الرياضة" , "كلية الشريعة" , "كلية الاقتصاد والعلوم الإدارية" , "كلية الفنون الجميلة" , "كلية العلوم" , "كلية التربية" , "كلية الأداب" , "كلية الصيدلة" , "كلية طب الأسنان", "كلية الطب البشري"],
                certificates: ["شهادة الثانوية العامة", "شهادة اليوس الموحد TR-YÖS", "شهادة الثانوية التركية"],
                image: "https://images.unsplash.com/photo-1590069261209-f8e9b8642343?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            },
/*             {
                id: 61,
                span: "حكومية",
                name: "جامعة تيكرداغ نامق كمال",
                state: "تيكرداغ",
                url: "",
                languages: ["التركية"],
                majors: ["التصميم الصناعي", "التصميم الداخلي"],
                certificates: ["شهادة الثانوية العامة", "شهادة اليوس الموحد TR-YÖS", "شهادة الثانوية التركية"],
                image: "https://images.unsplash.com/photo-1590069261209-f8e9b8642343?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 62,
                span: "حكومية",
                name: "جامعة تشاناكالة 18 مارت",
                state: "تشاناكالي",
                url: "",
                languages: ["الإنجليزية", "التركية"],
                majors: ["الطب", "الصيدلة"],
                certificates: ["شهادة اليوس الموحد TR-YÖS"],
                image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 63,
                span: "حكومية",
                name: "جامعة تشوكوروفا",
                state: "أضنة",
                url: "",
                languages: ["الإنجليزية", "التركية"],
                majors: ["الاقتصاد", "المالية"],
                certificates: ["شهادة الثانوية العامة", "شهادة اليوس الموحد TR-YÖS", "شهادة السات"],
                image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 64,
                span: "حكومية",
                name: "جامعة حران",
                state: "شانلي أورفا",
                url: "",
                languages: ["العربية" ,"الإنجليزية", "التركية"],
                majors: ["الطب", "الصيدلة"],
                certificates: ["شهادة اليوس الموحد TR-YÖS"],
                image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 65,
                span: "حكومية",
                name: "جامعة حجي تبه",
                state: "أنقرة",
                url: "",
                languages: ["الألمانية" ,"الإنجليزية", "التركية"],
                majors: ["الطب", "الصيدلة"],
                certificates: ["شهادة اليوس الموحد TR-YÖS", "شهادة السات"],
                image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 66,
                span: "حكومية",
                name: "جامعة دوزجة",
                state: "دوزجة",
                url: "",
                languages: ["الإنجليزية" ,"التركية"],
                majors: ["الطب", "الصيدلة"],
                certificates: ["شهادة الثانوية العامة", "شهادة اليوس الموحد TR-YÖS", "شهادة السات", "شهادة الثانوية التركية"],
                image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 67,
                span: "حكومية",
                name: "جامعة دجلة",
                state: "ديار بكر",
                url: "",
                languages: ["التركية"],
                majors: ["الطب", "الصيدلة"],
                certificates: ["شهادة الثانوية العامة", "شهادة اليوس الموحد TR-YÖS", "شهادة السات", "شهادة الثانوية التركية"],
                image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            }, */
            {
                id: 68,
                span: "حكومية",
                name: "جامعة دوكوز إيلول",
                state: "إزمير",
                url: "",
                languages: ["الروسية" ,"الإنجليزية", "التركية"],
                majors: [   "كلية الطب البيطري" , "كلية العلوم الرياضة" , "كلية السياحة" , "كلية الشريعة" , "كلية الاقتصاد والعلوم الإدارية" , "كلية الحقوق" , "كلية التمريض" , "كلية الفنون الجميلة" , "كلية العلاج الطبيعي والتأهيل" , "كلية العلوم" , "كلية الأداب" , "كلية البحرية" , "كلية التربية" , "كلية الهندسة" , "كلية الهندسة المعمارية" , "كلية طب الأسنان", "كلية الطب البشري"],
                certificates: ["شهادة اليوس الموحد TR-YÖS", "شهادة السات"],
                image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            },
/*             {
                id: 69,
                span: "حكومية",
                name: "جامعة رجب طيب أردوغان",
                state: "ريزة",
                url: "",
                languages: ["الإنجليزية", "التركية"],
                majors: ["السياحة", "إدارة الفنادق"],
                certificates: ["شهادة الثانوية العامة", "شهادة اليوس الموحد TR-YÖS", "شهادة السات", "شهادة الثانوية التركية"],
                image: "https://images.unsplash.com/photo-1590069261209-f8e9b8642343?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            }, */
            {
                id: 70,
                span: "حكومية",
                name: "جامعة سامسون",
                state: "سامسون",
                url: "",
                languages: ["التركية"],
                majors: [  "كلية الطب البشري" , "كلية الهندسة والعلوم التطبيقية" , "كلية الهندسة المعمارية والتصميم" , "كلية العلوم الإنسانية والاجتماعية" , "كلية الاهيات" , "كلية العلوم السياسية", "كلية الطيران والملاحة الفضائية"],
                certificates: ["شهادة اليوس الموحد TR-YÖS"],
                image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            },
/*             {
                id: 71,
                span: "حكومية",
                name: "جامعة سيرت",
                state: "سيرت",
                url: "",
                languages: ["الإنجليزية", "التركية"],
                majors: ["الطب", "الصيدلة"],
                certificates: ["شهادة الثانوية العامة","شهادة اليوس الموحد TR-YÖS", "شهادة السات", "شهادة الثانوية التركية"],
                image: "https://images.unsplash.com/photo-1590069261209-f8e9b8642343?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            }, */
            {
                id: 72,
                span: "حكومية",
                name: "جامعة سكاريا",
                state: "سكاريا",
                url: "",
                languages: ["الإنجليزية", "التركية"],
                majors: [  "كلية التصميم والعمارة" , "كلية الفنون الجميلة" , "كلية العلوم الصحية" ,"كلية الهندسة" , "كلية الشريعة" , "كلية الحقوق" , "كلية طب الأسنان", "كلية الطب البشري"],
                certificates: ["شهادة الثانوية العامة", "شهادة اليوس الموحد TR-YÖS", "شهادة السات", "شهادة الثانوية التركية"],
                image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            },
/*             {
                id: 73,
                span: "حكومية",
                name: "جامعة سليمان ديميرال",
                state: "إسبارطة",
                url: "",
                languages: ["الإنجليزية", "التركية"],
                majors: ["الهندسة", "إدارة الأعمال"],
                certificates: ["شهادة الثانوية العامة", "شهادة اليوس الموحد TR-YÖS", "شهادة السات", "شهادة الثانوية التركية"],
                image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 74,
                span: "حكومية",
                name: "جامعة سيواس للعلوم التطبيقية",
                state: "سيواس",
                url: "",
                languages: ["الإنجليزية", "التركية"],
                majors: ["الهندسة", "العمارة"],
                certificates: ["شهادة الثانوية العامة", "شهادة اليوس الموحد TR-YÖS", "شهادة السات", "شهادة الثانوية التركية"],
                image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            }, */
            {
                id: 75,
                span: "حكومية",
                name: "جامعة سكاريا للعلوم التطبيقية",
                state: "سكاريا",
                url: "",
                languages: ["التركية"],
                majors: [ "كلية الزراعة" , "كلية العلوم التطبيقية" , "كلية السياحة" , "كلية التكنولوجيا" , "كلية علوم الرياضة", "كلية العلوم الصحية"],
                certificates: ["شهادة الثانوية العامة", "شهادة اليوس الموحد TR-YÖS", "شهادة السات", "شهادة الثانوية التركية"],
                image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            },
/*             {
                id: 76,
                span: "حكومية",
                name: "جامعة سيواس جمهوريات",
                state: "سيواس",
                url: "",
                languages: ["الإنجليزية", "التركية"],
                majors: ["الترجمة", "اللغات"],
                certificates: ["شهادة الثانوية العامة", "شهادة السات", "شهادة الثانوية التركية", "شهادة اليوس الموحد TR-YÖS"],
                image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 77,
                span: "حكومية",
                name: "جامعة سلجوق",
                state: "قونيا",
                url: "",
                languages: ["الروسية" ,"الألمانية" ,"العربية" ,"الإنجليزية" ,"التركية"],
                majors: ["الفنون", "الموسيقى"],
                certificates: ["شهادة الثانوية العامة", "شهادة اليوس الموحد TR-YÖS", "شهادة السات", "شهادة الثانوية التركية"],
                image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 78,
                span: "حكومية",
                name: "جامعة سينوب",
                state: "سينوب",
                url: "",
                languages: ["الإنجليزية" ,"التركية"],
                majors: ["الهندسة الميكانيكية", "الهندسة الكهربائية"],
                certificates: ["شهادة الثانوية العامة", "شهادة اليوس الموحد TR-YÖS", "شهادة السات", "شهادة الثانوية التركية"],
                image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 79,
                span: "حكومية",
                name: "جامعة شرناق",
                state: "شرناق",
                url: "",
                languages: ["التركية"],
                majors: ["إدارة الأعمال", "الحقوق"],
                certificates: ["شهادة الثانوية العامة", "شهادة اليوس الموحد TR-YÖS", "شهادة السات", "شهادة الثانوية التركية"],
                image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 80,
                span: "حكومية",
                name: "جامعة طرابزون",
                state: "طرابزون",
                url: "",
                languages: ["التركية"],
                majors: ["الهندسة", "إدارة الأعمال"],
                certificates: ["شهادة الثانوية العامة", "شهادة اليوس الموحد TR-YÖS", "شهادة السات", "شهادة الثانوية التركية"],
                image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 81,
                span: "حكومية",
                name: "جامعة طرسوس",
                state: "مرسين",
                url: "",
                languages: ["التركية"],
                majors: ["الطب", "الصيدلة"],
                certificates: ["شهادة اليوس الموحد TR-YÖS", "شهادة السات"],
                image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            }, */
            {
                id: 82,
                span: "حكومية",
                name: "جامعة عبد الله غول",
                state: "قيصري",
                url: "",
                languages: ["الإنجليزية", "التركية"],
                majors: [ "كلية العلوم الإدارية" , "كلية الحياة والعلوم الطبيعية" , "كلية العلوم الإنسانية والاجتماعية" , "كلية التربية" , "كلية العمارة", "كلية الهندسة"],
                certificates: ["شهادة اليوس الموحد TR-YÖS", "شهادة السات"],
                image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 83,
                span: "حكومية",
                naem: "جامعة عدنان مندريس",
                state: "أيدن",
                url: "",
                languages: ["الفرنسية" ,"الألمانية" ,"الإنجليزية", "التركية"],
                majors: [   "كلية الاتصالات" ,"كلية علوم الرياضة" , "كلية التربية" , "كلية الزراعة" , "كلية الطب البيطري" , "كلية السياحة" , "كلية الاقتصاد والعلوم الإدارية" , "كلية الشريعة" , "كلية العلوم الصحية" , "كلية الهندسة" , "كلية العلوم والأداب" , "كلية التمريض" , "كلية طب الأسنان", "كلية الطب البشري"],
                certificates: ["شهادة اليوس الموحد TR-YÖS"],
                image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            },
/*             {
                id: 84,
                span: "حكومية",
                name: "جامعة غازي عنتاب للعلوم الإسلامية والتكنولوجيا",
                state: "غازي عنتاب",
                url: "",
                languages: ["العربية", "التركية"],
                majors: ["الهندسة", "العمارة"],
                certificates: ["شهادة الثانوية العامة", "شهادة السات", "شهادة الثانوية التركية" , "شهادة اليوس الموحد TR-YÖS"],
                image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            }, */
            {
                id: 85,
                span: "حكومية",
                name: "جامعة غبزة تكنيك",
                state: "كوجالي",
                url: "",
                languages: ["الإنجليزية", "التركية"],
                majors: [ "كلية الطيران والملاحة الفضائية" , "كلية إدارة الأعمال" , "كلية الهندسة المعمارية" , "كلية العلوم الأساسية", "كلية الهندسة"],
                certificates: ["شهادة اليوس الموحد TR-YÖS", "شهادة السات"],
                image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            },
/*             {
                id: 86,
                span: "حكومية",
                name: "جامعة غازي عنتاب",
                state: "غازي عنتاب",
                url: "",
                languages: ["العربية" ,"الإنجليزية", "التركية"],
                majors: ["الطب", "الصيدلة"],
                certificates: ["شهادة اليوس الموحد TR-YÖS"],
                image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            }, */
            {
                id: 87,
                span: "حكومية",
                name: "جامعة غلطة سراي",
                state: "إسطنبول",
                url: "",
                languages: ["الفرنسية", "التركية"],
                majors: [ "كلية العلوم والأداب" , "كلية الاتصالات" , "كلية الحقوق" , "كلية الاقتصاد والعلوم الإدارية" , "كلية التكنولوجيا", "كلية الهندسة"],
                certificates: ["شهادة اليوس الموحد TR-YÖS"],
                image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            },
/*             {
                id: 88,
                span: "حكومية",
                name: "جامعة غوموش هانة",
                state: "غوموش هانة",
                url: "",
                languages: ["الإنجليزية", "التركية"],
                majors: ["العلوم البيئية", "الإدارة البيئية"],
                certificates: ["شهادة الثانوية العامة", "شهادة اليوس الموحد TR-YÖS", "شهادة الثانوية التركية"],
                image: "https://images.unsplash.com/photo-1590069261209-f8e9b8642343?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 89,
                span: "حكومية",
                name: "جامعة غازي",
                state: "أنقرة",
                url: "",
                languages: ["الإنجليزية", "التركية"],
                majors: ["التمريض", "العلاج الطبيعي"],
                certificates: ["شهادة الثانوية العامة", "شهادة اليوس الموحد TR-YÖS"],
                image: "https://images.unsplash.com/photo-1590069261209-f8e9b8642343?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            }, */
            {
                id: 90,
                span: "حكومية",
                name: "جامعة غيرسون",
                state: "غيرسون",
                url: "",
                languages: ["الإنجليزية", "التركية"],
                majors: [  "كلية السياحة" , "كلية الاتصالات" , "كلية علوم الرياضة" , "كلية الشريعة" , "كلية الاقتصاد والعلوم الإدارية" , "كلية الفنون الجميلة" , "كلية العلوم والأداب" ,  "كلية التربية" , "كلية البحرية" , "كلية العلوم الصحية" , "كلية الهندسة" , "كلية طب الأسنان", "كلية الطب البشري"],
                certificates: ["شهادة الثانوية العامة", "شهادة اليوس الموحد TR-YÖS", "شهادة السات", "شهادة الثانوية التركية"],
                image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            },
/*             {
                id: 91,
                span: "حكومية",
                name: "جامعة فان يوزنجويل",
                state: "فان",
                url: "",
                languages: ["الإنجليزية", "التركية"],
                majors: ["الطب", "الصيدلة"],
                certificates: ["شهادة اليوس الموحد TR-YÖS"],
                image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 92,
                span: "حكومية",
                name: "جامعة قونيا التنقية",
                state: "قونيا",
                url: "",
                languages: ["التركية"],
                majors: ["الطب", "الصيدلة"],
                certificates: ["شهادة اليوس الموحد TR-YÖS", "شهادة السات"],
                image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 93,
                span: "حكومية",
                name: "جامعة قيصري",
                state: "قيصري",
                url: "",
                languages: ["التركية"],
                majors: ["الهندسة", "إدارة الأعمال"],
                certificates: ["شهادة الثانوية العامة", "شهادة اليوس الموحد TR-YÖS", "شهادة السات", "شهادة الثانوية التركية"],
                image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            }, */
            {
                id: 94,
                span: "حكومية",
                name: "جامعة كارابوك",
                state: "كارابوك",
                url: "",
                languages: ["الإنجليزية", "التركية"],
                majors: [ "كلية الاتصالات" , "كلية التكنولوجيا" , "كلية التعليم المهني" , "كلية الغابات" , "كلية الهندسة" , "كلية العلوم الإسلامية" , "كلية الاقتصاد والعلوم الإدارية" , "كلية العلوم" , "كلية الأداب" , "كلية الهندسة المعمارية" , "كلية طب الاسنان", "كلية الطب البشري"],
                certificates: ["شهادة الثانوية العامة", "شهادة الثانوية التركية"],
                image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 95,
                span: "حكومية",
                name: "جامعة كاستامونو",
                state: "كاستامونو",
                url: "",
                languages: ["الإنجليزية" ,"التركية"],
                majors: [ "كلية العلاقات الدولية" , "كلية التربية " , "كلية علم النفس" , "كلية الاقتصاد والعلوم الإدارية" , "كلية الهندسة" , "كلية التمريض" , "كلية الطب البيطري", "كلية الطب البشري"],
                certificates: ["شهادة الثانوية العامة", "شهادة اليوس الموحد TR-YÖS", "شهادة السات", "شهادة الثانوية التركية"],
                image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            },
/*             {
                id: 96,
                span: "حكومية",
                name: "جامعة كوتاهيا دملوبينار",
                state: "كوتاهيا",
                url: "",
                languages: ["الإنجليزية", "التركية"],
                majors: ["الطب", "الصيدلة"],
                certificates: ["شهادة الثانوية العامة", "شهادة اليوس الموحد TR-YÖS", "شهادة السات", "شهادة الثانوية التركية"],
                image: "https://images.unsplash.com/photo-1590069261209-f8e9b8642343?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 97,
                span: "حكومية",
                name: "جامعة كارادينيز",
                state: "طرابزون",
                url: "",
                languages: ["الروسية" ,"التركية" ,"الإنجليزية"],
                majors: ["الطب", "الحقوق"],
                certificates: ["شهادة الثانوية العامة", "شهادة اليوس الموحد TR-YÖS", "شهادة السات", "شهادة الثانوية التركية"],
                image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 98,
                span: "حكومية",
                name: "جامعة كوجالي",
                state: "كوجالي",
                url: "",
                languages: ["الإنجليزية", "التركية"],
                majors: ["الهندسة", "العمارة"],
                certificates: ["شهادة الثانوية العامة", "شهادة اليوس الموحد TR-YÖS", "شهادة السات", "شهادة الثانوية التركية"],
                image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            }, */
            {
                id: 99,
                span: "حكومية",
                name: "جامعة كهرمان مرعش استقلال",
                state: "كهرمان مرعش",
                url: "",
                languages: ["العربية", "التركية"],
                majors: [ "كلية السياحة" , "كلية العلوم الصحية" , "كلية الهندسة والعمارة والتصميم" , "كلية العلوم الإسلامية" , "كلية العلوم الإنسانية والاجتماعية" , "كلية الاتصالات", "كلية الهندسة"],
                certificates: ["شهادة الثانوية العامة", "شهادة اليوس الموحد TR-YÖS", "شهادة السات", "شهادة الثانوية التركية"],
                image: "https://images.unsplash.com/photo-1590069261209-f8e9b8642343?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            },
/*             {
                id: 100,
                span: "حكومية",
                name: "جامعة كركلارلة",
                state: "كركلارلة",
                url: "",
                languages: ["الإنجليزية" ,"التركية"],
                majors: ["إدارة الأعمال", "الحقوق"],
                certificates: ["شهادة الثانوية العامة","شهادة اليوس الموحد TR-YÖS", "شهادة الثانوية التركية"],
                image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            }, */
            {
                id: 101,
                span: "حكومية",
                name: "جامعة كارامان أوغلو محمد بيه",
                state: "كهرمان مرعش",
                url: "",
                languages: ["الإنجليزية" ,"التركية"],
                majors: [   "كلية علوم الرياضة" , "كلية الفنون والتصميم والعمارة" , "كلية العلوم الصحية" , "كلية العلوم" , "كلية العلوم الإسلامية" , "كلية الاقتصاد والعلوم الإدارية" , "كلية التربية" , "كلية الأداب" , "كلية الهندسة" , "كلية طب الأسنان", "كلية الطب البشري"],
                certificates: ["شهادة الثانوية العامة", "شهادة اليوس الموحد TR-YÖS", "شهادة الثانوية التركية"],
                image: "https://images.unsplash.com/photo-1590069261209-f8e9b8642343?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 102,
                span: "حكومية",
                name: "جامعة كهرمان مرعش",
                state: "كهرمان مرعش",
                url: "",
                languages: ["الإنجليزية", "الألمانية"],
                majors: [  "كلية الزراعة" , "كلية علوم الرياضة" , "كلية العلوم الصحية" , "كلية الغابات" , "كلية الهندسة والعمارة" , "كلية الشريعة" , "كلية الاقتصاد والعلوم الإدارية" , "كلية الفنون الجميلة والتصميم" , "كلية العلوم الإنسانية والاجتماعية" , "كلية العلوم" , "كلية التربية" , "كلية طب الأسنان", "كلية الطب البشري"],
                certificates: ["شهادة الثانوية العامة", "شهادة اليوس الموحد TR-YÖS", "شهادة الثانوية التركية"],
                image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            },
/*             {
                id: 103,
                span: "حكومية",
                name: "جامعة كركالة",
                state: "كركالة",
                url: "",
                languages: ["التركية"],
                majors: ["الطب", "الصيدلة"],
                certificates: ["شهادة اليوس الموحد TR-YÖS"],
                image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 104,
                span: "حكومية",
                name: "جامعة كوتاهيا للعلوم الصحية",
                state: "كوتاهيا",
                url: "",
                languages: ["التركية"],
                majors: ["التربية", "التعليم"],
                certificates: ["شهادة الثانوية العامة", "شهادة اليوس الموحد TR-YÖS", "شهادة السات", "شهادة الثانوية التركية"],
                image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            }, */
            {
                id: 105,
                span: "حكومية",
                name: "جامعة كلس 7 ارالك",
                state: "كلس",
                url: "",
                languages: ["التركية"],
                majors: [   "كلية الاتصالات" ,"كلية العلوم" , "كلية الفنون الجميلة والتصميم" , "كلية العلوم التطبيقية" , "كلية العلوم الصحية" , "كلية الزراعة" , "كلية الشريعة" , "كلية التربية" , "كلية الاقتصاد والإدارة" , "كلية العلوم الإنسانية والاجتماعية", "كلية الهندسة والعمارة"],
                certificates: ["شهادة الثانوية العامة", "شهادة اليوس الموحد TR-YÖS", "شهادة السات", "شهادة الثانوية التركية"],
                image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 106,
                span: "حكومية",
                name: "جامعة كافكاس",
                state: "قارص",
                url: "",
                languages: ["الإنجليزية", "التركية"],
                majors: [ "كلية علوم الرياضة" , "كلية السياحة" , "كلية الشريعة" , "كلية الاقتصاد والعلوم الإدارية" , "كلية الفنون الجميلة" , "كلية العلوم والأداب" ,  "كلية التربية" , "كلية العلوم الصحية" , "كلية الهندسة والعمارة" , "كلية الطب البيطري" , "كلية طب الأسنان", "كلية الطب البشري"],
                certificates: ["شهادة الثانوية العامة", "شهادة السات", "شهادة الثانوية التركية", "شهادة اليوس الموحد TR-YÖS"],
                image: "https://images.unsplash.com/photo-1590069261209-f8e9b8642343?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 107,
                span: "حكومية",
                name: "جامعة كيرشيهر اهي افران",
                state: "كير شيهر",
                url: "",
                languages: ["التركية"],
                majors: [  "كلية الزراعة" , "كلية العلوم الصحية" , "كلية الأداب والعلوم" , "كلية التربية" , "كلية الاقتصاد والعلوم الإدارية" , "كلية الفنون الجميلة" , "كلية العمارة والهندسة" ,"كلية العلوم الإسلامية", "كلية الطب البشري"],
                certificates: ["شهادة الثانوية العامة", "شهادة اليوس الموحد TR-YÖS", "شهادة الثانوية التركية"],
                image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            },
/*             {
                id: 108,
                span: "حكومية",
                name: "جامعة مرمرة",
                state: "إسطنبول",
                url: "",
                languages: ["الألمانية" ,"الفرنسية" ,"العربية" ,"الإنجليزية", "التركية"],
                majors: ["الطب", "الصيدلة"],
                certificates: ["شهادة اليوس الموحد TR-YÖS"],
                image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 109,
                span: "حكومية",
                name: "جامعة مرسين",
                state: "مرسين",
                url: "",
                languages: ["الإنجليزية", "التركية"],
                majors: ["إدارة الأعمال", "الحقوق"],
                certificates: ["شهادة الثانوية العامة", "شهادة اليوس الموحد TR-YÖS", "شهادة الثانوية التركية"],
                image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 110,
                span: "حكومية",
                name: "جامعة محمد عاكف ارسوي",
                state: "بوردور",
                url: "",
                languages: ["الإنجليزية", "التركية"],
                majors: ["الهندسة", "العمارة"],
                certificates: ["شهادة الثانوية العامة", "شهادة اليوس الموحد TR-YÖS", "شهادة السات", "شهادة الثانوية التركية"],
                image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 111,
                span: "حكومية",
                name: "جامعة ماردين أرتوكلو",
                state: "ماردين",
                url: "",
                languages: ["العربية" ,"الإنجليزية", "التركية"],
                majors: ["الهندسة", "العمارة"],
                certificates: ["شهادة الثانوية العامة", "شهادة اليوس الموحد TR-YÖS", "شهادة الثانوية التركية"],
                image: "https://images.unsplash.com/photo-1590069261209-f8e9b8642343?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 112,
                span: "حكومية",
                name: "جامعة منذر",
                state: "تونجلي",
                url: "",
                languages: ["الإنجليزية", "التركية"],
                majors: ["الفنون الجميلة", "التصميم الجرافيكي"],
                certificates: ["شهادة الثانوية العامة", "شهادة اليوس الموحد TR-YÖS", "شهادة السات", "شهادة الثانوية التركية"],
                image: "https://images.unsplash.com/photo-1590069261209-f8e9b8642343?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            }, */
            {
                id: 113,
                span: "حكومية",
                name: "جامعة مانيسا جلال باير",
                state: "مانيسا",
                url: "",
                languages: ["الإنجليزية", "التركية"],
                majors: [ "كلية العلوم الرياضية" , "كلية التعليم" , "كلية التكنولوجيا" , "كلية الأداب والعلوم" , "كلية العلوم التطبيقية" , "كلية الاتصالات" , "كلية العلوم الشرعية" , "كلية الاقتصاد والإدارة" , "كلية الفنون الجميلة" , "كلية التصميم والعمارة" , "كلية الهندسة" , "كلية الصيدلة" , "كلة طب الأسنان", "كلية الطب البشري"],
                certificates: ["شهادة اليوس الموحد TR-YÖS"],
                image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            },
/*             {
                id: 114,
                span: "حكومية",
                name: "جامعة معمار سنان",
                state: "إسطنبول",
                url: "",
                languages: ["التركية"],
                majors: ["الطب", "الصيدلة"],
                certificates: ["شهادة اليوس الموحد TR-YÖS", "شهادة السات"],
                image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 115,
                span: "حكومية",
                name: "جامعة موغلا صدقي كوتشمان",
                state: "موغلا",
                url: "",
                languages: ["الألمانية" ,"الإنجليزية" ,"التركية"],
                majors: ["الاقتصاد", "المحاسبة"],
                certificates: ["شهادة الثانوية العامة", "شهادة اليوس الموحد TR-YÖS", "شهادة السات"],
                image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 116,
                span: "حكومية",
                name: "جامعة ملاطيا تورغوت أوزال",
                state: "ملاطيا",
                url: "",
                languages: ["التركية"],
                majors: ["علم الاجتماع", "علم النفس"],
                certificates: ["شهادة الثانوية العامة", "شهادة اليوس الموحد TR-YÖS", "شهادة السات", "شهادة الثانوية التركية"],
                image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            }, */
            {
                id: 117,
                span: "حكومية",
                name: "جامعة موش ألب أرسلان",
                state: "موش",
                url: "",
                languages: ["الإنجليزية" ,"التركية"],
                majors: [  "كلية العلوم التطبيقية" , "كلية علوم الرياضة" , "كلية العلوم الصحية" , "كلية الهندسة والعمارة" , "كلية العلوم الإسلامية" , "كلية الاتصالات" , "كلية الاقتصاد والعلوم الإدارية" , "كلية الأداب والفنون" , "كلية طب الأسنان", "كلية التربية"],
                certificates: ["شهادة الثانوية العامة", "شهادة اليوس الموحد TR-YÖS", "شهادة السات", "شهادة الثانوية التركية"],
                image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 118,
                span: "حكومية",
                name: "جامعة نيغدة عمر خالص ديمير",
                state: "نيغدة",
                url: "",
                languages: ["الإنجليزية" ,"التركية"],
                majors: [  "كلية التمريض" , "كلية التكنولوجيا الحيوية" , "كلية العلوم الإسلامية" , "كلية الهندسة" , "كلية التربية" , "كلية الأداب" , "كليةالاقتصاد والعلوم الإدارية" , "كلية طب الأسنان", "كلية الطب البشري"],
                certificates: ["شهادة الثانوية العامة", "شهادة اليوس الموحد TR-YÖS", "شهادة السات", "شهادة الثانوية التركية"],
                image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 119,
                span: "حكومية",
                name: "جامعة نجم الدين أربكان",
                state: "قونيا",
                url: "",
                languages: ["العربية" ,"الإنجليزية" ,"التركية"],
                majors: [ "كلية الفنون الجميلة والعمارة" , "كلية الزراعة" , "كلية الحقوق" , "كلية السياحة" , "كلية الطب البشري" , "كلية العلوم الاجتماعية والإنسانية" , "كلية الطب البيطري" , "كلية العلوم التطبيقية" , "كلية الاقتصاد والعلوم الإدارية" , "كلية التربية" , "كلية الهندسة" , "كلية العلوم الصحية" , "كلية الطيران والملاحة الفضائية" , "كلية التمريض", "كلية طب الأسنان"],
                certificates: ["شهادة الثانوية العامة", "شهادة اليوس الموحد TR-YÖS", "شهادة الثانوية التركية"],
                image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            },
/*             {
                id: 120,
                span: "حكومية",
                name: "جامعة نيفشيهير حجي بيكتاش فالي",
                state: "نيفشيهير",
                url: "",
                languages: ["الإنجليزية", "التركية"],
                majors: ["التصميم الجرافيكي", "التصميم الصناعي"],
                certificates: ["شهادة الثانوية العامة", "شهادة اليوس الموحد TR-YÖS", "شهادة السات", "شهادة الثانوية التركية"],
                image: "https://images.unsplash.com/photo-1590069261209-f8e9b8642343?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 121,
                span: "حكومية",
                name: "جامعة هاتاي مصطفى كمال",
                state: "هاتاي",
                url: "",
                languages: ["الإنجليزية", "التركية"],
                majors: ["الطب", "الصيدلة"],
                certificates: ["شهادة اليوس الموحد TR-YÖS"],
                image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            }, */
            {
                id: 122,
                span: "حكومية",
                name: "جامعة هاكاري",
                state: ["هاكاري"],
                url: "",
                languages: "التركية",
                majors: [ "كلية علوم الرياضة" , "كلية الفنون الجميلة" , "كلية الاقتصاد والعلوم الإدارية" , "كلية التربية" , "كلية الشريعة" , "كلية العلوم الصحية", "كلية الهندسة"],
                certificates: ["شهادة الثانوية العامة", "شهادة اليوس الموحد TR-YÖS", "شهادة السات", "شهادة الثانوية التركية"],
                image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            },
/*             {
                id: 123,
                span: "حكومية",
                name: "جامعة هيتت",
                state: "تشوروم",
                url: "",
                languages: ["الإنجليزية", "التركية"],
                majors: ["إدارة الأعمال", "الحقوق"],
                certificates: ["شهادة الثانوية العامة", "شهادة اليوس الموحد TR-YÖS", "شهادة السات", "شهادة الثانوية التركية"],
                image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 124,
                span: "حكومية",
                name: "جامعة يالوفا",
                state: "يالوفا",
                url: "",
                languages: ["العربية" ,"الإنجليزية" ,"التركية"],
                majors: ["الطب", "الصيدلة"],
                certificates: ["شهادة الثانوية العامة", "شهادة اليوس الموحد TR-YÖS", "شهادة السات", "شهادة الثانوية التركية"],
                image: "https://images.unsplash.com/photo-1590069261209-f8e9b8642343?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            },
            {
              id: 125,
              span: "حكومية",
               name: "جامعة يلدز تكنيك",
               state: "إسطنبول",
               languages: ["الإنجليزية", "التركية"],
               majors: ["الطب", "الصيدلة"],
              certificates: ["شهادة اليوس الموحد TR-YÖS", "شهادة السات"],
              image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            }, */

            {
                id: 126,
                span: "حكومية",
                name: "جامعة يوزغات",
                state: "يوزغات",
                url: "/HTML/Abdullahgül.html",
                languages: ["الإنجليزية", "التركية"],
                majors: [ "كلية الاتصالات" , "كلية الشريعة" , "كلية الاقتصاد والعلوم الإدارية" , "كلية الحقوق" , "كلية العلوم والأداب" , "كلية التربية", "كلية طب الأسنان"],
                certificates: ["شهادة الثانوية العامة", "شهادة اليوس الموحد TR-YÖS", "شهادة السات", "شهادة الثانوية التركية"],
                image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            },
        ];

        // العناصر الأساسية
        const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
        const applyBtn = document.querySelector('.apply-btn');
        const clearBtn = document.querySelector('.clear-btn');
        const resultsMessage = document.getElementById('results-message');
        const universitiesContainer = document.getElementById('universities-container');
        const paginationContainer = document.getElementById('pagination');
        
        // عدادات الخيارات
        const certificateCount = document.getElementById('certificate-count');
        const majorCount = document.getElementById('major-count');
        const stateCount = document.getElementById('state-count');
        const languageCount = document.getElementById('language-count');
        
        // العناصر المختارة
        const selectedCertificates = [];
        const selectedMajors = [];
        const selectedStates = [];
        const selectedLanguages = [];
        
        // تهيئة القوائم المنسدلة
        dropdownToggles.forEach(toggle => {
            toggle.addEventListener('click', function() {
                const dropdownMenu = this.nextElementSibling;
                const icon = this.querySelector('i');
                
                dropdownMenu.classList.toggle('show');
                icon.classList.toggle('fa-chevron-down');
                icon.classList.toggle('fa-chevron-up');
            });
        });
        
        // إغلاق القوائم المنسدلة عند النقر خارجها
        document.addEventListener('click', function(e) {
            dropdownToggles.forEach(toggle => {
                const dropdownMenu = toggle.nextElementSibling;
                if (!toggle.contains(e.target) && !dropdownMenu.contains(e.target)) {
                    dropdownMenu.classList.remove('show');
                    const icon = toggle.querySelector('i');
                    icon.classList.add('fa-chevron-down');
                    icon.classList.remove('fa-chevron-up');
                }
            });
        });
        
        // إضافة الشارات المختارة
        function updateSelectedBadges() {
            // تحديث شارات الشهادات
            const certificateBadges = document.getElementById('certificate-badges');
            certificateBadges.innerHTML = '';
            selectedCertificates.forEach(cert => {
                const badge = document.createElement('div');
                badge.className = 'badge';
                badge.innerHTML = `${cert} <i class="fas fa-times" data-value="${cert}" data-type="certificate"></i>`;
                certificateBadges.appendChild(badge);
            });
            
            // تحديث شارات التخصصات
            const majorBadges = document.getElementById('major-badges');
            majorBadges.innerHTML = '';
            selectedMajors.forEach(major => {
                const badge = document.createElement('div');
                badge.className = 'badge';
                badge.innerHTML = `${major} <i class="fas fa-times" data-value="${major}" data-type="major"></i>`;
                majorBadges.appendChild(badge);
            });
            
            // تحديث شارات الولايات
            const stateBadges = document.getElementById('state-badges');
            stateBadges.innerHTML = '';
            selectedStates.forEach(state => {
                const badge = document.createElement('div');
                badge.className = 'badge';
                badge.innerHTML = `${state} <i class="fas fa-times" data-value="${state}" data-type="state"></i>`;
                stateBadges.appendChild(badge);
            });
            
            // تحديث شارات اللغات
            const languageBadges = document.getElementById('language-badges');
            languageBadges.innerHTML = '';
            selectedLanguages.forEach(lang => {
                const badge = document.createElement('div');
                badge.className = 'badge';
                badge.innerHTML = `${lang} <i class="fas fa-times" data-value="${lang}" data-type="language"></i>`;
                languageBadges.appendChild(badge);
            });
            
            // تحديث العدادات
            certificateCount.textContent = selectedCertificates.length;
            majorCount.textContent = selectedMajors.length;
            stateCount.textContent = selectedStates.length;
            languageCount.textContent = selectedLanguages.length;
            
            // إضافة تأثير للعدادات عند التحديث
            animateCounter(certificateCount);
            animateCounter(majorCount);
            animateCounter(stateCount);
            animateCounter(languageCount);
            
            // إضافة معالجات الأحداث لأيقونات الإزالة
            document.querySelectorAll('.badge i').forEach(icon => {
                icon.addEventListener('click', function() {
                    const value = this.getAttribute('data-value');
                    const type = this.getAttribute('data-type');
                    
                    switch(type) {
                        case 'certificate':
                            removeFromArray(selectedCertificates, value);
                            document.querySelector(`input[value="${value}"]`).checked = false;
                            break;
                        case 'major':
                            removeFromArray(selectedMajors, value);
                            document.querySelector(`input[value="${value}"]`).checked = false;
                            break;
                        case 'state':
                            removeFromArray(selectedStates, value);
                            document.querySelector(`input[value="${value}"]`).checked = false;
                            break;
                        case 'language':
                            removeFromArray(selectedLanguages, value);
                            document.querySelector(`input[value="${value}"]`).checked = false;
                            break;
                    }
                    
                    updateSelectedBadges();
                });
            });
        }
        
        // إزالة عنصر من مصفوفة
        function removeFromArray(array, value) {
            const index = array.indexOf(value);
            if (index !== -1) {
                array.splice(index, 1);
            }
        }
        
        // تأثير العدادات
        function animateCounter(element) {
            element.style.animation = 'none';
            setTimeout(() => {
                element.style.animation = 'countUp 0.5s ease-out';
            }, 10);
        }
        
        // تحديث الرسالة بناءً على النتائج
        function updateResultsMessage(count) {
            if (selectedCertificates.length === 0 && 
                selectedMajors.length === 0 && 
                selectedStates.length === 0 && 
                selectedLanguages.length === 0) {
                resultsMessage.innerHTML = 'من فضلك اختر خيارات من الأعلى';
            } else if (count === 0) {
                resultsMessage.innerHTML = 'لم يتم العثور على نتائج مطابقة';
            } else {
                resultsMessage.innerHTML = `تم العثور على <span class="highlight">${count}</span> نتيجة مطابقة`;
            }
        }
        
        // عرض كروت الجامعات
        function displayUniversities(universitiesToShow, page = 1) {
            universitiesContainer.innerHTML = '';
            
            const itemsPerPage = 20; // 20 كرت لكل صفحة
            const startIndex = (page - 1) * itemsPerPage;
            const endIndex = Math.min(startIndex + itemsPerPage, universitiesToShow.length);
            const paginatedItems = universitiesToShow.slice(startIndex, endIndex);
            
            paginatedItems.forEach(university => {
                const card = document.createElement('div');
                card.className = 'university-card';
                card.innerHTML = `
                    <div class="card-image">
                        <img src="${university.image}" alt="${university.name}">
                        <div class="card-overlay">
                            <h2 class="university-name"></h2>
                        </div>
                    </div>
                    <div class="card-info">
                        <div class="info-row">
                            <i class="fa-solid fa-building-columns"></i>
                            <h3>${university.name}</h3>
                        </div>
                        <hr class="info-divider">
                        <div class="info-row">
                            <i class="fa-solid fa-location-dot"></i>
                            <h3>${university.languages}</h3>
                        </div>
                        <hr class="info-divider">
                        <div class="info-row">
                            <i class="fa-solid fa-arrow-up-right-from-square"></i>
                            <a href="${university.url}" target="_blank" class="more-link">انقر للمزيد...</a>
                        </div>
                    </div>
                `;
                universitiesContainer.appendChild(card);
            });
            
            updateResultsMessage(universitiesToShow.length);
            setupPagination(universitiesToShow, page);
        }
        
        // إعداد التصفح بين الصفحات
        function setupPagination(universitiesToShow, currentPage) {
            paginationContainer.innerHTML = '';
            
            const itemsPerPage = 20;
            const pageCount = Math.ceil(universitiesToShow.length / itemsPerPage);
            
            if (pageCount <= 1) return;
            
            // نحدد عدد الصفحات التي نريد عرضها (لكن نعرض كل الصفحات)
            for (let i = 1; i <= pageCount; i++) {
                const pageCircle = document.createElement('div');
                pageCircle.className = 'page-circle';
                if (i === currentPage) {
                    pageCircle.classList.add('active');
                }
                pageCircle.textContent = i;
                pageCircle.addEventListener('click', () => {
                    displayUniversities(universitiesToShow, i);
                });
                paginationContainer.appendChild(pageCircle);
            }
        }
        
        // فلترة الجامعات
        function filterUniversities() {
            const filtered = universities.filter(university => {
                // فلترة الشهادات
                if (selectedCertificates.length > 0) {
                    const hasCertificate = selectedCertificates.some(cert => 
                        university.certificates.includes(cert));
                    if (!hasCertificate) return false;
                }
                
                // فلترة التخصصات
                if (selectedMajors.length > 0) {
                    const hasMajor = selectedMajors.some(major => 
                        university.majors.includes(major));
                    if (!hasMajor) return false;
                }
                
                // فلترة الولايات
                if (selectedStates.length > 0) {
                    const hasState = selectedStates.includes(university.state);
                    if (!hasState) return false;
                }
                
                // فلترة اللغات
                if (selectedLanguages.length > 0) {
                    const hasLanguage = selectedLanguages.some(lang => 
                        university.languages.includes(lang));
                    if (!hasLanguage) return false;
                }
                
                return true;
            });
            
            displayUniversities(filtered);
        }
        
        // مسح الفلترة
        function clearFilters() {
            // إلغاء تحديد جميع الخيارات
            document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
                checkbox.checked = false;
            });
            
            // مسح المصفوفات
            selectedCertificates.length = 0;
            selectedMajors.length = 0;
            selectedStates.length = 0;
            selectedLanguages.length = 0;
            
            // تحديث الشارات والعدادات
            updateSelectedBadges();
            
            // عرض جميع الجامعات
            displayUniversities(universities);
        }
        
        // تهيئة الأحداث
        function init() {
            // إضافة معالجات الأحداث لخانات الاختيار
            document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
                checkbox.addEventListener('change', function() {
                    const value = this.value;
                    const category = this.closest('.filter-group').querySelector('.filter-label').textContent.trim();
                    
                    if (this.checked) {
                        switch(category) {
                            case 'نوع الشهادة':
                                if (!selectedCertificates.includes(value)) {
                                    selectedCertificates.push(value);
                                }
                                break;
                            case 'الكليات المتاحة':
                                if (!selectedMajors.includes(value)) {
                                    selectedMajors.push(value);
                                }
                                break;
                            case 'الولاية':
                                if (!selectedStates.includes(value)) {
                                    selectedStates.push(value);
                                }
                                break;
                            case 'لغة التدريس':
                                if (!selectedLanguages.includes(value)) {
                                    selectedLanguages.push(value);
                                }
                                break;
                        }
                    } else {
                        switch(category) {
                            case 'نوع الشهادة':
                                removeFromArray(selectedCertificates, value);
                                break;
                            case 'الكليات المتاحة':
                                removeFromArray(selectedMajors, value);
                                break;
                            case 'الولاية':
                                removeFromArray(selectedStates, value);
                                break;
                            case 'لغة التدريس':
                                removeFromArray(selectedLanguages, value);
                                break;
                        }
                    }
                    
                    updateSelectedBadges();
                });
            });
            
            // تطبيق الفلترة
            applyBtn.addEventListener('click', filterUniversities);
            
            // مسح الفلترة
            clearBtn.addEventListener('click', clearFilters);
            
            // عرض جميع الجامعات عند التحميل
            displayUniversities(universities);
        }
        
        // بدء التطبيق عند تحميل الصفحة
        document.addEventListener('DOMContentLoaded', init);


// Start Interactive Statistics Section 

        document.addEventListener('DOMContentLoaded', function() {
            // Meter elements
            const counterItems = document.querySelectorAll('.counter-item');
            const counters = document.querySelectorAll('.counter-number');
            const section = document.querySelector('.counter-section');
            
            // Options Intersection Observer
            const options = {
                root: null,
                rootMargin: '0px',
                threshold: 0.4
            };
            
            // Create a monitor
            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        // Start counting when the section appears
                        startCounters();
                        // Stop monitoring after the count begins.
                        observer.unobserve(section);
                    }
                });
            }, options);
            
            // Start monitoring the section
            observer.observe(section);
            
            // Counter start function
            function startCounters() {
                counters.forEach(counter => {
                    const target = +counter.getAttribute('data-target');
                    const duration = 2000; // Counting time in milliseconds
                    const increment = target / (duration / 16); // Calculate the increase per frame
                    
                    let current = 0;
                    
                    const updateCounter = () => {
                        current += increment;
                        
                        if (current < target) {
                            counter.textContent = Math.ceil(current);
                            requestAnimationFrame(updateCounter);
                        } else {
                            counter.textContent = target;
                        }
                    };
                    
                    updateCounter();
                });
            }
        });

// End Interactive Statistics Section 

// Start Customer Reviews
        function createCircles(containerId, colors) {
            const container = document.getElementById(containerId);
            if (!container) return;
            
            for (let i = 0; i < 2; i++) {
                const circle = document.createElement('div');
                circle.classList.add('circle', 'large');
                circle.style.backgroundColor = colors[0];
                circle.style.left = `${Math.random() * 80}%`;
                circle.style.animationDelay = `${Math.random() * 5}s`;
                container.appendChild(circle);
            }
            
            for (let i = 0; i < 3; i++) {
                const circle = document.createElement('div');
                circle.classList.add('circle', 'medium');
                circle.style.backgroundColor = colors[1];
                circle.style.left = `${Math.random() * 80}%`;
                circle.style.animationDelay = `${Math.random() * 5}s`;
                container.appendChild(circle);
            }
            
            for (let i = 0; i < 6; i++) {
                const circle = document.createElement('div');
                circle.classList.add('circle', 'small');
                circle.style.backgroundColor = colors[2];
                circle.style.left = `${Math.random() * 80}%`;
                circle.style.animationDelay = `${Math.random() * 5}s`;
                container.appendChild(circle);
            }
        }
        
        function createBackgroundEffects() {
            const container = document.getElementById('background-effects');
            if (!container) return;
            
            const colors = ['#FF5733', '#33FF57', '#3357FF', '#F3FF33', '#FF33A1'];
            
            for (let i = 0; i < 12; i++) {
                const circle = document.createElement('div');
                circle.classList.add('bg-circle');
                
                const size = Math.random() * 300 + 100;
                circle.style.width = `${size}px`;
                circle.style.height = `${size}px`;
                
                circle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                
                circle.style.top = `${Math.random() * 100}%`;
                circle.style.left = `${Math.random() * 100}%`;
                
                circle.style.animationDelay = `${Math.random() * 20}s`;
                
                container.appendChild(circle);
            }
        }
        
        const cardsColors = [
            ['#FF5733', '#C70039', '#900C3F'], // ألوان البطاقة الأولى - الصفحة 1
            ['#33FF57', '#339CFF', '#3349FF'], // ألوان البطاقة الثانية - الصفحة 1
            ['#5733FF', '#FF33A1', '#FFC733'], // ألوان البطاقة الثالثة - الصفحة 1
            ['#4CAF50', '#8BC34A', '#CDDC39'], // ألوان البطاقة الأولى - الصفحة 2
            ['#2196F3', '#03A9F4', '#00BCD4'], // ألوان البطاقة الثانية - الصفحة 2
            ['#9C27B0', '#673AB7', '#3F51B5']  // ألوان البطاقة الثالثة - الصفحة 2
        ];
        
        window.onload = function() {
            createCircles('circles1', cardsColors[0]);
            createCircles('circles2', cardsColors[1]);
            createCircles('circles3', cardsColors[2]);
            
            createCircles('circles4', cardsColors[3]);
            createCircles('circles5', cardsColors[4]);
            createCircles('circles6', cardsColors[5]);
            
            createBackgroundEffects();
        };
        
        document.getElementById('page1-btn').addEventListener('click', function() {
            showPage('page1');
        });
        
        document.getElementById('page2-btn').addEventListener('click', function() {
            showPage('page2');
        });
        
        function showPage(pageId) {
            document.querySelectorAll('.page').forEach(page => {
                page.classList.remove('active');
            });
            

            document.getElementById(pageId).classList.add('active');
            
            document.querySelectorAll('.customer-page-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            
            document.getElementById(`${pageId}-btn`).classList.add('active');
            const activePage = document.getElementById(pageId);
            activePage.style.animation = 'none';
            setTimeout(() => {
                activePage.style.animation = 'fadeIn 0.8s ease';
            }, 10);
        }

// End Customer Reviews

// Start Customer Comments Setion 

        var swiper = new Swiper(".mySwiper", {
          loop: true,
          grabCursor: true,
          spaceBetween: 30,
          centeredSlides: true,
          autoplay: {
            delay: 5000,
            disableOnInteraction: false,
          },
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
            dynamicBullets: true,
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          breakpoints: {
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 1,
            },
            1024: {
              slidesPerView: 1,
            },
          },
        });

// End Customer Comments Setion 

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