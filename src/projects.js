export const PROJECTS = [
  {
    id: 1,
    slug: "orip",
    title: "ORIP",
    category: "Website Design and Development",
    year: "2019 - 2025",
    tags: ["Drupal", "Figma"],
    description:
      "Supported the Office of Research Infrastructure Programs (ORIP) in a website redesign and migration from Drupal 7 to Drupal 10.",
    color: "#fff",
    accent: "#2C2C2A",
    span: "mid",
    role: "Developer",
    coverImage: "/images/orip-thumb.png",
    heroImage: "/images/orip.png",
    images: [
      { url: "orip.png", caption: "Local issues feed — personalized to your address and interests" },
      { url: "orip.png", caption: "Meeting summary cards — 2-minute briefings on 2-hour sessions" },
      { url: "orip.png", caption: "Representative profile — voting record made transparent" },
    ],

    // Case study content
    overview:
      "Supported the Office of Research Infrastructure Programs (ORIP) in a website redesign and migration from Drupal 7 to Drupal 10.",
    duration: "12 months",
    team: "1 designer, 2 PMs, 2 developers",
    platform: "Drupal",

    problem: {
      heading: "A 9-step onboarding no one finished",
      body: "Our discovery phase surfaced three core failure points: the app asked for sensitive financial data before establishing any trust; progress was invisible — users had no idea how far along they were; and the visual language felt corporate and cold, the opposite of what you want when someone is handing you access to their savings.",
      stats: [
        { value: "58%", label: "Drop-off before step 4" },
        { value: "9", label: "Steps in original flow" },
        { value: "2.1★", label: "App Store rating at kickoff" },
      ],
    },

    process: [
      {
        phase: "Research",
        body: "Ran 12 moderated usability sessions with existing and lapsed users. Mapped every hesitation point onto a journey map and cross-referenced with Mixpanel funnel data to rank severity.",
      },
      {
        phase: "Ideation",
        body: "Ran a two-day design sprint with the PM and engineering lead. Generated 40+ concepts, dot-voted to 6, prototyped 3 in Figma for unmoderated testing via Maze.",
      },
      {
        phase: "Iteration",
        body: "Four rounds of prototype testing. Biggest insight: users didn't mind giving sensitive info — they just needed to understand why. Adding a single contextual tooltip at the SSN field cut abandonment at that step by 31%.",
      },
      {
        phase: "Delivery",
        body: "Shipped a 4-step progressive onboarding with a persistent progress bar, warm illustrative UI, and deferred KYC. Stayed through QA and a soft launch to 10% of users before full rollout.",
      },
    ],

    outcome: {
      heading: "42% fewer drop-offs. 4.6 stars.",
      body: "Within 60 days of launch, onboarding completion climbed from 42% to 84%. The App Store rating moved from 2.1 to 4.6 over three months. The redesigned flow became the template for Meridian's two subsequent product launches.",
      stats: [
        { value: "84%", label: "Onboarding completion" },
        { value: "42%", label: "Drop-off reduction" },
        { value: "4.6★", label: "App Store rating" },
      ],
    },

    nextSlug: "obssr",
    nextTitle: "OBSSR",
  },

  {
    id: 2,
    slug: "obssr",
    title: "OBSSR",
    category: "Website Design and Development",
    year: "2024",
    tags: ["Drupal", "Figma"],
    description:
      "Supported the Office of Behavioral and Social Science Research (OBSSR) in a website redesign and migration from Wordpress to Drupal.",
    color: "#fff",
    accent: "#2C2C2A",
    span: "mid",
    role: "Front-end Developer & Designer",
    coverImage: "/images/obssr-thumb.png",
    heroImage: "/images/obssr-thumb.png",
    images: [
      { url: "orip.png", caption: "Local issues feed — personalized to your address and interests" },
      { url: "orip.png", caption: "Meeting summary cards — 2-minute briefings on 2-hour sessions" },
      { url: "orip.png", caption: "Representative profile — voting record made transparent" },
    ],

    overview:
      "Solis Health had grown fast. Six product teams, three separate component libraries, and a design org where no two screens looked like they belonged to the same product. Patients switching between the scheduling app, the telehealth portal, and the pharmacy tool felt the inconsistency. So did engineers spending hours reconciling mismatched components.",
    duration: "8 months",
    team: "2 designers, 1 engineer, 6 product teams",
    platform: "Web (React)",

    problem: {
      heading: "Six teams, three libraries, zero consistency",
      body: "An audit of the product surface revealed 14 button variants, 9 modal patterns, and type scales that differed by as much as 4px between products. More critically, accessibility compliance varied wildly — some flows met WCAG AA, others didn't come close. In a healthcare context, that's not a design problem, it's a legal risk.",
      stats: [
        { value: "14", label: "Button variants in the wild" },
        { value: "3", label: "Competing component libraries" },
        { value: "~40%", label: "Components failing WCAG AA" },
      ],
    },

    process: [
      {
        phase: "Audit",
        body: "Catalogued every UI component across all 6 products. Built a component inventory spreadsheet tracking variant count, accessibility status, and usage frequency. This became the prioritization bible.",
      },
      {
        phase: "Foundations",
        body: "Defined tokens first — color, spacing, typography, radius, shadow. Built in Figma Variables so the entire system could theme from a single source of truth. Every color token was tested for WCAG AA contrast at definition time.",
      },
      {
        phase: "Components",
        body: "Built the 20 highest-frequency components first, working in tandem with the platform engineer to ensure Figma and the React implementation stayed in sync. Wrote usage guidelines and anti-patterns for each component.",
      },
      {
        phase: "Adoption",
        body: "Ran onboarding sessions with each product team. Created a Slack channel for system questions, a changelog, and a contribution model so teams could propose new components without forking the library.",
      },
    ],

    outcome: {
      heading: "One library. Six teams. Full WCAG compliance.",
      body: "Eight months after kickoff, all six teams had migrated their core flows to the new system. Every component in the library passed WCAG AA. Design-to-dev handoff time dropped by an estimated 35% based on team surveys. The system has since been open-sourced internally as a model for Solis's future products.",
      stats: [
        { value: "100%", label: "WCAG AA compliance" },
        { value: "35%", label: "Faster design-to-dev handoff" },
        { value: "6/6", label: "Teams fully migrated" },
      ],
    },

    nextSlug: "dpcpsi-inside",
    nextTitle: "Kairos",
  },

  {
    id: 3,
    slug: "dpcpsi-inside",
    title: "DPCPSI Inside",
    category: "0→1 Product",
    year: "2023",
    tags: ["Drupal"],
    description:
      "Supported the migration and redesign of the DPCPSI employee intranet from Sharepoint to Drupal.",
    color: "#fff",
    accent: "#2C2C2A",
    span: "mid",
    role: "Designer and Front-end Developer",
    coverImage: "/images/dpcpsi-inside-thumb.png",
    heroImage: "/images/dpcpsi-inside-thumb.png",
    images: [
      { url: "orip.png", caption: "Local issues feed — personalized to your address and interests" },
      { url: "orip.png", caption: "Meeting summary cards — 2-minute briefings on 2-hour sessions" },
      { url: "orip.png", caption: "Representative profile — voting record made transparent" },
    ],

    overview:
      "Kairos started as a napkin sketch from two ex-Google engineers who were convinced calendaring was broken. Their hypothesis: if an AI understood your working patterns well enough, it could protect your time better than you could yourself. They needed a founding designer to help prove the concept was real before they raised.",
    duration: "11 months",
    team: "Founding team of 4",
    platform: "Web App",

    problem: {
      heading: "Proving an AI scheduler people would actually trust",
      body: "The core design challenge wasn't the interface — it was trust. Giving an AI permission to move, decline, and create meetings on your behalf is a significant act of faith. Early prototypes felt powerful but opaque. Users didn't know why Kairos was making the decisions it was making, and opacity bred anxiety.",
      stats: [
        { value: "0", label: "Existing users to learn from" },
        { value: "~12", label: "Competing tools evaluated" },
        { value: "1", label: "Designer (me) for 11 months" },
      ],
    },

    process: [
      {
        phase: "Discovery",
        body: "Interviewed 30 knowledge workers about their calendar pain — not about AI scheduling, which no one had used. Mapped their mental models around time, priority, and interruption. These became the design principles.",
      },
      {
        phase: "Concept",
        body: "Explored three distinct product directions: ambient (invisible, fully automated), collaborative (AI as a scheduling assistant you converse with), and transparent (AI that shows its reasoning). Testing revealed users wanted collaborative with transparency built in.",
      },
      {
        phase: "Build",
        body: "Designed the full product in Figma — onboarding, the main calendar view, the AI explanation layer, settings, and the mobile companion. Worked directly in code for some micro-interactions to get the motion right.",
      },
      {
        phase: "Fundraise",
        body: "The Figma prototype was a core part of the Series A deck. Sat in on investor meetings to answer design and product questions. The UI was called out specifically by two lead investors as a differentiator.",
      },
    ],

    outcome: {
      heading: "Series A closed. 8,000 users at launch.",
      body: "Kairos raised a $6M Series A nine months into development. The public beta launched to 8,000 waitlisted users with a 4.8 Product Hunt rating. The transparency layer — showing users why the AI made each decision — became the product's defining feature and primary acquisition driver.",
      stats: [
        { value: "$6M", label: "Series A raised" },
        { value: "8,000", label: "Beta users at launch" },
        { value: "4.8", label: "Product Hunt rating" },
      ],
    },

    nextSlug: "thro",
    nextTitle: "THRO",
  },

{
    id: 4,
    slug: "thro",
    title: "THRO",
    category: "Web",
    year: "2004",
    tags: ["Drupal", "Figma"],
    description:
      "Redesigned the Tribal Health Research Office (THRO) website and supported ongoing publishing tasks.",
    color: "#fff",
    accent: "#2C2C2A",
    span: "mid",
    role: "Web Developer",
        coverImage: "/images/thro-thumb.png",
    heroImage: "/images/thro-thumb.png",
    images: [
      { url: "orip.png", caption: "Local issues feed — personalized to your address and interests" },
      { url: "orip.png", caption: "Meeting summary cards — 2-minute briefings on 2-hour sessions" },
      { url: "orip.png", caption: "Representative profile — voting record made transparent" },
    ],

    overview:
      "Forma Editorial is a seven-person architecture and interiors studio doing some of the most interesting residential work in the Pacific Northwest. Their reputation was exceptional. Their brand was a white-label WordPress theme from 2017. They needed an identity that matched the quality of what they built.",
    duration: "4 months",
    team: "1 designer, 1 developer",
    platform: "Branding + Web",

    problem: {
      heading: "World-class work, invisible brand",
      body: "Forma's photography was stunning — the brand wrapping it was invisible at best, actively undermining at worst. The logo was generic, the website buried their best work in a paginated grid, and there was no consistent visual language across their pitch decks, proposals, or social presence. Prospective clients were Googling them and clicking away.",
      stats: [
        { value: "2017", label: "Last brand update" },
        { value: "<30s", label: "Avg. time on old site" },
        { value: "0", label: "Inbound leads from web" },
      ],
    },

    process: [
      {
        phase: "Brand Strategy",
        body: "Ran a two-day brand sprint with the two founding partners. Defined positioning, personality, and audience. Key insight: Forma's differentiator is their editorial approach to architecture — they think about how spaces will be written about, photographed, and remembered. That became the brand idea.",
      },
      {
        phase: "Identity",
        body: "Explored three directions: Minimal Swiss, Editorial Warm, and Structural. The partners chose a refined editorial direction — a custom wordmark, a terracotta and warm white palette, and a typographic system built around contrast between a high-contrast serif and a grotesque.",
      },
      {
        phase: "Web Design",
        body: "Designed a fullscreen, photography-first site with a non-standard navigation pattern that felt like turning the pages of a monograph. Every interaction was prototyped in Framer before handoff to the developer.",
      },
      {
        phase: "Motion & Launch",
        body: "Defined a motion language — slow, deliberate transitions that mirror how you experience a well-designed space. Wrote the brand guidelines document. Managed the launch, including a coordinated Instagram rollout.",
      },
    ],

    outcome: {
      heading: "Awwwards honoree. 3 inbound projects in 60 days.",
      body: "The site launched to immediate industry recognition — an Awwwards Site of the Day, coverage in Dezeen, and three unsolicited project inquiries within 60 days, each above Forma's previous average project value. Average session time went from under 30 seconds to over 4 minutes.",
      stats: [
        { value: "4min+", label: "Avg. session duration" },
        { value: "3", label: "Inbound projects in 60 days" },
        { value: "SOTD", label: "Awwwards Site of the Day" },
      ],
    },

    nextSlug: "living-history",
    nextTitle: "A Living History",
  },

  {
    id: 5,
    slug: "living-history",
    title: "A Living History",
    category: "Web",
    year: "2022",
    tags: ["Nunjucks", "Figma", "Bootstrap"],
    description:
      "Supported the website redesign and modernization and developed a compelling visual timemline.",
    color: "#fff",
    accent: "#2C2C2A",
    span: "mid",
    role: "Web Developer",
    coverImage: "/images/living-history-thumb.png",
    heroImage: "/images/living-history-thumb.png",
    images: [
      { url: "orip.png", caption: "Local issues feed — personalized to your address and interests" },
      { url: "orip.png", caption: "Meeting summary cards — 2-minute briefings on 2-hour sessions" },
      { url: "orip.png", caption: "Representative profile — voting record made transparent" },
    ],

    overview:
      "Forma Editorial is a seven-person architecture and interiors studio doing some of the most interesting residential work in the Pacific Northwest. Their reputation was exceptional. Their brand was a white-label WordPress theme from 2017. They needed an identity that matched the quality of what they built.",
    duration: "4 months",
    team: "1 designer, 1 developer",
    platform: "Branding + Web",

    problem: {
      heading: "World-class work, invisible brand",
      body: "Forma's photography was stunning — the brand wrapping it was invisible at best, actively undermining at worst. The logo was generic, the website buried their best work in a paginated grid, and there was no consistent visual language across their pitch decks, proposals, or social presence. Prospective clients were Googling them and clicking away.",
      stats: [
        { value: "2017", label: "Last brand update" },
        { value: "<30s", label: "Avg. time on old site" },
        { value: "0", label: "Inbound leads from web" },
      ],
    },

    process: [
      {
        phase: "Brand Strategy",
        body: "Ran a two-day brand sprint with the two founding partners. Defined positioning, personality, and audience. Key insight: Forma's differentiator is their editorial approach to architecture — they think about how spaces will be written about, photographed, and remembered. That became the brand idea.",
      },
      {
        phase: "Identity",
        body: "Explored three directions: Minimal Swiss, Editorial Warm, and Structural. The partners chose a refined editorial direction — a custom wordmark, a terracotta and warm white palette, and a typographic system built around contrast between a high-contrast serif and a grotesque.",
      },
      {
        phase: "Web Design",
        body: "Designed a fullscreen, photography-first site with a non-standard navigation pattern that felt like turning the pages of a monograph. Every interaction was prototyped in Framer before handoff to the developer.",
      },
      {
        phase: "Motion & Launch",
        body: "Defined a motion language — slow, deliberate transitions that mirror how you experience a well-designed space. Wrote the brand guidelines document. Managed the launch, including a coordinated Instagram rollout.",
      },
    ],

    outcome: {
      heading: "Awwwards honoree. 3 inbound projects in 60 days.",
      body: "The site launched to immediate industry recognition — an Awwwards Site of the Day, coverage in Dezeen, and three unsolicited project inquiries within 60 days, each above Forma's previous average project value. Average session time went from under 30 seconds to over 4 minutes.",
      stats: [
        { value: "4min+", label: "Avg. session duration" },
        { value: "3", label: "Inbound projects in 60 days" },
        { value: "SOTD", label: "Awwwards Site of the Day" },
      ],
    },

    nextSlug: "scg-com",
    nextTitle: "The Scientific Consulting Group",
  },

  {
    id: 6,
    slug: "scg-com",
    title: "The Scientific Consulting Group",
    category: "Web",
    year: "2004",
    tags: ["Nunjucks", "Bootstrap"],
    description:
      "Supported the website redesign and streamlined the website making it easier to update and maintain.",
    color: "#fff",
    accent: "#2C2C2A",
    span: "mid",
    role: "Web Developer",
        coverImage: "/images/scgcorp-thumb.png",
    heroImage: "/images/scgcorp-thumb.png",
    images: [
      { url: "orip.png", caption: "Local issues feed — personalized to your address and interests" },
      { url: "orip.png", caption: "Meeting summary cards — 2-minute briefings on 2-hour sessions" },
      { url: "orip.png", caption: "Representative profile — voting record made transparent" },
    ],

    overview:
      "Forma Editorial is a seven-person architecture and interiors studio doing some of the most interesting residential work in the Pacific Northwest. Their reputation was exceptional. Their brand was a white-label WordPress theme from 2017. They needed an identity that matched the quality of what they built.",
    duration: "4 months",
    team: "1 designer, 1 developer",
    platform: "Branding + Web",

    problem: {
      heading: "World-class work, invisible brand",
      body: "Forma's photography was stunning — the brand wrapping it was invisible at best, actively undermining at worst. The logo was generic, the website buried their best work in a paginated grid, and there was no consistent visual language across their pitch decks, proposals, or social presence. Prospective clients were Googling them and clicking away.",
      stats: [
        { value: "2017", label: "Last brand update" },
        { value: "<30s", label: "Avg. time on old site" },
        { value: "0", label: "Inbound leads from web" },
      ],
    },

    process: [
      {
        phase: "Brand Strategy",
        body: "Ran a two-day brand sprint with the two founding partners. Defined positioning, personality, and audience. Key insight: Forma's differentiator is their editorial approach to architecture — they think about how spaces will be written about, photographed, and remembered. That became the brand idea.",
      },
      {
        phase: "Identity",
        body: "Explored three directions: Minimal Swiss, Editorial Warm, and Structural. The partners chose a refined editorial direction — a custom wordmark, a terracotta and warm white palette, and a typographic system built around contrast between a high-contrast serif and a grotesque.",
      },
      {
        phase: "Web Design",
        body: "Designed a fullscreen, photography-first site with a non-standard navigation pattern that felt like turning the pages of a monograph. Every interaction was prototyped in Framer before handoff to the developer.",
      },
      {
        phase: "Motion & Launch",
        body: "Defined a motion language — slow, deliberate transitions that mirror how you experience a well-designed space. Wrote the brand guidelines document. Managed the launch, including a coordinated Instagram rollout.",
      },
    ],

    outcome: {
      heading: "Awwwards honoree. 3 inbound projects in 60 days.",
      body: "The site launched to immediate industry recognition — an Awwwards Site of the Day, coverage in Dezeen, and three unsolicited project inquiries within 60 days, each above Forma's previous average project value. Average session time went from under 30 seconds to over 4 minutes.",
      stats: [
        { value: "4min+", label: "Avg. session duration" },
        { value: "3", label: "Inbound projects in 60 days" },
        { value: "SOTD", label: "Awwwards Site of the Day" },
      ],
    },

    nextSlug: "miami-com",
    nextTitle: "Miami.com",
  },

  {
    id: 7,
    slug: "miami-com",
    title: "Miami.com",
    category: "Web",
    year: "2007",
    tags: ["Drupal"],
    description:
      "Our team designed and developed Miami.com, an city-lifestyle and entertainment website that focuses on things to do in Miami. ",
    color: "#fff",
    accent: "#2C2C2A",
    span: "mid",
    role: "Web Developer",
        coverImage: "/images/miamicom-thumb.jpg",
    heroImage: "orip.png",
    images: [
      { url: "orip.png", caption: "Local issues feed — personalized to your address and interests" },
      { url: "orip.png", caption: "Meeting summary cards — 2-minute briefings on 2-hour sessions" },
      { url: "orip.png", caption: "Representative profile — voting record made transparent" },
    ],

    overview:
      "Forma Editorial is a seven-person architecture and interiors studio doing some of the most interesting residential work in the Pacific Northwest. Their reputation was exceptional. Their brand was a white-label WordPress theme from 2017. They needed an identity that matched the quality of what they built.",
    duration: "4 months",
    team: "1 designer, 1 developer",
    platform: "Branding + Web",

    problem: {
      heading: "World-class work, invisible brand",
      body: "Forma's photography was stunning — the brand wrapping it was invisible at best, actively undermining at worst. The logo was generic, the website buried their best work in a paginated grid, and there was no consistent visual language across their pitch decks, proposals, or social presence. Prospective clients were Googling them and clicking away.",
      stats: [
        { value: "2017", label: "Last brand update" },
        { value: "<30s", label: "Avg. time on old site" },
        { value: "0", label: "Inbound leads from web" },
      ],
    },

    process: [
      {
        phase: "Brand Strategy",
        body: "Ran a two-day brand sprint with the two founding partners. Defined positioning, personality, and audience. Key insight: Forma's differentiator is their editorial approach to architecture — they think about how spaces will be written about, photographed, and remembered. That became the brand idea.",
      },
      {
        phase: "Identity",
        body: "Explored three directions: Minimal Swiss, Editorial Warm, and Structural. The partners chose a refined editorial direction — a custom wordmark, a terracotta and warm white palette, and a typographic system built around contrast between a high-contrast serif and a grotesque.",
      },
      {
        phase: "Web Design",
        body: "Designed a fullscreen, photography-first site with a non-standard navigation pattern that felt like turning the pages of a monograph. Every interaction was prototyped in Framer before handoff to the developer.",
      },
      {
        phase: "Motion & Launch",
        body: "Defined a motion language — slow, deliberate transitions that mirror how you experience a well-designed space. Wrote the brand guidelines document. Managed the launch, including a coordinated Instagram rollout.",
      },
    ],

    outcome: {
      heading: "Awwwards honoree. 3 inbound projects in 60 days.",
      body: "The site launched to immediate industry recognition — an Awwwards Site of the Day, coverage in Dezeen, and three unsolicited project inquiries within 60 days, each above Forma's previous average project value. Average session time went from under 30 seconds to over 4 minutes.",
      stats: [
        { value: "4min+", label: "Avg. session duration" },
        { value: "3", label: "Inbound projects in 60 days" },
        { value: "SOTD", label: "Awwwards Site of the Day" },
      ],
    },

    nextSlug: "rooted-studio",
    nextTitle: "The Rooted Studio",
  },

  {
    id: 8,
    slug: "rooted-studio",
    title: "The Rooted Studio",
    category: "Web",
    year: "2004",
    tags: ["Wordpress"],
    description:
      "Designed and built a website for a design + build architecture firm.",
    color: "#fff",
    accent: "#2C2C2A",
    span: "mid",
    role: "Web Developer",
    coverImage: "/images/rooted-studio-thumb.png",
    heroImage: "/images/rooted-studio.png",
    images: [
      { url: "orip.png", caption: "Local issues feed — personalized to your address and interests" },
      { url: "orip.png", caption: "Meeting summary cards — 2-minute briefings on 2-hour sessions" },
      { url: "orip.png", caption: "Representative profile — voting record made transparent" },
    ],

    overview:
      "Forma Editorial is a seven-person architecture and interiors studio doing some of the most interesting residential work in the Pacific Northwest. Their reputation was exceptional. Their brand was a white-label WordPress theme from 2017. They needed an identity that matched the quality of what they built.",
    duration: "4 months",
    team: "1 designer, 1 developer",
    platform: "Branding + Web",

    problem: {
      heading: "World-class work, invisible brand",
      body: "Forma's photography was stunning — the brand wrapping it was invisible at best, actively undermining at worst. The logo was generic, the website buried their best work in a paginated grid, and there was no consistent visual language across their pitch decks, proposals, or social presence. Prospective clients were Googling them and clicking away.",
      stats: [
        { value: "2017", label: "Last brand update" },
        { value: "<30s", label: "Avg. time on old site" },
        { value: "0", label: "Inbound leads from web" },
      ],
    },

    process: [
      {
        phase: "Brand Strategy",
        body: "Ran a two-day brand sprint with the two founding partners. Defined positioning, personality, and audience. Key insight: Forma's differentiator is their editorial approach to architecture — they think about how spaces will be written about, photographed, and remembered. That became the brand idea.",
      },
      {
        phase: "Identity",
        body: "Explored three directions: Minimal Swiss, Editorial Warm, and Structural. The partners chose a refined editorial direction — a custom wordmark, a terracotta and warm white palette, and a typographic system built around contrast between a high-contrast serif and a grotesque.",
      },
      {
        phase: "Web Design",
        body: "Designed a fullscreen, photography-first site with a non-standard navigation pattern that felt like turning the pages of a monograph. Every interaction was prototyped in Framer before handoff to the developer.",
      },
      {
        phase: "Motion & Launch",
        body: "Defined a motion language — slow, deliberate transitions that mirror how you experience a well-designed space. Wrote the brand guidelines document. Managed the launch, including a coordinated Instagram rollout.",
      },
    ],

    outcome: {
      heading: "Awwwards honoree. 3 inbound projects in 60 days.",
      body: "The site launched to immediate industry recognition — an Awwwards Site of the Day, coverage in Dezeen, and three unsolicited project inquiries within 60 days, each above Forma's previous average project value. Average session time went from under 30 seconds to over 4 minutes.",
      stats: [
        { value: "4min+", label: "Avg. session duration" },
        { value: "3", label: "Inbound projects in 60 days" },
        { value: "SOTD", label: "Awwwards Site of the Day" },
      ],
    },

    nextSlug: "orip",
    nextTitle: "ORIP",
  },
];
