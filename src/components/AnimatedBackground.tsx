import { motion } from 'framer-motion';

const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-slate-900/20" />
      
      {/* Geometric Network */}
      <div className="absolute inset-0">
        {/* Animated Lines */}
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={`line-${i}`}
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: [0, 1, 0], 
              opacity: [0, 0.6, 0],
              rotate: [0, 360]
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              delay: i * 1.5,
              ease: "easeInOut"
            }}
            className="absolute"
            style={{
              left: `${20 + i * 10}%`,
              top: `${15 + i * 8}%`,
              width: '2px',
              height: `${60 + i * 10}px`,
              background: `linear-gradient(to bottom, hsl(var(--electric-indigo) / 0.5), hsl(var(--teal-accent) / 0.3))`,
              transformOrigin: 'center',
            }}
          />
        ))}
        
        {/* Floating Geometric Shapes */}
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={`shape-${i}`}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.sin(i) * 20, 0],
              rotate: [0, 180, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 6 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.8,
              ease: "easeInOut",
            }}
            className="absolute opacity-20"
            style={{
              left: `${Math.random() * 90}%`,
              top: `${Math.random() * 80}%`,
              width: `${8 + i * 2}px`,
              height: `${8 + i * 2}px`,
              background: i % 3 === 0 
                ? 'hsl(var(--electric-indigo))' 
                : i % 3 === 1 
                ? 'hsl(var(--teal-accent))' 
                : 'hsl(var(--electric-indigo-glow))',
              borderRadius: i % 2 === 0 ? '50%' : '2px',
            }}
          />
        ))}
        
        {/* Pulsing Nodes */}
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={`node-${i}`}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 1.2,
            }}
            className="absolute rounded-full"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + i * 12}%`,
              width: '4px',
              height: '4px',
              background: 'hsl(var(--electric-indigo))',
              boxShadow: '0 0 20px hsl(var(--electric-indigo) / 0.6)',
            }}
          />
        ))}
      </div>
      
      {/* Subtle Wave Effect */}
      <motion.div
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-0 opacity-5"
        style={{
          background: `linear-gradient(90deg, 
            transparent 0%, 
            hsl(var(--electric-indigo)) 25%, 
            hsl(var(--teal-accent)) 50%, 
            hsl(var(--electric-indigo)) 75%, 
            transparent 100%
          )`,
          backgroundSize: '200% 100%',
        }}
      />
    </div>
  );
};

export default AnimatedBackground;