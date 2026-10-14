// ES ⇄ EN toggle. Spanish is the source text in index.html; this maps each text to English.
(function () {
  const EN = {
    "Proyectos": "Projects",
    "Exp.": "Exp.",
    "Contacto": "Contact",
    "Disponible para colaborar": "Open to collaborate",
    "Ingeniería de Sistemas · IoT · IA aplicada a procesos · Biomateriales": "Systems Engineering · IoT · AI for process optimization · Biomaterials",
    "Investigador": "Researcher",
    "· Tesista": "· Thesis lead",
    "(Ing. de Materiales UNSA)": "(UNSA Materials Engineering)",
    "Presidente": "President",
    "ACM UNSA Robótica": "ACM UNSA Robotics",
    "Co-fundador": "Co-founder",
    "Ing. Sistemas — UNSA": "Systems Engineering — UNSA",
    "Electrónica y Automatización Industrial — TECSUP": "Electronics & Industrial Automation — TECSUP",
    "1° Puesto — Wichariy 2026 (JAKU UNSA)": "1st Place — Wichariy 2026 (JAKU UNSA)",
    "1° Puesto Elite — Cuscontest 2026": "1st Place Elite — Cuscontest 2026",
    "1° Puesto — GreenTech Challenge": "1st Place — GreenTech Challenge",
    "Inglés C1 (TOEFL ITP)": "English C1 (TOEFL ITP)",
    "↓ Descargar CV": "↓ Download CV",
    "→ Contacto": "→ Contact",
    "Primeros puestos": "First places",
    "Comunidades que presido": "Communities I lead",
    "Ecosistemas fundados": "Ecosystems founded",
    "Lenguajes & frameworks": "Languages & frameworks",
    "Carreras en paralelo": "Parallel degrees",
    "Lo que he construido": "What I've built",

    "2026 — presente · Tesis y startup": "2026 — present · Thesis & startup",
    "Fundador · Investigador principal": "Founder · Principal investigator",
    "🏆 1° Puesto — Wichariy 2026 · Incubadora JAKU (UNSA)": "🏆 1st Place — Wichariy 2026 · JAKU Incubator (UNSA)",
    "Conversión de cáscaras de fruta (residuo agroindustrial peruano) en biochar y hard carbon para ánodos de baterías de ion-sodio y carbón activado para supercapacitores. Biochar ya producido por pirólisis a 600–700 °C; siguiente etapa: carbonización en atmósfera controlada, caracterización (TGA, XRD, Raman, BET, SEM-EDS, FTIR) y pruebas electroquímicas en celdas. Desde Sistemas: monitoreo IoT del horno, optimización con machine learning y un gemelo digital que predice la calidad del carbono. Tesis de carrera iniciada en tercer año, con apoyo de laboratorios de Ing. de Materiales y del CIALE (Centro de Investigación Aplicada y Laboratorios Especializados, UNSA). Asesores: Dr. Alejandro Silva (Ing. de Materiales) y Dra. Elizabeth Vidal Duarte (Ing. de Sistemas). Aplicado también al reto EGESUR de Innova Sur 2026 (algas como materia prima).":
      "Turning fruit peels (Peruvian agro-industrial waste) into biochar and hard carbon for sodium-ion battery anodes, and activated carbon for supercapacitors. Biochar already produced by pyrolysis at 600–700 °C; next stage: controlled-atmosphere carbonization, characterization (TGA, XRD, Raman, BET, SEM-EDS, FTIR) and electrochemical cell testing. From Systems Engineering: IoT furnace monitoring, machine learning optimization and a digital twin that predicts carbon quality. Engineering thesis started in third year, with lab support from UNSA Materials Engineering and CIALE (Center for Applied Research and Specialized Laboratories). Advisors: Dr. Alejandro Silva (Materials Engineering) and Dr. Elizabeth Vidal Duarte (Systems Engineering). Also applied to the EGESUR challenge at Innova Sur 2026 (algae as feedstock).",
    "Biomateriales": "Biomaterials",
    "Ion-sodio": "Sodium-ion",
    "Supercapacitores": "Supercapacitors",
    "Gemelo digital": "Digital twin",
    "Economía circular": "Circular economy",

    "Desarrollador IoT · Co-creador": "IoT Developer · Co-creator",
    "Plataforma IoT de monitoreo geotécnico con sensores y datos en tiempo real, desarrollada junto a un especialista en geomecánica y presentada en PERUMEC 2026.":
      "IoT geotechnical monitoring platform with real-time sensor data, built together with a geomechanics specialist and presented at PERUMEC 2026.",
    "Sensores": "Sensors",
    "Minería": "Mining",
    "Tiempo real": "Real time",

    "Automatización industrial": "Industrial automation",
    "Línea de producción automatizada con PLC programado en CODESYS, simulación en Factory I/O y HMI web para supervisión.":
      "Automated production line with a PLC programmed in CODESYS, Factory I/O simulation and a web HMI for supervision.",

    "Sept 2026 · Hackatón IDEA \"Hack the Future\" (UNSA)": "Sept 2026 · IDEA Hackathon \"Hack the Future\" (UNSA)",
    "Co-fundador · Tecnología": "Co-founder · Technology",
    "🏆 2° Puesto — Track E-Commerce y Digitalización de MIPYMES": "🏆 2nd Place — E-Commerce & MSME Digitalization Track",
    "Plataforma de comercio exterior colaborativo para talleres textiles del sur del Perú: une a pequeños productores para llegar a mercados internacionales. Presentado luego al Innovation Pitch de HRFEST 2026. Aliado de la ONG PRISMA vía responsabilidad social.":
      "Collaborative export platform for textile workshops in southern Peru, joining small producers to reach international markets. Later submitted to the HRFEST 2026 Innovation Pitch. Partnered with the NGO PRISMA through social responsibility.",
    "MIPYMES": "MSMEs",
    "Comercio exterior": "Foreign trade",
    "Textil": "Textiles",

    "CIO (Chief Information Officer) & Co-fundador": "CIO (Chief Information Officer) & Co-founder",
    "🏆 1° Puesto — GreenTech Challenge · Oracle · UTEC Ventures · SENAJU · LACCEI": "🏆 1st Place — GreenTech Challenge · Oracle · UTEC Ventures · SENAJU · LACCEI",
    "Ecosistema de gestión turística inteligente con NFC + arquitectura offline-first para registro real de visitantes en destinos sin conectividad (Cusco, Machu Picchu). Panel de datos en tiempo real para gestores, operadores y comunidades. Convierte destinos fragmentados en infraestructuras medibles y sostenibles.":
      "Smart tourism management ecosystem with NFC and an offline-first architecture to record real visitor data at destinations without connectivity (Cusco, Machu Picchu). Real-time dashboard for managers, operators and communities. Turns fragmented destinations into measurable, sustainable infrastructure.",
    "Panel de datos": "Data dashboard",

    "2024 — presente": "2024 — present",
    "Co-fundador del Ecosistema": "Ecosystem Co-founder",
    "Ecosistema tecnológico con múltiples verticales: Auroboros Tech con Kallpa Phone (smartphone low cost con ESP32 + LoRaWAN, menos de S/300 para zonas rurales), Auroboros Learning (plataforma educativa) y Auroboros Cloud.":
      "Technology ecosystem with several verticals: Auroboros Tech with Kallpa Phone (a low-cost ESP32 + LoRaWAN smartphone under S/300 for rural areas), Auroboros Learning (education platform) and Auroboros Cloud.",

    "Mayo 2026 · Hackathon Internacional": "May 2026 · International Hackathon",
    "Desarrollador": "Developer",
    "Desarrollo de un videojuego arcade con Phaser 3 para ser desplegado en una máquina física en Buenos Aires. Arquitectura sin dependencias externas (menor a 50KB minificado). Colaboración en equipo utilizando Claude Code.":
      "Arcade game built with Phaser 3 for a physical machine in Buenos Aires. Dependency-free architecture (under 50KB minified). Team collaboration using Claude Code.",
    "→ Repositorio": "→ Repository",

    "2025 · Proyecto académico (UNSA)": "2025 · Academic project (UNSA)",
    "Contribución a fork open-source": "Open-source fork contribution",
    "Despliegue y análisis de arquitectura full-stack open-source (Self-hosted Bookmark Manager). Experiencia práctica con monorepos, PostgreSQL, Docker y configuración de entornos de desarrollo profesional con devcontainers.":
      "Deployment and analysis of an open-source full-stack architecture (self-hosted bookmark manager). Hands-on work with monorepos, PostgreSQL, Docker and professional dev environments with devcontainers.",

    "2025 · Proyecto Académico (UNSA)": "2025 · Academic project (UNSA)",
    "Taller Sistemas Digitales": "Digital Systems Workshop",
    "Implementación de sistemas digitales y lógica combinacional y secuencial en entorno Linux con C++.":
      "Implementation of digital systems and combinational and sequential logic in C++ on Linux.",
    "Sistemas Digitales": "Digital Systems",

    "Enero 2026 · Global Game Jam": "January 2026 · Global Game Jam",
    "Project/Product Manager · Líder · Desarrollador": "Project/Product Manager · Lead · Developer",
    "Videojuego desarrollado en 48 horas en el evento de game jam internacional más grande del mundo. Hecho con Godot (GDScript). En desarrollo continuo con apoyo de incubadora Kaman.":
      "Game built in 48 hours at the world's largest international game jam. Made with Godot (GDScript). In ongoing development with support from the Kaman incubator.",
    "Narrativa": "Narrative",
    "→ Ver en GGJ": "→ View on GGJ",

    "Habilidades": "Skills",
    "Stack técnico": "Tech stack",
    "Lenguajes": "Languages",
    "APIs REST": "REST APIs",
    "IA & Automatización": "AI & Automation",
    "Flujos de trabajo": "Workflows",
    "Integración de sistemas": "Systems integration",
    "DevOps & Herramientas": "DevOps & Tools",
    "IoT, Hardware & Automatización": "IoT, Hardware & Automation",
    "Diseño de PCB": "PCB design",
    "Materiales & Energía (investigación)": "Materials & Energy (research)",
    "Pirólisis de biomasa": "Biomass pyrolysis",
    "Caracterización de materiales": "Materials characterization",
    "Metodologías & Intereses": "Methodologies & Interests",
    "Ciencia de Datos": "Data Science",
    "Ciberseguridad": "Cybersecurity",
    "Robótica": "Robotics",
    "Biotecnología": "Biotechnology",

    "Trayectoria": "Track record",
    "Investigación & Experiencia": "Research & Experience",
    "Investigador — CiTeSoft UNSA": "Researcher — CiTeSoft UNSA",
    "Centro I+D+i acreditado por CONCYTEC": "R&D&I center accredited by CONCYTEC",
    "Investigación aplicada en IA, IoT, tecnologías emergentes y seguridad de la información. Único centro acreditado por CONCYTEC fuera de Lima en su categoría; proyectos en salud, educación y tecnología de bajo costo.":
      "Applied research in AI, IoT, emerging technologies and information security. The only CONCYTEC-accredited center in its category outside Lima; projects in health, education and low-cost technology.",
    "Tesista — Proyecto Anovum": "Thesis lead — Anovum project",
    "Ing. de Materiales e Ing. de Sistemas · UNSA": "Materials & Systems Engineering · UNSA",
    "Desarrollo de hard carbon y carbón activado a partir de residuos agroindustriales, con optimización del proceso mediante IoT y machine learning. Asesoría del Dr. Alejandro Silva y la Dra. Elizabeth Vidal Duarte.":
      "Development of hard carbon and activated carbon from agro-industrial waste, with process optimization through IoT and machine learning. Advised by Dr. Alejandro Silva and Dr. Elizabeth Vidal Duarte.",
    "2026 — presente": "2026 — present",
    "Presidente — IEEE RAS UNSA e IEEE EMBS UNSA": "President — IEEE RAS UNSA & IEEE EMBS UNSA",
    "Liderazgo de las comunidades estudiantiles de robótica e ingeniería biomédica. Embajador UNSA de HRFEST 2026, conferencia internacional de IEEE sobre robótica humanoide. Miembro activo de IEEE PES Technical Management Board.":
      "Leads the student communities in robotics and biomedical engineering. UNSA ambassador for HRFEST 2026, IEEE's international conference on humanoid robotics. Active member of the IEEE PES Technical Management Board.",
    "Presidente — Comité de Robótica y Automatización Industrial": "President — Robotics & Industrial Automation Committee",
    "Organización de talleres técnicos y actividades académicas. 1er Puesto en competencia de Robótica (PeruHub Digital).":
      "Organizes technical workshops and academic activities. 1st Place in a robotics competition (PeruHub Digital).",
    "Miembro activo destacado — ASME UNSA": "Distinguished active member — ASME UNSA",
    "Embajador UNSA de PERUMEC 2026. Trabajo interdisciplinario con estudiantes de mecánica, materiales, minas e industrias alimentarias.":
      "UNSA ambassador for PERUMEC 2026. Interdisciplinary work with mechanical, materials, mining and food engineering students.",
    "Desarrollo de un mini-ERP/CRM con asistente de WhatsApp y tablero Kanban (Node.js, TypeScript, React, PostgreSQL).":
      "Built a mini-ERP/CRM with a WhatsApp assistant and a Kanban board (Node.js, TypeScript, React, PostgreSQL).",
    "Secretario — Comité de Ciberseguridad": "Secretary — Cybersecurity Committee",
    "Desarrollo y fortalecimiento de la comunidad estudiantil en el ámbito de la computación y la seguridad de la información.":
      "Grew and strengthened the student community in computing and information security.",
    "Colegio y Academia Preuniversitaria Mendel": "Mendel School & Pre-University Academy",
    "Capacitación en herramientas informáticas y soporte técnico a infraestructura educativa. Resolución de incidencias de hardware/software.":
      "Training in computer tools and technical support for educational infrastructure. Hardware and software troubleshooting.",
    "Ene — Mar 2024": "Jan — Mar 2024",
    "Gestión de inventario, reposición y distribución de productos. Seguimiento de indicadores operativos y cumplimiento de objetivos comerciales.":
      "Inventory management, restocking and product distribution. Tracking of operational KPIs and sales targets.",
    "Nov 2024 — Ene 2025": "Nov 2024 — Jan 2025",
    "Supervisión de procesos operativos, control de inventario, y coordinación de actividades para mejorar tiempos de respuesta y calidad del servicio.":
      "Supervised operations, inventory control and coordination to improve response times and service quality.",
    "Abr 2021 — Nov 2022": "Apr 2021 — Nov 2022",

    "Hablemos": "Let's talk",
    "Email institucional": "University email",
    "→ Escribir": "→ Write",
    "→ Ver repos": "→ View repos",
    "Celular": "Phone",
    "→ Llamar": "→ Call",
    "Currículum Vitae": "Curriculum Vitae",
    "↓ Descargar PDF": "↓ Download PDF",
    "© 2026 Edson Fabricio Subia Huaicane · Arequipa, Perú · esubiahu@unsa.edu.pe": "© 2026 Edson Fabricio Subia Huaicane · Arequipa, Peru · esubiahu@unsa.edu.pe"
  };

  const norm = s => s.replace(/\s+/g, ' ').trim();
  const nodes = [];
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode: n => (n.parentNode && n.parentNode.nodeName !== 'SCRIPT' && n.parentNode.nodeName !== 'STYLE' && EN[norm(n.nodeValue)] !== undefined) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT
  });
  while (walker.nextNode()) {
    const n = walker.currentNode;
    const lead = n.nodeValue.match(/^\s*/)[0];
    const trail = n.nodeValue.match(/\s*$/)[0];
    nodes.push({ n, es: n.nodeValue, en: lead + EN[norm(n.nodeValue)] + trail });
  }

  const btn = document.getElementById('langToggle');
  function setLang(lang) {
    nodes.forEach(o => { o.n.nodeValue = lang === 'en' ? o.en : o.es; });
    document.documentElement.lang = lang;
    if (btn) {
      btn.textContent = lang === 'en' ? 'ES' : 'EN';
      btn.setAttribute('aria-label', lang === 'en' ? 'Cambiar a español' : 'Switch to English');
    }
    try { localStorage.setItem('lang', lang); } catch (e) {}
  }

  let saved = null;
  try { saved = localStorage.getItem('lang'); } catch (e) {}
  const initial = saved || ((navigator.language || 'es').toLowerCase().startsWith('es') ? 'es' : 'en');
  setLang(initial);
  if (btn) btn.addEventListener('click', () => setLang(document.documentElement.lang === 'en' ? 'es' : 'en'));
})();
