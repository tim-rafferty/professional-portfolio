import type React from "react"
import { GlobeIcon, CodeIcon, BriefcaseIcon, QuoteIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ProjectCard } from "@/components/project-card"
import { getAllProjects } from "@/lib/data"
import { ExperienceCard } from "@/components/experience-card"
import { EnhancedScrollIndicator } from "@/components/enhanced-scroll-indicator"
import { AnimatedSection } from "@/components/animated-section"
import { EnhancedProfile } from "@/components/enhanced-profile"
import { CredentialsSection } from "@/components/credentials-section"
import { getExperienceInfo, getTechnicalSkillsInfo, getReferencesInfo } from "@/lib/data"
import P5Background from "@/components/p5-background";


const SkillTagComponent = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="px-2 py-1 bg-zinc-800 rounded-full text-xs font-medium text-white border border-zinc-300">
      {children}
    </div>
  )
}

const ReferenceCard = ({ reference }: { reference: any }) => {
  return (
    <Card className="bg-zinc-800/40 border-zinc-400 backdrop-blur-none h-full">
      <CardContent className="p-3">
        <div className="flex items-start gap-4">
          <QuoteIcon className="w-6 h-6 text-white flex-shrink-0 mt-1" />
          <div className="space-y-4">
            <blockquote className="font-inter text-base sm:text-base text-white italic leading-relaxed">"{reference.quote}"</blockquote>
            <div className="border-t border-zinc-300 pt-4">
              <div className="font-heading text-white font-bold">{reference.name}</div>
              <div className="font-accent text-lg sm:text-lg text-white">{reference.title}</div>
              <div className="font-accent text-lg sm:text-lg text-rose-800">{reference.company}</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default function Home() {
  const projects = getAllProjects()
  const experienceInfo = getExperienceInfo()
  const technicalSkills = getTechnicalSkillsInfo()
  const references = getReferencesInfo()

  return (
    <>
      <P5Background />
    <main className="min-h-screen text-white">

      <div className="relative z-10 container mx-auto p-3 sm:p-4 pt-4 sm:pt-6 pb-6 sm:pb-8">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {/* Enhanced Profile Section */}
          <div className="md:sticky md:top-4 self-start">
            <AnimatedSection animation="slide-right">
              <EnhancedProfile />
            </AnimatedSection>
          </div>

          <div className="col-span-1 md:col-span-2 lg:col-span-3 space-y-4 sm:space-y-6">
            {/* Experience Section - Expanded */}
            <AnimatedSection animation="fade-up" id="experience">
              <Card className="bg-zinc-900/20 border-2 border-zinc-300 backdrop-blur-sm backdrop-invert">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-center mb-4 sm:mb-4">
                    <BriefcaseIcon className="w-5 h-5 mr-2 text-white" />
                    <h3 className="font-heading text-2xl sm:text-2xl font-bold text-white">Experience</h3>
                  </div>

                  <div className="space-y-6 sm:space-y-8">
                    {experienceInfo.map((experience, index) => (
                      <AnimatedSection key={index} animation="fade-up" delay={100 * (index + 1)}>
                        <ExperienceCard
                          title={experience.title}
                          company={experience.company}
                          period={experience.period}
                          description={experience.description}
                          achievements={experience.achievements}
                          technologies={experience.technologies}
                        />
                      </AnimatedSection>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Credentials Section */}
            <AnimatedSection animation="fade-up" id="credentials">
              <CredentialsSection />
            </AnimatedSection>

            {/* Skills Section */}
            <AnimatedSection animation="fade-up" id="skills">
              <Card className="bg-zinc-900/30 border-zinc-300 backdrop-blur-sm backdrop-invert">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-center mb-4">
                    <CodeIcon className="w-5 h-5 mr-2 text-white" />
                    <h3 className="font-heading text-2xl sm:text-2xl font-bold text-white">Technical Skills</h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-2">
                    <AnimatedSection animation="slide-right" delay={100}>
                      <div className="space-y-3">
                        <h4 className="font-accent text-xl sm:text-xl font-bold text-white">Observability & Monitoring</h4>
                        <div className="flex flex-wrap gap-2">
                          {technicalSkills.observability?.map((skill, index) => (
                            <SkillTagComponent key={index}>{skill}</SkillTagComponent>
                          ))}
                        </div>
                      </div>
                    </AnimatedSection>

                    <AnimatedSection animation="slide-left" delay={200}>
                      <div className="space-y-3">
                        <h4 className="font-accent text-xl sm:text-xl font-bold text-white">Development</h4>
                        <div className="flex flex-wrap gap-2">
                          {technicalSkills.development?.map((skill, index) => (
                            <SkillTagComponent key={index}>{skill}</SkillTagComponent>
                          ))}
                        </div>
                      </div>
                    </AnimatedSection>

                    <AnimatedSection animation="slide-right" delay={300}>
                      <div className="space-y-3">
                        <h4 className="font-accent text-xl sm:text-xl font-bold text-white">Infrastructure & DevOps</h4>
                        <div className="flex flex-wrap gap-2">
                          {technicalSkills.infrastructure?.map((skill, index) => (
                            <SkillTagComponent key={index}>{skill}</SkillTagComponent>
                          ))}
                        </div>
                      </div>
                    </AnimatedSection>

                    <AnimatedSection animation="slide-left" delay={400}>
                      <div className="space-y-3">
                        <h4 className="font-accent text-xl sm:text-xl font-bold text-white">Tools & Platforms</h4>
                        <div className="flex flex-wrap gap-2">
                          {technicalSkills.tools?.map((skill, index) => (
                            <SkillTagComponent key={index}>{skill}</SkillTagComponent>
                          ))}
                        </div>
                      </div>
                    </AnimatedSection>

                    <AnimatedSection animation="slide-right" delay={500}>
                      <div className="space-y-3">
                        <h4 className="font-accent text-xl sm:text-xl font-bold text-white">Security & Authentication</h4>
                        <div className="flex flex-wrap gap-2">
                          {technicalSkills.security?.map((skill, index) => (
                            <SkillTagComponent key={index}>{skill}</SkillTagComponent>
                          ))}
                        </div>
                      </div>
                    </AnimatedSection>

                    <AnimatedSection animation="slide-left" delay={600}>
                      <div className="space-y-3">
                        <h4 className="font-accent text-xl sm:text-xl font-bold text-white">Leadership & Soft Skills</h4>
                        <div className="flex flex-wrap gap-2">
                          {technicalSkills.softSkills?.map((skill, index) => (
                            <SkillTagComponent key={index}>{skill}</SkillTagComponent>
                          ))}
                        </div>
                      </div>
                    </AnimatedSection>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* References Section */}
            <AnimatedSection animation="fade-up" id="references">
              <Card className="bg-zinc-900/30 border-2 border-zinc-300 backdrop-blur-sm backdrop-invert">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-center mb-4 sm:mb-6">
                    <QuoteIcon className="w-5 h-5 mr-2 text-white" />
                    <h3 className="font-heading text-2xl sm:text-2xl font-bold text-white">References</h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    {references.map((reference, index) => (
                      <AnimatedSection key={index} animation="fade-up" delay={100 * (index + 1)}>
                        <ReferenceCard reference={reference} />
                      </AnimatedSection>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Projects Section */}
            <AnimatedSection animation="fade-up" id="projects">
              <Card className="bg-zinc-900/30 border-2 border-zinc-300 backdrop-blur-sm backdrop-invert">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-center justify-between mb-4 sm:mb-6">
                    <div className="flex items-center">
                      <GlobeIcon className="w-5 h-5 mr-2 text-white" />
                      <h3 className="font-heading text-2xl sm:text-2xl font-bold text-white">Recent Projects</h3>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-xs sm:text-sm px-2 sm:px-3 text-white hover:text-white"
                    >
                      View All
                    </Button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                    {projects.map((project, index) => (
                      <AnimatedSection key={project.id} animation="zoom-in" delay={100 * (index + 1)}>
                        <ProjectCard
                          title={project.title}
                          category={project.category}
                          image={project.thumbnailImage}
                          slug={project.slug}
                        />
                      </AnimatedSection>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>

        {/* Footer */}
        <AnimatedSection
          animation="fade-in"
          delay={500}
          className="mt-8 sm:mt-12 py-4 sm:py-6 text-center text-xs sm:text-sm text-white"
        >
          <p>© {new Date().getFullYear()} Timothy Rafferty</p>
        </AnimatedSection>
      </div>

      {/* Scroll to Top Button */}
      <EnhancedScrollIndicator />
    </main>
    </>
  )
}
