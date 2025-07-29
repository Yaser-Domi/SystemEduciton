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

document.addEventListener('DOMContentLoaded', function() {
    // لكل قسم ننشئ إدارة مستقلة للتبويبات
    document.querySelectorAll('.dynamic-section').forEach(section => {
        const navButtons = section.querySelectorAll('.nav-btn');
        const tabPanes = section.querySelectorAll('.tab-pane');
        
        navButtons.forEach(button => {
            button.addEventListener('click', function() {
                // إزالة الفئة النشطة من جميع الأزرار في هذا القسم
                navButtons.forEach(btn => btn.classList.remove('active'));
                
                // إضافة الفئة النشطة للزر المحدد
                this.classList.add('active');
                
                // الحصول على تبويب البيانات المرتبط
                const tabId = this.getAttribute('data-tab');
                
                // إخفاء جميع محتويات التبويبات في هذا القسم
                tabPanes.forEach(pane => {
                    pane.classList.remove('active');
                });
                
                // إظهار التبويب المحدد
                const activeTab = section.querySelector(`#${tabId}`);
                if (activeTab) {
                    activeTab.classList.add('active');
                }
            });
        });
    });
});


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



