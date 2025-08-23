"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  BookOpen,
  Users,
  Target,
  AlertCircle,
  CheckCircle,
  Info,
  Lightbulb,
  Monitor,
  Code,
  Globe,
  Smartphone,
  Gamepad2,
  Shield,
  Brain,
  Database,
} from "lucide-react"

const subjectsByGrade = {
  grade10: [
    {
      id: "it-support",
      name: "استخدام تكنولوجيا المعلومات لدعم المعلومات والاتصالات في المؤسسات",
      icon: Monitor,
      description: "تعلم كيفية استخدام التكنولوجيا لدعم العمليات في المؤسسات",
      whatYouLearn: [
        "أساسيات أنظمة المعلومات في المؤسسات",
        "استخدام برامج المكتب المتقدمة",
        "إدارة قواعد البيانات البسيطة",
        "أنظمة الاتصالات الرقمية",
        "الدعم الفني الأساسي",
      ],
      skills: ["الدعم الفني", "إدارة البيانات", "التواصل التقني"],
    },
    {
      id: "data-modeling",
      name: "نمذجة البيانات وجداول البيانات",
      icon: Database,
      description: "تعلم تصميم وإدارة قواعد البيانات وجداول البيانات",
      whatYouLearn: [
        "مبادئ تصميم قواعد البيانات",
        "استخدام Excel المتقدم",
        "إنشاء النماذج والتقارير",
        "تحليل البيانات الأساسي",
        "ربط الجداول والاستعلامات",
      ],
      skills: ["تحليل البيانات", "Excel المتقدم", "تصميم قواعد البيانات"],
    },
    {
      id: "networks-intro",
      name: "مقدمة إلى شبكات الكمبيوتر",
      icon: Globe,
      description: "أساسيات الشبكات وكيفية عملها وإدارتها",
      whatYouLearn: [
        "مفاهيم الشبكات الأساسية",
        "بروتوكولات الإنترنت",
        "أمان الشبكات الأساسي",
        "إعداد الشبكات المحلية",
        "استكشاف أخطاء الشبكات",
      ],
      skills: ["إدارة الشبكات", "استكشاف الأخطاء", "الأمان الأساسي"],
    },
    {
      id: "programming-intro",
      name: "مقدمة إلى البرمجة",
      icon: Code,
      description: "تعلم أساسيات البرمجة والخوارزميات",
      whatYouLearn: [
        "مفاهيم البرمجة الأساسية",
        "الخوارزميات وهياكل البيانات",
        "لغات البرمجة الأساسية",
        "حل المشكلات البرمجية",
        "تطوير التطبيقات البسيطة",
      ],
      skills: ["البرمجة", "التفكير المنطقي", "حل المشكلات"],
    },
    {
      id: "digital-graphics",
      name: "مقدمة إلى الرسومات الرقمية والرسوم المتحركة",
      icon: Monitor,
      description: "تعلم إنشاء وتحرير الرسومات والرسوم المتحركة",
      whatYouLearn: [
        "برامج التصميم الجرافيكي",
        "إنشاء الرسوم المتحركة",
        "تحرير الصور والفيديو",
        "مبادئ التصميم البصري",
        "إنتاج المحتوى الرقمي",
      ],
      skills: ["التصميم الجرافيكي", "الرسوم المتحركة", "الإبداع البصري"],
    },
    {
      id: "web-development-intro",
      name: "مقدمة إلى تطوير مواقع الويب",
      icon: Globe,
      description: "تعلم إنشاء وتطوير مواقع الويب",
      whatYouLearn: [
        "HTML و CSS الأساسي",
        "JavaScript للمبتدئين",
        "تصميم واجهات المستخدم",
        "استضافة المواقع",
        "أساسيات تجربة المستخدم",
      ],
      skills: ["تطوير الويب", "التصميم التفاعلي", "البرمجة الأمامية"],
    },
    {
      id: "app-development-intro",
      name: "مقدمة إلى تطوير التطبيقات",
      icon: Smartphone,
      description: "تعلم تطوير التطبيقات للأجهزة المختلفة",
      whatYouLearn: [
        "مبادئ تطوير التطبيقات",
        "واجهات المستخدم للتطبيقات",
        "قواعد البيانات في التطبيقات",
        "اختبار التطبيقات",
        "نشر التطبيقات",
      ],
      skills: ["تطوير التطبيقات", "تصميم UI/UX", "البرمجة المتقدمة"],
    },
    {
      id: "game-design-intro",
      name: "مقدمة لتصميم الألعاب",
      icon: Gamepad2,
      description: "تعلم أساسيات تصميم وتطوير الألعاب",
      whatYouLearn: [
        "مفاهيم تصميم الألعاب",
        "محركات الألعاب الأساسية",
        "برمجة الألعاب",
        "تصميم الشخصيات والبيئات",
        "اختبار وتحسين الألعاب",
      ],
      skills: ["تصميم الألعاب", "البرمجة الإبداعية", "التفكير الإبداعي"],
    },
  ],
  grade11: [
    {
      id: "strategic-it",
      name: "أنظمة تكنولوجيا المعلومات الإستراتيجية",
      icon: Target,
      description: "تعلم كيفية استخدام التكنولوجيا لتحقيق الأهداف الاستراتيجية",
      whatYouLearn: [
        "التخطيط الاستراتيجي للتكنولوجيا",
        "تحليل احتياجات المؤسسات",
        "إدارة مشاريع تكنولوجيا المعلومات",
        "تقييم الأنظمة التكنولوجية",
        "التكامل بين الأنظمة المختلفة",
      ],
      skills: ["التخطيط الاستراتيجي", "إدارة المشاريع", "التحليل المؤسسي"],
    },
    {
      id: "web-development-advanced",
      name: "تطوير المواقع الإلكترونية",
      icon: Globe,
      description: "تطوير مواقع ويب متقدمة وتفاعلية",
      whatYouLearn: [
        "تطوير الواجهات المتقدمة",
        "برمجة الخادم والقواعد",
        "أمان مواقع الويب",
        "تحسين الأداء والسرعة",
        "التطوير المتجاوب",
      ],
      skills: ["تطوير الويب المتقدم", "أمان الويب", "تحسين الأداء"],
    },
    {
      id: "mobile-development",
      name: "تطوير تطبيقات الهاتف المحمول",
      icon: Smartphone,
      description: "تطوير تطبيقات احترافية للهواتف الذكية",
      whatYouLearn: [
        "تطوير تطبيقات Android و iOS",
        "واجهات المستخدم المتقدمة",
        "التكامل مع الخدمات السحابية",
        "أمان التطبيقات",
        "نشر التطبيقات في المتاجر",
      ],
      skills: ["تطوير التطبيقات المتقدم", "البرمجة متعددة المنصات", "أمان التطبيقات"],
    },
    {
      id: "it-support-management",
      name: "الدعم الفني وإدارة تكنولوجيا المعلومات",
      icon: Monitor,
      description: "إدارة الأنظمة التقنية وتقديم الدعم الفني",
      whatYouLearn: [
        "إدارة الأنظمة والخوادم",
        "استكشاف الأخطاء المتقدم",
        "إدارة قواعد البيانات",
        "أمان الأنظمة",
        "إدارة فرق الدعم الفني",
      ],
      skills: ["إدارة الأنظمة", "القيادة التقنية", "استكشاف الأخطاء المتقدم"],
    },
    {
      id: "game-development",
      name: "تطوير ألعاب الحاسوب",
      icon: Gamepad2,
      description: "تطوير ألعاب احترافية للحاسوب",
      whatYouLearn: [
        "محركات الألعاب المتقدمة",
        "برمجة الذكاء الاصطناعي للألعاب",
        "تصميم المستويات والبيئات",
        "تحسين أداء الألعاب",
        "تسويق ونشر الألعاب",
      ],
      skills: ["تطوير الألعاب المتقدم", "الذكاء الاصطناعي", "تحسين الأداء"],
    },
  ],
  grade12: [
    {
      id: "cybersecurity",
      name: "الأمن السيبراني وإدارة الحوادث",
      icon: Shield,
      description: "حماية الأنظمة والبيانات من التهديدات السيبرانية",
      whatYouLearn: [
        "تحليل التهديدات السيبرانية",
        "تطوير استراتيجيات الأمان",
        "إدارة حوادث الأمان",
        "اختبار الاختراق الأخلاقي",
        "الامتثال للمعايير الأمنية",
      ],
      skills: ["الأمن السيبراني", "تحليل التهديدات", "إدارة المخاطر"],
    },
    {
      id: "advanced-programming",
      name: "البرمجة",
      icon: Code,
      description: "البرمجة المتقدمة وتطوير الأنظمة المعقدة",
      whatYouLearn: [
        "لغات البرمجة المتقدمة",
        "هندسة البرمجيات",
        "تطوير الأنظمة الموزعة",
        "اختبار البرمجيات",
        "إدارة دورة حياة التطوير",
      ],
      skills: ["البرمجة المتقدمة", "هندسة البرمجيات", "إدارة المشاريع التقنية"],
    },
    {
      id: "it-project-management",
      name: "إدارة مشاريع تكنولوجيا المعلومات",
      icon: Target,
      description: "إدارة المشاريع التقنية من التخطيط إلى التنفيذ",
      whatYouLearn: [
        "منهجيات إدارة المشاريع",
        "تخطيط وتنفيذ المشاريع التقنية",
        "إدارة الفرق والموارد",
        "إدارة المخاطر والجودة",
        "تقييم نجاح المشاريع",
      ],
      skills: ["إدارة المشاريع", "القيادة", "التخطيط الاستراتيجي"],
    },
    {
      id: "artificial-intelligence",
      name: "مقدمة في الذكاء الاصطناعي",
      icon: Brain,
      description: "أساسيات الذكاء الاصطناعي وتطبيقاته",
      whatYouLearn: [
        "مفاهيم الذكاء الاصطناعي",
        "تعلم الآلة والشبكات العصبية",
        "معالجة اللغات الطبيعية",
        "رؤية الحاسوب",
        "أخلاقيات الذكاء الاصطناعي",
      ],
      skills: ["الذكاء الاصطناعي", "تعلم الآلة", "التحليل المتقدم"],
    },
  ],
}

const btecTermsLevel2 = [
  {
    term: "التحليل (Analysis)",
    definition:
      "يقدم المتعلم نتيجة الفحص المنهجي والمفصل من خلال تفصيل موضوع أو فكرة أو موقف من أجل تفسير العلاقات المتبادلة بين الأجزاء ودراستها",
    example: "تحليل البيانات المالية لشركة لفهم الاتجاهات والعلاقات",
  },
  {
    term: "التقييم (Evaluation)",
    definition:
      "يقدم المتعلمون دراسة متأنية للعوامل أو الأحداث المتنوعة التي تنطبق على موقف معين من أجل تحديد العوامل الأكثر أهمية ذات الصلة والوصول إلى نتيجة",
    example: "تقييم فعالية استراتيجية تسويقية معينة",
  },
  {
    term: "إجراء (Carry out)",
    definition: "يُظهر المتعلمون المهارات، وغالباً ما يشيرون إلى عمليات أو تقنيات معينة",
    example: "إجراء اختبار لبرنامج حاسوبي",
  },
  {
    term: "تواصل/تقديم (Communicate/Present)",
    definition: "يمكن للمتعلم تقديم الأفكار أو المعلومات للآخرين",
    example: "تقديم عرض تقديمي عن نتائج البحث",
  },
  {
    term: "إنشاء/تصميم (Create/Design)",
    definition: "إنتاج عمل المتعلمين أو تحقيق نية معينة",
    example: "تصميم موقع ويب لشركة صغيرة",
  },
  {
    term: "الاستعراض (Demonstrate)",
    definition:
      "يثبت عمل المتعلمين أو أدائهم أو ممارساتهم القدرة على تنفيذ وتطبيق المعرفة والفهم و/أو المهارات في موقف عملي",
    example: "استعراض كيفية استخدام برنامج محاسبة",
  },
  {
    term: "وصف (Describe)",
    definition: "يقدم المتعلمون وصفاً لموضوعات معينة أو استخراج المعلومات ذات الصلة والمعلمات ذات الحالة بموضوع معين",
    example: "وصف خطوات تطوير تطبيق جوال",
  },
  {
    term: "التطوير (Develop)",
    definition:
      "يكتسب المتعلمون المهارات ويطبقونها من خلال الأنشطة العملية لإنشاء منتج أو خدمة أو نظام فعال يناسب الجمهور والغرض",
    example: "تطوير نظام إدارة مخزون لمتجر",
  },
]

const btecTermsLevel3 = [
  {
    term: "التحليل (Analysis)",
    definition:
      "يقدم المتعلمون نتيجة الفحص المنهجي والمفصل من خلال تفصيل موضوع أو فكرة أو موقف من أجل تفسير العلاقات المتبادلة بين الأجزاء ودراستها",
    example: "تحليل متطلبات النظام وتحديد العلاقات بين المكونات المختلفة",
  },
  {
    term: "المقارنة (Compare)",
    definition:
      "يحدد المتعلمون العوامل المتعلقة بعنصرين أو أكثر/مواقف أو جوانب من موضوع يمتد لشرح التشابهات والاختلافات والمزايا والعيوب",
    example: "مقارنة بين لغات البرمجة المختلفة من حيث الأداء والسهولة",
  },
  {
    term: "التصميم (Design)",
    definition:
      "يقوم المتعلمون بتطبيق المهارات والمعرفة لإنشاء مخطط لمنتج أو خدمة أو نظام فعال يناسب الجمهور و/أو الغرض",
    example: "تصميم قاعدة بيانات لنظام إدارة المستشفى",
  },
  {
    term: "النقاش (Discuss)",
    definition: "يأخذ المتعلمون في الاعتبار جوانب مختلفة من موضوع أو فكرة والكيفية التي يرتبطان بها ومدى أهميتها",
    example: "نقاش حول تأثير الذكاء الاصطناعي على سوق العمل",
  },
  {
    term: "التبرير (Justify)",
    definition: "يقدم المتعلمون أسباباً أو أدلة لدعم الرأي أو إثبات شيء صحيح أو معقول",
    example: "تبرير اختيار تقنية معينة لتطوير التطبيق",
  },
  {
    term: "المراقبة (Monitor)",
    definition:
      "يراقب المتعلمون تقدم شيء ما أو جودته ويتحققون من ذلك على مدى فترة من الزمن، مع الحفاظ على المراجعة المنهجية",
    example: "مراقبة أداء النظام وتسجيل المشاكل",
  },
  {
    term: "التحسين (Optimise)",
    definition:
      "يقوم المتعلمون بتحسين العملية أو المنتج/الخدمة من خلال خطوات تدريجية لتحقيق أداء أفضل في ظل القيود الموجودة",
    example: "تحسين كود البرنامج لتقليل وقت التنفيذ",
  },
  {
    term: "البحث (Research)",
    definition: "يسعى المتعلمون للحصول على المعلومات وتحديد الوسائل والموارد للقيام بذلك بشكل استباقي",
    example: "البحث عن أحدث التقنيات في مجال الأمن السيبراني",
  },
]

const guidelines = [
  {
    title: "التخطيط للدراسة",
    icon: Target,
    tips: [
      "ضع جدولاً زمنياً واقعياً للمذاكرة",
      "خصص وقتاً كافياً لكل مادة حسب صعوبتها",
      "استخدم تقنيات إدارة الوقت مثل تقنية البومودورو",
      "راجع خطتك الدراسية بانتظام وعدلها حسب الحاجة",
    ],
  },
  {
    title: "كتابة المهام",
    icon: BookOpen,
    tips: [
      "اقرأ متطلبات المهمة بعناية قبل البدء",
      "ضع مخططاً للمهمة قبل الكتابة",
      "استخدم مصادر موثوقة ووثق المراجع بشكل صحيح",
      "راجع عملك قبل التسليم وتأكد من استيفاء جميع المعايير",
    ],
  },
  {
    title: "العمل الجماعي",
    icon: Users,
    tips: [
      "تواصل بفعالية مع أعضاء الفريق",
      "وزع المهام بعدالة حسب قدرات كل عضو",
      "ضع جدولاً زمنياً للاجتماعات والمراجعات",
      "احترم آراء الآخرين وكن منفتحاً للنقد البناء",
    ],
  },
  {
    title: "الاستعداد للامتحانات",
    icon: CheckCircle,
    tips: [
      "ابدأ المراجعة مبكراً ولا تؤجل للحظة الأخيرة",
      "استخدم تقنيات مختلفة للمراجعة مثل الخرائط الذهنية",
      "حل أسئلة سابقة وتدرب على إدارة الوقت",
      "احصل على قسط كافٍ من النوم قبل الامتحان",
    ],
  },
]

export default function GuidePage() {
  const [activeTab, setActiveTab] = useState("guidelines")

  return (
    <div className="min-h-screen gradient-bg animate-fade-in">
      <div className="container py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 animate-slide-up">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">دليل الطالب</h1>
            <p className="text-lg text-slate-600 dark:text-slate-400">كل ما تحتاجه للنجاح في رحلتك الأكاديمية</p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="guidelines" className="flex items-center space-x-2 space-x-reverse">
                <Lightbulb className="h-4 w-4" />
                <span>الإرشادات</span>
              </TabsTrigger>
              <TabsTrigger value="subjects" className="flex items-center space-x-2 space-x-reverse">
                <BookOpen className="h-4 w-4" />
                <span>المواد الدراسية</span>
              </TabsTrigger>
              <TabsTrigger value="terms" className="flex items-center space-x-2 space-x-reverse">
                <Info className="h-4 w-4" />
                <span>مصطلحات BTEC</span>
              </TabsTrigger>
            </TabsList>

            {/* Guidelines Tab */}
            <TabsContent value="guidelines" className="space-y-6 animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {guidelines.map((guideline, index) => (
                  <Card key={index} className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-3 space-x-reverse">
                        <div className="w-10 h-10 bg-primary/10 text-primary rounded-lg flex items-center justify-center">
                          <guideline.icon className="h-5 w-5" />
                        </div>
                        <span>{guideline.title}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {guideline.tips.map((tip, tipIndex) => (
                          <li key={tipIndex} className="flex items-start space-x-3 space-x-reverse">
                            <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="text-slate-700 dark:text-slate-300">{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Important Notice */}
              <Card className="border-amber-200 bg-amber-50 dark:bg-amber-900/20 dark:border-amber-800">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3 space-x-reverse">
                    <AlertCircle className="h-6 w-6 text-amber-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-amber-800 dark:text-amber-200 mb-2">نصيحة مهمة</h3>
                      <p className="text-amber-700 dark:text-amber-300">
                        تذكر أن النجاح في BTEC يعتمد على الفهم العملي والتطبيق أكثر من الحفظ. ركز على فهم المفاهيم
                        وكيفية تطبيقها في الحياة العملية.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Subjects Tab */}
            <TabsContent value="subjects" className="space-y-6 animate-fade-in">
              <div className="space-y-8">
                {/* Grade 10 */}
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 flex items-center space-x-2 space-x-reverse">
                    <Badge variant="default" className="text-lg px-4 py-2">
                      الصف العاشر
                    </Badge>
                  </h2>
                  <Accordion type="single" collapsible className="w-full space-y-4">
                    {subjectsByGrade.grade10.map((subject) => (
                      <AccordionItem
                        key={subject.id}
                        value={subject.id}
                        className="border rounded-lg px-6 hover:shadow-md transition-all duration-300"
                      >
                        <AccordionTrigger className="hover:no-underline">
                          <div className="flex items-center justify-between w-full ml-4">
                            <div className="flex items-center space-x-4 space-x-reverse">
                              <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center">
                                <subject.icon className="h-6 w-6" />
                              </div>
                              <div className="text-right">
                                <h3 className="text-lg font-semibold">{subject.name}</h3>
                                <p className="text-sm text-muted-foreground">{subject.description}</p>
                              </div>
                            </div>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="pt-4">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                              <h4 className="font-semibold mb-3 text-slate-900 dark:text-slate-100">ما ستتعلمه:</h4>
                              <ul className="space-y-2">
                                {subject.whatYouLearn.map((item, index) => (
                                  <li key={index} className="flex items-start space-x-2 space-x-reverse">
                                    <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                                    <span className="text-slate-700 dark:text-slate-300">{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <h4 className="font-semibold mb-3 text-slate-900 dark:text-slate-100">
                                المهارات المكتسبة:
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                {subject.skills.map((skill, index) => (
                                  <Badge
                                    key={index}
                                    variant="outline"
                                    className="bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-300"
                                  >
                                    {skill}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>

                {/* Grade 11 */}
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 flex items-center space-x-2 space-x-reverse">
                    <Badge variant="secondary" className="text-lg px-4 py-2">
                      الصف الأول ثانوي
                    </Badge>
                  </h2>
                  <Accordion type="single" collapsible className="w-full space-y-4">
                    {subjectsByGrade.grade11.map((subject) => (
                      <AccordionItem
                        key={subject.id}
                        value={subject.id}
                        className="border rounded-lg px-6 hover:shadow-md transition-all duration-300"
                      >
                        <AccordionTrigger className="hover:no-underline">
                          <div className="flex items-center justify-between w-full ml-4">
                            <div className="flex items-center space-x-4 space-x-reverse">
                              <div className="w-12 h-12 bg-secondary/10 text-secondary-foreground rounded-lg flex items-center justify-center">
                                <subject.icon className="h-6 w-6" />
                              </div>
                              <div className="text-right">
                                <h3 className="text-lg font-semibold">{subject.name}</h3>
                                <p className="text-sm text-muted-foreground">{subject.description}</p>
                              </div>
                            </div>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="pt-4">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                              <h4 className="font-semibold mb-3 text-slate-900 dark:text-slate-100">ما ستتعلمه:</h4>
                              <ul className="space-y-2">
                                {subject.whatYouLearn.map((item, index) => (
                                  <li key={index} className="flex items-start space-x-2 space-x-reverse">
                                    <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                                    <span className="text-slate-700 dark:text-slate-300">{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <h4 className="font-semibold mb-3 text-slate-900 dark:text-slate-100">
                                المهارات المكتسبة:
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                {subject.skills.map((skill, index) => (
                                  <Badge
                                    key={index}
                                    variant="outline"
                                    className="bg-purple-50 text-purple-700 dark:bg-purple-900/20 dark:text-purple-300"
                                  >
                                    {skill}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>

                {/* Grade 12 */}
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 flex items-center space-x-2 space-x-reverse">
                    <Badge variant="destructive" className="text-lg px-4 py-2">
                      الصف الثاني ثانوي (التوجيهي)
                    </Badge>
                  </h2>
                  <Accordion type="single" collapsible className="w-full space-y-4">
                    {subjectsByGrade.grade12.map((subject) => (
                      <AccordionItem
                        key={subject.id}
                        value={subject.id}
                        className="border rounded-lg px-6 hover:shadow-md transition-all duration-300"
                      >
                        <AccordionTrigger className="hover:no-underline">
                          <div className="flex items-center justify-between w-full ml-4">
                            <div className="flex items-center space-x-4 space-x-reverse">
                              <div className="w-12 h-12 bg-destructive/10 text-destructive rounded-lg flex items-center justify-center">
                                <subject.icon className="h-6 w-6" />
                              </div>
                              <div className="text-right">
                                <h3 className="text-lg font-semibold">{subject.name}</h3>
                                <p className="text-sm text-muted-foreground">{subject.description}</p>
                              </div>
                            </div>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="pt-4">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                              <h4 className="font-semibold mb-3 text-slate-900 dark:text-slate-100">ما ستتعلمه:</h4>
                              <ul className="space-y-2">
                                {subject.whatYouLearn.map((item, index) => (
                                  <li key={index} className="flex items-start space-x-2 space-x-reverse">
                                    <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                                    <span className="text-slate-700 dark:text-slate-300">{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <h4 className="font-semibold mb-3 text-slate-900 dark:text-slate-100">
                                المهارات المكتسبة:
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                {subject.skills.map((skill, index) => (
                                  <Badge
                                    key={index}
                                    variant="outline"
                                    className="bg-red-50 text-red-700 dark:bg-red-900/20 dark:text-red-300"
                                  >
                                    {skill}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </div>
            </TabsContent>

            {/* BTEC Terms Tab */}
            <TabsContent value="terms" className="space-y-6 animate-fade-in">
              <Card>
                <CardHeader>
                  <CardTitle>معاني مصطلحات BTEC في المهام</CardTitle>
                  <CardDescription>
                    فهم هذه المصطلحات ضروري لإنجاز المهام بنجاح والحصول على أفضل الدرجات
                  </CardDescription>
                </CardHeader>
              </Card>

              <Tabs defaultValue="level2" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="level2">المستوى الثاني (Level 2)</TabsTrigger>
                  <TabsTrigger value="level3">المستوى الثالث (Level 3)</TabsTrigger>
                </TabsList>

                <TabsContent value="level2" className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {btecTermsLevel2.map((term, index) => (
                      <Card
                        key={index}
                        className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                      >
                        <CardHeader>
                          <CardTitle className="text-lg text-blue-700 dark:text-blue-300">{term.term}</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3">
                          <p className="text-slate-700 dark:text-slate-300">{term.definition}</p>
                          <div className="bg-slate-50 dark:bg-slate-800 p-3 rounded-lg">
                            <p className="text-sm text-slate-600 dark:text-slate-400">
                              <strong>مثال:</strong> {term.example}
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="level3" className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {btecTermsLevel3.map((term, index) => (
                      <Card
                        key={index}
                        className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                      >
                        <CardHeader>
                          <CardTitle className="text-lg text-purple-700 dark:text-purple-300">{term.term}</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3">
                          <p className="text-slate-700 dark:text-slate-300">{term.definition}</p>
                          <div className="bg-slate-50 dark:bg-slate-800 p-3 rounded-lg">
                            <p className="text-sm text-slate-600 dark:text-slate-400">
                              <strong>مثال:</strong> {term.example}
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>

              {/* Grading System */}
              <Card className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20">
                <CardHeader>
                  <CardTitle>نظام التقييم في BTEC</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-white dark:bg-slate-800 rounded-lg hover:shadow-md transition-all duration-300">
                      <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-2">
                        <span className="font-bold">P</span>
                      </div>
                      <h4 className="font-semibold">Pass</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">المستوى الأساسي للنجاح</p>
                    </div>
                    <div className="text-center p-4 bg-white dark:bg-slate-800 rounded-lg hover:shadow-md transition-all duration-300">
                      <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-2">
                        <span className="font-bold">M</span>
                      </div>
                      <h4 className="font-semibold">Merit</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">مستوى جيد مع تحليل أعمق</p>
                    </div>
                    <div className="text-center p-4 bg-white dark:bg-slate-800 rounded-lg hover:shadow-md transition-all duration-300">
                      <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-2">
                        <span className="font-bold">D</span>
                      </div>
                      <h4 className="font-semibold">Distinction</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">أعلى مستوى من الإنجاز</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
