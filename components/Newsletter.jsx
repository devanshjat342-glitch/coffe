import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-darkCoffee/90 relative overflow-hidden border-t border-b border-coffeeBorder/40">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-caramel/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass-card p-8 sm:p-14 rounded-4xl border border-caramel/25 shadow-premium"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-caramel/15 border border-caramel/30 text-xs font-semibold uppercase tracking-[0.2em] text-cream mb-4">
            <Sparkles className="w-3.5 h-3.5 text-caramel" />
            <span>The BREWÉ Dispatch</span>
          </div>

          {/* Heading */}
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight mb-4">
            Stay In The Loop
          </h2>

          {/* Supporting Text */}
          <p className="text-cream/70 text-sm sm:text-base font-light max-w-lg mx-auto mb-8">
            Get new coffee drops, offers and brewing stories delivered to your inbox.
          </p>

          {/* Form */}
          {subscribed ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-5 rounded-2xl bg-caramel/20 border border-caramel/40 flex items-center justify-center gap-3 text-cream max-w-md mx-auto"
            >
              <CheckCircle2 className="w-5 h-5 text-caramel" />
              <p className="text-sm font-medium">Welcome to the inner circle! Check your inbox soon.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <div className="relative flex-1">
                <Mail className="w-5 h-5 text-caramel absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full pl-12 pr-4 py-4 rounded-full bg-espresso border border-coffeeBorder text-cream placeholder-cream/40 focus:outline-none focus:border-caramel focus:ring-1 focus:ring-caramel text-sm transition-all"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                type="submit"
                className="px-8 py-4 rounded-full bg-caramel hover:bg-caramelHover text-white font-semibold text-xs sm:text-sm uppercase tracking-wider shadow-glow transition-all flex items-center justify-center gap-2"
              >
                <span>Subscribe</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </form>
          )}

          <p className="text-[11px] text-cream/40 mt-4">
            We respect your inbox. Unsubscribe anytime with a single click.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
