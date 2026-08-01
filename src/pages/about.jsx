import {
  Compass,
  Telescope,
  Award,
  ShieldCheck,
  BookOpen,
  Lightbulb,
  Handshake,
  TrendingUp,
  Repeat,
  Briefcase,
  GraduationCap,
  CheckCircle,
  Rocket,
  Image as ImageIcon,
} from "lucide-react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import teamPhoto from "../assets/team-photo.jpg";

const coreValues = [
  { icon: Award, title: "Ownership", desc: "Every project deserves our full commitment." },
  { icon: ShieldCheck, title: "Integrity", desc: "We communicate honestly and deliver responsibly." },
  { icon: BookOpen, title: "Continuous Learning", desc: "Technology changes every day. So do we." },
  { icon: Lightbulb, title: "Innovation", desc: "We question existing processes and search for better solutions." },
  { icon: Handshake, title: "Long-Term Relationships", desc: "Great partnerships are built on trust." },
];

const stats = [
  { icon: TrendingUp, label: "Growing Portfolio" },
  { icon: Repeat, label: "Recurring Clients" },
  { icon: Briefcase, label: "Multiple Business Industries" },
  { icon: GraduationCap, label: "Student-Led Team" },
  { icon: CheckCircle, label: "Real Client Projects" },
  { icon: Rocket, label: "Growing Every Month" },
];

export default function About() {
  return (
    <>
      <Navbar />

      {/* COMPANY STORY */}
      <section className="bg-white py-16 lg:py-[120px]">
        <div className="max-w-container mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <p className="section-eyebrow">Our Story</p>
            <h1 className="text-4xl md:text-5xl font-bold leading-[1.1] mb-6">
              More Than A <span className="text-brandRed">Digital Agency.</span>
            </h1>
            <p className="text-gray-500 leading-relaxed mb-6 max-w-lg">
              ZeroPoint Labs was founded with a simple belief:
            </p>
            <blockquote className="border-l-4 border-brandRed pl-5 font-semibold text-lg mb-6 max-w-lg">
              Technology should solve business problems — not create more of them.
            </blockquote>
            <p className="text-gray-500 leading-relaxed mb-4 max-w-lg">
              We partner with startups, local businesses, and growing companies to build websites,
              software, and digital systems that improve customer experience, streamline operations, and
              strengthen online visibility.
            </p>
            <p className="text-gray-500 leading-relaxed max-w-lg">
              From the first discovery call to project delivery, every solution is carefully planned
              around your business goals rather than a one-size-fits-all template.
            </p>
          </div>

          {/* Swap for a real studio/workspace photo */}
          <div className="relative h-96 rounded-card bg-brandGray border border-borderGray shadow-card flex flex-col items-center justify-center gap-2">
            <ImageIcon className="text-gray-300 w-10 h-10" />
            <span className="text-xs text-gray-400">Studio / workspace photo</span>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="bg-brandGray py-16 lg:py-[120px]">
        <div className="max-w-container mx-auto px-6 lg:px-10">
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-4">
            Today we help businesses grow digitally. Tomorrow we aim to build intelligent technology
            products that create real-world impact.
          </p>
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white rounded-card p-9 border border-borderGray card-hover">
              <div className="w-12 h-12 rounded-xl bg-brandRed/10 flex items-center justify-center mb-5">
                <Compass className="text-brandRed w-6 h-6" />
              </div>
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-brandRed mb-2">Our Mission</p>
              <p className="text-gray-600 leading-relaxed">
                To help businesses embrace digital transformation through practical, reliable, and
                scalable technology solutions while building long-term relationships based on trust,
                quality, and measurable results.
              </p>
            </div>
            <div className="bg-white rounded-card p-9 border border-borderGray card-hover">
              <div className="w-12 h-12 rounded-xl bg-brandRed/10 flex items-center justify-center mb-5">
                <Telescope className="text-brandRed w-6 h-6" />
              </div>
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-brandRed mb-2">Our Vision</p>
              <p className="text-gray-600 leading-relaxed">
                To grow ZeroPoint Labs into a technology company that develops products and solutions
                capable of creating meaningful impact across businesses, industries, and communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="bg-brandGray py-16 lg:py-[120px]">
        <div className="max-w-container mx-auto px-6 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="section-eyebrow">What Drives Us</p>
            <h2 className="text-3xl md:text-4xl font-bold">Core Values</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {coreValues.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-card p-6 border border-borderGray text-center card-hover">
                <Icon className="text-brandRed w-6 h-6 mx-auto mb-4" />
                <h3 className="font-semibold mb-2 text-sm">{title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="bg-white py-16 lg:py-[120px]">
        <div className="max-w-container mx-auto px-6 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="section-eyebrow">Our Team</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-5">A Team Built Around Growth</h2>
            <p className="text-gray-500 leading-relaxed">
              ZeroPoint Labs is powered by a collaborative team of developers, designers, marketers,
              editors, strategists and creative thinkers working together toward one shared vision.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="rounded-card overflow-hidden border border-borderGray shadow-card">
              <img
                src={teamPhoto}
                alt="The ZeroPoint Labs team"
                className="w-full h-auto object-cover"
              />
            </div>
            <p className="text-center text-gray-400 text-sm mt-4">The ZeroPoint Labs team</p>
          </div>
        </div>
      </section>

      {/* STATISTICS — qualitative badges only; no numbers invented */}
      <section className="bg-brandBlack text-white py-16 lg:py-[120px]">
        <div className="max-w-container mx-auto px-6 lg:px-10">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Growing With Every Project</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {stats.map(({ icon: Icon, label }) => (
              <div key={label} className="border border-white/10 rounded-card p-7 text-center">
                <Icon className="text-brandRed w-6 h-6 mx-auto mb-3" />
                <p className="font-semibold">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section className="bg-white py-16 lg:py-[120px]">
        <div className="max-w-container mx-auto px-6 lg:px-10 text-center max-w-3xl">
          <p className="section-eyebrow">Achievements</p>
          <p className="text-gray-600 leading-relaxed text-lg">
            Successfully delivered websites, business software, CRM systems, digital marketing campaigns
            and social media growth strategies for businesses across different sectors.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
