"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Search, HelpCircle, Calculator, BookOpen, Settings, Users, MessageCircle } from "lucide-react"

interface FAQ {
  id: string
  question: string
  answer: string
  category: string
  tags: string[]
}

const faqCategories = [
  { id: "general", name: "عام حول BTEC", icon: HelpCircle, color: "bg-blue-50 text-blue-600" },
  { id: "calculator", name: "حاسبة المعدل", icon: Calculator, color: "bg-green-50 text-green-600" },
  { id: "resources", name: "الموارد التعليمية", icon: BookOpen, color: "bg-purple-50 text-purple-600" },
  { id: "programs", name: "البرامج المطلوبة", icon: Settings, color: "bg-orange-50 text-orange-600" },
  { id: "assessment", name: "التقييم والمهام", icon: Users, color: "bg-red-50 text-red-600" },
]

const faqs: FAQ[] = [
  // General BTEC Questions
  {
    id: "1",
    question: "ما هو نظام BTEC التعليمي؟",
    answer:
      "BTEC (Business and Technology Education Council) هو نظام تعليمي مهني يركز على التطبيق العملي والمهارات المهنية. يتميز بالتقييم المستمر من خلال المهام العملية بدلاً من الامتحانات التقليدية، ويهدف إلى إعداد الطلاب لسوق العمل أو للدراسة الجامعية.",
    category: "general",
    tags: ["BTEC", "نظام تعليمي", "تعريف"],
  },
  {
    id: "2",
    question: "ما الفرق بين BTEC والأنظمة التعليمية الأخرى؟",
    answer:
      "يختلف BTEC عن الأنظمة التقليدية في أنه يركز على التطبيق العملي والمهارات المهنية. بدلاً من الامتحانات النهائية، يتم التقييم من خلال مهام عملية ومشاريع. كما يوفر مسارات مرنة للانتقال إلى الجامعة أو سوق العمل مباشرة.",
    category: "general",
    tags: ["مقارنة", "نظام تعليمي", "مميزات"],
  },
 {
  "id": "3",
  "question": "كم عدد المستويات في BTEC؟",
  "answer": "يتكون نظام BTEC من ستة مستويات رئيسية، تمتد من المستوى الأول (مقدمة) إلى المستوى السادس (بكالوريوس). وتُصنف كالتالي:\n\n- **المستوى 1**: مستوى مقدمة، يعادل التعليم الإعدادي.\n- **المستوى 2**: مستوى متوسط، يعادل شهادة GCSE.\n- **المستوى 3**: مستوى متقدم، يعادل شهادة A-Levels، ويفتح المجال للالتحاق بالجامعة أو سوق العمل.\n- **المستوى 4**: دبلوم عالٍ (HNC)، يعادل السنة الأولى من البكالوريوس.\n- **المستوى 5**: دبلوم عالٍ (HND)، يعادل السنة الثانية من البكالوريوس.\n- **المستوى 6**: يمثل مستوى درجة البكالوريوس (Bachelor’s Degree)، مثل بكالوريوس في الأمن السيبراني أو الحوسبة.\n\nكما توجد مستويات متقدمة (7 و8) تشمل الماجستير والدكتوراه، لكنها لا تُمنح تحت مظلة BTEC العادية، وإنما عبر مؤهلات مهنية عليا معتمدة.",
  "category": "general",
  "tags": ["مستويات", "هيكل", "تدرج"]
},

  // Calculator Questions
  {
    id: "4",
    question: "كيف أحسب معدلي التراكمي باستخدام الحاسبة؟",
    answer:
      "لحساب معدلك التراكمي، اتبع هذه الخطوات: 1) اختر تخصصك من القائمة، 2) أدخل اسم كل مادة ووزنها (من 1-10)، 3) أدخل العلامة التي حصلت عليها (من 0-100)، 4) اضغط 'احسب المعدل'. الحاسبة ستقوم بحساب المعدل المرجح تلقائياً وعرض التقدير المناسب.",
    category: "calculator",
    tags: ["حساب المعدل", "خطوات", "استخدام"],
  },
  {
    id: "5",
    question: "ما معنى 'وزن المادة' في حاسبة المعدل؟",
    answer:
      "وزن المادة يعكس أهمية المادة في حساب المعدل التراكمي. المواد الأساسية والمتخصصة عادة ما تحمل وزناً أكبر (5-10)، بينما المواد المساعدة تحمل وزناً أقل (1-3). هذا يضمن أن المواد المهمة لها تأثير أكبر على معدلك النهائي.",
    category: "calculator",
    tags: ["وزن المادة", "أهمية", "تأثير"],
  },
  {
    id: "6",
    question: "هل يمكنني حفظ حساباتي في الحاسبة؟",
    answer:
      "حالياً، الحاسبة لا تحفظ البيانات تلقائياً. ننصحك بتسجيل معدلك ومعلومات المواد في مكان آمن. نعمل على إضافة ميزة حفظ البيانات في التحديثات القادمة لتسهيل متابعة تقدمك الأكاديمي.",
    category: "calculator",
    tags: ["حفظ البيانات", "تسجيل", "متابعة"],
  },

  // Resources Questions
  {
    id: "7",
    question: "كيف يمكنني الوصول إلى الموارد التعليمية؟",
    answer:
      "يمكنك الوصول إلى الموارد من خلال صفحة 'الموارد التعليمية'. استخدم خيارات البحث والتصفية لإيجاد المواد المناسبة لتخصصك ومستواك. الموارد مقسمة إلى: كتب، دوسيات، شروحات، تلخيصات، ومهام. كل مورد يحتوي على وصف مفصل ومعلومات التحميل.",
    category: "resources",
    tags: ["وصول", "بحث", "تصفية"],
  },
  {
    id: "8",
    question: "هل الموارد التعليمية مجانية؟",
    answer:
      "نعم، جميع الموارد المتاحة على المنصة مجانية تماماً. نهدف إلى توفير مصادر تعليمية عالية الجودة لجميع طلاب BTEC دون أي تكلفة. إذا كان لديك موارد مفيدة، نشجعك على مشاركتها مع المجتمع الطلابي.",
    category: "resources",
    tags: ["مجاني", "تكلفة", "مشاركة"],
  },
  {
    id: "9",
    question: "كيف يمكنني رفع مورد تعليمي جديد؟",
    answer:
      "لرفع مورد جديد، اذهب إلى صفحة الموارد التعليمية واضغط على 'رفع مورد جديد'. ستحتاج إلى تعبئة معلومات المورد (العنوان، الوصف، المادة، المستوى) ورفع الملف. سيتم مراجعة المورد من قبل فريقنا قبل النشر لضمان الجودة.",
    category: "resources",
    tags: ["رفع", "مشاركة", "مراجعة"],
  },

  // Programs Questions
  {
    id: "10",
    question: "ما هي البرامج الأساسية المطلوبة لجميع المستويات؟",
    answer:
      "البرامج الأساسية المطلوبة لجميع المستويات تشمل: Microsoft Office 365 (Word, Excel, PowerPoint)، متصفح ويب حديث (Chrome أو Firefox)، وبرنامج قراءة PDF (Adobe Reader). هذه البرامج ضرورية للمهام الأساسية مثل كتابة التقارير والعروض التقديمية.",
    category: "programs",
    tags: ["برامج أساسية", "مطلوبة", "جميع المستويات"],
  },
  {
    id: "11",
    question: "هل يمكنني استخدام بدائل مجانية للبرامج المدفوعة؟",
    answer:
      "نعم، يمكنك استخدام البدائل المجانية في معظم الحالات. مثلاً: LibreOffice بدلاً من Microsoft Office، GIMP بدلاً من Photoshop، وDaVinci Resolve بدلاً من Premiere Pro. تأكد من أن البديل يدعم الصيغ المطلوبة للمهام ويحتوي على الميزات الأساسية.",
    category: "programs",
    tags: ["بدائل مجانية", "برامج مدفوعة", "خيارات"],
  },
  {
    id: "12",
    question: "أين يمكنني الحصول على تراخيص الطلاب للبرامج؟",
    answer:
      "العديد من الشركات تقدم تراخيص مجانية أو مخفضة للطلاب. Microsoft تقدم Office 365 مجاناً للطلاب، Adobe تقدم خصومات كبيرة على Creative Cloud، وAutodesk تقدم تراخيص تعليمية مجانية. تواصل مع مؤسستك التعليمية للحصول على هذه التراخيص.",
    category: "programs",
    tags: ["تراخيص طلاب", "خصومات", "مجاني"],
  },

  // Assessment Questions
  {
    id: "13",
    question: "ما الفرق بين Pass وMerit وDistinction؟",
    answer:
      "Pass (P): المستوى الأساسي للنجاح، يتطلب استيفاء المتطلبات الأساسية للمهمة. Merit (M): مستوى أعلى يتطلب تحليلاً أعمق وربط المفاهيم ببعضها. Distinction (D): أعلى مستوى يتطلب تقييماً نقدياً، حلولاً مبتكرة، وفهماً عميقاً للموضوع.",
    category: "assessment",
    tags: ["تقييم", "درجات", "مستويات"],
  },
  {
    id: "14",
    question: "كيف أحصل على Distinction في مهامي؟",
    answer:
      "للحصول على Distinction: 1) اقرأ معايير التقييم بعناية، 2) قدم تحليلاً نقدياً عميقاً، 3) استخدم مصادر متنوعة وموثوقة، 4) اربط النظرية بالتطبيق العملي، 5) قدم حلولاً مبتكرة أو توصيات عملية، 6) اكتب بوضوح ودقة مع مراجعة شاملة للعمل.",
    category: "assessment",
    tags: ["Distinction", "تميز", "نصائح"],
  },
  {
    id: "15",
    question: "ماذا يحدث إذا لم أنجح في مهمة؟",
    answer:
      "إذا لم تحقق معايير Pass في المهمة، ستحصل على 'RITIK ' وفرصة لإعادة تقديم المهمة. ستتلقى تغذية راجعة مفصلة حول نقاط الضعف والتحسينات المطلوبة. يمكنك إعادة تقديم المهمة بعد التحسين، لكن أعلى درجة يمكن الحصول عليها في الإعادة هي Pass.",
    category: "assessment",
    tags: ["فشل", "إعادة تقديم", "RITIK "],
  },
]

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const filteredFAQs = faqs.filter((faq) => {
    const matchesSearch =
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesCategory = selectedCategory === "all" || faq.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const getCategoryInfo = (categoryId: string) => {
    return faqCategories.find((cat) => cat.id === categoryId) || faqCategories[0]
  }

  return (
    <div className="min-h-screen gradient-bg animate-fade-in">
      <div className="container py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">الأسئلة الشائعة</h1>
            <p className="text-lg text-slate-600">إجابات سريعة وواضحة لأكثر الأسئلة شيوعاً حول BTEC والمنصة</p>
          </div>

          {/* Search and Filter */}
          <Card className="mb-8">
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="relative">
                  <Search className="absolute right-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="ابحث في الأسئلة الشائعة..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pr-10"
                  />
                </div>

                <div className="flex flex-wrap gap-2">
                  <Button
                    variant={selectedCategory === "all" ? "default" : "outline"}
                    onClick={() => setSelectedCategory("all")}
                    size="sm"
                  >
                    جميع الفئات
                  </Button>
                  {faqCategories.map((category) => (
                    <Button
                      key={category.id}
                      variant={selectedCategory === category.id ? "default" : "outline"}
                      onClick={() => setSelectedCategory(category.id)}
                      size="sm"
                      className="flex items-center space-x-2 space-x-reverse"
                    >
                      <category.icon className="h-4 w-4" />
                      <span>{category.name}</span>
                    </Button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* FAQ Categories Overview */}
          {selectedCategory === "all" && searchTerm === "" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {faqCategories.map((category) => {
                const categoryFAQs = faqs.filter((faq) => faq.category === category.id)
                return (
                  <Card
                    key={category.id}
                    className="cursor-pointer hover:shadow-md transition-shadow"
                    onClick={() => setSelectedCategory(category.id)}
                  >
                    <CardContent className="p-4 text-center">
                      <div
                        className={`w-12 h-12 rounded-lg ${category.color} flex items-center justify-center mx-auto mb-2`}
                      >
                        <category.icon className="h-6 w-6" />
                      </div>
                      <h3 className="font-semibold mb-1">{category.name}</h3>
                      <p className="text-sm text-muted-foreground">{categoryFAQs.length} سؤال</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          )}

          {/* FAQ List */}
          {filteredFAQs.length > 0 ? (
            <Accordion type="single" collapsible className="w-full space-y-4">
              {filteredFAQs.map((faq) => {
                const categoryInfo = getCategoryInfo(faq.category)
                return (
                  <AccordionItem key={faq.id} value={faq.id} className="border rounded-lg px-6">
                    <AccordionTrigger className="hover:no-underline text-right">
                      <div className="flex items-start space-x-4 space-x-reverse w-full">
                        <div
                          className={`w-8 h-8 rounded-lg ${categoryInfo.color} flex items-center justify-center flex-shrink-0 mt-1`}
                        >
                          <categoryInfo.icon className="h-4 w-4" />
                        </div>
                        <div className="flex-1 text-right">
                          <h3 className="text-lg font-semibold text-slate-900">{faq.question}</h3>
                          <div className="flex flex-wrap gap-1 mt-2">
                            {faq.tags.slice(0, 3).map((tag) => (
                              <Badge key={tag} variant="secondary" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4">
                      <div className="mr-12">
                        <p className="text-slate-700 leading-relaxed">{faq.answer}</p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                )
              })}
            </Accordion>
          ) : (
            <div className="text-center py-12">
              <div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="h-12 w-12 text-slate-400" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">لا توجد نتائج</h3>
              <p className="text-slate-600">لم يتم العثور على أسئلة تطابق بحثك. جرب كلمات مختلفة أو تصفح الفئات.</p>
            </div>
          )}

          {/* Contact Support */}
          <Card className="mt-12 bg-primary text-primary-foreground">
            <CardContent className="p-8 text-center">
              <MessageCircle className="w-16 h-16 mx-auto mb-4 opacity-90" />
              <h3 className="text-2xl font-bold mb-4">لم تجد إجابة لسؤالك؟</h3>
              <p className="text-lg mb-6 opacity-90">
                تواصل معنا وسنكون سعداء لمساعدتك في أي استفسار حول BTEC أو استخدام المنصة
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="text-lg px-8">
                  تواصل معنا
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                >
                  اقترح سؤالاً جديداً
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
