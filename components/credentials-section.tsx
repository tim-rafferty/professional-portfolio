"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Award, GraduationCap } from "lucide-react"
import Image from "next/image"
import { getCredentialsInfo } from "@/lib/data"

export function CredentialsSection() {
  const credentials = getCredentialsInfo()

  return (
    <Card className="bg-zinc-900/30 border-zinc-300 backdrop-blur-sm backdrop-invert">
      <CardContent className="p-4 sm:p-6">
        <div className="flex items-center mb-2 sm:mb-2">
          <Award className="w-5 h-5 mr-2 text-white" />
          <h3 className="font-heading text-2xl sm:text-2xl font-bold text-white">Credentials</h3>
        </div>

        <div className="space-y-4">
          {/* Professional Certifications */}
          <div>
            <div className="flex items-center mb-2">
              <Award className="w-4 h-4 mr-2 text-white" />
              <h4 className="font-accent text-xl sm:text-xl font-bold text-white">Professional Certifications</h4>
            </div>
            <div className="grid gap-4">
              {credentials.certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-zinc-900/80 to-zinc-900/70 flex items-center p-4 rounded-lg border border-zinc-400"
                >
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
                    <h5 className="text-sm font-bold text-white">{cert.name}</h5>
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
            <div className="flex items-center mb-2">
              <GraduationCap className="w-4 h-4 mr-2 text-white" />
              <h4 className="font-accent text-xl sm:text-xl font-bold text-white">Education</h4>
            </div>
            <div className="grid gap-4">
              {credentials.education.map((edu, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-zinc-900/80 to-zinc-900/70 flex items-center p-4 rounded-lg border border-zinc-400"
                >
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
                    <h5 className="text-sm font-bold text-white">{edu.degree}</h5>
                    <p className="text-xs text-white">{edu.institution}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
