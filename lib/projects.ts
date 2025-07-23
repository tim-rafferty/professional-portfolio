export interface ProjectGalleryImage {
  url: string
  caption?: string
}

export interface RelatedProject {
  slug: string
  title: string
  category: string
  image: string
}

export interface Project {
  id: number
  slug: string
  title: string
  category: string
  shortDescription: string
  description: string[]
  features: string[]
  technologies: string[]
  coverImage: string
  thumbnailImage: string
  gallery?: ProjectGalleryImage[]
  client?: string
  timeline: string
  role: string
  liveUrl?: string
  githubUrl?: string
  relatedProjects?: RelatedProject[]
}

const projects: Project[] = [
  {
    id: 1,
    slug: "wells-fargo-lending-platform",
    title: "Wells Fargo Personal Lending Platform",
    category: "Enterprise Integration",
    shortDescription:
      "Led the full-scale migration of Wells Fargo's personal lending platform to Blend's modernized system.",
    description: [
      "Spearheaded the successful migration of Wells Fargo's personal lending platform to Blend's modernized platform, serving as the technical lead for the entire Wells Fargo account.",
      "The platform has processed over 1,000,000+ applications per month since the launch of personal-loan.wf.com in January 2025, contributing to a 10% increase in total loan volume.",
      "Gathered requirements from cross-functional stakeholders and translated them into scalable workflows, ensuring seamless integration with existing banking infrastructure.",
    ],
    features: [
      "Processing 1,000,000+ loan applications monthly with 99.9% uptime",
      "10% increase in total loan volume",
      "Seamless integration with Wells Fargo's existing banking systems",
      "Real-time application processing and status updates",
      "Custom Rate Check API integration",
      "Prefill customer information via WF KnowMe API",
    ],
    technologies: ["REST APIs", "TypeScript", "JavaScript", "Velocity Script", "CI/CD", "Splunk"],
    coverImage: "/wells-fargo-new-logo.png",
    thumbnailImage: "/wells-fargo-new-logo.png",
    timeline: "18 months (2023-2025)",
    role: "Strategic Deployment Lead / Implementation Engineer",
    client: "Wells Fargo",
    gallery: [
      {
        url: "/wells-fargo-new-logo.png",
        caption: "Wells Fargo Personal Lending Platform",
      },
      {
        url: "/wfpl-2.png",
        caption: "Rate Check Entry - Initial loan amount and purpose selection with customer eligibility requirements",
      },
      {
        url: "/wfpl-4.png",
        caption: "Information Review - Customer data confirmation and consent management before rate check",
      },
      {
        url: "/wfpl-1.png",
        caption: "Rate Selection - Personalized loan options with payment amounts, terms, and APR rates",
      },
      {
        url: "/wfpl-3.png",
        caption: "Application Progress - Intermediate success confirmation with application tracking ID",
      },
      {
        url: "/wfpl-5.png",
        caption: "Final Approval - Loan approval confirmation with detailed terms and next steps",
      },
    ],
    relatedProjects: [
      {
        slug: "city-bank-texas",
        title: "City Bank Texas Deposit Accounts Platform",
        category: "Enterprise Integration",
        image: "/city-bank.png",
      },
      {
        slug: "people-first-credit-union",
        title: "People First Credit Union Consumer Banking Platform",
        category: "Enterprise Integration",
        image: "/people-first-logo.png",
      },
    ],
  },
  {
    id: 2,
    slug: "city-bank-texas",
    title: "City Bank Texas Deposit Accounts Platform",
    category: "Enterprise Integration",
    shortDescription:
      "Designed and launched City Bank Texas's deposit account products with comprehensive integrations.",
    description: [
      "Migrated, designed, and launched City Bank Texas's deposit account products (apply.city.bank), integrating SSO, online banking (OLB) enrollment, document export, and identity verification (IDV) services.",
      "The platform provides a seamless customer experience for opening deposit accounts with automated workflows and real-time processing capabilities.",
    ],
    features: [
      "Automatic OLB Enrollment",
      "Synergy Document Exports",
      "Alloy Identity Verification",
      "Customer & Account Lookup",
      "Beneficiaries & Authorized User Support",
      "Real-time application processing",
    ],
    technologies: ["Workflow Design", "SSO", "API Integration", "JavaScript", "REST APIs", "Identity Verification"],
    coverImage: "/city-bank.png",
    thumbnailImage: "/city-bank.png",
    timeline: "12 months (2024-2025)",
    role: "Implementation Engineer / Product Designer",
    client: "City Bank Texas",
    gallery: [
      {
        url: "/city-bank.png",
        caption: "City Bank Texas Deposit Accounts Platform",
      },
      {
        url: "/citybank-1.png",
        caption: "Account Type Selection - Choose from Checking, Savings, Money Market, and Health Savings Accounts",
      },
      {
        url: "/citybank-2.png",
        caption: "Identity Verification - Government ID details collection with Alloy IDV integration",
      },
      {
        url: "/citybank-3.png",
        caption:
          "Additional Accounts - Multi-account opening with Simple Checking, Reward Checking, and Money Market options",
      },
      {
        url: "/citybank-4.png",
        caption: "Authorized Users - Add authorized users to Simple Checking accounts",
      },
      {
        url: "/citybank-5.png",
        caption: "Beneficiaries Management - Primary beneficiary designation with allocation options",
      },
      {
        url: "/citybank-6.png",
        caption: "Joint Account Setup - Joint account selection with Uniform Account Form compliance",
      },
      {
        url: "/citybank-7.png",
        caption: "Debit Card Selection - Physical debit card options with visual card representation",
      },
      {
        url: "/citybank-8.png",
        caption: "Overdraft Protection - Comprehensive overdraft service options for deposits and ATM transactions",
      },
    ],
    relatedProjects: [
      {
        slug: "wells-fargo-lending-platform",
        title: "Wells Fargo Personal Lending Platform",
        category: "Enterprise Integration",
        image: "/wells-fargo-new-logo.png",
      },
      {
        slug: "people-first-credit-union",
        title: "People First Credit Union Consumer Banking Platform",
        category: "Enterprise Integration",
        image: "/people-first-logo.png",
      },
    ],
  },
  {
    id: 3,
    slug: "people-first-credit-union",
    title: "People First Credit Union Consumer Banking Platform",
    category: "Enterprise Integration",
    shortDescription:
      "Designed and implemented comprehensive deposit account workflows for People First Credit Union with membership requirements and integrated services.",
    description: [
      "Designed, implemented, and launched the end-to-end workflow for People First Credit Union's deposit account products and consumer lending products (apply.peoplefirst.com), including Free Checking, Hometown Heroes Checking, Auto Loan, Personal Loan, and more.",
      "The platform provides seamless integration with existing credit union systems while maintaining high security and compliance standards, including mandatory membership establishment through Membership Savings accounts.",
      "Implemented comprehensive identity verification, beneficiary management, and optional services like Courtesy Pay overdraft protection to create a complete banking onboarding experience.",
    ],
    features: [
      "Multi-account opening with shopping cart functionality",
      "Custom membership logic and customer lookup built out just for client",
      "Comprehensive beneficiary management with detailed address collection",
      "Identity verification through government ID validation",
      "Courtesy Pay overdraft protection with multiple coverage options",
      "JD Power integration and customer prefill via Prove",
    ],
    technologies: ["Postman", "JavaScript", "REST APIs", "API Testing", "Workflow Design"],
    coverImage: "/people-first-logo.png",
    thumbnailImage: "/people-first-logo.png",
    timeline: "12 months (2024-2025)",
    role: "Implementation Engineer / Product Designer",
    client: "People First Credit Union",
    gallery: [
      {
        url: "/people-first-logo.png",
        caption: "People First Credit Union Deposit Account Platform",
      },
      {
        url: "/pfcu-1.png",
        caption: "Account Selection - Choose between Free Checking and Hometown Heroes Checking with detailed benefits",
      },
      {
        url: "/pfcu-2.png",
        caption: "Identity Verification - Government ID details collection for account opening compliance",
      },
      {
        url: "/pfcu-3.png",
        caption: "Membership Requirement - Mandatory Membership Savings account establishment with $5 minimum balance",
      },
      {
        url: "/pfcu-4.png",
        caption:
          "Beneficiary Management - Comprehensive primary beneficiary designation with detailed address collection",
      },
      {
        url: "/pfcu-5.png",
        caption:
          "Courtesy Pay Services - Overdraft protection options for deposit accounts and debit card transactions",
      },
    ],
    relatedProjects: [
      {
        slug: "rytmrobin",
        title: "Rytm Robin",
        category: "Personal Project",
        image: "/rytm-robin.png",
      },
      {
        slug: "city-bank-texas",
        title: "City Bank Texas Deposit Accounts Platform",
        category: "Enterprise Integration",
        image: "/city-bank.png",
      },
    ],
  },
  {
    id: 4,
    slug: "rytmrobin",
    title: "Rytm Robin",
    category: "Personal Project",
    shortDescription: "A web-based drum machine and sampler inspired by PureData and Strudel, React, and Web Audio.",
    description: [
      "Rytm Robin is a personal project that explores rhythm patterns and musical creativity through interactive web interfaces.",
      "The application demonstrates proficiency in modern JavaScript frameworks and creative coding techniques.",
      "Built as a passion project to combine technical skills with musical interests, showcasing both frontend development and creative problem-solving abilities.",
    ],
    features: [
      "Interactive rhythm pattern generation",
      "Multi-track sequencing with numbered samples",
      "Real-time audio processing",
      "Responsive design for multiple devices",
      "Creative coding techniques implementation",
      "Musical pattern visualization",
    ],
    technologies: ["JavaScript", "HTML5", "CSS3", "Web Audio API", "Strudel Integration"],
    coverImage: "/rytm-robin.png",
    thumbnailImage: "/rytm-robin.png",
    timeline: "6 months (2025)",
    role: "Full-Stack Developer",
    githubUrl: "https://github.com/tim-rafferty/rytmrobin",
    gallery: [
      {
        url: "/rytm-robin.png",
        caption: "Rytm Robin Interface",
      },
      {
        url: "/rytm-robin-gallery.gif",
        caption: "Interactive Multi-Track Sequencer with Sample Grid",
      },
    ],
    relatedProjects: [
      {
        slug: "poly-percussion",
        title: "Poly Percussion",
        category: "Personal Project",
        image: "/polyperc.png",
      },
      {
        slug: "people-first-credit-union",
        title: "People First Credit Union Consumer Banking Platform",
        category: "Enterprise Integration",
        image: "/people-first-logo.png",
      },
    ],
  },
  {
    id: 5,
    slug: "poly-percussion",
    title: "Poly Percussion",
    category: "Personal Project",
    shortDescription: "An innovative percussion sequencer and rhythm generator for creative music production.",
    description: [
      "Early stages of a pendulum like drum machine that I built which is inspired by the phenomenon referred to as time synchronization, spontaneous synchronization, or entrainment.",
      "PolyPerc is an interactive web application that allows users to create complex polyrhythms and euclidean beats through a visually intuitive interface. Users can manipulate 8 separate percussion tracks, each with individual time signatures and independent effects, creating rich rhythmic patterns that would be challenging to perform manually.",
    ],
    features: [
      "Multi-track percussion sequencing",
      "Polyrhythmic pattern support with visual representation",
      "Real-time audio synthesis",
      "Intuitive visual interface with colorful rhythm indicators",
      "Pattern export and sharing capabilities",
      "Customizable sound libraries with color-coded elements",
    ],
    technologies: ["JavaScript", "Web Audio API", "HTML5 Canvas", "CSS3", "Audio Processing", "UI/UX Design"],
    coverImage: "/polyperc.png",
    thumbnailImage: "/polyperc.png",
    timeline: "8 months (2024)",
    role: "Full-Stack Developer",
    githubUrl: "https://github.com/tim-rafferty/poly-percussion",
    gallery: [
      {
        url: "/polyperc.png",
        caption: "Poly Percussion Interface",
      },
      {
        url: "/poly-perc-gallery.gif",
        caption: "Visual Polyrhythmic Pattern Generator with Color-Coded Elements",
      },
    ],
    relatedProjects: [
      {
        slug: "rytmrobin",
        title: "Rytm Robin",
        category: "Personal Project",
        image: "/rytm-robin.png",
      },
      {
        slug: "wells-fargo-lending-platform",
        title: "Wells Fargo Personal Lending Platform",
        category: "Enterprise Integration",
        image: "/wells-fargo-new-logo.png",
      },
    ],
  },
]

export { projects }

export function getAllProjects(): Project[] {
  return projects
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}

export function getRelatedProjects(currentSlug: string, limit = 2): RelatedProject[] {
  const currentProject = getProjectBySlug(currentSlug)
  if (!currentProject || !currentProject.relatedProjects) {
    return projects
      .filter((project) => project.slug !== currentSlug)
      .slice(0, limit)
      .map((project) => ({
        slug: project.slug,
        title: project.title,
        category: project.category,
        image: project.thumbnailImage,
      }))
  }

  return currentProject.relatedProjects.slice(0, limit)
}
