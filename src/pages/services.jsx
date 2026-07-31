import React from "react";
import "./Services.css";
import {
  FaLaptopCode,
  FaCode,
  FaRocket,
  FaSearch,
  FaBullhorn,
  FaRobot,
  FaArrowRight,
} from "react-icons/fa";

function Services() {
  const services = [
    {
      icon: <FaLaptopCode />,
      title: "Website Development",
      description:
        "Modern, responsive, and high-performing business websites designed to build trust and generate leads.",
    },
    {
      icon: <FaCode />,
      title: "Web Application Development",
      description:
        "Custom web applications that simplify workflows, automate operations, and improve efficiency.",
    },
    {
      icon: <FaRocket />,
      title: "Landing Pages",
      description:
        "High-converting landing pages built for marketing campaigns, product launches, and lead generation.",
    },
    {
      icon: <FaSearch />,
      title: "SEO Optimization",
      description:
        "Improve your search rankings and attract more customers with technical and on-page SEO strategies.",
    },
    {
      icon: <FaBullhorn />,
      title: "Social Media Management",
      description:
        "Creative content, consistent branding, and social media strategies that grow your online presence.",
    },
    {
      icon: <FaRobot />,
      title: "Business Automation",
      description:
        "Custom CRM systems, billing software, dashboards, and automation solutions tailored to your business.",
    },
  ];

  const reasons = [
    "Business-First Approach",
    "Custom Digital Solutions",
    "Performance & SEO Focused",
    "Founder-Led Quality Assurance",
    "Long-Term Technical Support",
    "Continuous Innovation",
  ];

  const process = [
    {
      number: "01",
      title: "Understand",
      text: "We learn about your business, goals, and customers before starting any project.",
    },
    {
      number: "02",
      title: "Plan",
      text: "Every project begins with a clear strategy, wireframes, and execution roadmap.",
    },
    {
      number: "03",
      title: "Build",
      text: "We develop modern, scalable digital solutions using the latest technologies.",
    },
    {
      number: "04",
      title: "Launch",
      text: "Your project is tested, optimized, and deployed with attention to every detail.",
    },
    {
      number: "05",
      title: "Grow",
      text: "We continue supporting your business with updates, improvements, and digital growth strategies.",
    },
  ];

  return (
    <div className="services-page">

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <span className="tag">OUR SERVICES</span>

          <h1>
            Digital Solutions That
            <br />
            <span>Help Businesses Grow.</span>
          </h1>

          <p>
            We build websites, web applications, and digital solutions that
            strengthen your online presence, improve productivity, and create
            measurable business value.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">Start Your Project</button>
            <button className="secondary-btn">View Our Work</button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="services-grid-section">
        <div className="section-title">
          <h2>Our Expertise</h2>
          <p>
            Every solution is tailored to your business needs—not built from a
            one-size-fits-all template.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">{service.icon}</div>

              <h3>{service.title}</h3>

              <p>{service.description}</p>

              <button>
                Learn More <FaArrowRight />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-us">
        <div className="section-title">
          <h2>Why Businesses Choose ZeroPoint Labs</h2>

          <p>
            We combine strategy, technology, and long-term support to create
            digital solutions that deliver measurable results.
          </p>
        </div>

        <div className="reasons-grid">
          {reasons.map((reason, index) => (
            <div className="reason-card" key={index}>
              <h3>{String(index + 1).padStart(2, "0")}</h3>
              <p>{reason}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="process-section">
        <div className="section-title">
          <h2>Our Process</h2>

          <p>
            Every project follows a structured workflow to ensure quality,
            transparency, and long-term success.
          </p>
        </div>

        <div className="timeline">
          {process.map((step, index) => (
            <div className="timeline-item" key={index}>
              <div className="number">{step.number}</div>

              <div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>Let's Build Something Meaningful.</h2>

        <p>
          Whether you're launching a startup, improving an existing business,
          or strengthening your digital presence, we're here to help turn your
          ideas into impactful digital solutions.
        </p>

        <button className="primary-btn">Start Your Project</button>
      </section>

    </div>
  );
}

export default Services;