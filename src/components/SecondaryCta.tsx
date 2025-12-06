"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function SecondaryCta() {
  return (
    <section className="w-full py-16 sm:py-20">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="rounded-2xl bg-gradient-to-br from-primary/20 via-primary/10 to-transparent border p-10 sm:p-12 text-center"
        >
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
            Start monitoring smarter today with EMS.
          </h3>
          <div className="mt-6">
            <Button size="lg" asChild>
              <Link href="#get-started">Get Started Free</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
