import portfolioData from "@/data/portfolio-data.json"
import { projects, getAllProjects, getProjectBySlug, getRelatedProjects } from "@/lib/projects"

// Export the projects data
export { projects, getAllProjects, getProjectBySlug, getRelatedProjects }

export function getMetaInfo() {
  return {
    title: `${portfolioData.personal.name} - ${portfolioData.personal.title}`,
    description: portfolioData.about.bio,
  }
}

export function getPersonalInfo() {
  return {
    name: portfolioData.personal.name,
    title: portfolioData.personal.title,
    location: portfolioData.personal.location,
    avatar: "/timothy-profile.png",
    email: portfolioData.personal.email,
    phone: portfolioData.personal.phone,
    availableForWork: portfolioData.personal.availableForWork,
    badges: portfolioData.personal.badges,
    social: [
      {
        platform: "GitHub",
        url: "https://github.com/tim-rafferty",
        icon: "Github",
      },
      {
        platform: "LinkedIn",
        url: "https://linkedin.com/in/timothy-rafferty/",
        icon: "Linkedin",
      },
      {
        platform: "Email",
        url: "mailto:timothymichaelrafferty@gmail.com",
        icon: "Mail",
      },
    ],
  }
}

export function getAboutInfo() {
  return portfolioData.about
}

export function getExperienceInfo() {
  return portfolioData.experience
}

export function getTechnicalSkillsInfo() {
  return portfolioData.technicalSkills
}

export function getReferencesInfo() {
  return [
    {
      name: "Mark Stafford",
      title: "Consumer Lending Product Manager",
      company: "Blend",
      quote:
        "I have worked with Tim for several years, and for the past two, we have collaborated closely on one of Blend's largest customer accounts. Based on my experience, I can give Tim my highest recommendation. He is an exceptional colleague, and I am confident he would be a significant asset to any team.",
    },
    {
      name: "Dante O'Donnell",
      title: "Deployment Lead",
      company: "Blend",
      quote:
        "I've had the pleasure of working closely with Tim for the past 3.5 years at Blend, and I can say without hesitation that he is one of the most reliable, knowledgeable, and dependable colleagues I've encountered in my career. He is one of only two people for whom I would confidently vouch with both my personal and professional reputation.",
    },
  ]
}

export function getCredentialsInfo() {
  return {
    certifications: [
      {
        name: "CompTIA Security+",
        issuer: "CompTIA",
        date: "2023",
        logo: "/comptia-security-plus-logo.png",
      },
    ],
    education: [
      {
        degree: "Community College Coursework",
        institution: "DMACC Community College 2009-2010",
        year: "2009-2010",
        logo: "/dmacc-logo.png",
      },
      {
        degree: "High School Diploma",
        institution: "ADM High School 2007",
        year: "2007",
        logo: "/adm-community-schools-logo.png",
      },
    ],
    skills: [
      "DevOps Engineering",
      "Implementation Engineering",
      "Technical Leadership",
      "API Integration",
      "Observability",
      "SIEM",
      "Certificate Management",
      "Incident Response",
      "Database Migration",
    ],
  }
}

export function getNavItems() {
  return [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Experience",
      href: "#experience",
    },
    {
      label: "Skills",
      href: "#skills",
    },
    {
      label: "Projects",
      href: "#projects",
    },
  ]
}
