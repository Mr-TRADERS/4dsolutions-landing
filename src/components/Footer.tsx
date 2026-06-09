"use client"

import Link from "next/link"
import { GithubIcon, LinkedinIcon, TwitterIcon, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function Footer() {
  return (
    <footer className="w-full border-t bg-gradient-to-b from-background via-blue-50/30 to-background relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Subtle gradient glow */}
        <div
          className="absolute bottom-0 left-0 w-full h-64"
          style={{
            background: "linear-gradient(to top, rgba(30,157,241,0.04), transparent)",
          }}
        />
        
        {/* Decorative circles */}
        <div className="absolute bottom-0 right-10 w-96 h-96 bg-blue-100/15 rounded-full blur-3xl" />
        <div className="absolute top-0 left-10 w-80 h-80 bg-blue-50/20 rounded-full blur-3xl" />
        
        {/* Dot pattern */}
        <div 
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(30,157,241,0.6) 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12"
        >
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="size-10 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 border border-blue-400/30 shadow-lg shadow-blue-500/20 flex items-center justify-center">
                <div className="size-4 bg-white rounded-sm" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                4D Solutions
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              Empowering organizations with technology and design excellence.
            </p>
            
            {/* Social links - moved here */}
            <div className="flex items-center gap-3">
              <Link 
                href="#" 
                aria-label="Twitter" 
                className="group flex items-center justify-center size-9 rounded-lg bg-muted/50 hover:bg-blue-500 border border-muted-foreground/10 hover:border-blue-400 transition-all duration-300"
              >
                <TwitterIcon className="size-4 text-muted-foreground group-hover:text-white transition-colors" />
              </Link>
              <Link 
                href="#" 
                aria-label="GitHub" 
                className="group flex items-center justify-center size-9 rounded-lg bg-muted/50 hover:bg-blue-500 border border-muted-foreground/10 hover:border-blue-400 transition-all duration-300"
              >
                <GithubIcon className="size-4 text-muted-foreground group-hover:text-white transition-colors" />
              </Link>
              <Link 
                href="#" 
                aria-label="LinkedIn" 
                className="group flex items-center justify-center size-9 rounded-lg bg-muted/50 hover:bg-blue-500 border border-muted-foreground/10 hover:border-blue-400 transition-all duration-300"
              >
                <LinkedinIcon className="size-4 text-muted-foreground group-hover:text-white transition-colors" />
              </Link>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-bold mb-4 text-gray-900">Product</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <Link href="#features" className="group inline-flex items-center hover:text-blue-600 transition-colors duration-200">
                  Features
                  <ArrowUpRight className="size-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="#solutions" className="group inline-flex items-center hover:text-blue-600 transition-colors duration-200">
                  Solutions
                  <ArrowUpRight className="size-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold mb-4 text-gray-900">Company</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <Link href="#resources" className="group inline-flex items-center hover:text-blue-600 transition-colors duration-200">
                  Resources
                  <ArrowUpRight className="size-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="#contact" className="group inline-flex items-center hover:text-blue-600 transition-colors duration-200">
                  Contact
                  <ArrowUpRight className="size-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="#about" className="group inline-flex items-center hover:text-blue-600 transition-colors duration-200">
                  About Us
                  <ArrowUpRight className="size-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Call to Action */}
          <div>
            <h4 className="text-sm font-bold mb-4 text-gray-900">Get Started</h4>
            <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
              Ready to experience smarter monitoring? Start free today.
            </p>
            <Button 
              size="sm" 
              asChild
              className="group bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300"
            >
              <Link href="#get-started" className="inline-flex items-center gap-2">
                Get Started Free
                <ArrowUpRight className="size-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </Button>
          </div>
        </motion.div>

        {/* Bottom Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-muted-foreground/10"
        >
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} 4D Solutions. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6 text-xs text-muted-foreground">
            <Link href="#privacy" className="hover:text-blue-600 transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link href="#terms" className="hover:text-blue-600 transition-colors duration-200">
              Terms of Service
            </Link>
            <Link href="#cookies" className="hover:text-blue-600 transition-colors duration-200">
              Cookies
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}