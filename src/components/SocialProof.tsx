export default function SocialProof() {
  return (
    <section className="w-full py-12 sm:py-14">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-muted-foreground">Trusted by industries, research labs, and organizations worldwide.</p>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 items-center opacity-80">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="h-10 rounded-md border bg-card" />
          ))}
        </div>
      </div>
    </section>
  )
}


