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
      className={`bg-zinc-800 text-white border-zinc-700 hover:bg-zinc-700 transition-colors ${className}`}
    >
      {children}
    </Badge>
  )
}
