import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, User, FileText, LucideIcon } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';

interface ContactInfo {
  icon: LucideIcon;
  title: string;
  details: string;
  description: string;
  color: string;
}

interface SocialLink {
  name: string;
  href: string;
  color: string;
}

interface FAQ {
  question: string;
  answer: string;
}

export function ContactSection() {
  const contactInfo: ContactInfo[] = [
    {
      icon: Mail,
      title: 'Email',
      details: 'contact@istedeeptech.edu',
      description: 'Send us a message anytime',
      color: 'text-primary'
    },
    {
      icon: Phone,
      title: 'Phone',
      details: '+91 98765 43210',
      description: 'Call us during office hours',
      color: 'text-accent'
    },
    {
      icon: MapPin,
      title: 'Location',
      details: 'Tech Campus, Innovation Block',
      description: 'Visit us in person',
      color: 'text-circuit-green'
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: 'Mon-Fri 9:00 AM - 6:00 PM',
      description: 'We\'re available to help',
      color: 'text-tech-orange'
    }
  ];

  const socialLinks: SocialLink[] = [
    { name: 'LinkedIn', href: '#', color: 'hover:text-blue-400' },
    { name: 'GitHub', href: '#', color: 'hover:text-gray-400' },
    { name: 'Twitter', href: '#', color: 'hover:text-blue-400' },
    { name: 'Instagram', href: '#', color: 'hover:text-pink-400' },
    { name: 'Discord', href: '#', color: 'hover:text-indigo-400' },
  ];

  const faqs: FAQ[] = [
    {
      question: 'How can I join ISTE Deep Tech?',
      answer: 'Students can join by attending our recruitment events or contacting us directly. We welcome members from all technical backgrounds.'
    },
    {
      question: 'Are there membership fees?',
      answer: 'Basic membership is free for students. Premium membership with additional benefits is available at a nominal fee.'
    },
    {
      question: 'What events do you organize?',
      answer: 'We organize workshops, hackathons, tech talks, seminars, and annual conferences covering various technology domains.'
    },
    {
      question: 'Can I collaborate on projects?',
      answer: 'Absolutely! We encourage collaborative projects and provide mentorship and resources to help you succeed.'
    }
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-card/20 to-background">
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <defs>
              <pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="1" fill="currentColor" opacity="0.4"/>
                <circle cx="5" cy="15" r="0.5" fill="currentColor" opacity="0.3"/>
                <circle cx="15" cy="5" r="0.5" fill="currentColor" opacity="0.3"/>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#dots)" className="text-primary"/>
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
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to dive deeper into the world of technology with us? Whether you have questions, 
            want to join our community, or explore collaboration opportunities, we'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-8 text-foreground">
              Contact Information
            </h3>

            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 10 }}
                  className="group"
                >
                  <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary hover:bg-card/80 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className={`w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <info.icon className={`w-6 h-6 ${info.color}`} />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-foreground mb-1">
                            {info.title}
                          </h4>
                          <p className="text-foreground font-medium mb-1">
                            {info.details}
                          </p>
                          <p className="text-muted-foreground text-sm">
                            {info.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-4 text-foreground">
                Follow Us
              </h4>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      scale: 1.1,
                      y: -3,
                      transition: { duration: 0.2 }
                    }}
                    whileTap={{ scale: 0.95 }}
                    className={`group relative overflow-hidden px-4 py-2 bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg text-muted-foreground ${social.color} transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20`}
                  >
                    <motion.div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-600" />
                    <span className="relative z-10">{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Map placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              viewport={{ once: true }}
              className="mt-8"
            >
              <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/70 hover:border-accent hover:shadow-lg hover:shadow-accent/20 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-12 h-12 text-primary mx-auto mb-2" />
                      <p className="text-muted-foreground">
                        Interactive Campus Map
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/70 hover:border-primary hover:shadow-lg hover:shadow-primary/20 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground flex items-center gap-2">
                  <MessageSquare className="w-6 h-6 text-primary" />
                  Send us a Message
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1, duration: 0.6 }}
                      viewport={{ once: true }}
                    >
                      <Label htmlFor="firstName" className="flex items-center gap-2 text-foreground mb-2">
                        <User className="w-4 h-4 text-primary" />
                        First Name *
                      </Label>
                      <Input
                        id="firstName"
                        placeholder="Enter your first name"
                        className="bg-input-background border-border/50 focus:border-primary"
                        required
                      />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.15, duration: 0.6 }}
                      viewport={{ once: true }}
                    >
                      <Label htmlFor="lastName" className="flex items-center gap-2 text-foreground mb-2">
                        <User className="w-4 h-4 text-accent" />
                        Last Name *
                      </Label>
                      <Input
                        id="lastName"
                        placeholder="Enter your last name"
                        className="bg-input-background border-border/50 focus:border-primary"
                        required
                      />
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <Label htmlFor="email" className="flex items-center gap-2 text-foreground mb-2">
                      <Mail className="w-4 h-4 text-circuit-green" />
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      className="bg-input-background border-border/50 focus:border-primary"
                      required
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <Label htmlFor="subject" className="flex items-center gap-2 text-foreground mb-2">
                      <FileText className="w-4 h-4 text-tech-orange" />
                      Subject *
                    </Label>
                    <Input
                      id="subject"
                      placeholder="What's this about?"
                      className="bg-input-background border-border/50 focus:border-primary"
                      required
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <Label htmlFor="message" className="flex items-center gap-2 text-foreground mb-2">
                      <MessageSquare className="w-4 h-4 text-primary" />
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us more about your inquiry..."
                      rows={6}
                      className="bg-input-background border-border/50 focus:border-primary resize-none"
                      required
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button 
                        type="submit" 
                        size="lg" 
                        className="w-full group relative overflow-hidden bg-gradient-to-r from-primary via-accent to-primary hover:from-accent hover:via-primary hover:to-accent transition-all duration-500 shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/50 border border-primary/30 hover:border-primary/60"
                      >
                        <motion.div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                        <span className="relative z-10">Send Message</span>
                        <motion.div
                          whileHover={{ x: 5, rotate: 15 }}
                          transition={{ duration: 0.2 }}
                          className="relative z-10"
                        >
                          <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </motion.div>
                      </Button>
                    </motion.div>
                  </motion.div>
                </form>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="mt-6 text-center"
                >
                  <p className="text-sm text-muted-foreground">
                    We typically respond within 24 hours. For urgent matters, 
                    please call us directly.
                  </p>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold mb-8 text-center text-foreground">
            Frequently Asked Questions
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="bg-card/30 backdrop-blur-sm border-border/50 hover:bg-card/60 hover:border-circuit-green hover:shadow-lg hover:shadow-circuit-green/20 transition-all duration-300">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold text-foreground mb-3">
                      {faq.question}
                    </h4>
                    <p className="text-muted-foreground">
                      {faq.answer}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}