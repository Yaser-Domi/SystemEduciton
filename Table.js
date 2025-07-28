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
        
        // بيانات الجامعات (تم توسيعها إلى 20 جامعة)
        const universities = [
            {
                id: "univ_1",
                name: "جامعة إسطنبول",
                name_tr: "istanbul Üniversitesi",
                location: "إسطنبول",
                startDate: "07.07.2025",
                endDate: "18.07.2025",
                resultDate: "",
                certificates: ["شهادة اليوس الموحد TR-YÖS"],
                fees: "مجاناً",
                applicationType: "أونلاين",
                ranking: 6,
                state: "إسطنبول",
                majors: [  "كلية الحاسبات وتكنولوجيا المعلومات" , "كلية التمريض" , "كلية الهندسة المعمارية" , "كلية النقل والخدمات اللوجستية" , "كلية التعليم المفتوح عن بعد" , "كلية الشريعة" , "كليةالعلوم المائية" , "كلية الاتصالات" , "كلية العلوم السياسية" , "كلية طب الأسنان" , "كلية الصيدلة" , "كلية الاقتصاد والعلوم الإدارية" , "كلية العلوم" , "كلية الأداب" , "كلية الحقوق" , "كلية الطب البشري"]
            },
            {
                id: "univ_2",
                name: "جامعة أنقرة للعلوم الاجتماعية",
                name_tr: "Ankara Sosyal Bilimler Üniversitesi",
                location: "كوناريك",
                startDate: "28.05.2025",
                endDate: "04.06.2025",
                resultDate: "08.06.2025",
                certificates: ["شهادة الثانوية العامة", "شهادة اليوس الموحد TR-YÖS", "شهادة السات", "شهادة الثانوية التركية"],
                fees: "مجاناً",
                applicationType: "أونلاين",
                ranking: 28,
                state: "أنقرة",
                majors: [ "كلية الحقوق", "كلية العلوم السياسية", "كلية العلوم الإسلامية", "كلية اللغات الأجنبية", "كلية الفنون والتصميم", "كلية العلوم الاجتماعية والإنسانية", "كلية الاتصالاتس",]
            },
            {
                id: "univ_3",
                name: "جامعة أنقرة يلدرم بيازيد",
                name_tr: "Ankara Yıldırım Beyazıd Üniversitesi",
                location: "غازي عنتاب",
                startDate: "05.06.2025",
                endDate: "08.06.2025",
                resultDate: "20.06.2025",
                certificates: ["شهادة الثانوية العامة", "شهادة اليوس الموحد TR-YÖS", "شهادة السات", "شهادة الثانوية التركية"],
                fees: "مجاناً",
                applicationType: "أونلاين",
                ranking: 18,
                state: "غازي عنتاب",
                majors: [ "كلية الطب البشري", "كلية طب الأسنان", "كلية الصيدلة", "كلية الهندسة والعلوم الطبيعية ", "كلية العمارة والفنون الجميلة", "كلية الحقوق", "كلية الشريعة", "كلية العلوم السياسية", "كلية العلوم الصحية", "كلية العلوم الإنسانية والاجتماعية", "كلية الطيران والملاحة الفضائية", "كلية العلوم التطبيقية ", "كلية إدارة الأعمال", "كلية علوم الرياضة", "المعهد العالي للموسيقى",]
            },
            {
                id: "univ_4",
                name: "جامعة اينونو",
                name_tr: "İnönü Üniversitesi",
                location: "ملاطيا",
                startDate: "01.07.2025",
                endDate: "10.07.2025",
                resultDate: "12.07.2025",
                certificates: ["شهادة الثانوية العامة", "شهادة السات",],
                fees: "مجاناً",
                applicationType: "أونلاين",
                ranking: 32,
                state: "ملاطيا",
                majors: [ "كلية علوم الرياضة" ,"كلية الشريعة" , "كلية الاقتصاد والعلوم الإدارية" , "كليةالحقوق" , "كلية التمريض" , "كليةالفنون الجميلة والتصميم" , "كلية العلوم والأداب" , "كليةالتربية" , "كليةالعلوم الصحية" , "كليةالهندسة" , "كليةالاتصالات" , "كلية الصيدلة", "كلية طب الأسنان", "كلية الطب البشري"]
            },
            {
                id: "univ_5",
                name: "جامعة إسكي شيهر  التقنية",
                name_tr: "Eskişehir Teknik Üniversitesi",
                location: "إسكي شهير",
                startDate: "16.06.2025",
                endDate: "14.07.2025",
                resultDate: "11.08.2025",
                certificates: ["شهادة السات", "شهادة اليوس الموحد TR-YÖS"],
                fees: "مجاناً",
                applicationType: "أونلاين",
                ranking: 47,
                state: "إسكي شهير",
                majors: [ "كلية علوم الرياضة" , "كلية الهندسة" , "كلية الهندسة المعمارية والتصميم", "كلية الطيران والملاحة الفضائية", "كلية العلوم"]
            },
            {
                id: "univ_6",
                name: "جامعة  ارزروم التقنية",
                name_tr: "Erzurum Teknik Üniversitesi",
                location: "أرزروم",
                startDate: "01.07.2025",
                endDate: "01.08.2025",
                resultDate: "11.08.2025",
                certificates: [ "شهادةالسات" ,"شهادة الثانوية العامة", "شهادة اليوس الموحد TR-YÖS", "شهادة الثانوية التركية"],
                fees: "مجاناً",
                applicationType: "أونلاين",
                ranking: 82,
                state: "أرزروم",
                majors: [  "كلية علوم الرياضة" ,"كلية الاقتصاد والعلوم الإدارية" , "كلية العلوم" , "كلية الأداب", "كلية العلوم الصحية", "كلية الهندسة والعمارة"]
            },
            {
                id: "univ_7",
                name: "جامعة اغري ابراهيم تشيتشان",
                name_tr: "Ağrı İbrahim çeçen Üniversitesi",
                location: "أغري",
                startDate: "22.06.2025",
                endDate: "25.07.2025",
                resultDate: "11.08.2025",
                certificates: [ "شهادة اليوس الموحد TR-YÖS" , "شهادة السات" , "شهادة الثانوية العامة", "شهادة الثانوية التركية"],
                fees: "مجاناً",
                applicationType: "أونلاين",
                ranking: 131,
                state: "أغري",
                majors: [ "كلية علوم الرياضة" , "كلية التربية" , "كلية العلوم والأداب" , "كلية الاقتصاد والعلوم الإدارية" , "كليةالعلوم الإسلامية" , "كلية الهندسة والعلوم الطبيعية", "كلية الصيدلة", "كلية الطب البشري"]
            },
            {
                id: "univ_8",
                name: "جامعة العثمانية كوركوت اتا",
                name_tr: "Osmaniye Korkut Ata Üniversitesi",
                location: "العثمانية",
                startDate: "23.06.2025",
                endDate: "13.07.2025",
                resultDate: "31.07.2025",
                certificates: ["شهادة اليوس الموحد TR-YÖS"],
                fees: "مجاناً",
                applicationType: "أونلاين",
                ranking: 107,
                state: "العثمانية",
                majors: [ "كلية العلوم الصحية" , "كلية الهندسة والعلوم التطبيقية" , "كلية التصميم والفنون الجميلة" ,"كليةالهندسة المعمارية" , "كلية العلوم التطبيقية", "كلية العلوم الإنسانية والاجتماعية", "كلية الشريعة", "كلية الاقتصاد والعلوم الإدارية"]
            },
            {
                id: "univ_9",
                name: "جامعة  اناضولو",
                name_tr: "Anadolu Üniversitesi",
                location: "إسكي شهير",
                startDate: "04.08.2025",
                endDate: "15.08.2025",
                resultDate: "22.08.2025",
                certificates: ["شهادة الثانوية العامة", "شهادة اليوس الموحد TR-YÖS", "شهادة الثانوية التركية"],
                fees: "مجاناً",
                applicationType: "أونلاين",
                ranking: 44,
                state: "إسكي شهير",
                majors: [ "معهد الموسيقى العالي" , "كلية الفنون الجميلة" ,"كلية علوم الاتصالات" , "كلية الأداب" ,"كلية العلوم الصحية" , "كلية الاقتصاد والعلوم الإدارية" ,"كلية التربية" ,"كلية السياحة", "كلية الحقوق", "كلية الصيدلة"]
            },
            {
                id: "univ_10",
                name: "جامعة ازمير كاتب تشلبي",
                name_tr: "Orta Doğu Teknik Üniversitesi",
                location: "أنقرة",
                startDate: "15.05.2025",
                endDate: "10.06.2025",
                resultDate: "05.07.2025",
                certificates: ["شهادة الثانوية العامة", "شهادة اليوس الموحد", "شهادة الثانوية الدولية"],
                fees: "400$",
                applicationType: "أونلاين",
                ranking: 6,
                state: "أنقرة",
                majors: [ "كلية الطب البشري", "كلية طب الأسنان", "كلية الهندسة المعمارية والتصميم", "كلية الهندسة", "كلية العلوم الصحية", "كلية التربية", "كلية العلوم والأداب", "كلية الفنون الجميلة", "كلية الحقوق", "كلية الاقتصاد والعلوم الإدارية", ]
            },
            {
                id: "univ_11",
                name: "جامعة اغدير",
                name_tr: "İstanbul Üniversitesi",
                location: "إسطنبول",
                startDate: "01.05.2025",
                endDate: "25.05.2025",
                resultDate: "15.06.2025",
                certificates: ["شهادة الثانوية العامة", "شهادة اليوس الموحد TR-YÖS", "شهادة السات", "شهادة الثانوية التركية"],
                fees: "300$",
                applicationType: "مباشر",
                ranking: 10,
                state: "إسطنبول",
                majors: [ "كلية طب الأسنان", "كلية الهندسة", "كلية العلوم الصحية", "كلية العلوم والأداب", "كلية الاقتصاد والعلوم الإدارية", "كلية الشريعة", "كلية علوم الرياضة", "كلية السياحة", "كلية العلوم التطبيقية", "كلية الفنون الجميلة", "كلية الزراعة", ]
            },
            {
                id: "univ_12",
                name: "جامعة إسطنبول التقنية",
                name_tr: "İstanbul Teknik Üniversitesi",
                location: "إسطنبول",
                startDate: "02.06.2025",
                endDate: "15.08.2025",
                resultDate: "25.08.2025",
                certificates: ["شهادة اليوس الموحد TR-YÖS", "شهادة السات"],
                fees: "مجاناً",
                applicationType: "أونلاين",
                ranking: 5,
                state: "إسطنبول",
                majors: [ "كلية تقنيات وتصميم المنسوجات" , "كلية التعدين" ,"كلية الكيمياء والمعادن" ,"كلية إدارة الأعمال" , "كلية العلوم والأداب" ,"كلية الطيران والملاحة الفضائية", "كلية الهندسة", "كلية الحاسوب والمعلوماتية"]
            },
            {
                id: "univ_13",
                name: "جامعة ارجيس ",
                name_tr: "Ege Üniversitesi",
                location: "إزمير",
                startDate: "15.06.2025",
                endDate: "10.07.2025",
                resultDate: "01.08.2025",
                certificates: ["شهادة الثانوية العامة","شهادة اليوس الموحد TR-YÖS", "شهادة السات", "شهادة الثانوية التركية"],
                fees: "250$",
                applicationType: "أونلاين",
                ranking: 12,
                state: "إزمير",
                majors: [ "كلية الطب البشري", "كلية طب الأسنان", "الصيدلة", "كلية الهندسة المعمارية", "كلية الهندسة", "كلية العلوم الصحية", "كلية الأداب", "كلية التربية", "كلية العلوم", "كلية الفنون الجميلة", "كلية الطيران والملاحة الفضائية", "كلية الحقوق", "كلية الاقتصاد والعلوم الإدارية", "كلية الشريعة", "كلية الاتصالات", "كلية علوم الرياضة", "كلية السياحة", "كلية الطب البيطري",  "كلية الزراعة",]
            },
            {
                id: "univ_14",
                name: "جامعة اماسيا (1)",
                name_tr: "Amasya Üniversitesi",
                location: "أماسيا",
                startDate: "16.06.2025",
                endDate: "30.06.2025",
                resultDate: "16.07.2025",
                certificates: ["شهادة الثانوية العامة", "شهادة اليوس الموحد TR-YÖS", "شهادة الثانوية التركية"],
                fees: "مجاناً",
                applicationType: "أونلاين",
                ranking: 134,
                state: "أماسيا",
                majors: [ "كلية العلوم والأداب" ,"كلية الشريعة" , "كلية العلوم الصحية" ,"كلية الاقتصاد والعلوم الإدارية" , "كلية التربية" ,"كلية العمارة", "كلية الهندسة والعمارة", "كلية الطب البشري"]
            },
            {
                id: "univ_15",
                name: "جامعة اماسيا (2)",
                name_tr: "Amasya Üniversitesi",
                location: "أماسيا",
                startDate: "06.08.2025",
                endDate: "15.08.2025",
                resultDate: "26.08.2025",
                certificates: ["شهادة الثانوية العامة", "شهادة اليوس الموحد TR-YÖS", "شهادة الثانوية التركية"],
                fees: "مجاناً",
                applicationType: "أونلاين",
                ranking: 134,
                state: "أماسيا",
                majors: [ "كلية العلوم والأداب" ,"كلية الشريعة" , "كلية العلوم الصحية" ,"كلية الاقتصاد والعلوم الإدارية" , "كلية التربية" ,"كلية العمارة", "كلية الهندسة والعمارة", "كلية الطب البشري"]
            },
            {
                id: "univ_16",
                name: "جامعة إزمير باكرتشاي",
                name_tr: "İzmir Bakırçay Üniversitesi",
                location: "إزمير",
                startDate: "01.07.2025",
                endDate: "11.07.2025",
                resultDate: "01.08.2025",
                certificates: ["شهادة اليوس الموحد TR-YÖS", "شهادة السات"],
                fees: "مجاناً",
                applicationType: "أونلاين",
                ranking: 150,
                state: "إزمير",
                majors: [ "كلية العلوم الصحية" , "كلية الهندسة والعمارة" , "كلية العلوم الإنسانية والاجتماعية" , "كلية الاقتصاد والعلوم الإدارية" , "كلية الحقوق", "كلية الصيدلة", "كلية الطب البشري"]
            },
            {
                id: "univ_17",
                name: "جامعة إيجه",
                name_tr: "Ege Üniversitesi",
                location: "إزمير",
                startDate: "04.08.2025",
                endDate: "06.08.2025",
                resultDate: "18.08.2025",
                certificates: ["شهادة اليوس الموحد TR-YÖS"],
                fees: "مجاناً",
                applicationType: "أونلاين",
                ranking: 9,
                state: "إزمير",
                majors: [ "كلية الاقتصاد والعلوم الإدارية" , "كلية الأداب" , "كلية التربية" , "كلية الهندسة" ,"كلية الصيدلة", "كلية الصيدلة", "كلية الطب البشري"]
            },
            {
                id: "univ_18",
                name: "جامعة إسطنبول جراح باشا",
                name_tr: "Uludağ Üniversitesi",
                location: "بورصة",
                startDate: "15.06.2025",
                endDate: "10.07.2025",
                resultDate: "05.08.2025",
                certificates: ["شهادة اليوس الموحد TR-YÖS", "شهادة السات"],
                fees: "150$",
                applicationType: "أونلاين",
                ranking: 20,
                state: "بورصة",
                majors: [ "كلية الطب البشري",  "كلية الطب البيطري", "كلية طب الأسنان", "كلية التمريض", "كلية الصيدلية", " كلية الهندسة", ] 
            },
            {
                id: "univ_19",
                name: "جامعة إسبارطة للعلوم التطبيقية",
                name_tr: "Çukurova Üniversitesi",
                location: "أضنة",
                startDate: "20.05.2025",
                endDate: "15.06.2025",
                resultDate: "10.07.2025",
                certificates: ["شهادة الثانوية العامة", "شهادة اليوس الموحد TR-YÖS", "شهادة السات", "شهادة الثانوية التركية"],
                fees: "200$",
                applicationType: "أونلاين",
                ranking: 22,
                state: "أضنة",
                majors: [ "كلية صيد الأسماك", "كلية العلوم التطبيقة", "كلية إدارة الأعمال", "كلية الغابات", "كلية التكنولوجيا", "كلية السياحة", "كلية الزراعة", ]
            },
            {
                id: "univ_20",
                name: "جامعة أنقرة حجي بيرام فالي",
                name_tr: "Ankara Hacı Beyram Vali Üniversitesi",
                location: "إسطنبول",
                startDate: "01.07.2025",
                endDate: "08.07.2025",
                resultDate: "08.08.2025",
                certificates: ["شهادة الثانوية العامة", "شهادة اليوس الموحد TR-YÖS", "شهادة السات"],
                fees: "مجاناً",
                applicationType: "أونلاين",
                ranking: 162,
                state: "إسطنبول",
                majors: [ "كلية الحقوق", "كلية السياحة", "كلية العلوم الإسلامية", "كلية الاقتصاد والعلوم الإدارية", "كلية الفنون والتصميم", "كلية الأداب", "كلية علوم الاتصالات", "كلية العلوم والأداب", "كلية الفنون الجميلة",] 
            },
            {
                id: "univ_21",
                name: "جامعة اون دوكوز مايس (1)",
                name_tr: "Ondokuz Mayıs Üniversitesi",
                location: "سامسون",
                startDate: "30.06.2025",
                endDate: "14.07.2025",
                resultDate: "25.07.2025",
                certificates: ["شهادة الثانوية العامة", "شهادة اليوس الموحد TR-YÖS","شهادة الثانوية التركية"],
                fees: "مجاناً",
                applicationType: "أونلاين",
                ranking: 26,
                state: "سامسون",
                majors: [ "كلية الزراعة" , "كلية علوم الرياضة" , "كلية الطب البيطري" , "كليةالسياحة" , "كلية الطب البشري" ,"كليةالعلوم الصحية" ,"كلية الهندسة" , "كليةالهندسة المعمارية" , "كلية الاتصالات" , "كلية الشريعة" , "كلية الاقتصاد والعلوم الإدارية" , "كلية الفنون الجميلة" ,"كلية العلوم" , "كلية التربية" ,"كلية الصيدلة" , "كلية طب الأسنان" , "كلية العلوم الإنسانية والاجتماعية", "كلية الاقتصاد والعلوم الإدارية", "كلية الحقوق"]
            },
            {
                id: "univ_22",
                name: "جامعة اون دوكوز مايس (2)",
                name_tr: "Ondokuz Mayıs Üniversitesi",
                location: "سامسون",
                startDate: "12.08.2025",
                endDate: "25.08.2025",
                resultDate: "05.09.2025",
                certificates: ["شهادة الثانوية العامة", "شهادة اليوس الموحد TR-YÖS","شهادة الثانوية التركية"],
                fees: "مجاناً",
                applicationType: "أونلاين",
                ranking: 26,
                state: "سامسون",
                majors: [ "كلية الزراعة" , "كلية علوم الرياضة" , "كلية الطب البيطري" , "كليةالسياحة" , "كلية الطب البشري" ,"كليةالعلوم الصحية" ,"كلية الهندسة" , "كليةالهندسة المعمارية" , "كلية الاتصالات" , "كلية الشريعة" , "كلية الاقتصاد والعلوم الإدارية" , "كلية الفنون الجميلة" ,"كلية العلوم" , "كلية التربية" ,"كلية الصيدلة" , "كلية طب الأسنان" , "كلية العلوم الإنسانية والاجتماعية", "كلية الاقتصاد والعلوم الإدارية", "كلية الحقوق"]
            },
            {
                id: "univ_23",
                name: "جامعة اون دوكوز مايس (3)",
                name_tr: "Ondokuz Mayıs Üniversitesi",
                location: "سامسون",
                startDate: "22.09.2025",
                endDate: "03.10.2025",
                resultDate: "14.10.2025",
                certificates: ["شهادة الثانوية العامة", "شهادة اليوس الموحد TR-YÖS","شهادة الثانوية التركية"],
                fees: "مجاناً",
                applicationType: "أونلاين",
                ranking: 26,
                state: "سامسون",
                majors: [ "كلية الزراعة" , "كلية علوم الرياضة" , "كلية الطب البيطري" , "كليةالسياحة" , "كلية الطب البشري" ,"كليةالعلوم الصحية" ,"كلية الهندسة" , "كليةالهندسة المعمارية" , "كلية الاتصالات" , "كلية الشريعة" , "كلية الاقتصاد والعلوم الإدارية" , "كلية الفنون الجميلة" ,"كلية العلوم" , "كلية التربية" ,"كلية الصيدلة" , "كلية طب الأسنان" , "كلية العلوم الإنسانية والاجتماعية", "كلية الاقتصاد والعلوم الإدارية", "كلية الحقوق"]
            },
            {
                id: "univ_24",
                name: "جامعة افيون كوجاتيبه (1)",
                name_tr: "Afyon Kocatepe Üniversitesi",
                location: "أفيون",
                startDate: "09.06.2025",
                endDate: "11.07.2025",
                resultDate: "18.07.2025",
                certificates: ["شهادة الثانوية العامة", "شهادة اليوس الموحد TR-YÖS", "شهادة السات", "شهادة الثانوية التركية"],
                fees: "مجاناً",
                applicationType: "أونلاين",
                ranking: 25,
                state: "أفيون",
                majors: [ "معهد الموسيقى العالي" , "معهد العلوم التطبيقية" , "معهد اللغات الأجنبية" , "كلية السياحة" , "كلية التكنولوجيا" , "كلية علوم الرياضة" , "كلية التربية" , "كلية العلوم والأداب" , "كليةالاقتصاد والعلوم الإدارية" , "كلية الشريعة" , "كلية الحقوق", "كلية الهندسة", "كلية الطب البيطري"]
            },
            {
                id: "univ_25",
                name: "جامعة افيون كوجاتيبه (2)",
                name_tr: "Afyon Kocatepe Üniversitesi",
                location: "أفيون",
                startDate: "01.09.2025",
                endDate: "12.09.2025",
                resultDate: "19.09.2025",
                certificates: ["شهادة الثانوية العامة", "شهادة اليوس الموحد TR-YÖS", "شهادة السات", "شهادة الثانوية التركية"],
                fees: "مجاناً",
                applicationType: "أونلاين",
                ranking: 25,
                state: "أفيون",
                majors: [ "معهد الموسيقى العالي" , "معهد العلوم التطبيقية" , "معهد اللغات الأجنبية" , "كلية السياحة" , "كلية التكنولوجيا" , "كلية علوم الرياضة" , "كلية التربية" , "كلية العلوم والأداب" , "كليةالاقتصاد والعلوم الإدارية" , "كلية الشريعة" , "كلية الحقوق", "كلية الهندسة", "كلية الطب البيطري"]
            },
                {
                id: "univ_26",
                name: "جامعة افيون كوجاتيبه (3)",
                name_tr: "Afyon Kocatepe Üniversitesi",
                location: "أفيون",
                startDate: "20.10.2025",
                endDate: "31.10.2025",
                resultDate: "07.11.2025",
                certificates: ["شهادة الثانوية العامة", "شهادة اليوس الموحد TR-YÖS", "شهادة السات", "شهادة الثانوية التركية"],
                fees: "مجاناً",
                applicationType: "أونلاين",
                ranking: 25,
                state: "أفيون",
                majors: [ "معهد الموسيقى العالي" , "معهد العلوم التطبيقية" , "معهد اللغات الأجنبية" , "كلية السياحة" , "كلية التكنولوجيا" , "كلية علوم الرياضة" , "كلية التربية" , "كلية العلوم والأداب" , "كليةالاقتصاد والعلوم الإدارية" , "كلية الشريعة" , "كلية الحقوق", "كلية الهندسة", "كلية الطب البيطري"]
            },
            {
                id: "univ_27",
                name: "جامعة إسكندرون تكنيك",
                name_tr: "İskenderun Teknik Üniversitesi",
                location: "هاتاي",
                startDate: "11.08.2025",
                endDate: "14.08.2025",
                resultDate: "15.08.2025",
                certificates: ["شهادة اليوس الموحد TR-YÖS"],
                fees: "مجاناً",
                applicationType: "أونلاين",
                ranking: 86,
                state: "هاتاي",
                majors: [ "كلية السياحة" ,"كلية العلوم التجارية والإدارية" ,"كلية الطيران والملاحة الفضائية" , "كلية علوم البحار والتكنولوجيا" ,"كلية إنشاء السفن والبحرية", "كلية الهندسة والعلوم الطبيعية", "كلية الهندسة المعمارية"]
            },
            {
                id: "univ_28",
                name: "جامعة أوردو",
                name_tr: "İstanbul Üniversitesi",
                location: "إسطنبول",
                startDate: "01.05.2025",
                endDate: "25.05.2025",
                resultDate: "15.06.2025",
                certificates: ["شهادة السات"],
                fees: "300$",
                applicationType: "مباشر",
                ranking: 10,
                state: "إسطنبول",
                majors: [ "كلية الطب البشري", "كلية طب الأسنان", "كلية العلوم الصحية", "كلية علوم البحار", "كلية العلوم والأداب", "كلية الفنون الجميلة", "كلية الشريعة", "كلية الموسيقى والفنون الجميلة", "كلية علوم الرياضة", "كلية السياحة", "كلية الاقتصاد والعلوم الإدارية", "كلية الزراعة", ] 
            },
            {
                id: "univ_29",
                name: "جامعة أوشاك ",
                name_tr: "Uşak Üniversitesi",
                location: "أوشاك",
                startDate: "16.07.2025",
                endDate: "27.07.2025",
                resultDate: "08.08.2025",
                certificates: ["شهادة الثانوية العامة", "شهادة اليوس الموحد TR-YÖS", "شهادة السات", "شهادة الثانوية التركية"],
                fees: "مجاناً",
                applicationType: "أونلاين",
                ranking: 102,
                state: "أوشاك",
                majors: [  "كلية الزراعة" ,"كلية علوم التطبيقية" , "كلية علوم الرياضة" ,"كلية العلوم الإسلامية" , "كلية الهندسة والعلوم الطبيعية" , "كلية الهندسة  المعمارية والتصميم", "كلية طب الأسنان ", "كلية الطب البشري"]
            },
            {
                id: "univ_30",
                name: "جامعة الشرق الأوسط التقنية",
                name_tr: "Orta Doğu Teknik Üniversitesi",
                location: "أنقرة",
                startDate: "02.06.2025",
                endDate: "09.07.2025",
                resultDate: "",
                certificates: ["شهادة الثانوية العامة", "شهادة اليوس الموحد TR-YÖS", "شهادة السات"],
                fees: "مجاناً",
                applicationType: "أونلاين",
                ranking: 3,
                state: "أنقرة",
                majors: [  "كلية الهندسة" , "كلية التربية" ,"كلية الاقتصاد والعلوم الإدارية", "كلية العلوم والأداب", "كلية الهندسة المعمارية"]
            },
            {
                id: "univ_31",
                name: "جامعة أنقرة",
                name_tr: "Gazi Üniversitesi",
                location: "أنقرة",
                startDate: "20.05.2025",
                endDate: "15.06.2025",
                resultDate: "10.07.2025",
                certificates: ["شهادة اليوس الموحد TR-YÖS", "شهادة السات"],
                fees: "200$",
                applicationType: "أونلاين",
                ranking: 14,
                state: "أنقرة",
                majors: ["كلية الطب البشري", "كلية طب الأسنان", "كلية الطب البيطري", "كلية الصيدلة", "كلية العلوم الصحية", "كلية التمريض", "كلية الهندسة", "كلية العلوم التربوية", "كلية الحقوق", "كلية الشريعة", "كلية العلوم السياسية", "كلية اللغات والتاريخ والجغرافيا", "كلية العلوم", "كلية الفنون الجميلة", "كلية علوم الرياضة", "كلية العلوم التطبيقية", "كلية الزراعة", "معهد اللغات الأجنبية", "معهد الموسيقى العالي", ]                                                                                                                                                 
            },
            {
                id: "univ_32",
                name: "جامعة  ارزنجان بن علي يلدرم ",
                name_tr: "Marmara Üniversitesi",                
                location: "إسطنبول",
                startDate: "05.06.2025",
                endDate: "30.06.2025",
                resultDate: "25.07.2025",
                certificates: ["شهادة الثانوية العامة", "شهادة اليوس الموحد TR-YÖS", "شهادة السات", "شهادة الثانوية التركية"],
                fees: "300$",
                applicationType: "أونلاين",
                ranking: 11,
                state: "إسطنبول",
                majors: [ "كلية الطب البشري", "طب الأسنان", "كلية الصيدلة", "كلية الهندسة والعمارة", "كلية العلوم الصحية", "كلية التربية", "كلية العلوم والأداب", "كلية الفنون الجميلة", "كلية الحقوق", "كلية الاقتصاد والعلوم الإدارية", "كلية الشريعة", "كلية علوم الرياضة", ]
            },
            {
                id: "univ_33",
                name: "جامعة أكسراي",
                name_tr: "Aksaray Üniversitesi",
                location: "أكسراي",
                startDate: "18.08.2025",
                endDate: "21.08.2025",
                resultDate: "01.09.2025",
                certificates: ["شهادة الثانوية العامة", "شهادة اليوس الموحد TR-YÖS", "شهادة الثانوية التركية"],
                fees: "مجاناً",
                applicationType: "أونلاين",
                ranking: 77,
                state: "أكسراي",
                majors: [ "كلية علوم الرياضة" , "كلية السياحة" ,  "كلية العلوم الصحية" , "كلية الاتصالات" ,"كلية العلوم الإسلامية" , "كلية الاقتصاد والعلوم الإدارية" ,"كلية العلوم والأداب" ,"كلية التربية" , "كلية الهندسة المعمارية والتصميم" ,"كلية الهندسة" ,"كلية الطب البيطري", "كلية طب الأسنان", "كلية الطب البشري"]
            },
            {
                id: "univ_34",
                name: "جامعة افيون للعلوم الصحية",
                name_tr: "Uludağ Üniversitesi",
                location: "بورصة",
                startDate: "15.06.2025",
                endDate: "10.07.2025",
                resultDate: "05.08.2025",
                certificates: ["شهادة اليوس الموحد TR-YÖS"],
                fees: "150$",
                applicationType: "أونلاين",
                ranking: 20,
                state: "بورصة",
                majors: [ "كلية الطب البشري", "كلية طب الأسنان", "كلية الصيدلة", "كلية العلوم الصحية", ]
            },
            {
                id: "univ_35",
                name: "جامعة أضنة للعلوم والتكنولوجيا",
                name_tr: "Çukurova Üniversitesi",
                location: "أضنة",
                startDate: "20.05.2025",
                endDate: "15.06.2025",
                resultDate: "10.07.2025",
                certificates: ["شهادة اليوس الموحد TR-YÖS", "شهادة السات"],
                fees: "200$",
                applicationType: "أونلاين",
                ranking: 22,
                state: "أضنة",
                majors: [ "كلية الهندسة", "كلية العمارة والتصميم", "كلية علوم الطيران والملاحة الفضائية", "كلية إدارة الأعمال", "كلية العلوم الإنسانية والاجتماعية", "كلية العلوم السياسية", ] 
            },
            {
                id: "univ_36",
                name: "جامعة  اتاتورك (1) ",
                name_tr: "Atatürk Üniversitesi",
                location: "أرزروم",
                startDate: "11.06.2025",
                endDate: "13.07.2025",
                resultDate: "16.07.2025",
                certificates: ["شهادة اليوس الموحد TR-YÖS"],
                fees: "1500TL",
                applicationType: "أونلاين",
                ranking: 16,
                state: "أرزروم",
                majors: [  "كلية مصايد الأسماك" , "كلية علوم الرياضة" , "كلية العلوم الإنسانية والاجتماعية" , "كلية التربية" , "كليةالاتصالات" , "كلية التعليم المفتوح عن بعد" , "كلية الزراعة" , "كليةالطب البيطري" , "كليةالعلوم التطبيقية" , "كلية السياحة" , "كليةالاقتصاد والعلوم الإدارية" , "كلية الشريعة" , "كلية العلوم الصحية" , "كلية العمارة والتصميم" ,"كلية الهندسة" , "كلية الحقوق" ,"كليةالفنون الجميلة" , "كلية العلوم" , "كليةالأداب" , "كليةالتمريض" , "كلية الصيدلة", "كلية طب الأسنان", "كلية الطب البشري"]
            },
            {
                id: "univ_37",
                name: "جامعة  اتاتورك (2) ",
                name_tr: "Atatürk Üniversitesi",
                location: "أرزروم",
                startDate: "18.08.2025",
                endDate: "25.08.2025",
                resultDate: "27.08.2025",
                certificates: ["شهادة اليوس الموحد TR-YÖS"],
                fees: "1500TL",
                applicationType: "أونلاين",
                ranking: 16,
                state: "أرزروم",
                majors: [  "كلية مصايد الأسماك" , "كلية علوم الرياضة" , "كلية العلوم الإنسانية والاجتماعية" , "كلية التربية" , "كليةالاتصالات" , "كلية التعليم المفتوح عن بعد" , "كلية الزراعة" , "كليةالطب البيطري" , "كليةالعلوم التطبيقية" , "كلية السياحة" , "كليةالاقتصاد والعلوم الإدارية" , "كلية الشريعة" , "كلية العلوم الصحية" , "كلية العمارة والتصميم" ,"كلية الهندسة" , "كلية الحقوق" ,"كليةالفنون الجميلة" , "كلية العلوم" , "كليةالأداب" , "كليةالتمريض" , "كلية الصيدلة", "كلية طب الأسنان", "كلية الطب البشري"]
            },
            {
                id: "univ_38",
                name: "جامعة  اتاتورك (3) ",
                name_tr: "Atatürk Üniversitesi",
                location: "أرزروم",
                startDate: "19.09.2025",
                endDate: "24.09.2025",
                resultDate: "26.09.2025",
                certificates: ["شهادة اليوس الموحد TR-YÖS"],
                fees: "1500TL",
                applicationType: "أونلاين",
                ranking: 16,
                state: "أرزروم",
                majors: [  "كلية مصايد الأسماك" , "كلية علوم الرياضة" , "كلية العلوم الإنسانية والاجتماعية" , "كلية التربية" , "كليةالاتصالات" , "كلية التعليم المفتوح عن بعد" , "كلية الزراعة" , "كليةالطب البيطري" , "كليةالعلوم التطبيقية" , "كلية السياحة" , "كليةالاقتصاد والعلوم الإدارية" , "كلية الشريعة" , "كلية العلوم الصحية" , "كلية العمارة والتصميم" ,"كلية الهندسة" , "كلية الحقوق" ,"كليةالفنون الجميلة" , "كلية العلوم" , "كليةالأداب" , "كليةالتمريض" , "كلية الصيدلة", "كلية طب الأسنان", "كلية الطب البشري"]
            },
            {
                id: "univ_39",
                name: "جامعة ازمير الديمقراطية",
                name_tr: "Anadolu Üniversitesi",
                location: "إسكي شهير",
                startDate: "25.05.2025",
                endDate: "20.06.2025",
                resultDate: "15.07.2025",
                certificates: ["شهادة اليوس الموحد TR-YÖS"],
                fees: "100$",
                applicationType: "أونلاين",
                ranking: 25,
                state: "إسكي شهير",
                majors: [ "كلية الطب البشري", "كلية طب الأسنان", "كلية العلوم الصحية", "كلية الهندسة", "كلية الهندسة المعمارية", "كلية التربية", "كلية العلوم والأداب", "كلية الفنون الجميلة", "كلية الحقوق", "كلية الاقتصاد والعلوم الإدارية",]                                                                    
            },
            {
                id: "univ_40",
                name: "جامعة العلوم الصحية",
                name_tr: "Sağlık Bilimler Üniversitesi",
                location: "إسطنبول",
                startDate: "09.09.2025",
                endDate: "11.09.2025",
                resultDate: "15.09.2025",
                certificates: ["شهادة اليوس الموحد TR-YÖS"],
                fees: "مجاناً",
                applicationType: "أونلاين",
                ranking: 29,
                state: "إسطنبول",
                majors: [ "كلية العلوم الصحية" , "كلية التمريض" , "كلية الصيدلة", "كلية طب الأسنان", "كلية الطب البشري"]
            },
            {
                id: "univ_41",
                name: "جامعة إسطنبول مدنيات",
                name_tr: "İstanbul Medeniyat Üniversitesi",
                location: "إسطنبول",
                startDate: "30.06.2025",
                endDate: "07.07.2025",
                resultDate: "31.07.2025",
                certificates: ["شهادة اليوس الموحد TR-YÖS"],
                fees: "مجاناً",
                applicationType: "أونلاين",
                ranking: 38,
                state: "إسطنبول",
                majors: [ "كلية الطب البشري", "كلية طب الأسنان ", "كلية العلوم الصحية", "كلية الهندسة والعلوم الطبيعية", "كلية الفنون والتصميم والعمارة", "كلية الأداب", "كلية العلوم التربوية", "كلية الحقوق", "كلية العلوم الإسلامية", "كلية العلوم السياسية", "كلية السياحة", ]                                 
            },
            {
                id: "univ_42",
                name: "جامعة ارداهان",
                name_tr: "İstanbul Üniversitesi",
                location: "إسطنبول",
                startDate: "01.05.2025",
                endDate: "25.05.2025",
                resultDate: "15.06.2025",
                certificates: ["شهادة اليوس الموحد TR-YÖS", "شهادة السات"],
                fees: "300$",
                applicationType: "مباشر",
                ranking: 10,
                state: "إسطنبول",
                majors: [ "كلية الهندسة", "كلية الفنون الجميلة", "كلية الاقتصاد والعلوم الإدارية" , "كلية الشريعة", "كلية العلوم الإنسانية والأداب", "كلية العلوم الصحية", ] 
            },
            {
                id: "univ_43",
                name: "جامعة اكدينيز",
                name_tr: "Hacettepe Üniversitesi",
                location: "أنقرة",
                startDate: "10.05.2025",
                endDate: "05.06.2025",
                resultDate: "30.06.2025",
                certificates: ["شهادة اليوس الموحد TR-YÖS"],
                fees: "350$",
                applicationType: "أونلاين",
                ranking: 7,
                state: "أنقرة",
                majors: [ "كلية الطب البشري", "كلية طب الأسنان", "كلية الهندسة", "كلية الشريعة", "كلية الاقتصاد والعلوم الإدارية", "كلية العلوم", "كلية الأداب", "كلية التربية", "كلية علوم الرياضة", "كلية الفنون الجميلة", " كلية العمارة", "كلية الحقوق", "كلية التمريض", "كلية الاتصالات", "كلية العلوم الصحية", "كلية العلوم التطبيقية", "كلية الزراعة", "كلية مصايد الأسماك", "كلية السياحة", "كلية إدارة الأعمال", "كلية السياحة", "كلية العلوم الإنسانية والاجتماعية", "كلية العلوم البحرية", ]                                                                                                                                             
            },
            {
                id: "univ_44",
                name: "جامعة الفرات",
                name_tr: "Fırat Üniversitesi",
                location: "إيلازيغ",
                startDate: "26.06.2025",
                endDate: "16.07.2025",
                resultDate: "29.07.2025",
                certificates: ["شهادة اليوس الموحد TR-YÖS", "شهادة السات"],
                fees: "600TL",
                applicationType: "أونلاين",
                ranking: 19,
                state: "إيلازيغ",
                majors: [ "كلية الطب البيطري" , "كلية التعليم التقني" , "كلية التكنولوجيا" , "كلية علوم الرياضة" , "كلية مصايد الأسماك" , "كلية الاتصالات" , "كلية الشريعة" , "كلية الاقتصاد والعلوم الإدارية" , "كلية العلوم الإنسانية والاجتماعية" , "كلية العلوم" , "كلية التربية" , "كلية العلوم الصحية" , "كلية الهندسة" , "كلية الهندسة المعمارية" , "كلية الصيدلة", "كلية طب الأسنان", "كلية الطب البشري"]
            },
            {
                id: "univ_45",
                name: "جامعة اسكي شهير تكنيك",
                name_tr: "Gazi Üniversitesi",
                location: "أنقرة",
                startDate: "20.05.2025",
                endDate: "15.06.2025",
                resultDate: "10.07.2025",
                certificates: ["شهادة اليوس الموحد TR-YÖS", "شهادة السات"],
                fees: "200$",
                applicationType: "أونلاين",
                ranking: 14,
                state: "أنقرة",
                majors: ["كلية الهندسة المعمارية والتصميم", "كلية الطيران والملاحة الفضائية", "كلية العلوم", "كلية الهندسة", "كلية علوم الرياضة",]
            },
            {
                id: "univ_46",
                name: "الجامعة التركية الألمانية",
                name_tr: "Türk Alman Üniversitesi",
                location: "إسطنبول",
                startDate: "01.07.2025",
                endDate: "23.07.2025",
                resultDate: "11.08.2025",
                certificates: ["شهادة اليوس الموحد TR-YÖS"],
                fees: "50$",
                applicationType: "أونلاين",
                ranking: 114,
                state: "إسطنبول",
                majors: ["كلية الاقتصاد والعلوم الإدارية", "كلية الحقوق", "كلية العلوم", "كلية الثقافة والعلوم الاجتماعية", "كلية الهندسة",]
            },
            {
                id: "univ_47",
                name: "جامعة ارتفين تشوروه",
                name_tr: "Yıldız Teknik Üniversitesi",
                location: "إسطنبول",
                startDate: "10.05.2025",
                endDate: "05.06.2025",
                resultDate: "30.06.2025",
                certificates: ["شهادة الثانوية العامة", "شهادة اليوس الموحد TR-YÖS", "شهادة السات", "شهادة الثانوية التركية"],
                fees: "400$",
                applicationType: "أونلاين",
                ranking: 9,
                state: "إسطنبول",
                majors: [ "كلية الهندسة" , "كلية الثقافة والعلوم الاجتماعية" , "كلية الاقتصاد والعلوم الإدارية", "كلية الحقوق", "كلية العلوم"]
            },
            {
                id: "univ_48",
                name: "جامعة الانيا علاء الدين كيكوبات",
                name_tr: "Alanya Alaaddin Keykubat Üniverstesi",
                location: "أنطاليا",
                startDate: "07.07.2025",
                endDate: "11.07.2025",
                resultDate: "17.07.2025",
                certificates: ["شهادة الثانوية العامة", "شهادة اليوس الموحد TR-YÖS", "شهادة الثانوية التركية"],
                fees: "1500TL",
                applicationType: "أونلاين",
                ranking: 137,
                state: "أنطاليا",
                majors: [ "كلية الطيران والملاحة الفضائية" , "كلية علوم الرياضة" , "كليةالسياحة" , "كليةالعلوم الصحية" , "كلية الاقتصاد والعلوم الإدارية" , "كليةالتربية" ,"كلية العمارة" , "كلية الفنون الجميلة والتصميم" , "كلية الهندسة", "كلية طب الأسنان", "كلية الطب البشري"]
            },
            {
                id: "univ_49",
                name: "معهد إزمير للتكنولوجيا",
                name_tr: "İzmir Yüksek Teknoloji Enstitüsü",
                location: "إزمير",
                startDate: "26.08.2025",
                endDate: "04.09.2025",
                resultDate: "10.09.2025",
                certificates: ["شهادة اليوس الموحد TR-YÖS"],
                fees: "مجاناً",
                applicationType: "أونلاين",
                ranking: 21,
                state: "إزمير",
                majors: ["كلية العلوم", "كلية العمارة", "كلية الهندسة"]
            },
            {
                id: "univ_50",
                name: "جامعة أديمان",
                name_tr: "Adıyaman Üniversitesi",
                location: "أديمان",
                startDate: "18.06.2025",
                endDate: "20.07.2025",
                resultDate: "01.08.2025",
                certificates: ["شهادة الثانوية العامة", "شهادة اليوس الموحد TR-YÖS", "شهادة السات", "شهادة الثانوية التركية"],
                fees: "مجاناً",
                applicationType: "أونلاين",
                ranking: 95,
                state: "أديمان",
                majors: [ "معهد موسيقى العالي" , "معهد التربية البدنية والرياضة" , "كلية الزراعة" , "كلية السياحة" , "كلية العلوم الصحية" , "كلية العلوم الإسلامية" , "كلية الاقتصاد والعلوم الإدارية" , "كلية الفنون الجميلة" , "كلية العلوم والأداب" , "كلية التربية" , "كلية العمارة" , "كليةالهندسة" ,"كلية الصيدلة", "كلية طب الأسنان", "كلية الطب البشري"]
            },
            {
                id: "univ_51",
                name: "جامعة بورصة تكنيك",
                name_tr: "Bursa Teknik Üniversitesi",
                location: "بورصة",
                startDate: "01.07.2025",
                endDate: "18.07.2025",
                resultDate: "",
                certificates: ["شهادة الثانوية العامة", "شهادة اليوس الموحد TR-YÖS", "شهادة السات"],
                fees: "مجاناً",
                applicationType: "أونلاين",
                ranking: 73,
                state: "بورصة",
                majors: [ "كلية الهندسة" ]
            },
            {
                id: "univ_52",
                name: "جامعة باموكالة",
                name_tr: "Anadolu Üniversitesi",
                location: "إسكي شهير",
                startDate: "25.05.2025",
                endDate: "20.06.2025",
                resultDate: "15.07.2025",
                certificates: ["شهادة اليوس الموحد TR-YÖS"],
                fees: "100$",
                applicationType: "أونلاين",
                ranking: 25,
                state: "إسكي شهير",
                majors: ["كلية العلوم", "كلية التربية", "كلية طب الأسنان", "كلية العلاج الطبيعي والتأهيل", "كلية الحقوق", "كلية الاقتصاد والعلوم الإدارية", "كلية الشريعة", "كلية الاتصالات", "كلية العلوم الإنسانية والاجتماعية", "كلية الهندسة المعمارية والتصميم", "كلية الهندسة", "كلية الموسيقى والفنون المسرحية", "كلية العلوم الصحية", "كلية علوم الرياضة", "كلية التعليم الفني", " كلية التكنولوجيا", "كلية الطب البشري", "كلية السياحة", "كلية العلوم التطبيقية", "كلية الزراعة",]  
            },
            {
                id: "univ_53",
                name: "جامعة بوغازتشي",
                name_tr: "Boğaziçi Üniversitesi",
                location: "إسطنبول",
                startDate: "08.07.2025",
                endDate: "16.07.2025",
                resultDate: "",
                certificates: ["شهادة اليوس الموحد TR-YÖS", "شهادة السات"],
                fees: "100$",
                applicationType: "أونلاين",
                ranking: 17,
                state: "إسطنبول",
                majors: [ "كلية العلوم والأداب" , "كلية الاتصالات" , "كلية التربية" ,"كلية الهندسة", "كلية الاقتصاد والعلوم الإدارية", "كلية الحقوق"]
            },
            {
                id: "univ_54",
                name: "جامعة باتمان",
                name_tr: "İstanbul Üniversitesi",
                location: "إسطنبول",
                startDate: "01.05.2025",
                endDate: "25.05.2025",
                resultDate: "15.06.2025",
                certificates: ["شهادة الثانوية العامة", "شهادة اليوس الموحد TR-YÖS", "شهادة السات", "شهادة الثانوية التركية"],
                fees: "300$",
                applicationType: "مباشر",
                ranking: 10,
                state: "إسطنبول",
                majors: ["كلية الفنون الجميلة", "كلية الأداب والعلوم", "كلية طب الأسنان", "كلية الاقتصاد والعلوم الإدارية", "كلية العلوم الإسلامية", "كلية الهندسة والعمارة", "كلية العلوم الصحية", "كلية التربية الفنية", "كلية العلوم", "كلية التكنولوجيا", "كلية العلوم السياحية",]
            },
            {
                id: "univ_55",
                name: "جامعة  بينغول",
                name_tr: "Hacettepe Üniversitesi",
                location: "أنقرة",
                startDate: "10.05.2025",
                endDate: "05.06.2025",
                resultDate: "30.06.2025",
                certificates: ["شهادة الثانوية العامة", "شهادة اليوس الموحد TR-YÖS", "شهادة السات", "شهادة الثانوية التركية"],
                fees: "350$",
                applicationType: "أونلاين",
                ranking: 7,
                state: "أنقرة",
                majors: ["كلية العلوم الصحية", "كلية الطب البيطري", "كلية طب الأسنان", "كلية الاقتصاد والعلوم الإدارية", "كلية الهندسة والعمارة", "كلية الزراعة", "كلية العلوم الإسلامية", "كلية علوم الرياضة", "كلية العلوم والأداب",] 
            },
            {
                id: "univ_56",
                name: "جامعة  بولو ابانت عزت بايسال",
                name_tr: "Ege Üniversitesi",
                location: "إزمير",
                startDate: "15.06.2025",
                endDate: "10.07.2025",
                resultDate: "01.08.2025",
                certificates: ["شهادة الثانوية العامة", "شهادة اليوس الموحد TR-YÖS", "شهادة السات", "شهادة الثانوية التركية"],
                fees: "250$",
                applicationType: "أونلاين",
                ranking: 12,
                state: "إزمير",
                majors: ["كلية العلوم الصحية", "كلية طب الأسنان", "كلية الطب البشري",  "كلية العلوم والأداب", "كلية الاقتصاد والعلوم الإدارية", "كلية الحقوق", "كلية التربية", "كلية الاتصالات", "كلية الشريعة", "كلية الفنون الجميلة", "كلية علوم الرياضة", "كلية العلوم التطبيقية", "كلية الهندسة المعمارية", "كلية التكنولوجيا", "كلية الهندسة", "كلية الزراعة", "كلية السياحة",] 
            },
            {
                id: "univ_57",
                name: "جامعة بيلجيك",
                name_tr: "Gazi Üniversitesi",
                location: "أنقرة",
                startDate: "20.05.2025",
                endDate: "15.06.2025",
                resultDate: "10.07.2025",
                certificates: ["شهادة الثانوية العامة", "شهادة اليوس الموحد TR-YÖS"],
                fees: "200$",
                applicationType: "أونلاين",
                ranking: 14,
                state: "أنقرة",
                majors: ["كلية العلوم الصحية", "كلية طب الأسنان", "كلية الطب البشري", "كلية الاقتصاد والعلوم الإدارية", "كلية الهندسة", "كلية الزراعة والعلوم الطبيعية", "كلية الفنون الجميلة والتصميم", "كلية العلوم الإسلامية", "كلية العلوم التطبيقية", "كلية العلوم", "كلية العلوم الإنسانية والاجتماعية",]
            },
            {
                id: "univ_58",
                name: "جامعة  بيتليس ايرن",
                name_tr: "Marmara Üniversitesi",
                location: "إسطنبول",
                startDate: "05.06.2025",
                endDate: "30.06.2025",
                resultDate: "25.07.2025",
                certificates: ["شهادة الثانوية العامة", "شهادة اليوس الموحد TR-YÖS", "شهادة السات", "شهادة الثانوية التركية"],
                fees: "300$",
                applicationType: "أونلاين",
                ranking: 11,
                state: "إسطنبول",
                majors: ["كلية الفنون الجميلة", "كلية الهندسة والعمارة", "كلية الاقتصاد والعلوم الإدارية", "كلية العلوم الإسلامية", "كلية العلوم والأداب",]
            },
            {
                id: "univ_59",
                name: "جامعة بورصةأولوداغ",
                name_tr: "Yıldız Teknik Üniversitesi",
                location: "إسطنبول",
                startDate: "10.05.2025",
                endDate: "05.06.2025",
                resultDate: "30.06.2025",
                certificates: ["شهادة اليوس الموحد TR-YÖS", "شهادة السات"],
                fees: "400$",
                applicationType: "أونلاين",
                ranking: 9,
                state: "إسطنبول",
                majors: ["كلية التربية", "كلية طب الأسنان", "كلية الطب البشري", "كلية العلوم والأداب", "كلية الفنون الجميلة", "كلية الحقوق", "كلية الاقتصاد والعلوم الإدارية", "كلية الشريعة", "كلية الهندسة المعمارية", "كلية الهندسة", "كلية علوم الرياضة", "كلية العلوم الصحية", "كلية الطب البيطري", "كلية الزراعة",]
            },
            {
                id: "univ_60",
                name: "جامعة  باندرما 17 إيلول",
                name_tr: "Bandırma 17 Eylül Üniversitesi",
                location: "بالك إسير",
                startDate: "23.06.2025",
                endDate: "18.07.2025",
                resultDate: "06.08.2025",
                certificates: ["شهادة الثانوية العامة", "شهادة اليوس الموحد TR-YÖS", "شهادة السات", "شهادة الثانوية التركية"],
                fees: "مجاناً",
                applicationType: "أونلاين",
                ranking: 156,
                state: "بالك إسير",
                majors: [ "كلية علوم الرياضة" , "كلية الاتصالات" , "كلية الزراعة" , "كلية العلوم الإسلامية" , "كلية البحرية" , "كلية الاقتصاد والعلوم الإدارية" , "كلية العلوم الصحية" , "كلية العلوم التطبيقية" , "كلية العلوم الإنسانية والاجتماعية" ,"كلية الهندسة المعمارية والتصميم", "كلية الهندسة والعلوم الطبيعية", "كلية الطب البشري"]
            },
            {
                id: "univ_61",
                name: "جامعة زونجولداك بولنت أجاويد",
                name_tr: "Zonguldak Bülent Ecevit Üniversitesi",
                location: "زنجولداك",
                startDate: "18.08.2025",
                endDate: "07.09.2025",
                resultDate: "16.09.2025",
                certificates: ["شهادة الثانوية العامة", "شهادة اليوس الموحد TR-YÖS", "شهادة السات", "شهادة الثانوية التركية"],
                fees: "مجاناً",
                applicationType: "أونلاين",
                ranking: 88,
                state: "زونجولداك",
                majors: [ "كلية البحرية" , "كلية السياحة" , "كلية العلوم الإنسانية والاجتماعية" , "كلية الاتصالات" , "كلية الشريعة" , "كلية الاقتصاد والعلوم الإدارية" , "كلية الفنون الجميلة" , "كلية العلوم" , "كلية التربية" ,"كلية العلوم الصحية" , "كلية الهندسة المعمارية والتصميم" ,"كلية الهندسة" , "كلية الصيدلة", "كلية طب الأسنان", "كلية الطب البشري"]
            },
            {
                id: "univ_62",
                name: "جامعة بارتن",
                name_tr: "Anadolu Üniversitesi",
                location: "إسكي شهير",
                startDate: "25.05.2025",
                endDate: "20.06.2025",
                resultDate: "15.07.2025",
                certificates: ["شهادة الثانوية العامة", "شهادة اليوس الموحد TR-YÖS", "شهادة السات", "شهادة الثانوية التركية"],
                fees: "100$",
                applicationType: "أونلاين",
                ranking: 25,
                state: "إسكي شهير",
                majors: ["كلية التربية", "كلية الأداب", "كلية الغابات", "كلية العلوم", "كلية الاقتصاد والعلوم الإدارية", "كلية العلوم الإسلامية", "كلية الهندسة المعمارية والتصميم", "كلية العلوم الصحية", "كلية علوم الرياضة",]
            },
            {
                id: "univ_63",
                name: "جامعة  بالك إسير",
                name_tr: "Anadolu Üniversitesi",
                location: "إسكي شهير",
                startDate: "25.05.2025",
                endDate: "20.06.2025",
                resultDate: "15.07.2025",
                certificates: ["شهادة الثانوية العامة", "شهادة اليوس الموحد TR-YÖS", "شهادة السات", "شهادة الثانوية التركية"],
                fees: "100$",
                applicationType: "أونلاين",
                ranking: 25,
                state: "إسكي شهير",
                majors: ["كلية العمارة", "كلية الهندسة", "كلية الطب البشري", "كلية الحقوق", "كلية الطب البيطري", "كلية الشريعة", "كلية الاقتصاد والعلوم الإدارية", "كلية العلوم والأداب", "كلية التربية", "كلية علوم الرياضة", "كلية السياحة", "كلية الفنون الجميلة", "كلية العلوم الصحية",]
            },
            {
                id: "univ_64",
                name: "جامعة بايبورت (1)",
                name_tr: "Bayburt Üniversitesi",
                location: "بايبورت",
                startDate: "16.06.2025",
                endDate: "31.08.2025",
                resultDate: "05.09.2025",
                certificates: ["شهادة الثانوية العامة", "شهادة اليوس الموحد TR-YÖS", "شهادة السات", "شهادة الثانوية التركية"],
                fees: "30$",
                applicationType: "أونلاين",
                ranking: 111,
                state: "بايبورت",
                majors: [ "كلية العلوم التطبيقية" , "كلية علوم الرياضة" ,"كلية التربية" , "كلية العلوم الصحية" , "كلية الهندسة" , "كلية الشريعة" ,"كلية الاقتصاد والعلوم الإدارية", "كلية الفنون والتصميم", "كلية العلوم الإنسانية والاجتماعية"]
            },
            {
                id: "univ_65",
                name: "جامعة بايبورت (2)",
                name_tr: "Bayburt Üniversitesi",
                location: "بايبورت",
                startDate: "15.09.2025",
                endDate: "31.10.2025",
                resultDate: "07.11.2025",
                certificates: ["شهادة الثانوية العامة", "شهادة اليوس الموحد TR-YÖS", "شهادة السات", "شهادة الثانوية التركية"],
                fees: "30$",
                applicationType: "أونلاين",
                ranking: 111,
                state: "بايبورت",
                majors: [ "كلية العلوم التطبيقية" , "كلية علوم الرياضة" ,"كلية التربية" , "كلية العلوم الصحية" , "كلية الهندسة" , "كلية الشريعة" ,"كلية الاقتصاد والعلوم الإدارية", "كلية الفنون والتصميم", "كلية العلوم الإنسانية والاجتماعية"]
            },
            {
                id: "univ_66",
               name: "جامعة توكات غازي عثمان باشا",
                name_tr: "Erciyes Üniversitesi",
                location: "قيصري",
                startDate: "10.06.2025",
                endDate: "05.07.2025",
                resultDate: "30.07.2025",
                certificates: ["شهادة اليوس الموحد TR-YÖS", "شهادة السات"],
                fees: "150$",
                applicationType: "أونلاين",
                ranking: 30,
                state: "قيصري",
                majors: ["كلية الصيدلة", "كلية طب الأسنان", "كلية الطب البشري", "كلية التربية", "كلية العلوم الصحية", "كلية العلوم الإنسانية والاجتماعية", "كلية العلوم والأداب", "كلية الفنون الجميلة", "كلية الحقوق", "كلية الاقتصاد والعلوم الإدارية", "كلية العلوم الإسلامية", "كلية الهندسة والعمارة", "كلية العلوم التطبيقية", "كلية العلوم الصحية", "كلية علوم الرياضة", "كلية العلوم التطبيقية", "كلية الزراعة",]
            },
            {
                id: "univ_67",
                name: "جامعة تشانكري كراتكين",
                name_tr: "Çankırı Karatekin Üniversitesi",
                location: "تشانكري",
                startDate: "07.04.2025",
                endDate: "22.08.2025",
                resultDate: "30.05.2025",
                certificates: ["شهادة الثانوية العامة", "شهادة اليوس الموحد TR-YÖS", "شهادة الثانوية التركية"],
                fees: "مجاناً",
                applicationType: "أونلاين",
                ranking: 96,
                state: "تشانكري",
                majors: [  "كلية الفنون والتصميم والعمارة" ,"كلية العلوم الصحية" , "كلية الغابات" ,"كلية الهندسة" , "كلية العلوم الإسلامية" , "كلية العلوم الإنسانية والاجتماعية" , "كلية الاقتصاد والعلوم الإدارية" ,"كلية الحقوق", "كلية العلوم", "كلية طب الأسنان"]
            },
            {
                id: "univ_68",
                name: "جامعة تراكيا",
                name_tr: "Trakya Üniversitesi",
                location: "أدرنة",
                startDate: "23.06.2025",
                endDate: "20.07.2025",
                resultDate: "28.07.2025",
                certificates: ["شهادة الثانوية العامة", "شهادة اليوس الموحد TR-YÖS", "شهادة الثانوية التركية"],
                fees: "مجاناً",
                applicationType: "أونلاين",
                ranking: 74,
                state: "أدرنة",
                majors: [  "كلية العلوم التطبيقية" , "كلية العلوم الصحية" , "كلية الهندسة" ,"كلية الهندسة المعمارية" , "كلية علوم الرياضة" , "كلية الشريعة" , "كليةالاقتصاد والعلوم الإدارية" , "كلية الفنون الجميلة" , "كلية العلوم" , "كلية التربية" , "كلية الأداب" , "كلية الصيدلة", "كلية طب الأسنان", "كلية الطب البشري"]
            },
            {
                id: "univ_69",
                name: "جامعة تيكرداغ نامق كمال",
                name_tr: "Ege Üniversitesi",
                location: "إزمير",
                startDate: "15.06.2025",
                endDate: "10.07.2025",
                resultDate: "01.08.2025",
                certificates: ["شهادة الثانوية العامة", "شهادة اليوس الموحد TR-YÖS", "شهادة الثانوية التركية"],
                fees: "250$",
                applicationType: "أونلاين",
                ranking: 12,
                state: "إزمير",
                majors: ["كلية الهندسة", "كلية طب الأسنان", "كلية الطب البشري", "كلية العلوم والأداب", "كلية الفنون الجميلة والتصميم والعمارة", "كلية الحقوق", "كلية الاقتصاد والعلوم الإدارية", "كلية الشريعة", "كلية العلوم الصحية", "كلية علوم الرياضة", "كلية الطب البيطري", "كلية الزراعة",]
            },
            {
                id: "univ_70",
                name: "جامعة تشانكالي 18 مارت",
                name_tr: "Gazi Üniversitesi",
                location: "أنقرة",
                startDate: "20.05.2025",
                endDate: "15.06.2025",
                resultDate: "10.07.2025",
                certificates: ["شهادة اليوس الموحد TR-YÖS"],
                fees: "200$",
                applicationType: "أونلاين",
                ranking: 14,
                state: "أنقرة",
                majors: ["كلية الهندسة المعمارية والتصميم", "كلية طب الأسنان", "كلية الطب البشري", "كلية الهندسة", "كلية العلوم التطبيقية", "كلية العلوم البحرية والتكنولوجيا", "كلية التربية", "كلية العلوم", "كلية الفنون الجميلة", "كلية الشريعة", "كلية الاتصالات", "كلية العلوم الإنسانية والاجتماعية", "كلية الموسيقى والفنون", "كلية العلوم الصحية", "كلية العلوم السياسية", "كلية علوم الرياضة", "كلية السياحة", "كلية الزراعة",]
            },
            {
                id: "univ_71",
                 name: "جامعة تشوكوروفا ",
                name_tr: "Çukurova Üniversitesi",
                location: "أضنة",
                startDate: "21.05.2025",
                endDate: "27.06.2025",
                resultDate: "11.07.2025",
                certificates: ["شهادة الثانوية العامة", "شهادة اليوس الموحد TR-YÖS", "شهادة السات"],
                fees: "400TL",
                applicationType: "أونلاين",
                ranking: 20,
                state: "أضنة",
                majors: [ "كلية علوم الرياضة" , "كلية الطب البيطري" , "كلية الهندسة" , "كلية الحقوق" , "كلية الاتصالات" ,"كلية الفنون الجميلة" ,"كلية الشريعة" , "كلية الثروة السمكية" ,"كلية التربية" , "كلية الاقتصاد والعلوم الإدارية" , "كلية الهندسة" , "كلية الأداب والعلوم" ,"كلية الزراعة" , "كلية الصيدلة" ,"كلية طب الأسنان", "كلية العلوم الصحية", "كلية الطب البشري"]
            },
            {
                id: "univ_72",
                name: "جامعة حران",
                name_tr: "Uludağ Üniversitesi",
                location: "بورصة",
                startDate: "15.06.2025",
                endDate: "10.07.2025",
                resultDate: "05.08.2025",
                certificates: ["شهادة اليوس الموحد TR-YÖS"],
                fees: "150$",
                applicationType: "أونلاين",
                ranking: 20,
                state: "بورصة",
                majors: ["كلية الصيدلة", "كلية طب الأسنان", "كلية الطب البشري", "كلية الهندسة", "كلية العلوم الصحية", "كلية التربية", "كلية الأداب والفنون", "كلية الفنون الجميلة", "كلية الاقتصاد والعلوم الإدارية", "كلية الشريعة", "كلية العلوم التطبيقية", "كلية الطب البيطري", "كلية الزراعة", ]
            },
            {
                id: "univ_73",
                name: "جامعة حجي تبه",
                name_tr: "Çukurova Üniversitesi",
                location: "أضنة",
                startDate: "20.05.2025",
                endDate: "15.06.2025",
                resultDate: "10.07.2025",
                certificates: ["شهادة اليوس الموحد TR-YÖS", "شهادة السات"],
                fees: "200$",
                applicationType: "أونلاين",
                ranking: 22,
                state: "أضنة",
                majors: ["كلية الاقتصاد والعلوم الإدارية", "كلية الهندسة", "كلية العلوم الصحية", "كلية التربية", "كلية العلوم والأداب",]
            },
            {
                id: "univ_74",
                name: "جامعة  دوزجة",
                name_tr: "Anadolu Üniversitesi",
                location: "إسكي شهير",
                startDate: "25.05.2025",
                endDate: "20.06.2025",
                resultDate: "15.07.2025",
                certificates: ["شهادة الثانوية العامة", "شهادة اليوس الموحد TR-YÖS", "شهادة السات", "شهادة الثانوية التركية"],
                fees: "100$",
                applicationType: "أونلاين",
                ranking: 25,
                state: "إسكي شهير",
                majors: ["كلية الهندسة", "كلية الصيدلة", "كلية الطب البشري", "كلية العلوم الصحية", "كلية الفنون والتصميم والعمارة", "كلية العلوم السياسية", "كلية التربية", "كلية العلوم والأداب", "كلية الشريعة", "كلية إدارة الأعمال", "كلية الغابات", "كلية علوم الرياضة", "كلية الزراعة",]
            },
            {
                id: "univ_75",
                name: "جامعة دجلة",
                name_tr: "Anadolu Üniversitesi",
                location: "إسكي شهير",
                startDate: "25.05.2025",
                endDate: "20.06.2025",
                resultDate: "15.07.2025",
                certificates: ["شهادة الثانوية العامة", "شهادة اليوس الموحد TR-YÖS", "شهادة السات", "شهادة الثانوية التركية"],
                fees: "100$",
                applicationType: "أونلاين",
                ranking: 25,
                state: "إسكي شهير",
                majors: ["كلية الصيدلة", "كلية طب الأسنان", "كلية الطب البشري", "كلية الاتصالات", "كلية الهندسة المعمارية", "كلية الهندسة", "كلية العلوم الصحية", "كلية الأداب", "كلية العلوم", "كلية الحقوق", "كلية الاقتصاد والعلوم الإدارية", "كلية الشريعة", "كلية الفنون والتصميم", "كلية العلوم التطبيقية", "كلية الطب البيطري", "كلية الزراعة", "كلية التربية",]
            },
            {
                id: "univ_76",
                name: "جامعة دوكوز إيلول (1)",
                name_tr: "Dokuz Eylül Üniversitesi",
                location: "إزمير",
                startDate: "07.07.2025",
                endDate: "11.07.2025",
                resultDate: "21.07.2025",
                certificates: ["شهادة اليوس الموحد TR-YÖS", "شهادة السات"],
                fees: "مجاناً",
                applicationType: "أونلاين",
                ranking: 18,
                state: "إزمير",
                majors: [ "كلية الطب البيطري" , "كليةالسياحة" , "كلية الشريعة" ,"كلية الاقتصاد والعلوم الإدارية" , "كلية الحقوق" , "كلية التمريض" , "كلية الفنون الجميلة" , "كليةالعلاج الطبيعي والتأهيل" , "كلية العلوم" , "كلية الأداب" , "كليةالبحرية" , "كلية التربية" , "كلية الهندسة" , "كلية الهندسة المعمارية", "كلية طب الأسنان", "كلية الطب البشري"]
            },
            {
                id: "univ_77",
                name: "جامعة دوكوز إيلول (2)",
                name_tr: "Dokuz Eylül Üniversitesi",
                location: "إزمير",
                startDate: "18.08.2025",
                endDate: "22.08.2025",
                resultDate: "29.08.2025",
                certificates: ["شهادة اليوس الموحد TR-YÖS", "شهادة السات"],
                fees: "مجاناً",
                applicationType: "أونلاين",
                ranking: 18,
                state: "إزمير",
                majors: [ "كلية الطب البيطري" , "كليةالسياحة" , "كلية الشريعة" ,"كلية الاقتصاد والعلوم الإدارية" , "كلية الحقوق" , "كلية التمريض" , "كلية الفنون الجميلة" , "كليةالعلاج الطبيعي والتأهيل" , "كلية العلوم" , "كلية الأداب" , "كليةالبحرية" , "كلية التربية" , "كلية الهندسة" , "كلية الهندسة المعمارية", "كلية طب الأسنان", "كلية الطب البشري"]
            },
            {
                id: "univ_78",
                name: "جامعة رجب طيب أردوغان",
                name_tr: "Recep Tayyip Erdoğan Üniversitesi",
                location: "ريزه",
                startDate: "22.08.2025",
                endDate: "31.08.2025",
                resultDate: "08.09.2025",
                certificates: ["شهادة الثانوية العامة", "شهادة اليوس الموحد TR-YÖS", "شهادة السات", "شهادة الثانوية التركية"],
                fees: "مجاناً",
                applicationType: "أونلاين",
                ranking: 52,
                state: "ريزه",
                majors: [ "كلية الزراعة" , "كلية البحرية" ,"كلية مصايد الأسماك" , "كلية علوم الرياضة" , "كلية العلوم الصحية" ,"كلية الهندسة والعمارة" , "كلية الشريعة" ,"كلية الاقتصاد والعلوم الإدارية" , "كلية الحقوق" , "كلية العلوم والأداب" , "كلية التربية" , "كية السياحة" ,"كلية الصيدلة", "كلية طب الأسنان", "كلية الطب البشري"]
            },
            {
                id: "univ_79",
                name: "جامعة سامسون (1)",
                name_tr: "Samsun Üniversitesi",
                location: "سامسون",
                startDate: "24.06.2025",
                endDate: "21.07.2025",
                resultDate: "30.07.2025",
                certificates: ["شهادة اليوس الموحد TR-YÖS"],
                fees: "مجاناً",
                applicationType: "أونلاين",
                ranking: 161,
                state: "سامسون",
                majors: [ "كلية الطب البشري" , "كلية الهندسة والعلوم الطبيعية" , "كلية الهندسة المعمارية والتصميم" ,"كلية العلوم الإنسانية والاجتماعية" ,"كلية الاهيات", "كلية العلوم السياسية", "كلية الطيران والملاحة الفضائية"]
            },
            {
                id: "univ_80",
                name: "جامعة سامسون (2)",
                name_tr: "Samsun Üniversitesi",
                location: "سامسون",
                startDate: "22.08.2025",
                endDate: "31.08.2025",
                resultDate: "03.09.2025",
                certificates: ["شهادة اليوس الموحد TR-YÖS"],
                fees: "مجاناً",
                applicationType: "أونلاين",
                ranking: 161,
                state: "سامسون",
                majors: [ "كلية الطب البشري" , "كلية الهندسة والعلوم الطبيعية" , "كلية الهندسة المعمارية والتصميم" ,"كلية العلوم الإنسانية والاجتماعية" ,"كلية الاهيات", "كلية العلوم السياسية", "كلية الطيران والملاحة الفضائية"]
            },
            {
                id: "univ_81",
                name: "جامعة  سيرت",
                name_tr: "Hacettepe Üniversitesi",
                location: "أنقرة",
                startDate: "10.05.2025",
                endDate: "05.06.2025",
                resultDate: "30.06.2025",
                certificates: ["شهادة الثانوية العامة","شهادة اليوس الموحد TR-YÖS", "شهادة السات", "شهادة الثانوية التركية"],
                fees: "350$",
                applicationType: "أونلاين",
                ranking: 7,
                state: "أنقرة",
                majors: ["كلية الفنون الجميلة والتصميم", "كلية العلوم والأداب", "كلية التربية", "كلية الاقتصاد والعلوم الإدارية", "كلية الشريعة", "كلية العلوم الصحية", "كلية الهندسة", "كلية الطب البشري", "كلية الطب البيطري", "كلية الزراعة",] 
            },
            {
                id: "univ_82",
                name: "جامعة سكاريا (1)",
                name_tr: "Sakarya Üniversitesi",
                location: "سكاريا",
                startDate: "02.05.2025",
                endDate: "06.07.2025",
                resultDate: "23.07.2025",
              certificates: ["شهادة الثانوية العامة", "شهادة اليوس الموحد TR-YÖS", "شهادة السات", "شهادة الثانوية التركية"],
                fees: "مجاناً",
                applicationType: "أونلاين",
                ranking: 31,
                state: "سكاريا",
                majors: [ "كلية التصميم والعمارة" , "كلية الفنون الجميلة" , "كلية العلوم الصحية" , "كلية الهندسة" , "كلية الشريعة" , "كلية الحقوق", "كلية طب الأسنان", "كلية الطب البشري"]
            },
            {
                id: "univ_83",
                name: "جامعة سكاريا (2)",
                name_tr: "Sakarya Üniversitesi",
                location: "سكاريا",
                startDate: "27.08.2025",
                endDate: "07.09.2025",
                resultDate: "24.09.2025",
              certificates: ["شهادة الثانوية العامة", "شهادة اليوس الموحد TR-YÖS", "شهادة السات", "شهادة الثانوية التركية"],
                fees: "مجاناً",
                applicationType: "أونلاين",
                ranking: 31,
                state: "سكاريا",
                majors: [ "كلية التصميم والعمارة" , "كلية الفنون الجميلة" , "كلية العلوم الصحية" , "كلية الهندسة" , "كلية الشريعة" , "كلية الحقوق", "كلية طب الأسنان", "كلية الطب البشري"]
            },
            {
                id: "univ_84",
                name: "جامعة سكاريا (3)",
                name_tr: "Sakarya Üniversitesi",
                location: "سكاريا",
                startDate: "15.10.2025",
                endDate: "27.10.2025",
                resultDate: "10.11.2025",
              certificates: ["شهادة الثانوية العامة", "شهادة اليوس الموحد TR-YÖS", "شهادة السات", "شهادة الثانوية التركية"],
                fees: "مجاناً",
                applicationType: "أونلاين",
                ranking: 31,
                state: "سكاريا",
                majors: [ "كلية التصميم والعمارة" , "كلية الفنون الجميلة" , "كلية العلوم الصحية" , "كلية الهندسة" , "كلية الشريعة" , "كلية الحقوق", "كلية طب الأسنان", "كلية الطب البشري"]
            },
            {
                id: "univ_85",
                name: "جامعة سليمان ديميرال",
                name_tr: "Gazi Üniversitesi",
                location: "أنقرة",
                startDate: "20.05.2025",
                endDate: "15.06.2025",
                resultDate: "10.07.2025",
                certificates: ["شهادة الثانوية العامة", "شهادة اليوس الموحد TR-YÖS", "شهادة السات", "شهادة الثانوية التركية"],
                fees: "200$",
                applicationType: "أونلاين",
                ranking: 14,
                state: "أنقرة",
                majors: ["كلية الصيدلة", "كلية طب الأسنان", "كلية الطب البشري", "كلية التربية", "كلية الفنون الجميلة", "كلية الحقوق", "كلية الاقتصاد والعلوم الإدارية", "كلية الشريعة", "كلية الاتصالات", "كلية العلوم الإنسانية والاجتماعية", "كلية الهندسة المعمارية", "كلية الهندسة والعلوم الطبيعية", "كلية العلوم الصحية", "كلية علوم الرياضة", "كلية التعليم الفني",]
            },
            {
                id: "univ_86",
                name: "جامعة  سيواس للعلوم التطبيقية",
                name_tr: "Marmara Üniversitesi",
                location: "إسطنبول",
                startDate: "05.06.2025",
                endDate: "30.06.2025",
                resultDate: "25.07.2025",
                certificates: ["شهادة الثانوية العامة", "شهادة اليوس الموحد TR-YÖS", "شهادة السات", "شهادة الثانوية التركية"],
                fees: "300$",
                applicationType: "أونلاين",
                ranking: 11,
                state: "إسطنبول",
                majors: ["كلية العلوم والتكنولوجيا الزراعية", "كلية الطيران والملاحة الفضائية", "كلية الهندسة والعلوم التطبيقية"]
            },
            {
                id: "univ_87",
                name: "جامعة سكاريا للعلوم التطبيقية (1)",
                name_tr: "Sakarya Uygulamalı Bilimler Üniversitesi",
                location: "سكاريا",
                startDate: "26.05.2025",
                endDate: "13.07.2025",
                resultDate: "25.07.2025",
                certificates: ["شهادة الثانوية العامة", "شهادة اليوس الموحد TR-YÖS", "شهادة السات", "شهادة الثانوية التركية"],
                fees: "مجاناً",
                applicationType: "أونلاين",
                ranking: 118,
                state: "سكاريا",
                majors: [  "كلية الزراعة" ,"كلية العلوم التطبيقية" , "كلية السياحة" , "كلية التكنولوجيا", "كلية علوم الرياضة", "كلية العلوم الصحية"]
            },
            {
                id: "univ_88",
                name: "جامعة سكاريا للعلوم التطبيقية (1)",
                name_tr: "Sakarya Uygulamalı Bilimler Üniversitesi",
                location: "سكاريا",
                startDate: "25.08.2025",
                endDate: "28.09.2025",
                resultDate: "10.10.2025",
                certificates: ["شهادة الثانوية العامة", "شهادة اليوس الموحد TR-YÖS", "شهادة السات", "شهادة الثانوية التركية"],
                fees: "مجاناً",
                applicationType: "أونلاين",
                ranking: 118,
                state: "سكاريا",
                majors: [  "كلية الزراعة" ,"كلية العلوم التطبيقية" , "كلية السياحة" , "كلية التكنولوجيا", "كلية علوم الرياضة", "كلية العلوم الصحية"]
            },
            {
                id: "univ_89",
                 name: "جامعة  سيواس جمهوريات",
                name_tr: "Uludağ Üniversitesi",
                location: "بورصة",
                startDate: "15.06.2025",
                endDate: "10.07.2025",
                resultDate: "05.08.2025",
                certificates: ["شهادة الثانوية العامة", "شهادة السات", "شهادة الثانوية التركية", "شهادة اليوس الموحد TR-YÖS"],
                fees: "150$",
                applicationType: "أونلاين",
                ranking: 20,
                state: "بورصة",
                majors: ["كلية الأداب", "كلية الصيدلة", "كلية طب الأسنان", "كلية التربية", "كلية العلوم", "كلية الحقوق", "كلية الاقتصاد والعلوم الإدارية", "كلية الشريعة", "كلية الاتصالات", "كلية الهندسة المعمارية والفنون الجميلة والتصميم", "كلية الهندسة", "كلية العلوم الصحية", "كلية علوم الرياضة", "كلية التعليم الفني", "كلية التكنولوجيا", "كلية الطب البشري", "كلية السياحة", "كلية الطب البيطري",]
            },
            {
                id: "univ_90",
                name: "جامعة سلجوق ",
                name_tr: "Çukurova Üniversitesi",
                location: "أضنة",
                startDate: "20.05.2025",
                endDate: "15.06.2025",
                resultDate: "10.07.2025",
                certificates: ["شهادة الثانوية العامة", "شهادة اليوس الموحد TR-YÖS", "شهادة السات", "شهادة الثانوية التركية"],
                fees: "200$",
                applicationType: "أونلاين",
                ranking: 22,
                state: "أضنة",
                majors: ["كلية إدارة الأعمال", "كلية الهندسة والعمارة", "كلية الاقتصاد والعلوم الإدارية", "كلية السياحة", "كلية طب الأسنان", "كلية الصيدلة", "كلية الأداب", "كلية التربية", "كلية العلوم ", "كلية الفنون الجميلة", "كلية التمريض", "كلية الحقوق", "كلية الشريعة", "كلية الاتصالات", "كلية الهندسة المعمارية والتصميم", "كلية العلوم الصحية", "كلية علوم الرياضة", "كلية التكنولوجيا", "كلية الطب البشري", "كلية السياحة", "كلية الطب البيطري", "كلية الزراعة",]
            },
            {
                id: "univ_91",
                name: "جامعة سينوب",
                name_tr: "Anadolu Üniversitesi",
                location: "إسكي شهير",
                startDate: "25.05.2025",
                endDate: "20.06.2025",
                resultDate: "15.07.2025",
                certificates: ["شهادة الثانوية العامة", "شهادة اليوس الموحد TR-YÖS", "شهادة السات", "شهادة الثانوية التركية"],
                fees: "100$",
                applicationType: "أونلاين",
                ranking: 25,
                state: "إسكي شهير",
                majors: ["كلية العلوم والأداب", "كلية التربية", "كلية الاقتصاد والعلوم الإدارية", "كلية الفنون الجميلة والتصميم", "كلية الشريعة", "كلية الهندسة والعمارة", "كلية العلوم الصحية", "كلية علوم الرياضة", "كلية المنتجات البحرية", "كليةالسياحة",]
            },
            {
                id: "univ_92",
                name: "جامعة  شرناق",
                name_tr: "Anadolu Üniversitesi",
                location: "إسكي شهير",
                startDate: "25.05.2025",
                endDate: "20.06.2025",
                resultDate: "15.07.2025",
                certificates: ["شهادة الثانوية العامة", "شهادة اليوس الموحد TR-YÖS", "شهادة السات", "شهادة الثانوية التركية"],
                fees: "100$",
                applicationType: "أونلاين",
                ranking: 25,
                state: "إسكي شهير",
                majors: ["كلية الاقتصاد والعلوم الإدارية", "كلية الهندسة", "كلية العلوم الصحية", "كلية الفنون الجميلة", "كلية الزراعة", "كلية الشريعة",]
            },
            {
                id: "univ_93",
                name: "جامعة طرابزون ",
                name_tr: "Anadolu Üniversitesi",
                location: "إسكي شهير",
                startDate: "25.05.2025",
                endDate: "20.06.2025",
                resultDate: "15.07.2025",
                certificates: ["شهادة الثانوية العامة", "شهادة اليوس الموحد TR-YÖS", "شهادة السات", "شهادة الثانوية التركية"],
                fees: "100$",
                applicationType: "أونلاين",
                ranking: 25,
                state: "إسكي شهير",
                majors: ["كلية الفنون الجميلة والتصميم", "كلية التربية", "كلية علوم الحاسوب والمعلوماتية", "كلية الحقوق", "كلية الاقتصاد والعلوم الإدارية", "كلية العلوم السياسية", "كلية الشريعة", "كلية الاتصالات", "كلية علوم الرياضة", ]
            },
            {
                id: "univ_94",
                name: "جامعة طرسوس",
                name_tr: "Tarsus Üniversitesi",
                location: "مرسين",
                startDate: "19.07.2025",
                endDate: "25.07.2025",
                resultDate: "01.08.2025",
                certificates: [ "شهادة الثانوية العامة" ,"شهادة اليوس الموحد TR-YÖS", "شهادة السات"],
                fees: "مجاناً",
                applicationType: "أونلاين",
                ranking: 105,
                state: "مرسين",
                majors: [  "كلية العلوم التطبيقية" ,"كلية التكنولوجيا" , "كلية العلوم الصحية" , "كلية الهندسة" , "كلية العلوم الإنسانية والاجتماعية", "كلية الاقتصاد والعلوم الإدارية", "كلية الطيران والملاحة الفضائية"]
            },
            {
                id: "univ_95",
                name: "جامعة عبد الله غول",
                name_tr: "Abdullah Gül Üniversitesi",
                location: "قيصري",
                startDate: "27.01.2025",
                endDate: "08.08.2025",
                resultDate: "",
                certificates: ["شهادة اليوس الموحد TR-YÖS", "شهادة السات"],
                fees: "مجاناً",
                applicationType: "أونلاين",
                ranking: 50,
                state: "قيصري",
                majors: [  "كلية العلوم الإدارية" , "كلية الحياة والعلوم الطبيعية" ,"كلية العلوم الإنسانية والاجتماعية" ,"كلية العلوم التربوية", "كلية العمارة", "كلية الهندسة"]
            },
            {
                id: "univ_96",
                name: "جامعة إسكي شيهير عثمان غازي",
                name_tr: "Eskişehir Osmangazi Üniversitesi",
                location: "إسكي شهير",
                startDate: "09.08.2025",
                endDate: "12.08.2025",
                resultDate: "22.08.2025",
                certificates: [ "شهادة الثانوية التركية" , "شهادة الثانوية العامة" ,"شهادة اليوس الموحد TR-YÖS", "شهادة السات"],
                fees: "مجاناً",
                applicationType: "أونلاين",
                ranking: 30,
                state: "إسكي شهير",
                majors: [  "كلية الزراعة" , "كلية السياحة" ,"كلية الفنون والتصميم" , "كلية العلوم الإنسانية والاجتماعية" ,"كلية الشريعة" ,"كلية الاقتصاد والعلوم الإدارية" ,  "كلية الحقوق" , "كلية العلوم" , "كلية التربية" ,"كلية العلوم الصحية" ,"كلية الهندسة والعمارة", "كلية طب الأسنان", "كلية الطب البشري"]
            },
            {
                id: "univ_97",
                name: "جامعة عدنان مندريس (1)",
                name_tr: "Adnan Menderes Üniversitesi",
                location: "أيدن",
                startDate: "23.06.2025",
                endDate: "08.07.2025",
                resultDate: "28.07.2025",
                certificates: ["شهادة اليوس الموحد TR-YÖS"],
                fees: "مجاناً",
                applicationType: "أونلاين",
                ranking: 59,
                state: "أيدن",
                majors: ["كلية التمريض", "كلية طب الأسنان", "كلية الطب البشري", "كلية العلوم والأداب", "كلية الهندسة", "كلية العلوم الصحية", "كلية الشريعة", "كلية الاقتصاد والعلوم الإدارية", "كلية السياحة", "كلية الطب البيطري", "كلية الزراعة", "كلية التربية", "كلية علوم الرياضة", "كلية الاتصالات"]
            },
            {
                id: "univ_98",
                name: "جامعة عدنان مندريس (2)",
                name_tr: "Adnan Menderes Üniversitesi",
                location: "أيدن",
                startDate: "22.08.2025",
                endDate: "28.08.2025",
                resultDate: "11.09.2025",
                certificates: ["شهادة اليوس الموحد TR-YÖS"],
                fees: "مجاناً",
                applicationType: "أونلاين",
                ranking: 59,
                state: "أيدن",
                majors: ["كلية التمريض", "كلية طب الأسنان", "كلية الطب البشري", "كلية العلوم والأداب", "كلية الهندسة", "كلية العلوم الصحية", "كلية الشريعة", "كلية الاقتصاد والعلوم الإدارية", "كلية السياحة", "كلية الطب البيطري", "كلية الزراعة", "كلية التربية", "كلية علوم الرياضة", "كلية الاتصالات"]
            },
            {
                id: "univ_99",
                name: "جامعة غازي عنتاب للعلوم الإسلامية والتكنولوجيا",
                name_tr: "Ege Üniversitesi",
                location: "إزمير",
                startDate: "15.06.2025",
                endDate: "10.07.2025",
                resultDate: "01.08.2025",
                certificates: ["شهادة الثانوية العامة", "شهادة السات", "شهادة الثانوية التركية" , "شهادة اليوس الموحد TR-YÖS"],
                fees: "250$",
                applicationType: "أونلاين",
                ranking: 12,
                state: "إزمير",
                majors: ["كلية الهندسة والعلوم الطبيعية", "كلية طب الأسنان", "كلية الطب البشري", " كلية العلوم الصحية", "كلية العلوم الإسلامية", "كلية الاقتصاد والعلوم الإدارية والاجتماعية", "كلية الحقوق", "كلية الفنون الجميلة والتصيم والعمارة"]
            },
            {
                id: "univ_100",
                name: "جامعة غبزة تكنيك",
                name_tr: "Gebze Teknik Üniversitesi",
                location: "كوجالي",
                startDate: "01.03.2025",
                endDate: "15.08.2025",
                resultDate: "",
                certificates: ["شهادة اليوس الموحد TR-YÖS", "شهادة السات"],
                fees: "مجاناً",
                applicationType: "أونلاين",
                ranking: 12,
                state: "كوجالي",
                majors: [ "كلية الطيران والملاحة الفضائية" ,"كلية إدارة الأعمال" ,"كلية الهندسة المعمارية", "كلية العلوم الأساسية", "كلية الهندسة"]
            },
            {
                id: "univ_101",
                name: "جامعة غازي عنتاب",
                name_tr: "Marmara Üniversitesi",
                location: "إسطنبول",
                startDate: "05.06.2025",
                endDate: "30.06.2025",
                resultDate: "25.07.2025",
                certificates: ["شهادة اليوس الموحد TR-YÖS"],
                fees: "300$",
                applicationType: "أونلاين",
                ranking: 11,
                state: "إسطنبول",
                majors: ["كلية الهندسة المعمارية", "كلية طب الأسنان", "كلية الطب البشري", "كلية الهندسة", "كلية العلوم والأداب", "كلية الاقتصاد والعلوم الإدارية", "كلية التربية", "كلية الفنون الجميلة", "كلية العلوم الصحية", "كلية الحقوق", "كلية الشريعة", "كلية الاتصالات", "كلية الطيران والملاحة الفضائية", "كلية السياحة", "كلية علوم الرياضة"]
            },
            {
                id: "univ_102",
                name: "جامعة غلطة سراي",
                name_tr: "Galatasaray Üniversitesi",
                location: "إسطنبول",
                startDate: "30.06.2025",
                endDate: "22.08.2025",
                resultDate: "29.08.2025",
                certificates: [  "شهادة الثانوية العامة" , "شهادة الثانوية التركية" ,"شهادة السات" ,"شهادة اليوس الموحد TR-YÖS"],
                fees: "مجاناً",
                applicationType: "أونلاين",
                ranking: 119,
                state: "إسطنبول",
                majors: [  "كلية العلوم والأداب" , "كلية الاتصالات" ,"كلية الحقوق", "كلية الاقتصاد والعلوم الإدارية", "كلية الهندسة والتكنولوجيا"]
            },
            {
                id: "univ_103",
                name: "جامعة غوموش  هانة",
                name_tr: "Uludağ Üniversitesi",
                location: "بورصة",
                startDate: "15.06.2025",
                endDate: "10.07.2025",
                resultDate: "05.08.2025",
                certificates: ["شهادة الثانوية العامة", "شهادة اليوس الموحد TR-YÖS", "شهادة الثانوية التركية"],
                fees: "150$",
                applicationType: "أونلاين",
                ranking: 20,
                state: "بورصة",
                majors: ["كلية الاتصالات", "كلية الاقتصاد والعلوم الإدارية", "كلية الهندسة والعلوم الطبيعية", "كلية الشريعة", "كلية الأداب", "كلية السياحة", "كلية العلوم الصحية"]
            },
            {
                id: "univ_104",
                name: "جامعة غازي",
                name_tr: "Çukurova Üniversitesi",
                location: "أضنة",
                startDate: "20.05.2025",
                endDate: "15.06.2025",
                resultDate: "10.07.2025",
                certificates: ["شهادة الثانوية العامة", "شهادة اليوس الموحد TR-YÖS"],
                fees: "200$",
                applicationType: "أونلاين",
                ranking: 22,
                state: "أضنة",
                majors: ["كلية الصيدلة", "كلية طب الأسنان", "كلية الطب البشري", "كلية التمريض", "كلية الهندسة المعمارية", "كلية الهندسة", "كلية العلوم", "كلية التربية", "كلية العلوم الصحية", "كلية علوم الرياضة", "كلية علوم التكنولوجيا",  "كلية العلوم التطبيقية"]
            },
            {
                id: "univ_105",
                name: "جامعة غيرسون",
                name_tr: "Giresun Üniversitesi",
                location: "غيرسون",
                startDate: "30.06.2025",
                endDate: "11.07.2025",
                resultDate: "18.07.2025",
                certificates: ["شهادة الثانوية العامة", "شهادة اليوس الموحد TR-YÖS", "شهادة السات"],
                fees: "مجاناً",
                applicationType: "أونلاين",
                ranking: 104,
                state: "غيرسون",
                majors: [ "كلية السياحة" , "كلية الاتصالات" , "كلية علوم الرياضة" , "كلية الشريعة" , "كليةالاقتصاد والعلوم الإدارية" , "كلية الفنون الجميلة" , "كلية العلوم والأداب" , "كلية التربية" , "كلية البحرية" , "كلية العلوم الصحية" , "كلية الهندسة", "كلية طب الأسنان", "كلية الطب البشري"]
            },
            {
                id: "univ_106",
                name:"جامعة فان يوزونجويل",
                name_tr: "Van Yüzüncü Yıl Üniversitesi",
                location: "فان",
                startDate: "19.08.2025",
                endDate: "02.09.2025",
                resultDate: "15.09.2025",
                certificates: ["شهادة اليوس الموحد TR-YÖS"],
                fees: "مجاناً",
                applicationType: "أونلاين",
                ranking: 39,
                state: "فان",
                majors: [ "كلية الزراعة" , "كلية السياحة" , "كلية مصايد الأسماك" , "كلية العلوم الصحية" , "كلية الموسيقى والفنون المسرحية" ,"كلية الشريعة" , "كلية الفنون الجميلة" , "كلية العلوم" , "كلية الاقتصاد والعلوم الإدارية" , "كلية التربية" , "كلية الأداب" , "كلية البحرية" , "كلية الهندسة" ,"كلية الهندسة والعمارة والتصميم" , "كلية الصيدلة" , "كلية طب الأسنان", "كلية الطب البيطري", "كلية الطب البشري"]
            },
            {
                id: "univ_107",
                name: "جامعة قونيا التقنية",
                name_tr: "Anadolu Üniversitesi",
                location: "إسكي شهير",
                startDate: "25.05.2025",
                endDate: "20.06.2025",
                resultDate: "15.07.2025",
                certificates: ["شهادة اليوس الموحد TR-YÖS", "شهادة السات"],
                fees: "100$",
                applicationType: "أونلاين",
                ranking: 25,
                state: "إسكي شهير",
                majors: ["كلية العلوم التجارية", "كلية الهندسة المعمارية والتصميم", "كلية الهندسة والعلوم الطبيعية",  "كلية العلوم والتكنولوجيا الزراعية"]
            },
            {
                id: "univ_108",
                name: "جامعة قيصري",
                name_tr: "Erciyes Üniversitesi",
                location: "قيصري",
                startDate: "10.06.2025",
                endDate: "05.07.2025",
                resultDate: "30.07.2025",
                certificates: ["شهادة الثانوية العامة", "شهادة اليوس الموحد TR-YÖS", "شهادة السات", "شهادة الثانوية التركية"],
                fees: "150$",
                applicationType: "أونلاين",
                ranking: 30,
                state: "قيصري",
                majors: ["كلية العلوم الإسلامية", "كلية العلوم الصحية", "كلية الهندسة والعمارة والتصميم",  "كلية العلوم الاجتماعية والإنسانية",  "كلية العلوم التطبيقية"]
            },
            {
                id: "univ_109",
                name:  "جامعة كارابوك",
                name_tr: "Karabük Üniversitesi",
                location: "كارابوك",
                startDate: "19.06.2025",
                endDate: "30.11.2025",
                resultDate: "بشكل دوري",
                certificates: ["شهادة اليوس الموحد TR-YÖS" , "شهادة الثانوية العامة", "شهادة الثانوية التركية"],
                fees: "مجاناً",
                applicationType: "أونلاين ثم يدوي",
                ranking: 60,
                state: "كارابوك",
                majors: [ "كلية الاتصالات" , "كلية التكنولوجيا" , "كلية التعليم الفني" , "كلية العلوم الصحية" , "كلية السياحة" , "كلية الفنون الجميلة والتصميم" , "كلية الغابات" , "كلية الهندسة" , "كلية العلوم الإسلامية" , "كلية الاقتصاد والعلوم الإدارية" , "كلية العلوم" , "كلية الأداب" ,"كلية الهندسة المعمارية", "كلية طب الأسنان", "كلية الطب البشري"]
            },
            {
                id: "univ_110",
                name:  "جامعة كاستامونو (1)",
                name_tr: "Kastamonu Üniversitesi",
                location: "كاستامونو",
                startDate: "30.05.2025",
                endDate: "18.06.2025",
                resultDate: "20.06.2025",
                certificates: ["شهادة الثانوية العامة", "شهادة اليوس الموحد TR-YÖS", "شهادة السات", "شهادة الثانوية التركية"],
                fees: "مجاناً",
                applicationType: "أونلاين ثم يدوي",
                ranking: 81,
                state: "كاستامونو",
                majors: [ "كلية إدارة الطيران" , "كلية الإرشاد السياحي" , "كلية الاقتصاد  والعلوم الإدارية" , "كلية الأداب" , "كلية التربية" , "كلية الأداب" , "الهندسة" ,"كلية علم النفس", "كلية الطب البيطري", "كلية الطب البشري"]
            },
            {
                id: "univ_111",
                name:  "جامعة كاستامونو (2)",
                name_tr: "Kastamonu Üniversitesi",
                location: "كاستامونو",
                startDate: "30.06.2025",
                endDate: "09.07.2025",
                resultDate: "14.07.2025",
                certificates: ["شهادة الثانوية العامة", "شهادة اليوس الموحد TR-YÖS", "شهادة السات", "شهادة الثانوية التركية"],
                fees: "مجاناً",
                applicationType: "أونلاين ثم يدوي",
                ranking: 81,
                state: "كاستامونو",
                majors: [ "كلية إدارة الطيران" , "كلية الإرشاد السياحي" , "كلية الاقتصاد  والعلوم الإدارية" , "كلية الأداب" , "كلية التربية" , "كلية الأداب" , "الهندسة" ,"كلية علم النفس", "كلية الطب البيطري", "كلية الطب البشري"]
            },
            {
                id: "univ_112",
                name:  "جامعة كاستامونو (3)",
                name_tr: "Kastamonu Üniversitesi",
                location: "كاستامونو",
                startDate: "29.07.2025",
                endDate: "07.08.2025",
                resultDate: "13.08.2025",
                certificates: ["شهادة الثانوية العامة", "شهادة اليوس الموحد TR-YÖS", "شهادة السات", "شهادة الثانوية التركية"],
                fees: "مجاناً",
                applicationType: "أونلاين ثم يدوي",
                ranking: 81,
                state: "كاستامونو",
                majors: [ "كلية إدارة الطيران" , "كلية الإرشاد السياحي" , "كلية الاقتصاد  والعلوم الإدارية" , "كلية الأداب" , "كلية التربية" , "كلية الأداب" , "الهندسة" ,"كلية علم النفس", "كلية الطب البيطري", "كلية الطب البشري"]
            },
            {
                id: "univ_113",
                name:  "جامعة كوتاهيا دملوبينار (1)",
                name_tr: "Kütahya Dumlupınar Üniversitesi",
                location: "كوتاهيا",
                startDate: "09.04.2025",
                endDate: "02.05.2025",
                resultDate: "13.05.2025",
                certificates: ["شهادة الثانوية العامة", "شهادة اليوس الموحد TR-YÖS", "شهادة السات", "شهادة الثانوية التركية"],
                fees: "1500TL",
                applicationType: "أونلاين",
                ranking: 121,
                state: "كوتاهيا",
                majors: [  "كلية التكنولوجيا" ,"كلية علوم الرياضة" , "كلية الهندسة" ,"كلية العمارة" , "كلية العلوم التطبيقية" , "كلية العلوم الإسلامية" , "كلية الاقتصاد والعلوم الإدارية" ,"كلية الفنون الجميلة", "كلية العلوم والأداب", "كلية التربية"]
            },
            {
                id: "univ_114",
                name:  "جامعة كوتاهيا دملوبينار (2)",
                name_tr: "Kütahya Dumlupınar Üniversitesi",
                location: "كوتاهيا",
                startDate: "22.05.2025",
                endDate: "23.06.2025",
                resultDate: "01.07.2025",
                certificates: ["شهادة الثانوية العامة", "شهادة اليوس الموحد TR-YÖS", "شهادة السات", "شهادة الثانوية التركية"],
                fees: "1500TL",
                applicationType: "أونلاين",
                ranking: 121,
                state: "كوتاهيا",
                majors: [  "كلية التكنولوجيا" ,"كلية علوم الرياضة" , "كلية الهندسة" ,"كلية العمارة" , "كلية العلوم التطبيقية" , "كلية العلوم الإسلامية" , "كلية الاقتصاد والعلوم الإدارية" ,"كلية الفنون الجميلة", "كلية العلوم والأداب", "كلية التربية"]
            },
            {
                id: "univ_115",
                name:  "جامعة كوتاهيا دملوبينار (3)",
                name_tr: "Kütahya Dumlupınar Üniversitesi",
                location: "كوتاهيا",
                startDate: "09.07.2025",
                endDate: "12.08.2025",
                resultDate: "22.08.2025",
                certificates: ["شهادة الثانوية العامة", "شهادة اليوس الموحد TR-YÖS", "شهادة السات", "شهادة الثانوية التركية"],
                fees: "1500TL",
                applicationType: "أونلاين",
                ranking: 121,
                state: "كوتاهيا",
                majors: [  "كلية التكنولوجيا" ,"كلية علوم الرياضة" , "كلية الهندسة" ,"كلية العمارة" , "كلية العلوم التطبيقية" , "كلية العلوم الإسلامية" , "كلية الاقتصاد والعلوم الإدارية" ,"كلية الفنون الجميلة", "كلية العلوم والأداب", "كلية التربية"]
            },
            {
                id: "univ_116",
                name:  "جامعة كوتاهيا دملوبينار (4)",
                name_tr: "Kütahya Dumlupınar Üniversitesi",
                location: "كوتاهيا",
                startDate: "29.08.2025",
                endDate: "29.09.2025",
                resultDate: "07.10.2025",
                certificates: ["شهادة الثانوية العامة", "شهادة اليوس الموحد TR-YÖS", "شهادة السات", "شهادة الثانوية التركية"],
                fees: "1500TL",
                applicationType: "أونلاين",
                ranking: 121,
                state: "كوتاهيا",
                majors: [  "كلية التكنولوجيا" ,"كلية علوم الرياضة" , "كلية الهندسة" ,"كلية العمارة" , "كلية العلوم التطبيقية" , "كلية العلوم الإسلامية" , "كلية الاقتصاد والعلوم الإدارية" ,"كلية الفنون الجميلة", "كلية العلوم والأداب", "كلية التربية"]
            },
            {
                id: "univ_117",
                name:  "جامعة كارادينيز",
                name_tr: "Karadeniz Teknik Üniversitesi",
                location: "طرابزون",
                startDate: "21.07.2025",
                endDate: "31.07.2025",
                resultDate: "04.08.2025",
                certificates: ["شهادة الثانوية العامة", "شهادة اليوس الموحد TR-YÖS", "شهادة السات", "شهادة الثانوية التركية"],
                fees: "1250TL",
                applicationType: "أونلاين",
                ranking: 22,
                state: "طرابزون",
                majors: [  "كلية علوم البحار" ,"كلية العلوم الصحية" , "كلية الغابات" ,"كلية التكنولوجيا" , "كلية الهندسة" ,"كلية الهندسة المعمارية" , "كلية الاقتصاد والعلوم الإدارية" ,"كلية العلوم" , "كلية الأداب" ,"كلية الصيدلة", "كلية طب الأسنان", "كلية الطب البشري"]
            },
            {
                id: "univ_118",
                name: "جامعة كوجالي (1)",
                name_tr: "Kocaeli Üniversitesi",
                location: "كوجالي",
                startDate: "28.07.2025",
                endDate: "03.08.2025",
                resultDate: "08.08.2025",
                certificates: ["شهادة الثانوية العامة", "شهادة اليوس الموحد TR-YÖS", "شهادة السات", "شهادة الثانوية التركية"],
                fees: "مجاناً",
                applicationType: "أونلاين",
                ranking: 34,
                state: "كوجالي",
                majors: [ "كلية الحقوق" , "كلية التمريض" ,"كلية الأداب" , "كلية التربية" ,"كلية إدارة الطيران" , "كلية الاقتصاد والعلوم الإدارية" , "كلية الهندسة", "كلية طب الأسنان", "كلية الطب البشري"]
            },
            {
                id: "univ_119",
                name: "جامعة كوجالي (2)",
                name_tr: "Kocaeli Üniversitesi",
                location: "كوجالي",
                startDate: "01.09.2025",
                endDate: "07.09.2025",
                resultDate: "12.09.2025",
                certificates: ["شهادة الثانوية العامة", "شهادة اليوس الموحد TR-YÖS", "شهادة السات", "شهادة الثانوية التركية"],
                fees: "مجاناً",
                applicationType: "أونلاين",
                ranking: 34,
                state: "كوجالي",
                majors: [ "كلية الحقوق" , "كلية التمريض" ,"كلية الأداب" , "كلية التربية" ,"كلية إدارة الطيران" , "كلية الاقتصاد والعلوم الإدارية" , "كلية الهندسة", "كلية طب الأسنان", "كلية الطب البشري"]
            },
            {
                id: "univ_120",
                name: "جامعة كهرمان مرعش استقلال",
                name_tr: "Kahramanmaraş İstiklal Üniversitesi",
                location: "كهرمان مرعش",
                startDate: "23.06.2025",
                endDate: "31.07.2025",
                resultDate: "",
                certificates: ["شهادة الثانوية العامة", "شهادة اليوس الموحد TR-YÖS", "شهادة السات", "شهادة الثانوية التركية"],
                fees: "مجاناً",
                applicationType: "أونلاين",
                ranking: 191,
                state: "كهرمان مرعش",
                majors: [ "كلية السياحة" , "كلية العلوم الصحية" , "كلية الهندسة والعمارة والتصميم" , "كلية العلوم الإسلامية" ,"كلية العلوم الإنسانية والاجتماعية", "كلية الاتصالات", "كلية الهندسة"]
            },
            {
                id: "univ_121",
                name: "جامعة كهرمان مرعش سوتشو إمام",
                name_tr: "Kahramanmaraş Sütçü imam Üniversitesi",
                location: "كهرمان مرعش",
                startDate: "21.07.2025",
                endDate: "01.08.2025",
                resultDate: "13.08.2025",
                certificates: ["شهادة اليوس الموحد TR-YÖS"],
                fees: "مجاناً",
                applicationType: "أونلاين",
                ranking: 68,
                state: "كهرمان مرعش",
                majors: [ "كلية الزراعة" , "كلية علوم الرياضة" ,"كلية العلوم الصحية" , "كلية الغابات" , "كلية الهندسة والعمارة" , "كلية الشريعة" ,  "كلية الاقتصاد والعلوم الإدارية" , "كلية الفنون الجميلة" , "كلية العلوم الإنسانية والاجتماعية" , "كلية العلوم" ,"كلية التربية", "كلية طب الأسنان", "كلية الطب البشري"]
            },
            {
                id: "univ_122",
                name: "جامعة كركلارلة (1)",
                name_tr: "Kırklareli Üniversitesi",
                location: "كركلارلة",
                startDate: "19.05.2025",
                endDate: "15.06.2025",
                resultDate: "27.06.2025",
                certificates: ["شهادة الثانوية العامة","شهادة اليوس الموحد TR-YÖS", "شهادة الثانوية التركية"],
                fees: "مجاناً",
                applicationType: "أونلاين",
                ranking: 153,
                state: "كركلارلة",
                majors: [  "كلية العلوم التطبيقية" , "كلية الشريعة" , "كلية التكنولوجيا" , "كلية العلوم الصحية" ,"كلية الأداب والعلوم" , "كلية الحقوق" ,"كلية السياحة" , "كلية العمارة" , "كلية الاقتصاد والعلوم الإدارية", "كلية الهندسة", "كلية الطب البشري"]
            },
            {
                id: "univ_123",
                name: "جامعة كركلارلة (1)",
                name_tr: "Kırklareli Üniversitesi",
                location: "كركلارلة",
                startDate: "29.07.2025",
                endDate: "10.08.2025",
                resultDate: "15.08.2025",
                certificates: ["شهادة الثانوية العامة","شهادة اليوس الموحد TR-YÖS", "شهادة الثانوية التركية"],
                fees: "مجاناً",
                applicationType: "أونلاين",
                ranking: 153,
                state: "كركلارلة",
                majors: [  "كلية العلوم التطبيقية" , "كلية الشريعة" , "كلية التكنولوجيا" , "كلية العلوم الصحية" ,"كلية الأداب والعلوم" , "كلية الحقوق" ,"كلية السياحة" , "كلية العمارة" , "كلية الاقتصاد والعلوم الإدارية", "كلية الهندسة", "كلية الطب البشري"]
            },
            {
                id: "univ_124",
                name: "جامعة كركلارلة (3)",
                name_tr: "Kırklareli Üniversitesi",
                location: "كركلارلة",
                startDate: "16.09.2025",
                endDate: "28.09.2025",
                resultDate: "03.10.2025",
                certificates: ["شهادة الثانوية العامة","شهادة اليوس الموحد TR-YÖS", "شهادة الثانوية التركية"],
                fees: "مجاناً",
                applicationType: "أونلاين",
                ranking: 153,
                state: "كركلارلة",
                majors: [  "كلية العلوم التطبيقية" , "كلية الشريعة" , "كلية التكنولوجيا" , "كلية العلوم الصحية" ,"كلية الأداب والعلوم" , "كلية الحقوق" ,"كلية السياحة" , "كلية العمارة" , "كلية الاقتصاد والعلوم الإدارية", "كلية الهندسة", "كلية الطب البشري"]
            },
            {
                id: "univ_125",
                name: "جامعة كارامان أوغلو محمد بيه",
                name_tr: "Karamanoğlu Mehmetbey Üniversitesi",
                location: "كارامان",
                startDate: "30.06.2025",
                endDate: "30.07.2025",
                resultDate: "08.08.2025",
                certificates: ["شهادة اليوس الموحد TR-YÖS"],
                fees: "مجاناً",
                applicationType: "أونلاين",
                ranking: 72,
                state: "كارامان",
                majors: [ "كلية علوم الرياضة" , "كلية الفنون الجميلة والتصميم والعمارة" , "كلية العلوم الصحية" , "كلية العلوم" , "كلية العلوم الإسلامية" ,"كلية الاقتصاد والعلوم الإدارية" ,"كلية التربية" ,"كلية الأداب" , "كلية الهندسة", "كلية طب الأسنان", "كلية الطب البشري"]
            },
            {
                id: "univ_126",
                name: "جامعة أناضولو",
                name_tr: "Anadolu Üniversitesi",
                location: "إسكي شهير",
                startDate: "25.05.2025",
                endDate: "20.06.2025",
                resultDate: "15.07.2025",
                certificates: ["شهادة الثانوية العامة", "شهادة اليوس الموحد TR-YÖS", "شهادة الثانوية التركية"],
                fees: "100$",
                applicationType: "أونلاين",
                ranking: 25,
                state: "إسكي شهير",
                majors: ["كلية السياحة", "كلية الحقوق", "كلية الصيدلة",  "كلية التربية",  "كلية الاقتصاد والعلوم الإدارية",  "كلية العلوم الصحية",  "كلية الأداب",  "كلية علوم الاتصالات",  "كلية الفنون الجميلة والتصميم",  "معهد الموسيقى العالي"]
            },
            {
                id: "univ_127",
                name: "جامعة كركالة",
                name_tr: "Kırıkkale Üniversitesi",
                location: "كركالة",
                startDate: "28.08.2025",
                endDate: "01.09.2025",
                resultDate: "09.09.2025",
                certificates: ["شهادة اليوس الموحد TR-YÖS"],
                fees: "مجاناً",
                applicationType: "أونلاين",
                ranking: 79,
                state: "كركالة",
                majors: [  "كلية علوم الرياضة" ,"كلية العلوم الإسلامية" , "كلية الفنون الجميلة" , "كلية العلوم الصحية" , "كلية الأداب والعلوم" , "كلية الحقوق" , "كلية التعليم" , "كلية الاقتصاد والعلوم الإدارية" , "كلية العمارة والهندسة" , "كلية الطب البيطري", "كلية طب الأسنان", "كلية الطب البشري"]
            },
            {
                id: "univ_128",
                name: "جامعة  كوتاهيا للعلوم الصحية",
                name_tr: "Anadolu Üniversitesi",
                location: "إسكي شهير",
                startDate: "25.05.2025",
                endDate: "20.06.2025",
                resultDate: "15.07.2025",
                certificates: ["شهادة الثانوية العامة", "شهادة اليوس الموحد TR-YÖS", "شهادة السات", "شهادة الثانوية التركية"],
                fees: "100$",
                applicationType: "أونلاين",
                ranking: 25,
                state: "إسكي شهير",
                majors: ["كلية الهندسة", "كلية طب الأسنان", "كلية الطب البشري",  "كلية العلوم الصحية"]
            },
            {
                id: "univ_129",
                name: "جامعة   كلس 7 اراليك",
                name_tr: "Erciyes Üniversitesi",
                location: "قيصري",
                startDate: "10.06.2025",
                endDate: "05.07.2025",
                resultDate: "30.07.2025",
                certificates: ["شهادة الثانوية العامة", "شهادة اليوس الموحد TR-YÖS", "شهادة السات", "شهادة الثانوية التركية"],
                fees: "150$",
                applicationType: "أونلاين",
                ranking: 30,
                state: "قيصري",
                majors: ["كلية الاقتصاد والعلوم الإدارية", "كلية العلوم الإنسانية والاجتماعية", "كلية الهندسة والعمارة",  "كلية التربية",  "كلية الشريعة",  "كلية الزراعة",  "كلية العلوم الصحية",  "كلية العلوم التطبيقية",  "كلية الفنون الجميلة والتصميم",  "كلية العلوم",  "كلية الاتصالات"]
            },
            {
                id: "univ_130",
                name: "جامعة  كافكاس",
                name_tr: "Kafkas Üniversitesi",
                location: "قارص",
                startDate: "01.07.2025",
                endDate: "14.07.2025",
                resultDate: "21.07.2025",
                certificates: ["شهادة الثانوية العامة", "شهادة السات", "شهادة الثانوية التركية", "شهادة اليوس الموحد TR-YÖS"],
                fees: "مجاناً",
                applicationType: "أونلاين",
                ranking: 110,
                state: "كافكاس",
                majors: [ "كلية علوم الرياضة" , "كلية السياحة" , "كلية الشريعة" , "كلية الاقتصاد والعلوم الإدارية" , "كلية الفنون الجميلة" , "كلية العلوم والأداب" , "كلية التربية" , "كلية العلوم الصحية" , "كليةالهندسة والعمارة" , "كلية الطب البيطري", "كلية طب الأسنان", "كلية الطب البشري"]
            },
            {
                id: "univ_131",
                name: "جامعة كيرشيهير اهي افران",
                name_tr: "Kırşehir Ahi Evren Üniversitesi",
                location: "كيرشهير",
                startDate: "01.07.2025",
                endDate: "14.07.2025",
                resultDate: "18.08.2025",
                certificates: ["شهادة الثانوية العامة", "شهادة اليوس الموحد TR-YÖS", "شهادة الثانوية التركية"],
                fees: "50$",
                applicationType: "أونلاين",
                ranking: 100,
                state: "كيرشهير",
                majors: [ "كلية الزراعة" , "كليةالعلوم الصحية" , "كلية الأداب والعلوم" , "كلية التربية" , "كلية الاقتصاد والعلوم الإدارية" , "كلية الفنون الجميلة" , "كلية العمارة والهندسة", "كلية العلوم الإسلامية", "كلية الطب البشري"]
            },
            {
                id: "univ_132",
                name: "جامعة مرمرة",
                name_tr: "Marmara Üniversitesi",
                location: "إسطنبول",
                startDate: "03.09.2025",
                endDate: "05.09.2025",
                resultDate: "12.09.2025",
                certificates: ["شهادة اليوس الموحد TR-YÖS"],
                fees: "مجاناً",
                applicationType: "أونلاين",
                ranking: 13,
                state: "إسطنبول",
                majors: [ "كلية العلوم التطبيقية" , "كلية التعليم الفني" , "كلية العلوم الصحية" , "كلية الشريعة" , "كلية الفنون الجميلة" , "كلية الصيدلة" ,"كلية الطب البشري" , "كلية علوم الرياضة" , "كلية الهندسة" , "كلية العلوم الإنسانية والاجتماعية" ,"كلية الاقتصاد والعلوم الإدارية" , "كلية العلوم المالية" ,"كلية طب الأسنان" , "كلية التكنولوجيا" , "كلية العلوم السياسية" , "كلية الهندسة المعمارية والتصميم" , "كلية الاتصالات" , "كلية الحقوق", "كلية العلوم", "كلية التربية"]
            },
            {
                id: "univ_133",
                name: "جامعة مرسين (1)",
                name_tr: "Mersin Üniversitesi",
                location: "مرسين",
                startDate: "16.06.2025",
                endDate: "02.07.2025",
                resultDate: "11.07.2025",
                certificates: ["شهادة الثانوية العامة", "شهادة اليوس الموحد TR-YÖS", "شهادة الثانوية التركية"],
                fees: "3250TL",
                applicationType: "أونلاين",
                ranking: 43,
                state: "مرسين",
                majors: [ "كلية السياحة" , "كلية البحرية" , "كلية منتجات المياه" , "كلية العلوم الرياضية" , "كلية الهندسة" , "كلية الهندسة المعمارية" ,"كلية الاتصالات" , "كلية الشريعة" , "كلية الاقتصاد والعلوم الإدارية" , "كلية التمريض" ,  "كلية الفنون الجميلة" ,"كلية العلوم الإنسانية والاجتماعية" , "كلية العلوم" , "كلية التربية" , "كلية الصيدلة", "كلية طب الأسنان", "كلية الطب البشري"]
            },
            {
                id: "univ_134",
                name: "جامعة مرسين (2)",
                name_tr: "Mersin Üniversitesi",
                location: "مرسين",
                startDate: "30.07.2025",
                endDate: "06.08.2025",
                resultDate: "11.08.2025",
                certificates: ["شهادة الثانوية العامة", "شهادة اليوس الموحد TR-YÖS", "شهادة الثانوية التركية"],
                fees: "3250TL",
                applicationType: "أونلاين",
                ranking: 43,
                state: "مرسين",
                majors: [ "كلية السياحة" , "كلية البحرية" , "كلية منتجات المياه" , "كلية العلوم الرياضية" , "كلية الهندسة" , "كلية الهندسة المعمارية" ,"كلية الاتصالات" , "كلية الشريعة" , "كلية الاقتصاد والعلوم الإدارية" , "كلية التمريض" ,  "كلية الفنون الجميلة" ,"كلية العلوم الإنسانية والاجتماعية" , "كلية العلوم" , "كلية التربية" , "كلية الصيدلة", "كلية طب الأسنان", "كلية الطب البشري"]
            },
            {
                id: "univ_135",
                name: "جامعة مرسين (3)",
                name_tr: "Mersin Üniversitesi",
                location: "مرسين",
                startDate: "21.08.2025",
                endDate: "28.08.2025",
                resultDate: "02.09.2025",
                certificates: ["شهادة الثانوية العامة", "شهادة اليوس الموحد TR-YÖS", "شهادة الثانوية التركية"],
                fees: "3250TL",
                applicationType: "أونلاين",
                ranking: 43,
                state: "مرسين",
                majors: [ "كلية السياحة" , "كلية البحرية" , "كلية منتجات المياه" , "كلية العلوم الرياضية" , "كلية الهندسة" , "كلية الهندسة المعمارية" ,"كلية الاتصالات" , "كلية الشريعة" , "كلية الاقتصاد والعلوم الإدارية" , "كلية التمريض" ,  "كلية الفنون الجميلة" ,"كلية العلوم الإنسانية والاجتماعية" , "كلية العلوم" , "كلية التربية" , "كلية الصيدلة", "كلية طب الأسنان", "كلية الطب البشري"]
            },
            {
                id: "univ_136",
                name: "جامعة محمد عاكف ارسوي",
                name_tr: "Marmara Üniversitesi",
                location: "إسطنبول",
                startDate: "05.06.2025",
                endDate: "30.06.2025",
                resultDate: "25.07.2025",
                certificates: ["شهادة الثانوية العامة", "شهادة اليوس الموحد TR-YÖS", "شهادة السات", "شهادة الثانوية التركية"],
                fees: "300$",
                applicationType: "أونلاين",
                ranking: 11,
                state: "إسطنبول",
                majors: ["كلية التربية", "كلية طب الأسنان", "كلية الحاسوب والمعلوماتية", ,  "كلية العلوم والأداب",  "كلية الاقتصاد والعلوم الإدارية",  "كلية الشريعة",  "كلية الهندسة والعمارة",  "كلية العلوم الصحية",  "كلية التصميم والفنون الجميلة" ,  "كلية علوم الرياضة",  "كلية الطب البيطري"]
            },
            {
                id: "univ_137",
                name: "جامعة  ماردين أرتوكلو",
                name_tr: "Yıldız Teknik Üniversitesi",
                location: "إسطنبول",
                startDate: "10.05.2025",
                endDate: "05.06.2025",
                resultDate: "30.06.2025",
                certificates: ["شهادة الثانوية العامة", "شهادة اليوس الموحد TR-YÖS", "شهادة الثانوية التركية"],
                fees: "400$",
                applicationType: "أونلاين",
                ranking: 9,
                state: "إسطنبول",
                majors: ["كلية التصميم والفنون", "كلية العلوم", "كلية الأداب" ,  "كلية الفنون الجميلة",  "كلية الاقتصاد والعلوم الإدارية",  "كلية العلوم الإسلامية",  "كلية العمارة والهندسة",  "كلية العلوم الصحية",  "كلية الطب البشري",  "كلية السياحة"]
            },
            {
                id: "univ_138",
                name: "جامعة  منذر",
                name_tr: "Uludağ Üniversitesi",
                location: "بورصة",
                startDate: "15.06.2025",
                endDate: "10.07.2025",
                resultDate: "05.08.2025",
                certificates: ["شهادة الثانوية العامة", "شهادة اليوس الموحد TR-YÖS", "شهادة السات", "شهادة الثانوية التركية"],
                fees: "150$",
                applicationType: "أونلاين",
                ranking: 20,
                state: "بورصة",
                majors: ["كلية الاقتصاد والعلوم الإدارية", "كلية الفنون الجميلة والتصميم والعمارة", "كلية الأداب",  "كلية الاتصالات",  "كلية الهندسة",  "كلية العلوم الصحية",  "كلية علوم الرياضة",  "كلية مصايد الأسماك"]
            },
            {
                id: "univ_139",
                name: "جامعة مانيسا جلال باير",
                name_tr: "Çukurova Üniversitesi",
                location: "أضنة",
                startDate: "20.05.2025",
                endDate: "15.06.2025",
                resultDate: "10.07.2025",
                certificates: ["شهادة اليوس الموحد TR-YÖS"],
                fees: "200$",
                applicationType: "أونلاين",
                ranking: 22,
                state: "أضنة",
                majors: ["كلية العلوم الصحية", "كلية طب الأسنان", "كلية الطب البشري",  "كلية الهندسة",  "كلية العمارة والتصميم والفنون الجميلة",  "كلية الاقتصاد والعلوم الإدارية",  "كلية الأداب والعلوم",  "كلية التعليم",  "كلية علوم الرياضة",  "كلية التكنولوجيا",  "كلية الشريعة",  "كلية الاتصالات",  "كلية العلوم التطبيقية"]
            },
            {
                id: "univ_140",
                name: "جامعة معمار سنان",
                name_tr: "Anadolu Üniversitesi",
                location: "إسكي شهير",
                startDate: "25.05.2025",
                endDate: "20.06.2025",
                resultDate: "15.07.2025",
                certificates: ["شهادة اليوس الموحد TR-YÖS", "شهادة السات"],
                fees: "100$",
                applicationType: "أونلاين",
                ranking: 25,
                state: "إسكي شهير",
                majors: ["كلية الهندسة المعمارية", "كلية الفنون الجميلة", "كلية الأداب والعلوم"]
            },
            {
                id: "univ_141",
                name: "جامعة موغلا صدقي كوتشمان",
                name_tr: "Anadolu Üniversitesi",
                location: "إسكي شهير",
                startDate: "25.05.2025",
                endDate: "20.06.2025",
                resultDate: "15.07.2025",
                certificates: ["شهادة الثانوية العامة", "شهادة اليوس الموحد TR-YÖS", "شهادة السات"],
                fees: "100$",
                applicationType: "أونلاين",
                ranking: 25,
                state: "إسكي شهير",
                majors: ["كلية طب الأسنان", "كلية الفنون الجميلة", "كلية الطب البشري",  "كلية الأداب",  "كلية التربية",  "كلية العلوم",  "كلية الاقتصاد والعلوم الإدارية",  "كلية العلوم الصحية",  "كلية الزراعة",  "كلية الحقوق",  "كلية العلوم الإسلامية",  "كلية الطب البيطري",  "كلية الهندسة المعمارية",  "كلية الهندسة",  "كلية العلوم الصحية",  "كلية علوم الرياضة",  "كلية مصايد الأسماك",  "كلية التعليم الفني",  "كلية التكنولوجيا",  "كلية السياحة"]
            },
            {
                id: "univ_142",
                name: "جامعة مللاطيا تورغوت اوزال",
                name_tr: "Anadolu Üniversitesi",
                location: "إسكي شهير",
                startDate: "25.05.2025",
                endDate: "20.06.2025",
                resultDate: "15.07.2025",
                certificates: ["شهادة الثانوية العامة", "شهادة اليوس الموحد TR-YÖS", "شهادة السات", "شهادة الثانوية التركية"],
                fees: "100$",
                applicationType: "أونلاين",
                ranking: 25,
                state: "إسكي شهير",
                majors: ["كلية الهندسة", "كلية العلوم الصحية", "كلية الطب البشري",  "كلية العمارة والتصميم والفنون",  "كلية الطب البشري",  "كلية إدارة الأعمال",  "كلية الزراعة"]
            },
            {
                id: "univ_143",
                name: "جامعة موش الب أرسلان (1)",
                name_tr: "Muş Alparslanß Üniversitesi",
                location: "موش",
                startDate: "30.06.2025",
                endDate: "11.07.2025",
                resultDate: "18.07.2025",
                certificates: ["شهادة الثانوية العامة", "شهادة اليوس الموحد TR-YÖS", "شهادة الثانوية التركية"],
                fees: "مجاناً",
                applicationType: "أونلاين",
                ranking: 135,
                state: "موش",
                majors: [ "كلية العلوم التطبيقية" , "كلية علوم الرياضة" , "كلية العلوم الصحية" ,"كلية الهندسة والعمارة" , "كلية العلوم الإسلامية" , "كليةالاتصالات" , "كليةالاقتصاد والعلوم الإدارية" , "كلية الأداب والفنون", "كلية طب الأسنان", "كلية التربية"]
            },
            {
                id: "univ_144",
                name: "جامعة موش (2) الب أرسلان",
                name_tr: "Muş Alparslanß Üniversitesi",
                location: "موش",
                startDate: "04.08.2025",
                endDate: "15.08.2025",
                resultDate: "22.08.2025",
                certificates: ["شهادة الثانوية العامة", "شهادة اليوس الموحد TR-YÖS", "شهادة الثانوية التركية"],
                fees: "مجاناً",
                applicationType: "أونلاين",
                ranking: 135,
                state: "موش",
                majors: [ "كلية العلوم التطبيقية" , "كلية علوم الرياضة" , "كلية العلوم الصحية" ,"كلية الهندسة والعمارة" , "كلية العلوم الإسلامية" , "كليةالاتصالات" , "كليةالاقتصاد والعلوم الإدارية" , "كلية الأداب والفنون", "كلية طب الأسنان", "كلية التربية"]
            },
            {
                id: "univ_145",
                name: "جامعة نيغدة عمر خالص ديمير (1)",
                name_tr: "Niğde Ömer Halis Demir Üniversitesi",
                location: "نيغدة",
                startDate: "14.04.2025",
                endDate: "16.05.2025",
                resultDate: "30.05.2025",
                certificates: ["شهادة الثانوية العامة", "شهادة اليوس الموحد TR-YÖS", "شهادة السات", "شهادة الثانوية التركية"],
                fees: "مجاناً",
                applicationType: "أونلاين",
                ranking: 67,
                state: "نيغدة",
                majors: [  "كلية التكنولوجيا" , "كلية التمريض" , "كلية العلوم السياسة والعلاقات الدولية" , "كلية العلوم الإسلامية" , "كلية العلوم والأداب" , "كليةالتربية" , "كلية الاقتصاد والعلوم الإدارية" , "كلية الهندسة", "كلية طب الأسنان", "كلية الطب البشري"]
            },
            {
                id: "univ_146",
                name: "جامعة نيغدة عمر خالص ديمير (2)",
                name_tr: "Niğde Ömer Halis Demir Üniversitesi",
                location: "نيغدة",
                startDate: "07.07.2025",
                endDate: "18.07.2025",
                resultDate: "01.08.2025",
                certificates: ["شهادة الثانوية العامة", "شهادة اليوس الموحد TR-YÖS", "شهادة السات", "شهادة الثانوية التركية"],
                fees: "مجاناً",
                applicationType: "أونلاين",
                ranking: 67,
                state: "نيغدة",
                majors: [  "كلية التكنولوجيا" , "كلية التمريض" , "كلية العلوم السياسة والعلاقات الدولية" , "كلية العلوم الإسلامية" , "كلية العلوم والأداب" , "كليةالتربية" , "كلية الاقتصاد والعلوم الإدارية" , "كلية الهندسة", "كلية طب الأسنان", "كلية الطب البشري"]
            },
            {
                id: "univ_147",
                name: "جامعة نيغدة عمر خالص ديمير (3)",
                name_tr: "Niğde Ömer Halis Demir Üniversitesi",
                location: "نيغدة",
                startDate: "25.08.2025",
                endDate: "29.08.2025",
                resultDate: "12.09.2025",
                certificates: ["شهادة الثانوية العامة", "شهادة اليوس الموحد TR-YÖS", "شهادة السات", "شهادة الثانوية التركية"],
                fees: "مجاناً",
                applicationType: "أونلاين",
                ranking: 67,
                state: "نيغدة",
                majors: [  "كلية التكنولوجيا" , "كلية التمريض" , "كلية العلوم السياسة والعلاقات الدولية" , "كلية العلوم الإسلامية" , "كلية العلوم والأداب" , "كليةالتربية" , "كلية الاقتصاد والعلوم الإدارية" , "كلية الهندسة", "كلية طب الأسنان", "كلية الطب البشري"]
            },
            {
                id: "univ_148",
                name: "جامعة نيغدة عمر خالص ديمير (4)",
                name_tr: "Niğde Ömer Halis Demir Üniversitesi",
                location: "نيغدة",
                startDate: "22.09.2025",
                endDate: "26.09.2025",
                resultDate: "10.10.2025",
                certificates: ["شهادة الثانوية العامة", "شهادة اليوس الموحد TR-YÖS", "شهادة السات", "شهادة الثانوية التركية"],
                fees: "مجاناً",
                applicationType: "أونلاين",
                ranking: 67,
                state: "نيغدة",
                majors: [  "كلية التكنولوجيا" , "كلية التمريض" , "كلية العلوم السياسة والعلاقات الدولية" , "كلية العلوم الإسلامية" , "كلية العلوم والأداب" , "كليةالتربية" , "كلية الاقتصاد والعلوم الإدارية" , "كلية الهندسة", "كلية طب الأسنان", "كلية الطب البشري"]
            },
            {
                id: "univ_149",
                name: "جامعة  نجم الدين أربكان",
                name_tr: "Necmettin Erbakan Üniversitesi",
                location: "ٌقونيا",
                startDate: "12.06.2025",
                endDate: "09.07.2025",
                resultDate: "24.07.2025",
                certificates: ["شهادة الثانوية العامة", "شهادة اليوس الموحد TR-YÖS", "شهادة الثانوية التركية"],
                fees: "مجاناً",
                applicationType: "أونلاين",
                ranking: 42,
                state: "قونيا",
                majors: [  "كلية الطب البيطري" , "كليةالعلوم التطبيقية" , "كلية السياحة" , "كليةالطب البشري" , "كليةالعلوم الإنسانية والاجتماعية" , "كليةالعلوم السياسية" , "كليةالعلوم الصحية" , "كلية الهندسة" , "كليةالحقوق" , "كليةالتمريض" , "كلية الطيران والملاحة الفضائية" , "كليةالفنون الجميلة والعمارة" , "كليةالزراعة" , "كلية العلوم", "كلية التربية", "كلية طب الأسنان"]
            },
            {
                id: "univ_150",
                name: "جامعة نيفشيهير حجي بيكتاش فالي",
                name_tr: "Ege Üniversitesi",
                location: "إزمير",
                startDate: "15.06.2025",
                endDate: "10.07.2025",
                resultDate: "01.08.2025",
                certificates: ["شهادة الثانوية العامة", "شهادة اليوس الموحد TR-YÖS", "شهادة السات", "شهادة الثانوية التركية"],
                fees: "250$",
                applicationType: "أونلاين",
                ranking: 12,
                state: "إزمير",
                majors: ["كلية العلوم والأداب", "كلية التربية", "كلية طب الأسنان",  "كلية الفنون الجميلة",  "كلية الاقتصاد والعلوم الإدارية",  "كلية الشريعة",  "كلية الهندسة والعمارة",  "كلية العلوم الصحية",  "كلية علوم الرياضة",  "كلية السياحة"]
            },
            {
                id: "univ_151",
                name: "جامعة هاتاي مصطفى كمال (1)",
                name_tr: "Hatay Mustafa Kemal Üniversitesi",
                location: "هاتاي",
                startDate: "16.06.2025",
                endDate: "30.06.2025",
                resultDate: "11.07.2025",
                certificates: ["شهادة اليوس الموحد TR-YÖS"],
                fees: "مجاناً",
                applicationType: "أونلاين",
                ranking: 91,
                state: "هاتاي",
                majors: [ "كلية الزراعة" , "كلية الطب البيطري" ,"كلية علوم الرياضة" ,"كلية الاتصالات" , "كلية الشريعة" ,"كلية الاقتصاد والعلوم الإدارية" , "كلية الفنون الجميلة" , "كلية العلوم والأداب" , "كلية التربية" , "كلية العلوم الصحية" ,"كلية الهندسة" , "كلية الهندسة المعمارية", "كلية طب الأسنان", "كلية الطب البشري"]
            },
            {
                id: "univ_152",
                name: "جامعة هاتاي مصطفى كمال (2)",
                name_tr: "Hatay Mustafa Kemal Üniversitesi",
                location: "هاتاي",
                startDate: "29.07.2025",
                endDate: "01.08.2025",
                resultDate: "11.08.2025",
                certificates: ["شهادة اليوس الموحد TR-YÖS"],
                fees: "مجاناً",
                applicationType: "أونلاين",
                ranking: 91,
                state: "هاتاي",
                majors: [ "كلية الزراعة" , "كلية الطب البيطري" ,"كلية علوم الرياضة" ,"كلية الاتصالات" , "كلية الشريعة" ,"كلية الاقتصاد والعلوم الإدارية" , "كلية الفنون الجميلة" , "كلية العلوم والأداب" , "كلية التربية" , "كلية العلوم الصحية" ,"كلية الهندسة" , "كلية الهندسة المعمارية", "كلية طب الأسنان", "كلية الطب البشري"]
            },
            {
                id: "univ_153",
                name: "جامعة هاتاي مصطفى كمال (3)",
                name_tr: "Hatay Mustafa Kemal Üniversitesi",
                location: "هاتاي",
                startDate: "02.09.2025",
                endDate: "05.09.2025",
                resultDate: "15.09.2025",
                certificates: ["شهادة اليوس الموحد TR-YÖS"],
                fees: "مجاناً",
                applicationType: "أونلاين",
                ranking: 91,
                state: "هاتاي",
                majors: [ "كلية الزراعة" , "كلية الطب البيطري" ,"كلية علوم الرياضة" ,"كلية الاتصالات" , "كلية الشريعة" ,"كلية الاقتصاد والعلوم الإدارية" , "كلية الفنون الجميلة" , "كلية العلوم والأداب" , "كلية التربية" , "كلية العلوم الصحية" ,"كلية الهندسة" , "كلية الهندسة المعمارية", "كلية طب الأسنان", "كلية الطب البشري"]
            },
            {
                id: "univ_154",
                name: "جامعة هاكاري",
                name_tr: "Hakkari Üniversitesi",
                location: "هاكاري",
                startDate: "30.06.2025",
                endDate: "14.07.2025",
                resultDate: "21.07.2025",
                certificates: ["شهادة الثانوية العامة", "شهادة اليوس الموحد TR-YÖS", "شهادة السات", "شهادة الثانوية التركية"],
                fees: "مجاناً",
                applicationType: "أونلاين",
                ranking: 165,
                state: "هاكاري",
                majors: [  "كلية علوم الرياضة" , "كلية الفنون الجميلة" , "كلية الاقتصاد والعلوم الإدارية" ,  "كليةالتربية" , "كلية الشريعة", "كلية العلوم الصحية", "كلية الهندسة"]
            },
            {
                id: "univ_155",
                name: "جامعة  هيتت",
                name_tr: "Yıldız Teknik Üniversitesi",
                location: "إسطنبول",
                startDate: "10.05.2025",
                endDate: "05.06.2025",
                resultDate: "30.06.2025",
                certificates: ["شهادة الثانوية العامة", "شهادة اليوس الموحد TR-YÖS", "شهادة السات", "شهادة الثانوية التركية"],
                fees: "400$",
                applicationType: "أونلاين",
                ranking: 9,
                state: "إسطنبول",
                majors: ["كلية الهندسة", "كلية طب الأسنان", "كلية الطب البشري",  "كلية العلوم الصحية",  "كلية العلوم والأداب",  "كلية الفنون الجميلة والتصميم والعمارة",  "كلية الاقتصاد والعلوم الإدارية",  "كلية الشريعة",  "كلية علوم الرياضة",  "كلية السياحة",  "كلية الطب البيطري"]
            },
            {
                id: "univ_156",
                name: "جامعة يالوفا (1)",
                name_tr: "Yalova Üniversitesi",
                location: "يالوفا",
                startDate: "02.06.2025",
                endDate: "16.06.2025",
                resultDate: "07.07.2025",
                certificates: ["شهادة الثانوية العامة", "شهادة اليوس الموحد TR-YÖS", "شهادة السات", "شهادة الثانوية التركية"],
                fees: "مجاناً",
                applicationType: "أونلاين",
                ranking: 116,
                state: "يالوفا",
                majors: [ "كلية علوم الرياضة" , "كلية الفنون والتصميم" , "كلية العلوم الإسلامية" , "كلية العلوم الإنسانية والاجتماعية" ,"كلية الاقتصاد والعلوم الإدارية" ,"كلية العلوم الصحية" , "كلية الهندسة", "كلية الحقوق", "كلية الطب البشري"]
            },
            {
                id: "univ_157",
                name: "جامعة يالوفا (2)",
                name_tr: "Yalova Üniversitesi",
                location: "يالوفا",
                startDate: "18.08.2025",
                endDate: "31.08.2025",
                resultDate: "08.09.2025",
                certificates: ["شهادة الثانوية العامة", "شهادة اليوس الموحد TR-YÖS", "شهادة السات", "شهادة الثانوية التركية"],
                fees: "مجاناً",
                applicationType: "أونلاين",
                ranking: 116,
                state: "يالوفا",
                majors: [ "كلية علوم الرياضة" , "كلية الفنون والتصميم" , "كلية العلوم الإسلامية" , "كلية العلوم الإنسانية والاجتماعية" ,"كلية الاقتصاد والعلوم الإدارية" ,"كلية العلوم الصحية" , "كلية الهندسة", "كلية الحقوق", "كلية الطب البشري"]
            },
            {
                id: "univ_158",
                name: "جامعة يلدز تكنيك",
                name_tr: "Çukurova Üniversitesi",
                location: "أضنة",
                startDate: "20.05.2025",
                endDate: "15.06.2025",
                resultDate: "10.07.2025",
                certificates: ["شهادة اليوس الموحد TR-YÖS", "شهادة السات"],
                fees: "200$",
                applicationType: "أونلاين",
                ranking: 22,
                state: "أضنة",
                majors: ["كلية العلوم والأداب", "كلية الكهرباء والإلكترون", "كلية التربية",  "كلية الهندسة البحرية وإنشاء السفن",  "كلية الاقتصاد والعلوم الإدارية",  "كلية الهندسة المدنية",  "كلية الكيمياء والمعادن",  "كلية الهندسة الميكانيكية",  "كلية الهندسة المعمارية",  "كلية الفنون والتصميم"]
            },
            {
                id: "univ_159",
                name: "جامعة يوزغات بوزوك (1)",
                name_tr: "Yozgat Bozok Üniversitesi",
                location: "يوزغات",
                startDate: "05.05.2025",
                endDate: "22.06.2025",
                resultDate: "29.06.2025",
                certificates: ["شهادة اليوس الموحد TR-YÖS"],
                fees: "مجاناً",
                applicationType: "أونلاين",
                ranking: 89,
                state: "يوزغات",
                majors: [  "كليةالاتصالات" ,"كلية الشريعة" , "كلية الاقتصاد والعلوم الإدارية" , "كلية الحقوق" ,"كلية العلوم والأداب", "كلية التربية", "كلية طب الأسنان"]
            },
            {
                id: "univ_160",
                name: "جامعة يوزغات بوزوك (2)",
                name_tr: "Yozgat Bozok Üniversitesi",
                location: "يوزغات",
                startDate: "30.06.2025",
                endDate: "20.07.2025",
                resultDate: "27.07.2025",
                certificates: ["شهادة اليوس الموحد TR-YÖS"],
                fees: "مجاناً",
                applicationType: "أونلاين",
                ranking: 89,
                state: "يوزغات",
                majors: [  "كليةالاتصالات" ,"كلية الشريعة" , "كلية الاقتصاد والعلوم الإدارية" , "كلية الحقوق" ,"كلية العلوم والأداب", "كلية التربية", "كلية طب الأسنان"]
            },
            {
                id: "univ_161",
                name: "جامعة يوزغات بوزوك (3)",
                name_tr: "Yozgat Bozok Üniversitesi",
                location: "يوزغات",
                startDate: "11.08.2025",
                endDate: "30.11.2025",
                resultDate: "فوراً",
                certificates: ["شهادة اليوس الموحد TR-YÖS"],
                fees: "مجاناً",
                applicationType: "أونلاين",
                ranking: 89,
                state: "يوزغات",
                majors: [  "كليةالاتصالات" ,"كلية الشريعة" , "كلية الاقتصاد والعلوم الإدارية" , "كلية الحقوق" ,"كلية العلوم والأداب", "كلية التربية", "كلية طب الأسنان"]
            }
        ];

        // بيانات التخصصات والولايات
        const majors = [
            "كلية الطب البشري", "كلية طب الأسنان", "كلية الطب البيطري", "كلية الصيدلة", "كلية التمريض", "كلية العلوم الصحية", 
            "كلية الهندسة", "كلية الهندسة المعمارية", "كلية التكنولوجيا", "كلية الاتصالات", "كلية الاقتصاد والعلوم الإدارية",
            "كلية العلوم الإنسانية والاجتماعية", "كلية العلوم التطبيقية", "كلية الشريعة", "كلية التربية",
            "كلية الأداب", "كلية العلوم والأداب", "كلية الحقوق", "التربية", "كلية الفنون الجميلة والتصميم", "كلية الفنون والعمارة والتصميم"
        ];

        const states = [
            "أضنة", "أديمان", "أفيون قره حصار", "أغري", "أماسيا", "أنقرة", 
            "أنطاليا", "أرتقين", "أيدن", "بالك إسير", "بيليجيك", "بينغول", "بيتليس ايرن",
            "دينيزلي", "ديار بكر", "أدرنة", "إيلازيغ", "أرزنجان", "أرضروم",
            "إسكي شهير", "غازي عنتاب", "غيرسون", "غوموش هانة", "هكاري", "هاتاي", "إسبارطة", "مرسين",
            "إسطنبول", "إزمير", "قارص", "كاستانونو", "قيصري", "كيركلارلي", "كير شهير", "كوجالي", "قونيا",
            "كوتاهيا", "ملاطيا", "كهرمان مرعش", "ماردين", "موغلا", "موش", "نيفشيهير", "نيغدة", "أوردو", "ريزه",
            "سكاريا", "سامسون", "سيرت", "سينوب", "سيواس", "تيكرداغ", "توكات", "طرابزون", "تونجلي", "شانلي أورفا",
            "أوشاك", "فان", "يوزغات", "زونجولداك", "أكسراي", "بايبورت", "كارامان", "كركلارلة", "باتمان", "شرناق",
            "بارتن", "أرداهان", "إغدير", "يالوفا", "كارابوك", "كيليس", "عثمانية", "دوزجه",
        ];

        // متغيرات التحميل
        let currentPage = 1;
        const rowsPerPage = 10;
        let filteredUniversities = [];

        // تهيئة التخصصات والولايات في القوائم المنسدلة
        function initDropdowns() {
            const majorList = document.getElementById('majorList');
            const stateList = document.getElementById('stateList');
            
            // إضافة التخصصات
            majors.forEach(major => {
                const li = document.createElement('li');
                li.className = 'option-item';
                li.innerHTML = `
                    <input type="checkbox" id="major_${major}" value="${major}">
                    <label for="major_${major}">${major}</label>
                `;
                majorList.appendChild(li);
            });
            
            // إضافة الولايات
            states.forEach(state => {
                const li = document.createElement('li');
                li.className = 'option-item';
                li.innerHTML = `
                    <input type="checkbox" id="state_${state}" value="${state}">
                    <label for="state_${state}">${state}</label>
                `;
                stateList.appendChild(li);
            });
        }
        
        // عرض الصفوف في الجدول
        function displayTableRows(universitiesToShow) {
            const tableBody = document.getElementById('tableBody');
            tableBody.innerHTML = '';
            
            universitiesToShow.forEach((univ, index) => {
                const row = document.createElement('tr');
                row.classList.add('fade-in');
                row.setAttribute('data-id', univ.id);
                row.setAttribute('data-state', univ.state);
                row.setAttribute('data-certificates', univ.certificates.join(','));
                row.setAttribute('data-majors', univ.majors.join(','));
                
                // تنسيق الشهادات
                const certsHTML = univ.certificates.map(cert => 
                    `<span class="cert-badge">${cert}</span>`
                ).join('');
                
                // تنسيق رسوم التقديم
                const feesClass = univ.fees === 'مجاناً' ? 'free' : '';
                const feesHTML = `<span class="${feesClass}">${univ.fees}</span>`;
                
                // تنسيق الترتيب
                const rankingClass = univ.ranking ? '' : '';
                const rankingHTML = `<span class="ranking ${rankingClass}">${univ.ranking}</span>`;
                
                // تنسيق نوع التقديم
                const appTypeClass = univ.applicationType === 'أونلاين' ? 'online' : '';
                const appTypeHTML = `<span class="${appTypeClass}">${univ.applicationType}</span>`;
                
                row.innerHTML = `
                    <td>
                        <div class="university-name">${univ.name}</div>
                        <div class="university-location">${univ.name_tr}</div>
                    </td>
                    <td class="location">${univ.location}</td>
                    <td class="date-cell">${univ.startDate}</td>
                    <td class="date-cell">${univ.endDate}</td>
                    <td class="date-cell">${univ.resultDate}</td>
                    <td class="certificates">${certsHTML}</td>
                    <td>${feesHTML}</td>
                    <td>${appTypeHTML}</td>
                    <td>${rankingHTML}</td>
                `;
                
                tableBody.appendChild(row);
            });
        }
        
        // فلترة الجامعات
        function filterUniversities() {
            const selectedCerts = Array.from(document.querySelectorAll('#certificateDropdown input:checked'))
                .map(cb => cb.value);
                
            const selectedMajors = Array.from(document.querySelectorAll('#majorDropdown input:checked'))
                .map(cb => cb.value);
                
            const selectedStates = Array.from(document.querySelectorAll('#stateDropdown input:checked'))
                .map(cb => cb.value);
            
            filteredUniversities = universities.filter(univ => {
                const stateMatch = selectedStates.length === 0 || selectedStates.includes(univ.state);
                const certMatch = selectedCerts.length === 0 || selectedCerts.every(cert => univ.certificates.includes(cert));
                const majorMatch = selectedMajors.length === 0 || selectedMajors.some(major => univ.majors.includes(major));
                
                return stateMatch && certMatch && majorMatch;
            });
            
            return filteredUniversities;
        }
        
        // فلترة الجدول وعرض النتائج
        function filterTable() {
            // إظهار مؤشر التحميل
            const loader = document.getElementById('loader');
            loader.style.display = 'block';
            
            setTimeout(() => {
                const filtered = filterUniversities();
                currentPage = 1;
                
                // إخفاء مؤشر التحميل
                loader.style.display = 'none';
                
                // عرض الصفوف للصفحة الحالية
                displayTableRows(filtered.slice(0, rowsPerPage));
                
                // تحديث عدد النتائج
                document.getElementById('resultCount').textContent = filtered.length;
                
                // التحقق من الحاجة لزر التحميل للمزيد
                const loadMoreBtn = document.getElementById('loadMoreBtn');
                if (filtered.length > rowsPerPage) {
                    loadMoreBtn.style.display = 'block';
                } else {
                    loadMoreBtn.style.display = 'none';
                }
                
                // إظهار رسالة عدم وجود نتائج
                const noResults = document.getElementById('noResults');
                if (filtered.length === 0) {
                    noResults.style.display = 'block';
                    loadMoreBtn.style.display = 'none';
                } else {
                    noResults.style.display = 'none';
                }
            }, 500);
        }
        
        // تحميل المزيد من الصفوف
        function loadMoreRows() {
            currentPage++;
            const startIndex = (currentPage - 1) * rowsPerPage;
            const endIndex = startIndex + rowsPerPage;
            const moreRows = filteredUniversities.slice(startIndex, endIndex);
            
            // إضافة الصفوف الجديدة إلى الجدول
            moreRows.forEach(univ => {
                const row = document.createElement('tr');
                row.classList.add('fade-in');
                row.setAttribute('data-id', univ.id);
                row.setAttribute('data-state', univ.state);
                row.setAttribute('data-certificates', univ.certificates.join(','));
                row.setAttribute('data-majors', univ.majors.join(','));
                
                // تنسيق الشهادات
                const certsHTML = univ.certificates.map(cert => 
                    `<span class="cert-badge">${cert}</span>`
                ).join('');
                
                // تنسيق رسوم التقديم
                const feesClass = univ.fees === 'مجاناً' ? 'free' : '';
                const feesHTML = `<span class="${feesClass}">${univ.fees}</span>`;
                
                // تنسيق الترتيب
                const rankingClass = univ.ranking ? '' : '';
                const rankingHTML = `<span class="ranking ${rankingClass}">${univ.ranking}</span>`;
                
                // تنسيق نوع التقديم
                const appTypeClass = univ.applicationType === 'أونلاين' ? 'online' : '';
                const appTypeHTML = `<span class="${appTypeClass}">${univ.applicationType}</span>`;
                
                row.innerHTML = `
                    <td>
                        <div class="university-name">${univ.name}</div>
                        <div class="university-location">${univ.name_tr}</div>
                    </td>
                    <td class="location">${univ.location}</td>
                    <td class="date-cell">${univ.startDate}</td>
                    <td class="date-cell">${univ.endDate}</td>
                    <td class="date-cell">${univ.resultDate}</td>
                    <td class="certificates">${certsHTML}</td>
                    <td>${feesHTML}</td>
                    <td>${appTypeHTML}</td>
                    <td>${rankingHTML}</td>
                `;
                
                document.getElementById('tableBody').appendChild(row);
            });
            
            // إخفاء زر التحميل إذا لم يتبقى المزيد
            if ((currentPage * rowsPerPage) >= filteredUniversities.length) {
                document.getElementById('loadMoreBtn').style.display = 'none';
            }
        }
        
        // تحديث العلامات المختارة
        function updateTags(dropdownId, tagsContainerId) {
            const container = document.getElementById(tagsContainerId);
            container.innerHTML = '';
            
            const selectedOptions = Array.from(document.querySelectorAll(`#${dropdownId} input:checked`));
            
            selectedOptions.forEach(option => {
                const tag = document.createElement('div');
                tag.className = 'tag';
                tag.innerHTML = `
                    ${option.value}
                    <i class="fas fa-times" data-value="${option.value}"></i>
                `;
                container.appendChild(tag);
            });
            
            // إضافة حدث لإزالة العلامة
            container.querySelectorAll('.fa-times').forEach(icon => {
                icon.addEventListener('click', function(e) {
                    e.stopPropagation();
                    const value = this.getAttribute('data-value');
                    const checkbox = document.querySelector(`#${dropdownId} input[value="${value}"]`);
                    if (checkbox) {
                        checkbox.checked = false;
                        updateTags(dropdownId, tagsContainerId);
                    }
                });
            });
        }
        
        // إغلاق القوائم المنسدلة عند النقر خارجها
        function setupDropdownClose() {
            document.addEventListener('click', function(e) {
                const dropdowns = document.querySelectorAll('.dropdown');
                const selects = document.querySelectorAll('.filter-select');
                
                dropdowns.forEach(dropdown => {
                    if (dropdown.classList.contains('active') && 
                        !dropdown.contains(e.target) && 
                        !Array.from(selects).some(select => select.contains(e.target))) {
                        dropdown.classList.remove('active');
                        dropdown.previousElementSibling.classList.remove('active');
                    }
                });
            });
        }
        
        // تهيئة الأحداث
        function initEvents() {
            // أحداث القوائم المنسدلة
            const dropdownToggles = document.querySelectorAll('.filter-select');
            dropdownToggles.forEach(toggle => {
                toggle.addEventListener('click', function(e) {
                    e.stopPropagation();
                    this.classList.toggle('active');
                    const dropdown = this.nextElementSibling;
                    dropdown.classList.toggle('active');
                    
                    // إغلاق القوائم الأخرى
                    document.querySelectorAll('.dropdown').forEach(d => {
                        if (d !== dropdown && d.classList.contains('active')) {
                            d.classList.remove('active');
                            d.previousElementSibling.classList.remove('active');
                        }
                    });
                });
            });
            
            // تحديث العلامات عند تغيير الاختيارات
            document.querySelectorAll('#certificateDropdown input').forEach(input => {
                input.addEventListener('change', () => {
                    updateTags('certificateDropdown', 'certificateTags');
                });
            });
            
            document.querySelectorAll('#majorDropdown input').forEach(input => {
                input.addEventListener('change', () => {
                    updateTags('majorDropdown', 'majorTags');
                });
            });
            
            document.querySelectorAll('#stateDropdown input').forEach(input => {
                input.addEventListener('change', () => {
                    updateTags('stateDropdown', 'stateTags');
                });
            });
            
            // أحداث البحث في القوائم المنسدلة
            document.querySelectorAll('.search-input').forEach(input => {
                input.addEventListener('input', function() {
                    const searchTerm = this.value.toLowerCase();
                    const options = this.nextElementSibling.querySelectorAll('.option-item');
                    
                    options.forEach(option => {
                        const text = option.textContent.toLowerCase();
                        if (text.includes(searchTerm)) {
                            option.style.display = 'flex';
                        } else {
                            option.style.display = 'none';
                        }
                    });
                });
            });
            
            // حدث تطبيق الفلترة
            document.getElementById('applyFilter').addEventListener('click', filterTable);
            
            // حدث مسح الفلاتر
            document.getElementById('clearFilter').addEventListener('click', function() {
                // إلغاء تحديد جميع الخيارات
                document.querySelectorAll('.dropdown input[type="checkbox"]').forEach(cb => {
                    cb.checked = false;
                });
                
                // تحديث العلامات
                updateTags('certificateDropdown', 'certificateTags');
                updateTags('majorDropdown', 'majorTags');
                updateTags('stateDropdown', 'stateTags');
                
                // إعادة ضبط الفلترة
                filteredUniversities = universities;
                currentPage = 1;
                displayTableRows(filteredUniversities.slice(0, rowsPerPage));
                
                // تحديث عدد النتائج
                document.getElementById('resultCount').textContent = universities.length;
                
                // إخفاء رسالة عدم وجود نتائج
                document.getElementById('noResults').style.display = 'none';
                
                // إظهار زر التحميل إذا لزم الأمر
                const loadMoreBtn = document.getElementById('loadMoreBtn');
                if (universities.length > rowsPerPage) {
                    loadMoreBtn.style.display = 'block';
                } else {
                    loadMoreBtn.style.display = 'none';
                }
            });
            
            // حدث تحميل المزيد
            document.getElementById('loadMoreBtn').addEventListener('click', loadMoreRows);
        }
        
        // تهيئة التطبيق
        document.addEventListener('DOMContentLoaded', function() {
            // تعيين تاريخ التحديث
            const now = new Date();
            document.getElementById('currentDate').textContent = 
                `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()}`;
            
            initDropdowns();
            
            // عرض أول مجموعة من الصفوف
            filteredUniversities = universities;
            displayTableRows(filteredUniversities.slice(0, rowsPerPage));
            document.getElementById('resultCount').textContent = universities.length;
            
            // إظهار زر التحميل إذا لزم الأمر
            if (universities.length > rowsPerPage) {
                document.getElementById('loadMoreBtn').style.display = 'block';
            }
            
            initEvents();
            setupDropdownClose();
        });

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


