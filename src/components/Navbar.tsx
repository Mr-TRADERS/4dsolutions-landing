import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  return (
    <header className="w-full">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 min-w-0">
            <div className="size-8 rounded-md bg-primary/20 border border-primary/30" />
            <Link href="/" className="text-base font-semibold truncate">
              4D Solutions
            </Link>
          </div>

          <nav className="hidden md:flex items-center justify-center gap-6 text-sm">
            <Link href="#features" className="hover:text-primary transition-colors">Features</Link>
            <Link href="#pricing" className="hover:text-primary transition-colors">Pricing</Link>
            <Link href="#solutions" className="hover:text-primary transition-colors">Solutions</Link>
            <Link href="#resources" className="hover:text-primary transition-colors">Resources</Link>
            <Link href="#contact" className="hover:text-primary transition-colors">Contact</Link>
          </nav>

          <div className="flex items-center gap-2">
            <Button variant="secondary" size="sm" asChild>
              <Link href="#login">Login</Link>
            </Button>
            <Button size="sm" className="font-semibold" asChild>
              <Link href="#signup">Join up</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}


