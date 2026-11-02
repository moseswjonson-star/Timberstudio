import { WoodworkingPlan, WoodSpecies } from '../types';

export const WOODWORKING_PLANS: WoodworkingPlan[] = [
  {
    id: 'plan-crosscut-sled',
    title: 'Precision 5-Cut Crosscut Sled & Dual-T-Track Fence',
    slug: 'precision-table-saw-crosscut-sled-plan',
    category: 'shop-jigs',
    categoryLabel: 'Shop Jigs & Fixtures',
    difficulty: 'Intermediate',
    estimatedHours: '6 - 8 hours',
    totalBoardFeet: '1 sheet (24" x 36") 3/4" Baltic Birch',
    estimatedCost: '$65 - $95',
    dimensions: '32" W x 24" D x 5.5" H',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
    schematicImage: 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80',
    description: 'The definitive table saw crosscut sled engineered for 90° cuts accurate to within 0.001" over 24 inches. Features sacrificial rear zero-clearance block, UHMW miter slot runners, dual embedded aluminum T-tracks, and micro-adjustable flip stop.',
    recommendedTimber: ['Baltic Birch Plywood (9-ply or 13-ply)', 'Hard Maple (for runners)'],
    recommendedTools: [
      'Table Saw with 10" 80T ATB crosscut blade',
      'Dial Calipers (for William Ng 5-cut verification)',
      'Router Table with 3/4" straight cutter for T-track recesses',
      'Countersink drill bits and brass paste wax'
    ],
    cutList: [
      { partName: 'Sled Base Plate', qty: 1, thickness: '3/4"', width: '24"', length: '32"', material: 'Baltic Birch Plywood', notes: 'Double-coat paste wax on underside' },
      { partName: 'Main Rear Fence', qty: 2, thickness: '3/4"', width: '3.75"', length: '32"', material: 'Baltic Birch Plywood', notes: 'Laminated face-to-face for stability' },
      { partName: 'Front Safety Fence', qty: 2, thickness: '3/4"', width: '2.5"', length: '32"', material: 'Baltic Birch Plywood', notes: 'Holds front together during pass' },
      { partName: 'Zero-Clearance Blade Guard', qty: 1, thickness: '1.75"', width: '3.5"', length: '5"', material: 'Solid Hard Maple Block', notes: 'Covers blade exit to protect fingers' },
      { partName: 'Miter Slot Runners', qty: 2, thickness: '3/8"', width: '0.745"', length: '26"', material: 'UHMW Plastic or Quartersawn Maple', notes: 'Fit snugly in table miter grooves' },
      { partName: 'Top Extruded T-Track', qty: 1, thickness: '3/8"', width: '3/4"', length: '32"', material: 'Anodized Aluminum', notes: 'Secured with #6 flat-head screws' }
    ],
    hardwareList: [
      '1x 32" Blue Aluminum T-track with imperial scale',
      '1x Rockler or Woodriver Flip Stop block assembly',
      '12x 1-1/4" #8 flat-head countersunk wood screws',
      '6x 5/8" #6 screws for T-track',
      'Johnson’s Paste Wax or Briwax for runner lubrication'
    ],
    assemblyPhases: [
      {
        phaseNumber: 1,
        title: 'Calibrating Miter Runners to Table Grooves',
        description: 'Mill the quartersawn hard maple or UHMW plastic runners so they glide with zero lateral play in the table saw miter slots. Elevate them with pennies in the slot bottom, apply CA glue with accelerator, and lower the base plate to transfer runner locations.',
        proTips: 'Avoid seasonal swelling by orienting runner wood grain vertically (quartersawn).'
      },
      {
        phaseNumber: 2,
        title: 'Laminating and Milling the Stiff Fence',
        description: 'Glue two 3/4" Baltic birch plies face-to-face under uniform clamp pressure on a dead-flat reference bench. Joint one edge perfectly straight, route a 3/8" deep channel for the T-track on the top face, and chamfer lower dust relief groove.',
        proTips: 'Cut a 45° chamfer at the bottom inside edge of the fence so sawdust does not prevent workpieces from seating tight.'
      },
      {
        phaseNumber: 3,
        title: 'Executing the William Ng 5-Cut Calibration Method',
        description: 'Mount the fence pivot screw on the left. Cut 4 consecutive edges of a test square, cut a final 5th strip, measure top and bottom with dial calipers, calculate error angle, and pivot fence using feeler gauges before driving lock screws.',
        proTips: 'Formula: Error per inch = (Width 5th cut top - Width 5th cut bottom) / (4 × Length of cut).'
      }
    ],
    pdfDownloadUrl: '#'
  },
  {
    id: 'plan-roubo-workbench',
    title: 'French Split-Top Roubo Heavy Timber Workbench',
    slug: 'french-split-top-roubo-workbench-plan',
    category: 'shop-jigs',
    categoryLabel: 'Workshop Builds',
    difficulty: 'Master',
    estimatedHours: '60 - 80 hours',
    totalBoardFeet: '220 Board Feet Hard Maple or Steamed Beech',
    estimatedCost: '$650 - $1,100',
    dimensions: '84" L x 24" W x 34.5" H (4" slab thickness)',
    image: 'https://images.unsplash.com/photo-1581783898377-1c85bf937427?auto=format&fit=crop&w=1200&q=80',
    schematicImage: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
    description: 'The heavyweight sovereign of the hand tool workshop. 4-inch solid laminated top, 5" x 5" massive legs with drawbored through-mortise and tenon stretchers, central removable tool divider/planing stop, and accommodation for Benchcrafted leg vise.',
    recommendedTimber: ['Hard Sugar Maple', 'European Beech', 'Southern Yellow Pine (Budget alternative)'],
    recommendedTools: [
      'No. 7 Jointer Plane and No. 5 Jack Plane',
      'Winding Sticks for surface coplanarity',
      '1.5" and 2" Heavy Timber framing chisels',
      'Drawbore pins and straight-grained white oak dowels'
    ],
    cutList: [
      { partName: 'Slab Top Laminations (Front Slab)', qty: 7, thickness: '1.75"', width: '4.25"', length: '86"', material: 'Hard Maple', notes: 'Face-glued into 11.5" wide slab' },
      { partName: 'Slab Top Laminations (Rear Slab)', qty: 7, thickness: '1.75"', width: '4.25"', length: '86"', material: 'Hard Maple', notes: 'Face-glued into 11.5" wide slab' },
      { partName: 'Massive Workbench Legs', qty: 4, thickness: '4.75"', width: '5"', length: '32"', material: 'Laminated Maple', notes: 'Through-mortised with 1-1/4" tenon pockets' },
      { partName: 'Upper Short Stretchers', qty: 2, thickness: '3"', width: '4"', length: '19.5"', material: 'Hard Maple', notes: 'Flush tenon coplanar with leg top' },
      { partName: 'Lower Long Stretchers', qty: 2, thickness: '2.5"', width: '5"', length: '64"', material: 'Hard Maple', notes: 'Drawbored tenons with 3/8" oak pins' },
      { partName: 'Center Gap Removable Divider', qty: 1, thickness: '1.75"', width: '1.75"', length: '84"', material: 'Hard Maple & Walnut', notes: 'Inverted flush or flipped as dog stop' }
    ],
    hardwareList: [
      '1x Benchcrafted Classic Leg Vise screw & crisscross kit',
      '1x Wagon vise or tail vise screw assembly',
      '8x 3/8" diameter x 4" Straight-grain white oak drawbore pins',
      '4x 1/2" Spax exterior timber lag bolts for leg-to-top attachment'
    ],
    assemblyPhases: [
      {
        phaseNumber: 1,
        title: 'Milling & Slab Glue-Up in Stages',
        description: 'Joint and plane the 1.75" maple staves. Glue up in smaller sub-assemblies of 3-4 boards, plane the sub-assemblies flat, and finally join the two halves to form 4-inch deep monolithic slabs.',
        proTips: 'Alternate growth rings to minimize cup, and clean glue squeeze-out with a damp scraper after 25 minutes.'
      },
      {
        phaseNumber: 2,
        title: 'Cutting the Double-Tenon Leg Joints',
        description: 'Lay out the full-scale leg joinery. Chop the massive through-mortises using a drill press to remove bulk waste and square up with a 1.5" registered mortise chisel.',
        proTips: 'Offset drawbore pin holes by 1/16" (1.5mm) away from shoulder to draw tenons fiercely airtight under mallet blows.'
      },
      {
        phaseNumber: 3,
        title: 'Traversing the Top Flat with Hand Planes',
        description: 'Mount the slabs to the base. Plane across the grain (traversing) at 45° with a heavy cambered iron in a jack plane, followed by a No. 7 jointer plane down the length checking with winding sticks.',
        proTips: 'Finish with 3 coats of Boiled Linseed Oil and beeswax. Never use film polyurethane on a benchtop as workpieces will slip.'
      }
    ],
    pdfDownloadUrl: '#'
  },
  {
    id: 'plan-floating-nightstand',
    title: 'Mid-Century Floating Walnut Nightstand with Hand-Cut Dovetails',
    slug: 'mid-century-floating-walnut-nightstand-plan',
    category: 'furniture',
    categoryLabel: 'Fine Furniture',
    difficulty: 'Intermediate',
    estimatedHours: '16 - 22 hours',
    totalBoardFeet: '14 Board Feet Black Walnut + 4 BF Soft Maple (drawer box)',
    estimatedCost: '$140 - $220',
    dimensions: '20" W x 14" D x 9" H',
    image: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1200&q=80',
    schematicImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
    description: 'An elegant wall-mounted nightstand featuring continuous waterfall miter grain wrap around the exterior carcass, hand-cut half-blind dovetails on the drawer box, and an integrated solid French cleat for invisible, rock-solid wall mounting.',
    recommendedTimber: ['American Black Walnut', 'Hard White Maple (for contrast drawer sides)'],
    recommendedTools: [
      'Dozuki or Japanese pull saw / English dovetail saw',
      '1/4", 3/8", 1/2" bevel-edge bench chisels',
      'Marking gauge with circular micro-wheel blade',
      'Under-mount soft-close drawer slides or traditional wood runners'
    ],
    cutList: [
      { partName: 'Carcass Top Panel', qty: 1, thickness: '3/4"', width: '14"', length: '20"', material: 'Black Walnut', notes: '45° miter on left & right ends' },
      { partName: 'Carcass Left & Right Sides', qty: 2, thickness: '3/4"', width: '14"', length: '9"', material: 'Black Walnut', notes: 'Continuous waterfall grain match from top' },
      { partName: 'Carcass Bottom Panel', qty: 1, thickness: '3/4"', width: '14"', length: '20"', material: 'Black Walnut', notes: 'Matched miter joints' },
      { partName: 'French Cleat Wall Mount', qty: 2, thickness: '3/4"', width: '3.5"', length: '18.5"', material: 'Hard Maple', notes: '45° bevel ripped down length' },
      { partName: 'Drawer Front (Integrated pull)', qty: 1, thickness: '3/4"', width: '6.5"', length: '18.25"', material: 'Black Walnut', notes: 'Under-beveled finger pull groove' },
      { partName: 'Drawer Sides', qty: 2, thickness: '1/2"', width: '6.25"', length: '12.5"', material: 'Soft Maple', notes: 'Half-blind dovetails front, through-dovetail rear' },
      { partName: 'Drawer Bottom', qty: 1, thickness: '1/4"', width: '17.5"', length: '12.25"', material: 'Walnut or Maple Plywood', notes: 'Floated in 1/4" groove' }
    ],
    hardwareList: [
      '1x Pair Blum Tandem Plus 12" undermount concealed soft-close drawer runners',
      '4x 3" Heavy-duty wall anchors (50lb capacity each)',
      '1x Rubio Monocoat Oil Plus 2C (Pure) finish pouch'
    ],
    assemblyPhases: [
      {
        phaseNumber: 1,
        title: 'Cutting Waterfall Miters on Table Saw',
        description: 'Select a single continuous 8-foot walnut board. Cut the carcass parts in sequential order and bevel miter the corners at 45.0° using a calibrated digital angle gauge and auxiliary tall fence.',
        proTips: 'Reinforce 45° carcass miters with internal biscuits, Dominos, or maple splines to prevent seasonal opening.'
      },
      {
        phaseNumber: 2,
        title: 'Laying Out and Cutting Dovetail Drawer',
        description: 'Mark tail depth with a cutting gauge set to 1/32" thicker than drawer sides. Saw along the knife lines, pare the baseline flat with a sharp chisel, and transfer pins using a sharp marking knife.',
        proTips: 'Rub pencil graphite over pins during dry-fit to see exactly where wood fibers are binding.'
      },
      {
        phaseNumber: 3,
        title: 'Installing the Beveled French Cleat',
        description: 'Recess the inner French cleat flush into a 1/2" rabbet behind the drawer cavity. Level the mating wall cleat into two wall studs, slide the unit into place, and secure with an internal safety screw.',
        proTips: 'Finish exterior walnut with hardwax oil to enhance chatoyancy while maintaining natural velvety touch.'
      }
    ],
    pdfDownloadUrl: '#'
  },
  {
    id: 'plan-trestle-table',
    title: 'Heirloom Trestle Dining Table with Breadboard Ends & Wedged Tenons',
    slug: 'heirloom-trestle-dining-table-plan',
    category: 'furniture',
    categoryLabel: 'Fine Furniture',
    difficulty: 'Advanced',
    estimatedHours: '38 - 50 hours',
    totalBoardFeet: '85 Board Feet White Oak or Cherry',
    estimatedCost: '$520 - $890',
    dimensions: '84" L x 38" W x 30" H',
    image: 'https://images.unsplash.com/photo-1577140917170-285929fb55b7?auto=format&fit=crop&w=1200&q=80',
    schematicImage: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
    description: 'An enduring 8-person trestle dining table featuring traditional through-tenons with contrasting walnut wedges, an arched stretcher for generous knee room, and slot-mortised breadboard ends that accommodate annual cross-grain humidity movement.',
    recommendedTimber: ['Quartersawn White Oak', 'Black Walnut (for wedges and breadboard pins)'],
    recommendedTools: [
      'Plunge Router with 1/2" spiral upcut bit',
      'Shoulder Plane (for tuning breadboard tenons)',
      'Pipe Clamps & Parallel Clamps (6x 48" or 50")',
      'Mortise chisel & Japanese ryoba saw'
    ],
    cutList: [
      { partName: 'Table Top Planks', qty: 5, thickness: '1.5"', width: '7.6"', length: '76"', material: 'Quartersawn White Oak', notes: 'Edge-joined with alternating end grains' },
      { partName: 'Breadboard Ends', qty: 2, thickness: '1.5"', width: '4"', length: '38"', material: 'Quartersawn White Oak', notes: 'Slotted pin holes for seasonal expansion' },
      { partName: 'Vertical Trestle Posts', qty: 2, thickness: '3.5"', width: '5.5"', length: '26"', material: 'White Oak', notes: 'Mortised for upper trestle and lower arched base' },
      { partName: 'Trestle Feet (Base)', qty: 2, thickness: '3.5"', width: '4.5"', length: '32"', material: 'White Oak', notes: 'Arched underside with flat resting pads' },
      { partName: 'Upper Tabletop Supports', qty: 2, thickness: '2.5"', width: '3.5"', length: '30"', material: 'White Oak', notes: 'Slotted pocket holes for tabletop fasteners' },
      { partName: 'Long Stretcher Stave', qty: 1, thickness: '2.5"', width: '5.5"', length: '68"', material: 'White Oak', notes: 'Tapered through-tenons on both ends' }
    ],
    hardwareList: [
      '12x Heavy-duty tabletop figure-8 expansion fasteners or Z-clips',
      '4x 1/2" Walnut wedges for through-tenons',
      '6x 3/8" Hand-turned walnut dowels for breadboard pin dowels',
      'Titebond III Ultimate waterproof wood glue'
    ],
    assemblyPhases: [
      {
        phaseNumber: 1,
        title: 'Edge-Gluing the Massive Table Top',
        description: 'Arrange planks for harmonious grain symmetry. Mill biscuits or dominos strictly for surface alignment during glue-up. Clamp with alternate top and bottom parallel clamps to prevent bowing.',
        proTips: 'Allow panel to cure 48 hours before scraping glue and flattening with a cabinet scraper or wide drum sander.'
      },
      {
        phaseNumber: 2,
        title: 'Executing the Slotted Breadboard Ends',
        description: 'Route a 2.5" deep tenon across tabletop ends. Cut corresponding mortise in breadboard bread. Glue only the center 2 inches of the joint. Elongate the outer pin holes into 1/2" lateral oval slots to allow the 38" wide tabletop to swell in summer without splitting.',
        proTips: 'Never glue the entire breadboard end! If glued along its entire length, the wood will crack violently across the grain.'
      },
      {
        phaseNumber: 3,
        title: 'Wedging the Through-Tenons on the Trestle Base',
        description: 'Cut 1/8" kerfs into the long stretcher tenons. Drive tapered walnut wedges into the tenons while assembled in the posts to lock the entire base together with zero fasteners.',
        proTips: 'Bevel the entry edges of wedges and seat with slow-setting epoxy for lifetime stability.'
      }
    ],
    pdfDownloadUrl: '#'
  },
  {
    id: 'plan-adirondack-chair',
    title: 'Classic Ergonomic Adirondack Lounge Chair in Western Red Cedar',
    slug: 'classic-ergonomic-adirondack-chair-plan',
    category: 'outdoor',
    categoryLabel: 'Outdoor Projects',
    difficulty: 'Beginner',
    estimatedHours: '8 - 12 hours',
    totalBoardFeet: '24 Board Feet Western Red Cedar or Cypress',
    estimatedCost: '$80 - $140',
    dimensions: '38" H x 32" W x 36" D',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80',
    schematicImage: 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80',
    description: 'An ultra-comfortable classic outdoor Adirondack featuring curved lumbar back slats, generous 7-inch wide paddle armrests for resting coffee or books, and rot-resistant cedar construction fastened with marine-grade stainless steel screws.',
    recommendedTimber: ['Western Red Cedar', 'Cypress', 'Teak (Luxury variant)'],
    recommendedTools: [
      'Bandsaw or Jigsaw (for curved slats and leg templates)',
      'Router with 1/4" roundover bit',
      'Random Orbit Sander with 80, 120, 180 grit discs',
      'Countersink drill bit for stainless fasteners'
    ],
    cutList: [
      { partName: 'Curved Main Side Stringers', qty: 2, thickness: '1.25"', width: '5.25"', length: '34"', material: 'Western Red Cedar', notes: 'Curved template for ergonomic reclined seat' },
      { partName: 'Front Upright Legs', qty: 2, thickness: '1.25"', width: '4.25"', length: '21"', material: 'Western Red Cedar', notes: 'Angled top edge for armrest pitch' },
      { partName: 'Rear Back Legs/Braces', qty: 2, thickness: '1"', width: '3"', length: '28"', material: 'Western Red Cedar', notes: 'Supports curved back slats' },
      { partName: 'Curved Back Slats', qty: 7, thickness: '3/4"', width: '3.25"', length: '36"', material: 'Western Red Cedar', notes: 'Tapered top fanning pattern' },
      { partName: 'Seat Slats', qty: 7, thickness: '3/4"', width: '2.25"', length: '22"', material: 'Western Red Cedar', notes: '1/4" spacing between slats for drainage' },
      { partName: 'Wide Paddle Armrests', qty: 2, thickness: '1"', width: '7"', length: '32"', material: 'Western Red Cedar', notes: 'Generous contour with glass rest' }
    ],
    hardwareList: [
      '50x #8 x 1-3/4" Grade 316 Stainless Steel Torx outdoor wood screws',
      '6x 5/16" x 2-1/2" Stainless carriage bolts with lock nuts and washers',
      'Titebond III Ultimate waterproof outdoor glue',
      '4x Rubber furniture leveling feet (protects end-grain from standing deck water)'
    ],
    assemblyPhases: [
      {
        phaseNumber: 1,
        title: 'Milling Cedar and Routing Soft Edges',
        description: 'Trace 1:1 paper templates onto cedar boards. Cut curved side stringers and armrests with bandsaw. Pass all outer surfaces over a 1/4" roundover router bit to prevent splintering and soften tactile touch.',
        proTips: 'Cedar end grain acts like straws in rain; soak the bottoms of legs in outdoor oil or epoxy seal before ground contact.'
      },
      {
        phaseNumber: 2,
        title: 'Fastening Base Frame with Carriage Bolts',
        description: 'Assemble the front legs and stringers using 5/16" carriage bolts. Square the frame before torquing nuts with washers into countersinks.',
        proTips: 'Always pre-drill countersinks in cedar to eliminate splitting near plank ends.'
      },
      {
        phaseNumber: 3,
        title: 'Fanning the Lumbar Back Slats',
        description: 'Mount the central spine slat plumb at 90°. Space remaining 6 slats outward using 1/4" plywood spacers for consistent expansion and water drainage.',
        proTips: 'Coat with penetrating exterior UV teak oil or let weather naturally into distinguished silver patina.'
      }
    ],
    pdfDownloadUrl: '#'
  },
  {
    id: 'plan-end-grain-board',
    title: 'End-Grain Heritage Butcher Block with Juice Groove & Ergonomic Handles',
    slug: 'end-grain-heritage-butcher-block-plan',
    category: 'small-craft',
    categoryLabel: 'Small Craft & Kitchenware',
    difficulty: 'Beginner',
    estimatedHours: '6 - 10 hours',
    totalBoardFeet: '8 Board Feet (Black Walnut, Hard Maple, Black Cherry)',
    estimatedCost: '$55 - $95',
    dimensions: '18" L x 14" W x 2" Thick',
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1200&q=80',
    schematicImage: 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80',
    description: 'An indestructible, heirloom end-grain cutting block that preserves knife edges through vertical wood fiber orientation. Includes perimeter juice well with pour spout, undercut hand grips, and deep pure mineral oil/beeswax soak.',
    recommendedTimber: ['Hard Sugar Maple', 'American Black Walnut', 'Black Cherry (No open-pored woods like Red Oak)'],
    recommendedTools: [
      'Drum sander or router flattening sled (Never run end-grain through a thickness planer!)',
      'Core Box router bit for juice groove',
      'Bar Clamps (6x minimum)',
      'Food-safe Titebond III waterproof glue'
    ],
    cutList: [
      { partName: 'First Glue-Up Staves (Maple)', qty: 8, thickness: '1.5"', width: '1.75"', length: '20"', material: 'Hard Maple', notes: 'First panel lamination' },
      { partName: 'First Glue-Up Staves (Walnut)', qty: 6, thickness: '1.5"', width: '1.75"', length: '20"', material: 'Black Walnut', notes: 'Contrasting central staves' },
      { partName: 'First Glue-Up Staves (Cherry)', qty: 4, thickness: '1.5"', width: '1.75"', length: '20"', material: 'Black Cherry', notes: 'Outer accents' }
    ],
    hardwareList: [
      '4x Non-slip food-grade silicone rubber feet',
      '4x Stainless steel pan-head screws for rubber feet',
      '1x 16oz Food-grade pure USP Mineral Oil',
      '1x 4oz Pure natural beeswax & citrus conditioning butter'
    ],
    assemblyPhases: [
      {
        phaseNumber: 1,
        title: 'The First Long-Grain Panel Glue-Up',
        description: 'Rip strips to exact 1.75" width. Glue together into a multi-species striped panel with Titebond III. Scrape excess glue and plane panel flat on both faces.',
        proTips: 'Keep strip faces parallel to minimize flattening work in step 2.'
      },
      {
        phaseNumber: 2,
        title: 'Crosscutting & Rotating 90° into End-Grain',
        description: 'Using a crosscut sled with stop block, crosscut the laminated panel into exact 2.125" wide segments. Rotate each segment 90° so the end-grain faces skyward. Stagger checker pattern and re-glue.',
        proTips: 'CRITICAL SAFETY: NEVER run an end-grain block through an electric thickness planer — it will shatter or cause violent kickback. Flatten with a router sled or drum sander.'
      },
      {
        phaseNumber: 3,
        title: 'Routing Juice Groove & Deep Mineral Oil Immersion',
        description: 'Route a 1/2" wide juice groove 1 inch in from perimeter using edge guide. Submerge entire board in a tub of pure food-grade mineral oil for 20 minutes until air bubbles stop rising.',
        proTips: 'Buff with warmed beeswax paste to seal surface pores and create a water-repellent silky sheen.'
      }
    ],
    pdfDownloadUrl: '#'
  }
];

export const WOOD_SPECIES_DATA: WoodSpecies[] = [
  {
    name: 'American Black Walnut',
    botanicalName: 'Juglans nigra',
    jankaHardness: 1010,
    workability: 'Easy',
    tearoutRisk: 'Low',
    movementInService: 'Low',
    radialShrinkage: 5.5,
    tangentialShrinkage: 7.8,
    recommendedFinish: 'Hardwax Oil (Rubio/Osmo), Pure Tung Oil, or Semi-Gloss Poly',
    typicalCostPerBf: '$12.50 - $16.00 / BF',
    category: 'Domestic Hardwood',
    grainColor: '#4a3728',
    description: 'The premier North American heirloom hardwood. Prized for its rich chocolate-brown heartwood, remarkable dimensional stability, and effortless hand-tool workability with sweet aroma.'
  },
  {
    name: 'Quartersawn White Oak',
    botanicalName: 'Quercus alba',
    jankaHardness: 1360,
    workability: 'Moderate',
    tearoutRisk: 'Medium',
    movementInService: 'Moderate',
    radialShrinkage: 5.6,
    tangentialShrinkage: 10.5,
    recommendedFinish: 'Ammonia Fuming + Boiled Linseed Oil, or Clear Water-Based Polyurethane',
    typicalCostPerBf: '$9.00 - $13.50 / BF',
    category: 'Domestic Hardwood',
    grainColor: '#c8ad8d',
    description: 'The foundation of Arts & Crafts / Mission furniture and wine casks. Closed tyloses make it naturally rot-proof, while quartersawing exposes dazzling medullary ray flecks with superior stability.'
  },
  {
    name: 'Hard Sugar Maple',
    botanicalName: 'Acer saccharum',
    jankaHardness: 1450,
    workability: 'Moderate',
    tearoutRisk: 'High',
    movementInService: 'Moderate',
    radialShrinkage: 4.8,
    tangentialShrinkage: 9.9,
    recommendedFinish: 'Clear Non-Yellowing Water-Based Polyurethane, or Food-Grade Mineral Oil/Wax',
    typicalCostPerBf: '$7.50 - $10.00 / BF',
    category: 'Domestic Hardwood',
    grainColor: '#ede2d0',
    description: 'Dense, clean, and supremely wear-resistant. The gold standard for heavy workbench tops, butcher blocks, and musical instruments. Prone to burning if saw blade feed rate hesitates.'
  },
  {
    name: 'American Black Cherry',
    botanicalName: 'Prunus serotina',
    jankaHardness: 950,
    workability: 'Easy',
    tearoutRisk: 'Low',
    movementInService: 'Low',
    radialShrinkage: 3.7,
    tangentialShrinkage: 7.1,
    recommendedFinish: 'Natural Danish Oil or Wipe-On Polyurethane (Ages with natural UV light)',
    typicalCostPerBf: '$8.00 - $11.00 / BF',
    category: 'Domestic Hardwood',
    grainColor: '#b86644',
    description: 'Beloved for its silky surface and extraordinary aging behavior. Starts as warm pinkish-amber and deepens through sunlight UV exposure into radiant reddish-gold with pitch pockets and gum veining.'
  },
  {
    name: 'African Sapele',
    botanicalName: 'Entandrophragma cylindricum',
    jankaHardness: 1410,
    workability: 'Moderate',
    tearoutRisk: 'High',
    movementInService: 'Moderate',
    radialShrinkage: 4.8,
    tangentialShrinkage: 7.4,
    recommendedFinish: 'High-Gloss Marine Spar Varnish, Penetrating Oil, or Gloss Lacquer',
    typicalCostPerBf: '$8.50 - $12.00 / BF',
    category: 'Exotic Hardwood',
    grainColor: '#843c22',
    description: 'An exceptional sustainable alternative to Genuine Mahogany. Quartersawn cuts reveal iridescent ribbon-stripe chatoyancy. Interlocked grain requires very sharp plane irons with high cutting angle (50°+).'
  },
  {
    name: 'Burmese Teak',
    botanicalName: 'Tectona grandis',
    jankaHardness: 1070,
    workability: 'Moderate',
    tearoutRisk: 'Low',
    movementInService: 'Low',
    radialShrinkage: 2.5,
    tangentialShrinkage: 5.8,
    recommendedFinish: 'Natural Teak Oil, Epifanes Marine Varnish, or Raw Bare Weathering',
    typicalCostPerBf: '$32.00 - $48.00 / BF',
    category: 'Exotic Hardwood',
    grainColor: '#966d3a',
    description: 'The king of marine timbers. High natural silica and essential oils make it almost impervious to moisture, fungus, and sea salt. Silica dulls tool edges rapidly; carbide cutters are mandatory.'
  },
  {
    name: 'American White Ash',
    botanicalName: 'Fraxinus americana',
    jankaHardness: 1320,
    workability: 'Easy',
    tearoutRisk: 'Low',
    movementInService: 'Moderate',
    radialShrinkage: 4.9,
    tangentialShrinkage: 7.8,
    recommendedFinish: 'Cerused / Pickled finishes, Hardwax Oils, or Water-Based Polyurethane',
    typicalCostPerBf: '$6.00 - $8.50 / BF',
    category: 'Domestic Hardwood',
    grainColor: '#dfd2ba',
    description: 'Renowned for shock resistance (baseball bats, tool handles, steam bending). Pronounced ring-porous grain lends itself to high-contrast cerused white wax or black grain-fill finishes.'
  },
  {
    name: 'Western Red Cedar',
    botanicalName: 'Thuja plicata',
    jankaHardness: 350,
    workability: 'Easy',
    tearoutRisk: 'Low',
    movementInService: 'Low',
    radialShrinkage: 2.4,
    tangentialShrinkage: 5.0,
    recommendedFinish: 'Exterior UV Penetrating Oil or Untreated (Silvery Patina)',
    typicalCostPerBf: '$5.50 - $8.00 / BF',
    category: 'Softwood',
    grainColor: '#a67252',
    description: 'Lightweight, soft, and aromatically fragrant. Natural thujaplicins provide extreme resistance to rot and insects, making it the premier outdoor choice for pergolas, saunas, and Adirondack chairs.'
  },
  {
    name: 'Shagbark Hickory',
    botanicalName: 'Carya ovata',
    jankaHardness: 1820,
    workability: 'Challenging',
    tearoutRisk: 'High',
    movementInService: 'High',
    radialShrinkage: 7.0,
    tangentialShrinkage: 10.5,
    recommendedFinish: 'Oil-Modified Polyurethane or Penetrating Wax',
    typicalCostPerBf: '$7.00 - $9.50 / BF',
    category: 'Domestic Hardwood',
    grainColor: '#bfa780',
    description: 'The hardest domestic North American timber. Nearly impossible to split with nails (pre-drilling required). High contrast between white sapwood and cocoa heartwood gives rustic appeal.'
  },
  {
    name: 'Purpleheart (Amaranth)',
    botanicalName: 'Peltogyne paniculata',
    jankaHardness: 2520,
    workability: 'Challenging',
    tearoutRisk: 'High',
    movementInService: 'Moderate',
    radialShrinkage: 3.2,
    tangentialShrinkage: 6.1,
    recommendedFinish: 'Water-Based UV-Inhibiting Polyurethane (Preserves rich purple color)',
    typicalCostPerBf: '$13.00 - $18.00 / BF',
    category: 'Exotic Hardwood',
    grainColor: '#5e214d',
    description: 'Exotic timber that oxidizes to brilliant violet-purple upon exposure to air and light. Ultra-dense and gummy when heated by dull router bits. Widely used for cutting board inlays, knife handles, and cues.'
  },
  {
    name: 'Coastal Douglas Fir',
    botanicalName: 'Pseudotsuga menziesii',
    jankaHardness: 660,
    workability: 'Moderate',
    tearoutRisk: 'Medium',
    movementInService: 'Low',
    radialShrinkage: 4.8,
    tangentialShrinkage: 7.6,
    recommendedFinish: 'Pre-Stain Conditioner + Danish Oil, or Exterior Spar Urethane',
    typicalCostPerBf: '$4.50 - $7.00 / BF',
    category: 'Softwood',
    grainColor: '#d69e6b',
    description: 'The titan of architectural timber framing. Old-growth vertical grain (CVG) Douglas Fir boasts dramatic tight parallel stripes and high strength-to-weight ratio for rafters, benches, and doors.'
  },
  {
    name: 'Baltic Birch Plywood',
    botanicalName: 'Betula pendula (Laminated)',
    jankaHardness: 1260,
    workability: 'Easy',
    tearoutRisk: 'Low',
    movementInService: 'Low',
    radialShrinkage: 0.1,
    tangentialShrinkage: 0.1,
    recommendedFinish: 'Paste Wax, Wipe-On Polyurethane, or Clear Shellac',
    typicalCostPerBf: '$85.00 - $130.00 / 5x5 Sheet',
    category: 'Domestic Hardwood',
    grainColor: '#f1e6d4',
    description: 'The undisputed workshop king for precision jigs, crosscut sleds, and drawer boxes. 100% solid birch void-free veneers with thick face plies. Glued with exterior-grade resin for dead-flat stability.'
  }
];
