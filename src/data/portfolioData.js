export const PORTFOLIO = {
  name: "Mohammed",
  nickname: "StackOdyssey",
  handle: "StackOdyssey",
  role: "Full-Stack Web Developer & Digital Craftsman",
  status: "Available for Internships & Projects",
  statusColor: "bg-green-500",
  location: "Morocco / Remote",
  bio: "Student full-stack developer passionate about building resilient, high-speed, and visually electric web applications. Honing skills across modern JavaScript, React.js, Django, C++, and Cisco network architecture.",
  taglines: [
    "Turning coffee & React components into sleek digital products.",
    "Bridging the gap between front-end aesthetics and backend logic.",
    "Certified in Cisco networking, C++ basics, and ALX front-end engineering.",
    "Currently building the future at ISTA & FreeCodeCamp."
  ],
  githubUrl: "https://github.com/StackOdyssey",
  linkedinUrl: "https://linkedin.com/in/stackodyssey",
  email: "contact.stackodyssey@gmail.com",
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
      color: "bg-brutal-cyan",
      textColor: "text-black",
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
      color: "bg-brutal-yellow",
      textColor: "text-black",
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
      color: "bg-brutal-pink",
      textColor: "text-black",
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
      color: "bg-brutal-lime",
      textColor: "text-black",
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
      color: "bg-brutal-purple",
      textColor: "text-white",
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
      clientName: "Safe Hands Shipping Line (Saudi Arabia)",
      image: "/projects/safe-hands-shipping-line.png",
      liveUrl: "https://www.safehandsshippingline.com/ar",
      liveUrlEn: "https://www.safehandsshippingline.com/en",
      description: "A production-grade Next.js enterprise web portal and logistics management platform featuring Prisma ORM database models, multi-lingual internationalization (Arabic/English), dynamic freight quotation calculators, and technical SEO architecture built for a real commercial client.",
      tech: ["Next.js", "TypeScript", "Prisma ORM", "PostgreSQL", "Tailwind CSS", "i18n Localization", "SEO Systems"],
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
      color: "bg-amber-200 border-black"
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
      image: "/projects/excellence-logistics.jpeg",
      liveUrl: "https://excellence-warehouse-1rfub5rrl-stackodysseys-projects.vercel.app/en",
      description: "A modern, full-scale enterprise logistics and warehouse management web application featuring automated multi-lingual language routing, freight quotation forms, real-time cargo operations tracking, and responsive UI styling.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "i18n Localization", "Vercel Edge", "Responsive UI"],
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
      color: "bg-cyan-200 border-black"
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
      color: "bg-yellow-200 border-black"
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
      color: "bg-emerald-200 border-black"
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
      color: "bg-cyan-200 border-black"
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
      color: "bg-purple-200 border-black"
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
      color: "bg-rose-200 border-black"
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
      color: "bg-orange-200 border-black"
    }
  ],

  skillsByCategory: [
    {
      category: "Frontend Development",
      icon: "Layout",
      color: "bg-brutal-yellow",
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
      color: "bg-brutal-lime",
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
      color: "bg-brutal-cyan",
      skills: [
        { name: "Cisco Switching & Routing", level: "Certified", desc: "VLANs, switchport configurations, routing principles", tag: "Certified" },
        { name: "IPv4 Subnetting & CIDR", level: "Expert", desc: "Variable Length Subnet Masking (VLSM), host ranges, bitwise math", tag: "Networking" },
        { name: "TCP/IP & OSI Model", level: "Advanced", desc: "Layered network troubleshooting, packet flow, DNS, DHCP, HTTP", tag: "Protocols" }
      ]
    },
    {
      category: "Google Ads & Growth Marketing",
      icon: "Target",
      color: "bg-amber-300",
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
      color: "bg-brutal-pink",
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
    help: "Available commands:\n  • about      - Learn more about Mohammed (StackOdyssey)\n  • skills     - Display full tech stack breakdown\n  • certs      - View verified certifications (Cisco, ALX, C++, ISTA)\n  • projects   - List GitHub repositories and live tools\n  • ipcalc     - Quick subnet calculation demo\n  • contact    - Get email, socials, and contact links\n  • whoami     - Check who you are connected to\n  • matrix     - Enter the hacker matrix rain effect\n  • theme      - List available brutalist themes\n  • clear      - Clear terminal screen",
    about: "MOHAMMED (STACKODYSSEY)\nRole: Full-Stack Web Developer & Digital Craftsman\nEducation: ISTA Full-Stack + ALX Africa + FreeCodeCamp\nFocus: High-performance React apps, Django backends, and rock-solid network logic.\nGitHub: https://github.com/StackOdyssey",
    certs: "VERIFIED CERTIFICATIONS:\n1. [CISCO] Switching & IP Addressing / Network Architecture (2025)\n2. [ALX AFRICA] Front-End Web Development Specialization (2025/2026)\n3. [C++] Fundamentals & Algorithmic Foundations (2024)\n4. [ISTA] Développement Digital Full Stack (In Progress)\n5. [FREECODECAMP] Responsive Design & JS Algorithms",
    skills: "CORE TECH STACK:\n• Frontend: React.js, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, Next.js basics\n• Backend: Python, Django, C++, RESTful APIs, JSON\n• Networking: Cisco Switching, IPv4 Subnetting, CIDR, TCP/IP Protocols\n• Marketing & Tools: Google Ads Account Management, Git/GitHub, WordPress, Linux CLI, Vite, npm",
    projects: "FEATURED PROJECTS & REPOSITORIES:\n1. Safe Hands Logistics   -> Next.js Enterprise CRM & Freight Platform (Client Case Study)\n2. alx-fe-reactjs        -> React Odyssey modular component ecosystem\n3. Alx_DjangoLearnLab    -> Django backend & REST API engine\n4. dynamic-to-do-list-js -> Pure JS productivity manager\n5. ALX_Simple_Quiz       -> Timed JS knowledge quiz\n6. cisco-subnet-toolkit  -> Interactive IPv4 bitwise calculator",
    contact: "CONNECT WITH MOHAMMED (STACKODYSSEY):\n• WhatsApp: https://wa.me/212672779391 (+212 672-779391)\n• Email:    contact.stackodyssey@gmail.com\n• GitHub:   https://github.com/StackOdyssey\n• Status:   Open for Internships, Freelance, & Full-Time Junior roles!",
    whoami: "guest@debuglab-terminal (Visitor looking at Mohammed's Portfolio 🚀)"
  }
};
