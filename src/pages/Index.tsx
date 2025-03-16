import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import SectionHeading from "@/components/SectionHeading";
import FeatureCard from "@/components/FeatureCard";
import TestimonialCard from "@/components/TestimonialCard";
import { Badge } from "@/components/ui/badge"

import CTASection from "@/components/CTASection";
import { 
  ArrowRight, 
  BrainCircuit, 
  ChartBar, 
  Check, 
  CloudCog, 
  Code, 
  Database,
  Layers, 
  Lock, 
  MessageSquare, 
  PanelRight, 
  UserCheck, 
  Zap
} from "lucide-react";
import { motion } from "framer-motion";
import SolutionsOverview from "@/components/home/SolutionsOverview";
import ServiceSteps from "@/components/home/ServiceSteps";
import AIPoweredRecruitment from "@/components/home/AIPoweredRecruitment";
import MissionVision from "@/components/home/MissionVision";
import FeatureHighlights from "@/components/home/FeatureHighlights";

const Index = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 -z-10" />
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] bg-repeat opacity-5 -z-10" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
               
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Adept AI Vision
                </h1>
                <p className="text-xl text-muted-foreground max-w-lg">
                Adept AI simplifies compliance and onboarding for workforce management and IT workforces, enhancing efficiency and accuracy in matchmaking through innovative Al-driven SaaS solutions.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline">
                  Book a Demo
                </Button>
              </div>

              {/* <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 border-2 border-background"
                    />
                  ))}
                </div>
                <p>
                  Trusted by <span className="font-medium text-foreground">2,000+</span> companies worldwide
                </p>
              </div> */}
            </div>

            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg blur opacity-30 animate-pulse"></div>
              <div className="relative bg-background rounded-lg shadow-xl overflow-hidden border">
              <img src="https://mediumvioletred-cobra-190797.hostingersite.com/wp-content/uploads/2025/03/20945602-1536x1024.jpg.webp" margin-top="50px" alt="AI Dashboard" width={800} height={600} className="w-full h-auto" />
              </div>

             
            </div>
          </div>
        </div>
      </section>
      {/* New Sections */}
      <SolutionsOverview />
      <ServiceSteps />
      <AIPoweredRecruitment />
      <MissionVision />
      <FeatureHighlights />

      {/* Features Section */}
      {/* <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="Key Capabilities"
            title="Powerful AI Solutions for Every Need"
            description="Our suite of AI-powered tools helps businesses streamline operations, gain insights, and deliver exceptional customer experiences."
          />
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {[
              {
                icon: BrainCircuit,
                title: "AI Decision Intelligence",
                description: "Make smarter decisions with AI-powered analytics and recommendations based on your data."
              },
              {
                icon: MessageSquare,
                title: "Natural Language Processing",
                description: "Understand and generate human language for customer service, content creation, and more."
              },
              {
                icon: ChartBar,
                title: "Predictive Analytics",
                description: "Forecast trends and behaviors with high accuracy to stay ahead of market changes."
              },
              {
                icon: Layers,
                title: "Data Processing",
                description: "Process and analyze massive datasets to uncover hidden patterns and opportunities."
              },
              {
                icon: CloudCog,
                title: "Cloud Integration",
                description: "Seamlessly integrate with existing cloud infrastructure for maximum efficiency."
              },
              {
                icon: Lock,
                title: "Security & Compliance",
                description: "Enterprise-grade security with full compliance with industry regulations."
              }
            ].map((feature, index) => (
              <motion.div key={index} variants={fadeIn}>
                <FeatureCard
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section> */}

      {/* How It Works Section */}
    
      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading 
            eyebrow="Client Testimonials"
            title="What Our Clients Say"
            description="Don't just take our word for it. Here's what businesses like yours have achieved with Adept AI."
          />
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mt-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {[
              {
                quote: "Implementing Adept AI's predictive analytics has transformed our inventory management, reducing costs by 35% and improving fulfillment times.",
                author: "Sarah Johnson",
                role: "VP Operations",
                company: "Global Retail Inc."
              },
              {
                quote: "The natural language processing capabilities have revolutionized our customer service. Response times are down 60% while satisfaction scores are up 40%.",
                author: "Michael Chen",
                role: "CTO",
                company: "TechSolutions Ltd"
              },
              {
                quote: "Adept AI helped us process years of unstructured data to uncover insights we never knew existed. It's been a game-changer for our strategy.",
                author: "Emma Rodriguez",
                role: "Data Director",
                company: "FinServe Group"
              }
            ].map((testimonial, index) => (
              <motion.div key={index} variants={fadeIn}>
                <TestimonialCard
                  quote={testimonial.quote}
                  author={testimonial.author}
                  role={testimonial.role}
                  company={testimonial.company}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Integrations Preview */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <SectionHeading 
            eyebrow="Seamless Connectivity"
            title="Integrate with Your Favorite Tools"
            description="Adept AI connects seamlessly with the tools and platforms you already use."
          />
          
          <motion.div 
            className="flex flex-wrap justify-center gap-8 mt-12 max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {/* {Array.from({ length: 2 }).map((_, index) => (
              <motion.div 
                key={index}
                className="w-24 h-24 bg-white rounded-lg shadow-sm flex items-center justify-center p-4"
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { 
                    opacity: 1, 
                    scale: 1,
                    transition: { duration: 0.4 }
                  }
                }}
              >
                <div className="w-full h-full bg-gray-200 rounded flex items-center justify-center">

                </div>
              </motion.div>
            ))} */}
          <div className="w-60 p-4 h-24  rounded-lg shadow-sm flex items-center justify-center p-4">
          <div className="w-full h-full bg-gray-350 rounded flex items-center justify-center">
            <img src="https://mediumvioletred-cobra-190797.hostingersite.com/wp-content/uploads/2025/03/LI-Logo-768x187.png.webp" alt="" />
          </div>
          </div>
          <div className="w-60 p-3 h-24 rounded-lg shadow-sm flex items-center justify-center p-4">
          <div className="w-full h-full bg-gray-350 rounded flex items-center justify-center">
           <img src="https://mediumvioletred-cobra-190797.hostingersite.com/wp-content/uploads//2025/03/ceipal-logo.svg" alt="" />
          </div>
          </div>
          </motion.div>

          
          <div className="text-center mt-12">
            <Link to="/integrations">
              <Button variant="outline" size="lg" className="group">
                View All Integrations
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection 
        title="Ready to Transform Your Business with AI?"
        description="Join hundreds of forward-thinking companies already leveraging our AI solutions."
        primaryButtonText="Get Started"
        primaryButtonLink="/contact"
        secondaryButtonText="Book a Demo"
        secondaryButtonLink="/contact"
        background="gradient"
      />
    </div>
  );
};

export default Index;
