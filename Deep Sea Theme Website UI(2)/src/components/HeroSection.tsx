import { motion } from 'motion/react';
import { ArrowRight, Cpu, Network, Binary, LucideIcon } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useMemo } from 'react';

interface Stat {
  number: string;
  label: string;
}

export function HeroSection() {
  const stats: Stat[] = [
    { number: '500+', label: 'Members' },
    { number: '50+', label: 'Projects' },
    { number: '25+', label: 'Events' },
  ];

  const techIcons: LucideIcon[] = [Cpu, Network, Binary];

  // Pre-generate binary strings to avoid Math.random() calls during render
  const binaryStrings1 = useMemo(() => 
    Array.from({ length: 25 }, () => 
      Math.random().toString(2).substring(2, 10)
    ), []
  );
  
  const binaryStrings2 = useMemo(() => 
    Array.from({ length: 25 }, () => 
      Math.random().toString(2).substring(2, 10)
    ), []
  );

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with tech pattern overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-secondary/20">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1757397584789-8b2c5bfcdbc3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHRlY2hub2xvZ3klMjBjaXJjdWl0JTIwYm9hcmR8ZW58MXx8fHwxNzU4NjEzMzc4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Circuit board technology background"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
      </div>

      {/* Animated tech elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Binary code streams */}
        <motion.div
          animate={{
            y: ['-100vh', '100vh'],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'linear',
            repeatType: 'loop',
          }}
          className="absolute left-10 text-circuit-green/20 text-xs font-mono"
        >
          <div className="space-y-2">
            {binaryStrings1.map((binary, i) => (
              <div key={i}>
                {binary}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          animate={{
            y: ['100vh', '-100vh'],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: 'linear',
            repeatType: 'loop',
          }}
          className="absolute right-10 text-primary/20 text-xs font-mono"
        >
          <div className="space-y-2">
            {binaryStrings2.map((binary, i) => (
              <div key={i}>
                {binary}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Floating tech icons */}
        {techIcons.map((Icon, index) => (
          <motion.div
            key={index}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: 4 + index,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className={`absolute ${
              index === 0 ? 'top-20 left-20' : index === 1 ? 'top-40 right-20' : 'bottom-40 left-1/4'
            }`}
          >
            <Icon className="w-8 h-8 text-accent/30" />
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-circuit-green bg-clip-text text-transparent"
          >
            Deep Tech Innovation
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            Diving deep into the digital ocean of technology education and innovation. 
            Join ISTE's mission to explore the depths of computing excellence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg" 
                className="group relative overflow-hidden bg-gradient-to-r from-primary via-accent to-primary hover:from-accent hover:via-primary hover:to-accent transition-all duration-500 shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/50 border border-primary/30 hover:border-primary/60"
              >
                <motion.div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                <span className="relative z-10">Explore Our Depths</span>
                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                  className="relative z-10"
                >
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </motion.div>
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                variant="outline" 
                size="lg" 
                className="group relative overflow-hidden border-2 border-primary/50 hover:border-primary bg-background/20 backdrop-blur-sm hover:bg-primary/10 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/40"
              >
                <motion.div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-800" />
                <span className="relative z-10">Join the Current</span>
              </Button>
            </motion.div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="grid grid-cols-3 gap-8 mt-16 max-w-md mx-auto"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-primary rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
}