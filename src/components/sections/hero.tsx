import Unicorn from "@/components/Unicorn";
import { profile } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative mt-10 mx-0 mb-0 overflow-hidden bg-nd-inverse text-nd-high-em-text text-left border-b border-nd-border-light"
      aria-labelledby="hero-title"
    >
      <Unicorn src="/src/img/index/hero-bg.json" />
      <div className="flex min-h-175">
        <div className="max-w-screen-2xl w-full mx-auto px-5 md:px-8 xl:px-10 flex flex-col justify-between relative pt-12 xl:pt-41.25 md:pb-8 xl:pb-10 min-h-[calc(100svh-2.5rem)]">
          <div className="max-w-5xl">
            <h1 className="nd-heading-2xl" id="hero-title">
              Shipping full-stack <br />
              <span className="font-light">
                products with intelligent, real-time systems.
              </span>
            </h1>
            <p className="text-nd-mid-em-text font-medium max-md:mt-5 md:mt-6 nd-body-xl xl:max-w-110">
              I&apos;m {profile.shortName}, a {profile.role} specializing in
              scalable multi-tenant platforms, async state machines, and
              polished interfaces.
            </p>
            <div className="mt-13">
              <button
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-11 px-6 rounded-full md:h-12 nd-body-m py-3 bg-nd-cta text-nd-inverse hover:bg-nd-primary/90! md:tracking-[-0.18px]"
                aria-label="See what shipped"
              >
                <span>See what shipped</span>
                <span className="-mr-3 p-1 size-8! bg-nd-inverse text-nd-cta rounded-full inline-flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    fill="currentColor"
                    className="size-4! block"
                    aria-hidden="true"
                  >
                    <path d="M6 13h6v4l6-5-6-5v4H6z" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
