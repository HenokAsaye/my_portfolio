"use client"
import Image from "next/image"
import { Typewriter } from "react-simple-typewriter"
import {
  Github,
  Linkedin,
  Twitter,
  MessageCircle,
  Code,
  Database,
  Server,
  Globe,
  Cloud,
  Settings,
  Mail,
  Phone,
  MapPin,
  Send,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        id="home"
        className="container mx-auto px-4 py-20 md:py-32 flex flex-col md:flex-row items-center gap-8 md:gap-16"
      >
        <div className="relative w-64 h-64 md:w-80 md:h-80 flex-shrink-0 mx-auto md:mx-0">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 animate-pulse opacity-70"></div>
          <div className="absolute inset-1 rounded-full bg-white dark:bg-gray-950 flex items-center justify-center overflow-hidden">
            {/* Replace with your own image */}
            <Image
              src="/Portfolio_photo (1).png"
              alt="Profile"
              width={400}
              height={300}
              className="rounded-full object-cover"
              priority
            />
          </div>
        </div>

        <div className="text-center md:text-left md:w-full">
          <p className="text-lg mb-2 bg-slate-900 text-white rounded-full w-32 h-10 text-center p-1">
            👋 Hello, I&apos;m
          </p>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">
            Henok Asaye
          </h1>
          <h2 className="text-2xl font-sw-ibold text-gray-700 dark:text-gray-300 mb-4">
            Full-Stack | Mobile App Developer
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-fit mb-6 text-xl">
            I build scalable backend systems, automate workflows, and create responsive frontends with React.My
            expertise in {" "}
            <span className="text-blue-500 font-mono">
              <Typewriter
                words={[
                  "Express.js",
                  "TypeScript",
                  "Nest.js",
                  "React",
                  "MongoDb",
                  "Tailwind Css",
                  "Python",
                  "Node.js",
                  "Next.js",
                  "PostgresSQL",
                  "API Design",
                ]}
                loop
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </p>
          <div className="flex gap-4 justify-center md:justify-start">
            <Button asChild className="bg-blue-500 hover:bg-blue-600 hover:-translate-y-2">
              <a href="#contact">Contact Me</a>
            </Button>
            <Button variant="outline" className=" hover:-translate-y-2">
              <a href="/resume.pdf" download>
                Download CV
              </a>
            </Button>
          </div>

          <div className="flex gap-4 mt-8 justify-center md:justify-start">
            <a href="https://github.com" target="_blank" aria-label="GitHub" rel="noreferrer">
              <Github className="w-6 h-6 text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 transition-colors" />
            </a>
            <a href="https://linkedin.com" target="_blank" aria-label="LinkedIn" rel="noreferrer">
              <Linkedin className="w-6 h-6 text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 transition-colors" />
            </a>
            <a href="https://twitter.com" target="_blank" aria-label="Twitter" rel="noreferrer">
              <Twitter className="w-6 h-6 text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 transition-colors" />
            </a>
            <a href="https://telegram.org" target="_blank" aria-label="Telegram" rel="noreferrer">
              <MessageCircle className="w-6 h-6 text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 transition-colors" />
            </a>
          </div>
        </div>
      </section>

      {/* Scroll indicator */}
      <div className="flex justify-center mb-12 hover:text-blue-500">
        <a href="#about" className="animate-bounce hover:text-blue-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-gray-400 hover:text-blue-500 font-medium text-5xl"
          >
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </a>
      </div>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">About Me</h2>

          <div className="relative">
            {/* Vertical Center Line */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-500"></div>

            <div className="space-y-16 relative z-10">
              {/* Timeline Item - Right Side */}
              <div className="flex flex-col md:flex-row items-start md:items-center">
                <div className="md:w-1/2 hidden md:flex justify-end pr-8">{/* Empty for spacing */}</div>
                <div className="relative md:w-1/2 pl-8">
                  {/* Dot */}
                  <div className="absolute -left-8 top-2 w-3 h-3 bg-blue-500 rounded-full border-4 border-white dark:border-gray-900 z-10"></div>

                  {/* Content */}
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                    <h3 className="text-xl font-semibold mb-2">Full-Stack Developer</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      I specialize in building scalable web applications using modern JavaScript frameworks. My
                      expertise includes React, Next.js, and Node.js with a focus on creating responsive and
                      user-friendly interfaces.
                    </p>
                  </div>
                </div>
              </div>

              {/* Timeline Item - Left Side */}
              <div className="flex flex-col md:flex-row items-start md:items-center">
                <div className="relative md:w-1/2 pr-8 text-right">
                  {/* Dot */}
                  <div className="absolute -right-8 top-2 w-3 h-3 bg-blue-500 rounded-full border-4 border-white dark:border-gray-900 z-10"></div>

                  {/* Content */}
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md inline-block text-left">
                    <h3 className="text-xl font-semibold mb-2">Backend Specialist</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      I develop robust backend systems using Express.js, Nest.js, and various database technologies. My
                      experience includes designing RESTful APIs, implementing authentication systems, and optimizing
                      database performance.
                    </p>
                  </div>
                </div>
                <div className="md:w-1/2 hidden md:flex justify-start pl-8">{/* Empty for spacing */}</div>
              </div>

              {/* Timeline Item - Right Side */}
              <div className="flex flex-col md:flex-row items-start md:items-center">
                <div className="md:w-1/2 hidden md:flex justify-end pr-8">{/* Empty for spacing */}</div>
                <div className="relative md:w-1/2 pl-8">
                  {/* Dot */}
                  <div className="absolute -left-8 top-2 w-3 h-3 bg-blue-500 rounded-full border-4 border-white dark:border-gray-900 z-10"></div>

                  {/* Content */}
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                    <h3 className="text-xl font-semibold mb-2">Mobile App Development</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      I build cross-platform mobile applications that deliver native-like experiences. My toolkit
                      includes React Native and related technologies for creating performant and beautiful mobile
                      interfaces.
                    </p>
                  </div>
                </div>
              </div>

              {/* Timeline Item - Left Side */}
              <div className="flex flex-col md:flex-row items-start md:items-center">
                <div className="relative md:w-1/2 pr-8 text-right">
                  {/* Dot */}
                  <div className="absolute -right-8 top-2 w-3 h-3 bg-blue-500 rounded-full border-4 border-white dark:border-gray-900 z-10"></div>

                  {/* Content */}
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md inline-block text-left">
                    <h3 className="text-xl font-semibold mb-2">DevOps & Cloud Services</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      I implement CI/CD pipelines and manage cloud infrastructure using Docker, Kubernetes, and various
                      cloud platforms. My experience ensures applications are deployed efficiently and scale reliably.
                    </p>
                  </div>
                </div>
                <div className="md:w-1/2 hidden md:flex justify-start pl-8">{/* Empty for spacing */}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">My Work</h2>
          <p className="text-gray-600 dark:text-gray-400 text-center max-w-2xl mx-auto mb-12">
            Here are some of the projects I've worked on. Each project represents a unique challenge and solution.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <a href="#" className="group">
              <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
                <div className="aspect-video relative">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Project Title 1"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-500 transition-colors">
                    Project Title 1
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Short description of the project. What technologies you used and what problem it solves.
                  </p>
                </CardContent>
              </Card>
            </a>

            {/* Project 2 */}
            <a href="#" className="group">
              <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
                <div className="aspect-video relative">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Project Title 2"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-500 transition-colors">
                    Project Title 2
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Short description of the project. What technologies you used and what problem it solves.
                  </p>
                </CardContent>
              </Card>
            </a>

            {/* Project 3 */}
            <a href="#" className="group">
              <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
                <div className="aspect-video relative">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Project Title 3"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-500 transition-colors">
                    Project Title 3
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Short description of the project. What technologies you used and what problem it solves.
                  </p>
                </CardContent>
              </Card>
            </a>

            {/* Project 4 */}
            <a href="#" className="group">
              <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
                <div className="aspect-video relative">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Project Title 4"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-500 transition-colors">
                    Project Title 4
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Short description of the project. What technologies you used and what problem it solves.
                  </p>
                </CardContent>
              </Card>
            </a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">My Skills</h2>
          <p className="text-gray-600 dark:text-gray-400 text-center max-w-2xl mx-auto mb-12">
            Here are the technologies and tools I work with. I'm constantly learning and expanding my skillset.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Skill Category 1 */}
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Code className="w-6 h-6 text-blue-500" />
                  <h3 className="text-xl font-semibold">Frontend Development</h3>
                </div>
                <ul className="space-y-2">
                  {["HTML/CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"].map((skill, index) => (
                    <li key={index} className="text-gray-600 dark:text-gray-400 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Skill Category 2 */}
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Server className="w-6 h-6 text-green-500" />
                  <h3 className="text-xl font-semibold">Backend Development</h3>
                </div>
                <ul className="space-y-2">
                  {["Node.js", "Express", "Python", "Django", "PHP"].map((skill, index) => (
                    <li key={index} className="text-gray-600 dark:text-gray-400 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Skill Category 3 */}
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Database className="w-6 h-6 text-purple-500" />
                  <h3 className="text-xl font-semibold">Database</h3>
                </div>
                <ul className="space-y-2">
                  {["MySQL", "PostgreSQL", "MongoDB", "Redis", "Firebase"].map((skill, index) => (
                    <li key={index} className="text-gray-600 dark:text-gray-400 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Skill Category 4 */}
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Settings className="w-6 h-6 text-orange-500" />
                  <h3 className="text-xl font-semibold">DevOps</h3>
                </div>
                <ul className="space-y-2">
                  {["Docker", "Kubernetes", "CI/CD", "Jenkins", "GitHub Actions"].map((skill, index) => (
                    <li key={index} className="text-gray-600 dark:text-gray-400 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Skill Category 5 */}
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Cloud className="w-6 h-6 text-sky-500" />
                  <h3 className="text-xl font-semibold">Cloud Services</h3>
                </div>
                <ul className="space-y-2">
                  {["AWS", "Azure", "Google Cloud", "Heroku", "Vercel"].map((skill, index) => (
                    <li key={index} className="text-gray-600 dark:text-gray-400 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-sky-500 rounded-full"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Skill Category 6 */}
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Globe className="w-6 h-6 text-indigo-500" />
                  <h3 className="text-xl font-semibold">Web Services</h3>
                </div>
                <ul className="space-y-2">
                  {["RESTful APIs", "GraphQL", "WebSockets", "Microservices"].map((skill, index) => (
                    <li key={index} className="text-gray-600 dark:text-gray-400 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Get In Touch</h2>
          <p className="text-gray-600 dark:text-gray-400 text-center max-w-2xl mx-auto mb-12">
            Have a question or want to work together? Feel free to contact me using the form below or through my contact
            information.
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="md:col-span-1 space-y-6">
              <Card>
                <CardContent className="p-6 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full">
                      <Mail className="w-5 h-5 text-blue-500" />
                    </div>
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-gray-600 dark:text-gray-400">henokasaye77@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-full">
                      <Phone className="w-5 h-5 text-green-500" />
                    </div>
                    <div>
                      <h3 className="font-medium">Phone</h3>
                      <p className="text-gray-600 dark:text-gray-400">+251910152982</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-full">
                      <MapPin className="w-5 h-5 text-purple-500" />
                    </div>
                    <div>
                      <h3 className="font-medium">Location</h3>
                      <p className="text-gray-600 dark:text-gray-400">AddisAbaba,Ethiopia</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="md:col-span-2">
              <Card>
                <CardContent className="p-6">
                  <form className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">
                          Your Name
                        </label>
                        <Input id="name" name="name" placeholder="Your Name ..." required />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Your Email
                        </label>
                        <Input id="email" name="email" type="email" placeholder="henokasaye77@gmail.com" required />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium">
                        Subject
                      </label>
                      <Input id="subject" name="subject" placeholder="How can I help you?" required />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message
                      </label>
                      <Textarea id="message" name="message" placeholder="Your message here..." rows={6} required />
                    </div>

                    <Button type="submit" className="bg-blue-500 hover:bg-blue-600 w-full md:w-auto">
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
