document.addEventListener('DOMContentLoaded', () => {
    // --- DICTIONNAIRE DE TRADUCTION COMPLET ---
    const translations = {
        fr: {
            nav_about: "À propos",
            nav_how_it_works: "Comment ça marche",
            nav_solutions: "Nos Solutions",
            nav_ai_advisor: "Conseiller IA",
            nav_get_quote: "Obtenir un devis",
            nav_about_mobile: "À propos",
            nav_how_it_works_mobile: "Comment ça marche",
            nav_solutions_mobile: "Nos Solutions",
            nav_ai_advisor_mobile: "Conseiller IA",
            nav_get_quote_mobile: "Obtenir un devis",
            hero_title: "Du traditionnel au smart - connectez votre ferme à l'avenir.",
            hero_subtitle: "Solutions de modernisation abordables pour une agriculture plus efficace.",
            hero_button: "Découvrir nos solutions",
            summary_about_title: "Notre Vision : Un Futur Intelligent",
            summary_about_desc: "Nous démocratisons l'agriculture intelligente. Découvrez comment notre engagement envers l'innovation \"retrofit\" relève les défis mondiaux et crée un avenir durable pour tous.",
            learn_more_about_us: "En savoir plus sur nous",
            summary_how_it_works_title: "Simple, Efficace, Connecté",
            summary_how_it_works_desc: "De l'installation \"retrofit\" sur votre équipement existant à la gestion via notre cloud sécurisé, découvrez notre processus simple en trois étapes pour optimiser votre ferme.",
            see_the_process: "Voir le processus",
            summary_solutions_title: "Solutions Modulaires Puissantes",
            summary_solutions_desc: "Irrigation intelligente, contrôle des pompes, surveillance environnementale. Explorez nos solutions conçues pour optimiser vos ressources et maximiser vos rendements.",
            explore_solutions: "Explorer nos solutions",
            summary_ai_advisor_title: "Votre Agronome Personnel",
            summary_ai_advisor_desc: "Un problème avec vos cultures ? Décrivez-le à notre Conseiller IA et recevez une analyse et des recommandations instantanées pour protéger votre récolte.",
            try_ai_advisor: "Essayer le conseiller IA",
            testimonials_title: "Ce que disent nos agriculteurs",
            testimonial_1_text: "\"FarmLink a transformé ma gestion de l'eau. J'économise du temps et de l'argent, et mes rendements n'ont jamais été aussi bons.\"",
            testimonial_1_name: "Karim A.",
            testimonial_1_location: "Agriculteur, Sidi Bouzid",
            testimonial_2_text: "\"L'installation a été incroyablement simple sur mon équipement existant. Le panneau de contrôle est très intuitif.\"",
            testimonial_2_name: "Fatma M.",
            testimonial_2_location: "Exploitante d'oliveraie, Sfax",
            testimonial_3_text: "\"Le conseiller IA est un véritable plus. Il m'a aidé à identifier un problème de ravageurs avant qu'il ne se propage. C'est l'avenir !\"",
            testimonial_3_name: "Youssef B.",
            testimonial_3_location: "Serriste, Kairouan",
            ai_advisor_title: "Conseiller Agricole IA",
            ai_advisor_image_title: "Analyse par Image (Démo)",
            ai_advisor_image_intro_demo: "Identifiez des objets dans vos photos. Cette démo utilise le modèle MobileNet v2 qui s'exécute entièrement dans votre navigateur.",
            uploadImage: "Choisir une image…",
            toggleCam: "Activer la caméra",
            classify: "Analyser l'image",
            resultHint: "Chargez une image pour commencer.",
            privacyNote: "Confidentialité garantie : Toute l'analyse est effectuée sur votre appareil, aucune image n'est envoyée sur un serveur.",
            ai_advisor_text_title: "Analyse par Texte",
            ai_advisor_intro: "Un problème avec vos cultures ? Décrivez-le et obtenez une analyse instantanée.",
            ai_advisor_label: "Description du problème",
            ai_advisor_button: "Obtenir une analyse IA",
            ai_error_message: "Désolé, une erreur est survenue lors de l'analyse. Veuillez réessayer.",
            context_agricole: `
                ### SUJET: AGRICULTURE EN TUNISIE ###
                L'agriculture en Tunisie fait face à des défis comme la sécheresse et la salinité des sols. Les cultures principales sont les olives, les céréales, les dattes et les agrumes. La bonne gestion de l'eau est cruciale.

                ### PROBLÈME: FEUILLES JAUNES (CHLOROSE) ###
                Les feuilles jaunes sur une plante sont souvent un signe de carence en nutriments ou de maladie.
                - Sur les tomates, des taches jaunes peuvent indiquer le mildiou, surtout si le temps est humide. Une autre cause est la carence en azote, qui fait jaunir les vieilles feuilles en premier.
                - Sur les oliviers, le jaunissement peut être causé par un manque d'eau, un sol trop calcaire, ou une maladie comme la verticilliose.
                - Sur les agrumes (citronniers, orangers), des feuilles jaunes avec des nervures vertes indiquent souvent une carence en fer (chlorose ferrique), fréquente dans les sols calcaires tunisiens. Solution : apport de chélate de fer.

                ### PROBLÈME: PARASITES COMMUNS ###
                - Les pucerons sont de petits insectes verts ou noirs qui sucent la sève, affaiblissant la plante et transmettant des maladies. Solution : savon noir dilué ou insecticide naturel.
                - La mouche de l'olivier pond ses œufs dans les olives, provoquant leur chute. Solution : surveillance avec des pièges (phéromones) et traitement si nécessaire.
                - L'araignée rouge se développe par temps chaud et sec et crée de fines toiles sous les feuilles. Solution : pulvérisation d'eau sur le feuillage pour augmenter l'humidité.
                
                ### PROBLÈME: TACHES NOIRES SUR LES FEUILLES ###
                Des taches noires sur les feuilles de tomate ou de pomme de terre peuvent être un signe d'alternariose, une maladie fongique. Solution : retirer les feuilles infectées, améliorer la circulation de l'air et appliquer un traitement à base de cuivre si l'attaque est sévère.
            `,
            footer_copyright: "&copy; 2025 FarmLink. Tous droits réservés."
        },
        en: {
            nav_about: "About",
            nav_how_it_works: "How It Works",
            nav_solutions: "Our Solutions",
            nav_ai_advisor: "AI Advisor",
            nav_get_quote: "Get a Quote",
            nav_about_mobile: "About",
            nav_how_it_works_mobile: "How It Works",
            nav_solutions_mobile: "Our Solutions",
            nav_ai_advisor_mobile: "AI Advisor",
            nav_get_quote_mobile: "Get a Quote",
            hero_title: "From traditional to smart – connect your farm to the future.",
            hero_subtitle: "Affordable retrofit solutions for more efficient farming.",
            hero_button: "Discover our solutions",
            summary_about_title: "Our Vision: A Smart Future",
            summary_about_desc: "We are democratizing smart agriculture. Discover how our commitment to 'retrofit' innovation addresses global challenges and creates a sustainable future for all.",
            learn_more_about_us: "Learn more about us",
            summary_how_it_works_title: "Simple, Efficient, Connected",
            summary_how_it_works_desc: "From 'retrofit' installation on your existing equipment to management via our secure cloud, discover our simple three-step process to optimize your farm.",
            see_the_process: "See the process",
            summary_solutions_title: "Powerful Modular Solutions",
            summary_solutions_desc: "Smart irrigation, pump control, environmental monitoring. Explore our solutions designed to optimize your resources and maximize your yields.",
            explore_solutions: "Explore our solutions",
            summary_ai_advisor_title: "Your Personal Agronomist",
            summary_ai_advisor_desc: "Have a problem with your crops? Describe it to our AI Advisor and receive an instant analysis and recommendations to protect your harvest.",
            try_ai_advisor: "Try the AI advisor",
            testimonials_title: "What Our Farmers Say",
            testimonial_1_text: "\"FarmLink has transformed my water management. I save time and money, and my yields have never been better.\"",
            testimonial_1_name: "Karim A.",
            testimonial_1_location: "Farmer, Sidi Bouzid",
            testimonial_2_text: "\"The installation was incredibly simple on my existing equipment. The control panel is very intuitive.\"",
            testimonial_2_name: "Fatma M.",
            testimonial_2_location: "Olive grove owner, Sfax",
            testimonial_3_text: "\"The AI advisor is a real game-changer. It helped me identify a pest problem before it spread. This is the future!\"",
            testimonial_3_name: "Youssef B.",
            testimonial_3_location: "Greenhouse farmer, Kairouan",
            ai_advisor_title: "AI Farming Advisor",
            ai_advisor_image_title: "Image Analysis (Demo)",
            ai_advisor_image_intro_demo: "Identify objects in your photos. This demo uses the MobileNet v2 model, which runs entirely in your browser.",
            uploadImage: "Choose an image…",
            toggleCam: "Enable camera",
            classify: "Analyze Image",
            resultHint: "Upload an image to start.",
            privacyNote: "Privacy guaranteed: All analysis is done on your device; no images are sent to a server.",
            ai_advisor_text_title: "Text Analysis",
            ai_advisor_intro: "Having an issue with your crops? Describe it and get an instant analysis.",
            ai_advisor_label: "Problem Description",
            ai_advisor_button: "Get AI Analysis",
            ai_error_message: "Sorry, an error occurred during the analysis. Please try again.",
            context_agricole: `
                ### SUBJECT: AGRICULTURE IN TUNISIA ###
                Agriculture in Tunisia faces challenges like drought and soil salinity. Main crops include olives, cereals, dates, and citrus fruits. Good water management is crucial.

                ### PROBLEM: YELLOW LEAVES (CHLOROSIS) ###
                Yellow leaves on a plant are often a sign of nutrient deficiency or disease.
                - On tomatoes, yellow spots can indicate downy mildew, especially in humid weather. Another cause is nitrogen deficiency, which yellows older leaves first.
                - On olive trees, yellowing can be caused by lack of water, soil that is too calcareous, or a disease like Verticillium wilt.
                - On citrus trees (lemon, orange), yellow leaves with green veins often indicate an iron deficiency (iron chlorosis), common in Tunisian calcareous soils. Solution: apply iron chelate.

                ### PROBLEM: COMMON PESTS ###
                - Aphids are small green or black insects that suck sap, weakening the plant and transmitting diseases. Solution: diluted black soap or a natural insecticide.
                - The olive fruit fly lays its eggs in olives, causing them to drop. Solution: monitoring with traps (pheromones) and treatment if necessary.
                - The red spider mite thrives in hot, dry weather and creates fine webs under the leaves. Solution: spray water on the foliage to increase humidity.

                ### PROBLEM: BLACK SPOTS ON LEAVES ###
                Black spots on tomato or potato leaves can be a sign of early blight (Alternaria), a fungal disease. Solution: remove infected leaves, improve air circulation, and apply a copper-based treatment if the attack is severe.
            `,
            footer_copyright: "&copy; 2025 FarmLink. All rights reserved."
        },
        ar: {
            nav_about: "حول",
            nav_how_it_works: "كيف تعمل",
            nav_solutions: "حلولنا",
            nav_ai_advisor: "المستشار الذكي",
            nav_get_quote: "احصل على عرض",
            nav_about_mobile: "حول",
            nav_how_it_works_mobile: "كيف تعمل",
            nav_solutions_mobile: "حلولنا",
            nav_ai_advisor_mobile: "المستشار الذكي",
            nav_get_quote_mobile: "احصل على عرض",
            hero_title: "من الزراعة التقليدية إلى الذكية – اربط مزرعتك بالمستقبل.",
            hero_subtitle: "حلول تحديث بأسعار معقولة لزراعة أكثر كفاءة.",
            hero_button: "اكتشف حلولنا",
            summary_about_title: "رؤيتنا: مستقبل ذكي",
            summary_about_desc: "نحن نعمل على نشر الزراعة الذكية. اكتشف كيف يواجه التزامنا بالابتكار \"التحديثي\" التحديات العالمية ويخلق مستقبلًا مستدامًا للجميع.",
            learn_more_about_us: "اعرف المزيد عنا",
            summary_how_it_works_title: "بسيط، فعال، متصل",
            summary_how_it_works_desc: "من التركيب \"التحديثي\" على معداتك الحالية إلى الإدارة عبر السحابة الآمنة، اكتشف عمليتنا البسيطة المكونة من ثلاث خطوات لتحسين مزرعتك.",
            see_the_process: "شاهد العملية",
            summary_solutions_title: "حلول معيارية قوية",
            summary_solutions_desc: "الري الذكي، التحكم في المضخات، المراقبة البيئية. استكشف حلولنا المصممة لتحسين مواردك وزيادة غلتك.",
            explore_solutions: "استكشف حلولنا",
            summary_ai_advisor_title: "مهندسك الزراعي الشخصي",
            summary_ai_advisor_desc: "هل لديك مشكلة في محاصيلك؟ صفها لمستشارنا الذكي واحصل على تحليل وتوصيات فورية لحماية محصولك.",
            try_ai_advisor: "جرب المستشار الذكي",
            testimonials_title: "ماذا يقول مزارعونا",
            testimonial_1_text: "\"لقد غيرت FarmLink إدارة المياه لدي. أوفر الوقت والمال، ومحاصيلي لم تكن أفضل من أي وقت مضى.\"",
            testimonial_1_name: "كريم أ.",
            testimonial_1_location: "مزارع، سيدي بوزيد",
            testimonial_2_text: "\"كان التركيب بسيطًا بشكل لا يصدق على معداتي الحالية. لوحة التحكم سهلة الاستخدام للغاية.\"",
            testimonial_2_name: "فاطمة م.",
            testimonial_2_location: "صاحبة بستان زيتون، صفاقس",
            testimonial_3_text: "\"المستشار الذكي هو إضافة حقيقية. لقد ساعدني في تحديد مشكلة الآفات قبل انتشارها. هذا هو المستقبل!\"",
            testimonial_3_name: "يوسف ب.",
            testimonial_3_location: "مزارع صوبات، القيروان",
            ai_advisor_title: "المستشار الزراعي الذكي",
            ai_advisor_image_title: "تحليل الصور (تجريبي)",
            ai_advisor_image_intro_demo: "تعرف على الأشياء في صورك. هذا العرض يستخدم نموذج MobileNet v2 الذي يعمل بالكامل في متصفحك.",
            uploadImage: "اختر صورة…",
            toggleCam: "تشغيل الكاميرا",
            classify: "تحليل الصورة",
            resultHint: "حمّل صورة للبدء.",
            privacyNote: "الخصوصية مضمونة: تتم جميع التحليلات على جهازك، ولا يتم إرسال أي صور إلى خادم.",
            ai_advisor_text_title: "تحليل النصوص",
            ai_advisor_intro: "هل لديك مشكلة في محاصيلك؟ صفها واحصل على تحليل فوري.",
            ai_advisor_label: "وصف المشكلة",
            ai_advisor_button: "احصل على تحليل بالذكاء الاصطناعي",
            ai_error_message: "عذراً، حدث خطأ أثناء التحليل. يرجى المحاولة مرة أخرى.",
            context_agricole: `
                ### الموضوع: الزراعة في تونس ###
                تواجه الزراعة في تونس تحديات مثل الجفاف وملوحة التربة. المحاصيل الرئيسية تشمل الزيتون والحبوب والتمور والحمضيات. الإدارة الجيدة للمياه أمر بالغ الأهمSية.

                ### المشكلة: الأوراق الصفراء (الكلوروسيس) ###
                الأوراق الصفراء على النبات غالبًا ما تكون علامة على نقص المغذيات أو المرض.
                - على الطماطم، يمكن أن تشير البقع الصفراء إلى مرض الميلديو، خاصة في الطقس الرطب. سبب آخر هو نقص النيتروجين، الذي يجعل الأوراق القديمة تصفر أولاً.
                - على أشجار الزيتون، قد يكون الاصفرار ناتجًا عن نقص المياه، أو التربة الكلسية جدًا، أو مرض مثل ذبول الفرتيسيليوم.
                - على أشجار الحمضيات (الليمون والبرتقال)، الأوراق الصفراء ذات العروق الخضراء غالبًا ما تشير إلى نقص الحديد، وهو شائع في التربة الكلسية التونسية. الحل: استخدام مخلّبات الحديد.

                ### المشكلة: الآفات الشائعة ###
                - حشرات المن هي حشرات صغيرة خضراء أو سوداء تمتص عصارة النبات، مما يضعفه وينقل الأمراض. الحل: صابون أسود مخفف أو مبيد حشري طبيعي.
                - ذبابة ثمار الزيتون تضع بيضها في ثمار الزيتون، مما يؤدي إلى تساقطها. الحل: المراقبة بالفخاخ (الفيرومونات) والمعالجة إذا لزم الأمر.
                - سوس العنكبوت الأحمر يزدهر في الطقس الحار والجاف وينسج شبكات دقيقة تحت الأوراق. الحل: رش الماء على الأوراق لزيادة الرطوبة.

                ### المشكلة: بقع سوداء على الأوراق ###
                البقع السوداء على أوراق الطماطم أو البطاطس يمكن أن تكون علامة على مرض اللفحة المبكرة (Alternaria)، وهو مرض فطري. الحل: إزالة الأوراق المصابة، وتحسين دوران الهواء، واستخدام علاج قائم على النحاس إذا كانت الإصابة شديدة.
            `,
            footer_copyright: "&copy; 2025 FarmLink. جميع الحقوق محفوظة."
        }
    };
    
    // --- SÉLECTEURS D'ÉLÉMENTS ---
   let currentLang = 'fr';
    const htmlElement = document.documentElement;
    const body = document.body;
    const languageSwitcher = document.getElementById('language-switcher');
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const themeToggle = document.getElementById('theme-toggle');
    const themeIconLight = document.getElementById('theme-icon-light');
    const themeIconDark = document.getElementById('theme-icon-dark');

    const applyLanguage = (lang) => {
        currentLang = lang;
        htmlElement.lang = lang;
        htmlElement.dir = (lang === 'ar') ? 'rtl' : 'ltr';
        document.querySelectorAll('[data-translate]').forEach(el => {
            const key = el.getAttribute('data-translate');
            if (translations[lang] && translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });
    };

    const applyTheme = (theme) => {
        if (theme === 'dark') {
            body.classList.add('dark');
            if(themeIconLight) themeIconLight.classList.add('hidden');
            if(themeIconDark) themeIconDark.classList.remove('hidden');
        } else {
            body.classList.remove('dark');
            if(themeIconLight) themeIconLight.classList.remove('hidden');
            if(themeIconDark) themeIconDark.classList.add('hidden');
        }
    };
    
    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll('.nav-link').forEach(link => {
        if (link.getAttribute('href') === currentPage) link.classList.add('active');
    });

    if (languageSwitcher) languageSwitcher.addEventListener('change', (e) => {
        const newLang = e.target.value;
        localStorage.setItem('language', newLang);
        applyLanguage(newLang);
    });
    if (menuBtn && mobileMenu) menuBtn.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));
    if (themeToggle) themeToggle.addEventListener('click', () => {
        const newTheme = body.classList.contains('dark') ? 'light' : 'dark';
        localStorage.setItem('theme', newTheme);
        applyTheme(newTheme);
    });

    // --- LOGIQUE SPÉCIFIQUE À LA PAGE AI-ADVISOR ---
    if (document.getElementById('ai-advisor')) {
        let models = { qna: null, image: null, ready: false };
        let stream = null;

        const aiInputForm = document.getElementById('ai-input-form');
        const textInput = document.getElementById('text-input');
        const fileInput = document.getElementById('fileInput');
        const webcamBtn = document.getElementById('webcamBtn');
        const captureBtn = document.getElementById('captureBtn');
        
        const imagePreviewWrapper = document.getElementById('image-preview-wrapper');
        const previewImg = document.getElementById('previewImg');
        const cam = document.getElementById('cam');
        const aiResponseText = document.getElementById('ai-response-text');
        const aiSpinner = document.getElementById('ai-spinner');
        
        const progressContainer = document.getElementById('progress-container');
        const progressBar = document.getElementById('progressBar');

        function showSpinner(show) { aiSpinner.classList.toggle('hidden', !show); }
        function updateProgressBar(p) { if(progressBar) progressBar.style.width = `${p}%`; }
        
        function setInputEnabled(enabled) {
            textInput.disabled = !enabled;
            aiInputForm.querySelector('button[type="submit"]').disabled = !enabled;
            textInput.placeholder = enabled ? "Posez votre question ici..." : "Chargement des modèles IA...";
        }

        async function preloadModels() {
            setInputEnabled(false);
            progressContainer.classList.remove('hidden');
            updateProgressBar(10);
            aiResponseText.textContent = "Chargement des modèles IA...";
            try {
                if (typeof qna !== 'undefined') {
                    models.qna = await qna.load();
                    console.log('Modèle IA Texte chargé.');
                    updateProgressBar(50);
                }
                if (typeof mobilenet !== 'undefined') {
                    await tf.setBackend('webgl');
                    models.image = await mobilenet.load({ version: 2, alpha: 1.0 });
                    console.log('Modèle IA Image chargé.');
                    updateProgressBar(100);
                }
                models.ready = true;
                aiResponseText.innerHTML = `<p data-translate="ai_welcome">${translations[currentLang].ai_welcome}</p>`;
                setInputEnabled(true);
            } catch (error) {
                console.error("Échec du chargement des modèles:", error);
                aiResponseText.textContent = "Erreur lors du chargement des modèles IA.";
            } finally {
                 setTimeout(() => progressContainer.classList.add('hidden'), 1000);
            }
        }

        async function handleTextAnalysis(question) {
            if (!question.trim()) return;
            if (!models.ready || !models.qna) {
                aiResponseText.textContent = "Le modèle IA texte n'est pas encore prêt.";
                return;
            }
            showSpinner(true);
            aiResponseText.textContent = '';
            imagePreviewWrapper.classList.add('hidden');
            
            try {
                const context = translations[currentLang].context_agricole;
                const answers = await models.qna.findAnswers(question, context);
                if (answers && answers.length > 0) {
                    const bestAnswer = answers.sort((a, b) => b.score - a.score)[0];
                    aiResponseText.innerHTML = `<p><strong>Réponse :</strong> ${bestAnswer.text}</p><p class="text-sm mt-2"><em>(Confiance : ${Math.round(bestAnswer.score*100)}%)</em></p>`;
                } else {
                    aiResponseText.innerHTML = "<p>Désolé, je n'ai pas trouvé de réponse précise. Essayez de reformuler votre question.</p>";
                }
            } catch (error) {
                console.error("Erreur QnA:", error);
                aiResponseText.textContent = "Une erreur est survenue lors de l'analyse.";
            } finally {
                showSpinner(false);
            }
        }

        async function handleImageAnalysis(imageElement) {
            if (!imageElement || !imageElement.src) return;
            if (!models.ready || !models.image) {
                 aiResponseText.textContent = "Le modèle IA image n'est pas encore prêt.";
                 return;
            }
            showSpinner(true);
            aiResponseText.textContent = "Analyse de l'image en cours...";
            
            try {
                const predictions = await models.image.classify(imageElement);
                if (predictions && predictions.length > 0) {
                     const mainObject = predictions[0].className.split(',')[0];
                     const generatedQuestion = `Quelles sont les causes des taches sur une feuille de ${mainObject} ?`;
                     textInput.value = generatedQuestion;
                     textInput.style.height = 'auto'; textInput.style.height = textInput.scrollHeight + 'px';
                     aiResponseText.innerHTML = `<p>J'ai identifié un(e) <strong>${mainObject}</strong>. J'ai préparé une question pour vous. Appuyez sur Envoyer pour obtenir une analyse.</p>`;
                } else {
                    aiResponseText.innerHTML = "<p>Aucun objet n'a pu être identifié. Essayez une autre photo.</p>";
                }
            } catch (error) {
                console.error("Erreur MobileNet:", error);
                aiResponseText.textContent = "Une erreur est survenue lors de l'analyse de l'image.";
            } finally {
                showSpinner(false);
            }
        }
        
        function displayImage(src) {
            imagePreviewWrapper.classList.remove('hidden');
            previewImg.src = src;
            previewImg.hidden = false;
            cam.hidden = true;
            captureBtn.classList.add('hidden');
            if (stream) {
                stream.getTracks().forEach(track => track.stop());
                stream = null;
                webcamBtn.classList.remove('active');
            }
            handleImageAnalysis(previewImg);
        }

        async function toggleCam() {
            if (stream) {
                stream.getTracks().forEach(track => track.stop());
                stream = null;
                cam.hidden = true;
                captureBtn.classList.add('hidden');
                webcamBtn.classList.remove('active');
                aiResponseText.innerHTML = `<p data-translate="ai_welcome">${translations[currentLang].ai_welcome}</p>`;
                return;
            }
            try {
                stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } });
                cam.srcObject = stream;
                await cam.play();
                imagePreviewWrapper.classList.remove('hidden');
                cam.hidden = false;
                previewImg.hidden = true;
                webcamBtn.classList.add('active');
                captureBtn.classList.remove('hidden');
                aiResponseText.innerHTML = `<p>Caméra active. Appuyez sur le bouton <i class="fas fa-camera"></i> pour capturer.</p>`;
            } catch (err) {
                console.error("Erreur caméra:", err);
                alert("Impossible d'accéder à la caméra.");
            }
        }
        
        function captureImageFromCam() {
            if (!stream) return;
            const canvas = document.createElement('canvas');
            canvas.width = cam.videoWidth;
            canvas.height = cam.videoHeight;
            canvas.getContext('2d').drawImage(cam, 0, 0);
            const imageUrl = canvas.toDataURL('image/jpeg');
            displayImage(imageUrl);
        }

        aiInputForm.addEventListener('submit', (e) => {
            e.preventDefault();
            handleTextAnalysis(textInput.value);
            textInput.value = '';
            textInput.style.height = '40px';
        });

        fileInput.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (event) => displayImage(event.target.result);
                reader.readAsDataURL(file);
            }
        });

        webcamBtn.addEventListener('click', toggleCam);
        captureBtn.addEventListener('click', captureImageFromCam);
        
        textInput.addEventListener('input', () => {
            textInput.style.height = 'auto';
            textInput.style.height = textInput.scrollHeight + 'px';
        });

        preloadModels();
    }

    const savedLang = localStorage.getItem('language') || 'fr';
    if (languageSwitcher) languageSwitcher.value = savedLang;
    applyLanguage(savedLang);
    const savedTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    applyTheme(savedTheme);
    if (typeof AOS !== 'undefined') AOS.init({ duration: 800, once: true, offset: 50 });
});
