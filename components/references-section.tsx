"use client"

import { Card } from "@/components/ui/card"
import { Quote } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"
import { getReferencesInfo } from "@/lib/data"

interface ReferenceCardProps {
  name: string
  title: string
  company: string
  quote: string
  index: number
}

function ReferenceCard({ name, title, company, quote, index }: ReferenceCardProps) {
  return (
    <AnimatedSection delay={index * 0.1}>
      <Card className="p-6 bg-zinc-900/50 backdrop-blur-sm border-zinc-800 hover:bg-zinc-900/70 transition-colors">
        <div className="space-y-4">
          <Quote className="h-8 w-8 text-emerald-400 opacity-60" />
          <blockquote className="text-sm text-zinc-300 leading-relaxed font-body">"{quote}"</blockquote>
          <div className="pt-2 border-t border-zinc-800">
            <div className="font-heading text-white font-medium">{name}</div>
            <div className="text-sm text-zinc-400 font-body">{title}</div>
            <div className="text-sm text-emerald-400 font-body">{company}</div>
          </div>
        </div>
      </Card>
    </AnimatedSection>
  )
}

export function ReferencesSection() {
  const references = getReferencesInfo()

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display text-white mb-4">REFERENCES</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto font-body">
              What colleagues and leaders say about working with me
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {references.map((reference, index) => (
            <ReferenceCard
              key={reference.name}
              name={reference.name}
              title={reference.title}
              company={reference.company}
              quote={reference.quote}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
