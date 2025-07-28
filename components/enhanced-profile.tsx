"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SocialLinks } from "@/components/social-links"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { User, MapPin, Mail, Phone, Clock, Briefcase } from 'lucide-react'
import { getPersonalInfo, getAboutInfo } from "@/lib/data"

export function EnhancedProfile() {
  const [activeTab, setActiveTab] = useState("about")

  const personalInfo = getPersonalInfo()
  const aboutInfo = getAboutInfo()

  return (
    <Card className="bg-zinc-900/10 border-2 border-zinc-300 backdrop-blur-sm backdrop-invert col-span-1 flex flex-col">
      <CardContent className="p-0">
        {/* Profile Header - Improved mobile layout */}
        <div className="bg-gradient-to-r from-black-900/30 to-zinc-900/90 p-4 sm:p-6 flex flex-col items-center border-b border-zinc-700">
          <div className="flex flex-col sm:flex-col items-center w-full">
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden mb-4 border-2 border-white/20 ring-4 ring-zinc-800/50">
            <Image
              src="/timothy-profile.png"
              alt="Timothy Rafferty"
              fill
              className="object-cover"
              priority
            />
            </div>
            <div className="text-center">
              <h2 className="font-heading font-bold text-white text-5xl sm:text-5xl tracking-wide name-title">Timothy Rafferty</h2>
              <p className="font-accent text-sm text-white mb-1 font-bold">{personalInfo.title}</p>
              <div className="flex items-center justify-center text-xs text-white mb-4">
                <MapPin className="w-3 h-3 mr-1" />
                <span>{personalInfo.location}</span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-1 justify-center mb-2">
            {personalInfo.badges.map((badge, index) => (
              <Badge
                key={index}
                variant="outline"
                className="bg-gradient-to-r from-zinc-800 to-zinc-900 text-white border-zinc-500 hover:opacity-90"
              >
                {badge}
              </Badge>
            ))}
          </div>

          <SocialLinks socialLinks={personalInfo.social} />
        </div>

        {/* Tabbed Content - Mobile optimized */}
        <Tabs defaultValue="about" className="w-full" onValueChange={setActiveTab}>
          <div className="border-b border-zinc-700">
            <TabsList className="w-full bg-transparent border-b border-zinc-700 rounded-none h-auto p-0">
              <TabsTrigger
                value="about"
                className={`font-heading flex-1 rounded-none border-b-2 px-2 sm:px-4 py-2 text-base sm:text-base ${
                  activeTab === "about" ? "border-white text-white" : "border-transparent text-zinc-400"
                }`}
              >
                <User className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                About
              </TabsTrigger>
              <TabsTrigger
                value="contact"
                className={`font-heading flex-1 rounded-none border-b-2 px-2 sm:px-4 py-2 text-base sm:text-base ${
                  activeTab === "contact" ? "border-white text-white" : "border-transparent text-zinc-400"
                }`}
              >
                <Mail className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                Contact
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="about" className="p-4 sm:p-6 space-y-4 sm:space-y-6 focus:outline-none">
            <div className="space-y-3">
              <h3 className="font-heading text-sm font-bold text-white flex items-center">
                <User className="w-4 h-4 mr-2 text-white" />
                About Me
              </h3>
              <p className="text-sm text-white font-normal">{aboutInfo.bio}</p>
            </div>

            <div className="space-y-3">
              <h3 className="font-heading text-sm font-bold text-white flex items-center">
                <Briefcase className="w-4 h-4 mr-2 text-white" />
                Professional Focus
              </h3>
              <div className="space-y-3">
                {aboutInfo.focus.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <span className="text-white mr-2">•</span>
                    <p className="text-sm text-white font-normal">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="contact" className="p-4 sm:p-6 space-y-4 focus:outline-none">
            <div className="space-y-4">
              <div className="flex items-start">
                <Mail className="w-5 h-5 mr-3 text-white mt-0.5" />
                <div>
                  <h4 className="font-medium text-white font-bold">Email</h4>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-sm text-white hover:text-zinc-300 transition-colors break-all"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="w-5 h-5 mr-3 text-white mt-0.5" />
                <div>
                  <h4 className="font-medium text-white font-bold">Phone</h4>
                  <a
                    href={`tel:${personalInfo.phone}`}
                    className="text-sm text-white hover:text-zinc-300 transition-colors"
                  >
                    {personalInfo.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-white mt-0.5" />
                <div>
                  <h4 className="font-medium text-white font-bold">Location</h4>
                  <p className="text-sm text-white">{personalInfo.location}</p>
                </div>
              </div>

              <div className="flex items-start">
                <Clock className="w-5 h-5 mr-3 text-white mt-0.5" />
                <div>
                  <h4 className="font-medium text-white font-bold">Working Hours</h4>
                  <p className="text-sm text-white">Monday - Friday, 9am - 5pm CST</p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
