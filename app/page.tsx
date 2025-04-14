import Image from "next/image"
import {
  Github,
  Linkedin,
  Twitter,
  MessageCircle,
  Youtube,
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
              src="/placeholder.svg?height=300&width=300"
              alt="Profile"
              width={300}
              height={300}
              className="rounded-full object-cover"
              priority
            />
          </div>
        </div>

        <div className="text-center md:text-left">
          <p className="text-lg mb-2">👋 Hello, I&apos;m</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">
            Your Name
          </h1>
          <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-4">Your Job Title</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-lg mb-6">
            I specialize in [your expertise]. My expertise in [your skills].
          </p>
          <div className="flex gap-4 justify-center md:justify-start">
            <Button asChild className="bg-blue-500 hover:bg-blue-600">
              <a href="#contact">Contact Me</a>
            </Button>
            <Button variant="outline">
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
            <a href="https://youtube.com" target="_blank" aria-label="YouTube" rel="noreferrer">
              <Youtube className="w-6 h-6 text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 transition-colors" />
            </a>
          </div>
        </div>
      </section>

      {/* Scroll indicator */}
      <div className="flex justify-center mb-12">
        <a href="#about" className="animate-bounce">
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
            className="text-gray-400"
          >
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </a>
      </div>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">About Me</h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="aspect-square relative rounded-lg overflow-hidden shadow-xl">
                {/* Replace with your own image */}
                <Image src="/placeholder.svg?height=600&width=600" alt="About me" fill className="object-cover" />
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Who am I?</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Write your bio here. Describe your background, experience, and what drives you in your professional
                journey.
              </p>

              <h3 className="text-2xl font-semibold pt-4">My Journey</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Share your professional journey, key milestones, and how you got to where you are today.
              </p>

              <h3 className="text-2xl font-semibold pt-4">Education</h3>
              <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400">
                <li>Degree, University Name (Year)</li>
                <li>Certification, Institution (Year)</li>
              </ul>

              <h3 className="text-2xl font-semibold pt-4">Interests</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Share your personal interests, hobbies, or activities you enjoy outside of work.
              </p>
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

          <div className="grid md:grid-cols-2 gap-8">
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
                      <p className="text-gray-600 dark:text-gray-400">your.email@example.com</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-full">
                      <Phone className="w-5 h-5 text-green-500" />
                    </div>
                    <div>
                      <h3 className="font-medium">Phone</h3>
                      <p className="text-gray-600 dark:text-gray-400">+1 (123) 456-7890</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-full">
                      <MapPin className="w-5 h-5 text-purple-500" />
                    </div>
                    <div>
                      <h3 className="font-medium">Location</h3>
                      <p className="text-gray-600 dark:text-gray-400">City, Country</p>
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
                        <Input id="name" name="name" placeholder="John Doe" required />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Your Email
                        </label>
                        <Input id="email" name="email" type="email" placeholder="john@example.com" required />
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
