export const PORTFOLIO = {
  name: "Mohammed",
  nickname: "StackOdyssey",
  handle: "StackOdyssey",
  role: "Full-Stack Web Developer & Digital Craftsman",
  status: "Available for Internships & Projects",
  statusColor: "bg-green-500",
  location: "Morocco / Remote",
  avatar: "/mohammed-profile.png",
  bio: "Student full-stack developer passionate about building resilient, high-speed, and visually electric web applications. Honing skills across modern JavaScript, React.js, Django, C++, and Cisco network architecture.",
  taglines: [
    "Turning coffee & React components into sleek digital products.",
    "Bridging the gap between front-end aesthetics and backend logic.",
    "Certified in Cisco networking, C++ basics, and ALX front-end engineering.",
    "Currently building the future at ISTA & FreeCodeCamp."
  ],
  githubUrl: "https://github.com/StackOdyssey",
  linkedinUrl: "https://linkedin.com/in/stackodyssey",
  email: "davidsmithny01@gmail.com",
  whatsapp: "https://wa.me/212672779391",
  phone: "+212672779391",
  phoneFormatted: "+212 672-779391",
  
  stats: [
    { label: "Public Repos", value: "22+", tag: "GitHub" },
    { label: "Google Ads (SEM)", value: "ROI+", tag: "Certified" },
    { label: "Certifications", value: "4+", tag: "Verified" },
    { label: "Code Commits", value: "350+", tag: "2025/2026" },
  ],

  certifications: [
    {
      id: "cisco-network",
      title: "Cisco Systems: Switching & IP Addressing",
      issuer: "Cisco Networking Academy",
      date: "2025",
      badgeText: "CISCO CERTIFIED",
      color: "bg-white dark:bg-gray-800 border-black",
      textColor: "text-black dark:text-white",
      icon: "Network",
      description: "Comprehensive mastery of IPv4 addressing, CIDR subnetting, Ethernet switching fundamentals, VLAN configuration, and TCP/IP model protocols.",
      skills: ["IPv4 / CIDR", "Subnetting", "Switching", "VLANs", "TCP/IP", "Routing Protocols"],
      credentialUrl: "https://www.netacad.com/",
      verified: true,
      codeStamp: "CISCO-CCNA-IP-2025"
    },
    {
      id: "alx-frontend",
      title: "Front-End Web Development Specialization",
      issuer: "ALX Africa",
      date: "2025 - 2026",
      badgeText: "ALX AFRICA HONORS",
      color: "bg-white dark:bg-gray-800 border-black",
      textColor: "text-black dark:text-white",
      icon: "Code2",
      description: "Rigorous full-cycle engineering program focused on semantic HTML5, modern CSS layouts, ES6+ JavaScript, React component state lifecycle, and production workflows.",
      skills: ["React.js", "JavaScript ES6+", "HTML5 / CSS3", "State Management", "Git & Team Workflows"],
      credentialUrl: "https://www.alxafrica.com/",
      verified: true,
      codeStamp: "ALX-FE-2025-089"
    },
    {
      id: "cpp-basics",
      title: "C++ Fundamentals & Algorithmic Foundations",
      issuer: "Programming Academy",
      date: "2024 - 2025",
      badgeText: "C++ CERTIFIED",
      color: "bg-white dark:bg-gray-800 border-black",
      textColor: "text-black dark:text-white",
      icon: "Cpu",
      description: "Deep dive into memory management, pointers, Object-Oriented Programming (OOP) principles, algorithmic problem solving, and data structures.",
      skills: ["C++", "OOP Architecture", "Pointers & Memory", "Data Structures", "Algorithms"],
      credentialUrl: "https://github.com/StackOdyssey",
      verified: true,
      codeStamp: "CPP-CORE-2024"
    },
    {
      id: "ista-fullstack",
      title: "ISTA: Développement Digital (Full Stack)",
      issuer: "OFPPT / ISTA Morocco",
      date: "In Progress (2025 - Present)",
      badgeText: "ACADEMIC DEGREE",
      color: "bg-white dark:bg-gray-800 border-black",
      textColor: "text-black dark:text-white",
      icon: "GraduationCap",
      description: "Formal full-stack software engineering curriculum covering database architecture (SQL/NoSQL), web frameworks, API design, DevOps fundamentals, and agile project delivery.",
      skills: ["Full Stack Architecture", "Databases (SQL)", "Web Services", "Agile / Scrum", "Full Lifecycle"],
      credentialUrl: "https://www.ofppt.ma/",
      verified: true,
      codeStamp: "ISTA-DEV-DIGITAL-2026"
    },
    {
      id: "freecodecamp-full",
      title: "FreeCodeCamp: Web Design & JS Algorithms",
      issuer: "freeCodeCamp.org",
      date: "2025 - Present",
      badgeText: "PRACTICAL LABS",
      color: "bg-white dark:bg-gray-800 border-black",
      textColor: "text-black dark:text-white",
      icon: "Flame",
      description: "Continuous hands-on problem solving covering Responsive Web Design, JavaScript Data Structures, Algorithms, and Frontend Libraries.",
      skills: ["DOM Manipulation", "ES6 Algorithms", "Responsive Flexbox/Grid", "Accessibility"],
      credentialUrl: "https://www.freecodecamp.org/",
      verified: true,
      codeStamp: "FCC-ALGO-2025"
    }
  ],

  projects: [
    {
      id: "safe-hands-logistics",
      title: "Safe Hands Shipping Line & Enterprise CRM",
      category: "Enterprise / Next.js",
      projectType: "real-project",
      typeLabel: "Real-World Commercial Project",
      repoName: "safe-hands-shipping-line",
      badgeText: "REAL PRODUCTION PROJECT",
      clientName: "Safe Hands Shipping Line",
      agency: "Safe Hands Shipping Line (Saudi Arabia)",
      image: "/projects/safe-hands-shipping-line.png",
      liveUrl: "https://www.safehandsshippingline.com/ar",
      liveUrlEn: "https://www.safehandsshippingline.com/en",
      description: "A production-grade Next.js enterprise web portal and logistics management platform featuring Prisma ORM database models, multi-lingual internationalization (Arabic/English), dynamic freight quotation calculators, and technical SEO architecture built for a real commercial client.",
      tech: ["Next.js", "TypeScript", "Prisma ORM", "PostgreSQL", "Tailwind CSS", "i18n Localization", "SEO Systems"],
      stackOverview: {
        frontend: "Next.js App Router, TypeScript, Tailwind CSS, Responsive Enterprise Layouts",
        backend: "Next.js Server API Routes, Dynamic Quotation Engine, Role-Based CRM",
        database: "PostgreSQL with Prisma ORM relational modeling for container tracking",
        localization: "Automated multi-lingual internationalization (Arabic / English i18n)",
        seo: "Elite Semrush technical SEO score, structured JSON-LD schemas, Core Web Vitals"
      },
      highlights: [
        "Real-world enterprise system deployed for commercial logistics operations (Saudi Arabia)",
        "Architected relational database schema with Prisma ORM for container tracking and quote requests",
        "Built automated multi-language localization engine (i18n) for international maritime operations",
        "Achieved elite Semrush technical SEO score and optimized Google Core Web Vitals",
        "Implemented role-based CRM workflows and client quote request management"
      ],
      github: "https://github.com/StackOdyssey",
      isPrivateClient: true,
      demoUrl: "https://www.safehandsshippingline.com/ar",
      featured: true,
      color: "bg-brutal-yellow/30 border-black"
    },
    {
      id: "excellence-warehouse",
      title: "Excellence Warehouse & Logistics Hub",
      category: "Logistics / Next.js",
      projectType: "real-project",
      typeLabel: "Real-World Commercial Project",
      repoName: "excellence-logistics-hub",
      badgeText: "REAL PRODUCTION PROJECT",
      clientName: "Excellence Logistics & Warehousing",
      agency: "Excellence Logistics & Warehousing",
      image: "/projects/excellence-logistics.jpeg",
      liveUrl: "https://excellence-warehouse-1rfub5rrl-stackodysseys-projects.vercel.app/en",
      description: "A modern, full-scale enterprise logistics and warehouse management web application featuring automated multi-lingual language routing, freight quotation forms, real-time cargo operations tracking, and responsive UI styling.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "i18n Localization", "Vercel Edge", "Responsive UI"],
      stackOverview: {
        frontend: "Next.js, TypeScript, Tailwind CSS, High-Speed Responsive UI",
        backend: "Vercel Edge Functions, Supply Chain Inquiry Dispatch Engine",
        localization: "Dynamic Multi-Lingual Language Routing (i18n)",
        performance: "Optimized asset bundling, sub-second latency on Vercel Global Edge"
      },
      highlights: [
        "Production-deployed multi-lingual logistics and warehouse web portal",
        "Interactive quotation and supply chain cargo inquiry dispatch engine",
        "Responsive, high-performance UI optimized for fast mobile and desktop loading",
        "Integrated dynamic language routing and structured meta schema for international reach"
      ],
      github: "https://github.com/StackOdyssey",
      isPrivateClient: true,
      demoUrl: "https://excellence-warehouse-1rfub5rrl-stackodysseys-projects.vercel.app/en",
      featured: true,
      color: "bg-brutal-yellow/30 border-black"
    },
    {
      id: "atlas-lux-travel",
      title: "Atlas Lux Travel - VIP Transfers & Luxury Tours",
      category: "Luxury Travel / Next.js",
      projectType: "real-project",
      typeLabel: "Real-World Commercial Project",
      repoName: "atlas-lux-travel",
      badgeText: "REAL PRODUCTION PROJECT",
      clientName: "Atlas Lux Travel",
      agency: "Atlas Lux Travel",
      image: "/projects/atlas-lux-travel.webp",
      liveUrl: "https://atlasluxtravel.ma",
      liveUrlEn: "https://atlasluxtravel.ma/en",
      description: "A premier luxury travel & VIP private transfer web platform built for Atlas Lux Travel agency. Engineered with Next.js 16 (App Router), React 19, TypeScript, PostgreSQL (Neon) with Drizzle ORM, multi-language internationalization (English/French/Arabic), dynamic booking engines, AI Concierge Assistant, Upstash Redis caching, and Stripe payments.",
      tech: ["Next.js 16", "React 19", "TypeScript", "Drizzle ORM", "PostgreSQL (Neon)", "Upstash Redis", "Stripe", "OpenAI Concierge", "Tailwind CSS v4", "i18n Localization"],
      stackOverview: {
        frontend: "Next.js 16 App Router, React 19, Tailwind CSS v4, Framer Motion, GSAP animations",
        backend: "Next.js Server Actions & APIs, NextAuth.js, Resend Transactional Emails, jsPDF",
        database: "Neon Serverless PostgreSQL with Drizzle ORM schemas and automated migrations",
        caching: "Upstash Redis distributed caching and rate limiting for high-traffic resilience",
        ai: "OpenAI GPT-4 powered Luxury Concierge AI assistant with domain knowledge retrieval",
        payments: "Stripe payment intents, secure checkout sessions, and webhook processing"
      },
      highlights: [
        "Full-scale production Next.js 16 & React 19 luxury travel platform deployed live at atlasluxtravel.ma",
        "Architected Drizzle ORM database schemas for excursions, private chauffeur bookings, and customer profiles on Neon PostgreSQL",
        "Engineered multi-currency dynamic pricing engine and automated booking token security checks",
        "Built AI-powered luxury concierge chat assistant with structured knowledge-base retrieval",
        "Implemented high-performance Upstash Redis caching, rate limiting, and automated email dispatches via Resend"
      ],
      github: "https://github.com/StackOdyssey",
      isPrivateClient: true,
      demoUrl: "https://atlasluxtravel.ma",
      featured: true,
      color: "bg-brutal-yellow/30 border-black"
    },
    {
      id: "alx-fe-reactjs",
      title: "React Odyssey App & Component System",
      category: "React / Frontend",
      projectType: "github-personal",
      typeLabel: "GitHub Personal Work",
      repoName: "alx-fe-reactjs",
      badgeText: "GITHUB PERSONAL WORK",
      description: "A modern, modular React.js personal lab repository built under the @StackOdyssey GitHub handle with clean component hierarchy, custom hooks, dynamic state management, and responsive layouts.",
      tech: ["React.js", "JavaScript ES6", "CSS3", "Vite", "Component Architecture"],
      highlights: [
        "Architected reusable component ecosystem with isolated states",
        "Implemented reactive form validation and state synchronizers",
        "Optimized bundle performance and rendering cycles"
      ],
      github: "https://github.com/StackOdyssey/alx-fe-reactjs",
      demoUrl: "#",
      featured: true,
      color: "bg-white dark:bg-gray-800 border-black"
    },
    {
      id: "alx-django-learnlab",
      title: "Django LearnLab & Backend API Engine",
      category: "Full Stack / Python",
      projectType: "github-personal",
      typeLabel: "GitHub Personal Work",
      repoName: "Alx_DjangoLearnLab",
      badgeText: "GITHUB PERSONAL WORK",
      description: "Full-featured Django backend personal repository featuring relational data models, RESTful endpoints, user authentication, and persistent database CRUD operations.",
      tech: ["Python", "Django", "REST APIs", "SQLite / PostgreSQL", "MVC Pattern"],
      highlights: [
        "Structured secure authentication, user roles, and permissions",
        "Built CRUD API endpoints with clean serialisation and validation",
        "Implemented relational ORM queries with zero N+1 bottlenecks"
      ],
      github: "https://github.com/StackOdyssey/Alx_DjangoLearnLab",
      demoUrl: "#",
      featured: true,
      color: "bg-white dark:bg-gray-800 border-black"
    },
    {
      id: "cisco-subnet-toolkit",
      title: "Cisco IPv4 Subnet & CIDR Inspector",
      category: "Networking / Tools",
      projectType: "github-personal",
      typeLabel: "GitHub Personal Work",
      repoName: "cisco-subnet-calculator",
      badgeText: "GITHUB PERSONAL WORK",
      description: "Interactive network engineering tool built in React to instantly compute CIDR blocks, usable host ranges, binary octet decompositions, and RFC 1918 scopes.",
      tech: ["React.js", "Cisco Networking", "Bitwise Math", "IPv4 / CIDR", "Tailwind CSS"],
      highlights: [
        "Real-time bitwise operations for lightning fast subnet calculations",
        "Visual 32-bit binary octet breakdowns with network vs host bit highlighting",
        "Built-in class determination (Class A, B, C, D, E) & private network classifier"
      ],
      github: "https://github.com/StackOdyssey",
      demoUrl: "#interactive-subnet-tool",
      featured: true,
      color: "bg-white dark:bg-gray-800 border-black"
    },
    {
      id: "dynamic-to-do-list",
      title: "Dynamic Task & Workflow Suite",
      category: "JavaScript / Productivity",
      projectType: "github-personal",
      typeLabel: "GitHub Personal Work",
      repoName: "dynamic-to-do-list-js",
      badgeText: "GITHUB PERSONAL WORK",
      description: "High-performance vanilla JavaScript personal repository with dynamic DOM rendering, local persistence, task priority categorisation, and smooth interactions.",
      tech: ["Vanilla JavaScript", "HTML5", "CSS3 Animations", "LocalStorage API"],
      highlights: [
        "100% pure vanilla JavaScript with zero runtime bloat",
        "Persistent state sync via browser LocalStorage API",
        "Instant filtering by status, priority tags, and search keywords"
      ],
      github: "https://github.com/StackOdyssey/dynamic-to-do-list-js",
      demoUrl: "#",
      featured: false,
      color: "bg-white dark:bg-gray-800 border-black"
    },
    {
      id: "alx-simple-quiz",
      title: "ALX Interactive Quiz Engine",
      category: "JavaScript / Algorithmic",
      projectType: "github-personal",
      typeLabel: "GitHub Personal Work",
      repoName: "ALX_Simple_Quiz",
      badgeText: "GITHUB PERSONAL WORK",
      description: "Timed algorithmic quiz repository evaluating front-end and programming knowledge with instant score calculation, feedback, and animated questions.",
      tech: ["JavaScript", "Event Driven", "HTML5", "CSS Grid", "Responsive Design"],
      highlights: [
        "Dynamic question queue and randomized answer shuffling",
        "Instant score review modal with performance breakdown",
        "Keyboard accessible navigation and smooth responsive layout"
      ],
      github: "https://github.com/StackOdyssey/ALX_Simple_Quiz",
      demoUrl: "#",
      featured: false,
      color: "bg-white dark:bg-gray-800 border-black"
    },
    {
      id: "wordpress-custom-hub",
      title: "WordPress Custom CMS & Landing Systems",
      category: "WordPress / CMS",
      projectType: "github-personal",
      typeLabel: "GitHub Personal Work",
      repoName: "wordpress-custom-solutions",
      badgeText: "GITHUB PERSONAL WORK",
      description: "Custom WordPress setups and responsive landing templates structured for speed, SEO, client manageability, and clean UI styling.",
      tech: ["WordPress", "PHP Basics", "CSS3", "JavaScript", "SEO Optimization"],
      highlights: [
        "Customized page structures and intuitive block layout configurations",
        "Optimized asset loading and mobile-first responsiveness",
        "Integrated SEO meta tags and structured schema"
      ],
      github: "https://github.com/StackOdyssey",
      demoUrl: "#",
      featured: false,
      color: "bg-white dark:bg-gray-800 border-black"
    }
  ],

  skillsByCategory: [
    {
      category: "Frontend Development",
      icon: "Layout",
      color: "bg-white dark:bg-gray-800",
      skills: [
        { name: "React.js", level: "Intermediate", desc: "Component architecture, hooks (useState, useEffect, useMemo), props & state", tag: "Primary" },
        { name: "JavaScript (ES6+)", level: "Advanced", desc: "Async/Await, DOM manipulation, closures, arrays & object methods", tag: "Core" },
        { name: "HTML5 & Semantic Web", level: "Expert", desc: "Clean semantic markup, SEO best practices, accessibility (a11y)", tag: "Foundation" },
        { name: "CSS3 & Modern Layouts", level: "Advanced", desc: "Flexbox, CSS Grid, custom keyframes, responsive design", tag: "Styling" },
        { name: "Tailwind CSS", level: "Advanced", desc: "Utility-first rapid prototyping, custom brutalist design systems", tag: "UI" },
        { name: "Next.js Basics", level: "Learning", desc: "App router concepts, Server Components, page routing", tag: "NextGen" }
      ]
    },
    {
      category: "Backend & Systems",
      icon: "Server",
      color: "bg-white dark:bg-gray-800",
      skills: [
        { name: "Python", level: "Intermediate", desc: "Data processing, OOP, scripts, automation, backend logic", tag: "Backend" },
        { name: "Django Framework", level: "Intermediate", desc: "MVC/MVT pattern, ORM, REST endpoints, admin dashboard, auth", tag: "Web Engine" },
        { name: "C++ Programming", level: "Foundational", desc: "Pointers, memory management, OOP classes, problem solving", tag: "Systems" },
        { name: "RESTful APIs & JSON", level: "Intermediate", desc: "HTTP methods (GET, POST, PUT, DELETE), data serialisation", tag: "Integration" }
      ]
    },
    {
      category: "Networking & Cisco Tech",
      icon: "Network",
      color: "bg-white dark:bg-gray-800",
      skills: [
        { name: "Cisco Switching & Routing", level: "Certified", desc: "VLANs, switchport configurations, routing principles", tag: "Certified" },
        { name: "IPv4 Subnetting & CIDR", level: "Expert", desc: "Variable Length Subnet Masking (VLSM), host ranges, bitwise math", tag: "Networking" },
        { name: "TCP/IP & OSI Model", level: "Advanced", desc: "Layered network troubleshooting, packet flow, DNS, DHCP, HTTP", tag: "Protocols" }
      ]
    },
    {
      category: "Google Ads & Growth Marketing",
      icon: "Target",
      color: "bg-brutal-yellow/20 dark:bg-amber-950/40",
      skills: [
        { name: "Google Ads Account Management", level: "Advanced", desc: "Campaign architecture, search & display networks, ROI optimization & full-funnel SEM strategy", tag: "Spotlight" },
        { name: "High-Intent Keyword Sculpting", level: "Advanced", desc: "Broad/Phrase/Exact match grouping, negative keyword scrubbing, search term query analysis", tag: "SEM Core" },
        { name: "Conversion Tracking & GTM", level: "Advanced", desc: "Google Tag Manager custom events, enhanced conversion setup, GA4 revenue attribution", tag: "Analytics" },
        { name: "Smart Bidding & Target ROAS", level: "Advanced", desc: "Target CPA/ROAS tuning, Performance Max integration, Quality Score elevation (8/10+)", tag: "Scaling" }
      ]
    },
    {
      category: "Tools, CMS & Workflow",
      icon: "Wrench",
      color: "bg-white dark:bg-gray-800",
      skills: [
        { name: "Git & GitHub", level: "Advanced", desc: "Version control, branching, pull requests, collaboration", tag: "DevOps" },
        { name: "WordPress CMS", level: "Intermediate", desc: "Custom themes, plugins, site architecture, client setups", tag: "CMS" },
        { name: "Linux / CLI", level: "Intermediate", desc: "Bash commands, shell scripts, environment variables", tag: "Terminal" },
        { name: "Vite / npm", level: "Advanced", desc: "Modern build tooling, package management, hot reloading", tag: "Tooling" }
      ]
    }
  ],

  timeline: [
    {
      year: "2025 - 2026",
      title: "ISTA (OFPPT) — Full-Stack Digital Development",
      role: "Digital Development Student",
      type: "Academic",
      description: "Engaged in intensive full-stack training: database modeling, backend frameworks, software engineering lifecycle, and agile teamwork.",
      badge: "Degree in Progress"
    },
    {
      year: "2025 - 2026",
      title: "ALX Africa — Front-End Web Development Specialization",
      role: "Graduate & Certified Developer",
      type: "Certification",
      description: "Completed rigorous ALX engineering curriculum covering modern JavaScript, React ecosystem, collaborative Git workflows, and production deployments.",
      badge: "ALX Certified"
    },
    {
      year: "2025",
      title: "Cisco Systems Certification — Switching & IP Addressing",
      role: "Cisco Academy Scholar",
      type: "Certification",
      description: "Mastered enterprise network routing, CIDR subnet design, VLAN segmentation, and network troubleshooting.",
      badge: "Cisco Certified"
    },
    {
      year: "2025 - Present",
      title: "FreeCodeCamp & Open-Source Coding",
      role: "Continuous Learner & Builder",
      type: "Practical",
      description: "Building daily projects under the @StackOdyssey handle on GitHub, solving algorithmic challenges, and mastering modern web standards.",
      badge: "StackOdyssey"
    },
    {
      year: "2024",
      title: "C++ Fundamentals & Computer Science Basics",
      role: "Algorithmic Foundation",
      type: "Foundation",
      description: "Established core understanding of memory management, pointer arithmetic, object-oriented concepts, and algorithmic computational complexity.",
      badge: "C++ Certified"
    }
  ],

  terminalCommands: {
    help: "Available commands:\n  • about      - Learn more about Mohammed (StackOdyssey)\n  • skills     - Display full tech stack breakdown\n  • certs      - View verified certifications (Cisco, ALX, C++, ISTA)\n  • projects   - List GitHub repositories and live tools\n  • pricing    - View services & pricing tiers overview\n  • ipcalc     - Quick subnet calculation demo\n  • contact    - Get email, socials, and contact links\n  • whoami     - Check who you are connected to\n  • matrix     - Enter the hacker matrix rain effect\n  • theme      - List available brutalist themes\n  • clear      - Clear terminal screen",
    about: "MOHAMMED (STACKODYSSEY)\nRole: Full-Stack Web Developer & Digital Craftsman\nEducation: ISTA Full-Stack + ALX Africa + FreeCodeCamp\nFocus: High-performance React apps, Django backends, and rock-solid network logic.\nGitHub: https://github.com/StackOdyssey",
    certs: "VERIFIED CERTIFICATIONS:\n1. [CISCO] Switching & IP Addressing / Network Architecture (2025)\n2. [ALX AFRICA] Front-End Web Development Specialization (2025/2026)\n3. [C++] Fundamentals & Algorithmic Foundations (2024)\n4. [ISTA] Développement Digital Full Stack (In Progress)\n5. [FREECODECAMP] Responsive Design & JS Algorithms",
    skills: "CORE TECH STACK:\n• Frontend: React.js, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, Next.js basics\n• Backend: Python, Django, C++, RESTful APIs, JSON\n• Networking: Cisco Switching, IPv4 Subnetting, CIDR, TCP/IP Protocols\n• Marketing & Tools: Google Ads Account Management, Git/GitHub, WordPress, Linux CLI, Vite, npm",
    projects: "FEATURED PROJECTS & REPOSITORIES:\n1. Safe Hands Logistics   -> Next.js Enterprise CRM & Freight Platform (Saudi Arabia)\n2. Excellence Logistics   -> Multi-Lingual Warehouse & Logistics Hub (Vercel Edge)\n3. Atlas Lux Travel       -> Next.js 16 Luxury Travel & VIP Chauffeur Platform (atlasluxtravel.ma)\n4. alx-fe-reactjs        -> React Odyssey modular component ecosystem\n5. Alx_DjangoLearnLab    -> Django backend & REST API engine\n6. cisco-subnet-toolkit  -> Interactive IPv4 bitwise calculator",
    pricing: "SERVICES & PRICING PLANS (CALIBRATED 2026 RATES):\n1. Web Development              -> Landing (2,500 MAD) | Business (6,500 MAD) | Custom App (Quote)\n2. Google Ads Management        -> Starter (1,800 MAD/mo) | Growth (4,200 MAD/mo) | Scale (Quote)\n3. WordPress & Elementor         -> Basic (2,000 MAD) | Pro (4,800 MAD) | E-Com (Quote)\n4. Automation Workflows (Make)   -> Starter (1,200 MAD) | Business (3,200 MAD) | Enterprise (Quote)\n5. Custom Web Solutions         -> Consultation (400 MAD) | Custom Build (Quote)\n6. Codebase Security Checks      -> Quick (900 MAD) | Deep Scan (2,800 MAD) | Retainer (Quote)\n\n👉 View dedicated package pages with multi-currency toggle (MAD / USD / EUR) at #/pricing",
    contact: "CONNECT WITH MOHAMMED (STACKODYSSEY):\n• WhatsApp: https://wa.me/212672779391 (+212 672-779391)\n• Email:    davidsmithny01@gmail.com\n• GitHub:   https://github.com/StackOdyssey\n• Status:   Open for Internships, Freelance, & Full-Time Junior roles!",
    whoami: "guest@debuglab-terminal (Visitor looking at Mohammed's Portfolio 🚀)"
  },

  pricing: {
    currencyRates: { MAD: 1, USD: 0.098, EUR: 0.091 },
    currencySymbols: { MAD: "MAD", USD: "$", EUR: "€" },
    defaultCurrency: "MAD",
    serviceCategories: [
      {
        id: "web-development",
        slug: "web-development",
        title: "Web Development",
        shortTitle: "Web Dev",
        icon: "Code2",
        tagline: "High-speed, conversion-focused websites & custom applications built with modern frameworks.",
        idealFor: "Startups, brands, and businesses seeking modern UI/UX, top-tier performance, and custom logic.",
        description: "From single-page landing engines to scalable full-stack web platforms using React, Next.js, and Django. Built with mobile responsiveness, SEO best practices, and clean architecture.",
        deliverables: [
          "Production-ready Next.js / React application with zero lag",
          "Full mobile & tablet responsive layout with micro-interactions",
          "Structured schema metadata and on-page technical SEO",
          "Secure contact form and lead capture wiring",
          "Fast asset delivery and Core Web Vitals optimization",
          "Source code handover with documentation"
        ],
        faqs: [
          {
            question: "How long does a web development project take?",
            answer: "A landing page is typically completed in 3 to 7 business days. A multi-page business website takes 2 to 3 weeks, and custom web applications vary based on scope."
          },
          {
            question: "Do you supply hosting and domain setup?",
            answer: "Yes, I configure DNS records, domain linking, SSL certificates, and deploy onto high-performance platforms like Vercel or cloud hosts."
          },
          {
            question: "Can I manage the website content myself after delivery?",
            answer: "Yes! Depending on your chosen tier, we integrate headless CMS options, dynamic markdown collections, or admin dashboards so you can update text and images effortlessly."
          }
        ],
        tiers: [
          {
            name: "Landing Page",
            priceMAD: 2500,
            period: "one-time",
            features: [
              "Responsive single-page design",
              "SEO fundamentals & meta tags",
              "Contact form integration",
              "Mobile-first responsive layout",
              "1 revision round included"
            ],
            highlighted: false,
            cta: "Get Started",
            isCustomQuote: false
          },
          {
            name: "Business Website",
            priceMAD: 6500,
            period: "one-time",
            features: [
              "Up to 5 custom designed pages",
              "CMS or admin panel integration",
              "Full technical SEO optimization",
              "Core Web Vitals & speed tuning",
              "Google Analytics / Tag Manager",
              "3 revision rounds included"
            ],
            highlighted: true,
            cta: "Get Started",
            isCustomQuote: false
          },
          {
            name: "Enterprise / Custom App",
            priceMAD: null,
            period: "project",
            features: [
              "Full-stack architecture (Next.js / Django)",
              "Database design & ORM data modeling",
              "Custom admin dashboard & CRM",
              "REST API development & third-party hooks",
              "Payment gateway integration (Stripe / CMI)",
              "Role-based authentication & permissions",
              "Priority support & unlimited revisions"
            ],
            highlighted: false,
            cta: "Request Custom Quote",
            isCustomQuote: true
          }
        ]
      },
      {
        id: "google-ads",
        slug: "google-ads",
        title: "Google Ads Management",
        shortTitle: "Google Ads",
        icon: "Target",
        tagline: "High-intent search engine acquisition engineered for measurable conversions and ROI.",
        idealFor: "Businesses looking to capture customers actively searching for their services on Google Search.",
        description: "Full-funnel Google Ads campaign setup and continuous weekly optimization. Focused on low acquisition costs, high Quality Scores, negative keyword hygiene, and transparent tracking.",
        deliverables: [
          "Complete Google Ads account & conversion tracking architecture",
          "Comprehensive high-intent keyword & search term audit",
          "Compelling ad copy with all relevant extensions and callouts",
          "Negative keyword lists to prevent wasted budget ad spend",
          "Weekly bid adjustments and search term report mining",
          "Bi-weekly or monthly performance KPI reports"
        ],
        faqs: [
          {
            question: "Is the Google Ads ad spend included in these fees?",
            answer: "No. The ad budget is paid directly to Google from your credit card. My fee covers professional campaign strategy, setup, continuous monitoring, and optimization."
          },
          {
            question: "What is the recommended minimum ad budget?",
            answer: "For Moroccan and regional campaigns, a budget of 2,000 to 5,000 MAD/month gives the algorithm enough data to test, optimize, and generate predictable inquiries."
          },
          {
            question: "Are there long-term lock-in contracts?",
            answer: "No long-term contracts. Services operate month-to-month with complete transparency and client ownership of all campaign assets."
          }
        ],
        tiers: [
          {
            name: "Starter Setup & Manage",
            priceMAD: 1800,
            period: "/month",
            features: [
              "1 targeted search campaign",
              "Keyword research & match-type strategy",
              "Ad copy writing & asset extensions",
              "Negative keyword list curation",
              "Monthly performance report"
            ],
            highlighted: false,
            cta: "Get Started",
            isCustomQuote: false
          },
          {
            name: "Growth Engine",
            priceMAD: 4200,
            period: "/month",
            features: [
              "Up to 3 campaigns (Search + Display)",
              "Conversion tracking & GA4 integration",
              "A/B split testing on ad copy & headlines",
              "Bi-weekly optimization sprints",
              "Landing page CRO recommendations",
              "Competitor auction insights report"
            ],
            highlighted: true,
            cta: "Get Started",
            isCustomQuote: false
          },
          {
            name: "Scale & Enterprise",
            priceMAD: null,
            period: "/month",
            features: [
              "Unlimited campaigns & ad groups",
              "Multi-channel strategy (Search, Display, YouTube)",
              "Advanced analytics & attribution modeling",
              "Weekly optimization & budget rebalancing",
              "Dedicated Slack / WhatsApp VIP channel",
              "Custom real-time reporting dashboards"
            ],
            highlighted: false,
            cta: "Request Custom Quote",
            isCustomQuote: true
          }
        ]
      },
      {
        id: "wordpress-elementor",
        slug: "wordpress-elementor",
        title: "WordPress & Elementor",
        shortTitle: "WordPress",
        icon: "Layout",
        tagline: "Visually polished, easily manageable WordPress websites built with Elementor.",
        idealFor: "Agencies, consultants, and companies who need full autonomous control over page editing.",
        description: "Custom Elementor page building backed by lightweight performance tweaks, responsive styling, and necessary plugin integrations without bloated overhead.",
        deliverables: [
          "WordPress CMS installation, security setup, and database optimization",
          "Custom Elementor template kit styled to your brand guidelines",
          "Clean responsive design tested across mobile, tablet, and desktop",
          "Contact form, lead capture, and WhatsApp chat widget",
          "Speed optimization, caching configuration, and image compression",
          "1-on-1 video walkthrough tutorial showing how to edit content"
        ],
        faqs: [
          {
            question: "Do I need to buy Elementor Pro?",
            answer: "For basic sites, free Elementor is often sufficient. For custom headers, popups, and advanced themes, I will advise you on whether an Elementor Pro license is recommended."
          },
          {
            question: "Can I edit text and images after you build it?",
            answer: "Yes! Elementor is a drag-and-drop visual editor. I provide a personalized video walkthrough showing you exactly how to edit any section."
          },
          {
            question: "Will the WordPress site be fast?",
            answer: "Yes. I avoid plugin bloat, install Redis/caching modules, optimize images into WebP, and ensure clean DOM output for rapid load speeds."
          }
        ],
        tiers: [
          {
            name: "Basic Site",
            priceMAD: 2000,
            period: "one-time",
            features: [
              "WordPress setup & security hardening",
              "Elementor visual builder configured",
              "Responsive layout up to 3 pages",
              "Contact form & social links",
              "Basic SEO & meta tags",
              "1 revision round included"
            ],
            highlighted: false,
            cta: "Get Started",
            isCustomQuote: false
          },
          {
            name: "Professional Site",
            priceMAD: 4800,
            period: "one-time",
            features: [
              "Custom Elementor Pro visual design",
              "Up to 8 tailored pages & sections",
              "Booking form or catalog setup",
              "Speed optimization & asset caching",
              "RankMath / Yoast SEO configuration",
              "Handover video tutorial & 3 revisions"
            ],
            highlighted: true,
            cta: "Get Started",
            isCustomQuote: false
          },
          {
            name: "Advanced / E-Commerce",
            priceMAD: null,
            period: "project",
            features: [
              "Full WooCommerce store architecture",
              "Custom Elementor single product & archive templates",
              "Payment gateway integration (CMI, PayPal, Stripe)",
              "Multi-lingual configuration (WPML / Polylang)",
              "Automated transactional emails",
              "Priority maintenance & unlimited revisions"
            ],
            highlighted: false,
            cta: "Request Custom Quote",
            isCustomQuote: true
          }
        ]
      },
      {
        id: "make-automations",
        slug: "make-automations",
        title: "Automation Workflows (Make + Webhooks)",
        shortTitle: "Make Automations",
        icon: "Zap",
        tagline: "Eliminate repetitive manual tasks by connecting your tools with Make.com & webhooks.",
        idealFor: "Businesses losing time on manual data entry, lead forwarding, invoicing, or CRM syncing.",
        description: "Smart automation scenarios built with Make.com (Integromat), custom REST webhooks, and third-party APIs. Includes error catching, data formatting, and reliable execution.",
        deliverables: [
          "Architecture blueprint mapping triggers, filters, and actions",
          "Configured Make.com scenarios with robust data validation",
          "Custom webhook endpoints for instant real-time event processing",
          "Automated error routing and Slack/email notifications on failure",
          "Data transformation and cleanup between platforms",
          "Handoff documentation explaining each node in the scenario"
        ],
        faqs: [
          {
            question: "Why Make.com instead of Zapier?",
            answer: "Make.com offers visual node-based branching, handles complex data arrays with ease, and is typically 50% to 80% more cost-effective than Zapier at scale."
          },
          {
            question: "What tools can you connect?",
            answer: "Virtually any platform with an API or webhook: Google Sheets, Notion, Airtable, HubSpot, WordPress, Stripe, Slack, WhatsApp, Telegram, and custom databases."
          },
          {
            question: "What happens if a webhook or API temporarily fails?",
            answer: "All scenarios are built with error-handling directives and fallback routes so failed payloads are saved and retried without data loss."
          }
        ],
        tiers: [
          {
            name: "Starter Automation",
            priceMAD: 1200,
            period: "one-time",
            features: [
              "1 targeted automation scenario",
              "Connect up to 3 apps (e.g. Form -> Sheet -> Email)",
              "Instant webhook trigger setup",
              "Basic error handling & alert",
              "Execution testing & handoff note"
            ],
            highlighted: false,
            cta: "Get Started",
            isCustomQuote: false
          },
          {
            name: "Business Automation",
            priceMAD: 3200,
            period: "one-time",
            features: [
              "Up to 4 interconnected scenarios",
              "Multi-step branching & filtering logic",
              "CRM, WhatsApp, or Slack alert pipelines",
              "Data normalization & transformation formulas",
              "Automated retry routers & failure logging",
              "Walkthrough review session included"
            ],
            highlighted: true,
            cta: "Get Started",
            isCustomQuote: false
          },
          {
            name: "Enterprise Automation",
            priceMAD: null,
            period: "project",
            features: [
              "End-to-end business operations automation",
              "Custom API connector & JSON payload parsers",
              "Bi-directional database sync & webhook listeners",
              "Advanced scheduling, queuing & rate limiting",
              "Scenario performance monitoring setup",
              "Ongoing workflow retainer & priority fixes"
            ],
            highlighted: false,
            cta: "Request Custom Quote",
            isCustomQuote: true
          }
        ]
      },
      {
        id: "custom-web-solutions",
        slug: "custom-web-solutions",
        title: "Custom Web Solutions",
        shortTitle: "Custom Solutions",
        icon: "Sparkles",
        tagline: "Tailor-made digital tools, internal dashboards, and unique technical builds.",
        idealFor: "Projects with unique requirements that off-the-shelf templates cannot satisfy.",
        description: "When template solutions hit a wall, I design and develop custom web tools, client portals, internal utilities, and custom integrations engineered specifically for your workflow.",
        deliverables: [
          "Technical requirement specification & architecture design",
          "Custom user interface wireframing and frontend development",
          "Backend API endpoints, database schemas, and authentication",
          "Third-party system integrations and bespoke data flows",
          "Comprehensive unit & integration testing before launch",
          "Deployment, server configuration, and post-launch maintenance"
        ],
        faqs: [
          {
            question: "How does the Discovery & Consultation session work?",
            answer: "We spend 1 hour reviewing your technical needs, feasibility, and architecture. You receive a written technical brief and roadmap regardless of whether we build together."
          },
          {
            question: "What tech stack do you recommend for custom builds?",
            answer: "Typically Next.js or React on the frontend paired with Node.js or Django on the backend, depending on your scalability and data requirements."
          }
        ],
        tiers: [
          {
            name: "Discovery & Architecture Session",
            priceMAD: 400,
            period: "session",
            features: [
              "1-hour deep-dive technical consultation",
              "Business requirements analysis",
              "Feasibility assessment & stack recommendation",
              "Architecture blueprint & cost breakdown",
              "Written summary roadmap provided"
            ],
            highlighted: false,
            cta: "Book Session",
            isCustomQuote: false
          },
          {
            name: "Custom Web Build",
            priceMAD: null,
            period: "project",
            features: [
              "Fully custom UI/UX design & frontend logic",
              "Bespoke backend APIs & relational database",
              "Authentication, role permissions & security",
              "Custom integrations (payments, webhooks, CRMs)",
              "Full end-to-end automated testing & QA",
              "Cloud deployment & post-launch warranty period"
            ],
            highlighted: true,
            cta: "Request Custom Quote",
            isCustomQuote: true
          }
        ]
      },
      {
        id: "security-checks",
        slug: "security-checks",
        title: "Codebase Security Checks & Revisions",
        shortTitle: "Security Checks",
        icon: "ShieldCheck",
        tagline: "Vulnerability audits, dependency scanning, code reviews, and defensive hardening.",
        idealFor: "Companies seeking peace of mind before launch or verifying existing codebase integrity.",
        description: "Thorough security inspections targeting OWASP Top 10 vulnerabilities, leaked secrets, outdated dependencies, permission flaws, and insecure HTTP configurations.",
        deliverables: [
          "Automated & manual source code security audit report",
          "Dependency vulnerability (CVE) scanning and outdated package triage",
          "Secrets & API keys leakage check across git history",
          "HTTP security headers & Content Security Policy (CSP) checklist",
          "Direct code patch pull requests resolving identified critical items",
          "Post-audit verification scan confirming fixes"
        ],
        faqs: [
          {
            question: "How do you access our codebase safely?",
            answer: "Access is granted via read-only GitHub repository invites or localized tarball archives under strict confidentiality agreements."
          },
          {
            question: "Do you only provide a report, or do you fix the issues?",
            answer: "The 'Deep Scan & Fix' tier includes both the comprehensive audit report and hands-on code patches/pull requests to remediate the vulnerabilities."
          },
          {
            question: "Can you help protect against DDoS attacks?",
            answer: "Yes, I configure rate limiters, reverse proxy caching, Cloudflare / Cloud Armor rules, and defensive HTTP security headers."
          }
        ],
        tiers: [
          {
            name: "Quick Security Audit",
            priceMAD: 900,
            period: "one-time",
            features: [
              "Dependency CVE vulnerability scan",
              "OWASP Top 10 critical checklist review",
              "Environment & secrets leakage audit",
              "Severity-ranked issue summary report",
              "Actionable developer remediation checklist"
            ],
            highlighted: false,
            cta: "Get Started",
            isCustomQuote: false
          },
          {
            name: "Deep Scan & Fix",
            priceMAD: 2800,
            period: "one-time",
            features: [
              "Comprehensive manual + automated code review",
              "Auth, session & token validation audit",
              "SQL injection, XSS & CSRF prevention review",
              "Security patches implementation (PRs)",
              "HTTP security headers & CSP hardening",
              "Detailed remediation report & verification scan"
            ],
            highlighted: true,
            cta: "Get Started",
            isCustomQuote: false
          },
          {
            name: "Ongoing Security Retainer",
            priceMAD: null,
            period: "/month",
            features: [
              "Continuous automated dependency alerts",
              "Monthly deep security re-scans",
              "Priority zero-day vulnerability patching",
              "Compliance & secure coding advisory",
              "Direct emergency security hotline",
              "Quarterly executive security summary"
            ],
            highlighted: false,
            cta: "Request Custom Quote",
            isCustomQuote: true
          }
        ]
      }
    ]
  }
};

