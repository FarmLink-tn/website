document.addEventListener('DOMContentLoaded', () => {
    // --- DICTIONNAIRE DE TRADUCTION ---
    const translations = {
        fr: {
            nav_about: "À propos",
            nav_how_it_works: "Comment ça marche",
            nav_solutions: "Nos Solutions",
            nav_ai_advisor: " Conseiller IA",
            nav_control_panel: "Panneau de Contrôle",
            nav_get_quote: "Obtenir un devis",
            nav_about_mobile: "À propos",
            nav_how_it_works_mobile: "Comment ça marche",
            nav_solutions_mobile: "Nos Solutions",
            nav_ai_advisor_mobile: " Conseiller IA",
            nav_control_panel_mobile: "Panneau de Contrôle",
            nav_get_quote_mobile: "Obtenir un devis",
            hero_title: "Du traditionnel au smart - connectez votre ferme à l'avenir.",
            hero_subtitle: "Solutions de modernisation abordables pour une agriculture plus efficace.",
            hero_button: "Découvrir nos solutions",
            about_main_title: "L'Agriculture de Demain, Une Récolte à la Fois.",
            about_vision_title: "Notre Vision : Un futur où chaque ferme est intelligente.",
            about_intro_text: "Chez FarmLink, nous voyons l'agriculture non pas comme une industrie du passé, mais comme la technologie la plus essentielle de l'avenir...",
            read_more: "Lire la suite",
            about_vision_title_full: "Notre Vision : Un futur où chaque ferme est intelligente.",
            about_vision_text: "Chez FarmLink, nous voyons l'agriculture non pas comme une industrie du passé, mais comme la technologie la plus essentielle de l'avenir. Nous croyons que la sagesse des pratiques traditionnelles et la puissance des innovations de pointe peuvent coexister pour créer quelque chose de véritablement révolutionnaire. Notre mission est de démocratiser l'agriculture intelligente.",
            about_commitment_title: "Notre Engagement : Affronter les défis mondiaux avec l'innovation \"retrofit\".",
            about_commitment_text: "Dans un monde où les ressources sont limitées et les défis climatiques s'intensifient, la mission de FarmLink est plus vitale que jamais.",
            about_invest_title: "Pourquoi investir dans FarmLink ?",
            about_invest_text: "Nous ne vendons pas seulement des produits ; nous offrons un avenir durable.",
            how_it_works_title: "Comment ça marche ?",
            step1_title: "Installation \"Retrofit\"",
            step1_desc: "Nous installons nos modules sur votre équipement existant, sans remplacement coûteux.",
            step2_title: "Connexion au Cloud",
            step2_desc: "Les capteurs envoient les données en temps réel à notre plateforme sécurisée.",
            step3_title: "Contrôle & Optimisation",
            step3_desc: "Vous gérez tout depuis le panneau de contrôle et recevez des recommandations de l'IA.",
            solutions_title: "Nos Solutions Modulaires",
            solution_irrigation_title: "Irrigation Intelligente",
            solution_irrigation_desc: "Optimisez votre consommation d'eau avec des vannes intelligentes et une planification automatisée.",
            solution_pump_title: "Contrôle des Pompes",
            solution_pump_desc: "Gérez vos pompes à distance et surveillez le débit et la pression en temps réel.",
            solution_env_title: "Surveillance Environnementale",
            solution_env_desc: "Prenez des décisions éclairées grâce aux données des capteurs de température, d'humidité et de sol.",
            ai_advisor_title: " Conseiller Agricole IA",
            ai_advisor_intro: "Un problème avec vos cultures ? Décrivez-le et obtenez une analyse instantanée.",
            ai_advisor_label: "Description du problème",
            ai_advisor_button: "Obtenir une analyse IA",
            ai_prompt_template: "Vous êtes un conseiller agronome expert pour FarmLink, une solution d'agriculture intelligente en Tunisie. Votre objectif est de fournir des conseils pratiques et précis aux agriculteurs locaux. Analysez le problème suivant, en tenant compte du contexte tunisien. Fournissez une réponse structurée comme suit :\n\n**Analyse du Problème :** [Votre analyse détaillée de la description]\n\n**Causes Possibles :**\n1. [Cause 1 avec explication]\n2. [Cause 2 avec explication]\n\n**Recommandations :**\n1. [Action concrète 1]\n2. [Action concrète 2]\n\n**Prévention :**\n- [Conseil de prévention 1]\n\n**Avertissement :** Ce conseil est généré par une IA. Pour des problèmes critiques, consultez un agronome humain.\n\nLe problème décrit par l'agriculteur est : \"{prompt}\". Répondez en français.",
            ai_error_message: "Désolé, une erreur est survenue lors de l'analyse. Veuillez réessayer.",
            control_panel_title: "Panneau de Contrôle Intelligent",
            valve_control_title: "Contrôle de la vanne",
            status: "Statut",
            valve_status_closed: "Fermée",
            valve_status_open: "Ouverte",
            valve_status_moving: "En cours...",
            valve_open: "Ouvrir",
            valve_close: "Fermer",
            valve_stop: "Arrêter",
            current_angle: "Angle actuel",
            sensor_temp: "Température",
            sensor_humidity: "Humidité",
            sensor_soil: "Humidité du sol",
            sensor_rain: "Pluie",
            rain_yes: "Oui",
            rain_no: "Non",
            generate_report: " Générer le Rapport du Jour",
            contact_title: "Contactez-nous",
            contact_name: "Nom",
            contact_email: "Email",
            contact_send: "Envoyer",
            summary_title: "Explorez FarmLink",
            summary_about_title: "Notre Vision : Un Futur Intelligent",
            summary_about_desc: "Nous démocratisons l'agriculture intelligente. Découvrez comment notre engagement envers l'innovation \"retrofit\" relève les défis mondiaux et crée un avenir durable pour tous.",
            summary_how_it_works_title: "Simple, Efficace, Connecté",
            summary_how_it_works_desc: "De l'installation \"retrofit\" sur votre équipement existant à la gestion via notre cloud sécurisé, découvrez notre processus simple en trois étapes pour optimiser votre ferme.",
            summary_solutions_title: "Solutions Modulaires Puissantes",
            summary_solutions_desc: "Irrigation intelligente, contrôle des pompes, surveillance environnementale. Explorez nos solutions conçues pour optimiser vos ressources et maximiser vos rendements.",
            summary_ai_advisor_title: "Votre Agronome Personnel",
            summary_ai_advisor_desc: "Un problème avec vos cultures ? Décrivez-le à notre Conseiller IA et recevez une analyse et des recommandations instantanées pour protéger votre récolte.",
            learn_more: "En savoir plus",
            "learn_more_about_us": "En savoir plus sur nous",
            "see_the_process": "Voir le processus",
            "explore_solutions": "Explorer nos solutions",
            "try_ai_advisor": "Essayer le conseiller IA",
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
            footer_copyright: "&copy; 2025 FarmLink. Tous droits réservés."
        },
        en: {
            nav_about: "About",
            nav_how_it_works: "How It Works",
            nav_solutions: "Our Solutions",
            nav_ai_advisor: " AI Advisor",
            nav_control_panel: "Control Panel",
            nav_get_quote: "Get a Quote",
            nav_about_mobile: "About",
            nav_how_it_works_mobile: "How It Works",
            nav_solutions_mobile: "Our Solutions",
            nav_ai_advisor_mobile: " AI Advisor",
            nav_control_panel_mobile: "Control Panel",
            nav_get_quote_mobile: "Get a Quote",
            hero_title: "From traditional to smart – connect your farm to the future.",
            hero_subtitle: "Affordable retrofit solutions for more efficient farming.",
            hero_button: "Discover our solutions",
            about_main_title: "The Agriculture of Tomorrow, One Harvest at a Time.",
            about_vision_title: "Our Vision: A future where every farm is smart.",
            about_intro_text: "At FarmLink, we see agriculture not as an industry of the past, but as the most essential technology of the future...",
            read_more: "Read more",
            about_vision_title_full: "Our Vision: A future where every farm is smart.",
            about_vision_text: "At FarmLink, we see agriculture not as an industry of the past, but as the most essential technology of the future. We believe that the wisdom of traditional practices and the power of cutting-edge innovations can coexist to create something truly revolutionary. Our mission is to democratize smart farming.",
            about_commitment_title: "Our Commitment: Tackling global challenges with retrofit innovation.",
            about_commitment_text: "In a world where resources are limited and climate challenges intensify, FarmLink's mission is more vital than ever.",
            about_invest_title: "Why invest in FarmLink?",
            about_invest_text: "We don't just sell products; we offer a sustainable future.",
            how_it_works_title: "How does it work?",
            step1_title: "Retrofit Installation",
            step1_desc: "We install our modules on your existing equipment, without costly replacements.",
            step2_title: "Cloud Connection",
            step2_desc: "Sensors send real-time data to our secure platform.",
            step3_title: "Control & Optimization",
            step3_desc: "You manage everything from the control panel and receive AI recommendations.",
            solutions_title: "Our Modular Solutions",
            solution_irrigation_title: "Smart Irrigation",
            solution_irrigation_desc: "Optimize your water usage with smart valves and automated scheduling.",
            solution_pump_title: "Pump Control",
            solution_pump_desc: "Manage your pumps remotely and monitor flow and pressure in real time.",
            solution_env_title: "Environmental Monitoring",
            solution_env_desc: "Make informed decisions with data from temperature, humidity, and soil sensors.",
            ai_advisor_title: " AI Farming Advisor",
            ai_advisor_intro: "Having an issue with your crops? Describe it and get an instant analysis.",
            ai_advisor_label: "Problem Description",
            ai_advisor_button: "Get AI Analysis",
            ai_prompt_template: "You are an expert agronomist advisor for FarmLink, a smart farming solution in Tunisia. Your goal is to provide practical and accurate advice to local farmers. Analyze the following problem, keeping the Tunisian context in mind. Provide a structured response as follows:\n\n**Problem Analysis:** [Your detailed analysis of the description]\n\n**Possible Causes:**\n1. [Cause 1 with explanation]\n2. [Cause 2 with explanation]\n\n**Recommendations:**\n1. [Concrete action 1]\n2. [Concrete action 2]\n\n**Prevention:**\n- [Prevention tip 1]\n\n**Disclaimer:** This advice is AI-generated. For critical issues, please consult a human agronomist.\n\nThe problem described by the farmer is: \"{prompt}\". Respond in English.",
            ai_error_message: "Sorry, an error occurred during the analysis. Please try again.",
            control_panel_title: "Smart Control Panel",
            valve_control_title: "Valve Control",
            status: "Status",
            valve_status_closed: "Closed",
            valve_status_open: "Open",
            valve_status_moving: "In progress...",
            valve_open: "Open",
            valve_close: "Close",
            valve_stop: "Stop",
            current_angle: "Current angle",
            sensor_temp: "Temperature",
            sensor_humidity: "Humidity",
            sensor_soil: "Soil moisture",
            sensor_rain: "Rain",
            rain_yes: "Yes",
            rain_no: "No",
            generate_report: " Generate Daily Report",
            contact_title: "Contact Us",
            contact_name: "Name",
            contact_email: "Email",
            contact_send: "Send",
            summary_about_title: "Our Vision: A Smart Future",
            summary_about_desc: "We are democratizing smart agriculture. Discover how our commitment to 'retrofit' innovation addresses global challenges and creates a sustainable future for all.",
            summary_how_it_works_title: "Simple, Efficient, Connected",
            summary_how_it_works_desc: "From 'retrofit' installation on your existing equipment to management via our secure cloud, discover our simple three-step process to optimize your farm.",
            summary_solutions_title: "Powerful Modular Solutions",
            summary_solutions_desc: "Smart irrigation, pump control, environmental monitoring. Explore our solutions designed to optimize your resources and maximize your yields.",
            summary_ai_advisor_title: "Your Personal Agronomist",
            summary_ai_advisor_desc: "Have a problem with your crops? Describe it to our AI Advisor and receive an instant analysis and recommendations to protect your harvest.",
            learn_more: "Learn More",
            "learn_more_about_us": "Learn more about us",
            "see_the_process": "See the process",
            "explore_solutions": "Explore our solutions",
            "try_ai_advisor": "Try the AI advisor",
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
            footer_copyright: "&copy; 2025 FarmLink. All rights reserved."
        },
        ar: {
            nav_about: "حول",
            nav_how_it_works: "كيف تعمل",
            nav_solutions: "حلولنا",
            nav_ai_advisor: "المستشار الذكي",
            nav_control_panel: "لوحة التحكم",
            nav_get_quote: "احصل على عرض",
            nav_about_mobile: "حول",
            nav_how_it_works_mobile: "كيف تعمل",
            nav_solutions_mobile: "حلولنا",
            nav_ai_advisor_mobile: " المستشار الذكي",
            nav_control_panel_mobile: "لوحة التحكم",
            nav_get_quote_mobile: "احصل على عرض",
            hero_title: "من الزراعة التقليدية إلى الذكية – اربط مزرعتك بالمستقبل.",
            hero_subtitle: "حلول تحديث بأسعار معقولة لزراعة أكثر كفاءة.",
            hero_button: "اكتشف حلولنا",
            about_main_title: "زراعة الغد، حصاد بعد حصاد.",
            about_vision_title: "رؤيتنا: مستقبل تكون فيه كل مزرعة ذكية.",
            about_intro_text: "في FarmLink، لا نرى الزراعة كصناعة من الماضي، بل كأهم تكنولوجيا للمستقبل...",
            read_more: "اقرأ المزيد",
            about_vision_title_full: "رؤيتنا: مستقبل تكون فيه كل مزرعة ذكية.",
            about_vision_text: "في FarmLink، نرى الزراعة ليست كصناعة من الماضي، بل كأهم تكنولوجيا للمستقبل. نحن نؤمن أن حكمة الممارسات التقليدية وقوة الابتكارات الحديثة يمكن أن تتعايش معًا لخلق شيء ثوري حقًا. مهمتنا هي نشر الزراعة الذكية.",
            about_commitment_title: "حلولنا في إعادة التأهيل",
            about_commitment_text: "بروح التحديث، نحول الأنظمة التقليدية إلى منصات ذكية، مستدامة، وفعّالة… لنزرع مستقبلاً أفضل، حيث تتغلب التكنولوجيا على الحدود، ويصبح كل تحدٍ فرصة للنمو.",
            about_invest_title: "لماذا تستثمر في FarmLink؟",
            about_invest_text: "نحن لا نبيع منتجات فقط؛ نحن نقدم مستقبلًا مستدامًا.",
            how_it_works_title: "كيف تعمل؟",
            step1_title: "تركيب مرن",
            step1_desc: "نقوم بتركيب وحداتنا على معداتك الحالية دون الحاجة إلى استبدال مكلف.",
            step2_title: "الاتصال عن بُعد",
            step2_desc: "ترسل أجهزة الاستشعار البيانات في الوقت الحقيقي إلى منصتنا الآمنة.",
            step3_title: "التحكم والتحسين",
            step3_desc: "تدير كل شيء من لوحة التحكم وتتلقى توصيات الذكاء الاصطناعي.",
            solutions_title: "حلولنا المبتكرة حسب احتياجاتك",
            solution_irrigation_title: "الري الذكي",
            solution_irrigation_desc: "قم بتحسين استهلاك المياه باستخدام الصمامات الذكية والجدولة التلقائية.",
            solution_pump_title: "التحكم في المضخات",
            solution_pump_desc: "قم بإدارة مضخاتك عن بُعد ومراقبة التدفق والضغط في الوقت الفعلي.",
            solution_env_title: "المراقبة البيئية",
            solution_env_desc: "اتخذ قرارات مستنيرة بفضل بيانات أجهزة الاستشعار الخاصة بدرجة الحرارة والرطوبة والتربة.",
            ai_advisor_title: "المستشار الزراعي الذكي",
            ai_advisor_intro: "هل لديك مشكلة في محاصيلك؟ صفها واحصل على تحليل فوري.",
            ai_advisor_label: "وصف المشكلة",
            ai_advisor_button: "احصل على تحليل بالذكاء الاصطناعي",
            ai_prompt_template: "أنت مستشار زراعي خبير لدى FarmLink، وهي شركة حلول زراعية ذكية في تونس. هدفك هو تقديم نصائح عملية ودقيقة للمزارعين المحليين. قم بتحليل المشكلة التالية مع الأخذ في الاعتبار السياق التونسي. قدم إجابة منظمة على النحو التالي:\n\n**تحليل المشكلة:** [تحليلك المفصل للوصف]\n\n**الأسباب المحتملة:**\n1. [السبب الأول مع الشرح]\n2. [السبب الثاني مع الشرح]\n\n**التوصيات:**\n1. [إجراء عملي 1]\n2. [إجراء عملي 2]\n\n**الوقاية:**\n- [نصيحة وقائية 1]\n\n**إخلاء مسؤولية:** هذه النصيحة تم إنشاؤها بواسطة الذكاء الاصطناعي. للمشاكل الحرجة، يرجى استشارة مهندس زراعي بشري.\n\nالمشكلة التي وصفها المزارع هي: \"{prompt}\". أجب باللغة العربية.",
            ai_error_message: "عذراً، حدث خطأ أثناء التحليل. يرجى المحاولة مرة أخرى.",
            control_panel_title: "لوحة التحكم الذكية",
            valve_control_title: "التحكم في الصمام",
            status: "الحالة",
            valve_status_closed: "مغلق",
            valve_status_open: "مفتوح",
            valve_status_moving: "قيد التشغيل...",
            valve_open: "افتح",
            valve_close: "أغلق",
            valve_stop: "إيقاف",
            current_angle: "الزاوية الحالية",
            sensor_temp: "درجة الحرارة",
            sensor_humidity: "الرطوبة",
            sensor_soil: "رطوبة التربة",
            sensor_rain: "مطر",
            rain_yes: "نعم",
            rain_no: "لا",
            generate_report: "توليد تقرير اليوم",
            contact_title: "اتصل بنا",
            contact_name: "الاسم",
            contact_email: "البريد الإلكتروني",
            contact_send: "إرسال",
            summary_title: "اكتشف FarmLink",
            summary_about_title: "رؤيتنا: مستقبل ذكي",
            summary_about_desc: "نحن نعمل على نشر الزراعة الذكية. اكتشف كيف يواجه التزامنا بالابتكار \"التحديثي\" التحديات العالمية ويخلق مستقبلًا مستدامًا للجميع.",
            summary_how_it_works_title: "بسيط، فعال، متصل",
            summary_how_it_works_desc: "من التركيب \"التحديثي\" على معداتك الحالية إلى الإدارة عبر السحابة الآمنة، اكتشف عمليتنا البسيطة المكونة من ثلاث خطوات لتحسين مزرعتك.",
            summary_solutions_title: "حلول معيارية قوية",
            summary_solutions_desc: "الري الذكي، التحكم في المضخات، المراقبة البيئية. استكشف حلولنا المصممة لتحسين مواردك وزيادة غلتك.",
            summary_ai_advisor_title: "مهندسك الزراعي الشخصي",
            summary_ai_advisor_desc: "هل لديك مشكلة في محاصيلك؟ صفها لمستشارنا الذكي واحصل على تحليل وتوصيات فورية لحماية محصولك.",
            learn_more: "اعرف المزيد",
            "learn_more_about_us": "اعرف المزيد عنا",
            "see_the_process": "شاهد العملية",
            "explore_solutions": "استكشف حلولنا",
            "try_ai_advisor": "جرب المستشار الذكي",
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
            footer_copyright: "&copy; 2025 FarmLink. جميع الحقوق محفوظة."
        }
    };

    // --- GLOBAL VARIABLES ---
    let currentLang = 'fr';

    // --- ELEMENT SELECTORS ---
    const htmlElement = document.documentElement;
    const body = document.body;
    const languageSwitcher = document.getElementById('language-switcher');
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const themeToggle = document.getElementById('theme-toggle');
    const themeIconLight = document.getElementById('theme-icon-light');
    const themeIconDark = document.getElementById('theme-icon-dark');
    const aiAdvisorForm = document.getElementById('ai-advisor-form');

    // --- FUNCTIONS ---

    /**
     * Applies the selected language to the entire site.
     * @param {string} lang - The language code (fr, en, ar).
     */
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

    /**
     * Applies the theme (light or dark) to the page.
     * @param {string} theme - The theme to apply ('light' or 'dark').
     */
    const applyTheme = (theme) => {
        if (theme === 'dark') {
            body.classList.add('dark');
            themeIconLight.classList.add('hidden');
            themeIconDark.classList.remove('hidden');
        } else {
            body.classList.remove('dark');
            themeIconLight.classList.remove('hidden');
            themeIconDark.classList.add('hidden');
        }
    };

    // --- HIGHLIGHT ACTIVE NAV LINK ---
    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll('.nav-link').forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage) {
            link.classList.add('active');
        }
    });

    // --- NOUVEAUX SÉLECTEURS POUR L'ANALYSEUR D'IMAGE ---
const imageUploadInput = document.getElementById('image-upload');
const imagePreviewContainer = document.getElementById('image-preview-container');
const imagePreview = document.getElementById('image-preview');
const imageResultContainer = document.getElementById('image-result-container');
const imageSpinner = document.getElementById('image-spinner');
const imageResultText = document.getElementById('image-result-text');


// --- NOUVELLE FONCTION POUR L'ANALYSE D'IMAGE ---
async function handleImageUpload(event) {
    const file = event.target.files[0];
    if (!file) return;

    // 1. Afficher l'aperçu de l'image
    const reader = new FileReader();
    reader.onload = (e) => {
        imagePreview.src = e.target.result;
        imagePreviewContainer.classList.remove('hidden');
    };
    reader.readAsDataURL(file);

    // 2. Préparer et afficher le spinner (indicateur de chargement)
    imageResultContainer.classList.remove('hidden');
    imageSpinner.classList.remove('hidden');
    imageResultText.classList.add('hidden');
    imageResultText.innerHTML = '';

    // 3. Envoyer l'image à l'API de l'IA
    const formData = new FormData();
    formData.append('image', file);

    try {
        // !! IMPORTANT !!
        // C'est l'URL de votre serveur IA.
        // Remplacez-la par l'URL de votre API une fois déployée.
        const apiUrl = 'http://127.0.0.1:5000/predict'; 
        
        const response = await fetch(apiUrl, {
            method: 'POST',
            body: formData
        });

        if (!response.ok) {
            throw new Error(`Erreur du serveur: ${response.statusText}`);
        }

        const data = await response.json();

        // 4. Afficher le résultat reçu de l'IA
        const confidencePercentage = (data.confiance * 100).toFixed(1);
        let resultHTML = `
            <h4 class="text-xl font-bold mb-2">Résultat de l'analyse :</h4>
            <p><strong>Diagnostic :</strong> ${data.diagnostic}</p>
            <p><strong>Niveau de confiance :</strong> ${confidencePercentage}%</p>
        `;
        
        // Ajouter une recommandation simple basée sur le diagnostic
        if (data.diagnostic.toLowerCase().includes('mildiou')) {
             resultHTML += `<p class="mt-4"><strong>Recommandation :</strong> Il est conseillé de retirer les feuilles infectées et d'appliquer un traitement fongicide adapté. Assurez une bonne circulation de l'air autour des plants.</p>`;
        } else {
             resultHTML += `<p class="mt-4"><strong>Recommandation :</strong> Votre plante semble en bonne santé. Continuez de surveiller régulièrement son état.</p>`;
        }

        imageResultText.innerHTML = resultHTML;

    } catch (error) {
        console.error("Erreur lors de l'analyse de l'image:", error);
        imageResultText.innerHTML = `<p class="text-red-500"><strong>Erreur :</strong> Impossible d'analyser l'image. Veuillez réessayer plus tard.</p>`;
    } finally {
        // 5. Cacher le spinner et afficher le texte du résultat
        imageSpinner.classList.add('hidden');
        imageResultText.classList.remove('hidden');
    }
}

// --- NOUVEL EVENT LISTENER POUR LE TÉLÉVERSEMENT D'IMAGE ---
// Ce code s'active quand l'utilisateur choisit un fichier.
if (imageUploadInput) {
    imageUploadInput.addEventListener('change', handleImageUpload);
}

    // --- EVENT LISTENERS AND INITIALIZATION ---
    
    if (languageSwitcher) {
        languageSwitcher.addEventListener('change', (e) => {
            const newLang = e.target.value;
            localStorage.setItem('language', newLang);
            applyLanguage(newLang);
        });
    }

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const newTheme = body.classList.contains('dark') ? 'light' : 'dark';
            localStorage.setItem('theme', newTheme);
            applyTheme(newTheme);
        });
    }

    // --- INITIALIZATION ON PAGE LOAD ---
    
    // Apply saved or default language
    const savedLang = localStorage.getItem('language') || 'fr';
    if(languageSwitcher) languageSwitcher.value = savedLang;
    applyLanguage(savedLang);

    // Apply saved or default theme
    const savedTheme = localStorage.getItem('theme') || 'light';
    applyTheme(savedTheme);

    // Initialize AOS for animations
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            once: true,
            offset: 50,
        });
    }
});
