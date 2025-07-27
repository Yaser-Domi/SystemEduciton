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

// Start University Cards Section
        const cardsData = [
            {
                title: "جامعة بوغازتشي",
                image: "/IMAGE/boğaziçi/جامعة بوغازتشي.png",
                url: "/HTML/boğaziçi.html" 
            },
            {
                title: "جامعة الفرات",
                image: "/IMAGE/Fırat/جامعة الفرات.png",
                url: "/HTML/Fırat.html" 
            },
            {
                title: "جامعة نيغدة عمر خالص",
                image: "/IMAGE/Niğde/جامعة نيغدة عمر خالص.png",
                url: "/HTML/niğde.html" 
            },
            {
                title: "جامعة بورصة التقنية",
                image: "/IMAGE/BursaTeknik/جامعة بورصة التقنية.png",
                url: "/HTML/Bursateknik.html" 
            },
            {
                title: "جامعة إسطنبول",
                image: "/IMAGE/istanbul/جامعة إسطنبول.png",
                url: "/HTML/Istanbul.html" 
            },
            {
                title: "جامعة باندرما 17 إيلول",
                image: "/IMAGE/Bandırma/جامعة باندرما.png",
                url: "/HTML/Bandırma.html" 
            },
            {
                title: "جامعة يوزغات بوزوك",
                image: "/IMAGE/Yozgat/جامعة يوزغات بوزوك.png",
                url: "/HTML/yozgat.html" 
            },
            {
                title: "جامعة أديمان",
                image: "/IMAGE/Adıyaman/جامعة أديمان.png",
                url: "/HTML/Adıyaman.html" 
            },
            {
                title: "جامعة تراكيا",
                image: "/IMAGE/Tarakya/جامعة تراكيا.png",
                url: "/HTML/Tarakya.html" 
            },
            {
                title: "جامعة سامسون",
                image: "/IMAGE/Samsun/جامعة سامسون.png",
                url: "/HTML/Samsun.html" 
            },
            {
                title: "الجامعة التركية الألمانية",
                image: "/IMAGE/TürkAlman/الجامعة التركية الألمانية.png",
                url: "/HTML/TürkAlman.html" 
            },
            {
                title: "جامعة أغري ",
                image: "/IMAGE/Ağrıibrahim/جامعة أغري إبراهيم تشيتشان.png",
                url: "/HTML/Ağrıibrahim.html" 
            },
            {
                title: "جامعة كارامان أوغلو",
                image: "/IMAGE/Karaman/جامعة كارامان.png",
                url: "/HTML/Karaman.html" 
            },
            {
                title: "جامعة كهرمان مرعش استقلال",
                image: "/IMAGE/Maraaşİstiklal/جامعة كهرمان مرعش استقلال.png",
                url: "/HTML/Kahramanmaraş.html" 
            },
            {
                title: "جامعة كهرمان مرعش",
                image: "/IMAGE/Süçüİmam/جامعة كهرمان مرعش سوتشو امام.png",
                url: "/HTML/Kahramansüçü.html" 
            },
            {
                title: "جامعة ارزروم التقنية",
                image: "/IMAGE/Erzurum/جامعة أرزروم التقنية.png",
                url: "/HTML/Erzurum.html" 
            },
            {
                title: "جامعة عبد الله غول",
                image: "/IMAGE/AbdullahGül/جامعة عبد الله غول.png",
                url: "/HTML/Abdullahgül.html" 
            },
            {
                title: "جامعة كوتاهيا دملوبينار",
                image: "/IMAGE/Kütahya/جامعة كوتاهيا دملوبينار.png",
                url: "/HTML/Kütahyadumlupınar.html" 
            },
            {
                title: "جامعة غبزة التقنية",
                image: "/IMAGE/Gebze/جامعة غبزة التنقية.png",
                url: "/HTML/GebzeTeknik.html" 
            },
            {
                title: "جامعة إسطنبول التقنية",
                image: "/IMAGE/İstanbulTeknik/جامعة إسطنبول التقنية.png",
                url: "/HTML/İstanbulTeknik.html" 
            },
            {
                title: "جامعة تشانكيري كراتكين",
                image: "/IMAGE/Çankırı/جامعة تشانكري.png",
                url: "/HTML/Çankırı.html" 
            },
            {
                title: "جامعة غلطة سراي",
                image: "/IMAGE/GalataSaray/جامعة غلطة سراي.png",
                url: "/HTML/Galatasaray.html" 
            },
            {
                title: "جامعة بايبورت",
                image: "/IMAGE/Bayburt/جامعة بايبورت.png",
                url: "/HTML/Bayburt.html"
            },
            {
                title: "جامعة كارابوك",
                image: "/IMAGE/Karabük/جامعة كارابوك.png",
                url: "/HTML/Karabük.html"
            },
            {
                title: "جامعة أفيون كوجاتيبه",
                image: "/IMAGE/Kocatepe/afyon üniversitesi .png",
                url: "/HTML/Afyonkocatepe.html"
            }
        ];

        // DOM elements
        const cardsContainer = document.getElementById('cardsContainer');
        const reloadButton = document.getElementById('reloadButton');
        const updateMessage = document.getElementById('updateMessage');

        // Function to select 5 random cards
        function getRandomCards() {
            const shuffled = [...cardsData].sort(() => 0.5 - Math.random());
            return shuffled.slice(0, 5);
        }

        // Function to display cards
        function displayCards(cards) {
            cardsContainer.innerHTML = '';
            
            cards.forEach(card => {
                const cardElement = document.createElement('div');
                cardElement.className = 'card';
                
                cardElement.innerHTML = `
                    <div class="card-image">
                        <img src="${card.image}" alt="${card.title}">
                    </div>
                    <div class="card-content">
                        <h3 class="card-title">${card.title}</h3>
                        <a href="${card.url}" target="_blank" class="card-btn">
                           انقر للمزيد
                        </a>
                    </div>
                `;
                
                cardsContainer.appendChild(cardElement);
            });
        }

        // Function to update cards and display message
        function updateCards() {
            const randomCards = getRandomCards();
            displayCards(randomCards);
            
            // Show update message
            updateMessage.classList.add('show-message');
            setTimeout(() => {
                updateMessage.classList.remove('show-message');
            }, 2000);
        }

        // When loading the page
        document.addEventListener('DOMContentLoaded', () => {
            updateCards();
        });

        // When you click the update button
        reloadButton.addEventListener('click', updateCards);
// End University Cards Section


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
