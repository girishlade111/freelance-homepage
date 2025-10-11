import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ThemeToggle } from "@/components/theme-toggle"
import { ContactForm } from "@/components/contact-form"
import { Github, Linkedin, Mail, Code, Palette, Zap } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Code className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="font-semibold text-lg">Alex Johnson</span>
          </div>
          <ThemeToggle />
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="mb-6">
            <Badge variant="secondary" className="mb-4">
              Available for Projects
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Freelance Developer
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              I create modern, responsive web applications using React, Next.js, and TypeScript. Let's bring your ideas
              to life with clean code and exceptional user experiences.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="text-lg px-8" asChild>
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>

          <div className="flex justify-center gap-6">
            <a href="https://github.com" className="text-muted-foreground hover:text-foreground transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com" className="text-muted-foreground hover:text-foreground transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:alex@example.com" className="text-muted-foreground hover:text-foreground transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What I Do</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Specialized services to help your business succeed online
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Code className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Web Development</h3>
                <p className="text-muted-foreground mb-4">
                  Custom websites and web applications built with modern technologies like React, Next.js, and
                  TypeScript.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">Next.js</Badge>
                  <Badge variant="secondary">TypeScript</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Palette className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">UI/UX Design & Rapid Prototyping</h3>
                <p className="text-muted-foreground mb-4">
                  Lightning-fast mockups, demos, and prototypes using cutting-edge codegen tools like v0.app. From
                  concept to interactive prototype in minutes, not days.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">v0.app</Badge>
                  <Badge variant="secondary">Rapid Prototyping</Badge>
                  <Badge variant="secondary">Interactive Demos</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Performance</h3>
                <p className="text-muted-foreground mb-4">
                  Fast, optimized applications that provide smooth user experiences and excellent SEO performance.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">SEO</Badge>
                  <Badge variant="secondary">Core Web Vitals</Badge>
                  <Badge variant="secondary">Optimization</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Work Together</h2>
            <p className="text-lg text-muted-foreground">
              Ready to start your project? Send me a message and let's discuss how I can help.
            </p>
          </div>

          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8 px-4">
        <div className="container mx-auto max-w-6xl text-center text-muted-foreground">
          <p>&copy; 2024 Alex Johnson. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
