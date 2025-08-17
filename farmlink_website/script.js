document.addEventListener('DOMContentLoaded', () => {
    // --- DICTIONNAIRE DE TRADUCTION ---
    const translations = {
        fr: {
            nav_about: "À propos",
            nav_how_it_works: "Comment ça marche",
            nav_solutions: "Nos Solutions",
            nav_ai_advisor: "✨ Conseiller IA",
            nav_control_panel: "Panneau de Contrôle",
            nav_get_quote: "Obtenir un devis",
            nav_about_mobile: "À propos",
            nav_how_it_works_mobile: "Comment ça marche",
            nav_solutions_mobile: "Nos Solutions",
            nav_ai_advisor_mobile: "✨ Conseiller IA",
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
            ai_advisor_title: "✨ Conseiller Agricole IA",
            ai_advisor_intro: "Un problème avec vos cultures ? Décrivez-le et obtenez une analyse instantanée.",
            ai_advisor_label: "Description du problème",
            ai_advisor_button: "Obtenir une analyse IA",
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
            generate_report: "✨ Générer le Rapport du Jour",
            contact_title: "Contactez-nous",
            contact_name: "Nom",
            contact_email: "Email",
            contact_send: "Envoyer",
            footer_copyright: "&copy; 2025 FarmLink. Tous droits réservés."
        },
        en: {
            nav_about: "About",
            nav_how_it_works: "How It Works",
            nav_solutions: "Our Solutions",
            nav_ai_advisor: "✨ AI Advisor",
            nav_control_panel: "Control Panel",
            nav_get_quote: "Get a Quote",
            nav_about_mobile: "About",
            nav_how_it_works_mobile: "How It Works",
            nav_solutions_mobile: "Our Solutions",
            nav_ai_advisor_mobile: "✨ AI Advisor",
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
            ai_advisor_title: "✨ AI Farming Advisor",
            ai_advisor_intro: "Having an issue with your crops? Describe it and get an instant analysis.",
            ai_advisor_label: "Problem Description",
            ai_advisor_button: "Get AI Analysis",
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
            generate_report: "✨ Generate Daily Report",
            contact_title: "Contact Us",
            contact_name: "Name",
            contact_email: "Email",
            contact_send: "Send",
            footer_copyright: "&copy; 2025 FarmLink. All rights reserved."
        },
        ar: {
            nav_about: "حول",
            nav_how_it_works: "كيف تعمل",
            nav_solutions: "حلولنا",
            nav_ai_advisor: "✨ المستشار الذكي",
            nav_control_panel: "لوحة التحكم",
            nav_get_quote: "احصل على عرض",
            nav_about_mobile: "حول",
            nav_how_it_works_mobile: "كيف تعمل",
            nav_solutions_mobile: "حلولنا",
            nav_ai_advisor_mobile: "✨ المستشار الذكي",
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
            ai_advisor_title: "✨ المستشار الزراعي الذكي",
            ai_advisor_intro: "هل لديك مشكلة في محاصيلك؟ صفها واحصل على تحليل فوري.",
            ai_advisor_label: "وصف المشكلة",
            ai_advisor_button: "احصل على تحليل بالذكاء الاصطناعي",
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
            generate_report: "✨ توليد تقرير اليوم",
            contact_title: "اتصل بنا",
            contact_name: "الاسم",
            contact_email: "البريد الإلكتروني",
            contact_send: "إرسال",
            footer_copyright: "&copy; 2025 FarmLink. جميع الحقوق محفوظة."
        }
    };

    // --- VARIABLES GLOBALES ---
    let currentLang = 'fr';
    let valveAngle = 0;
    let valveTimer = null;

    // --- SÉLECTEURS D'ÉLÉMENTS ---
    const htmlElement = document.documentElement;
    const body = document.body;
    const languageSwitcher = document.getElementById('language-switcher');
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const valveAngleEl = document.getElementById('valveAngle');
    const valveStateTextEl = document.getElementById('valveStateText');
    const rainValueEl = document.getElementById('rainValue');
    const readMoreBtn = document.getElementById('read-more-btn');
    const aboutModal = document.getElementById('about-modal');
    const closeModalBtn = document.getElementById('close-modal-btn');
    const aiAdvisorForm = document.getElementById('ai-advisor-form');
    const generateReportBtn = document.getElementById('generate-report-btn');
    const themeToggle = document.getElementById('theme-toggle');
    const themeIconLight = document.getElementById('theme-icon-light');
    const themeIconDark = document.getElementById('theme-icon-dark');

    // --- FONCTIONS ---

    /**
     * Applique la langue sélectionnée à l'ensemble du site.
     * @param {string} lang - Le code de la langue (fr, en, ar).
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
        updateValveStatusText();
    };
    
    /**
     * Met à jour le texte d'état de la vanne en fonction de la langue actuelle.
     */
    const updateValveStatusText = () => {
        const t = translations[currentLang];
        let key = 'valve_status_moving';
        if (valveAngle === 0) key = 'valve_status_closed';
        else if (valveAngle === 90) key = 'valve_status_open';
        if (valveStateTextEl) valveStateTextEl.textContent = t[key];
    };
    
    /**
     * Simule la réception de données de capteurs et met à jour l'interface.
     */
    const simulateSensorData = () => {
        if(document.getElementById('tempValue')) document.getElementById('tempValue').textContent = (20 + Math.random() * 15).toFixed(1);
        if(document.getElementById('humidityValue')) document.getElementById('humidityValue').textContent = (40 + Math.random() * 50).toFixed(0);
        if(document.getElementById('soilValue')) document.getElementById('soilValue').textContent = (30 + Math.random() * 50).toFixed(0);
        if(rainValueEl) {
            const isRaining = Math.random() < 0.3;
            rainValueEl.textContent = isRaining ? translations[currentLang].rain_yes : translations[currentLang].rain_no;
        }
    };
    
    // Fonctions de contrôle de la vanne accessibles globalement
    window.stopValveTimer = () => clearInterval(valveTimer);
    window.openValve = () => {
        clearInterval(valveTimer);
        valveTimer = setInterval(() => {
            if (valveAngle < 90) {
                valveAngle++;
                if (valveAngleEl) valveAngleEl.textContent = valveAngle;
                updateValveStatusText();
            } else clearInterval(valveTimer);
        }, 40);
    };
    window.closeValve = () => {
        clearInterval(valveTimer);
        valveTimer = setInterval(() => {
            if (valveAngle > 0) {
                valveAngle--;
                if (valveAngleEl) valveAngleEl.textContent = valveAngle;
                updateValveStatusText();
            } else clearInterval(valveTimer);
        }, 40);
    };
    window.stopValve = () => stopValveTimer();

    // --- LOGIQUE GEMINI API ---

    /**
     * Appelle l'API Gemini pour obtenir une réponse à un prompt.
     * @param {string} prompt - La question ou le texte à envoyer à l'IA.
     * @returns {Promise<string>} La réponse textuelle de l'IA.
     */
    async function callGemini(prompt) {
        const apiKey = ""; // La clé sera injectée par l'environnement
        const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`;
        
        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] })
            });
            if (!response.ok) {
                throw new Error(`Erreur API: ${response.status}`);
            }
            const data = await response.json();
            return data.candidates[0].content.parts[0].text;
        } catch (error) {
            console.error("Erreur lors de l'appel à l'API Gemini:", error);
            return "Désolé, une erreur est survenue. Veuillez réessayer plus tard.";
        }
    }

    // Gestion du formulaire du conseiller IA
    if (aiAdvisorForm) {
        aiAdvisorForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const cropIssue = document.getElementById('crop-issue').value;
            if (!cropIssue.trim()) return;

            const responseContainer = document.getElementById('ai-advisor-response-container');
            const spinner = document.getElementById('ai-advisor-spinner');
            const responseEl = document.getElementById('ai-advisor-response');

            responseContainer.classList.remove('hidden');
            spinner.classList.remove('hidden');
            responseEl.classList.add('hidden');

            const prompt = `En tant qu'agronome expert, analyse le problème suivant sur une culture et fournis un diagnostic probable ainsi que des recommandations claires et simples pour un agriculteur. Problème : "${cropIssue}"`;
            
            const result = await callGemini(prompt);
            responseEl.innerHTML = result.replace(/\n/g, '<br>');
            
            spinner.classList.add('hidden');
            responseEl.classList.remove('hidden');
        });
    }
    
    // Gestion du bouton de génération de rapport
    if (generateReportBtn) {
        generateReportBtn.addEventListener('click', async () => {
            const temp = document.getElementById('tempValue').textContent;
            const humidity = document.getElementById('humidityValue').textContent;
            const soil = document.getElementById('soilValue').textContent;
            const rain = document.getElementById('rainValue').textContent;

            const responseContainer = document.getElementById('report-response-container');
            const spinner = document.getElementById('report-spinner');
            const responseEl = document.getElementById('report-response');

            responseContainer.classList.remove('hidden');
            spinner.classList.remove('hidden');
            responseEl.classList.add('hidden');

            const prompt = `Génère un rapport quotidien pour un agriculteur avec les données suivantes : Température: ${temp}°C, Humidité: ${humidity}%, Humidité du sol: ${soil}%, Pluie: ${rain}. Fournis un résumé et 2-3 recommandations.`;

            const result = await callGemini(prompt);
            responseEl.innerHTML = result.replace(/\n/g, '<br>');

            spinner.classList.add('hidden');
            responseEl.classList.remove('hidden');
        });
    }

    // --- GESTION DU THÈME (CLAIR/SOMBRE) ---
    
    /**
     * Applique le thème (clair ou sombre) à la page.
     * @param {string} theme - Le thème à appliquer ('light' ou 'dark').
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

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const newTheme = body.classList.contains('dark') ? 'light' : 'dark';
            localStorage.setItem('theme', newTheme);
            applyTheme(newTheme);
        });
    }

    // --- ÉCOUTEURS D'ÉVÉNEMENTS ET INITIALISATION ---
    
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

    // Gestion de la fenêtre modale "À propos"
    const openModal = () => {
        if (aboutModal) {
            aboutModal.classList.remove('hidden');
            setTimeout(() => aboutModal.classList.add('visible'), 10);
        }
    };
    const closeModal = () => {
        if (aboutModal) {
            aboutModal.classList.remove('visible');
            setTimeout(() => aboutModal.classList.add('hidden'), 300);
        }
    };

    if (readMoreBtn) readMoreBtn.addEventListener('click', openModal);
    if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);
    if (aboutModal) {
        aboutModal.addEventListener('click', (e) => {
            if (e.target === aboutModal) closeModal();
        });
    }

    // --- ANIMATIONS AU DÉFILEMENT ---
    const animatedSections = document.querySelectorAll('.animated-section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    animatedSections.forEach(section => {
        observer.observe(section);
    });

    // --- INITIALISATION AU CHARGEMENT DE LA PAGE ---
    
    // Appliquer la langue sauvegardée ou par défaut
    const savedLang = localStorage.getItem('language') || 'fr';
    if(languageSwitcher) languageSwitcher.value = savedLang;
    applyLanguage(savedLang);

    // Appliquer le thème sauvegardé ou par défaut
    const savedTheme = localStorage.getItem('theme') || 'light';
    applyTheme(savedTheme);
    
    // Démarrer la simulation des données de capteurs
    simulateSensorData();
    setInterval(simulateSensorData, 5000);
});
