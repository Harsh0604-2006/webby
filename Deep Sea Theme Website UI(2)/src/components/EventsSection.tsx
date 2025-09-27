import { motion } from 'motion/react';
import { Calendar, MapPin, Users, ArrowRight, Clock, Star } from 'lucide-react';
import { Card, CardContent, CardHeader } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  attendees: number;
  type: string;
  status: 'upcoming' | 'completed';
  featured: boolean;
  image?: string;
}

export function EventsSection() {
  const events: Event[] = [
    {
      id: 1,
      title: 'Deep Tech Summit 2024',
      description: 'Annual flagship event featuring cutting-edge technology presentations, industry expert talks, and networking opportunities.',
      date: '2024-03-15',
      time: '09:00 AM',
      location: 'Main Auditorium',
      attendees: 250,
      type: 'Conference',
      status: 'upcoming',
      featured: true,
      image: 'https://images.unsplash.com/photo-1737505599162-d9932323a889?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbmV0d29yayUyMG5vZGVzJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NTg1Mjk2NDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      id: 2,
      title: 'AI & Machine Learning Workshop',
      description: 'Hands-on workshop covering fundamentals of AI, machine learning algorithms, and practical implementation.',
      date: '2024-02-28',
      time: '02:00 PM',
      location: 'Computer Lab 1',
      attendees: 80,
      type: 'Workshop',
      status: 'upcoming',
      featured: false,
    },
    {
      id: 3,
      title: 'Blockchain Development Bootcamp',
      description: 'Intensive 3-day bootcamp on blockchain technology, smart contracts, and decentralized application development.',
      date: '2024-04-10',
      time: '10:00 AM',
      location: 'Innovation Hub',
      attendees: 60,
      type: 'Bootcamp',
      status: 'upcoming',
      featured: false,
    },
    {
      id: 4,
      title: 'Tech Talk: Quantum Computing',
      description: 'Expert discussion on quantum computing principles, applications, and future prospects in technology.',
      date: '2024-02-20',
      time: '04:00 PM',
      location: 'Seminar Hall',
      attendees: 120,
      type: 'Tech Talk',
      status: 'completed',
      featured: false,
    },
    {
      id: 5,
      title: 'Cybersecurity Awareness Session',
      description: 'Essential cybersecurity practices, threat awareness, and protective measures for digital safety.',
      date: '2024-01-25',
      time: '11:00 AM',
      location: 'Conference Room',
      attendees: 95,
      type: 'Session',
      status: 'completed',
      featured: false,
    },
    {
      id: 6,
      title: 'Web3 & DeFi Symposium',
      description: 'Exploring the future of web3 technologies, decentralized finance, and emerging digital economies.',
      date: '2024-05-15',
      time: '01:00 PM',
      location: 'Auditorium B',
      attendees: 180,
      type: 'Symposium',
      status: 'upcoming',
      featured: true,
    },
  ];

  const upcomingEvents = events.filter(event => event.status === 'upcoming');
  const pastEvents = events.filter(event => event.status === 'completed');

  const getStatusColor = (status: string): string => {
    return status === 'upcoming' ? 'bg-circuit-green/20 text-circuit-green' : 'bg-muted text-muted-foreground';
  };

  const getTypeColor = (type: string): string => {
    const colors: Record<string, string> = {
      'Conference': 'bg-primary/20 text-primary',
      'Workshop': 'bg-accent/20 text-accent',
      'Bootcamp': 'bg-tech-orange/20 text-tech-orange',
      'Tech Talk': 'bg-circuit-green/20 text-circuit-green',
      'Session': 'bg-secondary/20 text-secondary-foreground',
      'Symposium': 'bg-primary/20 text-primary',
    };
    return colors[type] || 'bg-muted text-muted-foreground';
  };

  return (
    <section id="events" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-card/20 to-background">
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 200 200">
            <defs>
              <pattern id="circuit" width="40" height="40" patternUnits="userSpaceOnUse">
                <rect width="40" height="40" fill="none"/>
                <path d="M0 20h40M20 0v40" stroke="currentColor" strokeWidth="0.5" opacity="0.5"/>
                <circle cx="20" cy="20" r="2" fill="currentColor" opacity="0.3"/>
              </pattern>
            </defs>
            <rect width="200" height="200" fill="url(#circuit)" className="text-primary"/>
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
            Events & Activities
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Dive into our comprehensive calendar of technical events, workshops, and learning opportunities 
            designed to enhance your skills and expand your network in the tech community.
          </p>
        </motion.div>

        {/* Upcoming Events */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold mb-8 text-foreground">Upcoming Events</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className={`h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary hover:bg-card/80 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 ${
                  event.featured ? 'ring-2 ring-primary/20 hover:ring-primary/50' : ''
                }`}>
                  <CardHeader className="p-0">
                    {event.image && (
                      <div className="relative overflow-hidden rounded-t-lg">
                        <ImageWithFallback
                          src={event.image}
                          alt={event.title}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        {event.featured && (
                          <div className="absolute top-4 right-4">
                            <Badge className="bg-circuit-green/20 text-circuit-green">
                              <Star className="w-3 h-3 mr-1" />
                              Featured
                            </Badge>
                          </div>
                        )}
                      </div>
                    )}
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge className={getTypeColor(event.type)}>
                        {event.type}
                      </Badge>
                      <Badge className={getStatusColor(event.status)}>
                        {event.status}
                      </Badge>
                    </div>
                    
                    <h4 className="text-lg font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                      {event.title}
                    </h4>
                    
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                      {event.description}
                    </p>

                    <div className="space-y-2 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-primary" />
                        <span>{new Date(event.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-accent" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-circuit-green" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-tech-orange" />
                        <span>{event.attendees} attendees</span>
                      </div>
                    </div>

                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button 
                        variant="outline" 
                        className="w-full group relative overflow-hidden border-2 border-primary/50 hover:border-primary bg-background/50 backdrop-blur-sm hover:bg-primary/10 shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/40"
                      >
                        <motion.div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-700" />
                        <span className="relative z-10">Learn More</span>
                        <motion.div
                          whileHover={{ x: 3 }}
                          transition={{ duration: 0.2 }}
                          className="relative z-10"
                        >
                          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </motion.div>
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Past Events */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-8 text-foreground">Past Events</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {pastEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="h-full bg-card/30 backdrop-blur-sm border-border/30 hover:bg-card/60 hover:border-accent hover:shadow-lg hover:shadow-accent/20 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge className={getTypeColor(event.type)}>
                        {event.type}
                      </Badge>
                      <Badge className={getStatusColor(event.status)}>
                        Completed
                      </Badge>
                    </div>
                    
                    <h4 className="text-lg font-semibold mb-3 text-foreground">
                      {event.title}
                    </h4>
                    
                    <p className="text-muted-foreground text-sm mb-4">
                      {event.description}
                    </p>

                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(event.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        <span>{event.attendees} attended</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                Don't Miss Our Next Event
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Stay updated with our latest events and workshops. Join our community 
                to receive notifications about upcoming technical sessions and learning opportunities.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg" 
                  className="group relative overflow-hidden bg-gradient-to-r from-primary via-accent to-primary hover:from-accent hover:via-primary hover:to-accent transition-all duration-500 shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/50 border border-primary/30 hover:border-primary/60 px-8"
                >
                  <motion.div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                  <span className="relative z-10">Subscribe to Updates</span>
                </Button>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}