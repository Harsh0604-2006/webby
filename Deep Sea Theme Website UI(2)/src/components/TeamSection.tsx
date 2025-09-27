import { motion } from 'motion/react';
import { Linkedin, Github, Mail, ExternalLink } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import presidentImage from 'figma:asset/13fd3ad9f1cb0b1b81080a86f953fb264c1c069a.png';

interface SocialLinks {
  linkedin: string;
  github: string;
  email: string;
}

interface TeamMember {
  id: number;
  name: string;
  role: string;
  department: string;
  year: string;
  bio: string;
  skills: string[];
  achievements?: string[];
  social: SocialLinks;
  avatar?: string;
}

export function TeamSection() {
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: 'Tanish Shetty',
      role: 'President',
      department: 'Artificial Intelligence and Data Science',
      year: 'Final Year',
      bio: 'Passionate about AI/ML and leading the vision for ISTE\'s technological advancement.',
      skills: ['Machine Learning', 'Python', 'Leadership', 'Research'],
      achievements: ['Google Summer of Code 2023', 'Published Research Paper'],
      social: {
        linkedin: '#',
        github: '#',
        email: 'arjun@iste.com'
      },
      avatar: presidentImage
    },
    {
      id: 2,
      name: 'Priya Patel',
      role: 'Vice President',
      department: 'Information Technology',
      year: 'Third Year',
      bio: 'Expert in full-stack development and cybersecurity, driving innovation in web technologies.',
      skills: ['React', 'Node.js', 'Cybersecurity', 'DevOps'],
      achievements: ['Hackathon Winner 2023', 'AWS Certified'],
      social: {
        linkedin: '#',
        github: '#',
        email: 'priya@iste.com'
      }
    },
    {
      id: 3,
      name: 'Rahul Kumar',
      role: 'Technical Secretary',
      department: 'Electronics Engineering',
      year: 'Third Year',
      bio: 'Blockchain enthusiast and IoT developer, bridging hardware and software innovations.',
      skills: ['Blockchain', 'IoT', 'Embedded Systems', 'Solidity'],
      achievements: ['Blockchain Patent Filed', 'Smart City Project Lead'],
      social: {
        linkedin: '#',
        github: '#',
        email: 'rahul@iste.com'
      }
    },
    {
      id: 4,
      name: 'Sneha Reddy',
      role: 'Events Coordinator',
      department: 'Computer Science',
      year: 'Second Year',
      bio: 'Creative event organizer with expertise in UI/UX design and digital marketing.',
      skills: ['UI/UX Design', 'Event Management', 'Digital Marketing', 'Figma'],
      achievements: ['Design Competition Winner', 'TEDx Organizer'],
      social: {
        linkedin: '#',
        github: '#',
        email: 'sneha@iste.com'
      }
    },
    {
      id: 5,
      name: 'Vikram Singh',
      role: 'Technical Lead',
      department: 'Software Engineering',
      year: 'Final Year',
      bio: 'Cloud architecture specialist and open-source contributor with industry experience.',
      skills: ['Cloud Computing', 'Microservices', 'Docker', 'Kubernetes'],
      achievements: ['Open Source Contributor', 'Cloud Certification'],
      social: {
        linkedin: '#',
        github: '#',
        email: 'vikram@iste.com'
      }
    },
    {
      id: 6,
      name: 'Ananya Joshi',
      role: 'Research Head',
      department: 'Data Science',
      year: 'Third Year',
      bio: 'Data science researcher focusing on deep learning and natural language processing.',
      skills: ['Deep Learning', 'NLP', 'Data Analysis', 'TensorFlow'],
      achievements: ['Research Publication', 'Data Science Olympiad Winner'],
      social: {
        linkedin: '#',
        github: '#',
        email: 'ananya@iste.com'
      }
    },
  ];

  const departments = ['All', 'Computer Science', 'Information Technology', 'Electronics Engineering', 'Software Engineering', 'Data Science'];

  return (
    <section id="team" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-card/30">
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 60 60">
            <defs>
              <pattern id="hexagon" width="30" height="26" patternUnits="userSpaceOnUse">
                <polygon points="15,2 25,8 25,18 15,24 5,18 5,8" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.6"/>
              </pattern>
            </defs>
            <rect width="60" height="60" fill="url(#hexagon)" className="text-primary"/>
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
            Our Team
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Meet the passionate individuals who drive innovation and excellence at ISTE Deep Tech. 
            Our diverse team brings together expertise from various technical domains to create 
            an exceptional learning environment.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary hover:bg-card/80 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 overflow-hidden">
                <CardContent className="p-6">
                  {/* Avatar */}
                  <div className="relative mb-6">
                    <div className="w-24 h-24 mx-auto rounded-full overflow-hidden ring-4 ring-primary/20 group-hover:ring-primary/40 transition-all duration-300">
                      {member.avatar ? (
                        <ImageWithFallback
                          src={member.avatar}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-xl font-bold">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </div>
                      )}
                    </div>
                    {/* Role badge */}
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-primary/20 text-primary border-primary/30">
                        {member.role}
                      </Badge>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="text-center mb-4">
                    <h3 className="text-xl font-bold text-foreground mb-1">
                      {member.name}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {member.department} • {member.year}
                    </p>
                  </div>

                  {/* Bio */}
                  <p className="text-muted-foreground text-sm mb-4 text-center leading-relaxed">
                    {member.bio}
                  </p>

                  {/* Skills */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1 justify-center">
                      {member.skills.slice(0, 3).map((skill, i) => (
                        <Badge key={i} variant="outline" className="text-xs border-accent/30 text-accent">
                          {skill}
                        </Badge>
                      ))}
                      {member.skills.length > 3 && (
                        <Badge variant="outline" className="text-xs border-muted text-muted-foreground">
                          +{member.skills.length - 3}
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Achievements */}
                  {member.achievements && member.achievements.length > 0 && (
                    <div className="mb-4">
                      <h4 className="text-xs font-semibold text-circuit-green mb-2 text-center">
                        Key Achievements
                      </h4>
                      <div className="space-y-1">
                        {member.achievements.slice(0, 2).map((achievement, i) => (
                          <div key={i} className="text-xs text-muted-foreground text-center">
                            • {achievement}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Social Links */}
                  <div className="flex justify-center space-x-2 pt-4 border-t border-border/50">
                    <motion.div whileHover={{ scale: 1.2, rotate: 15 }} whileTap={{ scale: 0.9 }}>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="group w-8 h-8 p-0 hover:bg-primary/20 border border-transparent hover:border-primary/30 hover:shadow-lg hover:shadow-primary/30 relative overflow-hidden"
                      >
                        <motion.div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
                        <Linkedin className="w-4 h-4 text-primary relative z-10" />
                      </Button>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.2, rotate: -15 }} whileTap={{ scale: 0.9 }}>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="group w-8 h-8 p-0 hover:bg-accent/20 border border-transparent hover:border-accent/30 hover:shadow-lg hover:shadow-accent/30 relative overflow-hidden"
                      >
                        <motion.div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
                        <Github className="w-4 h-4 text-accent relative z-10" />
                      </Button>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.2, rotate: 15 }} whileTap={{ scale: 0.9 }}>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="group w-8 h-8 p-0 hover:bg-circuit-green/20 border border-transparent hover:border-circuit-green/30 hover:shadow-lg hover:shadow-circuit-green/30 relative overflow-hidden"
                      >
                        <motion.div className="absolute inset-0 bg-gradient-to-r from-transparent via-circuit-green/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
                        <Mail className="w-4 h-4 text-circuit-green relative z-10" />
                      </Button>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Departments */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold mb-8 text-center text-foreground">
            Departments & Specializations
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.slice(1).map((dept, index) => (
              <motion.div
                key={dept}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="bg-card/30 backdrop-blur-sm border-border/50 hover:border-primary hover:bg-card/60 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <h4 className="text-lg font-semibold text-foreground mb-2">
                      {dept}
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      {teamMembers.filter(member => member.department === dept).length} members
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Join Team CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                Join Our Team
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Are you passionate about technology and innovation? Join our dynamic team 
                and help shape the future of technical education. We're always looking for 
                talented individuals who share our vision.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    size="lg" 
                    className="group relative overflow-hidden bg-gradient-to-r from-primary via-accent to-primary hover:from-accent hover:via-primary hover:to-accent transition-all duration-500 shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/50 border border-primary/30 hover:border-primary/60"
                  >
                    <motion.div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                    <span className="relative z-10">Apply Now</span>
                    <motion.div
                      whileHover={{ x: 3, rotate: 15 }}
                      transition={{ duration: 0.2 }}
                      className="relative z-10"
                    >
                      <ExternalLink className="ml-2 w-4 h-4" />
                    </motion.div>
                  </Button>
                </motion.div>
                <Button variant="outline" size="lg" className="border-primary/50 hover:bg-primary/10">
                  Learn More
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}