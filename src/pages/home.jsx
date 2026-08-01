import { Link } from "react-router-dom";
import {
  TrendingUp,
  Monitor,
  LayoutGrid,
  Search,
  Share2,
  Target,
  Settings,
  Zap,
  BadgeCheck,
  Handshake,
  Headphones,
  Sparkles,
  Image as ImageIcon,
} from "lucide-react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const services = [
  {
    icon: Monitor,
    title: "Website Development",
    desc: "Professional websites built for trust, speed, and business growth.",
  },
  {
    icon: LayoutGrid,
    title: "Custom Software",
    desc: "CRM, billing, inventory and business management systems tailored to your workflow.",
  },
  {
    icon: Search,
    title: "SEO",
    desc: "Helping your business become discoverable where customers are already searching.",
  },
  {
    icon: Share2,
    title: "Social Media",
    desc: "Creative strategies designed to strengthen your brand and increase engagement.",
  },
  {
    icon: Target,
    title: "Meta Advertising",
    desc: "Performance-focused campaigns that generate measurable enquiries.",
  },
  {
    icon: Settings,
    title: "Business Automation",
    desc: "Reducing manual work through intelligent software solutions.",
  },
];

const whyChooseUs = [
  { icon: Target, title: "Built Around Results", desc: "We measure success through business outcomes rather than just completed projects." },
  { icon: Zap, title: "Modern Technology", desc: "Fast. Secure. Scalable. Future-ready." },
  { icon: BadgeCheck, title: "Founder-Led Execution", desc: "Every project is personally reviewed before delivery." },
  { icon: Handshake, title: "Long-Term Partnership", desc: "Our relationship doesn't end when your website goes live." },
  { icon: Headphones, title: "Long-Term Support", desc: "Launching a website is only the beginning. We continue supporting businesses as they grow." },
  { icon: Sparkles, title: "Continuous Innovation", desc: "We constantly improve our processes, technology stack, and solutions to deliver better outcomes." },
];

const blogPosts = [
  { date: "May 20, 2026", title: "How a Fast Website Can Grow Your Business" },
  { date: "May 10, 2026", title: "SEO Checklist for Small Businesses" },
  { date: "May 2, 2026", title: "Why Custom Web Applications Matter" },
];

export default function Home() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="bg-white py-16 lg:py-[120px] overflow-hidden">
        <div className="max-w-container mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <p className="section-eyebrow">Technology · Design · Growth</p>
            <h1 className="text-4xl md:text-5xl font-bold leading-[1.1] mb-6">
              Building Digital Systems That Power Business Growth.
            </h1>
            <p className="text-gray-500 leading-relaxed mb-3 max-w-lg">
              At ZeroPoint Labs, we don't just build websites — we engineer digital experiences that help
              businesses attract customers, streamline operations, and scale confidently.
            </p>
            <p className="text-gray-500 leading-relaxed mb-8 max-w-lg">
              From business websites and custom software to SEO, branding, and digital marketing, every
              solution is designed with measurable business outcomes in mind.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="btn-primary">Start Your Project</Link>
              <Link to="/services" className="btn-outline">View Our Work</Link>
            </div>
          </div>

          {/* Abstract mockup composition — swap for a real product/device shot when ready */}
          <div className="relative h-[420px] flex items-center justify-center">
            <div className="absolute w-72 h-48 bg-brandGray rounded-card border border-borderGray shadow-card -rotate-6 left-4 top-6" />
            <div className="absolute w-80 h-52 bg-white rounded-card border border-borderGray shadow-cardHover right-6 top-0 p-4 animate-[float_6s_ease-in-out_infinite]">
              <div className="flex gap-1.5 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-brandRed" />
                <span className="w-2.5 h-2.5 rounded-full bg-borderGray" />
                <span className="w-2.5 h-2.5 rounded-full bg-borderGray" />
              </div>
              <div className="space-y-2">
                <div className="h-3 w-3/4 bg-brandGray rounded" />
                <div className="h-3 w-1/2 bg-brandGray rounded" />
                <div className="h-16 w-full bg-brandGray rounded mt-3" />
              </div>
            </div>
            <div className="absolute w-40 h-40 bg-brandRed/10 rounded-full blur-2xl bottom-0 left-10" />
            <div className="absolute bottom-4 right-16 w-16 h-16 rounded-2xl bg-white border border-borderGray shadow-card flex items-center justify-center">
              <TrendingUp className="text-brandRed w-7 h-7" />
            </div>
          </div>
        </div>
      </section>

      {/* COMPANY INTRODUCTION */}
      <section className="bg-brandGray py-16 lg:py-[120px]">
        <div className="max-w-container mx-auto px-6 lg:px-10 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Technology That Solves Business Problems.</h2>
          <p className="text-gray-600 leading-relaxed mb-2">
            Every business has unique challenges. Some struggle to generate leads. Some lose customers
            because of outdated systems. Others simply lack a professional digital presence.
          </p>
          <p className="text-gray-600 leading-relaxed">
            ZeroPoint Labs exists to solve those challenges through thoughtfully designed technology. We
            partner with businesses to build digital products that create long-term value — not temporary
            trends.
          </p>
        </div>
      </section>

      {/* FEATURED SERVICES */}
      <section className="bg-white py-16 lg:py-[120px]">
        <div className="max-w-container mx-auto px-6 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="section-eyebrow">What We Do</p>
            <h2 className="text-3xl md:text-4xl font-bold">Featured Services</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="card-hover bg-white border border-borderGray rounded-card p-8 shadow-card">
                <div className="w-12 h-12 rounded-xl bg-brandRed/10 flex items-center justify-center mb-5">
                  <Icon className="text-brandRed w-6 h-6" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{desc}</p>
                <Link to="/services" className="link-underline text-brandRed text-sm font-semibold">
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-brandGray py-16 lg:py-[120px]">
        <div className="max-w-container mx-auto px-6 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">We Think Like Business Owners.</h2>
            <p className="text-gray-500">
              Technology should support your business — not complicate it. Every project starts by
              understanding your goals before a single design or line of code is created.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-card p-7 border border-borderGray card-hover">
                <Icon className="text-brandRed w-6 h-6 mb-4" />
                <h3 className="font-semibold mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESULTS (dark section — real testimonials to be swapped in later) */}
      <section className="bg-brandBlack text-white py-16 lg:py-[120px]">
        <div className="max-w-container mx-auto px-6 lg:px-10">
          <p className="uppercase text-brandRed text-xs font-bold tracking-[0.2em] mb-3 text-center">
            Real Work. Real Results.
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Results That Speak For Themselves</h2>
          <p className="text-gray-400 text-center max-w-xl mx-auto mb-12">
            Instead of making exaggerated claims, we focus on measurable outcomes.
          </p>
          <div className="grid sm:grid-cols-2 gap-6 mb-10">
            <div className="border border-white/10 rounded-card p-8">
              <p className="text-4xl font-bold text-brandRed mb-2">14,500+</p>
              <p className="text-gray-300 text-sm">
                YouTube subscribers generated within 11 Shorts, for a food business.
              </p>
            </div>
            <div className="border border-white/10 rounded-card p-8">
              <p className="text-4xl font-bold text-brandRed mb-2">50+</p>
              <p className="text-gray-300 text-sm">
                Qualified leads generated through Meta Ads for a construction company, in one month.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {["CRM", "Billing Software", "Business Websites", "Business Automation"].map((tag) => (
              <span key={tag} className="border border-white/20 rounded-full px-5 py-2 text-sm text-gray-300">
                {tag}
              </span>
            ))}
          </div>
          <p className="text-center text-gray-500 text-xs mt-8">
            Some projects remain confidential to respect our clients' privacy.
          </p>
        </div>
      </section>

      {/* LATEST BLOG */}
      <section className="bg-white py-16 lg:py-[120px]">
        <div className="max-w-container mx-auto px-6 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="section-eyebrow">Latest Blog</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Insights, Ideas & Digital Growth</h2>
            <p className="text-gray-500">
              Articles that help business owners understand technology, marketing, branding and digital
              transformation.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.title}
                className="card-hover border border-borderGray rounded-card overflow-hidden shadow-card"
              >
                <div className="h-44 bg-brandGray flex items-center justify-center">
                  <ImageIcon className="text-gray-300 w-8 h-8" />
                </div>
                <div className="p-6">
                  <p className="text-xs text-gray-400 mb-2">{post.date}</p>
                  <h3 className="font-semibold mb-2">{post.title}</h3>
                  <Link to="/blog" className="link-underline text-brandRed text-sm font-semibold">
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/blog"
              className="border border-brandRed text-brandRed font-semibold px-7 py-3 rounded-btn hover:bg-brandRed hover:text-white transition inline-block"
            >
              View All Articles
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-brandRed to-brandRedDark">
        <div className="max-w-container mx-auto px-6 lg:px-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready To Build Something Bigger Than A Website?
          </h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Let's create digital solutions that help your business grow.
          </p>
          <Link
            to="/contact"
            className="bg-white text-brandBlack font-semibold px-8 py-3.5 rounded-btn hover:bg-brandGray transition inline-block"
          >
            Start Your Project
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
