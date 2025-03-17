
import { useEffect } from "react";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const teamMembers = [
    {
      name: "Abhishek Mathur ",
      role: "CEO/CTO",
      bio: "Former Director of Product at Amazon. Passionate about creating intuitive, impactful AI products that solve real business problems. MBA from Stanford.",
      image: "https://media.licdn.com/dms/image/v2/D5603AQH17hKVQLG0WA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1700089015269?e=1747872000&v=beta&t=pGd8z70C9tS6ZaynBi9iS7yFUWWzCY2ZpBudjMc5tVU",
    },
    {
      name: "Prateek Mathur",
      role: "COO",
      bio: "Former AI Research Lead at MIT with 15+ years of experience in machine learning and AI systems. Led the development of groundbreaking natural language processing technologies.",
      image: "https://mediumvioletred-cobra-190797.hostingersite.com/wp-content/uploads/2025/03/Screenshot-2025-03-01-163958-600x609.png",
    },
    {
      name: "Rushi Shahiwala",
      role: "Board of Advisor",
      bio: "Previously Head of Engineering at Google AI. Expert in scalable infrastructure and deep learning systems. Has published numerous papers on neural networks and reinforcement learning.",
      image: "https://mediumvioletred-cobra-190797.hostingersite.com/wp-content/uploads/2025/03/Screenshot-2025-03-01-164027.png",
    },
    {
      name: "Shital Bhamare",
      role: "Human Resource Manager",
      bio: "Former Director of Product at Amazon. Passionate about creating intuitive, impactful AI products that solve real business problems. MBA from Stanford.",
      image: "https://mediumvioletred-cobra-190797.hostingersite.com/wp-content/uploads/2025/03/Screenshot-2025-03-01-164048-600x674.png",
    },
  ];

  // const timeline = [
  //   {
  //     year: "2018",
  //     title: "Company Founded",
  //     description: "Adept AI was founded by Dr. Sarah Chen and Michael Rodriguez with a vision to make artificial intelligence accessible and valuable for businesses of all sizes.",
  //   },
  //   {
  //     year: "2019",
  //     title: "First Product Launch",
  //     description: "Released our flagship language processing API, establishing Adept AI as an emerging player in the enterprise AI market.",
  //   },
  //   {
  //     year: "2020",
  //     title: "Series A Funding",
  //     description: "Secured $12M in Series A funding to accelerate product development and expand our engineering team.",
  //   },
  //   {
  //     year: "2021",
  //     title: "Enterprise Solutions",
  //     description: "Launched our comprehensive enterprise AI platform, serving our first Fortune 500 clients across financial services and healthcare sectors.",
  //   },
  //   {
  //     year: "2022",
  //     title: "Global Expansion",
  //     description: "Opened offices in London and Singapore, expanding our global presence and customer base to over 20 countries.",
  //   },
  //   {
  //     year: "2023",
  //     title: "Series B Funding",
  //     description: "Raised $45M in Series B funding to further accelerate growth and innovation in our AI products and services.",
  //   },
  // ];

  return (
    <div className="pt-28">
      {/* Hero Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.span
              className="inline-block px-4 py-1.5 mb-6 text-sm font-medium rounded-full bg-primary/10 text-primary"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              Our Story
            </motion.span>

            <motion.h1
              className="text-4xl sm:text-5xl font-display font-bold mb-6"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, delay: 0.2 },
                },
              }}
            >
              About Adept AI
            </motion.h1>

            <motion.p
              className="text-xl text-muted-foreground mb-8"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, delay: 0.4 },
                },
              }}
            >
              We're on a mission to make artificial intelligence accessible,
              practical, and transformative for businesses worldwide.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0, transition: { duration: 0.6 } }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-display font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-8">
                At Adept AI, our mission is to democratize artificial intelligence
                by creating powerful, intuitive AI solutions that solve real business
                challenges across industries. We believe that AI should be accessible
                to companies of all sizes, not just tech giants with unlimited resources.
              </p>
              <p className="text-lg text-muted-foreground">
                We're committed to developing ethical AI systems that augment human
                capabilities rather than replace them, fostering a future where
                humans and AI work together to achieve remarkable outcomes.
              </p>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0, transition: { duration: 0.6 } }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-xl transform rotate-3 scale-105" />
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
                alt="Team collaboration"
                className="relative rounded-xl shadow-lg w-full h-auto object-cover"
              />
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto mt-24">
            <motion.div
              className="relative md:order-2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0, transition: { duration: 0.6 } }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 bg-gradient-to-bl from-indigo-500/20 to-transparent rounded-xl transform -rotate-3 scale-105" />
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80"
                alt="Future vision"
                className="relative rounded-xl shadow-lg w-full h-auto object-cover"
              />
            </motion.div>

            <motion.div
              className="md:order-1"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0, transition: { duration: 0.6 } }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-display font-bold mb-6">Our Vision</h2>
              <p className="text-lg text-muted-foreground mb-8">
                We envision a world where AI enhances every aspect of business
                operations, from decision-making to customer experiences. Our goal
                is to be at the forefront of this transformation, creating AI
                solutions that are not just powerful but also transparent,
                trustworthy, and aligned with human values.
              </p>
              <p className="text-lg text-muted-foreground">
                By 2030, we aim to help over 10,000 organizations worldwide leverage
                the power of AI to solve their most complex challenges, driving
                innovation and creating value across industries and communities.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="Leadership"
            title="Meet Our Team"
            description="The passionate experts behind Adept AI's innovation and success."
          />

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mt-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
                variants={fadeIn}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-primary text-sm font-medium mb-4">{member.role}</p>
                  {/* <p className="text-muted-foreground text-sm">{member.bio}</p> */}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

    
      {/* Values Section */}
      {/* <section className="py-20 bg-gradient-to-br from-indigo-600 to-purple-700 text-white">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="Our Principles"
            title="Core Values"
            description="The fundamental beliefs that guide our decisions and actions."
            className="text-white"
          />

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mt-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[
              {
                title: "Innovation",
                description: "We constantly push the boundaries of what's possible with AI, never settling for the status quo.",
              },
              {
                title: "Integrity",
                description: "We build AI systems that are transparent, explainable, and aligned with ethical principles.",
              },
              {
                title: "Impact",
                description: "We measure our success by the tangible value we create for our customers and their businesses.",
              },
              {
                title: "Inclusivity",
                description: "We design AI that works for everyone, avoiding biases and promoting diversity in all its forms.",
              },
              {
                title: "Collaboration",
                description: "We believe in the power of humans and AI working together to achieve outcomes neither could alone.",
              },
              {
                title: "Continuous Learning",
                description: "We embrace a growth mindset, constantly evolving our knowledge, products, and approaches.",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20"
                variants={fadeIn}
              >
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-white/80">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section> */}

      {/* CTA Section */}
      <CTASection
        title="Join Our Team"
        description="We're always looking for talented individuals who share our passion for AI and innovation."
        primaryButtonText="View Careers"
        primaryButtonLink="#"
        secondaryButtonText="Contact Us"
        secondaryButtonLink="/contact"
        background="light"
      />
    </div>
  );
};

export default About;
