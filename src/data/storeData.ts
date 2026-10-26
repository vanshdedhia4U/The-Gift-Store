export interface Product {
  id: string;
  name: string;
  category: string;
  categorySlug: string;
  price: number;
  originalPrice?: number;
  rating?: number;
  imageUrl: string;
  age: string;
  ageBracket: '0-2' | '3-5' | '6-8' | '9-12' | '13+';
  occasions: Array<'birthday' | 'return-gifts' | 'learning' | 'collector'>;
  tag?: string;
  availability: string;
  description: string;
  highlights: string[];
  specs: {
    material: string;
    dimensions?: string;
    certification: string;
    batteryRequired?: string;
    inBox: string;
  };
  svgType: 'hotwheels' | 'crane' | 'robot' | 'rcCar' | 'teddy' | 'boardGame' | 'track' | 'magnet' | 'microscope';
}

export interface Category {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  featuredItem: string;
}

export interface GiftBasket {
  id: string;
  title: string;
  subtitle: string;
  itemCount: number;
  price: number;
  imageUrl: string;
  badge?: string;
  description: string;
  includedItems: string[];
}

export interface Article {
  id: string;
  title: string;
  author: string;
  date: string;
  summary: string;
  readTime: string;
}

export interface GalleryItem {
  title: string;
  category: string;
  description: string;
}

export const SIDEBAR_CATEGORIES = [
  { slug: 'all', name: 'All Toy Collections' },
  { slug: 'hot-wheels', name: 'Hot Wheels & Die-Cast' },
  { slug: 'building-toys', name: 'Building Bricks & Technic' },
  { slug: 'stem-learning', name: 'STEM & Robotics' },
  { slug: 'rc-vehicles', name: 'RC Supercars & Vehicles' },
  { slug: 'soft-toys', name: 'Soft Toys & Nursery Plush' },
  { slug: 'board-games', name: 'Family Board Games & Puzzles' },
  { slug: 'craft-diy', name: 'Art, Craft & Jewelry DIY' },
  { slug: 'montessori', name: 'Montessori & Wooden Activity' },
  { slug: 'return-gifts', name: 'Birthday Return Gifts' },
];

export const CATEGORIES: Category[] = [
  {
    slug: 'hot-wheels',
    title: 'Hot Wheels & Die-Cast',
    tagline: '1:64 Scale Collectibles, Car Culture & Track Sets',
    description: 'Authentic Mattel mainlines, premium Car Culture series, and high-speed stunt tracks.',
    featuredItem: 'Hot Wheels Car Culture Series',
  },
  {
    slug: 'building-toys',
    title: 'Building Toys & Blocks',
    tagline: 'Architectural Bricks, Technic Sets & Creative Worlds',
    description: 'Precision interlocking bricks that cultivate spatial reasoning and architectural curiosity.',
    featuredItem: 'Technic Motorized Crane',
  },
  {
    slug: 'stem-learning',
    title: 'Educational & STEM',
    tagline: 'Robotics, Science Labs & Solar Kits',
    description: 'Hands-on learning sets designed to spark curiosity in mechanics, circuits, and science.',
    featuredItem: '6-in-1 Solar Explorer Lab',
  },
  {
    slug: 'rc-vehicles',
    title: 'Remote Control Toys',
    tagline: 'High-Speed Supercars, Stunt Crawlers & Drones',
    description: '2.4GHz rechargeable vehicles built with responsive handling and durable chassis.',
    featuredItem: '1:14 McLaren P1 RC',
  },
  {
    slug: 'soft-toys',
    title: 'Soft Toys & Plush',
    tagline: 'Heirloom Teddy Bears & Hypoallergenic Companions',
    description: 'Washable plush characters crafted with baby-safe materials and gentle textures.',
    featuredItem: 'Classic Velvet Plush Bear',
  },
  {
    slug: 'board-games',
    title: 'Board Games & Puzzles',
    tagline: 'Family Strategy, Classics & Wooden Brain Teasers',
    description: 'Screen-free family games that test strategy, memory, and joyful deduction.',
    featuredItem: 'Deluxe Strategy Board Game',
  },
];

/* 8 Primary Featured Items directly reflecting the screenshot layout + rich showroom stock */
export const PRODUCTS: Product[] = [
  {
    id: 'anj-snoopy-01',
    name: 'Hallmark Stuffed Snoopy Cuddle Companion Plush',
    category: 'Soft Toys & Nursery Plush',
    categorySlug: 'soft-toys',
    price: 899,
    originalPrice: 1299,
    rating: 5,
    imageUrl: 'https://images.unsplash.com/photo-1559454403-b8fb88521f11?auto=format&fit=crop&w=600&q=85',
    age: 'All Ages (0+)',
    ageBracket: '0-2',
    occasions: ['birthday', 'return-gifts'],
    tag: 'Bestseller',
    availability: 'Available in Showroom',
    description: 'Ultra-soft, hypoallergenic plush dog with classic red collar and weighted bottom for upright shelf sitting.',
    highlights: [
      'Velveteen micro-fiber exterior with cloud-soft stuffing',
      'Child-safe embroidered eyes and nose (IS 9873 compliant)',
      'Machine washable gentle cycle',
      'Includes complimentary Anjrich gift bag & tag',
    ],
    specs: {
      material: '100% Organic Hypoallergenic Polyester Plush',
      dimensions: '28cm height x 18cm width',
      certification: 'BIS Certified (IS 9873 compliant)',
      batteryRequired: 'No batteries required',
      inBox: '1 Plush companion with commemorative story tag',
    },
    svgType: 'teddy',
  },
  {
    id: 'anj-fig-02',
    name: 'Throated Hummingbird & Wildlife Collector Figurine',
    category: 'STEM & Robotics',
    categorySlug: 'stem-learning',
    price: 1120,
    originalPrice: 1450,
    rating: 5,
    imageUrl: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=600&q=85',
    age: 'Ages 4-12',
    ageBracket: '6-8',
    occasions: ['learning', 'collector'],
    tag: 'Hand-Painted',
    availability: 'Available in Showroom',
    description: 'Museum-grade, hand-painted avian wildlife sculpture mounted on a natural textured floral branch for curious young nature lovers.',
    highlights: [
      'Authentic ornithological anatomy and feather details',
      'Solid non-toxic eco-resin construction',
      'Includes educational wildlife fact guide',
      'Perfect desk companion and school biology display',
    ],
    specs: {
      material: 'High-Density Non-Toxic Polymer Resin',
      dimensions: '14cm x 10cm x 12cm',
      certification: 'BIS Certified (IS 9873 compliant)',
      batteryRequired: 'No batteries required',
      inBox: '1 Hand-painted figurine, 1 Nature fact sheet',
    },
    svgType: 'robot',
  },
  {
    id: 'anj-cal-03',
    name: 'Montessori Perpetual Wooden Calendar & Learning Blocks',
    category: 'Montessori & Wooden Activity',
    categorySlug: 'montessori',
    price: 920,
    originalPrice: 1250,
    rating: 5,
    imageUrl: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=600&q=85',
    age: 'Ages 3-8',
    ageBracket: '3-5',
    occasions: ['birthday', 'learning'],
    tag: 'Montessori',
    availability: 'Available in Showroom',
    description: 'Everlasting wooden desk calendar with illustrated date blocks, weekday cylinders, and season tiles for tactile daily routines.',
    highlights: [
      'Sustainably harvested smooth beechwood with rounded edges',
      'Child-safe non-toxic water-based German dyes',
      'Cultivates temporal awareness and number recognition',
      'Heirloom quality build built to last generations',
    ],
    specs: {
      material: 'Natural Beechwood & Water-Based Non-Toxic Paint',
      dimensions: '16cm x 8cm x 11cm',
      certification: 'BIS Certified (IS 9873 compliant)',
      batteryRequired: 'No batteries required',
      inBox: '1 Wooden cradle, 2 Date cubes, 3 Month bars',
    },
    svgType: 'boardGame',
  },
  {
    id: 'anj-box-04',
    name: 'The Fun Box 3D Geometric Brain Teaser & Secret Vault',
    category: 'Family Board Games & Puzzles',
    categorySlug: 'board-games',
    price: 1480,
    originalPrice: 1850,
    rating: 5,
    imageUrl: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=600&q=85',
    age: 'Ages 8 to Adult',
    ageBracket: '9-12',
    occasions: ['birthday', 'collector'],
    tag: 'Puzzle Master',
    availability: 'Available in Showroom',
    description: 'Intricate multi-step mechanical puzzle box. Decode sliding locks and hidden dovetail gears to unlock the secret inner chamber.',
    highlights: [
      'Precision laser-cut smooth birchwood mechanics',
      '12 sequential sequential unlocking steps',
      'Hidden inner compartment ideal for secret gifts',
      'Includes coded hint booklet for newcomers',
    ],
    specs: {
      material: 'Multi-Ply Natural Birchwood',
      dimensions: '11cm x 11cm x 11cm',
      certification: 'BIS Certified (IS 9873 compliant)',
      batteryRequired: 'No batteries required',
      inBox: '1 Secret puzzle box, 1 Sealed hint envelope',
    },
    svgType: 'magnet',
  },
  {
    id: 'anj-craft-05',
    name: 'Soleil Stretchy Ball Bead DIY Jewelry & Friendship Maker',
    category: 'Art, Craft & Jewelry DIY',
    categorySlug: 'craft-diy',
    price: 630,
    originalPrice: 1050,
    rating: 5,
    imageUrl: 'https://images.unsplash.com/photo-1535295972055-1c762f4483e5?auto=format&fit=crop&w=600&q=85',
    age: 'Ages 5-12',
    ageBracket: '6-8',
    occasions: ['birthday', 'return-gifts'],
    tag: 'Creative Kit',
    availability: 'Available in Showroom',
    description: 'Colorful pastel DIY bead maker with 600+ pearl beads, elastic cords, charm pendants, and bead threading tool for creative designs.',
    highlights: [
      'Over 600 iridescent rainbow and metallic beads',
      'Elastic cord spools that require zero knot-tying tools',
      'Includes 12 gold-accented metal charms',
      'Organized portable compartmentalized storage case',
    ],
    specs: {
      material: 'BPA-Free Acrylic & Latex-Free Elastic Cord',
      dimensions: '22cm x 15cm x 4cm (Case)',
      certification: 'BIS Certified (IS 9873 compliant)',
      batteryRequired: 'No batteries required',
      inBox: '600+ Beads, 3 Spools elastic, 12 Charms, Sorting tray',
    },
    svgType: 'magnet',
  },
  {
    id: 'anj-hw-06',
    name: "Hot Wheels Premium Car Culture 'Real Riders' Die-Cast Supercar",
    category: 'Hot Wheels & Die-Cast',
    categorySlug: 'hot-wheels',
    price: 699,
    originalPrice: 999,
    rating: 5,
    imageUrl: 'https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?auto=format&fit=crop&w=600&q=85',
    age: 'Collectors & Ages 4+',
    ageBracket: '13+',
    occasions: ['birthday', 'collector'],
    tag: 'Mattel Official',
    availability: 'Available in Showroom',
    description: 'Authentic 1:64 scale Mattel collector die-cast car featuring metal body and metal base with Real Riders genuine rubber tires.',
    highlights: [
      'Heavy die-cast metal body and metal chassis',
      'Real Riders treaded rubber compound tires',
      'Authentic automaker licensed tampo graphics',
      'Collector protective blister card packaging',
    ],
    specs: {
      material: 'Die-Cast Zinc Alloy & Rubber',
      dimensions: '1:64 Scale (~7.5cm length)',
      certification: 'BIS Certified (IS 9873 compliant)',
      batteryRequired: 'No batteries required',
      inBox: '1 Premium Die-Cast Vehicle on Blister Card',
    },
    svgType: 'hotwheels',
  },
  {
    id: 'anj-tray-07',
    name: 'Rectangular Montessori Wooden Activity & Toy Display Tray',
    category: 'Montessori & Wooden Activity',
    categorySlug: 'montessori',
    price: 1120,
    originalPrice: 1620,
    rating: 5,
    imageUrl: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=600&q=85',
    age: 'Ages 1-7',
    ageBracket: '3-5',
    occasions: ['learning'],
    tag: 'Montessori',
    availability: 'Available in Showroom',
    description: 'Solid pine activity tray with smooth dual handles. Designed for sensory sorting, puzzle organization, and independent play setups.',
    highlights: [
      'Ergonomic cut-out handles designed for toddler hands',
      'Raised 4cm spill-proof side borders',
      'Sealed with natural beeswax child-safe coating',
      'Versatile for kinetic sand, sorting beads, and building blocks',
    ],
    specs: {
      material: 'Natural Solid Pinewood & Beeswax Seal',
      dimensions: '35cm x 25cm x 4.5cm',
      certification: 'BIS Certified (IS 9873 compliant)',
      batteryRequired: 'No batteries required',
      inBox: '1 Solid wood activity tray',
    },
    svgType: 'boardGame',
  },
  {
    id: 'anj-pendant-08',
    name: 'NICI Toucan Adventure Bag Charm & Collectible Keychain',
    category: 'Soft Toys & Nursery Plush',
    categorySlug: 'soft-toys',
    price: 499,
    originalPrice: 745,
    rating: 5,
    imageUrl: 'https://images.unsplash.com/photo-1618842676088-c4d48a6a7c9d?auto=format&fit=crop&w=600&q=85',
    age: 'Ages 3 to Adult',
    ageBracket: '6-8',
    occasions: ['return-gifts', 'birthday'],
    tag: 'Pocket Toy',
    availability: 'Available in Showroom',
    description: 'German-designed plush toucan pendant with sturdy clip-ring. Attaches securely to school backpacks, pencil pouches, or keychains.',
    highlights: [
      'Vivid multicolored beak with plush fleece body',
      'Anti-rust matte metallic carabiner keyring',
      'Compact 10cm pocket-friendly companion',
      'Popular birthday return gift pick',
    ],
    specs: {
      material: 'Soft Velboa Polyester & Stainless Metal Ring',
      dimensions: '10cm height x 6cm width',
      certification: 'BIS Certified (IS 9873 compliant)',
      batteryRequired: 'No batteries required',
      inBox: '1 Plush character clip-pendant',
    },
    svgType: 'teddy',
  },
  {
    id: 'anj-tech-09',
    name: 'Technic Heavy-Duty Motorized Construction Crane (840 Pcs)',
    category: 'Building Bricks & Technic',
    categorySlug: 'building-toys',
    price: 3799,
    originalPrice: 4499,
    rating: 5,
    imageUrl: 'https://images.unsplash.com/photo-1585366119957-e9730b6d0f60?auto=format&fit=crop&w=600&q=85',
    age: 'Ages 8-14',
    ageBracket: '9-12',
    occasions: ['birthday', 'learning', 'collector'],
    tag: 'Engineering Kit',
    availability: 'Available in Showroom',
    description: 'Challenging mechanical build equipped with gear assemblies, rotating 360-degree cab, and dual-action cable winch.',
    highlights: [
      'Realistic gear transmission and pulley mechanics',
      'Working outrigger stabilizer legs',
      'Extendable boom reaching up to 48cm height',
      'Step-by-step colored assembly manual',
    ],
    specs: {
      material: 'Virgin High-Precision ABS Plastic',
      dimensions: '48cm x 22cm x 35cm (Assembled)',
      certification: 'BIS Certified (IS 9873 compliant)',
      batteryRequired: 'Optional 3x AA for motorized winch',
      inBox: '840 Brick pieces, 1 Motor unit, Instruction manual',
    },
    svgType: 'crane',
  },
  {
    id: 'anj-rc-10',
    name: '1:14 Scale McLaren P1 2.4GHz Supercar with Working LEDs',
    category: 'RC Supercars & Vehicles',
    categorySlug: 'rc-vehicles',
    price: 2199,
    originalPrice: 2899,
    rating: 5,
    imageUrl: 'https://images.unsplash.com/photo-1594787318286-3d835c1d207f?auto=format&fit=crop&w=600&q=85',
    age: 'Ages 6+',
    ageBracket: '6-8',
    occasions: ['birthday', 'return-gifts'],
    tag: 'Officially Licensed',
    availability: 'Available in Showroom',
    description: 'High-speed RC supercar with full function forward, reverse, left, right steering, authentic aero curves, and illuminated xenon headlamps.',
    highlights: [
      'Official automaker styling with butterfly doors',
      '2.4GHz interference-free transmitter (up to 30m range)',
      'Front spring shock absorption system',
      'Includes rechargeable battery pack with USB charging cord',
    ],
    specs: {
      material: 'Impact-Resistant ABS Composite',
      dimensions: '33cm x 14cm x 8.5cm',
      certification: 'BIS Certified',
      batteryRequired: 'Vehicle: Included 4.8V Rechargeable; Remote: 2x AA',
      inBox: '1 RC Supercar, 1 Transmitter, 1 USB charger, 1 Battery pack',
    },
    svgType: 'rcCar',
  },
];

/* 4 Curated Gift Baskets directly matching the "Gift kits & baskets" section */
export const GIFT_BASKETS: GiftBasket[] = [
  {
    id: 'basket-him',
    title: 'For Him / Little Builders',
    subtitle: 'Hot Wheels, Technic & Speed',
    itemCount: 6,
    price: 2499,
    imageUrl: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=600&q=85',
    badge: 'Popular',
    description: 'Action-packed celebration hamper featuring 2 Hot Wheels die-cast mainlines, a motorized mini racer build kit, puzzle cube, and sticker set.',
    includedItems: [
      '2x Mattel Hot Wheels Mainline Die-Cast Cars',
      '1x Pull-Back Technic Mini Racer Build Kit',
      '1x 3D Speed Cube Brain Teaser',
      '1x Hot Wheels Collector Sticker Album',
      '1x Metallic Gift Hamper Box with Satin Ribbon Wrap',
    ],
  },
  {
    id: 'basket-baby',
    title: 'For Baby & Nursery',
    subtitle: 'Sensory, Soft & Organic',
    itemCount: 7,
    price: 1899,
    imageUrl: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=600&q=85',
    badge: 'Newborn Safe',
    description: 'Tender baby shower and milestone hamper featuring a plush bear, organic cotton crochet rattle, wooden sensory teething blocks, and milestone cards.',
    includedItems: [
      '1x Hypoallergenic Snuggle Velvet Plush Bear',
      '1x Organic Cotton Crochet Bunny Rattle',
      '2x Natural Beechwood Teething Rings',
      '1x Soft Cloth Crinkle Book with Animal Sounds',
      '2x Milestone Memory Photo Discs',
    ],
  },
  {
    id: 'basket-occasions',
    title: 'Celebrations & Occasions',
    subtitle: 'Curated Family Joy',
    itemCount: 5,
    price: 2999,
    imageUrl: 'https://images.unsplash.com/photo-1513885535751-8b9238bd345a?auto=format&fit=crop&w=600&q=85',
    badge: 'Best Seller',
    description: 'Deluxe party hamper with a strategy board game, solar science robot, gourmet wooden fidget blocks, and celebratory ribbon presentation.',
    includedItems: [
      '1x CuriousMinds 6-in-1 Solar Explorer Lab',
      '1x Family Fast-Paced Strategy Card Game',
      '1x Wooden Geometric Tangram Puzzle',
      '1x Anjrich Keepsake Showroom Greeting Card',
      '1x Premium Celebration Basket with Gold Bow',
    ],
  },
  {
    id: 'basket-her',
    title: 'For Her / Creative Kids',
    subtitle: 'Art, Charms & Imagination',
    itemCount: 8,
    price: 2199,
    imageUrl: 'https://images.unsplash.com/photo-1512909006721-3d6018887383?auto=format&fit=crop&w=600&q=85',
    badge: 'Trending',
    description: 'Charming creative gift box with DIY bracelet bead maker, pastel plush kitten, sketch journal, watercolor brush pens, and collectible charms.',
    includedItems: [
      '1x Soleil Stretchy Ball Bead Jewelry Set (600+ Beads)',
      '1x Cuddle Velvet Soft Pocket Plush',
      '1x Hardcover Creative Art & Doodling Diary',
      '4x Dual-Tip Pastel Watercolor Brush Pens',
      '1x Iridescent Gift Presentation Box',
    ],
  },
];

/* Articles for the sidebar */
export const ARTICLES: Article[] = [
  {
    id: 'art-01',
    title: 'Choosing the Right STEM Kit for Curious Minds',
    author: 'Anjrich Team',
    date: 'Oct 24, 2026',
    summary: 'A parent guide to picking science, robotics, and mechanics toys tailored to developmental age groups without overwhelming your child.',
    readTime: '3 min read',
  },
  {
    id: 'art-02',
    title: 'The Hot Wheels Collector Guide: Mainlines vs Car Culture',
    author: 'Anjrich Team',
    date: 'Oct 20, 2026',
    summary: 'Everything you need to know about Real Riders rubber tires, metal bases, treasure hunts, and official drop frequencies in Ambernath.',
    readTime: '4 min read',
  },
];

/* Why Parents Love Us */
export const WHY_PARENTS_LOVE_US = [
  {
    title: '100% BIS Government Safety Certified',
    description: 'Every single toy in our Ambernath showroom complies strictly with Bureau of Indian Standards (IS 9873) for non-toxic materials and mechanical safety.',
  },
  {
    title: 'Authentic Mattel & Top Toy Brands',
    description: 'Direct partnerships ensure genuine Hot Wheels cases, licensed RC vehicles, and precision-tested building sets without low-grade imitations.',
  },
  {
    title: 'Complimentary In-Store Gift Wrapping',
    description: 'Every purchase includes high-grade celebration wrapping paper, elegant satin ribbons, and personalized handwritten gift cards at zero extra charge.',
  },
  {
    title: 'Try Before You Buy in Showroom',
    description: 'Our friendly staff unboxes and demonstrates RC cars, board games, and STEM kits so parents know exactly what their children are bringing home.',
  },
  {
    title: 'Hassle-Free Same Day WhatsApp Reservation',
    description: 'Reserve high-demand Hot Wheels drops and birthday presents with one WhatsApp tap for same-day store pickup at your convenience.',
  },
];

/* FAQs */
export const FAQS = [
  {
    q: 'Do you offer gift wrapping for purchases?',
    a: 'Yes, absolutely! Complimentary in-store gift wrapping is included with every purchase. We use high-quality celebration paper with satin ribbons and personalized greeting tags at zero extra charge.',
  },
  {
    q: 'Can you help us choose toys suited for specific age brackets?',
    a: 'Yes. Our showroom shelves in Ambernath are arranged by developmental stages: 0–2 (Sensory & Infant), 3–5 (Fine Motor & Imagination), 6–8 (Early STEM & Construction), 9–12 (Mechanics & Strategy), and 13+ (Collectors & Advanced Hobbies). Our staff is always on hand to assist.',
  },
  {
    q: 'When do fresh Hot Wheels cases arrive?',
    a: 'We receive regular official Mattel shipments twice a month. You can message us on WhatsApp (+91 98231 24567) to check current mainline case availability or join our broadcast list for new drop announcements.',
  },
  {
    q: 'What are your store timings and where in Ambernath are you located?',
    a: 'We are open 7 days a week, Monday through Sunday, from 10:00 AM to 9:30 PM. We are located at Shop 4 & 5, Silver Arch Commercial Complex, near Station Road and the historic Shiv Mandir Chowk in Ambernath East.',
  },
  {
    q: 'Can I reserve toys over WhatsApp before visiting the store?',
    a: 'Yes! Use the Reserve Bag on this website or message us at +91 98231 24567 with the toy name. We will hold the item for same-day store pickup or discuss local delivery options.',
  },
  {
    q: 'Do you cater to bulk return gifts for birthday parties?',
    a: 'Yes! Share your guest count, age range, and budget per child. We curate age-appropriate, BIS-certified gift sets with complimentary individual wrapping and name tags.',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    title: 'The Die-Cast Collector Wall',
    category: 'Hot Wheels & Vehicles',
    description: 'Mainlines, 5-packs, and premium Car Culture series displayed in organized glass cabinets for enthusiasts and collectors.',
  },
  {
    title: 'Creative Building & Technic Zone',
    category: 'Architecture & Mechanics',
    description: 'Demonstration models where kids and teens can test gears, motorized cranes, and interlocking structural bricks.',
  },
  {
    title: 'STEM & Curious Minds Corner',
    category: 'Science & Robotics',
    description: 'Solar experiment labs, beginner microscopes, and electronic building blocks curated for school projects and curiosity.',
  },
  {
    title: 'Plush & Nursery Sanctuary',
    category: 'Soft Toys & Infant Care',
    description: 'Hypoallergenic plush bears, musical rattles, and organic cotton cuddle companions tested for infant safety.',
  },
  {
    title: 'Family Board Game Lounge',
    category: 'Strategy & Party Games',
    description: 'Screen-free family connection games, from timeless card challenges to modern European strategy table classics.',
  },
  {
    title: 'Bespoke Gift Wrapping Station',
    category: 'Wrapping & Custom Hampers',
    description: 'Complimentary celebration wrap paper with satin ribbon ties and custom birthday message cards for every purchase.',
  },
];

export interface Review {
  name: string;
  area: string;
  rating: number;
  date: string;
  text: string;
}

export const REVIEWS: Review[] = [
  {
    name: 'Pooja Sharma',
    area: 'Ambernath East',
    rating: 5,
    date: '2 weeks ago',
    text: 'Best toy store in Ambernath! The staff personally helped me choose a birthday gift for my 6-year-old nephew. They even wrapped it with gorgeous ribbons for free.',
  },
  {
    name: 'Vikram Joshi',
    area: 'Shiv Mandir Road',
    rating: 5,
    date: '1 month ago',
    text: 'A paradise for Hot Wheels collectors. Genuine Mattel stock, clean display cases, and fair pricing without artificial markups. Will visit again!',
  },
  {
    name: 'Sneha Deshmukh',
    area: 'Near Ambernath Station',
    rating: 5,
    date: '3 weeks ago',
    text: 'So relieved to find 100% BIS certified toys. The STEM robotics kit we bought kept my daughter engaged for hours. Excellent in-person guidance.',
  },
  {
    name: 'Amit Patel',
    area: 'Badlapur West',
    rating: 5,
    date: 'Last month',
    text: 'Reserved 15 return gift sets over WhatsApp for my son’s party. Everything was packed, labeled, and ready for pickup on time. Great service!',
  },
];

