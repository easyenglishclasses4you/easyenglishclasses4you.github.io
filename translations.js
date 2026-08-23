// Sistema de traducción alemán/inglés para Manchester English Academy
const translations = {
    de: {
        // Navigation
        nav_home: "Startseite",
        nav_about: "Über uns",
        nav_courses: "Kurse",
        nav_benefits: "Vorteile",
        nav_testimonials: "Bewertungen",
        nav_contact: "Kontakt",
        
        // Logo
        logo_text: "Manchester English Academy",
        
        // Hero Section
        hero_title: "Englisch lernen in der Schweiz - Nur CHF 25 pro Stunde",
        hero_subtitle: "Professionelle Englischkurse mit erfahrenen Lehrern in Zürich, Genf und Basel. Business English, IELTS-Vorbereitung und Privatunterricht online oder persönlich verfügbar. Flexible Terminplanung für Ihren Lebensstil.",
        hero_btn_primary: "Buchen Sie Ihre erste Lektion",
        hero_btn_secondary: "Alle Kurse ansehen",
        
        // About Section
        about_title: "Hochwertige Englischbildung in der Schweiz zu erschwinglichen Preisen",
        about_subtitle: "Authentische Englischbildung in die Schweiz bringen mit bezahlbaren Preisen",
        about_card1_title: "Zertifizierte professionelle Lehrer",
        about_card1_desc: "Lernen Sie von qualifizierten Englischlehrern mit umfangreicher internationaler Lehrerfahrung und nachgewiesener Erfolgsbilanz in der Sprachausbildung in der Schweiz.",
        about_card2_title: "Erschwingliche Englischlektionen",
        about_card2_desc: "Hochwertige Englischkurse für nur CHF 25 pro Stunde. Professionelle Sprachausbildung für jedes Budget ohne Kompromisse bei der Lehrqualität.",
        about_card3_title: "Flexible Lernoptionen",
        about_card3_desc: "Wählen Sie zwischen Online-Englischunterricht oder Präsenzunterricht in Zürich, Genf und Basel. Terminplanung für vielbeschäftigte Schweizer Lebensstile und Arbeitsverpflichtungen.",
        about_card4_title: "Nachgewiesene Erfolgsergebnisse",
        about_card4_desc: "95% unserer Studenten erreichen ihre Englischziele innerhalb von sechs Monaten. Garantierte Verbesserung in Sprechen, Schreiben, Lesen und Hören.",
        
        // Courses Section
        courses_title: "Englischkurse für jeden Bedarf in der Schweiz",
        courses_subtitle: "Wählen Sie das perfekte Englischprogramm für Ihre Ziele und Ihren Zeitplan",
        course1_title: "Business Englischkurse",
        course1_desc: "Steigern Sie Ihre Karriere mit professionellen Englischkenntnissen. Perfekt für Schweizer Geschäftsleute, die ihre Kommunikation für internationale Meetings, Präsentationen und Verhandlungen verbessern möchten.",
        course1_features: "✓ Fachvokabular\n✓ Präsentationsfähigkeiten\n✓ Berufliche E-Mails\n✓ Verhandlungstechniken",
        course2_title: "Allgemeine Englischkurse",
        course2_desc: "Beherrschen Sie Alltagsenglisch für Reisen, soziale Situationen und persönliches Wachstum. Ideal für in der Schweiz lebende Personen, die Konversationskompetenz aufbauen möchten.",
        course2_features: "✓ Konversationsübung\n✓ Grammatikgrundlagen\n✓ Hörverständnis\n✓ Alltäglicher Wortschatz",
        course3_title: "Englische Prüfungsvorbereitung",
        course3_desc: "Erreichen Sie Ihre Zielbewertung in IELTS, TOEFL, Cambridge oder anderen Englischprüfungen. Expertenbewertung mit bewährten Strategien und Übungstests für Schweizer Studenten.",
        course3_features: "✓ IELTS Vorbereitung\n✓ TOEFL Training\n✓ Cambridge Prüfungen\n✓ Übungstests",
        course4_title: "Private Englischlektionen",
        course4_desc: "Erhalten Sie persönliche Einzelbetreuung, die auf Ihre spezifischen Bedürfnisse zugeschnitten ist. Flexible Planung und maßgeschneiderte Unterrichtspläne für optimale Ergebnisse in der Schweiz.",
        course4_features: "✓ 1-zu-1 Aufmerksamkeit\n✓ Maßgeschneiderte Lektionen\n✓ Flexible Termine\n✓ Schneller Fortschritt",
        course_btn: "Jetzt anmelden",
        
        // Benefits Section
        benefits_title: "Warum Englisch mit uns in der Schweiz lernen?",
        benefits_subtitle: "Entdecken Sie die Vorteile professioneller Englischbildung für Schweizer Studenten",
        benefit1_title: "Karrierechancen erweitern",
        benefit1_desc: "Erhöhen Sie Ihr Berufspotenzial mit fließenden Englischkenntnissen. Studien zeigen, dass zweisprachige Fachleute in der Schweiz bis zu 20% mehr verdienen als einsprachige Kollegen.",
        benefit2_title: "Akademische Exzellenz erreichen",
        benefit2_desc: "Excel in der internationalen Bildung und erfüllen Sie Universitätszulassungsanforderungen. Englischkenntnisse öffnen Türen zu Spitzenuniversitäten und Forschungsmöglichkeiten in der Schweiz und im Ausland.",
        benefit3_title: "Kulturelles Verständnis aufbauen",
        benefit3_desc: "Tauchen Sie ein in englischsprachige Kulturen und erweitern Sie Ihre globale Perspektive. Entwickeln Sie interkulturelles Bewusstsein, das in der vielfältigen Schweizer Gesellschaft wesentlich ist.",
        benefit4_title: "Selbstvertrauen in der Kommunikation",
        benefit4_desc: "Sprechen Sie Englisch mit Selbstvertrauen in beruflichen und sozialen Situationen. Überwinden Sie Sprachbarrieren und drücken Sie sich klar in Meetings, Präsentationen und Gesprächen aus.",
        benefit5_title: "Reise- und Kommunikationsfreiheit",
        benefit5_desc: "Navigieren Sie mit Leichtigkeit durch die Welt und kommunizieren Sie effektiv in jedem englischsprachigen Land. Erleben Sie authentische kulturelle Immersion während internationaler Reisen.",
        benefit6_title: "Lebenslange wertvolle Fähigkeiten",
        benefit6_desc: "Gewinnen Sie wesentliche Kommunikationsfähigkeiten, die Ihrer gesamten Karriere und Ihrem persönlichen Leben zugutekommen. Englisch ist die globale Sprache für Wirtschaft, Wissenschaft und Technologie.",
        
        // Pricing (appears in courses)
        pricing_chf: "CHF 30",
        pricing_per_hour: "pro Stunde",
        
        // Testimonials Section
        testimonials_title: "Erfolgsgeschichten englischer Studenten in der Schweiz",
        testimonials_subtitle: "Lesen Sie Bewertungen von Studenten, die ihre Englischkenntnisse mit Manchester English Academy transformiert haben",
        testimonial1_text: "Manchester English Academy half mir, meinen Traumjob bei einem internationalen Unternehmen in Zürich zu sichern. Der erschwingliche Business-Englischkurs für CHF 30 pro Stunde war genau das, was ich brauchte, um meine beruflichen Kommunikationsfähigkeiten zu verbessern!",
        testimonial1_author: "Anna Schmidt",
        testimonial1_role: "Marketing Managerin, Zürich",
        testimonial2_text: "Ich erreichte meine IELTS 8.0-Punktzahl dank ihres Experten-Prüfungsvorbereitungskurses. Die professionellen Lehrer wissen wirklich, wie man Lernen effektiv und angenehm macht. Beste Englisch-Schule in der Schweiz für Prüfungsvorbereitung!",
        testimonial2_author: "David Müller",
        testimonial2_role: "Universitätsstudent, Genf",
        testimonial3_text: "Die privaten Englischlektionen passten perfekt in meinen vollen Terminkalender in Basel. In nur drei Monaten ging ich von Schwierigkeiten mit Grundgesprächen zu selbstbewussten Präsentationen bei internationalen Arbeitsmeetings über. Sehr empfehlenswert!",
        testimonial3_author: "Sophie Laurent",
        testimonial3_role: "Finanzdirektorin, Basel",
        
        // Contact Section
        contact_title: "Buchen Sie noch heute Ihre Englischlektion",
        contact_subtitle: "Kontaktieren Sie Manchester English Academy jetzt und beginnen Sie Ihre Englischlernreise in der Schweiz",
        contact_info_title: "Kontaktieren Sie uns",
        contact_email_label: "E-Mail-Adresse",
        contact_locations_label: "Servicestandorte",
        contact_locations_text: "Zürich, Bern, Genf, Basel und in der ganzen Schweiz",
        contact_whatsapp_title: "Scannen Sie für WhatsApp-Chat",
        contact_whatsapp_subtext: "Schnelle Antworten garantiert!",
        
        // Contact Form
        form_name: "Vollständiger Name *",
        form_email: "E-Mail-Adresse *",
        form_phone: "Telefonnummer *",
        form_course_select: "Wählen Sie Ihr Kursinteresse *",
        form_course_business: "Business Englischkurse",
        form_course_general: "Allgemeine Englischkurse",
        form_course_exam: "Englische Prüfungsvorbereitung",
        form_course_private: "Private Englischlektionen",
        form_message: "Ihre Nachricht *",
        form_submit: "Nachricht senden",
        form_sending: "Wird gesendet...",
        form_success: "Vielen Dank! Ihre Nachricht wurde erfolgreich gesendet. Wir werden uns bald bei Ihnen melden!",
        form_error: "Hoppla! Etwas ist schief gelaufen. Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt über WhatsApp.",
        form_validation_fill: "Bitte füllen Sie alle erforderlichen Felder aus.",
        form_validation_email: "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
        
        // Footer
        footer_title: "Manchester English Academy",
        footer_desc: "Premium Englischsprachbildung in der Schweiz. Erschwingliche Lektionen für CHF 30 pro Stunde mit professionellen Lehrern.",
        footer_quick_links: "Schnelllinks",
        footer_about: "Über uns",
        footer_courses: "Englischkurse",
        footer_benefits: "Vorteile",
        footer_reviews: "Studentenbewertungen",
        footer_contact: "Kontaktieren Sie uns",
        footer_contact_info: "Kontaktinformationen",
        footer_email: "E-Mail:",
        footer_locations: "Standorte: Zürich, Bern, Genf, Basel",
        footer_copyright: "© 2024 Manchester English Academy Schweiz. Alle Rechte vorbehalten.",
        footer_privacy: "Datenschutzrichtlinie",
        footer_terms: "Nutzungsbedingungen"
    },
    en: {
        // Navigation
        nav_home: "Home",
        nav_about: "About",
        nav_courses: "Courses",
        nav_benefits: "Benefits",
        nav_testimonials: "Testimonials",
        nav_contact: "Contact",
        
        // Logo
        logo_text: "Manchester English Academy",
        
        // Hero Section
        hero_title: "Learn English in Switzerland - Only CHF 30 per Hour",
        hero_subtitle: "Professional English courses with experienced teachers in Zurich, Geneva, and Basel. Business English, IELTS preparation, and private lessons available online or in-person. Flexible scheduling to fit your lifestyle.",
        hero_btn_primary: "Book Your First Lesson",
        hero_btn_secondary: "View All Courses",
        
        // About Section
        about_title: "Quality English education in Switzerland at prices you can afford",
        about_subtitle: "Bringing authentic English education to Switzerland with affordable pricing",
        about_card1_title: "Certified Professional Teachers",
        about_card1_desc: "Learn from qualified English instructors with extensive international teaching experience and proven track records in language education across Switzerland.",
        about_card2_title: "Affordable English Lessons",
        about_card2_desc: "High-quality English courses at just CHF 30 per hour. Professional language education that fits every budget without compromising on teaching excellence.",
        about_card3_title: "Flexible Learning Options",
        about_card3_desc: "Choose between online English lessons or in-person classes in Zurich, Geneva, and Basel. Scheduling designed to accommodate busy Swiss lifestyles and work commitments.",
        about_card4_title: "Proven Success Results",
        about_card4_desc: "95% of our students achieve their English language goals within six months. Guaranteed improvement in speaking, writing, reading, and listening skills.",
        
        // Courses Section
        courses_title: "English Courses for Every Need in Switzerland",
        courses_subtitle: "Choose the perfect English program for your goals and schedule",
        course1_title: "Business English Courses",
        course1_desc: "Elevate your career with professional English skills. Perfect for Swiss business professionals looking to enhance communication for international meetings, presentations, and negotiations.",
        course1_features: "✓ Industry Vocabulary\n✓ Presentation Skills\n✓ Professional Emails\n✓ Negotiation Techniques",
        course2_title: "General English Classes",
        course2_desc: "Master everyday English for travel, social situations, and personal growth. Ideal for individuals living in Switzerland who want to build conversational competence.",
        course2_features: "✓ Conversation Practice\n✓ Grammar Fundamentals\n✓ Listening Comprehension\n✓ Everyday Vocabulary",
        course3_title: "English Exam Preparation",
        course3_desc: "Achieve your target score on IELTS, TOEFL, Cambridge, or other English exams. Expert coaching with proven strategies and practice tests for Swiss students.",
        course3_features: "✓ IELTS Preparation\n✓ TOEFL Training\n✓ Cambridge Exams\n✓ Practice Tests",
        course4_title: "Private English Lessons",
        course4_desc: "Receive personalized one-on-one attention tailored to your specific needs. Flexible scheduling and customized lesson plans for optimal results in Switzerland.",
        course4_features: "✓ 1-on-1 Attention\n✓ Customized Lessons\n✓ Flexible Schedule\n✓ Rapid Progress",
        course_btn: "Enroll Now",
        
        // Benefits Section
        benefits_title: "Why Learn English with Us in Switzerland?",
        benefits_subtitle: "Discover the advantages of professional English education for Swiss students",
        benefit1_title: "Expand Career Opportunities",
        benefit1_desc: "Increase your professional potential with fluent English skills. Studies show bilingual professionals in Switzerland earn up to 20% more than monolingual colleagues.",
        benefit2_title: "Achieve Academic Excellence",
        benefit2_desc: "Excel in international education and meet university admission requirements. English proficiency opens doors to top universities and research opportunities in Switzerland and abroad.",
        benefit3_title: "Build Cultural Understanding",
        benefit3_desc: "Immerse yourself in English-speaking cultures and expand your global perspective. Develop cross-cultural awareness essential in Switzerland's diverse society.",
        benefit4_title: "Confidence in Communication",
        benefit4_desc: "Speak English with confidence in professional and social situations. Overcome language barriers and express yourself clearly in meetings, presentations, and conversations.",
        benefit5_title: "Travel and Communication Freedom",
        benefit5_desc: "Navigate the world with ease and communicate effectively in any English-speaking country. Experience authentic cultural immersion during international travel.",
        benefit6_title: "Lifetime Valuable Skills",
        benefit6_desc: "Gain essential communication abilities that will benefit your entire career and personal life. English is the global language of business, science, and technology.",
        
        // Pricing (appears in courses)
        pricing_chf: "CHF 30",
        pricing_per_hour: "per hour",
        
        // Testimonials Section
        testimonials_title: "English Student Success Stories in Switzerland",
        testimonials_subtitle: "Read testimonials from students who transformed their English skills with Manchester English Academy",
        testimonial1_text: "Manchester English Academy helped me secure my dream job at an international company in Zurich. The affordable business English course at CHF 30 per hour was exactly what I needed to improve my professional communication skills!",
        testimonial1_author: "Anna Schmidt",
        testimonial1_role: "Marketing Manager, Zurich",
        testimonial2_text: "I achieved my IELTS 8.0 score thanks to their expert exam preparation course. The professional teachers really know how to make learning effective and enjoyable. Best English school in Switzerland for exam preparation!",
        testimonial2_author: "David Müller",
        testimonial2_role: "University Student, Geneva",
        testimonial3_text: "The private English lessons fit perfectly into my busy schedule in Basel. In just three months, I went from struggling with basic conversations to confidently presenting at international work meetings. Highly recommend!",
        testimonial3_author: "Sophie Laurent",
        testimonial3_role: "Finance Director, Basel",
        
        // Contact Section
        contact_title: "Book Your English Lesson Today",
        contact_subtitle: "Contact Manchester English Academy now and start your English learning journey in Switzerland",
        contact_info_title: "Get in Touch With Us",
        contact_email_label: "Email Address",
        contact_locations_label: "Service Locations",
        contact_locations_text: "Zurich, Bern, Geneva, Basel, and throughout Switzerland",
        contact_whatsapp_title: "Scan to Chat on WhatsApp",
        contact_whatsapp_subtext: "Quick responses guaranteed!",
        
        // Contact Form
        form_name: "Full Name *",
        form_email: "Email Address *",
        form_phone: "Phone Number *",
        form_course_select: "Select Your Course Interest *",
        form_course_business: "Business English Courses",
        form_course_general: "General English Classes",
        form_course_exam: "English Exam Preparation",
        form_course_private: "Private English Lessons",
        form_message: "Your Message *",
        form_submit: "Send Message",
        form_sending: "Sending...",
        form_success: "Thank you! Your message has been sent successfully. We will contact you soon!",
        form_error: "Oops! Something went wrong. Please try again or contact us directly via WhatsApp.",
        form_validation_fill: "Please fill in all required fields.",
        form_validation_email: "Please enter a valid email address.",
        
        // Footer
        footer_title: "Manchester English Academy",
        footer_desc: "Premium English language education in Switzerland. Affordable lessons at CHF 30 per hour with professional teachers.",
        footer_quick_links: "Quick Links",
        footer_about: "About Us",
        footer_courses: "English Courses",
        footer_benefits: "Benefits",
        footer_reviews: "Student Reviews",
        footer_contact: "Contact Us",
        footer_contact_info: "Contact Information",
        footer_email: "Email:",
        footer_locations: "Locations: Zurich, Bern, Geneva, Basel",
        footer_copyright: "© 2024 Manchester English Academy Switzerland. All rights reserved.",
        footer_privacy: "Privacy Policy",
        footer_terms: "Terms of Service"
    }
};

// Función para cambiar el idioma
function changeLanguage(lang) {
    // Guardar preferencia en localStorage
    localStorage.setItem('preferredLanguage', lang);
    
    // Actualizar el atributo lang del HTML
    document.documentElement.lang = lang === 'de' ? 'de' : 'en';
    
    // Actualizar todos los elementos con data-translate
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[lang][key];
            } else if (element.tagName === 'SELECT' && key === 'form_course_select') {
                element.options[0].text = translations[lang][key];
            } else if (element.tagName === 'OPTION') {
                // Actualizar opciones del select
                const optionKey = element.getAttribute('data-translate');
                element.textContent = translations[lang][optionKey];
            } else {
                // Para elementos con saltos de línea (features)
                if (translations[lang][key].includes('\n')) {
                    element.innerHTML = translations[lang][key].replace(/\n/g, '<br>');
                } else {
                    element.textContent = translations[lang][key];
                }
            }
        }
    });
    
    // Actualizar banderas activas
    document.querySelectorAll('.lang-switch').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-lang="${lang}"]`).classList.add('active');
    
    // Actualizar texto del botón de envío del formulario si está enviando
    const submitBtn = document.querySelector('.btn-submit');
    if (submitBtn && submitBtn.disabled) {
        submitBtn.textContent = translations[lang].form_sending;
    }
}

// Inicializar idioma al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    // Detectar idioma del navegador o usar el guardado
    let defaultLang = localStorage.getItem('preferredLanguage');
    
    if (!defaultLang) {
        // Detectar idioma del navegador
        const browserLang = navigator.language.toLowerCase();
        defaultLang = browserLang.startsWith('de') ? 'de' : 'en';
    }
    
    changeLanguage(defaultLang);
});
