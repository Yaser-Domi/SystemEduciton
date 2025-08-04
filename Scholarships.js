// Start Top-bar
        document.addEventListener('DOMContentLoaded', function() {
            const hamburger = document.getElementById('hamburger');
            const mobileMenu = document.getElementById('mobileMenu');
            const dropdownToggles = document.querySelectorAll('.nav-dropdown-toggle');
            
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
                title: "المنح",
                url: "Scholarships.html",
                content: "منح عالمية وداخل تركيا ممولة بشكل جزئي او كلي"
            },
            {
                title: "الفرص التدريبية",
                url: "Training.html",
                content: "أهم الفرص التدريبية وفرص التطوع في قطاعات مختلفة ومناطق مختلفة حول العالم"
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
                title: "جامعة أديمان",
                url: "Adıyaman.html",
                content: "مؤسسة حكومية حديثة تجمع بين جودة التعليم وتعدد التخصصات والبنية البحثية المتقدمة في بيئة جامعية مستقرة بجنوب شرق الأناضول"
            },
            {
                title: "جامعة أفيون كوجاتيبه ",
                url: "Afyonkocatepe.html",
                content: "جامعة افيون كوجاتيبه هي جامعة حكومية تركية تُركز بقوة على البحث العلمي التطبيقي، وتضم أكثر من 30 مركزًا بحثيًا. في 26 أبريل 2024، حازت على الاعتماد المؤسسي الكامل من هيئة جودة التعليم العالي"
            },
            {
                title: "جامعة أغري إبراهيم تشيتشان",
                url: "Ağrıibrahim.html",
                content: "جامعة أغري إبراهيم تشيتشان مركز أكاديمي صاعد للتنمية الإقليمية والابتكار العلمي في شرق الأناضول, منارة للمعرفة في بيئة طبيعية فريدة وفرص للتخصصات البينية والتطبيقية"
            },
            {
                title: "جامعة أكسراي",
                url: "Aksaray.html",
                content: "جامعة أكسراي هي جامعة حكومية تركية وتتميز بحرم جامعي واسع مليء بالمساحات الخضراء وتصميم معماري حديث"
            },
            {
                title: "جامعة أنقرة يلدرم بيازيد",
                url: "Ankarabeyazit.html",
                content: "جامعة حكومية حديثة بتصنيف متقدم، برامج باللغة الإنجليزية، بيئة بحثية متميزة، وموقع استراتيجي في العاصمة أنقرة"
            },
            {
                title: "جامعة أنقرة للعلوم الاجتماعية",
                url: "Ankarasosyal.html",
                content: "أول جامعة حكومية متخصصة بالعلوم الاجتماعية في تركيا منذ تأسيسها عام 2013 في منطقة أولوس الأثرية بوسط أنقرة، ما يعزز تميزها وتفردها"
            },
            {
                title: "جامعة باندرما 17 إيلول",
                url: "Bandırma.html",
                content: "نموذج أكاديمي متطور يجمع بين التخصصات الحديثة والبحث العلمي المتكامل في قلب بحر مرمرة"
            },
            {
                title: "جامعة بايبورت",
                url: "Bayburt.html",
                content: "جامعة بايبورت بوابة التعليم المتميز والتنمية الإقليمية في شرق الأناضول حيث يلتقي التعليم الحديث بالاحتياجات المجتمعية"
            },
            {
                title: "جامعة بوغازتشي",
                url: "boğaziçi.html",
                content: "جامعة بوغازتشي فضاء الإبداع والتميز العالمي مستلهم من مهمتها في تعزيز الثقافة العلمية والبحث والابتكار في مستوى عالمي"
            },
            {
                title: "جامعة بورصة التقنية",
                url: "Bursateknik.html",
                content: "جامعة بورصة التقنية  بيئة أكاديمية متقدمة تميّز في التخصصات الهندسية وشراكات صناعية فاعلة في عاصمة الإنتاج التركي"
            },
            {
                title: "جامعة تشانكري كراتكين",
                url: "Çankırı.html",
                content: "جامعة تشانكري كراتكين بوابة التميز الأكاديمي والبحث العلمي في قلب الأناضول, بيئة تعليمية داعمة لجيل المستقبل في تركيا"
            },
            {
                title: "السيرة الذاتية",
                url: "CV.html",
                content: "مقال شمال حول إعداد السيرة الذاتية"
            },
            {
                title: "منحة وقف الديانة التركية",
                url: "Endowment Grant.html",
                content: "تمويل كامل للدراسة والإقامة في تخصصات العلوم الإسلامية والعربية للطلاب الدوليين "
            },
            {
                title: "جامعة ارزروم التقنية",
                url: "Erzurum.html",
                content: "جامعة حكومية حديثة بتخصصات هندسية متقدمة، برامج باللغة الإنجليزية، وبيئة دراسية ملهمة في قلب الأناضول الشرقي"
            },
            {
                title: "جامعة الفرات",
                url: "Fırat.html",
                content: "جامعة الفرات مركز علمي رائد في شرقي الأناضول يجمع بين الحداثة والأصالة وجهتك المثلى للتخصصات الطبية والهندسية في قلب ولاية إلازيغ التركية"
            },
            {
                title: "جامعة غلطة سراي",
                url: "Galatasaray.html",
                content: "جامعة غلطة سراي جسر الثقافة والتميز الأكاديمي الفريد في تركيا و صرح التعليم الفرنسي-التركي الرائد بقلب إسطنبول"
            },
            {
                title: "جامعة غبزة التقنية",
                url: "GebzeTeknik.html",
                content: "جامعة غبزة التقنية ريادة الابتكار والتميز الهندسي في تركيا صرح العلوم والتكنولوجيا لبناء مستقبل واعد."
            },
            {
                title: "جامعة إينونو",
                url: "İnönü.html",
                content: "وجهتك المثالية لدراسة الطب والهندسة ضمن بيئة بحثية متطورة، ومرافق حديثة في قلب مدينة ملاطية"
            },
            {
                title: "جامعة إسطنبول",
                url: "Istanbul.html",
                content: "جامعة إسطنبول أعرق الجامعات التركية بتصنيف عالمي مرموق، 17 كلية، برامج دولية، وموقع تاريخي في قلب إسطنبول</p>"
            },
            {
                title: "جامعة إسطنبول التقنية",
                url: "İstanbulTeknik.html",
                content: "جامعة إسطنبول التقنية صرح الهندسة والابتكار الرائد في تركيا بوابة التميز الأكاديمي والريادة التكنولوجية حيث تلتقي العراقة بالمستقبل الصناعي."
            },
            {
                title: "جامعة كهرمان مرعش إستقلال",
                url: "Kahramanmaraş.html",
                content: "بيئة أكاديمية حديثة وفرص تعليمية واعدة في قلب الأناضول, تخصصات حديثة ودعم طلابي وبنية التحتية المتطورة"
            },
            {
                title: "جامعة كهرمان مرعش سوتشو إمام",
                url: "Kahramansüçü.html",
                content: "نموذج أكاديمي متطور يجمع بين التخصصات الحديثة والبحث العلمي المتكامل في قلب بحر مرمرة"
            },
            {
                title: "جامعة كارابوك",
                url: "Karabük.html",
                content: "تعد جامعة كارابوك من الجامعات الحكومية الحديثة في تركيا، وتتميز بتخصصاتها المتنوعة، وبنيتها التحتية المتطورة، وحرمها الجامعي المتكامل. توفر تعليمًا عالي الجودة بلغات متعددة، وتشارك بفعالية في برامج التبادل الدولي، مع تصنيفات عالمية متقدمة."
            },
            {
                title: "جامعة كارامان",
                url: "Karaman.html",
                content: "جامعية كارامان أوغلو محمد بي  مركز إقليمي للتميز الأكاديمي والبحث التطبيقي و جودة التعليم والابتكار في قلب تركيا التاريخي."
            },
            {
                title: "جامعة كركلارلة",
                url: "Kırklareli.html",
                content: "استكشف معنا واحدة من أقوى الجامعات التركية التي تتميز بتنوع برامجها الأكاديمية وبرامجها التي تدعم اللغة العربية "
            },
            {
                title: "جامعة كوتاهيا دملوبينار",
                url: "Kütahyadumlupınar.html",
                content: "منارةً أكاديمية شامخة في قلب الأناضول، ووجهةً مثالية للطلاب الطموحين الباحثين عن تعليمٍ عالٍ متميز في تركيا. "
            },
            {
                title: "خطاب النية",
                url: "Letter of intent.html",
                content: "يُعد خطاب النية وثيقة مهمة تعبّر عن أهداف المتقدّم ودوافعه للحصول على المنحة الدراسية. يتيح هذا الخطاب فرصة لإبراز مدى ملاءمة المتقدّم للبرنامج وكيف ستساعده المنحة في تحقيق طموحاته المستقبلية، مما يعزز فرص قبوله لدى لجان التقييم."
            },
            {
                title: "جامعة نيغدة عمر خالص ديمير",
                url: "niğde.html",
                content: "جامعة نيغدة عمر خالص ديمير بيئة أكاديمية حديثة وبحث علمي متطور وفرص متميزة في قلب الأناضول"
            },
            {
                title: "التعليم المفتوح",
                url: "Open education.html",
                content: "التعليم المفتوح هو نظام دراسي مرن يُمكّن الطلاب من متابعة دراستهم عن بُعد دون الحاجة للحضور الجامعي المنتظم، ويعتمد على المواد الإلكترونية والتعلّم الذاتي."
            },
            {
                title: "جامعة إسكي شهير عثمان غازي",
                url: "Osmangazi.html",
                content: " تكنولوجيا متقدمة وبرامج متعددة في قلب مدينة جامعية نابضة تشتهر بتخصصاتها في الهندسة، الطب، والتكنولوجيا، وتضم تجهيزات حديثة ومراكز بحث متقدمة"
            },
            {
                title: "جامعة سامسون",
                url: "Samsun.html",
                content: "جامعة سامسون مركز الابتكار الأكاديمي على شواطئ البحر الأسود بوابة لآفاق مهنية واعدة ومحفز الابتكار والبحث, إعداد قيادات المستقبل لمواجهة تحديات عالم متغير."
            },      
            {
                title: "امتحان السات",
                url: "Sat.html",
                content: "امتحان السات SAT: بوابتك الرقمية الأكاديمية نحو أفضل الجامعات – دليل شامل للاستعداد والنجاح"
            },
            {
                title: "جامعة سيفاس للعلوم والتكنولوجيا",
                url: "Sivasbilim.html",
                content: "تقع في وسط تركيا في ولاية سيواس، وتركّز على التعليم في مجالات العلوم والتكنولوجيا مع توجّهات استراتيجية لخدمة الصناعة وخاصة قطاع الدفاع والزراعة وتعتبر جامعة حديثة مجهزة باحدث التقنيات"
            },
            {
                title: "جامعة تراكيا",
                url: "Tarakya.html",
                content: "صرح العلم العريق في أدرنة جسر يربط آسيا بأوروبا وقلب البحث والتطوير في البلقان منارة أكاديمية رائدة في مجالات الطب والهندسة تزدهر على مفترق الحضارات والثقافات."
            },
            {
                title: "الجامعة التركية الألمانية",
                url: "TürkAlman.html",
                content: "نموذج أكاديمي متطور يجمع بين التخصصات الحديثة والبحث العلمي المتكامل في قلب بحر مرمرة"
            },
            {
                title: "منحة الحكومة التركية",
                url: "TurkishScholarship.html",
                content: "نامج شامل للتميز الأكاديمي والتنوع الثقافي والدعم الشامل للطلبة الدوليين"
            },
            {
                title: "امتحان اليوس الموحد TR-YÖS",
                url: "YÖS.html",
                content: "امتحان اليوس الموحد (TR-YÖS) في تركيا: أداة قياس مركزية لفرص التعليم العالي للطلاب الدوليين حيث يسعى إلى توحيد معايير قبول الطلاب الأجانب في الجامعات التركية"
            },
            {
                title: "جامعة يوزغات بوزوك",
                url: "yozgat.html",
                content: "جامعة حكومية رائدة تجمع بين التعليم العالي النوعي والبحث العلمي التطبيقي وخدمة المجتمع في قلب الأناضول"
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
                name: "منحة الحكومة التركية",
                state: "تركيا",
                url: "TurkishScholarship.html",
                languages: ["الإنجليزية" ,"التركية"],
                majors: ["ممولة بالكامل"],
                certificates: ["بكالوريوس"],
                image: "IMAGE/منحة الحكومة التركية.png"
            },

            {
                id: 2,
                name: "منحة وقف الديانة التركية",
                state: "تركيا",
                url: "Endowment Grant.html",
                languages: ["الإنجليزية", "التركية"],
                majors: ["ممولة جزئيا"],
                certificates: ["تركيا"],
                image: "IMAGE/منحة وقف الديانة التركية.png"
            },
            // {
            //     id: 3,
            //     name: "جامعة أتيليم",
            //     state: "أنقرة",
            //     url: "",
            //     languages: ["الإنجليزية" ,"التركية"],
            //     majors: ["إدارة الأعمال", "الحقوق"],
            //     certificates: ["شهادة الثانوية العامة", "شهادة اليوس الموحد TR-YÖS", "شهادة السات", "شهادة الثانوية التركية"],
            //     image: "/img/جامعة أتيليم.webp"
            // },
            // {
            //     id: 4,
            //     name: "جامعة أوستيم التقنية",
            //     state: "أنقرة",
            //     url: "",
            //     languages: ["الإنجليزية", "التركية"],
            //     majors: ["الهندسة", "إدارة الأعمال"],
            //     certificates: ["شهادة الثانوية العامة", "شهادة اليوس الموحد TR-YÖS", "شهادة السات", "شهادة الثانوية التركية"],
            //     image: "/img/جامعة أوستيم التقنية.webp"
            // },
            // {
            //     id: 5,
            //     name: "جامعة المؤسسة التقنية للطيران",
            //     state: "أنقرة",
            //     url: "",
            //     languages: ["الإنجليزية", "التركية"],
            //     majors: ["الطب", "الصيدلة"],
            //     certificates: ["شهادة اليوس الموحد TR-YÖS", "شهادة السات"],
            //     image: "/img/جامعة المؤسسة التركية للطيران.jpg"
            // },
            // {
            //     id: 6,
            //     name: "جامعة البيروني",
            //     state: "دبلوم",
            //     url: "",
            //     languages: ["التركية", "الإنجليزية"],
            //     majors: ["الهندسة", "العمارة"],
            //     certificates: ["شهادة الثانوية العامة", "شهادة اليوس الموحد TR-YÖS", "شهادة السات"],
            //     image: "/IMAGE/BİRUNİ.png",
            // },
            // {
            //     id: 7,
            //     name: "جامعة أسينورت",
            //     state: "إسطنبول",
            //     url: "",
            //     languages: ["التركية"],
            //     majors: ["الطب", "الصيدلة"],
            //     certificates: ["شهادة الثانوية العامة", "شهادة اليوس الموحد TR-YÖS", "شهادة السات", "شهادة الثانوية التركية"],
            //     image: "/IMAGE/ESENYURT.png",
            // },
            // {
            //     id: 8,
            //     name: "جامعة السلطان محمد الفاتح",
            //     state: "إسطنبول",
            //     url: "",
            //     languages: ["الإنجليزية", "التركية"],
            //     majors: ["الطب", "الصيدلة"],
            //     certificates: ["شهادة اليوس الموحد TR-YÖS"],
            //     image: "/img/جامعة السلطان محمد الفاتح.jpg"
            // },
            // {
            //     id: 9,
            //     name: "جامعة  الخليج",
            //     state: "إسطنبول",
            //     url: "",
            //     languages: ["الإنجليزية", "التركية"],
            //     majors: ["الهندسة", "إدارة الأعمال"],
            //     certificates: ["شهادة الثانوية العامة", "شهادة اليوس الموحد TR-YÖS", "شهادة الثانوية التركية"],
            //     image: "/img/جامعة الخليج.webp"
            // },
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
                    </div>
                    <div class="card-info">
                        <div class="info-row">
                           <i class="fa-solid fa-building-columns"></i>
                            <h3>${university.name}</h3>
                        </div>
                        <hr class="info-divider">
                        <div class="info-row">
                            <i class="fas fa-map-marker-alt"></i>
                            <h3>${university.state}</h3>
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
case 'الدولة': // القائمة الأولى (الدولة)
if (!selectedStates.includes(value)) {
selectedStates.push(value);
}
break;
case 'نوع التمويل': // القائمة الثانية
if (!selectedMajors.includes(value)) {
selectedMajors.push(value);
}
break;
case 'المرحلة الدراسية': // القائمة الثالثة (المرحلة الدراسية)
if (!selectedCertificates.includes(value)) {
selectedCertificates.push(value);
}
break;
case 'لغة التدريس': // القائمة الرابعة
if (!selectedLanguages.includes(value)) {
selectedLanguages.push(value);
}
break;
}
} else {
switch(category) {
case 'الدولة': // القائمة الأولى (الدولة)
removeFromArray(selectedStates, value);
break;
case 'نوع التمويل': // القائمة الثانية
removeFromArray(selectedMajors, value);
break;
case 'المرحلة الدراسية': // القائمة الثالثة (المرحلة الدراسية)
removeFromArray(selectedCertificates, value);
break;
case 'لغة التدريس': // القائمة الرابعة
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