"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Moon,
  Sun,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Download,
  GraduationCap,
  Trophy,
  Sparkles,
  ArrowRight,
  ChevronDown,
} from "lucide-react"

export default function Portfolio() {
  const [isDark, setIsDark] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const skills = [
    { name: "Leadership", level: 95 },
    { name: "Communication", level: 90 },
    { name: "Problem Solving", level: 88 },
    { name: "Project Management", level: 85 },
    { name: "Decision Making", level: 92 },
    { name: "Time Management", level: 87 },
    { name: "Accounting", level: 94 },
    { name: "Service Focus", level: 89 },
  ]

  const achievements = [
    { year: "2020", title: "2nd Place in Buddhism", category: "Academic Excellence" },
    { year: "2020", title: "3rd Place in Oriental Dancing", category: "Cultural Arts" },
    { year: "2020", title: "3rd Place in History", category: "Academic Excellence" },
    { year: "2019", title: "1st Place Shot Put", category: "Athletics" },
    { year: "2019", title: "1st Place Discuss Throw", category: "Athletics" },
    { year: "2017", title: "Cricket Championship", category: "Team Sports" },
  ]

  const education = [
    {
      period: "Current",
      degree: "BBA (Hons) in Accounting & Finance",
      institution: "SLIIT",
      status: "Reading",
    },
    {
      period: "2022",
      degree: "G.C.E. A/L - Commerce Stream",
      institution: "Roman Catholic Balika Vidyalaya",
      grades: "Economic: A, Accounting: A, Business Studies: B",
    },
    {
      period: "2019",
      degree: "G.C.E. O/L",
      institution: "Roman Catholic Balika Vidyalaya",
      grades: "8 Distinctions, 1 Credit",
    },
  ]

  return (
    <div
      className={`min-h-screen transition-all duration-500 ${isDark ? "dark bg-gray-900" : "bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50"}`}
    >
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-purple-400/20 to-pink-400/20 blur-3xl"
          animate={{
            x: mousePosition.x / 10,
            y: mousePosition.y / 10,
          }}
          transition={{ type: "spring", stiffness: 50 }}
        />
        <motion.div
          className="absolute top-1/2 right-0 w-80 h-80 rounded-full bg-gradient-to-r from-blue-400/20 to-cyan-400/20 blur-3xl"
          animate={{
            x: -mousePosition.x / 15,
            y: -mousePosition.y / 15,
          }}
          transition={{ type: "spring", stiffness: 30 }}
        />
      </div>

      {/* Navigation */}
      <motion.nav
        className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/80 dark:bg-gray-900/80 border-b border-gray-200/50 dark:border-gray-700/50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div
            className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
          >
            Shehani Akashya
          </motion.div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={() => setIsDark(!isDark)} className="rounded-full">
              <AnimatePresence mode="wait">
                {isDark ? (
                  <motion.div
                    key="sun"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Sun className="h-5 w-5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Moon className="h-5 w-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </Button>
            <Button 
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
              onClick={() => window.open('https://drive.google.com/uc?export=download&id=1p_HzYVnXfcW-ueLoFCt4VHvFXF9dGPSw', '_blank')}
            >
              <Download className="w-4 h-4 mr-2" />
              Download CV
            </Button>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Profile Image */}
          <motion.div className="text-center md:text-left z-10" style={{ y, opacity }}>
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, type: "spring" }}
              className="mb-8 md:hidden"
            >
              <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 p-1">
                <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 flex items-center justify-center">
                  <span className="text-6xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    SA
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="relative w-64 h-64 md:w-80 md:h-80 mx-auto md:mx-0 mb-8 md:mb-0"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Image
                src="/images/ShehaniProtfolio.jpg"
                alt="Profile"
                width={320}
                height={320}
                className="rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-2xl"
                priority
              />
            </motion.div>
          </motion.div>

          {/* Hero Content */}
          <div className="flex-1 max-w-2xl text-center md:text-left">
            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                H. K. Shehani
              </span>
            </motion.h1>

            <motion.h2
              className="text-2xl md:text-4xl text-gray-600 dark:text-gray-300 mb-4"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Akashya
            </motion.h2>

            <motion.p
              className="text-xl text-gray-500 dark:text-gray-400 mb-8 max-w-2xl mx-auto"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              BBA (Hons) in Accounting & Finance Student | Self-motivated Leader | Problem Solver
            </motion.p>

            <motion.div
              className="flex gap-4 justify-center md:justify-start"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Get In Touch
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </motion.div>
          </div>
        </div>

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
        >
          <ChevronDown className="w-8 h-8 text-gray-400" />
        </motion.div>
      </section>
      {/* About Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 backdrop-blur-sm bg-white/80 dark:bg-gray-800/80 border-0 shadow-2xl">
                <CardContent className="p-0">
                  <div className="flex items-center mb-6">
                    <Sparkles className="w-8 h-8 text-purple-600 mr-3" />
                    <h3 className="text-2xl font-bold">Summary</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                    I am a self-confident, self-motivated, talented, and adaptable person who is willing to accept new
                    challenges. I can contribute my best to achieve organizational objectives as well as develop myself.
                    I have a genuine interest in gaining experience in the field of information technology.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  className="text-center p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-3xl font-bold text-purple-600 mb-2">5+</div>
                  <div className="text-gray-600 dark:text-gray-300">Years Experience</div>
                </motion.div>
                <motion.div
                  className="text-center p-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-sm"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
                  <div className="text-gray-600 dark:text-gray-300">Achievements</div>
                </motion.div>
              </div>

              <motion.div
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-pink-500/10 to-purple-500/10 backdrop-blur-sm"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-3xl font-bold text-pink-600 mb-2">A+ Grade</div>
                <div className="text-gray-600 dark:text-gray-300">Academic Excellence</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6 bg-gray-50/50 dark:bg-gray-800/50">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Skills & Expertise
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 backdrop-blur-sm bg-white/80 dark:bg-gray-800/80 border-0 shadow-lg hover:shadow-2xl transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="flex justify-between items-center mb-3">
                      <h3 className="text-lg font-semibold">{skill.name}</h3>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                      <motion.div
                        className="h-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Education
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"></div>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                className="relative pl-8 pb-12 last:pb-0"
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="absolute left-0 top-0 w-4 h-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"></div>
                {index < education.length - 1 && (
                  <div className="absolute left-2 top-4 w-0.5 h-full bg-gradient-to-b from-purple-600 to-pink-600 opacity-30"></div>
                )}

                <Card className="ml-6 p-6 backdrop-blur-sm bg-white/80 dark:bg-gray-800/80 border-0 shadow-lg hover:shadow-2xl transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="flex items-center mb-3">
                      <GraduationCap className="w-6 h-6 text-purple-600 mr-3" />
                      <Badge
                        variant="secondary"
                        className="bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700"
                      >
                        {edu.period}
                      </Badge>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{edu.degree}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-2">{edu.institution}</p>
                    {edu.grades && <p className="text-sm text-gray-500 dark:text-gray-400">{edu.grades}</p>}
                    {edu.status && (
                      <Badge className="mt-2 bg-gradient-to-r from-green-500 to-emerald-500">{edu.status}</Badge>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 px-6 bg-gray-50/50 dark:bg-gray-800/50">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Achievements
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <Card className="p-6 h-full backdrop-blur-sm bg-white/80 dark:bg-gray-800/80 border-0 shadow-lg hover:shadow-2xl transition-all duration-300">
                  <CardContent className="p-0 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center">
                      <Trophy className="w-8 h-8 text-white" />
                    </div>
                    <Badge className="mb-3 bg-gradient-to-r from-purple-500 to-pink-500">{achievement.year}</Badge>
                    <h3 className="text-lg font-bold mb-2">{achievement.title}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{achievement.category}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Get In Touch
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"></div>
          </motion.div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <Card className="p-6 backdrop-blur-sm bg-white/80 dark:bg-gray-800/80 border-0 shadow-lg hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-0">
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mr-4">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-gray-600 dark:text-gray-300">shehaniakashya92@gmail.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6 backdrop-blur-sm bg-white/80 dark:bg-gray-800/80 border-0 shadow-lg hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-0">
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mr-4">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Phone</h3>
                      <p className="text-gray-600 dark:text-gray-300">+94 759 569 167</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6 backdrop-blur-sm bg-white/80 dark:bg-gray-800/80 border-0 shadow-lg hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-0">
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center mr-4">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Address</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        No: 1B/F6/U6, Sirisadasewana,
                        <br />K siril C Perera Mawatha,
                        <br />
                        Kotahena, Colombo 13, Sri Lanka
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col justify-center"
            >
              <Card className="p-8 backdrop-blur-sm bg-white/80 dark:bg-gray-800/80 border-0 shadow-2xl">
                <CardContent className="p-0 text-center">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                    <Linkedin className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Connect on LinkedIn</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Let&apos;s connect and explore opportunities together
                  </p>
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 w-full"
                    onClick={() => window.open("https://www.linkedin.com/in/shehani-akashya-7b76ba30b", "_blank")}
                  >
                    <Linkedin className="w-5 h-5 mr-2" />
                    View LinkedIn Profile
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-gray-900 dark:bg-black text-white">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              H. K. Shehani Akashya
            </h3>
            <p className="text-gray-400 mb-6">
              Ready to take on new challenges and contribute to organizational success
            </p>
            <div className="flex justify-center space-x-6">
              <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                  <Mail className="w-5 h-5" />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                  <Phone className="w-5 h-5" />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                  <Linkedin className="w-5 h-5" />
                </Button>
              </motion.div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800">
              <p className="text-gray-500 text-sm">© 2025 H. K. Shehani Akashya. All rights reserved.</p>
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  )
}
