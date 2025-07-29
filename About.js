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

// Start Header Section 
        document.addEventListener('DOMContentLoaded', function() {
            AOS.init({
                duration: 1000,
                once: true,
                easing: 'ease-out-quart'
            });
        });
// End Header Section 

// Start Section Two 
        document.addEventListener('DOMContentLoaded', function() {
            AOS.init({
                duration: 1000,
                once: true,
                easing: 'ease-out-quart'
            });
        });
// End Section Two

// Start Section Form 
        // إعداد خدمة إرسال البريد
        const form = document.getElementById('student-form');
        const confirmation = document.getElementById('confirmation');
        
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // هنا يمكنك إضافة كود الإرسال الفعلي
            // في هذا المثال، سنعرض رسالة التأكيد فقط
            
            // إظهار رسالة التأكيد
            confirmation.style.display = 'block';
            
            // إعادة تعيين النموذج
            form.reset();
            
            // إخفاء النموذج مؤقتاً لإظهار الرسالة
            document.querySelector('.gold-form-container').style.opacity = '0.3';
        });
        
        function closeConfirmation() {
            confirmation.style.display = 'none';
            document.querySelector('.gold-form-container').style.opacity = '1';
        }
        
        // لمنع إغلاق الرسالة بالنقر خارجها
        confirmation.addEventListener('click', function(e) {
            e.stopPropagation();
        });
        
        document.addEventListener('click', function(e) {
            if (confirmation.style.display === 'block' && !confirmation.contains(e.target)) {
                closeConfirmation();
            }
        });

// End Section Form

// Start Chat Bot
       // شريط تقدم التمرير في الأسفل
        const progressBar = document.querySelector('.scroll-progress-bar');
        
        window.addEventListener('scroll', () => {
            const totalHeight = document.body.scrollHeight - window.innerHeight;
            const progress = (window.scrollY / totalHeight) * 100;
            progressBar.style.width = `${progress}%`;
        });
        // DOM Elements
        const chatButton = document.getElementById('chatButton');
        const chatContainer = document.getElementById('chatContainer');
        const closeChat = document.getElementById('closeChat');
        const chatMessages = document.getElementById('chatMessages');
        const messageInput = document.getElementById('messageInput');
        const sendButton = document.getElementById('sendButton');
        const micButton = document.getElementById('micButton');
        // عند فتح البوت: مسح المحادثة السابقة
        function resetChat() {
            // الاحتفاظ فقط بالرسالة الترحيبية
            const welcomeMessage = chatMessages.querySelector('.bot-message');
            chatMessages.innerHTML = '';
            if (welcomeMessage) {
                chatMessages.appendChild(welcomeMessage);
            } else {
                // إضافة رسالة ترحيبية جديدة
                const welcomeDiv = document.createElement('div');
                welcomeDiv.classList.add('message', 'bot-message');
                welcomeDiv.innerHTML = `
                    <div class="message-icon bot-icon">
                        <i class="fas fa-robot"></i>
                    </div>
                    مرحبًا! كيف يمكنني مساعدتك اليوم؟
                `;
                chatMessages.appendChild(welcomeDiv);
            }
            
            // إعادة تهيئة جلسة المحادثة
            chatSession = {
                startTime: new Date(),
                messages: []
            };
            
            // إضافة الرسالة الترحيبية إلى السجل
            chatSession.messages.push({
                sender: 'bot',
                text: 'مرحبًا! كيف يمكنني مساعدتك اليوم؟',
                time: new Date()
            });
        }
        
        // Toggle chat visibility
        chatButton.addEventListener('click', () => {
            const isOpening = !chatContainer.classList.contains('active');
            
            chatContainer.classList.toggle('active');
            chatButton.innerHTML = chatContainer.classList.contains('active') ? 
                '<i class="fas fa-times"></i>' : '<i class="fas fa-plus"></i>';
            
            if (chatContainer.classList.contains('active')) {
                messageInput.focus();
                
                // عند فتح الدردشة: مسح المحادثة السابقة
                if (isOpening) {
                    resetChat();
                }
            } else {
                // عند إغلاق الدردشة: حفظ المحادثة
                saveChatSession();
                updateDataPreview();
            }
        });
        // Send message function
        function sendMessage() {
            const message = messageInput.value.trim();
            if (message) {
                // Add user message
                addMessage(message, 'user');
                messageInput.value = '';
                
                // Show typing indicator
                showTyping();
                
                // Simulate bot response after delay
                setTimeout(() => {
                    // Remove typing indicator
                    document.querySelector('.typing-indicator')?.remove();
                    
                    // Generate bot response
                    const botResponse = generateBotResponse(message);
                    addMessage(botResponse, 'bot');
                }, 1500);
            }
        }
        
        // Add message to chat
        function addMessage(text, sender) {
            const messageDiv = document.createElement('div');
            messageDiv.classList.add('message');
            messageDiv.classList.add(sender + '-message');
            
            const iconDiv = document.createElement('div');
            iconDiv.classList.add('message-icon');
            iconDiv.classList.add(sender + '-icon');
            iconDiv.innerHTML = sender === 'bot' ? 
                '<i class="fas fa-robot"></i>' : '<i class="fas fa-user"></i>';
            
            messageDiv.appendChild(iconDiv);
            messageDiv.appendChild(document.createTextNode(text));
            
            chatMessages.appendChild(messageDiv);
            
            // إضافة الرسالة إلى سجل الجلسة
            chatSession.messages.push({
                sender: sender,
                text: text,
                time: new Date()
            });
            
            // Scroll to bottom
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }
        
        // Show typing indicator
        function showTyping() {
            const typingDiv = document.createElement('div');
            typingDiv.classList.add('typing-indicator');
            typingDiv.innerHTML = `
                جاري الكتابة 
                <span></span>
                <span></span>
                <span></span>
            `;
            chatMessages.appendChild(typingDiv);
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }
        
        // Generate bot response based on message
        function generateBotResponse(message) {
            const lowerMsg = message.toLowerCase();
            
            // Local knowledge base
            const localResponses = {
                'مرحبا': 'مرحبًا! كيف يمكنني مساعدتك اليوم؟',
                'اهلا': 'أهلًا وسهلًا! ما الذي يمكنني فعله لمساعدتك؟',
                'كيف حالك': 'أنا بخير، شكرًا لسؤالك. كيف يمكنني مساعدتك؟',
                'ماذا تفعل': 'أنا مساعد ذكاء اصطناعي مصمم للإجابة على أسئلتك وتقديم المساعدة.',
                'شكرا': 'العفو! دائمًا في الخدمة.',
                'شكرًا': 'على الرحب والسعة! هل هناك شيء آخر تحتاج مساعدة فيه؟',
                'السلام عليكم': 'وعليكم السلام ورحمة الله وبركاته! كيف يمكنني مساعدتك؟',
                'اسمك': 'أنا مساعد الذكاء الاصطناعي، يمكنك تسميتي كما تريد!',
                'المساعدة': 'بالطبع! يمكنني مساعدتك في الإجابة على الأسئلة، تقديم معلومات عن المنتجات، وغيرها. فقط أخبرني بما تحتاج.',
                'من انت': 'انا بوت ذكاء اصطناعي ادعى سيستم شات وانا هنا من اجل مساعدتك, من فضلك اخبرني كيف يمكنني المساعدة؟',
                'الاتصال': 'يمكنك الاتصال بنا على الرقم: 0123456789 أو عبر البريد الإلكتروني: info@company.com',
                'المنتجات': 'نقدم مجموعة متنوعة من المنتجات. هل يمكنك تحديد المنتج الذي تبحث عنه؟',
                'الخدمات': 'نوفر خدمات استشارية، تطوير برمجيات، وتصميم واجهات مستخدم. كيف يمكنني مساعدتك؟',
                'التخزين': 'يتم تخزين جميع محادثاتك لتحسين تجربتك وفهم احتياجاتك بشكل أفضل.',
                'البيانات': 'نقوم بتخزين بيانات المحادثات لتحليلها وتطوير البوت، مع الحفاظ على خصوصيتك.'
            };
            
            // Check for matching local response
            for (const [key, response] of Object.entries(localResponses)) {
                if (lowerMsg.includes(key)) {
                    return response;
                }
            }
            
            // If no local match, simulate API response
            const apiResponses = [
                'لم نعثر على إجابة حول سؤالك, من فضلك اسال سؤال أخر',
            ];
            
            return apiResponses[Math.floor(Math.random() * apiResponses.length)] + 
                '';
        }
        
        // Event listeners
        sendButton.addEventListener('click', sendMessage);
        
        messageInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });
        
        // Voice recognition
        let recognition;
        try {
            const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
            if (SpeechRecognition) {
                recognition = new SpeechRecognition();
                recognition.lang = 'ar-SA';
                recognition.continuous = false;
                
                micButton.addEventListener('click', () => {
                    if (micButton.classList.contains('active')) {
                        recognition.stop();
                        micButton.classList.remove('active');
                    } else {
                        recognition.start();
                        micButton.classList.add('active');
                    }
                });
                
                recognition.onresult = (event) => {
                    const transcript = event.results[0][0].transcript;
                    messageInput.value = transcript;
                    micButton.classList.remove('active');
                    
                    // Auto-send if we have a result
                    setTimeout(() => {
                        sendMessage();
                    }, 500);
                };
                
                recognition.onerror = () => {
                    micButton.classList.remove('active');
                };
                
                recognition.onend = () => {
                    micButton.classList.remove('active');
                };
            } else {
                micButton.style.display = 'none';
            }
        } catch (e) {
            micButton.style.display = 'none';
        }
        
        // Initial setup
        resetChat();

// End Chat Bot