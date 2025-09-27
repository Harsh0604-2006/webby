import { motion } from 'motion/react';
import { Code2, Users, Award, Target, Lightbulb, Rocket, LucideIcon } from 'lucide-react';
import { Card, CardContent } from './ui/card';

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface Stat {
  number: string;
  label: string;
  color: string;
}

export function AboutSection() {
  const features: Feature[] = [
    {
      icon: Code2,
      title: 'Technical Excellence',
      description: 'Mastering cutting-edge technologies and programming languages to build tomorrow\'s solutions.',
    },
    {
      icon: Users,
      title: 'Collaborative Learning',
      description: 'Creating a vibrant community where knowledge flows freely and innovation thrives.',
    },
    {
      icon: Award,
      title: 'Professional Growth',
      description: 'Developing industry-ready skills through workshops, projects, and mentorship programs.',
    },
    {
      icon: Target,
      title: 'Goal-Oriented',
      description: 'Setting clear objectives and achieving milestones through strategic planning and execution.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation Hub',
      description: 'Fostering creativity and breakthrough thinking in technology and engineering.',
    },
    {
      icon: Rocket,
      title: 'Future Ready',
      description: 'Preparing members for the evolving tech landscape with emerging technologies.',
    },
  ];

  const stats: Stat[] = [
    { number: '5+', label: 'Years Active', color: 'text-primary' },
    { number: '500+', label: 'Active Members', color: 'text-accent' },
    { number: '100+', label: 'Projects Completed', color: 'text-circuit-green' },
    { number: '50+', label: 'Industry Partners', color: 'text-tech-orange' },
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-card/50">
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)" className="text-primary" />
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            About ISTE Deep Tech
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We are the Indian Society for Technical Education chapter dedicated to exploring 
            the deepest currents of technology innovation. Our mission is to create a thriving 
            ecosystem where students dive into advanced computing, emerging technologies, and 
            professional development.
          </p>
        </motion.div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="h-full bg-card/50 backdrop-blur-sm border-primary/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-primary">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To provide a comprehensive platform for technical education that bridges 
                  the gap between academic learning and industry requirements. We strive to 
                  cultivate innovation, foster collaboration, and develop future tech leaders 
                  who can navigate the complex digital landscape with confidence and expertise.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="h-full bg-card/50 backdrop-blur-sm border-accent/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-accent">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be the premier technology education organization that shapes the future 
                  of computing and engineering. We envision a world where our members become 
                  pioneers in their respective fields, driving technological advancement and 
                  creating solutions that benefit society while maintaining the highest 
                  standards of innovation and ethics.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Card className="h-full bg-card/30 backdrop-blur-sm border-border/50 hover:border-primary hover:bg-card/60 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
            <CardContent className="p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <div className={`text-3xl md:text-4xl font-bold ${stat.color} mb-2`}>
                      {stat.number}
                    </div>
                    <div className="text-muted-foreground text-sm">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}