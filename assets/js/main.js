// Immediately invoked function to set theme and language from localStorage
  (function() {
    // --- THEME ---
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      document.documentElement.setAttribute('data-theme', savedTheme);
    } else {
      const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
    }
  })();

  /* =====================
     Internationalisation
     ===================== */
  const translations = {
    en: {
      name: 'Andrés Felipe Rosero', title: 'AI Specialist • Data Scientist • Environmental Engineering Graduate (Colombia)',
      aboutMeText: "My passion lies at the intersection of AI and engineering, where complex challenges become opportunities for innovation. For over six years, I've focused on building robust AI solutions—from intelligent systems that prevent fraud and automate industrial recycling, to data architectures that deliver real-time insights on the cloud. This space is a glimpse into that journey.",
      journeyTitle: 'My Journey', 
      expUpdataTitle: 'Updata – AI Specialist', expUpdataDate: 'Jun 2024 – Present · Victoriaville, QC', 
      expMLEng: 'Updata – Machine Learning Engineer', expMLEngDate: 'Mar 2023 – Jun 2024', 
      expDLocal: 'dLocal – Senior Data Scientist', expDLocalDate: 'Aug 2022 – Apr 2023', 
      expMercado: 'Mercado Libre – Data Scientist', expMercadoDate: 'Jul 2021 – Aug 2022', 
      expKiwibotHead: 'Kiwibot – Head of Data & Software', expKiwibotHeadDate: 'Jun 2020 – Apr 2021',
      expKiwibotDS: 'Kiwibot – Data Scientist', expKiwibotDSDate: 'Jun 2019 – May 2020',
      projectsTitle: 'My Projects',
      educationTitle: 'Education',
      eduUniandes: 'Universidad de Los Andes, Colombia',
      eduUniandesDegree: 'Bachelor of Science - BSc, Environmental Engineering',
      eduUniandesDate: '2014 – 2018',
      connectTitle: "Let's Connect", linkLinkedIn:'LinkedIn', linkGitHub:'GitHub',
      footer: `© ${new Date().getFullYear()} Andrés Rosero • Crafted with passion`
    },
    fr: {
      name: 'Andrés Felipe Rosero', title: 'Spécialiste IA • Data Scientist • Diplômé en Génie de l\'Environnement (Colombie)',
      aboutMeText: "Ma passion se situe à l'intersection de l'IA et de l'ingénierie, où les défis complexes deviennent des opportunités d'innovation. Depuis plus de six ans, je me concentre sur la création de solutions d'IA robustes—des systèmes intelligents qui préviennent la fraude et automatisent le recyclage industriel, aux architectures de données qui fournissent des informations en temps réel sur le cloud. Cet espace est un aperçu de ce parcours.",
      journeyTitle: 'Mon Parcours', 
      expUpdataTitle:'Updata – Spécialiste IA', expUpdataDate:'Juin 2024 – Aujourd\'hui · Victoriaville, QC', 
      expMLEng:'Updata – Ingénieur ML', expMLEngDate:'Mar 2023 – Juin 2024', 
      expDLocal:'dLocal – Data Scientist Senior', expDLocalDate:'Août 2022 – Avr 2023', 
      expMercado:'Mercado Libre – Data Scientist', expMercadoDate:'Juil 2021 – Août 2022', 
      expKiwibotHead:'Kiwibot – Chef de Données & Logiciels', expKiwibotHeadDate:'Juin 2020 – Avr 2021',
      expKiwibotDS:'Kiwibot – Data Scientist', expKiwibotDSDate:'Juin 2019 – Mai 2020',
      projectsTitle: 'Mes Projets',
      educationTitle: 'Formation',
      eduUniandes: 'Universidad de Los Andes, Colombie',
      eduUniandesDegree: "Baccalauréat en sciences - BSc, Génie de l\'environnement",
      eduUniandesDate: '2014 – 2018',
      connectTitle: 'Restons Connectés', linkLinkedIn:'LinkedIn', linkGitHub:'GitHub',
      footer: `© ${new Date().getFullYear()} Andrés Rosero • Créé avec passion`
    },
    es: {
      name:'Andrés Felipe Rosero', title:'Especialista en IA • Científico de Datos • Graduado en Ingeniería Ambiental (Colombia)',
      aboutMeText:'Mi pasión reside en la intersección de la IA y la ingeniería, donde los desafíos complejos se convierten en oportunidades para la innovación. Durante más de seis años, me he centrado en construir soluciones de IA robustas, desde sistemas inteligentes que previenen el fraude y automatizan el reciclaje industrial, hasta arquitecturas de datos que ofrecen información en tiempo real en la nube. Este espacio es un vistazo a esa trayectoria.',
      journeyTitle:'Mi Trayectoria', 
      expUpdataTitle:'Updata – Especialista en IA', expUpdataDate:'Jun 2024 – Presente · Victoriaville, QC', 
      expMLEng:'Updata – Ingeniero de ML', expMLEngDate:'Mar 2023 – Jun 2024', 
      expDLocal:'dLocal – Científico de Datos Senior', expDLocalDate:'Ago 2022 – Abr 2023', 
      expMercado:'Mercado Libre – Científico de Datos', expMercadoDate:'Jul 2021 – Ago 2022', 
      expKiwibotHead:'Kiwibot – Jefe de Datos y Software', expKiwibotHeadDate:'Jun 2020 – Abr 2021',
      expKiwibotDS:'Kiwibot – Científico de Datos', expKiwibotDSDate:'Jun 2019 – May 2020',
      projectsTitle: 'Mis Proyectos',
      educationTitle: 'Educación',
      eduUniandes: 'Universidad de Los Andes, Colombia',
      eduUniandesDegree: 'Bachelor of Science - BSc, Ingeniería Ambiental',
      eduUniandesDate: '2014 – 2018',
      connectTitle:'Conectemos', linkLinkedIn:'LinkedIn', linkGitHub:'GitHub',
      footer: `© ${new Date().getFullYear()} Andrés Rosero • Hecho con pasión`
    }
  };

  // Wait for the DOM to be fully loaded before running scripts
  document.addEventListener('DOMContentLoaded', () => {
    const langSelect = document.getElementById('langSelect');
    const themeToggle = document.getElementById('themeToggle');

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
    });

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

    /* ===== Lottie Animation Logic ===== */
    const lottiePlayer = document.getElementById('lottie-intro');

    fetch('assets/hello.json')
      .then(response => response.json())
      .then(data => {
        lottiePlayer.load(data);
        lottiePlayer.play();
      })
      .catch(error => {
        console.error('Error loading Lottie animation:', error);
        lottiePlayer.classList.add('hidden');
      });
  });
