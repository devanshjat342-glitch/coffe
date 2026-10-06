import React from 'react';
import { Link } from 'react-router-dom';
import { Coffee, Instagram, Facebook, Twitter, MapPin, Phone, Mail, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-espresso text-cream border-t border-caramel/15 relative overflow-hidden pt-16 pb-12">
      {/* Background grain & ambient glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-caramel/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-16 border-b border-coffeeBorder/30">
          
          {/* Col 1: Brand & Philosophy (5 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="flex items-center gap-2.5 group inline-block">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-caramel to-darkCoffee flex items-center justify-center border border-caramel/40 shadow-glow">
                <Coffee className="w-5 h-5 text-cream" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold tracking-wider text-cream group-hover:text-caramel transition-colors">
                  BREWÉ
                </span>
                <span className="text-[9px] uppercase tracking-[0.25em] text-latte font-medium -mt-1">
                  Artisan Coffee
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-cream/65 font-light leading-relaxed max-w-sm">
              Artisan specialty roasters dedicated to exceptional single origins, sustainable direct trade, and elevating everyday coffee rituals.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-darkCoffee border border-coffeeBorder hover:border-caramel hover:bg-caramel hover:text-white flex items-center justify-center text-cream/70 transition-all shadow-subtle hover:scale-105"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-darkCoffee border border-coffeeBorder hover:border-caramel hover:bg-caramel hover:text-white flex items-center justify-center text-cream/70 transition-all shadow-subtle hover:scale-105"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter/X"
                className="w-9 h-9 rounded-full bg-darkCoffee border border-coffeeBorder hover:border-caramel hover:bg-caramel hover:text-white flex items-center justify-center text-cream/70 transition-all shadow-subtle hover:scale-105"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-serif text-base font-bold text-white tracking-wide">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-cream/70 font-light">
              <li>
                <Link to="/" className="hover:text-caramel transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/menu" className="hover:text-caramel transition-colors">
                  Menu
                </Link>
              </li>
              <li>
                <Link to="/story" className="hover:text-caramel transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link to="/#featured" className="hover:text-caramel transition-colors">
                  Coffee
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-caramel transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Craft & Roastery (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-base font-bold text-white tracking-wide">
              Roasteries
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-cream/70 font-light">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-caramel flex-shrink-0 mt-0.5" />
                <span>12th Main, Indiranagar, Bengaluru, KA 560038</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-caramel flex-shrink-0 mt-0.5" />
                <span>Pali Hill, Bandra West, Mumbai, MH 400050</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-caramel flex-shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-caramel flex-shrink-0" />
                <span>hello@brewecoffee.com</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Opening Hours & Service (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-base font-bold text-white tracking-wide">
              Cafe Hours
            </h4>
            <div className="p-4 rounded-2xl glass-card border border-coffeeBorder space-y-2 text-xs text-cream/80">
              <div className="flex justify-between">
                <span>Mon – Fri:</span>
                <span className="text-latte font-medium">7:00 AM – 11:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sat – Sun:</span>
                <span className="text-caramel font-semibold">8:00 AM – Midnight</span>
              </div>
              <div className="pt-2 border-t border-coffeeBorder/40 text-[11px] text-cream/50">
                Fresh roasts dispatched daily by 2:00 PM.
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back To Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream/50">
          <p>© 2026 BREWÉ Coffee. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <Link to="/contact" className="hover:text-cream transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link to="/contact" className="hover:text-cream transition-colors">
              Terms of Service
            </Link>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="hover:text-caramel flex items-center gap-1 transition-colors"
            >
              Back to Top <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
