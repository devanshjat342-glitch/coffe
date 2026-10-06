export const PRODUCTS = [
  // Signature Featured Brews
  {
    id: "velvet-espresso",
    name: "Velvet Espresso",
    category: "Espresso",
    price: 220,
    rating: 4.9,
    reviewCount: 342,
    description: "Rich, bold and intensely smooth.",
    longDescription: "Our flagship single-origin espresso pulled to perfection. Features a dense, golden crema with deep resonant notes of melted cocoa, roasted macadamia, and a crisp citrus finish that lingers gracefully.",
    image: "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?q=80&w=900&auto=format&fit=crop",
    roastLevel: "Dark Roast",
    origin: "Chikmagalur High Hills, India",
    notes: ["Dark Cocoa", "Roasted Almond", "Citrus Zest"],
    calories: "5 kcal",
    prepTime: "3 mins",
    caffeine: "140 mg",
    isSignature: true,
    badge: "Bestseller"
  },
  {
    id: "caramel-latte",
    name: "Caramel Latte",
    category: "Latte",
    price: 280,
    rating: 4.95,
    reviewCount: 512,
    description: "Silky espresso with warm caramel notes.",
    longDescription: "Crafted with double ristretto shots poured through micro-foamed oat or dairy milk, crowned with house-simmered Madagascar vanilla bean caramel sauce and a dusting of Himalayan pink sea salt.",
    image: "https://images.unsplash.com/photo-1534778101976-62847782c213?q=80&w=900&auto=format&fit=crop",
    roastLevel: "Medium-Dark Roast",
    origin: "Yirgacheffe & Baba Budangiri Blend",
    notes: ["Burnt Sugar", "Madagascar Vanilla", "Toffee"],
    calories: "190 kcal",
    prepTime: "4 mins",
    caffeine: "120 mg",
    isSignature: true,
    badge: "Customer Favorite"
  },
  {
    id: "mocha-noir",
    name: "Mocha Noir",
    category: "Espresso",
    price: 300,
    rating: 4.88,
    reviewCount: 289,
    description: "Dark chocolate, espresso and creamy milk.",
    longDescription: "An indulgent collision of 72% Belgian single-estate dark chocolate ganache, double-shot artisan espresso, and velvet textured whole milk, finished with shaved Valrhona cacao curls.",
    image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?q=80&w=900&auto=format&fit=crop",
    roastLevel: "Medium Roast",
    origin: "Antioquia, Colombia",
    notes: ["72% Dark Chocolate", "Brown Butter", "Nutmeg"],
    calories: "240 kcal",
    prepTime: "5 mins",
    caffeine: "135 mg",
    isSignature: true,
    badge: "Indulgence"
  },
  {
    id: "vanilla-cold-brew",
    name: "Vanilla Cold Brew",
    category: "Cold Coffee",
    price: 260,
    rating: 4.92,
    reviewCount: 420,
    description: "Slow brewed with subtle vanilla sweetness.",
    longDescription: "Steeped cold for 20 continuous hours to extract natural fruity sweetness without bitterness. Layered over pure artisanal vanilla bean infusion and served over slow-melting clear crystalline ice cubes.",
    image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?q=80&w=900&auto=format&fit=crop",
    roastLevel: "Medium Light Roast",
    origin: "Sidama, Ethiopia",
    notes: ["Bourbon Vanilla", "Honey Blossom", "Stone Fruit"],
    calories: "75 kcal",
    prepTime: "Ready to Pour",
    caffeine: "185 mg",
    isSignature: true,
    badge: "Slow Stept"
  },

  // Additional Menu Items (Latte, Cold Coffee, Espresso, Tea, Pastries)
  {
    id: "spanish-latte",
    name: "Golden Spanish Latte",
    category: "Latte",
    price: 290,
    rating: 4.85,
    reviewCount: 198,
    description: "Espresso infused with spiced condensed milk and cinnamon.",
    longDescription: "A luxurious Spanish-style cortado lengthened with gently steamed milk, sweetened with artisan spiced milk reduction, and sprinkled with freshly ground Ceylon cinnamon.",
    image: "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?q=80&w=900&auto=format&fit=crop",
    roastLevel: "Medium Roast",
    origin: "Guatemala Antigua",
    notes: ["Sweet Condensed Cream", "Ceylon Cinnamon", "Honey"],
    calories: "210 kcal",
    prepTime: "4 mins",
    caffeine: "125 mg",
    isSignature: false
  },
  {
    id: "nitro-reserve",
    name: "Nitro Silk Reserve",
    category: "Cold Coffee",
    price: 310,
    rating: 4.96,
    reviewCount: 310,
    description: "Nitrogen-infused cold brew with stout-like cascading foam.",
    longDescription: "Poured on draught with micro-bubbles of pure food-grade nitrogen. Cascading like a fine dark stout, delivering an exceptionally velvety mouthfeel without adding dairy or sugar.",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=900&auto=format&fit=crop",
    roastLevel: "Dark Roast",
    origin: "Wayanad Highland Estate",
    notes: ["Blackcurrant", "Molasses", "Creamy Foam"],
    calories: "10 kcal",
    prepTime: "Instant Tap",
    caffeine: "210 mg",
    isSignature: false,
    badge: "On Tap"
  },
  {
    id: "pistachio-iced-latte",
    name: "Pistachio Praline Latte",
    category: "Latte",
    price: 320,
    rating: 4.91,
    reviewCount: 175,
    description: "Roasted Sicilian pistachio paste shaken over ice and espresso.",
    longDescription: "Stone-ground roasted pistachio butter folded into fresh milk, poured over espresso shots and ice, crowned with candied crushed pistachios.",
    image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=900&auto=format&fit=crop",
    roastLevel: "Medium Roast",
    origin: "Costa Rica Tarrazú",
    notes: ["Sicilian Pistachio", "White Nougat", "Cardamom"],
    calories: "230 kcal",
    prepTime: "5 mins",
    caffeine: "115 mg",
    isSignature: false,
    badge: "Seasonal"
  },
  {
    id: "cortado-classico",
    name: "Artisan Cortado",
    category: "Espresso",
    price: 230,
    rating: 4.87,
    reviewCount: 154,
    description: "Equal parts double espresso and silky warm milk in glass.",
    longDescription: "The purest expression of balance. Exactly 60ml of rich double extraction paired harmoniously with 60ml of gently steamed microfoam in a classic faceted Gibraltar glass.",
    image: "https://images.unsplash.com/photo-1585494156145-1c60a4fe9d2b?q=80&w=900&auto=format&fit=crop",
    roastLevel: "Medium-Dark Roast",
    origin: "Coorg Estate, Western Ghats",
    notes: ["Dark Caramel", "Hazelnut", "Clover Honey"],
    calories: "60 kcal",
    prepTime: "3 mins",
    caffeine: "130 mg",
    isSignature: false
  },
  {
    id: "kyoto-drip",
    name: "Kyoto Slow Drip",
    category: "Cold Coffee",
    price: 340,
    rating: 4.97,
    reviewCount: 114,
    description: "Single-drop cold extraction brewed over 14 hours in glass towers.",
    longDescription: "An artisanal spectacle. Cold spring water drips one drop every 1.5 seconds through fine grinds in hand-blown Japanese glass apparatus, capturing exquisite floral and winey notes.",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=900&auto=format&fit=crop",
    roastLevel: "Light Roast",
    origin: "Geisha Variety, Panama",
    notes: ["Jasmine Flower", "Bergamot", "Peach Nectar"],
    calories: "5 kcal",
    prepTime: "Limited Reserve",
    caffeine: "190 mg",
    isSignature: false,
    badge: "Limited Reserve"
  },
  {
    id: "matcha-ceremonial-latte",
    name: "Uji Ceremonial Matcha",
    category: "Tea",
    price: 310,
    rating: 4.93,
    reviewCount: 228,
    description: "First-harvest ceremonial grade Japanese green tea whisked fresh.",
    longDescription: "Stone-ground tencha tea leaves from Kyoto's famed Uji prefecture, whisked by hand with bamboo chasen and folded into silky oat milk with raw wildflower honey.",
    image: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?q=80&w=900&auto=format&fit=crop",
    roastLevel: "Shade Grown",
    origin: "Uji, Kyoto, Japan",
    notes: ["Umami", "Sweet Grass", "Creamy Vanilla"],
    calories: "120 kcal",
    prepTime: "4 mins",
    caffeine: "70 mg",
    isSignature: false,
    badge: "Antioxidant"
  },
  {
    id: "earl-grey-reserve",
    name: "Smoked Bergamot Earl Grey",
    category: "Tea",
    price: 240,
    rating: 4.82,
    reviewCount: 96,
    description: "Whole-leaf Nilgiri black tea infused with Calabrian bergamot oil.",
    longDescription: "High-altitude hand-plucked tea leaves scented with genuine cold-pressed Calabrian bergamot essential oil and adorned with blue cornflower petals.",
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=900&auto=format&fit=crop",
    roastLevel: "Fermented Black",
    origin: "Nilgiris Blue Mountains",
    notes: ["Citrus Bergamot", "Malt", "Floral Blossom"],
    calories: "0 kcal",
    prepTime: "4 mins steep",
    caffeine: "50 mg",
    isSignature: false
  },
  {
    id: "masala-chai-supreme",
    name: "Artisanal Royal Chai",
    category: "Tea",
    price: 220,
    rating: 4.9,
    reviewCount: 318,
    description: "Assam CTC slow-simmered with green cardamom, fresh ginger & saffron.",
    longDescription: "Brewed the traditional royal way: stone-crushed green cardamom pods, fresh root ginger, star anise, clove, and a thread of Kashmiri saffron simmered in rich creamy milk.",
    image: "https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?q=80&w=900&auto=format&fit=crop",
    roastLevel: "Full Bodied",
    origin: "Assam Valley Reserve",
    notes: ["Cardamom", "Warm Ginger", "Kashmiri Saffron"],
    calories: "140 kcal",
    prepTime: "5 mins",
    caffeine: "60 mg",
    isSignature: false
  },
  {
    id: "croissant-isigny",
    name: "Isigny Butter Croissant",
    category: "Pastries",
    price: 190,
    rating: 4.94,
    reviewCount: 405,
    description: "Flaky 48-hour laminated French pastry with Isigny Ste Mère butter.",
    longDescription: "Baked fresh every morning in our open hearth oven. Featuring 72 distinct buttery layers, golden caramelized crust, and a tender honeycomb interior that melts in your mouth.",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=900&auto=format&fit=crop",
    roastLevel: "Wood Fired Baked",
    origin: "Normandy AOP Butter",
    notes: ["Sweet Toasted Butter", "Caramelized Flakes"],
    calories: "280 kcal",
    prepTime: "Baked Fresh",
    caffeine: "0 mg",
    isSignature: false,
    badge: "Baked Fresh"
  },
  {
    id: "almond-pain-chocolat",
    name: "Almond & Valrhona Croissant",
    category: "Pastries",
    price: 240,
    rating: 4.92,
    reviewCount: 260,
    description: "Filled with rich almond frangipane and batons of French chocolate.",
    longDescription: "Twice-baked butter croissant soaked in light coffee syrup, stuffed with silky almond cream and dark chocolate batons, encrusted with toasted sliced almonds and powdered sugar.",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=900&auto=format&fit=crop",
    roastLevel: "Oven Baked",
    origin: "Valrhona Chocolate, France",
    notes: ["Toasted Almond", "Bittersweet Chocolate", "Butter"],
    calories: "380 kcal",
    prepTime: "Warm on Order",
    caffeine: "5 mg",
    isSignature: false
  },
  {
    id: "tiramisu-choux",
    name: "Espresso Tiramisu Choux",
    category: "Pastries",
    price: 260,
    rating: 4.96,
    reviewCount: 180,
    description: "Crispy choux puff loaded with mascarpone cream & espresso ganache.",
    longDescription: "Crispy craquelin pastry crown piped with authentic Italian mascarpone mousse, a hidden center of BREWÉ velvet espresso sponge, and dusted with dutched cocoa powder.",
    image: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?q=80&w=900&auto=format&fit=crop",
    roastLevel: "Pastry Craft",
    origin: "Lombardy Mascarpone",
    notes: ["Creamy Mascarpone", "Espresso Soak", "Cacao"],
    calories: "320 kcal",
    prepTime: "Chilled",
    caffeine: "35 mg",
    isSignature: false,
    badge: "Chef's Special"
  }
];

export const CATEGORIES = [
  "All",
  "Espresso",
  "Latte",
  "Cold Coffee",
  "Tea",
  "Pastries"
];

export const COFFEE_EXPERIENCE_STEPS = [
  {
    number: "01",
    title: "SELECT",
    subtitle: "Only the finest beans.",
    description: "We partner directly with high-elevation, sustainable shade-grown farms across Chikmagalur, Yirgacheffe, and Antioquia. Every lot is graded above 85+ SCA points.",
    icon: "Bean",
    image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=900&auto=format&fit=crop"
  },
  {
    number: "02",
    title: "ROAST",
    subtitle: "Slow roasted to perfection.",
    description: "Small-batch drum roasting calibrated precisely by thermal profile to unlock delicate natural sweetness, crisp fruit acidity, and luxurious aromatic depth.",
    icon: "Flame",
    image: "https://images.unsplash.com/photo-1518832553480-cd0e625ed3e6?q=80&w=900&auto=format&fit=crop"
  },
  {
    number: "03",
    title: "BREW",
    subtitle: "Precision in every cup.",
    description: "Temperature-monitored water filtration, microscopic grind distribution, and dialed-in pressure extraction yield flawless texture and pristine clarity.",
    icon: "Droplets",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=900&auto=format&fit=crop"
  },
  {
    number: "04",
    title: "ENJOY",
    subtitle: "Your perfect coffee moment.",
    description: "Served at peak freshness in artisanal ceramic cups. An immersive sensory ritual designed to slow down time and elevate everyday living.",
    icon: "Coffee",
    image: "https://images.unsplash.com/photo-1507133750040-4a8f57021571?q=80&w=900&auto=format&fit=crop"
  }
];

export const TIMELINE_EVENTS = [
  {
    year: "2018",
    title: "First Brew",
    description: "Started in a quiet converted garage with a restored 1970s San Franciscan roaster and an obsession for origin coffee."
  },
  {
    year: "2020",
    title: "First Roastery",
    description: "Opened our flagship roastery cafe in Indiranagar, welcoming specialty coffee purists and curious morning wanderers."
  },
  {
    year: "2023",
    title: "10,000+ Coffee Lovers",
    description: "Expanded direct farm relationships, launched our cold brew laboratory, and shipped beans to 10,000+ ritualists across the subcontinent."
  },
  {
    year: "2026",
    title: "Brewé Goes Global",
    description: "Establishing sustainable micro-roasteries worldwide, maintaining our uncompromising farm-to-cup commitment."
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    quote: "Every cup tastes like it was made specifically for me.",
    author: "Aarav",
    role: "Architect & Daily Brewer",
    city: "Bengaluru",
    rating: 5,
    favoriteBrew: "Velvet Espresso",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop"
  },
  {
    id: 2,
    quote: "The smoothest coffee I've had in years.",
    author: "Riya",
    role: "Visual Designer",
    city: "Mumbai",
    rating: 5,
    favoriteBrew: "Caramel Latte",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=300&auto=format&fit=crop"
  },
  {
    id: 3,
    quote: "BREWÉ completely changed my morning routine.",
    author: "Kabir",
    role: "Product Founder",
    city: "Delhi NCR",
    rating: 5,
    favoriteBrew: "Vanilla Cold Brew",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop"
  }
];

export const INSTAGRAM_POSTS = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=800&auto=format&fit=crop",
    likes: "2.4k",
    comments: "84",
    caption: "Morning steam in the roastery. The sweet spot of first crack."
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=800&auto=format&fit=crop",
    likes: "3.1k",
    comments: "112",
    caption: "Slow drip perfection. 14 hours of patience in every bottle."
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1497636577773-f1231844b336?q=80&w=800&auto=format&fit=crop",
    likes: "1.9k",
    comments: "63",
    caption: "Latte art finals. Microfoam textured to liquid silk."
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1498804103079-a6351b050096?q=80&w=800&auto=format&fit=crop",
    likes: "4.2k",
    comments: "159",
    caption: "Fresh beans cooling down right after roasting. Fragrance fills the block."
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=800&auto=format&fit=crop",
    likes: "2.8k",
    comments: "97",
    caption: "Quiet mornings, good book, and a pour-over."
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=800&auto=format&fit=crop",
    likes: "3.7k",
    comments: "135",
    caption: "Artisan pastries baked at 5 AM to meet your first espresso."
  }
];
