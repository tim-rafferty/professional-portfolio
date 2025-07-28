"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle } from "lucide-react"

interface ExperienceCardProps {
  title: string
  company: string
  period: string
  description: string
  achievements: string[]
  technologies: string[]
}

export function ExperienceCard({
  title,
  company,
  period,
  description,
  achievements,
  technologies,
}: ExperienceCardProps) {
  return (
    <div className="relative">
      <Card className="bg-zinc-900/50 border-zinc-400 backdrop-blur-sm">
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-1">
            <div className="flex-1">
              <h4 className="font-accent text-lg font-bold text-white mb-1">{title}</h4>
              <p className="font-heading text-xl sm:text-xl text-zinc-200 font-bold mb-2">{company}</p>
            </div>
            <div className="bg-gradient-to-r from-zinc-400/20 to-gray-600/90 text-white shadow-lg border-zinc-400 font-extrabold hover:bg-zinc-600/50 text-xs px-3 py-1 rounded-full">
              {period}
            </div>
          </div>

          <p className="text-sm text-white mb-4 leading-relaxed">{description}</p>

          {achievements && achievements.length > 0 && (
            <div className="mb-4">
              <h5 className="font-heading text-lg sm:text-lg font-bold text-white mb-3">Key Achievements</h5>
              <div className="space-y-2">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-white leading-relaxed">{achievement}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {technologies && technologies.length > 0 && (
            <div>
              <h5 className="font-heading text-lg sm:text-lg font-bold text-white mb-3">Technologies & Skills</h5>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="bg-gradient-to-r from-purple-400/70 to-pink-500/70 text-white font-bold border-zinc-400 hover:bg-zinc-600/50"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
