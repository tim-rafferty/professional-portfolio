"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, GraduationCap, Star } from "lucide-react"
import Image from "next/image"
import { getCredentialsInfo } from "@/lib/data"

export function CredentialsSection() {
  const credentials = getCredentialsInfo()

  return (
    <Card className="bg-zinc-900/70 border-zinc-700 backdrop-blur-sm">
      <CardContent className="p-4 sm:p-6">
        <div className="flex items-center mb-4 sm:mb-6">
          <Award className="w-5 h-5 mr-2 text-white" />
          <h3 className="font-heading text-lg font-bold text-white">Credentials</h3>
        </div>

        <div className="space-y-6">
          {/* Professional Certifications */}
          <div>
            <div className="flex items-center mb-4">
              <Award className="w-4 h-4 mr-2 text-white" />
              <h4 className="font-heading text-sm font-bold text-white">Professional Certifications</h4>
            </div>
            <div className="grid gap-4">
              {credentials.certifications.map((cert, index) => (
                <div key={index} className="flex items-center p-4 bg-zinc-800/50 rounded-lg border border-zinc-700">
                  <div className="relative w-12 h-12 mr-4 flex-shrink-0">
                    <Image
                      src={cert.logo || "/placeholder.svg"}
                      alt={`${cert.name} logo`}
                      fill
                      className="object-contain"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.src = "/placeholder-logo.svg"
                      }}
                    />
                  </div>
                  <div className="flex-1">
                    <h5 className="font-heading text-sm font-bold text-white">{cert.name}</h5>
                    <p className="text-xs text-white">
                      {cert.issuer} • {cert.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center mb-4">
              <GraduationCap className="w-4 h-4 mr-2 text-white" />
              <h4 className="font-heading text-sm font-bold text-white">Education</h4>
            </div>
            <div className="grid gap-4">
              {credentials.education.map((edu, index) => (
                <div key={index} className="flex items-center p-4 bg-zinc-800/50 rounded-lg border border-zinc-700">
                  <div className="relative w-12 h-12 mr-4 flex-shrink-0">
                    <Image
                      src={edu.logo || "/placeholder.svg"}
                      alt={`${edu.institution} logo`}
                      fill
                      className="object-contain"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.src = "/placeholder-logo.svg"
                      }}
                    />
                  </div>
                  <div className="flex-1">
                    <h5 className="font-heading text-sm font-bold text-white">{edu.degree}</h5>
                    <p className="text-xs text-white">
                      {edu.institution} • {edu.period}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills & Expertise */}
          <div>
            <div className="flex items-center mb-4">
              <Star className="w-4 h-4 mr-2 text-white" />
              <h4 className="font-heading text-sm font-bold text-white">Skills & Expertise</h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {credentials.skills.map((skill, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="bg-zinc-800/50 text-white border-zinc-600 hover:bg-zinc-700/50"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
