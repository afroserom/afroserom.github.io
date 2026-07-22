// Immediately invoked function to set theme and language from localStorage
  (function() {
    // --- THEME ---
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      document.documentElement.setAttribute('data-theme', savedTheme);
    } else {
      const prefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
      document.documentElement.setAttribute('data-theme', prefersLight ? 'light' : 'dark');
    }
  })();

  /* =====================
     Internationalisation
     ===================== */
  const translations = {
    en: {
      name: 'Andrés Felipe Rosero', title: 'Technical Lead • Data Scientist • Environmental Engineering Graduate (Colombia)',
      resumeCta: 'View Résumé on LinkedIn',
      aboutMeText: "My passion lies at the intersection of AI and engineering, where complex challenges become opportunities for innovation. Since 2019, I've focused on building robust AI solutions—from intelligent systems that prevent fraud and automate industrial recycling, to data architectures that deliver real-time insights on the cloud. This space is a glimpse into that journey.",
      journeyTitle: 'My Journey', 
      companyUpdata: 'Updata', companyDLocal: 'dLocal', companyMercado: 'Mercado Libre', companyKiwibot: 'Kiwibot (now Robot.com)',
      expUpdataLeadTitle: 'Technical Lead', expUpdataLeadDate: 'Jan 2026 – Present · Victoriaville, QC',
      expUpdataTitle: 'AI Specialist', expUpdataDate: 'Jun 2024 – Dec 2025',
      expMLEng: 'Machine Learning Engineer', expMLEngDate: 'Mar 2023 – Jun 2024',
      expDLocal: 'Senior Data Scientist', expDLocalDate: 'Aug 2022 – Apr 2023',
      expMercado: 'Data Scientist', expMercadoDate: 'Jul 2021 – Aug 2022',
      expKiwibotHead: 'Head of Data & Software', expKiwibotHeadDate: 'Feb 2020 – Feb 2021',
      expKiwibotDS: 'Data Scientist', expKiwibotDSDate: 'Aug 2019 – Jan 2020',
      expKiwibotOps: 'In Field Operations Analyst', expKiwibotOpsDate: 'Mar 2019 – Aug 2019',
      projectsTitle: 'My Projects',
      educationTitle: 'Education',
      eduUniandes: 'Universidad de Los Andes, Colombia',
      eduUniandesDegree: 'Bachelor of Science - BSc, Environmental Engineering',
      eduUniandesDate: '2014 – 2018',
      connectTitle: "Let's Connect",
      footer: `© ${new Date().getFullYear()} Andrés Rosero • Crafted with passion`
    },
    fr: {
      name: 'Andrés Felipe Rosero', title: 'Responsable Technique • Data Scientist • Diplômé en Génie de l\'Environnement (Colombie)',
      resumeCta: 'Voir mon CV sur LinkedIn',
      aboutMeText: "Ma passion se situe à l'intersection de l'IA et de l'ingénierie, où les défis complexes deviennent des opportunités d'innovation. Depuis 2019, je me concentre sur la création de solutions d'IA robustes—des systèmes intelligents qui préviennent la fraude et automatisent le recyclage industriel, aux architectures de données qui fournissent des informations en temps réel sur le cloud. Cet espace est un aperçu de ce parcours.",
      journeyTitle: 'Mon Parcours', 
      companyUpdata: 'Updata', companyDLocal: 'dLocal', companyMercado: 'Mercado Libre', companyKiwibot: 'Kiwibot (aujourd\'hui Robot.com)',
      expUpdataLeadTitle:'Responsable Technique', expUpdataLeadDate:'Janv 2026 – Aujourd\'hui · Victoriaville, QC',
      expUpdataTitle:'Spécialiste IA', expUpdataDate:'Juin 2024 – Déc 2025',
      expMLEng:'Ingénieur ML', expMLEngDate:'Mar 2023 – Juin 2024',
      expDLocal:'Data Scientist Senior', expDLocalDate:'Août 2022 – Avr 2023',
      expMercado:'Data Scientist', expMercadoDate:'Juil 2021 – Août 2022',
      expKiwibotHead:'Chef de Données & Logiciels', expKiwibotHeadDate:'Fév 2020 – Fév 2021',
      expKiwibotDS:'Data Scientist', expKiwibotDSDate:'Août 2019 – Janv 2020',
      expKiwibotOps:'Analyste des Opérations sur le Terrain', expKiwibotOpsDate:'Mars 2019 – Août 2019',
      projectsTitle: 'Mes Projets',
      educationTitle: 'Formation',
      eduUniandes: 'Universidad de Los Andes, Colombie',
      eduUniandesDegree: "Baccalauréat en sciences - BSc, Génie de l\'environnement",
      eduUniandesDate: '2014 – 2018',
      connectTitle: 'Restons Connectés',
      footer: `© ${new Date().getFullYear()} Andrés Rosero • Créé avec passion`
    },
    es: {
      name:'Andrés Felipe Rosero', title:'Líder Técnico • Científico de Datos • Graduado en Ingeniería Ambiental (Colombia)',
      resumeCta: 'Ver mi CV en LinkedIn',
      aboutMeText:'Mi pasión reside en la intersección de la IA y la ingeniería, donde los desafíos complejos se convierten en oportunidades para la innovación. Desde 2019, me he centrado en construir soluciones de IA robustas, desde sistemas inteligentes que previenen el fraude y automatizan el reciclaje industrial, hasta arquitecturas de datos que ofrecen información en tiempo real en la nube. Este espacio es un vistazo a esa trayectoria.',
      journeyTitle:'Mi Trayectoria', 
      companyUpdata: 'Updata', companyDLocal: 'dLocal', companyMercado: 'Mercado Libre', companyKiwibot: 'Kiwibot (ahora Robot.com)',
      expUpdataLeadTitle:'Líder Técnico', expUpdataLeadDate:'Ene 2026 – Presente · Victoriaville, QC',
      expUpdataTitle:'Especialista en IA', expUpdataDate:'Jun 2024 – Dic 2025',
      expMLEng:'Ingeniero de ML', expMLEngDate:'Mar 2023 – Jun 2024',
      expDLocal:'Científico de Datos Senior', expDLocalDate:'Ago 2022 – Abr 2023',
      expMercado:'Científico de Datos', expMercadoDate:'Jul 2021 – Ago 2022',
      expKiwibotHead:'Jefe de Datos y Software', expKiwibotHeadDate:'Feb 2020 – Feb 2021',
      expKiwibotDS:'Científico de Datos', expKiwibotDSDate:'Ago 2019 – Ene 2020',
      expKiwibotOps:'Analista de Operaciones en Campo', expKiwibotOpsDate:'Mar 2019 – Ago 2019',
      projectsTitle: 'Mis Proyectos',
      educationTitle: 'Educación',
      eduUniandes: 'Universidad de Los Andes, Colombia',
      eduUniandesDegree: 'Bachelor of Science - BSc, Ingeniería Ambiental',
      eduUniandesDate: '2014 – 2018',
      connectTitle:'Conectemos',
      footer: `© ${new Date().getFullYear()} Andrés Rosero • Hecho con pasión`
    }
  };

  // Wait for the DOM to be fully loaded before running scripts
  document.addEventListener('DOMContentLoaded', () => {
    const langSelect = document.getElementById('langSelect');
    const themeToggle = document.getElementById('themeToggle');
    const lottiePlayer = document.getElementById('lottie-intro');

    function loadLottieAnimation(lang) {
      const animations = {
        fr: 'assets/salut.json',
        es: 'assets/hola.json',
        en: 'assets/hello.json'
      };
      const animationFile = animations[lang] || animations.en;
      fetch(animationFile)
        .then(response => response.json())
        .then(data => {
          lottiePlayer.load(data);
          lottiePlayer.play(); // Rerun animation
        })
        .catch(error => {
          console.error('Error loading Lottie animation:', error);
        });
    }

    function handleScrollAnimations() {
      const revealEls = document.querySelectorAll('.reveal');
      const io = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            io.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 });
      revealEls.forEach(el => io.observe(el));
    }

    function setLang(lang){
      document.documentElement.lang = lang;
      langSelect.value = lang; 
      const dict = translations[lang] || translations.en;
      document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.getAttribute('data-key');
        if(dict[key]) {
            if (el.id === 'subtitle' && el.classList.contains('hidden')) {
                el.textContent = dict[key];
            } else if (el.id !== 'subtitle') {
                el.textContent = dict[key];
            } else {
                 el.textContent = dict[key];
            }
        }
      });
      loadLottieAnimation(lang);
    }
    
    const savedLang = localStorage.getItem('language') || 'en';
    setLang(savedLang);

    langSelect.addEventListener('change', e => {
      const newLang = e.target.value;
      setLang(newLang);
      localStorage.setItem('language', newLang); 
    });

    themeToggle.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      handleScrollAnimations(); // Re-trigger animations
    });

    handleScrollAnimations(); // Initial call

  });
