"use client"

import Link from "next/link"
import { Instagram, Phone, Mail, MessageCircle, Heart, Send } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 animate-fade-in">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* معلومات الموقع */}
          <div className="space-y-4 animate-slide-up">
            <div className="flex items-center space-x-2 space-x-reverse">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground transition-all duration-300 hover:scale-110 pulse-glow">
                <span className="text-sm font-bold">AF</span>
              </div>
              <span className="text-xl font-bold gradient-text">AF BTEC</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              منصة تعليمية شاملة لطلاب BTEC تساعدك على النجاح في دراستك وتحقيق أهدافك الأكاديمية
            </p>
          </div>

          {/* روابط سريعة */}
          <div className="space-y-4 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            <h3 className="text-lg font-semibold">روابط سريعة</h3>
            <div className="space-y-2">
              <Link
                href="/calculator"
                className="block text-sm text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-2"
              >
                حاسبة المعدل
              </Link>
              <Link
                href="/resources"
                className="block text-sm text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-2"
              >
                الموارد التعليمية
              </Link>
              <Link
                href="/guide"
                className="block text-sm text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-2"
              >
                دليل الطالب
              </Link>
              <Link
                href="/programs"
                className="block text-sm text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-2"
              >
                البرامج المطلوبة
              </Link>
            </div>
          </div>

          {/* معلومات التواصل */}
          <div className="space-y-4 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-lg font-semibold">تواصل معنا</h3>
            <div className="space-y-3">
              <a
                href="tel:+970123456789"
                className="flex items-center space-x-3 space-x-reverse text-sm text-muted-foreground hover:text-primary transition-all duration-300 group hover:translate-x-2"
              >
                <Phone className="h-4 w-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" />
                <span>+962 78 064 8871</span>
              </a>
              <a
                href="mailto:info@afbtec.com"
                className="flex items-center space-x-3 space-x-reverse text-sm text-muted-foreground hover:text-primary transition-all duration-300 group hover:translate-x-2"
              >
                <Mail className="h-4 w-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" />
                <span>butcahmad@gmail.com</span>
              </a>
              <a
                href="https://wa.me/9620780648871"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 space-x-reverse text-sm text-muted-foreground hover:text-primary transition-all duration-300 group hover:translate-x-2"
              >
                <MessageCircle className="h-4 w-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" />
                <span>واتساب</span>
              </a>
              <a
                href="https://t.me/+lgYAR-xlWOI3YjVk"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 space-x-reverse text-sm text-muted-foreground hover:text-primary transition-all duration-300 group hover:translate-x-2"
              >
                <Send className="h-4 w-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" />
                <span>تلجرام</span>
              </a>
              <a
                href="https://instagram.com/af_btec"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 space-x-reverse text-sm text-muted-foreground hover:text-primary transition-all duration-300 group hover:translate-x-2"
              >
                <Instagram className="h-4 w-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" />
                <span>@afbtec</span>
              </a>
            </div>
          </div>

          {/* معلومات المطور */}
          <div className="space-y-4 animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <h3 className="text-lg font-semibold">المطور</h3>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">تم تطوير هذا الموقع بواسطة</p>
              <p className="text-lg font-semibold text-primary gradient-text animate-bounce-gentle">أحمد الفقيه Ahmad AL-faqih</p>
              <p className="text-xs text-muted-foreground">مطور مواقع ومتخصص في التقنيات الحديثة</p>
            </div>
          </div>
        </div>

        {/* خط الفصل وحقوق النشر */}
        <div className="mt-8 pt-8 border-t animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground flex items-center space-x-1 space-x-reverse">
              <span>© 2025 AF BTEC. جميع الحقوق محفوظة</span>
            </p>
            <p className="text-sm text-muted-foreground flex items-center space-x-1 space-x-reverse">
              <span>صُنع بـ</span>
              <Heart className="h-4 w-4 text-red-500 animate-pulse hover:scale-125 transition-all duration-300" />
              <span>لطلاب BTEC </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
