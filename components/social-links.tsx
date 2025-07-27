import * as LucideIcons from "lucide-react"

interface SocialLink {
  platform: string
  url: string
  icon: string
}

interface SocialLinksProps {
  socialLinks: SocialLink[]
}

export function SocialLinks({ socialLinks }: SocialLinksProps) {
  return (
    <div className="flex justify-center gap-4 sm:gap-4 my-2 sm:my-3">
      {socialLinks.map((link, index) => {
        const IconComponent = LucideIcons[link.icon as keyof typeof LucideIcons] as React.ComponentType<any>

        return (
          <a
            key={index}
            href={link.url}
            className="w-10 h-10 sm:w-10 sm:h-10 text-white rounded-full bg-green-600/70 flex items-center justify-center hover:bg-pink-500 transition-colors"
            aria-label={link.platform}
          >
            {IconComponent && <IconComponent className="w-4 h-4 sm:w-4 sm:h-4" />}
          </a>
        )
      })}
    </div>
  )
}
