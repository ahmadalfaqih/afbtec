"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  GraduationCap,
  Award,
  Code,
  Database,
  Globe,
  Smartphone,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Star,
  ExternalLink,
  Instagram,
  MessageCircle,
  Send,
  Shield,

} from "lucide-react"

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState("about")

  const certificates = [
  {
    title: "شهادة BTEC في تكنولوجيا المعلومات - المستوى الثاني",
    issuer: "Pearson Education",
    date: "2022",
    grade: "Distinction*",
    icon: <GraduationCap className="w-6 h-6 text-primary" />,
    color: "bg-primary/10",
  },
  {
    title: "شهادة BTEC في تكنولوجيا المعلومات - المستوى الثالث",
    issuer: "Pearson Education",
    date: "2023",
    grade: "Distinction*",
    icon: <GraduationCap className="w-6 h-6 text-primary" />,
    color: "bg-primary/10",
  },
  {
    title: "BTEC Computer General Level 4",
    issuer: "Pearson Education",
    date: "2024",
    grade: "Distinction",
    icon: <Globe className="w-6 h-6 text-accent" />,
    color: "bg-accent/10",
  },
  {
    title: "BTEC CyberSecurity Level 4",
    issuer: "Pearson Education",
    date: "2024",
    grade: "Distinction",
    icon: <Shield className="w-6 h-6 text-red-500" />,
    color: "bg-red-100",
  },
  {
    title: "42 Network",
    issuer: "42 School",
    date: "2024",
    grade: "C Script",
    icon: <Globe className="w-6 h-6 text-blue-500" />,
    color: "bg-blue-100",
  },
  {
    title: "BTEC CyberSecurity Level 5",
    issuer: "Pearson Education",
    date: "2025",
    grade: "Certificate",
    icon: <Shield className="w-6 h-6 text-red-500" />,
    color: "bg-red-100",
  },
  {
    title: "Oracle Certified Associate",
    issuer: "Oracle Academy",
    date: "2025",
    grade: "Certified",
    icon: <Database className="w-6 h-6 text-orange-500" />,
    color: "bg-orange-100",
  },
  {
    title: "Cisco Certified Network Associate (CCNA)",
    issuer: "Cisco Network Academy",
    date: "2024",
    grade: "Associate",
    icon: <Smartphone className="w-6 h-6 text-cyan-500" />,
    color: "bg-cyan-100",
  },
  {
    title: "Security+",
    issuer: "CompTIA",
    date: "2023",
    grade: "Certified",
    icon: <Shield className="w-6 h-6 text-red-500" />,
    color: "bg-red-100",
  },
  {
    title: "Network+",
    issuer: "CompTIA",
    date: "2023",
    grade: "Certified",
    icon: <Globe className="w-6 h-6 text-blue-500" />,
    color: "bg-blue-100",
  },
  {
    title: "A+",
    issuer: "CompTIA",
    date: "2023",
    grade: "Certified",
    icon: <Award className="w-6 h-6 text-green-500" />,
    color: "bg-green-100",
  },
  {
    title: "Full Stack Web Development",
    issuer: "Udemy",
    date: "2025",
    grade: "Certificate",
    icon: <Code className="w-6 h-6 text-purple-500" />,
    color: "bg-purple-100",
  },
]

  const skills = [
    { name: "Java Oracle", level: 85 },
    { name: "Web Devlopment", level: 90 },
    { name: "Network", level: 85 },
    { name: "Python", level: 80 }, 
    { name: "C#", level: 80 },
    { name: "C Script", level: 70 },
    { name: "DataBases", level: 83 },
    { name: "Mobile application development", level: 80 },
    { name: "Game development", level: 70 },
    { name: "Technical support", level: 90 },
    { name: "CyberSecurity", level: 85 },
  ]

  return (
    <div className="min-h-screen gradient-bg">
      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="relative inline-block mb-6">
            <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-primary shadow-2xl animate-pulse-strong">
              <img
                src="/ahmad-al-faqih-portrait.png"
                alt="أحمد الفقيه"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 bg-primary text-primary-foreground rounded-full p-3 animate-bounce-strong">
              <GraduationCap className="w-6 h-6" />
            </div>
          </div>
          <h1 className="text-5xl font-bold text-black mb-4 animate-slide-up">Ahmad AL-faqih <br /><br />أحمد الفقيه</h1>
          <p className="text-xl text-muted-foreground mb-6 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              متخصص في تكنولوجيا المعلومات و BTEC IT
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8 animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <Badge variant="secondary" className="text-lg px-4 py-2 animate-wiggle-strong">
              <Code className="w-4 h-4 mr-2" />
              Teacher and Lecturer BTEC IT
            </Badge>
            <Badge
              variant="outline"
              className="text-lg px-4 py-2 animate-wiggle-strong"
              style={{ animationDelay: "0.1s" }}
            >
              <Award className="w-4 h-4 mr-2" />
              BTEC Level 5
            </Badge>
            <Badge
              variant="secondary"
              className="text-lg px-4 py-2 animate-wiggle-strong"
              style={{ animationDelay: "0.2s" }}
            >
              <Star className="w-4 h-4 mr-2" />
              Distinction*
            </Badge>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex justify-center mb-8 animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <div className="bg-card rounded-lg p-2 shadow-lg">
            <div className="flex gap-2">
              {[
                { id: "about", label: "نبذة عني", icon: <Award className="w-4 h-4" /> },
                { id: "certificates", label: "الشهادات", icon: <GraduationCap className="w-4 h-4" /> },
                { id: "skills", label: "المهارات", icon: <Code className="w-4 h-4" /> },
                { id: "contact", label: "التواصل", icon: <Mail className="w-4 h-4" /> },
              ].map((tab) => (
                <Button
                  key={tab.id}
                  variant={activeTab === tab.id ? "default" : "ghost"}
                  onClick={() => setActiveTab(tab.id)}
                  className="flex items-center gap-2 btn-interactive"
                >
                  {tab.icon}
                  {tab.label}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Content Sections */}
        <div className="max-w-6xl mx-auto">
          {activeTab === "about" && (
            <div className="space-y-8 animate-fade-in">
              {/* Video Section */}
              <Card className="card-hover">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl">
                    <Globe className="w-6 h-6 text-primary" />
                    فيديو تعريفي
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
                    <video
                      width="100%"
                      height="100%"
                      controls
                      className="hover:scale-105 transition-transform duration-300"
                      poster="/ahmad-al-faqih-introduction-thumbnail.png"
                    >
                      <source src="/videos/ahmad-personal-intro.mp4" type="video/mp4" />
                      <source src="/videos/ahmad-personal-intro.webm" type="video/webm" />
                      متصفحك لا يدعم تشغيل الفيديو.
                    </video>
                  </div>
                </CardContent>
              </Card>

              {/* About Text */}
              <Card className="card-hover">
                <CardHeader>
                  <CardTitle className="text-2xl">من أنا؟</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-lg leading-relaxed">
                  <p>
                    مرحباً! أنا أحمد الفقيه، طالب متخصص في تكنولوجيا المعلومات ومطور مواقع شغوف بالتكنولوجيا والابتكار.
                    أدرس حالياً في برنامج BTEC المستوى الخامس في تكنولوجيا المعلومات، وأسعى لتقديم  الدعم للطلاب لكي يحصلو على أفضل تجربة تعليمية ممكنة في مجال BTEC IT. 
                      .
                  </p>
                  <p>
                    أنشأت هذا الموقع لمساعدة الطلاب في رحلتهم التعليمية، حيث يوفر الموقع أدوات مفيدة مثل حاسبة
                    المعدل التراكمي، والموارد التعليمية، ودليل شامل للطلاب، بالإضافة إلى معلومات عن البرامج المطلوبة لكل
                    مستوى دراسي.
                  </p>
                  <p>
                    .أؤمن بأن التعلم المستمر والمشاركة في المعرفة هما مفتاح النجاح في عالم التكنولوجيا المتطور. هدفي هو نشر العلم في الجيل الحالي و تطويره في كل المجالات و ان يخرج جيل متخصص في مجال تكنولوجيا المعلومات و البرمجة و ان يكونوا قادرين على المنافسة في سوق العمل.
                  </p>
                </CardContent>
              </Card>

              {/* Journey Timeline */}
              <Card className="card-hover">
                <CardHeader>
                  <CardTitle className="text-2xl">رحلتي التعليمية</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {[
                      { year: "2022", title: "بداية رحلة BTEC", desc: "التحقت ببرنامج BTEC في تكنولوجيا المعلومات" },
                      { year: "2022", title: "تعلم البرمجة", desc: "بدأت تعلم Java Oracle " },
                      { year: "2024", title: "مشاريع متقدمة", desc: "طورت عدة مشاريع وحصلت على شهادات متخصصة" },
                      { year: "2025", title: "إنشاء AF BTEC", desc: "أطلقت هذا الموقع لمساعدة الطلاب" },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-4 stagger-item"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center font-bold animate-pulse-strong">
                          {item.year.slice(-2)}
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">{item.title}</h3>
                          <p className="text-muted-foreground">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === "certificates" && (
            <div className="grid gap-6 md:grid-cols-2 animate-fade-in">
              {certificates.map((cert, index) => (
                <Card key={index} className="card-hover stagger-item" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className={`${cert.color} text-white p-3 rounded-lg animate-bounce-strong`}>{cert.icon}</div>
                      <div className="flex-1">
                        <CardTitle className="text-lg mb-2">{cert.title}</CardTitle>
                        <CardDescription className="text-base">
                          <div className="flex items-center gap-2 mb-1">
                            <Award className="w-4 h-4" />
                            {cert.issuer}
                          </div>
                          <div className="flex items-center gap-2 mb-1">
                            <Calendar className="w-4 h-4" />
                            {cert.date}
                          </div>
                          <Badge variant="secondary" className="mt-2">
                            {cert.grade}
                          </Badge>
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          )}

          {activeTab === "skills" && (
            <div className="space-y-6 animate-fade-in">
              <Card className="card-hover">
                <CardHeader>
                  <CardTitle className="text-3xl">مهاراتي التقنية</CardTitle>
                  <CardDescription >نظرة عامة على مستوى إتقاني للتقنيات والأدوات المختلفة</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {skills.map((skill, index) => (
                      <div key={index} className="stagger-item" style={{ animationDelay: `${index * 0.1}s` }}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium text-lg">{skill.name}</span>
                          <span className="text-primary font-bold">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out animate-shimmer"
                            style={{ width: `${skill.level}%`, animationDelay: `${index * 0.2}s` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === "contact" && (
            <div className="grid gap-6 md:grid-cols-2 animate-fade-in">
              <Card className="card-hover">
                <CardHeader>
                  <CardTitle className="text-2xl">تواصل معي</CardTitle>
                  <CardDescription>يسعدني التواصل معك ومساعدتك في أي استفسار</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                    <Mail className="w-5 h-5 text-primary" />
                    <span>butcahmad@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                    <Phone className="w-5 h-5 text-primary" />
                    <span>+962 78 064 8871</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span>الأردن ، عمان</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-hover">
                <CardHeader>
                  <CardTitle className="text-2xl">وسائل التواصل الاجتماعي</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {/* Social Media Links */}
                  <Button
                    variant="outline"
                    className="w-full justify-start btn-interactive bg-transparent hover:bg-pink-50 dark:hover:bg-pink-950"
                    asChild
                  >
                    <a href="https://instagram.com/af_btec" target="_blank" rel="noopener noreferrer">
                      <Instagram className="w-4 h-4 mr-2 text-pink-600" />
                      تابعني على الإنستغرام
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start btn-interactive bg-transparent hover:bg-green-50 dark:hover:bg-green-950"
                    asChild
                  >
                    <a href="https://wa.me/962780648871" target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="w-4 h-4 mr-2 text-green-600" />
                      تواصل عبر الواتساب
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start btn-interactive bg-transparent hover:bg-blue-50 dark:hover:bg-blue-950"
                    asChild
                  >
                    <a href="https://t.me/+lgYAR-xlWOI3YjVk" target="_blank" rel="noopener noreferrer">
                      <Send className="w-4 h-4 mr-2 text-blue-600" />
                      انضم لقناة التلجرام
                    </a>
                  </Button>
                  
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
