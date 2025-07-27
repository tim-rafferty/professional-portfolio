"use client"

import type React from "react"

import { Badge } from "@/components/ui/badge"

interface SkillTagProps {
  children: React.ReactNode
  variant?: "default" | "secondary" | "outline"
  className?: string
}

export function SkillTag({ children, variant = "default", className = "" }: SkillTagProps) {
  return (
    <Badge
      variant={variant}
      className={`bg-gradient-to-r from-zinc-800 to-zinc-900 text-white border-zinc-400 hover:bg-zinc-600/50 transition-colors ${className}`}
    >
      {children}
    </Badge>
  )
}
