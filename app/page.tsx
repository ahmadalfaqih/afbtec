import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calculator, BookOpen, Users, HelpCircle, Settings, ArrowLeft, UserCircle, MessageSquare } from "lucide-react"
import Link from "next/link"

const features = [
  {
    title: "حاسبة المعدل التراكمي",
    description: "احسب معدلك التراكمي لجميع التخصصات مع تفاصيل المواد والأوزان",
    icon: Calculator,
    href: "/calculator",
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    title: "الموارد التعليمية",
    description: "كتب، دوسيات، شروحات، تلخيصات ومهام لجميع المواد",
    icon: BookOpen,
    href: "/resources",
    color: "bg-blue-50 text-blue-600",
  },
  {
    title: "دليل الطالب",
    description: "إرشادات شاملة، محتوى المواد ومعاني مصطلحات BTEC",
    icon: Users,
    href: "/guide",
    color: "bg-purple-50 text-purple-600",
  },
  {
    title: "البرامج المطلوبة",
    description: "البرامج والأدوات المستخدمة لكل مستوى مع الشرح التفصيلي",
    icon: Settings,
    href: "/programs",
    color: "bg-orange-50 text-orange-600",
  },
  {
    title: "عني",
    description: "تعرف على أحمد الفقيه، رحلته التعليمية، مهاراته وشهادته",
    icon: UserCircle,
    href: "/about",
    color: "bg-teal-50 text-teal-600",
  },
  {
    title: "رسائل من الطلاب",
    description: "اقرأ تجارب وآراء الطلاب الذين استفادوا من المنصة",
    icon: MessageSquare,
    href: "/messages",
    color: "bg-indigo-50 text-indigo-600",
  },
  {
    title: "الأسئلة الشائعة",
    description: "إجابات سريعة وواضحة لأكثر الأسئلة شيوعاً",
    icon: HelpCircle,
    href: "/faq",
    color: "bg-pink-50 text-pink-600",
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen gradient-bg">
      {/* Hero Section */}
      <section className="container py-16 md:py-24">
        <div className="text-center space-y-6 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold animate-slide-up">
            <span className="text-foreground">مرحباً بك في</span>
            <span className="text-primary block mt-2 animate-bounce-gentle">AF BTEC</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed animate-slide-up animation-delay-200">
            منصة تعليمية شاملة مصممة خصيصاً لطلاب BTEC لمساعدتهم على التفوق الأكاديمي
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up animation-delay-400">
            <Button
              size="lg"
              asChild
              className="text-lg px-8 hover:scale-105 transition-all duration-300 hover:shadow-xl"
            >
              <Link href="/calculator" className="flex items-center space-x-2 space-x-reverse">
                <Calculator className="h-5 w-5 animate-pulse" />
                <span>احسب معدلك الآن</span>
                <ArrowLeft className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="text-lg px-8 bg-transparent hover:scale-105 transition-all duration-300"
            >
              <Link href="/guide">دليل الطالب</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="container py-16">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl font-bold text-foreground mb-4 animate-slide-up">شاهد كيف تستخدم المنصة</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto animate-slide-up animation-delay-200">
            فيديو تعريفي شامل يوضح جميع ميزات المنصة وكيفية الاستفادة منها
          </p>
        </div>

        <div className="max-w-4xl mx-auto animate-scale-up animation-delay-400">
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 group">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/NGRVz_QEh-4?si=UKZHeq34Cueaa88m"
              title="AF BTEC - دليل استخدام المنصة"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-all duration-300 pointer-events-none"></div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container py-16">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl font-bold text-foreground mb-4 animate-slide-up">كل ما تحتاجه في مكان واحد</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto animate-slide-up animation-delay-200">
            اكتشف جميع الأدوات والموارد التي ستساعدك على النجاح في رحلتك الأكاديمية
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:rotate-1 animate-fade-in cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div
                  className={`w-12 h-12 rounded-lg ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}
                >
                  <feature.icon className="h-6 w-6 group-hover:animate-bounce" />
                </div>
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </CardTitle>
                <CardDescription className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                  {feature.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  asChild
                  variant="ghost"
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 hover:scale-105"
                >
                  <Link href={feature.href} className="flex items-center justify-center space-x-2 space-x-reverse">
                    <span>استكشف</span>
                    <ArrowLeft className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-16 animate-fade-in">
        <Card className="bg-primary text-primary-foreground hover:shadow-2xl transition-all duration-500 hover:scale-105">
          <CardContent className="p-12 text-center">
            <h3 className="text-3xl font-bold mb-4 animate-pulse">ابدأ رحلتك الأكاديمية اليوم</h3>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto animate-slide-up animation-delay-200">
              انضم إلى آلاف الطلاب الذين يستخدمون AF BTEC لتحقيق أهدافهم الأكاديمية
            </p>
            <Button
              size="lg"
              variant="secondary"
              asChild
              className="text-lg px-8 hover:scale-110 transition-all duration-300 animate-bounce-gentle"
            >
              <Link href="/calculator" className="flex items-center space-x-2 space-x-reverse">
                <Calculator className="h-5 w-5 animate-spin-slow" />
                <span>احسب معدلك الآن</span>
              </Link>
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
