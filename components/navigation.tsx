"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Calculator, BookOpen, Users, HelpCircle, Settings, Menu, UserCircle, MessageSquare } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"
import { FontSizeToggle } from "./font-size-toggle"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const navigationItems = [
  {
    title: "حاسبة المعدل",
    href: "/calculator",
    icon: Calculator,
    description: "احسب معدلك التراكمي بسهولة ودقة",
  },
  {
    title: "الموارد التعليمية",
    href: "/resources",
    icon: BookOpen,
    description: "مصادر تعليمية تساعدك على التفوق",
  },
  {
    title: "دليل الطالب",
    href: "/guide",
    icon: Users,
    description: "كل ما تحتاجه للنجاح في دراستك",
  },
  {
    title: "البرامج المطلوبة",
    href: "/programs",
    icon: Settings,
    description: "البرامج والأدوات اللازمة لكل مستوى",
  },
  {
    title: "عني",
    href: "/about",
    icon: UserCircle,
    description: "تعرف على مطور الموقع وقصة إنشائه",
  },
  {
    title: "رسائل من الطلاب",
    href: "/messages",
    icon: MessageSquare,
    description: "رسائل وتجارب الطلاب مع الموقع",
  },
  {
    title: "الأسئلة الشائعة",
    href: "/faq",
    icon: HelpCircle,
    description: "إجابات سريعة لأسئلتك الشائعة",
  },
]

export function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="flex items-center space-x-2 space-x-reverse group">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground group-hover:scale-110 transition-transform">
            <span className="text-sm font-bold">AF</span>
          </div>
          <span className="text-xl font-bold group-hover:text-primary transition-colors">AF BTEC</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="mr-auto flex items-center space-x-4 space-x-reverse">
          {navigationItems.map((item) => (
            <Button
              key={item.href}
              variant={pathname === item.href ? "default" : "ghost"}
              asChild
              className="hidden lg:inline-flex hover:scale-105 transition-transform"
            >
              <Link href={item.href} className="flex items-center space-x-2 space-x-reverse">
                <item.icon className="h-4 w-4" />
                <span>{item.title}</span>
              </Link>
            </Button>
          ))}

          <div className="flex items-center space-x-2 space-x-reverse">
            <FontSizeToggle />
            <ThemeToggle />
          </div>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">فتح القائمة</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex flex-col space-y-4 mt-8">
                {navigationItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center space-x-3 space-x-reverse p-3 rounded-lg transition-colors hover:bg-accent ${
                      pathname === item.href ? "bg-accent" : ""
                    }`}
                  >
                    <item.icon className="h-5 w-5" />
                    <div>
                      <div className="font-medium">{item.title}</div>
                      <div className="text-sm text-muted-foreground">{item.description}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}
