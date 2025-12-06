"use client"

import Link from "next/link"
import { GithubIcon, LinkedinIcon, TwitterIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function Footer() {
  return (
    <footer className="w-full border-t bg-gradient-to-b from-background to-muted/30">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-10"
        >
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              <div className="size-8 rounded-md bg-primary/20 border border-primary/30" />
              <span className="text-lg font-semibold">4D Solutions</span>
            </div>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
            Empowering organizations with technology and design excellence.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold mb-3">Product</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="#features" className="hover:text-primary">Features</Link></li>
              <li><Link href="#pricing" className="hover:text-primary">Pricing</Link></li>
              <li><Link href="#solutions" className="hover:text-primary">Solutions</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-3">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="#resources" className="hover:text-primary">Resources</Link></li>
              <li><Link href="#contact" className="hover:text-primary">Contact</Link></li>
              <li><Link href="#about" className="hover:text-primary">About Us</Link></li>
            </ul>
          </div>

          {/* Call to Action */}
          <div>
            <h4 className="text-sm font-semibold mb-3">Get Started</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Ready to experience smarter monitoring? Start free today.
            </p>
            <Button size="sm" asChild>
              <Link href="#get-started">Get Started Free</Link>
            </Button>
          </div>
        </motion.div>

        {/* Bottom Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 border-t pt-6"
        >
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} 4D Solutions. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-muted-foreground">
            <Link href="#" aria-label="Twitter" className="hover:text-primary">
              <TwitterIcon className="size-4" />
            </Link>
            <Link href="#" aria-label="GitHub" className="hover:text-primary">
              <GithubIcon className="size-4" />
            </Link>
            <Link href="#" aria-label="LinkedIn" className="hover:text-primary">
              <LinkedinIcon className="size-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
