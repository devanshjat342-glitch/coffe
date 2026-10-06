import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Sparkles,
  Send,
  CheckCircle2,
  ChevronDown,
  Instagram,
  Coffee
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: 'Cupping Session Booking',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', topic: 'Cupping Session Booking', message: '' });
  };

  const faqs = [
    {
      q: "How fresh will my coffee beans be?",
      a: "All online orders are roasted to order and dispatched within 48 hours of degassing. Every bag features a stamped roast date and degassing valve to guarantee optimal cup clarity."
    },
    {
      q: "Can you grind my beans for my specific equipment?",
      a: "Yes! During selection on any product page, choose your preparation method: Whole Beans, French Press, Pour Over / Aeropress, or Commercial Espresso grind. We calibrate our Mahlkönig EK43 grinders daily."
    },
    {
      q: "Do you offer private coffee tasting & brewing workshops?",
      a: "Absolutely. We host Saturday morning sensory cupping flights and latte art masterclasses at our flagship roasteries in Bangalore and Mumbai. Select 'Cupping Session Booking' in the contact form to reserve."
    },
    {
      q: "What is your return & replacement policy?",
      a: "If your brew does not meet your expectations for freshness or taste, contact our concierge within 7 days of delivery for a complimentary replacement roast or full refund."
    }
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen bg-espresso">
      {/* Background glow */}
      <div className="absolute top-28 left-1/3 w-[600px] h-[400px] bg-caramel/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border border-caramel/30 text-xs font-semibold uppercase tracking-[0.2em] text-cream mb-4">
            <Sparkles className="w-3.5 h-3.5 text-caramel" />
            <span>Connect & Visit</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-bold text-white tracking-tight mb-4">
            We'd Love To Hear From You
          </h1>

          <p className="text-cream/75 text-sm sm:text-base font-light">
            Whether you want to book a cupping session, inquire about wholesale beans, or simply talk coffee origin—our team is here.
          </p>
        </div>

        {/* Roastery Locations Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          
          {/* Bangalore Roastery */}
          <div className="glass-card p-6 sm:p-8 rounded-4xl border border-caramel/25 shadow-premium flex flex-col justify-between group">
            <div>
              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-6 bg-darkCoffee">
                <img
                  src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=900&auto=format&fit=crop"
                  alt="BREWÉ Bengaluru Roastery"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-caramel text-white text-[11px] font-bold uppercase tracking-wider shadow-glow">
                  Flagship Roastery & Lab
                </span>
              </div>

              <h3 className="font-serif text-2xl font-bold text-white mb-2">
                Bengaluru Roastery & Espresso Bar
              </h3>
              
              <ul className="space-y-3 text-xs sm:text-sm text-cream/70 font-light mb-6">
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-caramel flex-shrink-0 mt-0.5" />
                  <span>#482, 12th Main Road, HAL 2nd Stage, Indiranagar, Bengaluru, KA 560038</span>
                </li>
                <li className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-caramel flex-shrink-0" />
                  <span>Daily: 7:00 AM – 11:00 PM</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-caramel flex-shrink-0" />
                  <span>+91 98765 43210</span>
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-coffeeBorder/40 flex items-center justify-between text-xs">
              <span className="text-latte font-medium">Cupping sessions every Sat at 10 AM</span>
              <span className="text-caramel font-semibold">Walk-ins Welcome</span>
            </div>
          </div>

          {/* Mumbai Roastery */}
          <div className="glass-card p-6 sm:p-8 rounded-4xl border border-caramel/25 shadow-premium flex flex-col justify-between group">
            <div>
              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-6 bg-darkCoffee">
                <img
                  src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=900&auto=format&fit=crop"
                  alt="BREWÉ Mumbai Roastery"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-caramel text-white text-[11px] font-bold uppercase tracking-wider shadow-glow">
                  Coastal Roastery & Cafe
                </span>
              </div>

              <h3 className="font-serif text-2xl font-bold text-white mb-2">
                Mumbai Tasting Atelier
              </h3>
              
              <ul className="space-y-3 text-xs sm:text-sm text-cream/70 font-light mb-6">
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-caramel flex-shrink-0 mt-0.5" />
                  <span>Ground Floor, Perry Cross Rd, Off Pali Hill, Bandra West, Mumbai, MH 400050</span>
                </li>
                <li className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-caramel flex-shrink-0" />
                  <span>Daily: 8:00 AM – Midnight</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-caramel flex-shrink-0" />
                  <span>+91 98765 43211</span>
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-coffeeBorder/40 flex items-center justify-between text-xs">
              <span className="text-latte font-medium">Nitro cold brew tap room & outdoor garden</span>
              <span className="text-caramel font-semibold">Walk-ins Welcome</span>
            </div>
          </div>

        </div>

        {/* Contact Form & FAQ Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          
          {/* Left: Contact Form (6 cols) */}
          <div className="lg:col-span-6 glass-card p-8 sm:p-10 rounded-4xl border border-caramel/25 shadow-premium">
            <h3 className="font-serif text-2xl font-bold text-white mb-2">
              Send Us A Message
            </h3>
            <p className="text-xs text-cream/60 mb-6 font-light">
              We usually respond to all inquires and reservation requests within 2 business hours.
            </p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-caramel/20 border border-caramel flex items-center justify-center text-caramel mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="font-serif text-xl font-bold text-white mb-1">
                  Message Dispatched!
                </h4>
                <p className="text-xs text-cream/60 max-w-xs mx-auto mb-6">
                  Thank you for reaching out. One of our master roasters will connect with you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-full bg-espresso border border-coffeeBorder text-xs text-latte hover:text-white"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-xs uppercase tracking-wider text-latte block mb-1.5 font-medium">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Priyanshi Mehta"
                    className="w-full px-4 py-3 rounded-2xl bg-espresso border border-coffeeBorder text-sm text-cream placeholder-cream/30 focus:outline-none focus:border-caramel"
                  />
                </div>

                <div>
                  <label className="text-xs uppercase tracking-wider text-latte block mb-1.5 font-medium">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="priyanshi@domain.com"
                    className="w-full px-4 py-3 rounded-2xl bg-espresso border border-coffeeBorder text-sm text-cream placeholder-cream/30 focus:outline-none focus:border-caramel"
                  />
                </div>

                <div>
                  <label className="text-xs uppercase tracking-wider text-latte block mb-1.5 font-medium">
                    Topic of Interest
                  </label>
                  <select
                    value={formData.topic}
                    onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-espresso border border-coffeeBorder text-sm text-cream focus:outline-none focus:border-caramel cursor-pointer"
                  >
                    <option value="Cupping Session Booking">Cupping Session & Workshop Booking</option>
                    <option value="Table Reservation">Cafe Table Reservation</option>
                    <option value="Wholesale Coffee Supply">Wholesale Coffee & Bean Supply</option>
                    <option value="Feedback / Question">Feedback or Question</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs uppercase tracking-wider text-latte block mb-1.5 font-medium">
                    Your Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us what you're thinking..."
                    className="w-full px-4 py-3 rounded-2xl bg-espresso border border-coffeeBorder text-sm text-cream placeholder-cream/30 focus:outline-none focus:border-caramel resize-none"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-4 rounded-full bg-caramel hover:bg-caramelHover text-white text-xs uppercase tracking-wider font-semibold shadow-glow flex items-center justify-center gap-2 cursor-pointer transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>Transmit Note</span>
                </motion.button>
              </form>
            )}
          </div>

          {/* Right: FAQ Accordion (6 cols) */}
          <div className="lg:col-span-6 space-y-4">
            <div className="mb-6">
              <span className="text-xs uppercase tracking-[0.25em] text-caramel font-semibold block mb-1">
                Frequently Asked
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                Coffee Knowledge & Orders
              </h3>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, idx) => {
                const isOpen = activeFaq === idx;
                return (
                  <div
                    key={idx}
                    className="rounded-2xl glass-card border border-coffeeBorder overflow-hidden transition-colors"
                  >
                    <button
                      onClick={() => setActiveFaq(isOpen ? null : idx)}
                      className="w-full p-5 text-left flex items-center justify-between gap-4 font-serif text-base font-bold text-cream hover:text-caramel transition-colors"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-caramel transition-transform duration-300 flex-shrink-0 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="px-5 pb-5 text-xs sm:text-sm text-cream/70 font-light leading-relaxed border-t border-coffeeBorder/30 pt-3"
                        >
                          {faq.a}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
