import { Project, BlogPost, AffiliateProduct } from '../types';

export const AFFILIATE_PRODUCTS: AffiliateProduct[] = [
  {
    id: 'sawstop-pcs',
    name: 'SawStop Professional Cabinet Saw (PCS 1.75HP/3HP)',
    brand: 'SawStop',
    category: 'saws',
    categoryLabel: 'Table Saws',
    badge: 'Best Overall',
    rating: 4.95,
    reviewsCount: 1420,
    priceTier: '$$$$',
    priceEstimate: '$3,149',
    image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=900&q=80',
    summary: 'The pinnacle of shop safety and heavy cast-iron vibration dampening. Flesh-detecting brake cartridge combined with the T-Glide fence provides sub-millimeter repeatable rip accuracy.',
    pros: [
      'Patented flesh-sensing contact safety system',
      'Heavy cast iron trunnions eliminate motor chatter',
      'T-Glide fence with zero deflection over 36 inches',
      'Over-arm blade guard dust port captures 94% of airborne dust'
    ],
    cons: [
      'Heavy investment upfront',
      'Requires separate dedicated 220V 20A circuit for the 3HP model'
    ],
    specs: {
      'Motor': '1.75 HP (110V) or 3.0 HP (220V)',
      'Table Size': '44" x 27" with cast iron wings',
      'Rip Capacity': '36" or 52" T-Glide Fence',
      'Arbor Size': '5/8" with Dado capacity up to 13/16"'
    },
    affiliateLink: 'https://www.woodcraft.com/products/sawstop-pcs',
    merchant: 'Woodcraft'
  },
  {
    id: 'veritas-low-angle-jack',
    name: 'Veritas Low-Angle Jack Plane (#62) with PM-V11 Blade',
    brand: 'Veritas / Lee Valley',
    category: 'hand-tools',
    categoryLabel: 'Hand Planes',
    badge: 'Premium Pick',
    rating: 4.98,
    reviewsCount: 890,
    priceTier: '$$$',
    priceEstimate: '$345',
    image: 'https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?auto=format&fit=crop&w=900&q=80',
    summary: 'The most versatile bench plane in existence. Low 12° bed angle combined with a 25° PM-V11 iron glides through tough curly walnut and end-grain cutting boards without tearout.',
    pros: [
      'Proprietary PM-V11 steel holds keen edge 2.5x longer than O1/A2',
      'Norris-style combined lateral and depth adjustment with micro-backlash',
      'Adjustable mouth opening closes down to 0.005" for gossamer shavings'
    ],
    cons: [
      'Bevel-up design requires dedicated honing angle jig for optimal sharpening'
    ],
    specs: {
      'Body Length': '14 inches ductile cast iron',
      'Blade Width': '2 inches PM-V11 powdered metal',
      'Bed Angle': '12 degrees low angle',
      'Weight': '5 lbs 12 oz'
    },
    affiliateLink: 'https://www.leevalley.com/en-us/shop/tools/hand-tools/planes/bevel-up/veritas-low-angle-jack-plane',
    merchant: 'Lee Valley'
  },
  {
    id: 'suizan-dozuki-saw',
    name: 'Suizan Japanese Dozuki 9.5-Inch Pull Saw for Fine Joinery',
    brand: 'SUIZAN',
    category: 'hand-tools',
    categoryLabel: 'Japanese Hand Saws',
    badge: 'Best Value',
    rating: 4.88,
    reviewsCount: 3840,
    priceTier: '$',
    priceEstimate: '$42',
    image: 'https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=900&q=80',
    summary: 'Cuts effortlessly on the pull stroke with a razor-thin 0.012" kerf. Ideal for hand-cut dovetails, tenon shoulders, and delicate miter joints with zero tearout.',
    pros: [
      'Ultra-thin 0.3mm kerf requires 60% less muscle exertion than western push saws',
      'Rigid steel spine prevents blade deflection on critical joint lines',
      'Impulse-hardened Japanese high carbon steel teeth stay sharp for dozens of builds'
    ],
    cons: [
      'Teeth cannot be filed by hand once dulled (replacement blades are $20)'
    ],
    specs: {
      'Blade Length': '9.5 inches (240mm)',
      'Tooth Pitch': '26 TPI (Teeth Per Inch)',
      'Blade Thickness': '0.012 inches (0.3mm)',
      'Handle': 'Traditional rattan-wrapped Paulownia wood'
    },
    affiliateLink: 'https://www.amazon.com/dp/B072186V5T',
    merchant: 'Amazon'
  },
  {
    id: 'oneida-super-dust-deputy',
    name: 'Oneida Air Systems Super Dust Deputy 4/5" Cyclone Separator',
    brand: 'Oneida Air Systems',
    category: 'dust-collection',
    categoryLabel: 'Dust Collection',
    badge: 'Best Overall',
    rating: 4.92,
    reviewsCount: 710,
    priceTier: '$$',
    priceEstimate: '$189',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=900&q=80',
    summary: 'Removes 99% of wood chips and fine sawdust before air hits your impeller and pleated HEPA filter. Prevents filter clogging and maintains consistent airflow.',
    pros: [
      'Preserves static suction pressure across all shop runs',
      'Extends expensive cartridge filter life by up to 10x',
      'Heavy static-conductive resin resists abrasive hardwood chips'
    ],
    cons: [
      'Drum barrel and mounting bracket must be purchased or built separately'
    ],
    specs: {
      'Inlet / Outlet': '4" or 5" OD tapered ports',
      'Airflow Rating': '350 to 1,400 CFM compatible',
      'Efficiency': '99% separation of bulk material and fine particles',
      'Material': 'Conductive anti-static structural resin'
    },
    affiliateLink: 'https://www.rockler.com/oneida-super-dust-deputy',
    merchant: 'Rockler'
  },
  {
    id: 'bosch-1617evspk-router',
    name: 'Bosch 1617EVSPK 2.25 HP Plunge & Fixed Base Router Kit',
    brand: 'Bosch Professional',
    category: 'routers',
    categoryLabel: 'Routers & Joinery',
    badge: 'Best Value',
    rating: 4.91,
    reviewsCount: 4520,
    priceTier: '$$',
    priceEstimate: '$219',
    image: 'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=900&q=80',
    summary: 'The gold standard benchmark router for both hand-held profiling and table-mounted mortising. Constant Response electronic circuitry maintains RPM under heavy load.',
    pros: [
      'Variable speed dial (8,000 to 25,000 RPM) handles small bits to 3" panel raisers',
      'Microfine bit-depth adjustment directly through router table top',
      'Smooth spring plunge base with 3-stop turret for deep mortises'
    ],
    cons: [
      'Dust collection shroud requires separate adapter kit'
    ],
    specs: {
      'Horsepower': '2.25 HP (12.0 Amp motor)',
      'Collet Capacity': '1/4" and 1/2" precision collets included',
      'Speed Range': '8,000 – 25,000 RPM soft start',
      'Weight': '18.2 lbs (kit with both bases)'
    },
    affiliateLink: 'https://www.amazon.com/dp/B00005RHPD',
    merchant: 'Amazon'
  },
  {
    id: 'bessey-k-body-revo',
    name: 'Bessey K-Body REVO 50-Inch Parallel Clamp Set (4-Pack)',
    brand: 'Bessey Tools',
    category: 'clamps',
    categoryLabel: 'Clamping & Workholding',
    badge: 'Most Durable',
    rating: 4.94,
    reviewsCount: 1680,
    priceTier: '$$$',
    priceEstimate: '$249',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=900&q=80',
    summary: 'Ensures 90-degree glue-ups without racking or bowed panel surfaces. Large cold-drawn steel rails with 1,700 lbs of nominal clamping force and glue-resistant jaw pads.',
    pros: [
      'Massive 3-3/4" throat depth with true parallel jaw alignment',
      'Removable pressure caps resist PVA, epoxy, and polyurethane glue',
      'Rail protection clips keep timber elevated off metal bars'
    ],
    cons: [
      'Heavy when transporting across the workshop (approx. 8 lbs per clamp)'
    ],
    specs: {
      'Clamping Capacity': '50 inches (1,270 mm)',
      'Throat Depth': '3-3/4 inches (95 mm)',
      'Clamping Force': 'Up to 1,700 lbs per clamp',
      'Bar Profile': 'Cold-drawn steel rail'
    },
    affiliateLink: 'https://www.woodcraft.com/products/bessey-k-body-revo-parallel-clamp',
    merchant: 'Woodcraft'
  },
  {
    id: 'rubio-monocoat-2c',
    name: 'Rubio Monocoat Oil Plus 2C Hardwax Oil (350ml Set - Pure)',
    brand: 'Rubio Monocoat',
    category: 'finishing',
    categoryLabel: 'Finishing & Oils',
    badge: 'Editor’s Choice',
    rating: 4.93,
    reviewsCount: 2210,
    priceTier: '$$',
    priceEstimate: '$58',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=900&q=80',
    summary: 'Molecularly bonds with cellulose wood fibers in a single coat. 0% VOC, plant-based, satin tactile finish that highlights natural walnut and oak grain without looking plastic.',
    pros: [
      'True single-coat application saves days of curing time compared to poly',
      'Zero volatile organic compounds (VOCs) - safe to apply indoors without respirators',
      'Localized spot repair without needing to sand down the entire tabletop'
    ],
    cons: [
      'Requires exact surface prep sanded strictly between 120 and 150 grit'
    ],
    specs: {
      'Coverage': 'Approx. 150–200 sq.ft per 350ml',
      'Curing Time': '80% cure in 48 hours, 100% cure in 5 days',
      'VOC Content': '0% VOC certified',
      'Colors': 'Pure (natural tone) + 55 architectural tints'
    },
    affiliateLink: 'https://www.amazon.com/dp/B00KAXGPYM',
    merchant: 'Amazon'
  },
  {
    id: 'narex-richter-chisels',
    name: 'Narex Richter Cryo-Treated Bevel Edge Chisel Set (5-Piece)',
    brand: 'Narex Richter',
    category: 'hand-tools',
    categoryLabel: 'Chisels & Carving',
    badge: 'Best Value',
    rating: 4.96,
    reviewsCount: 940,
    priceTier: '$$',
    priceEstimate: '$178',
    image: 'https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?auto=format&fit=crop&w=900&q=80',
    summary: 'Named after founder Vaclav Richter, featuring chromium-manganese steel cryogenically treated to 62 HRC. Ultra-thin land bevels fit cleanly into the tightest dovetail corners.',
    pros: [
      'Cryogenic treatment yields fine grain structure and razor edge retention',
      'Sides ground almost razor-thin for delicate dovetail pin walls',
      'Turned European ash handles with solid stainless steel ferrules'
    ],
    cons: [
      'Backs require flat lapping before first use (approx. 5 minutes per chisel)'
    ],
    specs: {
      'Sizes Included': '1/4", 3/8", 1/2", 3/4", 1" (6mm to 25mm)',
      'Steel': 'Cryogenically treated Cr-Mn (62 HRC)',
      'Handles': 'Selected European Ash wood',
      'Origin': 'Handcrafted in Bystřice, Czech Republic',
      'Noise Level': 'Hand Tool (0 dB)',
      'Vibration Score': '9.8/10'
    },
    affiliateLink: 'https://www.highlandwoodworking.com/narex-richter-chisel-set.aspx',
    merchant: 'Highland Woodworking'
  },
  {
    id: 'festool-ets-ec-125',
    name: 'Festool ETS EC 125 EQ Random Orbital Sander',
    brand: 'Festool',
    category: 'hand-tools',
    categoryLabel: 'Sanding & Surface Prep',
    badge: 'Editor’s Choice',
    rating: 4.94,
    reviewsCount: 620,
    priceTier: '$$$',
    priceEstimate: '$419',
    image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=900&q=80',
    summary: 'Brushless EC-TEC motor with vibration control and automatic dust extraction detection. Produces swirl-free flat tabletops with zero hand fatigue.',
    pros: [
      'Ergonomic low-profile grip with vibration brake',
      'Brushless motor lasts 5x longer than standard universal motors',
      'Exceptional dust extraction when connected to Festool CT vac'
    ],
    cons: [
      'Requires proprietary StickFix sanding abrasives for optimal airflow'
    ],
    specs: {
      'Power Consumption': '400 Watts (Brushless)',
      'Pad Diameter': '5 inches (125mm)',
      'Noise Level': '68 dB (Ear level)',
      'Dust Efficiency': '97% with CT Dust Extractor'
    },
    affiliateLink: 'https://www.woodcraft.com/products/festool-ets-ec-125',
    merchant: 'Woodcraft'
  },
  {
    id: 'milwaukee-m18-fuel-bandsaw',
    name: 'Milwaukee M18 FUEL Deep Cut Portable Bandsaw',
    brand: 'Milwaukee',
    category: 'saws',
    categoryLabel: 'Portable Saws',
    badge: 'Most Durable',
    rating: 4.92,
    reviewsCount: 1140,
    priceTier: '$$$',
    priceEstimate: '$379',
    image: 'https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=900&q=80',
    summary: 'The ultimate cordless metal and hardwood cutting portable bandsaw. Jobsite tough with variable speed dial and LED work light.',
    pros: [
      'Massive 5x5 inch cutting capacity',
      'Brushless POWERSTATE motor cuts through dense steel and exotic hardwoods effortlessly',
      'Tool-free locking adjustable shoe'
    ],
    cons: [
      'Heavy when used overhead for extended periods'
    ],
    specs: {
      'Blade Length': '44-7/8 inches',
      'Speed': '0 - 380 SFPM variable',
      'Weight': '14.5 lbs with 5.0 Ah battery',
      'Noise Level': '76 dB'
    },
    affiliateLink: 'https://www.amazon.com/dp/B07G3HJX7F',
    merchant: 'Amazon'
  },
  {
    id: 'kreg-pocket-hole-720pro',
    name: 'Kreg Pocket-Hole Jig 720Pro with Automaxx Clamping',
    brand: 'Kreg Tool',
    category: 'routers',
    categoryLabel: 'Joinery Jigs',
    badge: 'Best Value',
    rating: 4.89,
    reviewsCount: 2980,
    priceTier: '$$',
    priceEstimate: '$149',
    image: 'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=900&q=80',
    summary: 'Automaxx one-motion clamping automatically adjusts to material thickness from 1/2" to 1-1/2". Built-in storage and dust collection chip chute.',
    pros: [
      'One-handed clamping mechanism saves hours on cabinet face frames',
      'GripMaxx anti-slip material clamping holds workpieces firmly without slipping',
      'Integrated dust collection port hooks directly to shop vac'
    ],
    cons: [
      'Plastics body requires careful handling in cold winter shops'
    ],
    specs: {
      'Material Compatibility': '1/2" to 1-1/2" thickness',
      'Clamping Action': 'Automaxx auto-adjusting lever',
      'Drill Guides': 'Hardened steel drill guides with lifetime warranty'
    },
    affiliateLink: 'https://www.rockler.com/kreg-pocket-hole-jig-720pro',
    merchant: 'Rockler'
  },
  {
    id: 'diablo-miter-saw-blade',
    name: 'Diablo 12-Inch 80-Tooth Fine Finish Miter Saw Blade',
    brand: 'Diablo / Freud',
    category: 'saws',
    categoryLabel: 'Saw Blades',
    badge: 'Editor’s Choice',
    rating: 4.97,
    reviewsCount: 5410,
    priceTier: '$',
    priceEstimate: '$79',
    image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=900&q=80',
    summary: 'Hi-ATB tooth grind produces mirror-clean crosscuts in delicate crown molding, hardwood trim, and melamine with zero chipping.',
    pros: [
      'TiCo high-density carbide with titanium for razor edge longevity',
      'Perma-Shield non-stick coating resists heat buildup and gumming',
      'Laser-cut stabilizer vents absorb vibration and noise'
    ],
    cons: [
      'Too many teeth for fast ripping along the grain'
    ],
    specs: {
      'Diameter': '12 inches',
      'Tooth Count': '80 TPI Hi-ATB',
      'Arbor Size': '1 inch with knock-out arbor',
      'Kerf': '0.098 inches thin kerf'
    },
    affiliateLink: 'https://www.amazon.com/dp/B0000223VO',
    merchant: 'Amazon'
  }
];

export const PORTFOLIO_PROJECTS: Project[] = [
  {
    id: 'kyoto-tambour-credenza',
    title: 'Kyoto Tambour Credenza in Black Walnut & Solid Brass',
    subtitle: 'Fine Furniture · Slatted Flexible Doors & Through Dovetails',
    category: 'furniture',
    timberSpecies: ['American Black Walnut', 'Hard White Maple', 'Quarter-sawn Sycamore'],
    finish: 'Rubio Monocoat 2C (Pure) with beeswax topcoat on tambour tracks',
    dimensions: '72" L × 19" D × 31" H',
    buildTime: '94 Shop Hours',
    difficulty: 'Master',
    description: 'A mid-century modern credenza informed by Japanese architectural minimalism. Features hand-cut walnut tambour slats sliding smoothly in continuous routed radiused tracks.',
    fullStory: 'Conceived for a private collector in Seattle, this credenza explores the sensory interplay between dark figured American Black Walnut and precision-milled solid naval brass. The carcase is joined using 24 through dovetails hand-sawn at an 1:8 angle. The dual tambour doors consist of 86 individual walnut slats backed on heavy linen canvas, glided on UHMW-waxed tracks for silent operation. Interior drawer boxes feature creamy hard maple with half-blind dovetails and hand-carved pulls.',
    keyFeatures: [
      'Hand-beveled 86-slat flexible walnut tambour doors on routed radiused tracks',
      'Continuous waterfall grain match wrapping across top and waterfall mitered sides',
      'Solid brass knurled cylindrical legs turned on the metal lathe in-house',
      'Zero mechanical drawer slides: classic hardwood runners with tallow wax glide'
    ],
    image: '/src/assets/images/woodworking_hero_1790205510240.jpg',
    secondaryImage: '/src/assets/images/joinery_detail_1790205522631.jpg',
    toolsUsed: [
      {
        id: 'sawstop-pcs',
        name: 'SawStop Professional Cabinet Saw',
        category: 'Power Saws',
        role: 'Carcase dimensioning & compound bevel cuts',
        affiliateUrl: 'https://www.woodcraft.com/products/sawstop-pcs',
        priceEstimate: '$3,149'
      },
      {
        id: 'suizan-dozuki-saw',
        name: 'Suizan Japanese Dozuki 9.5" Saw',
        category: 'Hand Saws',
        role: 'Hand-cutting 24 carcase through dovetails',
        affiliateUrl: 'https://www.amazon.com/dp/B072186V5T',
        priceEstimate: '$42'
      },
      {
        id: 'veritas-low-angle-jack',
        name: 'Veritas #62 Low-Angle Jack Plane',
        category: 'Hand Planes',
        role: 'Hand-smoothing waterfall panels without sanding tearout',
        affiliateUrl: 'https://www.leevalley.com/en-us/shop/tools/hand-tools/planes/bevel-up/veritas-low-angle-jack-plane',
        priceEstimate: '$345'
      },
      {
        id: 'rubio-monocoat-2c',
        name: 'Rubio Monocoat Oil Plus 2C Pure',
        category: 'Finishing',
        role: 'Tactile zero-VOC breathable hardwax finish',
        affiliateUrl: 'https://www.amazon.com/dp/B00KAXGPYM',
        priceEstimate: '$58'
      }
    ],
    joineryMethods: [
      'Hand-cut through dovetails (1:8 pitch)',
      'Bridle joints with walnut dowel drawbores',
      'Half-blind dovetails on solid maple drawer boxes',
      'Routed radius tambour raceways with graphite lube'
    ],
    clientOrLocation: 'Private Residence, Mercer Island, WA',
    year: 2025
  },
  {
    id: 'claro-walnut-dining-trestle',
    title: 'Claro Walnut Live-Edge Dining Trestle with Wenge Bowties',
    subtitle: 'Fine Furniture · Breadboard Ends & Sculpted Splayed Trestle',
    category: 'furniture',
    timberSpecies: ['Claro Walnut Bookmatched Slabs', 'African Wenge (Keys)', 'White Oak (Internal Tenons)'],
    finish: 'Four coats polymerized tung oil cut with citrus solvent, buffed with carnauba',
    dimensions: '108" L × 42" W × 29.5" H',
    buildTime: '112 Shop Hours',
    difficulty: 'Master',
    description: 'Bookmatched 9-foot California Claro walnut dining table seating 10 comfortably. Stabilized with 7 hand-inlaid wenge butterfly keys and joined by a knock-down wedged through-tenon stretcher.',
    fullStory: 'Harvested from an orchard salvage tree in Northern California, this live-edge slab pair revealed deep fiddleback curl, sapwood chatoyancy, and natural drying checks that were honored rather than hidden. We stabilized natural checks using hand-carved African wenge butterfly bowties tap-fitted with hide glue. The trestle base utilizes dual splayed legs joined to heavy footings with wedged mortise and tenons, allowing seasonal wood expansion of up to 3/8" across the slab width.',
    keyFeatures: [
      'Bookmatched 9-foot continuous walnut slab top with deep fiddleback curl',
      'Hand-inlaid African Wenge structural butterfly keys on both top and underside',
      'Traditional breadboard ends with slotted elongated drawbore dowels',
      'Knock-down wedged through-tenon trestle stretcher for heirloom transport'
    ],
    image: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1200&q=80',
    secondaryImage: '/src/assets/images/joinery_detail_1790205522631.jpg',
    toolsUsed: [
      {
        id: 'bosch-1617evspk-router',
        name: 'Bosch 1617EVSPK 2.25HP Router',
        category: 'Routers',
        role: 'Flattening slab with 2" bottom-cleaning bit in shop-made sled',
        affiliateUrl: 'https://www.amazon.com/dp/B00005RHPD',
        priceEstimate: '$219'
      },
      {
        id: 'narex-richter-chisels',
        name: 'Narex Richter Cryo Chisel Set',
        category: 'Hand Tools',
        role: 'Paring bowtie mortise sidewalls to hair-splitting tolerances',
        affiliateUrl: 'https://www.highlandwoodworking.com/narex-richter-chisel-set.aspx',
        priceEstimate: '$178'
      },
      {
        id: 'bessey-k-body-revo',
        name: 'Bessey K-Body REVO 50" Clamps',
        category: 'Clamps',
        role: 'High-pressure center seam bookmatch glue-up',
        affiliateUrl: 'https://www.woodcraft.com/products/bessey-k-body-revo-parallel-clamp',
        priceEstimate: '$249'
      }
    ],
    joineryMethods: [
      'Slotted drawbored breadboard ends with walnut pegs',
      'Wedged through-tenons with African blackwood wedges',
      'Hand-chiseled wenge butterfly keys (compound 4-degree undercut)',
      'Tabletop expansion button brackets (figure-eight steel fasteners)'
    ],
    clientOrLocation: 'Architectural Commission, Bend, Oregon',
    year: 2025
  },
  {
    id: 'roubo-master-workbench',
    title: 'French Roubo Split-Top Cabinetmaker’s Workbench',
    subtitle: 'Workshop Builds · 4" Hard Maple Slab, Leg Vise & Wagon Vise',
    category: 'shop',
    timberSpecies: ['Hard Sugar Maple', 'Steamed American Beech', 'Jatoba (Chop Face)'],
    finish: 'Boiled linseed oil & pure beeswax hot-burnished into the wood',
    dimensions: '88" L × 28" W × 34" H',
    buildTime: '82 Shop Hours',
    difficulty: 'Master',
    description: 'The heartbeat of our workshop. An 88-inch traditional split-top Roubo bench weighing 410 lbs, engineered for rock-solid stability during aggressive hand-planing and joinery paring.',
    fullStory: 'A woodworker’s work is only as flat and stable as the bench beneath it. Constructed from 4-inch thick laminations of kiln-dried sugar maple, this bench does not budge a micron even when hogging material with a scrub plane. Equipped with a Benchcrafted Crisscross leg vise providing effortless one-handed clamping up to 9 inches, a sliding wagon tail vise for dog-hole panel clamping, and a removable center gap stop that doubles as a hand-sawing register.',
    keyFeatures: [
      '4-inch thick sugar maple laminated top weighing 320 lbs on its own',
      'Cast iron handwheel leg vise with Crisscross mechanism for instant parallel travel',
      'Concealed wagon tail vise with in-line 3/4" brass bench dog array',
      'Massive 5" × 5" legs joined to stretchers with drawbored mortise and tenons'
    ],
    image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=1200&q=80',
    secondaryImage: '/src/assets/images/woodworking_hero_1790205510240.jpg',
    toolsUsed: [
      {
        id: 'veritas-low-angle-jack',
        name: 'Veritas #62 Low-Angle Jack Plane',
        category: 'Hand Planes',
        role: 'Flattening the 88" benchtop across diagonal and length',
        affiliateUrl: 'https://www.leevalley.com/en-us/shop/tools/hand-tools/planes/bevel-up/veritas-low-angle-jack-plane',
        priceEstimate: '$345'
      },
      {
        id: 'oneida-super-dust-deputy',
        name: 'Oneida Super Dust Deputy Cyclone',
        category: 'Dust Collection',
        role: 'Handled over 45 gallons of maple planer shavings',
        affiliateUrl: 'https://www.rockler.com/oneida-super-dust-deputy',
        priceEstimate: '$189'
      },
      {
        id: 'bessey-k-body-revo',
        name: 'Bessey K-Body REVO Parallel Clamps',
        category: 'Clamps',
        role: '14-clamp simultaneous lamination glue-up with slow Titebond III',
        affiliateUrl: 'https://www.woodcraft.com/products/bessey-k-body-revo-parallel-clamp',
        priceEstimate: '$249'
      }
    ],
    joineryMethods: [
      'Full-depth blind mortise and tenon leg joints',
      'Drawbored oak trunnels driven dry through staggered offsets',
      'Dovetailed end cap housing wagon vise screw assembly',
      'Breadboard end with sliding splines'
    ],
    clientOrLocation: 'TimberCraft Studio Benchmark Asset, Spokane, WA',
    year: 2024
  },
  {
    id: 'kumiko-hinoki-wall-cabinet',
    title: 'Asanoha Kumiko Wall Cabinet in Alaska Yellow Cedar & Hinoki',
    subtitle: 'Timber Joinery · Hand-Chiseled Lattice & Sliding Shoji Rails',
    category: 'joinery',
    timberSpecies: ['Alaskan Yellow Cedar', 'Japanese Hinoki Cypress', 'Black Walnut Accent Frame'],
    finish: 'Unfinished silky burnished wood surface + microcrystalline Renaissance Wax',
    dimensions: '34" W × 26" H × 7.5" D',
    buildTime: '68 Shop Hours',
    difficulty: 'Master',
    description: 'A study in Japanese joinery precision. Over 340 tiny cedar strips planed in custom angle jigs at 30° and 60° angles to form the sacred Asanoha (hemp leaf) geometric pattern.',
    fullStory: 'Kumiko is woodworking elevated to meditation. Each piece in the lattice grid is planed to a thickness of exactly 1.8mm and friction-fitted with zero glue or nails. Behind the lattice sits handmade Japanese mulberry washi paper, softening natural sunlight and casting ethereal geometric shadows across the room. The exterior frame is joined with mitered half-lap joints keyed with contrasting black walnut.',
    keyFeatures: [
      '340+ individual hand-planed lattice pieces friction-locked with zero fasteners',
      'Traditional hand-made mulberry Kozo washi paper backing for diffused illumination',
      'Sliding wooden tracks hand-routed with brass guide pins',
      'Knife hinges completely mortised flush into the carcase frame'
    ],
    image: '/src/assets/images/joinery_detail_1790205522631.jpg',
    secondaryImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
    toolsUsed: [
      {
        id: 'suizan-dozuki-saw',
        name: 'Suizan Japanese Dozuki 9.5" Saw',
        category: 'Hand Saws',
        role: 'Cross-cutting 1.8mm lattice strips cleanly',
        affiliateUrl: 'https://www.amazon.com/dp/B072186V5T',
        priceEstimate: '$42'
      },
      {
        id: 'narex-richter-chisels',
        name: 'Narex Richter Cryo Chisel Set',
        category: 'Hand Tools',
        role: 'Paring half-lap grid notches in pairing jig',
        affiliateUrl: 'https://www.highlandwoodworking.com/narex-richter-chisel-set.aspx',
        priceEstimate: '$178'
      }
    ],
    joineryMethods: [
      'Asanoha kumiko geometric friction-fit interlocking grid',
      'Mitered half-lap corner joints with keyed splines',
      'Sliding shoji tongue-in-groove carcase runners',
      'Hand-chiseled French cleat wall mounting system'
    ],
    clientOrLocation: 'Exhibition Collection & Custom Commission',
    year: 2025
  },
  {
    id: 'sculpted-white-oak-rocker',
    title: 'Maloof-Inspired Sculpted Rocking Chair in Quarter-Sawn White Oak',
    subtitle: 'Fine Furniture · Steam-Bent Back Slats & Copied Sculpted Joints',
    category: 'furniture',
    timberSpecies: ['Quarter-sawn American White Oak', 'Ebony Plug Accents'],
    finish: 'Custom blend: 1/3 Boiled Linseed, 1/3 Pure Tung, 1/3 Spar Varnish, 6 hand-rubbed coats',
    dimensions: '28" W × 44" D × 46" H',
    buildTime: '124 Shop Hours',
    difficulty: 'Master',
    description: 'Sculpted entirely by hand using inshaves, spokeshaves, and rasp files. Seven steam-bent flexible back slats support lumbar curvature with zero pressure points.',
    fullStory: 'Inspired by the legendary craft of Sam Maloof, this rocker represents the peak of ergonomic woodworking. The seat is sculpted from a 2-inch thick solid white oak blank dished out to conform to the human body. The iconic Maloof joint joins the sculpted armrests and rear legs directly into the seat blank with deep interlocking dados and hardened steel structural screws plugged with Gaboon ebony. The rockers themselves are bent laminations of seven 1/8" oak strips clamped in a radiused form.',
    keyFeatures: [
      'Sculpted 2-inch thick contour seat blank dished out with gouges and scorp',
      'Seven steam-bent back laths laminations shaped to conform to lumbar spine',
      'Interlocking sculpted joints with hand-shaped transitional flowing radii',
      'Balanced center of gravity: glides forward and back with fingertip pressure'
    ],
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80',
    secondaryImage: '/src/assets/images/woodworking_hero_1790205510240.jpg',
    toolsUsed: [
      {
        id: 'bosch-1617evspk-router',
        name: 'Bosch 1617EVSPK Router Kit',
        category: 'Routers',
        role: 'Maloof joint interlocking dados and rabbets',
        affiliateUrl: 'https://www.amazon.com/dp/B00005RHPD',
        priceEstimate: '$219'
      },
      {
        id: 'bessey-k-body-revo',
        name: 'Bessey K-Body REVO Clamps',
        category: 'Clamps',
        role: 'Form-pressing 7-layer bent rocker laminations',
        affiliateUrl: 'https://www.woodcraft.com/products/bessey-k-body-revo-parallel-clamp',
        priceEstimate: '$249'
      },
      {
        id: 'narex-richter-chisels',
        name: 'Narex Richter Chisel Set',
        category: 'Hand Tools',
        role: 'Final scraping and transitions at the seat joint junctions',
        affiliateUrl: 'https://www.highlandwoodworking.com/narex-richter-chisel-set.aspx',
        priceEstimate: '$178'
      }
    ],
    joineryMethods: [
      'Maloof-style modified interlocking dowel & dado joints',
      'Cold-pressed epoxy bent lamination rocker runners',
      'Drawbored crest rail with ebony concealed dowels',
      'Sculpted flush joint blending'
    ],
    clientOrLocation: 'Private Commission, Aspen, Colorado',
    year: 2024
  },
  {
    id: 'turned-burl-segmented-vessels',
    title: 'Box Elder Burl & African Blackwood Turned Hollow Forms',
    subtitle: 'Lathe & Woodturning · Thin-Wall 3mm Turning & Friction Polish',
    category: 'turning',
    timberSpecies: ['Flame Box Elder Burl', 'African Blackwood', 'Curly Bigleaf Maple'],
    finish: 'Micro-crystalline carnauba wax over 12 coats hand-applied blonde shellac',
    dimensions: '14" Diameter × 18" H',
    buildTime: '36 Shop Hours',
    difficulty: 'Journeyman',
    description: 'Turned on the lathe from green salvaged box elder burl displaying vivid scarlet flame veins. Hollowed blindly through a 1-inch neck to a uniform 3mm wall thickness.',
    fullStory: 'Turning burl requires deep intuition for timber grain shifts and centrifugal physics. Mounted between centers on a heavy 2HP lathe, the exterior profile was shaped with a 1/2" swept-back bowl gouge. The interior was excavated through a tiny neck opening using carbide-tipped hollowing bars with laser caliper guidance to maintain an even 3mm thickness throughout, preventing checking as the wood slowly cured.',
    keyFeatures: [
      'Natural vivid scarlet flame veins resulting from fungus interaction in the living tree',
      'Excavated blindly through 1-inch neck to uniform 3mm wall thickness',
      'African blackwood threaded collar lid with brass finial inlay',
      'Weightless feel in the hands with translucent edge under strong light'
    ],
    image: 'https://images.unsplash.com/photo-1544457070-4cd773b4d71e?auto=format&fit=crop&w=1200&q=80',
    secondaryImage: '/src/assets/images/joinery_detail_1790205522631.jpg',
    toolsUsed: [
      {
        id: 'narex-richter-chisels',
        name: 'Narex Richter Cryo Chisel Set',
        category: 'Hand Tools',
        role: 'Detail finial turning and scraper shear-planing',
        affiliateUrl: 'https://www.highlandwoodworking.com/narex-richter-chisel-set.aspx',
        priceEstimate: '$178'
      }
    ],
    joineryMethods: [
      'Precision faceplate ring chucking',
      'End-grain blind hollowing with laser thickness monitor',
      'Threaded friction-fit lid junction'
    ],
    clientOrLocation: 'Pacific Northwest Gallery Feature',
    year: 2025
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'table-saw-shootout-2026',
    slug: 'best-cabinet-table-saws-reviewed',
    title: 'The 2026 Table Saw Shootout: Cabinet vs. Contractor Saws Tested',
    metaTitle: 'Best Cabinet Table Saws 2026: Hands-On Field Test & Buyer Guide',
    metaDescription: 'We tested 5 leading cabinet table saws in our production woodshop over 6 months. Read our unbiased hands-on review of SawStop, Powermatic, and Harvey.',
    excerpt: 'We measured arbor runout, dust collection CFM efficiency, vibration, and fence deflection across 5 leading saws. Here is which tool deserves your shop floor.',
    category: 'Tool Reviews',
    readTime: '9 min read',
    date: 'February 18, 2026',
    isoDate: '2026-02-18',
    coverImage: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=1200&q=80',
    author: {
      name: 'Johnson Wadimbe',
      role: 'Master Furniture Maker & Lead Tool Tester',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
    },
    tags: ['Table Saws', 'Workshop Tools', 'Tool Comparison', 'Safety Gear'],
    keyTakeaways: [
      'SawStop PCS 3HP remains the overall winner due to unmatched safety tech combined with cast-iron rigidity.',
      'Fence deflection matters more than horsepower: even 0.010" deflection at the back of the blade can cause burn marks and dangerous kickback.',
      'Overarm dust shrouds capture over 85% of fine particulate that internal cabinet chutes miss.',
      'If you have 110V power only, the 1.75HP motor can rip 8/4 walnut provided you use a dedicated thin-kerf 24-tooth glue-line rip blade.'
    ],
    tableOfContents: [
      { id: 'why-trust-us', title: 'Why Trust Our Shop Testing' },
      { id: 'critical-benchmarks', title: 'The 4 S-Tier Benchmarks' },
      { id: 'our-top-picks', title: 'Top Ranked Table Saws for 2026' },
      { id: 'comparison-matrix', title: 'Full Technical Spec Matrix' },
      { id: 'dust-and-safety', title: 'Dust Collection & 220V Considerations' },
      { id: 'frequently-asked-questions', title: 'Frequently Asked Questions' }
    ],
    featuredProduct: AFFILIATE_PRODUCTS[0],
    contentSections: [
      {
        id: 'why-trust-us',
        heading: 'Why Trust Our Shop Testing Over Generic Tech Sites',
        paragraphs: [
          'Most online tool guides are written by affiliate content farms who copy manufacturer spec sheets without ever smelling sawdust or ripping an 8-foot slab of quarter-sawn white oak. In our studio, table saws do not sit on display pedestals—they mill thousands of board feet of dense hardwoods every single month.',
          'Over a rigorous 6-month evaluation cycle, we placed dial indicators on the arbors to measure axial runout under load, calibrated fence parallelism with machinist straightedges, and hooked up static pressure gauges to measure particulate containment during full-depth dados.'
        ],
        callout: {
          type: 'pro-tip',
          title: 'The 0.002" Rule',
          text: 'Any table saw with arbor runout exceeding 0.002 inches will vibrate, produce scalloped blade marks, and require excessive hand planing. Our top picks all measured under 0.0008" straight out of the crate.'
        }
      },
      {
        id: 'critical-benchmarks',
        heading: 'The 4 Benchmarks That Actually Matter at the Bench',
        paragraphs: [
          'When evaluating a saw for heirloom furniture and cabinet work, marketing buzzwords do not matter. The following four mechanical factors dictate whether your cuts will be glass-smooth or frustratingly inaccurate:',
          '1. Trunnion Mass & Mounting: Table-mounted trunnions (found on cheap jobsite saws) warp under heavy slab weight. Cabinet-mounted cast iron trunnions bolt directly to the heavy chassis, absorbing vibration before it reaches the table top.',
          '2. Fence Lock Stability: A true Biesemeyer-style T-glide fence locks with a cam lever against the front tubular rail only, leaving the rear floating to maintain absolute parallelism without pinching.',
          '3. Arbor Flange Machining: Cheap stamped washers cup under arbor nut torque, deflecting the blade body. Precision ground cast flanges ensure 100% planar contact with the carbide plate.',
          '4. Riving Knife Mechanism: Tool-less quick-change riving knives ensure you actually leave the safety knife in place during non-through cuts and dados.'
        ]
      },
      {
        id: 'our-top-picks',
        heading: 'Top Ranked Table Saws for 2026',
        paragraphs: [
          'After thousands of cuts in 8/4 hard maple, purpleheart, and sheet goods, the SawStop Professional Cabinet Saw (PCS) took our top spot. While its flesh-sensing safety cartridge is world-renowned, the machine itself is a masterwork of industrial tool engineering.',
          'The T-Glide fence glides like it is on ball bearings and locks down with zero micro-deflection. The dust shroud wraps closely around the blade under the table, collecting 94% of dust when paired with a 4-inch collector.'
        ]
      },
      {
        id: 'comparison-matrix',
        heading: 'Direct Mechanical Comparison Matrix',
        paragraphs: [
          'Below is our measured performance data recorded using Mitutoyo digital dial indicators and anemometer air velocity meters in our climate-controlled workshop.'
        ],
        comparisonTable: {
          headers: ['Model', 'Motor Power', 'Arbor Runout', 'Dust Efficiency', 'Price Range'],
          rows: [
            ['SawStop PCS 3HP', '3.0 HP (220V)', '0.0006 in', '94% with Overarm', '$$$$ ($3,149)'],
            ['Powermatic PM1000', '1.75 HP (110V)', '0.0008 in', '86% Standard', '$$$ ($2,499)'],
            ['Harvey Alpha HW110', '4.0 HP (220V)', '0.0005 in', '91% Compass Guard', '$$$$ ($3,400)'],
            ['Grizzly G0899 Hybrid', '2.0 HP (110/220)', '0.0014 in', '78% Standard', '$$ ($1,495)']
          ]
        }
      },
      {
        id: 'dust-and-safety',
        heading: 'Dust Collection & Electrical Power Considerations',
        paragraphs: [
          'A table saw produces fine 2.5-micron dust particles that stay suspended in shop air for hours, posing serious occupational health risks. A standard shop-vac with a 2.5-inch hose cannot provide the 400+ CFM required to evacuate a cabinet saw enclosure.',
          'We strongly recommend pairing any 10-inch cabinet saw with a 4-inch port connected to a dedicated 1.5HP or 2HP cyclone separator (such as the Oneida Super Dust Deputy). Additionally, check your breaker panel before ordering a 3HP saw: you will need a 220V 20-amp dedicated outlet with 12/2 Romex wiring.'
        ]
      }
    ],
    faqItems: [
      {
        q: 'Can a 1.75 HP table saw rip 2-inch thick hardwood?',
        a: 'Yes! However, you must use a high-quality 24-tooth thin-kerf rip blade (such as a Freud Premier Fusion or Forrest Woodworker II). Full-kerf blades with 50 teeth will cause the motor to bog down and burn the timber.'
      },
      {
        q: 'Is SawStop safety technology worth the price premium?',
        a: 'Unquestionably. The average surgical cost of reconstructing a severed extensor tendon or knuckle joint is over $35,000, not to mention career-ending nerve damage. The $800 premium over comparable non-safety saws is the best insurance policy in the craft.'
      },
      {
        q: 'Should I buy a 36-inch or 52-inch fence?',
        a: 'If you frequently break down 4x8 plywood sheets without a track saw, get the 52-inch. But if space is at a premium or you use a track saw for initial sheet breakdown, the 36-inch fence saves valuable floor space without sacrificing furniture-making capability.'
      }
    ]
  },
  {
    id: 'japanese-vs-western-saws',
    slug: 'japanese-pull-saws-vs-western-backsaws',
    title: 'Japanese Pull Saws (Nokogiri) vs. Western Backsaws: Which Should You Buy First?',
    metaTitle: 'Japanese vs Western Hand Saws: Complete Woodworker Guide & Field Test',
    metaDescription: 'Should beginners buy a Japanese Dozuki or a Western backsaw? We compare ergonomics, kerf thickness, blade maintenance, and joinery accuracy.',
    excerpt: 'The eternal joinery debate: pull-stroke vs. push-stroke. We break down kerf physics, tooth geometry, blade tension, and which saw will make your joints tighter.',
    category: 'Joinery Techniques',
    readTime: '7 min read',
    date: 'January 29, 2026',
    isoDate: '2026-01-29',
    coverImage: 'https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=1200&q=80',
    author: {
      name: 'Johnson Wadimbe',
      role: 'Master Furniture Maker & Lead Tool Tester',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
    },
    tags: ['Hand Saws', 'Japanese Tools', 'Joinery', 'Hand Tool Woodworking'],
    keyTakeaways: [
      'Japanese saws cut on the pull stroke, meaning tension straightens the blade automatically during the cut.',
      'Because they operate under tension, Japanese blades are 50% thinner (0.012" vs 0.025"), removing far less wood and requiring much less physical effort.',
      'Western saws excel when cutting tenons in tall vises because you can utilize your body weight to push through dense oak and maple.',
      'For beginners learning hand-cut dovetails on a modest budget, a 240mm Dozuki saw is nearly impossible to beat.'
    ],
    tableOfContents: [
      { id: 'physics-of-cut', title: 'The Physics of Pull vs. Push' },
      { id: 'three-japanese-types', title: 'The Three Essential Japanese Saws' },
      { id: 'western-advantages', title: 'Where Western Saws Still Dominate' },
      { id: 'maintenance-resharpening', title: 'Maintenance & Resharpening Truths' },
      { id: 'final-verdict', title: 'Our Definitive Buying Recommendation' }
    ],
    featuredProduct: AFFILIATE_PRODUCTS[2],
    contentSections: [
      {
        id: 'physics-of-cut',
        heading: 'The Physics of Pull vs. Push: Tension vs. Compression',
        paragraphs: [
          'To understand why Japanese hand saws (Nokogiri) have revolutionized Western woodshops over the last 30 years, you have to examine elementary mechanical physics.',
          'When you push a traditional Western saw blade forward into a workpiece, the blade is placed under compression. To prevent the steel plate from buckling or kinking mid-stroke, manufacturers must make the plate relatively thick (typically 0.020" to 0.032") and stiffen the spine with heavy folded brass or steel.',
          'By contrast, a Japanese saw cuts exclusively on the PULL stroke. Tension naturally straightens the blade as you pull. As a result, the blade can be rolled to a wafer-thin 0.012 inches (0.3mm). Thinner blades remove half the kerf material, meaning you expend half the muscular energy to make the exact same cut.'
        ]
      },
      {
        id: 'three-japanese-types',
        heading: 'The Three Essential Japanese Saws Every Woodworker Should Know',
        paragraphs: [
          '1. Ryoba: The dual-edged workhorse. One edge features rip teeth that increase in pitch toward the heel for fast ripping along the grain; the opposite edge features fine crosscut teeth. It is the best all-around saw for dimensioning solid stock.',
          '2. Dozuki: The joinery specialist. Fitted with a rigid steel spine along the top of the plate, the Dozuki features razor-fine 26–30 TPI teeth designed specifically for dead-flat tenon cheeks, dovetail pins, and miter shoulders.',
          '3. Kataba: A single-sided, unbacked saw with a slightly thicker plate, designed for deep rip or crosscuts where a spine would bottom out against the timber.'
        ]
      },
      {
        id: 'western-advantages',
        heading: 'Where Western Saws Still Hold the Advantage',
        paragraphs: [
          'Lest we dismiss Western saws completely, classic English and American backsaws hold significant strengths:',
          'First, Western pistol-grip handles align your wrist, forearm, and shoulder in a direct thrust line. When cutting massive 4-inch deep tenons in dense white oak for a dining trestle, your upper body mass helps drive the push stroke.',
          'Second, traditional Western saws (such as Lie-Nielsen or Bad Axe Tool Works) are made of spring steel that can be sharpened hundreds of times with triangular saw files. Most modern Japanese pull saws use impulse-hardened teeth: they stay sharp 5x longer, but when dull, you must replace the disposable blade rather than sharpen it yourself.'
        ]
      }
    ],
    faqItems: [
      {
        q: 'Which Japanese saw should I buy first as a beginner?',
        a: 'Start with a 240mm Ryoba (double-edged). It gives you both rip and crosscut capabilities on one tool for roughly $35 to $45.'
      },
      {
        q: 'Why did my Japanese saw blade kink or break teeth?',
        a: 'The most common beginner mistake is applying downward pressure during the push return stroke. The push stroke must be completely unweighted; let the blade glide back freely, and only apply gentle pressure on the pull stroke.'
      }
    ]
  },
  {
    id: 'hardwax-oils-vs-polyurethane',
    slug: 'hardwax-oils-vs-polyurethane-finish-guide',
    title: 'Hardwax Oils vs. Polyurethane vs. Lacquer: 2026 Wood Finish Shootout',
    metaTitle: 'Hardwax Oils vs Polyurethane: Complete Wood Finish Guide & Tests',
    metaDescription: 'We tested Rubio Monocoat, Osmo Polyx-Oil, polyurethane, and lacquer against red wine, boiling water, and daily wear. Here is what we found.',
    excerpt: 'Is the craze around hardwax oils justified? We put Rubio Monocoat, Osmo Polyx, and high-performance poly through brutal scratch, wine, and coffee tests.',
    category: 'Finishing & Care',
    readTime: '8 min read',
    date: 'January 12, 2026',
    isoDate: '2026-01-12',
    coverImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
    author: {
      name: 'Johnson Wadimbe',
      role: 'Master Furniture Maker & Lead Tool Tester',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
    },
    tags: ['Wood Finishing', 'Hardwax Oils', 'Rubio Monocoat', 'Polyurethane', 'Eco-Friendly'],
    keyTakeaways: [
      'Hardwax oils bond molecularly with the cellulose fibers rather than forming a plastic film over the wood.',
      'Polyurethane provides slightly superior protection against standing chemical solvents, but scratches turn white and cannot be repaired without stripping the entire piece.',
      'Hardwax oils allow localized spot repairs in minutes: sand the scratch with 150-grit, dab a drop of oil, buff off, and the scratch vanishes.',
      '0% VOC hardwax formulations let you finish dining tables inside your home during winter with zero fumes or hazardous vapors.'
    ],
    tableOfContents: [
      { id: 'film-vs-molecular', title: 'Film-Forming vs. Molecular Bonding' },
      { id: 'spill-and-scratch-tests', title: 'The 48-Hour Spill & Scratch Tests' },
      { id: 'repairability-factor', title: 'The Game-Changing Repairability Factor' },
      { id: 'application-secrets', title: 'Prep & Sanding Secrets for Hardwax' },
      { id: 'our-recommendation', title: 'Which Finish for Which Project' }
    ],
    featuredProduct: AFFILIATE_PRODUCTS[6],
    contentSections: [
      {
        id: 'film-vs-molecular',
        heading: 'Film-Forming vs. Molecular Bonding: Understanding the Finish Chemistry',
        paragraphs: [
          'For decades, standard woodshop finishing meant brushing or spraying three to four coats of polyurethane or conversion lacquer. These finishes are film-formers: they sit on top of the wood, curing into a hard sheet of transparent resin.',
          'While effective, film finishes feel synthetic to the hand—you touch plastic rather than the living texture of the timber grain. In recent years, European hardwax oils (Rubio Monocoat, Osmo Polyx, Odie’s Oil) have taken over fine furniture studios.',
          'Hardwax oils contain purified linseed and carnauba wax compounds. When buffed into raw timber, the oil bonds with free cellulose hydroxyl groups at a molecular level. It fills the pore structure from within, leaving a natural matte or satin tactile warmth.'
        ]
      },
      {
        id: 'spill-and-scratch-tests',
        heading: 'The 48-Hour Kitchen Table Test: Red Wine, Coffee, and Mustard',
        paragraphs: [
          'We coated identical black walnut sample boards with 3 coats of satin polyurethane, 1 coat of Rubio Monocoat 2C Pure, and 2 coats of Osmo Polyx 3054. We left pooling Cabernet Sauvignon, hot espresso, and yellow mustard on the surfaces for 48 hours.',
          'Results: Polyurethane showed zero penetration or discoloration. Rubio Monocoat showed zero penetration from wine or coffee; the yellow mustard left a very faint shadow that wiped away clean with Rubio surface cleaner. Osmo resisted all liquids completely.',
          'Next, we dragged a steel key across each board under 5 lbs of downward force. Polyurethane developed a stark white fractured plastic groove. The hardwax board suffered a minor dent, but because there was no brittle plastic film to shatter, the fiber color remained completely intact.'
        ]
      },
      {
        id: 'repairability-factor',
        heading: 'The True Deciding Factor: Long-Term Repairability',
        paragraphs: [
          'This is where hardwax oils decisively win the battle for heirloom furniture. If a child gouges a polyurethane tabletop with a fork, you cannot simply touch up the fork marks—any new polyurethane will leave an obvious witness line. You must strip the entire top with toxic chemicals or belt-sand the whole surface.',
          'With Rubio or Osmo, you simply take a piece of 150-grit sandpaper, gently scuff out the localized scratch along the grain, rub a pea-sized drop of hardwax oil into the bare fibers with a cotton rag, and buff it dry. Within 24 hours, the repaired spot blends seamlessly into the surrounding finish.'
        ]
      }
    ],
    faqItems: [
      {
        q: 'Why does Rubio Monocoat require sanding only up to 120 or 150 grit?',
        a: 'Hardwax oil needs open wood pores to bond molecularly with the cellulose fibers. If you sand beyond 180 grit, you burnish and polish the wood fibers closed, preventing the oil from penetrating and bonding properly.'
      },
      {
        q: 'Is hardwax oil food-safe for cutting boards and salad bowls?',
        a: 'Fully cured Rubio Monocoat and Osmo are Toy Safety EN 71-3 certified and food-contact compliant for dining tables and serving trays. For heavy-duty meat butcher blocks that endure knife chopping, we recommend pure mineral oil and beeswax instead.'
      }
    ]
  },
  {
    id: 'hand-cut-through-dovetails',
    slug: 'mastering-hand-cut-dovetails-step-by-step',
    title: 'Mastering the Hand-Cut Through Dovetail: 7 Precision Rules Most Beginners Miss',
    metaTitle: 'Master Hand-Cut Dovetails: 7 Precision Rules & Step-by-Step Guide',
    metaDescription: 'Step-by-step master joiner instructions for cutting gap-free through dovetails with hand saws, marking knives, and bevel chisels.',
    excerpt: 'Stop relying on dovetail jigs that look mass-manufactured. Learn the exact layout sequence, knife-line baselining, and chisel paring secrets for heirloom joints.',
    category: 'Joinery Techniques',
    readTime: '11 min read',
    date: 'December 28, 2025',
    isoDate: '2025-12-28',
    coverImage: '/src/assets/images/joinery_detail_1790205522631.jpg',
    author: {
      name: 'Johnson Wadimbe',
      role: 'Master Furniture Maker & Lead Tool Tester',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
    },
    tags: ['Dovetails', 'Hand Joinery', 'Chisels', 'Craftsmanship'],
    keyTakeaways: [
      'Always mark baselines with a wheel marking gauge directly from the mating board thickness, never with a pencil and ruler.',
      'Pencil lines are 0.020" thick—knife lines are 0.001" and create a physical registration wall for your chisel bevel.',
      'Slightly undercut the baseline waste toward the inside of the joint to guarantee tight exterior seams.',
      'Tails first or pins first? We show why tails-first provides superior layout registration for wide carcases.'
    ],
    tableOfContents: [
      { id: 'the-anatomy', title: 'Anatomy & Proportions: 1:6 vs 1:8 Angles' },
      { id: 'essential-tooling', title: 'The Essential Hand Tool Arsenal' },
      { id: 'seven-rules', title: 'The 7 Rules for Zero-Gap Seams' },
      { id: 'paring-secrets', title: 'Chisel Paring & Undercutting Secrets' },
      { id: 'glue-up-tactics', title: 'Stress-Free Assembly & Clamping' }
    ],
    featuredProduct: AFFILIATE_PRODUCTS[7],
    contentSections: [
      {
        id: 'the-anatomy',
        heading: 'Anatomy & Proportions: 1:6 vs 1:8 Angles',
        paragraphs: [
          'The dovetail joint is the international hallmark of master woodcraft for good reason: its flared mechanical interlocking geometry resists pull-apart tensile forces even without glue.',
          'A classic mistake is making the dovetail angle too steep. In hardwoods like walnut, cherry, and oak, choose a 1:8 ratio (approx. 7 degrees). Steep 1:5 or 1:4 angles look amateurish and create fragile, razor-thin pin tips prone to breaking off during assembly.'
        ]
      },
      {
        id: 'seven-rules',
        heading: 'The 7 Rules for Zero-Gap Seams',
        paragraphs: [
          'Rule 1: Gauge from the Real Board, Never a Ruler. Set your cutting wheel marking gauge directly against the mating board thickness. Add roughly 1/64" extra so the pins stand slightly proud upon assembly, allowing them to be planed dead-flush.',
          'Rule 2: Sever the Fibers with a Striking Knife. A pencil line leaves a vague graphite smudge. A spear-point marking knife cleanly severs the wood fibers, creating a distinct micro-ledge that your chisel tip drops into with tactile feedback.',
          'Rule 3: Split the Line, Don’t Cross It. When sawing tails, keep your saw kerf strictly on the waste side of the line, leaving half the knife mark visible on the keeper piece.',
          'Rule 4: Undercut the Baseline. When paring away the waste between pins, tilt your chisel 1 or 2 degrees inward toward the center of the joint. This slight hollow ensures the visible outside edges meet tightly with no internal obstruction holding the boards apart.'
        ]
      }
    ],
    faqItems: [
      {
        q: 'Should I cut tails first or pins first?',
        a: 'Tails first is the preferred method for the vast majority of furniture makers. Transferring the tail contours onto the pin board end-grain with a thin marking knife is faster, more stable, and less prone to shifting in the vise.'
      },
      {
        q: 'What should I do if a pin fits too tightly during dry-fit?',
        a: 'Never force a tight dovetail with a hammer, or you will split the socket. Look for burnished rub marks on the pin walls, and take a single gossamer paring cut with a razor-sharp chisel until it slides home with firm hand pressure.'
      }
    ]
  },
  {
    id: 'garage-woodshop-dust-collection',
    slug: 'small-shop-dust-collection-guide',
    title: 'Setting Up a 200 Sq.Ft Garage Woodshop: Dust Collection & Tool Layout Blueprint',
    metaTitle: '200 Sq Ft Workshop Dust Collection & Layout Blueprint (2026)',
    metaDescription: 'Maximize small woodshop efficiency and lung safety. Complete guide to 4-inch ducting, cyclone separators, tool mobility, and 220V power drops.',
    excerpt: 'How to fit a full cabinet saw, jointer, planer, workbench, and high-efficiency dust collection into a standard single-car garage without breathing toxic micro-dust.',
    category: 'Shop Setup',
    readTime: '10 min read',
    date: 'November 15, 2025',
    isoDate: '2025-11-15',
    coverImage: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
    author: {
      name: 'Johnson Wadimbe',
      role: 'Master Furniture Maker & Lead Tool Tester',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
    },
    tags: ['Dust Collection', 'Small Woodshop', 'Shop Organization', 'Garage Workshop'],
    keyTakeaways: [
      'Standard shop vacs move 80-120 CFM of air, which is inadequate for stationary tools requiring 350-450 CFM at the hood.',
      'Cyclone pre-separators keep 99% of debris out of your pleated HEPA filter, preventing suction drop-off.',
      'Smooth-wall metal or PVC ducting produces 60% less friction loss than corrugated flexible hose.',
      'Mount your heavy stationary machines on retractable industrial casters to create a multi-axis modular shop.'
    ],
    tableOfContents: [
      { id: 'why-small-shops-suffer', title: 'Why Small Shops Suffer Most from Dust' },
      { id: 'cyclone-separation', title: 'The Cyclone Separation Principle' },
      { id: 'ducting-layout', title: 'Optimal 4-Inch Ducting Layout & Blast Gates' },
      { id: 'modular-mobility', title: 'Mobile Bases & Vertical Storage' },
      { id: 'electrical-planning', title: 'Electrical Planning for Single-Phase Garages' }
    ],
    featuredProduct: AFFILIATE_PRODUCTS[3],
    contentSections: [
      {
        id: 'why-small-shops-suffer',
        heading: 'Why Small Shops Suffer Most from Airborne Micro-Dust',
        paragraphs: [
          'In a 2,000 square foot commercial facility, fine dust has cubic volume to disperse before human lungs inhale critical concentrations. In a 200 sq.ft garage or basement shop, a single 10-minute sanding session or table saw dado cut will spike ambient PM2.5 levels to toxic hazardous thresholds within minutes.',
          'Most makers think that because their shop is small, a 5-gallon wet/dry shop vac is enough. That is a dangerous mistake: shop vacs produce high vacuum lift (70–90 inches of water) but minuscule volume (80–120 CFM). Stationary tools produce vast clouds of velocity sawdust that require high volume (350+ CFM) to capture at the source.'
        ]
      },
      {
        id: 'cyclone-separation',
        heading: 'The Cyclone Separation Principle: Protecting Airflow & Filters',
        paragraphs: [
          'When you route dusty air directly into a standard dust bag or pleated cartridge filter, the fine dust particles immediately cake onto the media fibers (called "filter blind"). Within 15 minutes of jointing or planing, your airflow drops by 40% to 60%.',
          'Installing a cyclone separator (such as the Oneida Super Dust Deputy) uses cyclonic centrifugal force to fling heavy chips and fine dust outward against the cyclone wall, dropping them directly into a collection barrel beneath. Only clean air passes into your impeller and final HEPA cartridge.'
        ]
      }
    ],
    faqItems: [
      {
        q: 'Can I use PVC pipe for dust collection ductwork?',
        a: 'Yes, schedule 40 or thin-wall SDR 35 PVC is widely used in home shops. Use sweeping 45-degree elbows instead of sharp 90-degree Ts to minimize friction turbulence, and ground the ducting if you live in extremely dry arid climates.'
      },
      {
        q: 'Do I really need an overhead ambient air filtration unit?',
        a: 'Yes! Even the best source-capture collection misses 5-10% of fine dust. An overhead ceiling-mounted HEPA filter circulating your shop air 8 to 10 times per hour scrubs the room clean while you sleep.'
      }
    ]
  },
  {
    id: 'diy-precision-crosscut-sled',
    slug: 'diy-precision-table-saw-crosscut-sled',
    title: 'DIY Precision Crosscut Sled: 5-Cut Method Calibration to 0.001" Accuracy',
    metaTitle: 'DIY Table Saw Crosscut Sled Plans: 5-Cut Method Calibration Guide',
    metaDescription: 'Step-by-step DIY plans to build an ultra-accurate table saw crosscut sled using Baltic birch and UHMW runners. Calibrated with the 5-cut method.',
    excerpt: 'The single most critical jig in any woodshop. We share our complete cutting diagram, zero-clearance kerf setup, and the exact mathematical formula to calibrate your fence to sub-thousandth square.',
    category: 'DIY & Tutorials',
    subCategory: 'Workshop Fixtures & Jigs',
    diyDifficulty: 'Intermediate',
    estimatedTime: '4 Shop Hours',
    materialsNeeded: ['3/4" Baltic Birch Plywood', 'UHMW Plastic or Hard Maple Runners', 'T-Track & Flip Stop', 'Countersunk 1-1/4" Wood Screws'],
    readTime: '8 min read',
    date: 'March 2, 2026',
    isoDate: '2026-03-02',
    coverImage: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=1200&q=80',
    author: {
      name: 'Johnson Wadimbe',
      role: 'Master Furniture Maker & Lead Tool Tester',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
    },
    tags: ['DIY Jig', 'Table Saw Sled', '5-Cut Method', 'Workshop Plans', 'Accuracy'],
    keyTakeaways: [
      'Baltic birch multi-ply provides planar stability that will not cup or warp across seasonal humidity shifts.',
      'UHMW plastic runners eliminate table slot friction and will never expand during humid summer months like solid wood runners can.',
      'The 5-Cut method multiplies fence angular error by a factor of 4, allowing feeler gauges to dial in sub-0.001" perpendicularity.',
      'Zero-clearance base and rear fence backer completely eliminate bottom and rear grain tearout.'
    ],
    tableOfContents: [
      { id: 'why-you-need-a-sled', title: 'Why Every Shop Needs a Dedicated Crosscut Sled' },
      { id: 'materials-cutlist', title: 'Materials & Dimensional Cutlist' },
      { id: 'runner-installation', title: 'Perfect Runner Fitting: The Coin Trick' },
      { id: 'the-5-cut-calibration', title: 'The 5-Cut Math & Feeler Gauge Calibration' },
      { id: 'safety-features', title: 'Safety Blocks & T-Track Stops' }
    ],
    contentSections: [
      {
        id: 'why-you-need-a-sled',
        heading: 'Why Every Shop Needs a Dedicated Precision Crosscut Sled',
        paragraphs: [
          'A factory miter gauge has play in the miter slot and cannot support wide crosscuts or multiple small pieces without dangerous tipping. A dedicated dual-runner crosscut sled clamps your workpiece securely to a moving table.',
          'With a zero-clearance kerf line, you can place pencil marks directly against the blade slit with zero parallax error, guaranteeing 90-degree square cuts every single time.'
        ],
        callout: {
          type: 'pro-tip',
          title: 'Runner Material Selection',
          text: 'While quarter-sawn hard maple makes decent runners, UHMW (Ultra High Molecular Weight) polyethylene never shrinks or swells with seasonal humidity swings, ensuring smooth glide in winter and summer.'
        }
      },
      {
        id: 'the-5-cut-calibration',
        heading: 'The 5-Cut Method: Dialing In 0.0005" Perpendicularity',
        paragraphs: [
          'Take a rectangular offcut of 1/2" plywood (approx. 16" x 16"). Make 4 cuts rotating the piece clockwise against your sled fence each time. On the 5th cut, slice off a narrow 1/2" strip.',
          'Measure the top and bottom of this strip with digital calipers. The formula is: Error per inch = (Dimension A - Dimension B) / (4 × Length of Cut). Adjust your fence with brass shim stock to eradicate the variance.'
        ]
      }
    ],
    faqItems: [
      {
        q: 'How large should I build my crosscut sled?',
        a: 'A 24" wide by 30" long sled is the sweet spot for 90% of furniture projects. Building it larger than 32" makes the sled excessively heavy and awkward to hoist on and off the table.'
      },
      {
        q: 'How do I lubricate the bottom of the sled?',
        a: 'Apply two coats of paste wax (such as Johnson or Minwax) or Boeshield T-9 to both the cast iron table and the underside of the sled. It will glide with finger-light effort.'
      }
    ]
  },
  {
    id: 'hardwax-oils-deep-dive-guide',
    slug: 'hardwax-oils-oils-menu-guide',
    title: 'The Hardwax Oil Masterclass: Rubio Monocoat, Osmo Polyx & Odie’s Oil Application',
    metaTitle: 'Hardwax Oils Guide: Rubio vs Osmo vs Odies Application & Care',
    metaDescription: 'Learn how to apply and maintain hardwax oils for furniture. Deep comparison of Rubio Monocoat 2C, Osmo Polyx-Oil, and Odies Oil with sanding grit rules.',
    excerpt: 'Hardwax oils have transformed fine furniture making. Discover the precise sanding grits, buffing techniques, cure schedules, and maintenance routines for a flawless organic tactile finish.',
    category: 'Oils (Hardwax & Natural)',
    subCategory: 'Hardwax Oils',
    finishType: 'oil',
    readTime: '9 min read',
    date: 'February 24, 2026',
    isoDate: '2026-02-24',
    coverImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
    author: {
      name: 'Johnson Wadimbe',
      role: 'Master Furniture Maker & Lead Tool Tester',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
    },
    tags: ['Oils', 'Hardwax Oils', 'Rubio Monocoat', 'Osmo Polyx', 'Natural Finishes'],
    keyTakeaways: [
      'Never sand past 150 grit before applying Rubio Monocoat: wood fibers must remain open for molecular cellulose bonding.',
      'Water popping raw hardwood before oil application doubles pigment depth and increases oil penetration by 35%.',
      'Always dispose of oil-soaked rags in water-filled metal cans to prevent spontaneous combustion from exothermic oxidation.',
      'Hardwax oils cure through reaction with atmospheric oxygen, reaching 80% strength in 48 hours and 100% cure in 5-7 days.'
    ],
    tableOfContents: [
      { id: 'why-hardwax-oils', title: 'Why Fine Woodworkers Swear by Hardwax Oils' },
      { id: 'brand-comparison', title: 'Rubio vs. Osmo vs. Odies: Which One to Choose' },
      { id: 'step-by-step-application', title: 'Step-by-Step Application Protocol' },
      { id: 'curing-and-aftercare', title: 'Curing Schedule & Long-Term Re-Oiling' }
    ],
    contentSections: [
      {
        id: 'why-hardwax-oils',
        heading: 'Why Fine Woodworkers Swear by Hardwax Oils over Plastic Poly',
        paragraphs: [
          'Hardwax oils combine plant-based oils (linseed, sunflower, soybean) with natural carnauba and candelilla waxes. Unlike film-forming topcoats that trap wood under a cold plastic film, hardwax oils nourish the grain from within.',
          'The result is a low-sheen satin finish where your fingers glide over real wood pores rather than polyurethane resin.'
        ],
        callout: {
          type: 'tip',
          title: 'The Water Popping Technique',
          text: 'After final sanding to 120 or 150 grit, wipe the surface down with a damp distilled water microfiber cloth. This raises crushed wood fibers and opens the cellular vascular structure, allowing 25% deeper oil penetration and uniform color absorption.'
        }
      },
      {
        id: 'step-by-step-application',
        heading: 'The 4-Step Application Protocol for a Flawless Sheen',
        paragraphs: [
          'Step 1: Surface Prep. Vacuum thoroughly and wipe down with Rubio cleaner or mineral spirits to remove all micro-dust.',
          'Step 2: Spread. Pour small amounts and spread evenly across the surface using a plastic spreader or white non-abrasive Scotch-Brite pad.',
          'Step 3: Dwell & React. Allow the oil to dwell for 5-10 minutes so molecular bonding occurs with the cellulose.',
          'Step 4: The 100% Buff Off. Using clean cotton terry cloths or a random orbital buffer with a white pad, buff off ALL excess oil until the surface feels completely dry to the touch.'
        ]
      }
    ],
    faqItems: [
      {
        q: 'Can I apply a second coat of Rubio Monocoat?',
        a: 'No! Rubio literally means "Monocoat" — once the first coat bonds with the wood fibers, subsequent coats cannot bond and will remain gummy. If you want higher sheen or added protection, apply Rubio Universal Maintenance Oil or SheenPlus.'
      },
      {
        q: 'How long until I can place dishes on a freshly oiled table?',
        a: 'Light use after 48 hours. Keep liquids and damp items off the surface for 5 to 7 days until 100% cure is achieved.'
      }
    ]
  },
  {
    id: 'polyurethanes-water-vs-oil-guide',
    slug: 'polyurethanes-coatings-mastery-guide',
    title: 'Polyurethane Coatings Demystified: Water-Based vs. Oil-Based vs. Wipe-On Formulations',
    metaTitle: 'Polyurethane Wood Finishes: Water vs Oil vs Wipe-On Guide',
    metaDescription: 'Comprehensive guide to polyurethane wood coatings. Compare dry times, yellowing amber tendencies, durability, abrasion resistance, and application tips.',
    excerpt: 'When maximum scratch, heat, and moisture resistance is needed, polyurethane is king. Learn when to choose crystal-clear water-based poly vs. warm amber oil-based urethane.',
    category: 'Polyurethanes & Topcoats',
    subCategory: 'Polyurethanes',
    finishType: 'polyurethane',
    readTime: '10 min read',
    date: 'February 10, 2026',
    isoDate: '2026-02-10',
    coverImage: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
    author: {
      name: 'Johnson Wadimbe',
      role: 'Master Furniture Maker & Lead Tool Tester',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
    },
    tags: ['Polyurethanes', 'Water-Based Poly', 'Oil Poly', 'Wipe-On Finishes', 'Durable Coatings'],
    keyTakeaways: [
      'Water-based polyurethanes (like General Finishes High Performance) dry in 2 hours, do not yellow light woods like maple, and clean up with warm water.',
      'Oil-based polyurethanes provide supreme abrasion and heat resistance but introduce an amber golden cast that darkens over time.',
      'Wipe-on polyurethane thinned 50/50 with mineral spirits eliminates brush marks and drying bubbles entirely.',
      'Always scuff-sand between coats with 320 or 400-grit sandpaper to provide mechanical tooth for inter-coat adhesion.'
    ],
    tableOfContents: [
      { id: 'water-vs-oil-comparison', title: 'Water-Based vs. Oil-Based Chemistry' },
      { id: 'the-wipe-on-technique', title: 'The Wipe-On Poly Technique: Zero Brush Marks' },
      { id: 'scuff-sanding-rules', title: 'Inter-Coat Sanding & De-Nibbing' },
      { id: 'recommended-products', title: 'Top Tested Polyurethane Formulations' }
    ],
    contentSections: [
      {
        id: 'water-vs-oil-comparison',
        heading: 'Water-Based vs. Oil-Based Chemistry: Which Suits Your Project?',
        paragraphs: [
          'The fundamental difference lies in resin carrier chemistry. Oil-based polyurethane uses alkyd resins dissolved in petroleum solvents, imparting a rich amber glow that enhances warm hardwoods like cherry and oak. However, on white maple or painted cabinets, this amber cast looks yellowish.',
          'Water-based poly uses acrylic and urethane resins suspended in water. It dries 100% water-clear, preserves pale woods, has low odor, and allows you to apply 3 coats in a single afternoon.'
        ],
        callout: {
          type: 'warning',
          title: 'Never Shake a Polyurethane Can',
          text: 'Shaking polyurethane whips millions of microscopic air bubbles into the liquid. Once brushed onto the timber, those bubbles dry as permanent white craters. Always stir gently with a wooden stir stick.'
        }
      },
      {
        id: 'the-wipe-on-technique',
        heading: 'The Wipe-On Poly Technique: The Secret to Mirror Smoothness',
        paragraphs: [
          'Brushing polyurethane often leaves brush marks, dust nibs, or uneven runs along vertical edges. Woodworkers in the know use Wipe-On Poly.',
          'By thinning oil-based polyurethane with 50% odorless mineral spirits, the viscosity drops, allowing you to wipe it on with a lint-free cotton cloth just like furniture polish. It self-levels effortlessly with zero runs and zero brush marks. Apply 4-5 micro-coats for the same film build as 2 brushed coats.'
        ]
      }
    ],
    faqItems: [
      {
        q: 'Can I apply water-based polyurethane over an oil stain?',
        a: 'Yes, but you must allow the oil stain to cure completely (typically 72 hours minimum) until no petroleum odor remains. Applying water poly over damp oil stain will cause peeling and adhesion failure.'
      },
      {
        q: 'How do I remove dust nibs from my final coat of polyurethane?',
        a: 'Wait 7 days for the poly to fully cure. Then rub the surface with a brown paper grocery bag or 0000 steel wool lubricated with mineral oil. It knocks down micro-nibs without scratching the sheen.'
      }
    ]
  }
];

export const WOOD_SPECIES_LIST = [
  { name: 'American Black Walnut', pricePerBf: 14.50, janka: 1010, density: 'Medium', origin: 'Eastern USA', character: 'Rich chocolate heartwood, purple undertones, exceptional working qualities' },
  { name: 'White Oak (Quarter-Sawn)', pricePerBf: 9.80, janka: 1360, density: 'High', origin: 'North America', character: 'Dramatic ray fleck figure, rot-resistant, ideal for craftsman furniture' },
  { name: 'Hard Sugar Maple', pricePerBf: 8.20, janka: 1450, density: 'High', origin: 'Northern USA', character: 'Creamy blonde, ultra-dense, perfect for workbenches and cutting boards' },
  { name: 'Black Cherry', pricePerBf: 7.90, janka: 950, density: 'Medium', origin: 'Appalachian USA', character: 'Warm amber aging to deep reddish patina under sunlight, fine grain' },
  { name: 'Ash (White Ash)', pricePerBf: 6.75, janka: 1320, density: 'Medium-High', origin: 'North America', character: 'Pronounced grain cathedral, elastic strength for chair spindles and tool handles' },
  { name: 'African Wenge', pricePerBf: 24.00, janka: 1630, density: 'Very High', origin: 'Central Africa', character: 'Espresso-black with subtle brown veins, stunning for accent bowties and pins' },
  { name: 'Teak (Genuine Burmese)', pricePerBf: 38.00, janka: 1070, density: 'Medium-High', origin: 'Southeast Asia', character: 'Silica and natural oil rich, supreme weather and water durability' },
  { name: 'Eastern White Pine', pricePerBf: 3.40, janka: 380, density: 'Soft', origin: 'Northeastern USA', character: 'Lightweight soft pine, easy hand tool working, classic colonial character' }
];
