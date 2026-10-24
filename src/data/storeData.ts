export interface Product {
  id: string;
  name: string;
  category: string;
  categorySlug: 'hot-wheels' | 'building-toys' | 'stem-learning' | 'rc-vehicles' | 'soft-toys' | 'board-games';
  price: number;
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

export const PRODUCTS: Product[] = [
  {
    id: 'anj-hw-01',
    name: "Hot Wheels Premium Car Culture 'Real Riders' 5-Car Collector Set",
    category: 'Hot Wheels & Die-Cast',
    categorySlug: 'hot-wheels',
    price: 2499,
    age: 'Collectors & Ages 4+',
    ageBracket: '13+',
    occasions: ['birthday', 'collector'],
    tag: 'Collector Series',
    availability: 'Available in Showroom',
    description: 'Official Mattel collector series featuring all-metal body and chassis, authentic automaker liveries, and Real Riders rubber tires.',
    highlights: [
      'Die-cast metal body and chassis',
      'Real Riders premium rubber compound tires',
      'Authentic automaker licensed graphics',
      'Protective collector packaging',
    ],
    specs: {
      material: 'Die-Cast Zinc Alloy & Rubber',
      dimensions: '1:64 Scale (~7.5cm length per car)',
      certification: 'BIS Certified (IS 9873 compliant)',
      batteryRequired: 'No batteries required',
      inBox: '5 Premium Die-Cast Vehicles',
    },
    svgType: 'hotwheels',
  },
  {
    id: 'anj-tech-02',
    name: 'Technic Heavy-Duty Motorized Construction Crane (840 Pieces)',
    category: 'Building Toys & Blocks',
    categorySlug: 'building-toys',
    price: 3799,
    age: 'Ages 8-14',
    ageBracket: '9-12',
    occasions: ['birthday', 'learning', 'collector'],
    tag: 'Engineering Kit',
    availability: 'Available in Showroom',
    description: 'Challenging 840-piece mechanical build equipped with gear assemblies, rotating cab, extendable boom arm, and dual-action winch.',
    highlights: [
      'Realistic gear transmission and pulley mechanics',
      'Working outrigger stabilizer legs',
      'Extendable boom reaching up to 48cm height',
      'Step-by-step colored assembly manual',
    ],
    specs: {
      material: 'Virgin High-Precision ABS Plastic',
      dimensions: '48cm x 22cm x 35cm (Assembled)',
      certification: 'BIS Certified',
      batteryRequired: 'Optional 3x AA for motorized winch',
      inBox: '840 Brick pieces, 1 Motor unit, Detailed instruction manual',
    },
    svgType: 'crane',
  },
  {
    id: 'anj-stem-03',
    name: 'CuriousMinds 6-in-1 Solar & Hydraulic Robot Explorer Lab',
    category: 'Educational & STEM',
    categorySlug: 'stem-learning',
    price: 1850,
    age: 'Ages 7-12',
    ageBracket: '6-8',
    occasions: ['birthday', 'learning', 'return-gifts'],
    tag: 'STEM Kit',
    availability: 'Available in Showroom',
    description: 'Discover physics and clean energy by assembling 6 different robotic rovers powered by water pressure and solar energy. No batteries required.',
    highlights: [
      'Powered entirely by sunlight & hydraulic water pistons',
      'Rebuilds into 6 distinct robotic exploration forms',
      'Encourages scientific problem-solving and mechanics',
      'Zero soldering or dangerous chemical components',
    ],
    specs: {
      material: 'BPA-Free Recyclable Polymer',
      dimensions: 'Varies by build (~20cm height)',
      certification: 'BIS Certified STEM Approved',
      batteryRequired: 'None (Solar panel + Hydraulic cylinders included)',
      inBox: 'Solar cell, Hydraulic cylinders, Gearbox, 140 modular pieces',
    },
    svgType: 'robot',
  },
  {
    id: 'anj-rc-04',
    name: 'Licensed 1:14 Scale McLaren P1 High-Speed RC Car with LED Lights',
    category: 'Remote Control Toys',
    categorySlug: 'rc-vehicles',
    price: 2999,
    age: 'Ages 6+',
    ageBracket: '6-8',
    occasions: ['birthday', 'collector'],
    tag: 'Licensed RC',
    availability: 'Available in Showroom',
    description: 'Licensed McLaren aerodynamic replica featuring manual dihedral butterfly doors, LED headlights, independent spring suspension, and 2.4GHz remote.',
    highlights: [
      'Scale-accurate dihedral butterfly doors that open manually',
      'Working LED headlights and realistic tail lamps',
      'Up to 15 km/h speed with responsive steering trim',
      'Rechargeable battery pack with USB charging cable',
    ],
    specs: {
      material: 'Impact-Resistant Composite Body',
      dimensions: '33cm x 15cm x 8.5cm',
      certification: 'BIS & WPC Wireless Approved',
      batteryRequired: 'Car: Rechargeable (included), Remote: 2x AA',
      inBox: '1:14 RC Supercar, 2.4GHz Controller, USB Fast Charger, Manual',
    },
    svgType: 'rcCar',
  },
  {
    id: 'anj-soft-05',
    name: 'Heritage Artisan Hand-Stitched Heirloom Teddy Bear (38cm Velvet)',
    category: 'Soft Toys & Plush',
    categorySlug: 'soft-toys',
    price: 1499,
    age: 'All Ages (0+)',
    ageBracket: '0-2',
    occasions: ['birthday', 'return-gifts'],
    tag: 'Newborn Safe',
    availability: 'Available in Showroom',
    description: 'Crafted with soft hypoallergenic plush, embroidered safety eyes, and gentle weighted paws for infant cuddles that last for years.',
    highlights: [
      'Baby-safe construction with zero sharp plastic or detachable buttons',
      'Machine washable on gentle cycle',
      'Filled with virgin conjugate fiber for bounce and shape',
      'Includes presentation ribbon for gifting',
    ],
    specs: {
      material: 'Hypoallergenic Velvet Microfiber',
      dimensions: '38cm sitting height',
      certification: 'BIS Certified Infant Safe (IS 9873 compliant)',
      batteryRequired: 'None',
      inBox: '1 Heirloom Plush Bear with Gift Tag',
    },
    svgType: 'teddy',
  },
  {
    id: 'anj-bg-06',
    name: 'TerraQuest Strategy Board Game — Deluxe Wooden Edition',
    category: 'Board Games & Puzzles',
    categorySlug: 'board-games',
    price: 2199,
    age: 'Ages 10+ to Adult',
    ageBracket: '9-12',
    occasions: ['birthday', 'learning', 'collector'],
    tag: 'Family Game',
    availability: 'Available in Showroom',
    description: 'Acclaimed civilization trade and resource management strategy game featuring laser-cut wooden hexagonal tiles, custom dice, and linen cards.',
    highlights: [
      'Engaging 60-90 minute gameplay for 3-4 players',
      'High replayability with randomized island setups',
      'Tactile wooden settlements, roads, and cities',
      'Complete rulebook and beginner quick-start guide',
    ],
    specs: {
      material: 'FSC-Certified Birch Wood & Linen Paperboard',
      dimensions: '30cm x 30cm x 7cm box',
      certification: 'BIS Certified Non-Toxic Ink',
      batteryRequired: 'None',
      inBox: '19 Terrain Hexes, 96 Resource Cards, 4 Sets of Wooden Pieces, Dice',
    },
    svgType: 'boardGame',
  },
  {
    id: 'anj-hw-07',
    name: 'Hot Wheels Monster Trucks Wrecking Raceway Track Set',
    category: 'Hot Wheels & Die-Cast',
    categorySlug: 'hot-wheels',
    price: 3299,
    age: 'Ages 4-8',
    ageBracket: '3-5',
    occasions: ['birthday', 'collector'],
    tag: 'Action Track',
    availability: 'Available in Showroom',
    description: 'Dual-lane side-by-side race track where trucks smash through obstacles to claim the trophy cup. Features dual gravity slam launchers.',
    highlights: [
      'Dual gravity slam-launchers for head-to-head racing',
      'Includes 1 Monster Truck and 1 Hot Wheels 1:64 die-cast car',
      'Folds with carrying handle for convenient home storage',
      'Connects with standard Hot Wheels orange tracks',
    ],
    specs: {
      material: 'Durable Flexible Polypropylene',
      dimensions: 'Over 1.2 meters track length',
      certification: 'BIS Certified (IS 9873)',
      batteryRequired: 'None (Gravity & Slam launcher)',
      inBox: 'Foldable Raceway, 1 Die-Cast Truck, 1 Car, Trophy Obstacle',
    },
    svgType: 'track',
  },
  {
    id: 'anj-build-08',
    name: 'MagnoCraft 3D Magnetic Geometry Palace Building Set (100 Pieces)',
    category: 'Building Toys & Blocks',
    categorySlug: 'building-toys',
    price: 2150,
    age: 'Ages 3-9',
    ageBracket: '3-5',
    occasions: ['birthday', 'return-gifts', 'learning'],
    tag: 'Magnetic Tiles',
    availability: 'Available in Showroom',
    description: 'Ultrasonic-welded translucent magnetic tiles that snap together firmly from any angle, allowing children to build 3D geometric palaces.',
    highlights: [
      'Strong rare-earth neodymium magnets securely encased',
      'Vibrant jewel-toned translucent colors that reflect light',
      'Rounded edges prevent scratches or pinched fingers',
      'Includes illustrated architectural inspiration guide',
    ],
    specs: {
      material: 'Food-Grade Ultrasonic-Sealed ABS',
      dimensions: 'Standard 7.5cm base tile size',
      certification: 'BIS Certified Safe for Children',
      batteryRequired: 'None',
      inBox: '100 Assorted Magnetic Tiles + Storage Carry Bag',
    },
    svgType: 'magnet',
  },
  {
    id: 'anj-stem-09',
    name: 'Junior Scientist 1200x LED Optical Microscope & 12 Specimen Slides',
    category: 'Educational & STEM',
    categorySlug: 'stem-learning',
    price: 1699,
    age: 'Ages 8-15',
    ageBracket: '9-12',
    occasions: ['birthday', 'learning'],
    tag: 'Lab Instrument',
    availability: 'Available in Showroom',
    description: 'Dual-light compound microscope offering 100x, 400x, and 1200x magnification. Includes optical glass lenses, specimen tools, and prepared slides.',
    highlights: [
      '3 Precision optical glass objective lenses: 100x, 400x, 1200x',
      'Dual LED illumination for transparent and solid specimens',
      '12 prepared slides (pollen, onion skin, insect wing, etc.)',
      'Includes blank slides, coverslips, tweezers, and specimen vial',
    ],
    specs: {
      material: 'Sturdy Cast-Metal Arm & Optical Components',
      dimensions: '22cm x 13cm x 8cm',
      certification: 'BIS Certified Educational Instrument',
      batteryRequired: '2x AA batteries for LED illuminator',
      inBox: 'Microscope, 12 Prepared Slides, 6 Blank Slides, Tools, Manual',
    },
    svgType: 'microscope',
  },
];

export const WHY_PARENTS_LOVE_US = [
  {
    title: 'Wide Variety Across Budgets',
    description: 'From pocket-money Hot Wheels collectibles to heirloom wooden sets and RC cars, finding the right toy fits your family budget.',
  },
  {
    title: 'Carefully Organized Shopping Experience',
    description: 'Our Ambernath showroom is methodically organized by developmental milestones and interests, so you find suitable options in minutes.',
  },
  {
    title: 'Ideal for Birthdays & Return Gifts',
    description: 'Need one special birthday gift or 30 return gifts for a party? We curate balanced packages with complimentary custom gift wrapping.',
  },
  {
    title: 'Official Hot Wheels Collector Stockist',
    description: 'Collectors and enthusiasts count on us for genuine Mattel deliveries, Car Culture premiums, and track expansions.',
  },
  {
    title: 'Attentive Local Service',
    description: 'We test toys with you, explain battery requirements, and offer genuine guidance with a smile. If an item is needed, we source it via our network.',
  },
];

export const REVIEWS = [
  {
    name: 'Rohit Deshmukh',
    role: 'Parent & Collector',
    area: 'Ambernath East',
    rating: 5,
    date: 'Recent visit',
    text: 'Best place in Ambernath for authentic Hot Wheels! The owner understands collector castings and never jacks up prices like online resellers. Clean, well-lit, and well-organized shop.',
  },
  {
    name: 'Pooja Sawant',
    role: 'Parent of two',
    area: 'Kalyan-Ambernath Link Rd',
    rating: 5,
    date: '1 month ago',
    text: 'Got return gifts for my son’s 6th birthday party here. The staff helped me curate STEM building kits within our ₹400 budget and wrapped all 25 gifts with personalized ribbons for free. Saved me days of stress!',
  },
  {
    name: 'Vikramaditya Nair',
    role: 'Local Resident',
    area: 'Shiv Mandir Area, Ambernath',
    rating: 5,
    date: 'Recent visit',
    text: 'Unmatched customer service. It genuinely feels like visiting an upscale toy showroom right here in our town. Excellent variety of wooden brain teasers and Technic sets.',
  },
  {
    name: 'Dr. Sneha Kulkarni',
    role: 'Parent & Pediatrician',
    area: 'Ambernath West',
    rating: 5,
    date: 'Recent visit',
    text: 'I appreciate their strict adherence to BIS safety standards and non-toxic materials. You will not find cheap breakable plastic here. My daughter loves the microscope kit we bought.',
  },
];

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

export interface GalleryItem {
  title: string;
  category: string;
  description: string;
}

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

