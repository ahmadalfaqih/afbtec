"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Trash2, Plus, Calculator, BookOpen, GraduationCap, Users } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface BTECSubject {
  id: string
  name: string
  creditHours: number
  grade: string // P/M/D for BTEC subjects
}

interface SharedSubject {
  id: string
  name: string
  weight: number // Grade from 0-100 for shared subjects
  fixedWeight: number // Fixed percentage weight (10%, 10%, 6%, 4%)
}

interface SectionGPA {
  weightedSum: number
  totalCredits: number
  gpa: number
}

const creditHoursOptions = [
  { value: 120, label: "120 ساعة" },
  { value: 90, label: "90 ساعة" },
  { value: 60, label: "60 ساعة" },
]

const btecGradeOptions = [
  { value: "P", label: "P - مقبول (60)" },
  { value: "M", label: "M - جيد (80)" },
  { value: "D", label: "D - ممتاز (100)" },
]

export default function CalculatorPage() {
  const [firstYearSubjects, setFirstYearSubjects] = useState<BTECSubject[]>([
    { id: "1", name: "", creditHours: 120, grade: "" },
    { id: "2", name: "", creditHours: 120, grade: "" },
    { id: "3", name: "", creditHours: 120, grade: "" },
    { id: "4", name: "", creditHours: 120, grade: "" },
  ])

  const [seniorYearSubjects, setSeniorYearSubjects] = useState<BTECSubject[]>([
    { id: "1", name: "", creditHours: 120, grade: "" },
    { id: "2", name: "", creditHours: 120, grade: "" },
    { id: "3", name: "", creditHours: 120, grade: "" },
    { id: "4", name: "", creditHours: 120, grade: "" },
  ])

  const [sharedSubjects, setSharedSubjects] = useState<SharedSubject[]>([
    { id: "1", name: "اللغة الإنجليزية", weight: 0, fixedWeight: 0.1 },
    { id: "2", name: "اللغة العربية", weight: 0, fixedWeight: 0.1 },
    { id: "3", name: "التربية الإسلامية", weight: 0, fixedWeight: 0.06 },
    { id: "4", name: "التاريخ", weight: 0, fixedWeight: 0.04 },
  ])

  const [sectionGPAs, setSectionGPAs] = useState<{
    firstYear: SectionGPA | null
    seniorYear: SectionGPA | null
    shared: SectionGPA | null
  }>({
    firstYear: null,
    seniorYear: null,
    shared: null,
  })

  const [finalGPA, setFinalGPA] = useState<number | null>(null)

  const addBTECSubject = (section: "firstYear" | "seniorYear") => {
    const newSubject: BTECSubject = {
      id: Date.now().toString(),
      name: "",
      creditHours: 120,
      grade: "",
    }

    if (section === "firstYear") {
      setFirstYearSubjects([...firstYearSubjects, newSubject])
    } else {
      setSeniorYearSubjects([...seniorYearSubjects, newSubject])
    }
  }

  const addSharedSubject = () => {
    // Shared subjects are now fixed - no adding allowed
  }

  const removeBTECSubject = (section: "firstYear" | "seniorYear", id: string) => {
    if (section === "firstYear" && firstYearSubjects.length > 1) {
      setFirstYearSubjects(firstYearSubjects.filter((subject) => subject.id !== id))
    } else if (section === "seniorYear" && seniorYearSubjects.length > 1) {
      setSeniorYearSubjects(seniorYearSubjects.filter((subject) => subject.id !== id))
    }
  }

  const removeSharedSubject = (id: string) => {
    // Shared subjects are now fixed - no removing allowed
  }

  const updateBTECSubject = (
    section: "firstYear" | "seniorYear",
    id: string,
    field: keyof BTECSubject,
    value: string | number,
  ) => {
    const updateFunction = (subjects: BTECSubject[]) =>
      subjects.map((subject) => (subject.id === id ? { ...subject, [field]: value } : subject))

    if (section === "firstYear") {
      setFirstYearSubjects(updateFunction(firstYearSubjects))
    } else {
      setSeniorYearSubjects(updateFunction(seniorYearSubjects))
    }
  }

  const updateSharedSubject = (id: string, field: keyof SharedSubject, value: string | number) => {
    setSharedSubjects((subjects) =>
      subjects.map((subject) => (subject.id === id ? { ...subject, [field]: value } : subject)),
    )
  }

  const btecGradeToNumber = (grade: string): number => {
    switch (grade) {
      case "P":
        return 60 // Pass = 60
      case "M":
        return 80 // Merit = 80
      case "D":
        return 100 // Distinction = 100
      default:
        return 0
    }
  }

  const calculateBTECSectionGPA = (subjects: BTECSubject[]): SectionGPA | null => {
    const validSubjects = subjects.filter(
      (subject) => subject.name.trim() !== "" && subject.grade !== "" && subject.creditHours > 0,
    )

    if (validSubjects.length === 0) return null

    const weightedSum = validSubjects.reduce((sum, subject) => {
      const gradeValue = btecGradeToNumber(subject.grade)
      return sum + gradeValue * subject.creditHours
    }, 0)

    const totalCredits = validSubjects.reduce((sum, subject) => sum + subject.creditHours, 0)
    const gpa = weightedSum / totalCredits

    return {
      weightedSum,
      totalCredits,
      gpa: Math.round(gpa * 100) / 100,
    }
  }

  const calculateSharedSectionGPA = (subjects: SharedSubject[]): SectionGPA | null => {
    const validSubjects = subjects.filter((subject) => subject.weight > 0)

    if (validSubjects.length === 0) return null

    // Calculate weighted sum using fixed percentages
    const weightedSum = validSubjects.reduce((sum, subject) => {
      return sum + subject.weight * subject.fixedWeight
    }, 0)

    // Total contribution is the sum of all fixed weights for valid subjects
    const totalWeight = validSubjects.reduce((sum, subject) => sum + subject.fixedWeight, 0)

    // Convert to percentage (multiply by 100 since weights are decimals)
    const gpa = (weightedSum / totalWeight) * 100

    return {
      weightedSum,
      totalCredits: validSubjects.length,
      gpa: Math.round(gpa * 100) / 100,
    }
  }

  const calculateFinalGPA = () => {
    const firstYearGPA = calculateBTECSectionGPA(firstYearSubjects)
    const seniorYearGPA = calculateBTECSectionGPA(seniorYearSubjects)

    // Calculate shared subjects contribution directly using the new formula
    const validSharedSubjects = sharedSubjects.filter((subject) => subject.weight > 0)
    let sharedContribution = 0

    if (validSharedSubjects.length > 0) {
      sharedContribution = validSharedSubjects.reduce((sum, subject) => {
        return sum + subject.weight * subject.fixedWeight
      }, 0)
    }

    setSectionGPAs({
      firstYear: firstYearGPA,
      seniorYear: seniorYearGPA,
      shared:
        validSharedSubjects.length > 0
          ? {
              weightedSum: sharedContribution,
              totalCredits: validSharedSubjects.length,
              gpa: sharedContribution,
            }
          : null,
    })

    if (firstYearGPA && seniorYearGPA && validSharedSubjects.length > 0) {
      // New formula: (0.35 × معدل_أول_ثانوي) + (0.35 × معدل_توجيهي) + (shared_contribution)
      const final = firstYearGPA.gpa * 0.35 + seniorYearGPA.gpa * 0.35 + sharedContribution
      setFinalGPA(Math.round(final * 100) / 100)
    } else {
      setFinalGPA(null)
    }
  }

  const getGPAColor = (gpa: number) => {
    if (gpa >= 85) return "text-emerald-600 dark:text-emerald-400"
    if (gpa >= 70) return "text-blue-600 dark:text-blue-400"
    if (gpa >= 60) return "text-amber-600 dark:text-amber-400"
    return "text-red-600 dark:text-red-400"
  }

  const getGPALabel = (gpa: number) => {
    if (gpa >= 85) return "ممتاز"
    if (gpa >= 70) return "جيد جداً"
    if (gpa >= 60) return "جيد"
    if (gpa >= 50) return "مقبول"
    return "راسب"
  }

  const renderBTECSubjectSection = (
    subjects: BTECSubject[],
    section: "firstYear" | "seniorYear",
    title: string,
    icon: React.ReactNode,
  ) => (
    <Card className="shadow-lg border-0 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2 space-x-reverse text-slate-800 dark:text-slate-100">
          {icon}
          <span>{title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <Label className="text-lg font-semibold text-slate-700 dark:text-slate-200">المواد</Label>
          <Button
            onClick={() => addBTECSubject(section)}
            size="sm"
            variant="outline"
            className="hover:bg-blue-50 dark:hover:bg-blue-900/20 border-blue-300 dark:border-blue-600 text-blue-700 dark:text-blue-300"
          >
            <Plus className="h-4 w-4 ml-2" />
            إضافة مادة
          </Button>
        </div>

        {subjects.map((subject) => (
          <Card
            key={subject.id}
            className="p-4 bg-slate-50/50 dark:bg-slate-700/50 border-slate-200 dark:border-slate-600 hover:shadow-md transition-all duration-300 animate-slide-up"
          >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
              <div className="space-y-2">
                <Label className="text-slate-700 dark:text-slate-200">اسم المادة</Label>
                <Input
                  placeholder="مثال: البرمجة"
                  value={subject.name}
                  onChange={(e) => updateBTECSubject(section, subject.id, "name", e.target.value)}
                  className="border-slate-300 dark:border-slate-600 focus:border-blue-500 dark:focus:border-blue-400"
                />
              </div>

              <div className="space-y-2">
                <Label className="text-slate-700 dark:text-slate-200">عدد الساعات</Label>
                <Select
                  value={subject.creditHours.toString()}
                  onValueChange={(value) =>
                    updateBTECSubject(section, subject.id, "creditHours", Number.parseInt(value))
                  }
                >
                  <SelectTrigger className="border-slate-300 dark:border-slate-600 focus:border-blue-500 dark:focus:border-blue-400">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {creditHoursOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value.toString()}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label className="text-slate-700 dark:text-slate-200">التقدير</Label>
                <Select
                  value={subject.grade}
                  onValueChange={(value) => updateBTECSubject(section, subject.id, "grade", value)}
                >
                  <SelectTrigger className="border-slate-300 dark:border-slate-600 focus:border-blue-500 dark:focus:border-blue-400">
                    <SelectValue placeholder="اختر التقدير" />
                  </SelectTrigger>
                  <SelectContent>
                    {btecGradeOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <Button
                onClick={() => removeBTECSubject(section, subject.id)}
                variant="outline"
                size="sm"
                disabled={subjects.length === 1}
                className="text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 border-red-300 dark:border-red-600 hover:bg-red-50 dark:hover:bg-red-900/20"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </Card>
        ))}
      </CardContent>
    </Card>
  )

  const renderSharedSubjectSection = () => (
    <Card className="shadow-lg border-0 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2 space-x-reverse text-slate-800 dark:text-slate-100">
          <Users className="h-5 w-5 text-blue-600 dark:text-blue-400" />
          <span>المواد المشتركة (30%)</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="mb-4">
          <Label className="text-lg font-semibold text-slate-700 dark:text-slate-200">المواد الثابتة</Label>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">أدخل العلامات من 0-100 لكل مادة</p>
        </div>

        {sharedSubjects.map((subject) => (
          <Card
            key={subject.id}
            className="p-4 bg-slate-50/50 dark:bg-slate-700/50 border-slate-200 dark:border-slate-600 hover:shadow-md transition-all duration-300 animate-slide-up"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
              <div className="space-y-2">
                <Label className="text-slate-700 dark:text-slate-200">اسم المادة</Label>
                <div className="p-2 bg-slate-100 dark:bg-slate-600 rounded border text-slate-700 dark:text-slate-200">
                  {subject.name}
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-slate-700 dark:text-slate-200">
                  الوزن الثابت ({(subject.fixedWeight * 100).toFixed(0)}%)
                </Label>
                <div className="p-2 bg-slate-100 dark:bg-slate-600 rounded border text-slate-700 dark:text-slate-200 text-center font-semibold">
                  {(subject.fixedWeight * 100).toFixed(0)}%
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-slate-700 dark:text-slate-200">العلامة (0-100)</Label>
                <Input
                  type="number"
                  min="0"
                  max="100"
                  step="0.1"
                  value={subject.weight}
                  onChange={(e) => updateSharedSubject(subject.id, "weight", Number.parseFloat(e.target.value) || 0)}
                  className="border-slate-300 dark:border-slate-600 focus:border-blue-500 dark:focus:border-blue-400"
                  placeholder="0.0"
                />
              </div>
            </div>
          </Card>
        ))}

        <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded">
          <p className="text-sm text-slate-700 dark:text-slate-200 font-semibold mb-2">صيغة الحساب:</p>
          <p className="text-xs text-slate-600 dark:text-slate-300">
            المساهمة = (0.10 × إنجليزي) + (0.10 × عربي) + (0.06 × إسلامية) + (0.04 × تاريخ)
          </p>
        </div>
      </CardContent>
    </Card>
  )

  return (
    <div className="min-h-screen gradient-bg animate-fade-in">
      <div className="container py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 animate-slide-up">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
              حاسبة المعدل النهائي BTEC
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300">احسب معدلك النهائي وفقاً لنظام الأوزان الجديد</p>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
            {/* Calculator Form */}
            <div className="xl:col-span-3">
              <Tabs defaultValue="firstYear" className="space-y-6">
                <TabsList className="grid w-full grid-cols-3 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
                  <TabsTrigger
                    value="firstYear"
                    className="data-[state=active]:bg-blue-500 data-[state=active]:text-white"
                  >
                    الأول ثانوي (35%)
                  </TabsTrigger>
                  <TabsTrigger
                    value="seniorYear"
                    className="data-[state=active]:bg-blue-500 data-[state=active]:text-white"
                  >
                    التوجيهي (35%)
                  </TabsTrigger>
                  <TabsTrigger
                    value="shared"
                    className="data-[state=active]:bg-blue-500 data-[state=active]:text-white"
                  >
                    المواد المشتركة (30%)
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="firstYear" className="animate-fade-in">
                  {renderBTECSubjectSection(
                    firstYearSubjects,
                    "firstYear",
                    "مواد الأول ثانوي (التخصص)",
                    <BookOpen className="h-5 w-5 text-blue-600 dark:text-blue-400" />,
                  )}
                </TabsContent>

                <TabsContent value="seniorYear" className="animate-fade-in">
                  {renderBTECSubjectSection(
                    seniorYearSubjects,
                    "seniorYear",
                    "مواد التوجيهي (التخصص)",
                    <GraduationCap className="h-5 w-5 text-blue-600 dark:text-blue-400" />,
                  )}
                </TabsContent>

                <TabsContent value="shared" className="animate-fade-in">
                  {renderSharedSubjectSection()}
                </TabsContent>
              </Tabs>

              <div className="mt-8">
                <Button
                  onClick={calculateFinalGPA}
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 dark:from-blue-500 dark:to-indigo-500 dark:hover:from-blue-600 dark:hover:to-indigo-600"
                  size="lg"
                >
                  <Calculator className="h-5 w-5 ml-2" />
                  احسب المعدل النهائي
                </Button>
              </div>
            </div>

            {/* Results Panel */}
            <div className="space-y-6">
              {/* Final GPA Result */}
              {finalGPA !== null && (
                <Card className="border-2 border-blue-200 dark:border-blue-700 shadow-lg bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm animate-pulse-glow">
                  <CardHeader className="text-center">
                    <CardTitle className="text-slate-800 dark:text-slate-100">المعدل النهائي</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center space-y-4">
                    <div className={`text-4xl font-bold ${getGPAColor(finalGPA)} animate-bounce`}>{finalGPA}%</div>
                    <div className={`text-lg font-semibold ${getGPAColor(finalGPA)}`}>{getGPALabel(finalGPA)}</div>
                  </CardContent>
                </Card>
              )}

              {/* Section GPAs */}
              {(sectionGPAs.firstYear || sectionGPAs.seniorYear || sectionGPAs.shared) && (
                <Card className="shadow-lg bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-slate-200 dark:border-slate-700">
                  <CardHeader>
                    <CardTitle className="text-lg text-slate-800 dark:text-slate-100">معدلات الأقسام</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm">
                    {sectionGPAs.firstYear && (
                      <div className="space-y-2">
                        <div className="flex justify-between items-center p-2 bg-blue-50 dark:bg-blue-900/20 rounded">
                          <span className="text-slate-700 dark:text-slate-200">الأول ثانوي</span>
                          <span className={`font-bold ${getGPAColor(sectionGPAs.firstYear.gpa)}`}>
                            {sectionGPAs.firstYear.gpa}%
                          </span>
                        </div>
                        <div className="text-xs text-slate-500 dark:text-slate-400 px-2">
                          المساهمة في المعدل النهائي: {Math.round(sectionGPAs.firstYear.gpa * 0.35 * 100) / 100}% من 35%
                        </div>
                      </div>
                    )}
                    {sectionGPAs.seniorYear && (
                      <div className="space-y-2">
                        <div className="flex justify-between items-center p-2 bg-green-50 dark:bg-green-900/20 rounded">
                          <span className="text-slate-700 dark:text-slate-200">التوجيهي</span>
                          <span className={`font-bold ${getGPAColor(sectionGPAs.seniorYear.gpa)}`}>
                            {sectionGPAs.seniorYear.gpa}%
                          </span>
                        </div>
                        <div className="text-xs text-slate-500 dark:text-slate-400 px-2">
                          المساهمة في المعدل النهائي: {Math.round(sectionGPAs.seniorYear.gpa * 0.35 * 100) / 100}% من
                          35%
                        </div>
                      </div>
                    )}
                    {sectionGPAs.shared && (
                      <div className="space-y-2">
                        <div className="flex justify-between items-center p-2 bg-purple-50 dark:bg-purple-900/20 rounded">
                          <span className="text-slate-700 dark:text-slate-200">المواد المشتركة</span>
                          <span className={`font-bold ${getGPAColor(sectionGPAs.shared.gpa * 100)}`}>
                            {Math.round(sectionGPAs.shared.gpa * 100) / 100}%
                          </span>
                        </div>
                        <div className="text-xs text-slate-500 dark:text-slate-400 px-2">
                          المساهمة في المعدل النهائي: {Math.round(sectionGPAs.shared.gpa * 100) / 100}% من 30%
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              )}

              {/* Instructions */}
              <Card className="shadow-lg bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-slate-200 dark:border-slate-700">
                <CardHeader>
                  <CardTitle className="text-lg text-slate-800 dark:text-slate-100">طريقة الحساب</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded">
                    <p className="text-slate-700 dark:text-slate-200 font-semibold mb-2">الأوزان:</p>
                    <ul className="space-y-1 text-slate-600 dark:text-slate-300">
                      <li>• الأول ثانوي: 35%</li>
                      <li>• التوجيهي: 35%</li>
                      <li>• المواد المشتركة: 30%</li>
                    </ul>
                  </div>
                  <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded">
                    <p className="text-slate-700 dark:text-slate-200 font-semibold mb-2">المواد المشتركة:</p>
                    <ul className="space-y-1 text-slate-600 dark:text-slate-300">
                      <li>• إنجليزي: 10%</li>
                      <li>• عربي: 10%</li>
                      <li>• تربية إسلامية: 6%</li>
                      <li>• تاريخ: 4%</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Grade Scale */}
              <Card className="shadow-lg bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-slate-200 dark:border-slate-700">
                <CardHeader>
                  <CardTitle className="text-lg text-slate-800 dark:text-slate-100">سلم التقديرات BTEC</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-emerald-600 dark:text-emerald-400 font-semibold">D - Distinction</span>
                    <span className="text-slate-600 dark:text-slate-300">100</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-600 dark:text-blue-400 font-semibold">M - Merit</span>
                    <span className="text-slate-600 dark:text-slate-300">80</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-amber-600 dark:text-amber-400 font-semibold">P - Pass</span>
                    <span className="text-slate-600 dark:text-slate-300">60</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
