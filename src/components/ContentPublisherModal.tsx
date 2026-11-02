import React, { useState } from 'react';
import { 
  X, 
  Plus, 
  Sparkles, 
  Wrench, 
  FolderKanban, 
  BookOpen, 
  Droplet, 
  ShieldCheck, 
  CheckCircle2, 
  Image as ImageIcon,
  Clock,
  Layers,
  ArrowRight,
  FileSpreadsheet
} from 'lucide-react';
import { BlogPost, Project, AffiliateProduct, WoodworkingPlan, CutListItem } from '../types';

export type PublishContentType = 'diy' | 'oils' | 'polyurethanes' | 'tools' | 'projects' | 'plans';

interface ContentPublisherModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialType?: PublishContentType;
  onPublishBlog: (post: BlogPost) => void;
  onPublishProject: (project: Project) => void;
  onPublishTool: (tool: AffiliateProduct) => void;
  onPublishPlan?: (plan: WoodworkingPlan) => void;
}

const CURATED_IMAGES = [
  { label: 'Rubbing Oil Finish', url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80' },
  { label: 'Workshop Table Saw', url: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=1200&q=80' },
  { label: 'Hand Planing Walnut', url: 'https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?auto=format&fit=crop&w=1200&q=80' },
  { label: 'Japanese Pull Saw', url: 'https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=1200&q=80' },
  { label: 'Parallel Clamps Glue-Up', url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80' },
  { label: 'Router & Mortise', url: 'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=1200&q=80' },
  { label: 'Fine Joinery Dovetails', url: '/src/assets/images/joinery_detail_1790205522631.jpg' },
  { label: 'Craftsman Bench & Vise', url: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80' }
];

export const ContentPublisherModal: React.FC<ContentPublisherModalProps> = ({
  isOpen,
  onClose,
  initialType = 'diy',
  onPublishBlog,
  onPublishProject,
  onPublishTool,
  onPublishPlan,
}) => {
  const [contentType, setContentType] = useState<PublishContentType>(initialType);
  const [publishedSuccess, setPublishedSuccess] = useState<string | null>(null);

  // Common fields
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [authorName, setAuthorName] = useState('Johnson Wadimbe (Studio Master)');
  const [coverImage, setCoverImage] = useState(CURATED_IMAGES[0].url);
  const [customImageUrl, setCustomImageUrl] = useState('');
  const [tagsInput, setTagsInput] = useState('DIY, Workshop, Finishing');

  // Long-Form 3000+ Word Review & Rich Content Fields
  const [fullArticleBody, setFullArticleBody] = useState('');
  const [pullQuoteText, setPullQuoteText] = useState('');
  const [pullQuoteAuthor, setPullQuoteAuthor] = useState('Johnson Wadimbe');
  const [testingScoresRaw, setTestingScoresRaw] = useState('Durability & Wear: 9.8 / 10 - Exceptional resistance against oak dents.\nPrecision & Calibration: 9.5 / 10 - Zero slop in guide slots.\nErgonomics & Feel: 9.7 / 10 - Comfortable tactile grip for long shop sessions.');
  const [galleryImagesInput, setGalleryImagesInput] = useState('https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=1200&q=80\nhttps://images.unsplash.com/photo-1581783342308-f792dbdd27c5?auto=format&fit=crop&w=1200&q=80');
  const [isGeneratingAi, setIsGeneratingAi] = useState(false);

  const handleAiGenerateContent = () => {
    setIsGeneratingAi(true);
    setTimeout(() => {
      const generatedTitle = title || 'Comprehensive Workshop Master Review & Precision Field Evaluation: 6-Month Woodcraft Study';
      setTitle(generatedTitle);
      setSummary(`An exhaustive, lab-tested evaluation of ${generatedTitle}, covering real-world joinery tests, dust collection efficiency, and multi-year wear performance.`);
      setFullArticleBody(
        `Section 1: Executive Summary & First Impressions\n\nWhen evaluating high-end woodworking gear and workshop finishing systems, the margin between amateur results and heirloom-grade craftsmanship boils down to mechanical tolerances and repeatable calibration. Over the past six months of intensive shop testing—spanning hundreds of board feet of hard maple, walnut, and quartersawn white oak—this system has undergone rigorous daily evaluation.\n\nSection 2: Mechanical Tolerances & Setup Calibration\n\nOut of the crate, the unit demands careful alignment. We utilized a 0.0005-inch dial indicator and precision straightedges to inspect reference surfaces. The cast-iron ground tables exhibited flatness within 0.002 inches across the diagonal, surpassing factory specifications. Mitigating tear-out on figured curly cherry required minor adjustments to the feed rate and blade tooth geometry, but once dialed in, crosscuts were silky smooth with zero perceptible chatter.\n\nSection 3: Real-World Hardwood Testing & Joinery Performance\n\nWe put the system through extreme stress tests by ripping 8/4 Peruvian walnut and cutting tight half-lap joints and through-tenons. The motor maintained consistent torque under heavy load without bogging down, while dust extraction ports captured over 95% of airborne particulate when connected to a 4-inch 1.5 HP cyclone dust collector. Thermal regulation during extended 4-hour glue-up and milling sessions remained exceptional.\n\nSection 4: Pros, Cons, and Long-Term Durability Verdict\n\nMaintenance requirements are straightforward: regular application of boiling paste wax on cast iron tables and weekly arbor belt tension checks. While the initial investment is substantial, the heirloom build quality and modular upgrade path make this an indispensable centerpiece for serious woodworkers and professional custom furniture studios.`
      );
      setTestingScoresRaw(
        'Durability & Wear Resistance: 9.8 / 10 - Heavier gauge casting with zero deflection under load.\nPrecision & Calibration: 9.6 / 10 - Micro-adjust dials hold dead-square tolerances.\nErgonomics & Workflow: 9.5 / 10 - Intuitive controls positioned for safe, fast operation.\nShop Value & ROI: 9.3 / 10 - Premium pricing justified by multi-decade service life.'
      );
      setPullQuoteText('True craftsmanship is not born from haste, but from the unyielding pursuit of repeatable precision and meticulous material mastery.');
      setPullQuoteAuthor('Johnson Wadimbe, Studio Master Craftsman');
      setGalleryImagesInput(
        'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=1200&q=80\nhttps://images.unsplash.com/photo-1581783342308-f792dbdd27c5?auto=format&fit=crop&w=1200&q=80\nhttps://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=1200&q=80'
      );
      setTagsInput('Woodworking, Review, Masterclass, Lab Testing, Workshop');
      setIsGeneratingAi(false);
    }, 700);
  };

  // Specific to DIY & Tutorials
  const [diySubCategory, setDiySubCategory] = useState('Workshop Fixtures & Jigs');
  const [diyDifficulty, setDiyDifficulty] = useState<'Beginner' | 'Intermediate' | 'Advanced'>('Intermediate');
  const [estimatedTime, setEstimatedTime] = useState('3-4 Shop Hours');
  const [materials, setMaterials] = useState('3/4" Baltic Birch, Hard Maple, Wood Glue, T-Track');
  const [step1Heading, setStep1Heading] = useState('Step 1: Dimensioning the Base & Cutting Runners');
  const [step1Body, setStep1Body] = useState('Rip the base board square using a track saw. Mill runners to 0.748" thickness so they glide inside table slots with zero play.');
  const [step2Heading, setStep2Heading] = useState('Step 2: Fence Alignment & Calibration');
  const [step2Body, setStep2Body] = useState('Square the fence using the 5-cut method. Fasten the pivot end first, take test cuts, and feel with feeler gauges before driving the lock screws.');

  // Specific to Oils
  const [oilType, setOilType] = useState('Hardwax Oil (Rubio / Osmo)');
  const [oilSandingGrit, setOilSandingGrit] = useState('120 - 150 Grit (Do not over-sand)');
  const [oilCureTime, setOilCureTime] = useState('80% cure in 48 hours, 100% cure in 5 days');
  const [oilVoc, setOilVoc] = useState('0% VOC (Indoor safe)');

  // Specific to Polyurethanes
  const [polyType, setPolyType] = useState('Water-Based Satin Polyurethane');
  const [polyCoats, setPolyCoats] = useState('3 Thin Brushed or Sprayed Coats');
  const [polyDryTime, setPolyDryTime] = useState('2 Hours between coats (scuff sand 320-grit)');
  const [polyDurability, setPolyDurability] = useState('High Scratch & Chemical Resistance');

  // Specific to Tools
  const [toolBrand, setToolBrand] = useState('Veritas / Lee Valley');
  const [toolCategory, setToolCategory] = useState<'saws' | 'hand-tools' | 'dust-collection' | 'routers' | 'finishing' | 'clamps'>('hand-tools');
  const [toolPrice, setToolPrice] = useState('$185');
  const [toolRating, setToolRating] = useState('4.9');
  const [toolMerchant, setToolMerchant] = useState<'Rockler' | 'Woodcraft' | 'Amazon' | 'Lee Valley' | 'Highland Woodworking'>('Woodcraft');
  const [toolAffiliateLink, setToolAffiliateLink] = useState('https://www.woodcraft.com');
  const [toolPros, setToolPros] = useState('Micro-adjust dial\nCrisp ground sole\nPM-V11 steel blade');
  const [toolCons, setToolCons] = useState('Requires initial honing\nPremium price point');

  // Specific to Projects
  const [projectCategory, setProjectCategory] = useState<'furniture' | 'joinery' | 'shop' | 'turning' | 'diy'>('furniture');
  const [timberSpecies, setTimberSpecies] = useState('American Black Walnut, Hard Maple');
  const [dimensions, setDimensions] = useState('60" L × 28" W × 30" H');
  const [joineryMethods, setJoineryMethods] = useState('Through Mortise & Tenons, Hand-cut Dovetails');

  // Specific to Plans
  const [planCategory, setPlanCategory] = useState<'shop-jigs' | 'furniture' | 'outdoor' | 'cabinetry' | 'small-craft'>('shop-jigs');
  const [planDifficulty, setPlanDifficulty] = useState<'Beginner' | 'Intermediate' | 'Advanced' | 'Master'>('Intermediate');
  const [planHours, setPlanHours] = useState('4 - 6 Hours');
  const [planLumber, setPlanLumber] = useState('1/2 sheet 3/4" Baltic Birch & Hard Maple');
  const [planCost, setPlanCost] = useState('$45 - $75');
  const [planDimensions, setPlanDimensions] = useState('28" W × 20" D × 4" H');
  const [planCutListRaw, setPlanCutListRaw] = useState(
    'Base Carriage | 1 | 3/4" | 20" | 28" | Baltic Birch | Bottom paste wax\n' +
    'Guide Fence | 2 | 3/4" | 3.5" | 28" | Baltic Birch | Laminated face-to-face\n' +
    'Miter Runner | 1 | 3/8" | 3/4" | 24" | Hard Maple | Snug fit in miter slot'
  );
  const [planHardwareRaw, setPlanHardwareRaw] = useState(
    '2x 500lb Holding Capacity Toggle Clamps\n' +
    '1x 28" Aluminum T-Track\n' +
    '8x 1-1/4" #8 Countersunk wood screws'
  );
  const [planRecommendedTools, setPlanRecommendedTools] = useState('Table Saw, Plunge Router, 3/8" Straight Cutter, Countersink Bits');
  const [planProTips, setPlanProTips] = useState('Use quartersawn maple for the runner to avoid seasonal swelling.');

  // Synchronize initialType when opened
  React.useEffect(() => {
    setContentType(initialType);
    setPublishedSuccess(null);
  }, [initialType, isOpen]);

  if (!isOpen) return null;

  // Preset Template Loader for rapid posting
  const loadQuickTemplate = (type: PublishContentType) => {
    setContentType(type);
    if (type === 'diy') {
      setTitle('DIY Magnetic Dovetail Sawing Guide: 1:8 Ratio Apprentice Jig');
      setSummary('A pocket-sized magnetic guide jig that locks your pull saw strictly at 1:8 angle for flawless hand-cut joinery pins.');
      setDiySubCategory('Joinery Fixtures');
      setDiyDifficulty('Beginner');
      setEstimatedTime('2 Hours');
      setMaterials('Hard Maple Scrap, 2x Neodymium Rare Earth Magnets, UHMW tape');
      setStep1Heading('Step 1: Bevel Cut the Guide Block to 7.1 Degrees (1:8 Ratio)');
      setStep1Body('Tilt your miter saw or hand plane the guide block to exactly 1:8 slope. Ensure the reference face is dead planar.');
      setStep2Heading('Step 2: Pressing Neodymium Magnets Flush');
      setStep2Body('Bore 1/2" Forstner shallow pockets. Epoxy the magnets slightly recessed, then apply slick UHMW tape so the saw blade glides freely.');
      setCoverImage('https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=1200&q=80');
      setTagsInput('DIY, Dovetails, Jig, Hand Tools');
    } else if (type === 'oils') {
      setTitle('The Ultimate Tung Oil & Citrus Solvent Recipe for Figured Hardwoods');
      setSummary('How to thin 100% pure tung oil with natural citrus solvent to achieve a rich, deep chatoyancy that waterproofs cherry and walnut.');
      setOilType('Pure Tung Oil + D-Limonene Solvent');
      setOilSandingGrit('220 - 320 Grit before first coat');
      setOilCureTime('24 hours per coat (4 coats total), 30 days full cure');
      setOilVoc('Ultra-Low (Natural Orange Terpenes)');
      setCoverImage('https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80');
      setTagsInput('Oils, Tung Oil, Natural Finishes, Walnut, Wood Care');
    } else if (type === 'polyurethanes') {
      setTitle('How to Apply Wipe-On Polyurethane with Zero Dust Nibs');
      setSummary('The foolproof method to thin oil polyurethane for a mirror-smooth tactile finish that dries quickly without bubbles or brush streaks.');
      setPolyType('50/50 Thinned Satin Polyurethane Wipe-On');
      setPolyCoats('4-5 Ultra-thin wiped coats');
      setPolyDryTime('3 Hours between coats');
      setPolyDurability('Maximum Dining Table Protection');
      setCoverImage('https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80');
      setTagsInput('Polyurethanes, Wipe-On Poly, Tabletop Finish, Clear Coats');
    } else if (type === 'tools') {
      setTitle('Lie-Nielsen No. 4 Smoothing Plane with Ductile Iron Body');
      setSummary('The gold standard heirloom hand plane for taking gossamer 0.001" shavings off stubborn curly maple and walnut.');
      setToolBrand('Lie-Nielsen Toolworks');
      setToolCategory('hand-tools');
      setToolPrice('$385');
      setToolRating('4.98');
      setToolMerchant('Woodcraft');
      setToolAffiliateLink('https://www.woodcraft.com');
      setToolPros('Bedrock frog design\nDuctile iron will not shatter if dropped\nA2 cryo-treated iron');
      setToolCons('High initial cost\nWaiting list often applies');
      setCoverImage('https://images.unsplash.com/photo-1581783342308-f792dbdd27c5?auto=format&fit=crop&w=1200&q=80');
      setTagsInput('Tools, Hand Plane, Lie-Nielsen, Smoothing');
    } else if (type === 'projects') {
      setTitle('Scandinavian White Oak Bench with Half-Lap Trestle Base');
      setSummary('A minimalist entryway bench featuring solid quarter-sawn white oak, exposed wedged through-tenons, and chamfered edges.');
      setProjectCategory('furniture');
      setTimberSpecies('Quarter-Sawn White Oak, Smoked Oak Wedges');
      setDimensions('54" L × 16" W × 18" H');
      setJoineryMethods('Wedged Through Tenons, Half-Laps, Floating Top Cleats');
      setCoverImage('https://images.unsplash.com/photo-1544457070-4cd773b4d71e?auto=format&fit=crop&w=1200&q=80');
      setTagsInput('Projects, White Oak, Scandinavian, Bench, Joinery');
    } else if (type === 'plans') {
      setTitle('Universal Table Saw Spline & Miter Keying Jig Plan');
      setSummary('A dead-square straddling jig for reinforcing 45° picture frames and keepsake box miters with decorative hardwood splines.');
      setPlanCategory('shop-jigs');
      setPlanDifficulty('Beginner');
      setPlanHours('3 - 4 Hours');
      setPlanLumber('1 Sheet (16" x 24") 3/4" Baltic Birch');
      setPlanCost('$25 - $40');
      setPlanDimensions('18" L × 10" W × 8" H');
      setPlanCutListRaw(
        'Saddle Base | 2 | 3/4" | 8" | 18" | Baltic Birch | Glides over rip fence\n' +
        'Top Bridge | 1 | 3/4" | 3.5" | 18" | Hard Maple | Screwed and glued to saddle\n' +
        '45° V-Blocks | 2 | 3/4" | 6" | 10" | Baltic Birch | 90° nested workpiece cradle'
      );
      setPlanHardwareRaw(
        '2x Small toggle hold-down clamps\n' +
        '10x 1-1/2" #8 wood screws\n' +
        'Johnson\'s paste wax'
      );
      setCoverImage('https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80');
      setTagsInput('Plans, Blueprints, Table Saw, Spline Jig, Shop Jigs');
    }
  };

  const handlePublish = (e: React.FormEvent) => {
    e.preventDefault();
    const finalImage = customImageUrl.trim() || coverImage;
    const generatedId = `custom-${Date.now()}`;
    const tags = tagsInput.split(',').map(t => t.trim()).filter(Boolean);
    const currentDate = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
    const isoDate = new Date().toISOString().split('T')[0];

    if (contentType === 'diy' || contentType === 'oils' || contentType === 'polyurethanes') {
      let catLabel: BlogPost['category'] = 'DIY & Tutorials';
      if (contentType === 'oils') catLabel = 'Oils (Hardwax & Natural)';
      if (contentType === 'polyurethanes') catLabel = 'Polyurethanes & Topcoats';

      // Parse testing scores
      const parsedTesting = testingScoresRaw.split('\n').filter(Boolean).map(line => {
        const parts = line.split(':');
        const cat = parts[0]?.trim() || 'Evaluation';
        const rest = parts[1] || '9.0 / 10 - Outstanding performance';
        const scoreMatch = rest.match(/([\d.]+)\s*\/\s*10/);
        const score = scoreMatch ? parseFloat(scoreMatch[1]) : 9.5;
        const comment = rest.replace(/[\d.]+\s*\/\s*10\s*-?/, '').trim() || rest;
        return { category: cat, score, comment };
      });

      // Parse gallery images
      const parsedGallery = galleryImagesInput.split('\n').map(s => s.trim()).filter(Boolean);

      // Parse content sections from full article body if provided
      let sections = [
        {
          id: 'overview',
          heading: 'Overview & Critical Preparation',
          paragraphs: [
            summary,
            contentType === 'oils'
              ? `Oil Specification: ${oilType}. Sanding protocol: ${oilSandingGrit}. Cure expectations: ${oilCureTime}. VOC profile: ${oilVoc}.`
              : contentType === 'polyurethanes'
              ? `Polymer formulation: ${polyType}. Application strategy: ${polyCoats}. Dry time: ${polyDryTime}. Performance: ${polyDurability}.`
              : `Required materials: ${materials}. Build difficulty: ${diyDifficulty}. Planned shop time: ${estimatedTime}.`
          ],
          callout: {
            type: 'pro-tip' as const,
            title: 'Master Craftsman Tip',
            text: 'Always ensure your shop environment is at least 65°F (18°C) with low relative humidity for optimal bond and cure.'
          }
        },
        {
          id: 'step-1',
          heading: step1Heading,
          paragraphs: [step1Body]
        },
        {
          id: 'step-2',
          heading: step2Heading,
          paragraphs: [step2Body]
        },
        {
          id: 'master-tips',
          heading: 'Long-Term Studio Maintenance',
          paragraphs: [
            'Keep documented records of your blade geometry and finish batch numbers on the back of sample boards in your workshop library.'
          ]
        }
      ];

      if (fullArticleBody.trim()) {
        const paragraphsList = fullArticleBody.split('\n\n').map(p => p.trim()).filter(Boolean);
        sections = [
          {
            id: 'full-review',
            heading: 'Comprehensive 3,000+ Word Review & Field Notes',
            paragraphs: paragraphsList
          },
          ...sections
        ];
      }

      const newPost: BlogPost = {
        id: generatedId,
        slug: title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
        title: title || `${catLabel} Entry`,
        metaTitle: `${title || catLabel} | TimberCraft Studio`,
        metaDescription: summary || `Expert field guide on ${title}`,
        excerpt: summary || 'Handcrafted woodworking tutorial and workshop insights.',
        category: catLabel,
        subCategory: contentType === 'diy' ? diySubCategory : contentType === 'oils' ? oilType : polyType,
        readTime: fullArticleBody.length > 2000 ? '15 min read (3,000+ words)' : '6 min read',
        date: currentDate,
        isoDate: isoDate,
        coverImage: finalImage,
        author: {
          name: authorName,
          role: 'Studio Craftsman',
          avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
        },
        tags: tags.length > 0 ? tags : [catLabel, 'Woodworking'],
        keyTakeaways: [
          contentType === 'oils' 
            ? `Proper sanding limits (${oilSandingGrit}) dictate natural grain penetration.`
            : contentType === 'polyurethanes'
            ? `Recommended ${polyCoats} with ${polyDryTime} for bubble-free surface.`
            : `Estimated time: ${estimatedTime} for ${diyDifficulty} builders.`,
          'Always test finishes or cut sequences on scrap cutoffs first.',
          'Heirloom craftsmanship comes from patience and repeatable calibration.'
        ],
        tableOfContents: sections.map(s => ({ id: s.id, title: s.heading })),
        diyDifficulty: contentType === 'diy' ? diyDifficulty : undefined,
        estimatedTime: contentType === 'diy' ? estimatedTime : undefined,
        materialsNeeded: contentType === 'diy' ? materials.split(',').map(m => m.trim()) : undefined,
        finishType: contentType === 'oils' ? 'oil' : contentType === 'polyurethanes' ? 'polyurethane' : undefined,
        contentSections: sections,
        testingBreakdown: parsedTesting,
        galleryImages: parsedGallery,
        pullQuote: pullQuoteText.trim() ? { quote: pullQuoteText, author: pullQuoteAuthor, role: 'Master Woodworker' } : undefined,
        faqItems: [
          {
            q: `What is the most common pitfall when working with this?`,
            a: 'Rushing between steps without allowing proper dry time or forcing an unaligned cut. Let the tool and chemistry do the work.'
          }
        ],
        isUserPost: true
      };

      onPublishBlog(newPost);
      setPublishedSuccess(`Published "${newPost.title}" to ${catLabel}!`);
    } else if (contentType === 'tools') {
      const newTool: AffiliateProduct = {
        id: generatedId,
        name: title || 'Bench Tool Review',
        brand: toolBrand,
        category: toolCategory,
        categoryLabel: toolCategory === 'saws' ? 'Table Saws & Saws' : toolCategory === 'hand-tools' ? 'Hand Planes & Saws' : toolCategory === 'routers' ? 'Routers & Joinery' : toolCategory === 'dust-collection' ? 'Dust Systems' : toolCategory === 'clamps' ? 'Clamps & Fixtures' : 'Finishing & Care',
        badge: 'Editor’s Choice',
        rating: parseFloat(toolRating) || 4.9,
        reviewsCount: 1,
        priceTier: toolPrice.length > 3 ? '$$$' : '$$',
        priceEstimate: toolPrice,
        image: finalImage,
        summary: summary || 'Comprehensive shop-tested tool evaluation with verified accuracy metrics.',
        pros: toolPros.split('\n').filter(Boolean),
        cons: toolCons.split('\n').filter(Boolean),
        specs: {
          'Brand': toolBrand,
          'Estimated Price': toolPrice,
          'Review Rating': `${toolRating} / 5.0`,
          'Affiliate Retailer': toolMerchant
        },
        affiliateLink: toolAffiliateLink || 'https://www.woodcraft.com',
        merchant: toolMerchant,
        isUserPost: true
      };

      onPublishTool(newTool);
      setPublishedSuccess(`Published tool "${newTool.name}" to Tools!`);
    } else if (contentType === 'projects') {
      const newProject: Project = {
        id: generatedId,
        title: title || 'Studio Woodworking Commission',
        subtitle: `${projectCategory.toUpperCase()} · Custom Build`,
        category: projectCategory,
        timberSpecies: timberSpecies.split(',').map(s => s.trim()),
        finish: 'Rubio Monocoat 2C with natural beeswax maintenance',
        dimensions: dimensions,
        buildTime: estimatedTime || '40 Shop Hours',
        difficulty: 'Journeyman',
        description: summary || 'Bespoke heirloom woodwork constructed with traditional joinery.',
        fullStory: `${summary}\n\nBuilt in our Pacific Northwest studio using hand-selected timber blanks. Every joint was milled to friction-fit perfection with Japanese hand saws and paring chisels.`,
        keyFeatures: [
          `Handcrafted using ${timberSpecies}`,
          `Joinery methods: ${joineryMethods}`,
          `Finished dimensions: ${dimensions}`,
          'Hand-signed and branded with studio maker’s mark'
        ],
        image: finalImage,
        toolsUsed: [
          {
            id: 'custom-hand-tools',
            name: 'Japanese Hand Saws & Paring Chisels',
            category: 'Hand Tools',
            role: 'Precision tenon and baseline joinery',
            affiliateUrl: 'https://www.woodcraft.com',
            priceEstimate: '$145'
          }
        ],
        joineryMethods: joineryMethods.split(',').map(j => j.trim()),
        clientOrLocation: 'Private Studio Archive',
        year: 2026,
        isUserPost: true
      };

      onPublishProject(newProject);
      setPublishedSuccess(`Published project "${newProject.title}" to Projects!`);
    } else if (contentType === 'plans') {
      const parsedCutList: CutListItem[] = planCutListRaw.split('\n').filter(Boolean).map(line => {
        const parts = line.split('|').map(p => p.trim());
        return {
          partName: parts[0] || 'Cut Component',
          qty: parseInt(parts[1], 10) || 1,
          thickness: parts[2] || '3/4"',
          width: parts[3] || '4"',
          length: parts[4] || '12"',
          material: parts[5] || 'Hardwood',
          notes: parts[6] || undefined
        };
      });

      const newPlan: WoodworkingPlan = {
        id: generatedId,
        title: title || 'Custom Woodworking Plan',
        slug: (title || 'custom-plan').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
        category: planCategory,
        categoryLabel: planCategory === 'shop-jigs' ? 'Shop Jigs & Fixtures' : planCategory === 'furniture' ? 'Fine Furniture' : planCategory === 'outdoor' ? 'Outdoor Projects' : planCategory === 'cabinetry' ? 'Cabinetry' : 'Small Craft & Gifts',
        difficulty: planDifficulty,
        estimatedHours: planHours,
        totalBoardFeet: planLumber,
        estimatedCost: planCost,
        dimensions: planDimensions,
        image: finalImage,
        description: summary || 'Engineered workshop blueprint with complete cut-list and hardware requirements.',
        cutList: parsedCutList.length > 0 ? parsedCutList : [
          { partName: 'Base Runner Component', qty: 2, thickness: '3/4"', width: '4"', length: '24"', material: 'Hardwood' }
        ],
        hardwareList: planHardwareRaw.split('\n').filter(Boolean),
        recommendedTools: planRecommendedTools.split(',').map(t => t.trim()).filter(Boolean),
        recommendedTimber: [timberSpecies || 'Hard Maple or Baltic Birch'],
        assemblyPhases: [
          {
            phaseNumber: 1,
            title: 'Milling & Dimensioning Parts',
            description: step1Body || 'Cut all parts precisely according to the cut-list. Verify with dial calipers or setup blocks.',
            proTips: planProTips
          },
          {
            phaseNumber: 2,
            title: 'Assembly & Hardware Fastening',
            description: step2Body || 'Assemble the sub-structures, drill countersinks, and secure with hardware.',
            proTips: 'Coat contact friction surfaces with paste wax.'
          }
        ],
        isUserPost: true
      };

      if (onPublishPlan) {
        onPublishPlan(newPlan);
      }
      setPublishedSuccess(`Published blueprint "${newPlan.title}" to the Plans Hub!`);
    }

    setTimeout(() => {
      onClose();
      setPublishedSuccess(null);
    }, 1800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-stone-950/80 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-[#faf7f2] dark:bg-[#151413] border border-stone-300 dark:border-stone-800 rounded-xl shadow-2xl my-8 overflow-hidden">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-stone-200 dark:border-stone-800 bg-stone-100/70 dark:bg-stone-900/80">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-amber-600 text-stone-950 font-bold">
              <Plus className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="font-serif text-lg sm:text-xl font-bold text-stone-900 dark:text-stone-100">
                Studio Content Publisher
              </h2>
              <p className="text-xs text-stone-500 dark:text-stone-400">
                Post frequently to Tools, Projects, DIY, Oils, or Polyurethanes
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 hover:bg-stone-200 dark:hover:bg-stone-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Success Toast */}
        {publishedSuccess && (
          <div className="mx-6 mt-4 p-4 rounded-lg bg-emerald-100 dark:bg-emerald-950/80 border border-emerald-300 dark:border-emerald-700 flex items-center gap-3 text-emerald-900 dark:text-emerald-200 animate-in slide-in-from-top-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
            <div>
              <p className="text-sm font-semibold">{publishedSuccess}</p>
              <p className="text-xs text-emerald-700 dark:text-emerald-400">Your content is now live in the menus and category feeds.</p>
            </div>
          </div>
        )}

        <form onSubmit={handlePublish} className="p-6 space-y-6 max-h-[78vh] overflow-y-auto">
          
          {/* Content Type Selector */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400 mb-2">
              Select Category / Content Type
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
              {[
                { type: 'diy' as PublishContentType, label: 'DIY', icon: BookOpen, sub: 'Jigs & Tutorials' },
                { type: 'plans' as PublishContentType, label: 'Plans', icon: FileSpreadsheet, sub: 'Cut-Lists & CAD' },
                { type: 'oils' as PublishContentType, label: 'Oils', icon: Droplet, sub: 'Hardwax & Tung' },
                { type: 'polyurethanes' as PublishContentType, label: 'Polyurethanes', icon: ShieldCheck, sub: 'Water & Oil Poly' },
                { type: 'tools' as PublishContentType, label: 'Tools', icon: Wrench, sub: 'Gear Reviews' },
                { type: 'projects' as PublishContentType, label: 'Projects', icon: FolderKanban, sub: 'Build Archive' },
              ].map(item => {
                const isSel = contentType === item.type;
                const Icon = item.icon;
                return (
                  <button
                    key={item.type}
                    type="button"
                    onClick={() => setContentType(item.type)}
                    className={`flex flex-col items-start p-3 rounded-lg border text-left transition-all ${
                      isSel 
                        ? 'border-amber-600 dark:border-amber-500 bg-amber-500/10 dark:bg-amber-500/15 ring-2 ring-amber-600/30' 
                        : 'border-stone-200 dark:border-stone-800 bg-stone-100/50 dark:bg-stone-900/50 hover:border-stone-300 dark:hover:border-stone-700'
                    }`}
                  >
                    <Icon className={`w-4 h-4 mb-1.5 ${isSel ? 'text-amber-700 dark:text-amber-400' : 'text-stone-500'}`} />
                    <span className="text-xs font-bold text-stone-900 dark:text-stone-100">{item.label}</span>
                    <span className="text-[10px] text-stone-500 dark:text-stone-400">{item.sub}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Rapid One-Click Template Loader */}
          <div className="p-3.5 bg-amber-50/80 dark:bg-amber-950/30 rounded-lg border border-amber-200/80 dark:border-amber-900/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-700 dark:text-amber-400 shrink-0" />
              <div>
                <p className="text-xs font-bold text-amber-950 dark:text-amber-200">
                  Quick-Fill Template
                </p>
                <p className="text-[11px] text-amber-800/80 dark:text-amber-400/80">
                  Load pre-filled authentic woodcraft data for rapid posting in under 15 seconds.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => loadQuickTemplate(contentType)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-md bg-stone-200 dark:bg-stone-800 hover:bg-stone-300 dark:hover:bg-stone-700 text-stone-900 dark:text-stone-100 shadow-xs transition-colors shrink-0"
              >
                <span>Template</span>
              </button>
              <button
                type="button"
                onClick={handleAiGenerateContent}
                disabled={isGeneratingAi}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-md bg-amber-600 hover:bg-amber-700 text-stone-950 shadow-xs transition-colors shrink-0 disabled:opacity-50"
              >
                <Sparkles className="w-3.5 h-3.5 text-white" />
                <span>{isGeneratingAi ? 'Generating AI Review...' : '✨ AI Generate Review & Guide'}</span>
              </button>
            </div>
          </div>

          {/* Title & Excerpt */}
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1">
                Post Title *
              </label>
              <input
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder={
                  contentType === 'diy' ? 'e.g. DIY Pocket-Hole Mortise Alignment Sled' :
                  contentType === 'oils' ? 'e.g. Rubio Monocoat 2C on Walnut: 2-Coat Longevity Test' :
                  contentType === 'polyurethanes' ? 'e.g. The Bubble-Free Wipe-On Polyurethane Guide' :
                  contentType === 'tools' ? 'e.g. Harvey Alpha HW110 Table Saw 6-Month Review' :
                  'e.g. Mid-Century Walnut Credenza with Slatted Doors'
                }
                className="w-full px-3.5 py-2 text-sm rounded-lg bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-700 text-stone-900 dark:text-stone-100 focus:outline-none focus:ring-2 focus:ring-amber-600"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1">
                Summary / Executive Excerpt *
              </label>
              <textarea
                rows={2}
                required
                value={summary}
                onChange={(e) => setSummary(e.target.value)}
                placeholder="A concise 2-sentence summary highlighting the core technique, specs, or result..."
                className="w-full px-3.5 py-2 text-sm rounded-lg bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-700 text-stone-900 dark:text-stone-100 focus:outline-none focus:ring-2 focus:ring-amber-600"
              />
            </div>
          </div>

          {/* DYNAMIC FIELDS: DIY MENU */}
          {contentType === 'diy' && (
            <div className="p-4 rounded-lg bg-stone-100/70 dark:bg-stone-900/60 border border-stone-200 dark:border-stone-800 space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-800 dark:text-amber-400">
                <BookOpen className="w-4 h-4" />
                <span>DIY Tutorial & Workshop Plans Details</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-medium text-stone-700 dark:text-stone-300 mb-1">Subcategory</label>
                  <select
                    value={diySubCategory}
                    onChange={(e) => setDiySubCategory(e.target.value)}
                    className="w-full px-3 py-1.5 text-xs rounded-md bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-700 text-stone-800 dark:text-stone-200"
                  >
                    <option value="Workshop Fixtures & Jigs">Workshop Fixtures & Jigs</option>
                    <option value="Step-by-Step Plans">Step-by-Step Plans</option>
                    <option value="Joinery Tutorials">Joinery Tutorials</option>
                    <option value="Beginner Woodcraft">Beginner Woodcraft</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-stone-700 dark:text-stone-300 mb-1">Difficulty</label>
                  <select
                    value={diyDifficulty}
                    onChange={(e) => setDiyDifficulty(e.target.value as any)}
                    className="w-full px-3 py-1.5 text-xs rounded-md bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-700 text-stone-800 dark:text-stone-200"
                  >
                    <option value="Beginner">Beginner (Apprentice)</option>
                    <option value="Intermediate">Intermediate (Journeyman)</option>
                    <option value="Advanced">Advanced (Master)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-stone-700 dark:text-stone-300 mb-1">Estimated Shop Time</label>
                  <input
                    type="text"
                    value={estimatedTime}
                    onChange={(e) => setEstimatedTime(e.target.value)}
                    className="w-full px-3 py-1.5 text-xs rounded-md bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-700 text-stone-800 dark:text-stone-200"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-stone-700 dark:text-stone-300 mb-1">Materials Needed (comma separated)</label>
                <input
                  type="text"
                  value={materials}
                  onChange={(e) => setMaterials(e.target.value)}
                  className="w-full px-3 py-1.5 text-xs rounded-md bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-700 text-stone-800 dark:text-stone-200"
                />
              </div>

              <div className="space-y-3">
                <p className="text-xs font-semibold text-stone-700 dark:text-stone-300">Step-by-Step Instructions:</p>
                <div>
                  <input
                    type="text"
                    value={step1Heading}
                    onChange={(e) => setStep1Heading(e.target.value)}
                    className="w-full px-3 py-1.5 text-xs font-semibold rounded-t-md bg-stone-200/70 dark:bg-stone-800/80 border border-stone-300 dark:border-stone-700 text-stone-900 dark:text-stone-100"
                  />
                  <textarea
                    rows={2}
                    value={step1Body}
                    onChange={(e) => setStep1Body(e.target.value)}
                    className="w-full px-3 py-1.5 text-xs rounded-b-md bg-white dark:bg-stone-900 border border-t-0 border-stone-300 dark:border-stone-700 text-stone-800 dark:text-stone-200"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    value={step2Heading}
                    onChange={(e) => setStep2Heading(e.target.value)}
                    className="w-full px-3 py-1.5 text-xs font-semibold rounded-t-md bg-stone-200/70 dark:bg-stone-800/80 border border-stone-300 dark:border-stone-700 text-stone-900 dark:text-stone-100"
                  />
                  <textarea
                    rows={2}
                    value={step2Body}
                    onChange={(e) => setStep2Body(e.target.value)}
                    className="w-full px-3 py-1.5 text-xs rounded-b-md bg-white dark:bg-stone-900 border border-t-0 border-stone-300 dark:border-stone-700 text-stone-800 dark:text-stone-200"
                  />
                </div>
              </div>
            </div>
          )}

          {/* DYNAMIC FIELDS: OILS MENU */}
          {contentType === 'oils' && (
            <div className="p-4 rounded-lg bg-stone-100/70 dark:bg-stone-900/60 border border-stone-200 dark:border-stone-800 space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-800 dark:text-amber-400">
                <Droplet className="w-4 h-4" />
                <span>Oils Finishing Parameters</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-stone-700 dark:text-stone-300 mb-1">Oil Category / Formulation</label>
                  <select
                    value={oilType}
                    onChange={(e) => setOilType(e.target.value)}
                    className="w-full px-3 py-1.5 text-xs rounded-md bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-700 text-stone-800 dark:text-stone-200"
                  >
                    <option value="Hardwax Oil (Rubio Monocoat 2C)">Hardwax Oil (Rubio Monocoat 2C)</option>
                    <option value="Osmo Polyx-Oil">Osmo Polyx-Oil (Hardwax)</option>
                    <option value="Pure Tung Oil & Solvent">Pure Tung Oil & Citrus Solvent</option>
                    <option value="Danish Oil (Polymerized)">Danish Oil (Polymerized Linseed)</option>
                    <option value="Boiled Linseed Oil & Beeswax">Boiled Linseed Oil & Beeswax</option>
                    <option value="Odie's Oil Natural Wax">Odie's Oil Natural Wax</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-stone-700 dark:text-stone-300 mb-1">Pre-Sand Grit Limit</label>
                  <input
                    type="text"
                    value={oilSandingGrit}
                    onChange={(e) => setOilSandingGrit(e.target.value)}
                    className="w-full px-3 py-1.5 text-xs rounded-md bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-700 text-stone-800 dark:text-stone-200"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-stone-700 dark:text-stone-300 mb-1">Cure Time Schedule</label>
                  <input
                    type="text"
                    value={oilCureTime}
                    onChange={(e) => setOilCureTime(e.target.value)}
                    className="w-full px-3 py-1.5 text-xs rounded-md bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-700 text-stone-800 dark:text-stone-200"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-stone-700 dark:text-stone-300 mb-1">VOC & Safety</label>
                  <input
                    type="text"
                    value={oilVoc}
                    onChange={(e) => setOilVoc(e.target.value)}
                    className="w-full px-3 py-1.5 text-xs rounded-md bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-700 text-stone-800 dark:text-stone-200"
                  />
                </div>
              </div>
            </div>
          )}

          {/* DYNAMIC FIELDS: POLYURETHANES MENU */}
          {contentType === 'polyurethanes' && (
            <div className="p-4 rounded-lg bg-stone-100/70 dark:bg-stone-900/60 border border-stone-200 dark:border-stone-800 space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-800 dark:text-amber-400">
                <ShieldCheck className="w-4 h-4" />
                <span>Polyurethanes & Topcoats Parameters</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-stone-700 dark:text-stone-300 mb-1">Polyurethane Type</label>
                  <select
                    value={polyType}
                    onChange={(e) => setPolyType(e.target.value)}
                    className="w-full px-3 py-1.5 text-xs rounded-md bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-700 text-stone-800 dark:text-stone-200"
                  >
                    <option value="Water-Based Polyurethane (Crystal Clear)">Water-Based Polyurethane (Crystal Clear)</option>
                    <option value="Oil-Based Polyurethane (Warm Amber)">Oil-Based Polyurethane (Warm Amber)</option>
                    <option value="Wipe-On Polyurethane (Thinned 50/50)">Wipe-On Polyurethane (Thinned 50/50)</option>
                    <option value="Spar Marine Urethane (UV Outdoor)">Spar Marine Urethane (UV Outdoor)</option>
                    <option value="Conversion Varnish / Lacquer">Conversion Varnish / Lacquer</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-stone-700 dark:text-stone-300 mb-1">Recommended Coats</label>
                  <input
                    type="text"
                    value={polyCoats}
                    onChange={(e) => setPolyCoats(e.target.value)}
                    className="w-full px-3 py-1.5 text-xs rounded-md bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-700 text-stone-800 dark:text-stone-200"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-stone-700 dark:text-stone-300 mb-1">Dry Time & Scuff Sand</label>
                  <input
                    type="text"
                    value={polyDryTime}
                    onChange={(e) => setPolyDryTime(e.target.value)}
                    className="w-full px-3 py-1.5 text-xs rounded-md bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-700 text-stone-800 dark:text-stone-200"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-stone-700 dark:text-stone-300 mb-1">Durability / Resistance</label>
                  <input
                    type="text"
                    value={polyDurability}
                    onChange={(e) => setPolyDurability(e.target.value)}
                    className="w-full px-3 py-1.5 text-xs rounded-md bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-700 text-stone-800 dark:text-stone-200"
                  />
                </div>
              </div>
            </div>
          )}

          {/* LONG-FORM 3,000+ WORD REVIEW & MULTIMEDIA BUILDER (FOR DIY, OILS, POLYURETHANES) */}
          {(contentType === 'diy' || contentType === 'oils' || contentType === 'polyurethanes') && (
            <div className="p-4 rounded-lg bg-amber-50/50 dark:bg-amber-950/20 border border-amber-200/60 dark:border-amber-900/40 space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-800 dark:text-amber-400">
                <Sparkles className="w-4 h-4" />
                <span>Long-Form 3,000+ Word Review & Multimedia Builder</span>
              </div>
              <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                Paste your comprehensive 3,000+ word article or review below. Separate paragraphs with a blank line (`\n\n`). It will automatically populate the article reader with a table of contents, testing scorecards, pull quotes, and high-res lightbox gallery.
              </p>

              <div>
                <label className="block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1">
                  Full Review / Article Body (3,000+ Words)
                </label>
                <textarea
                  rows={6}
                  value={fullArticleBody}
                  onChange={(e) => setFullArticleBody(e.target.value)}
                  placeholder="Paste your in-depth multi-paragraph review, lab testing notes, and woodcraft commentary here..."
                  className="w-full px-3.5 py-2.5 text-xs font-mono rounded-md bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-700 text-stone-900 dark:text-stone-100 focus:outline-none focus:ring-2 focus:ring-amber-600"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1">
                    Testing Breakdown Scores (Category: Score / 10 - Comment)
                  </label>
                  <textarea
                    rows={3}
                    value={testingScoresRaw}
                    onChange={(e) => setTestingScoresRaw(e.target.value)}
                    placeholder="Durability & Wear: 9.8 / 10 - Exceptional resilience..."
                    className="w-full px-3 py-2 text-xs font-mono rounded-md bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-700 text-stone-900 dark:text-stone-100"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1">
                    High-Res Gallery Image URLs (one per line)
                  </label>
                  <textarea
                    rows={3}
                    value={galleryImagesInput}
                    onChange={(e) => setGalleryImagesInput(e.target.value)}
                    placeholder="https://images.unsplash.com/..."
                    className="w-full px-3 py-2 text-xs font-mono rounded-md bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-700 text-stone-900 dark:text-stone-100"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 dark:text-stone-300 mb-1">
                  Expert Pull Quote Highlight
                </label>
                <input
                  type="text"
                  value={pullQuoteText}
                  onChange={(e) => setPullQuoteText(e.target.value)}
                  placeholder="e.g. This tool redefines precision joinery for the next century of woodworkers."
                  className="w-full px-3 py-2 text-xs rounded-md bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-700 text-stone-900 dark:text-stone-100"
                />
              </div>
            </div>
          )}

          {/* DYNAMIC FIELDS: TOOLS MENU */}
          {contentType === 'tools' && (
            <div className="p-4 rounded-lg bg-stone-100/70 dark:bg-stone-900/60 border border-stone-200 dark:border-stone-800 space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-800 dark:text-amber-400">
                <Wrench className="w-4 h-4" />
                <span>Tool Review & Affiliate Parameters</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-medium text-stone-700 dark:text-stone-300 mb-1">Brand Manufacturer</label>
                  <input
                    type="text"
                    value={toolBrand}
                    onChange={(e) => setToolBrand(e.target.value)}
                    className="w-full px-3 py-1.5 text-xs rounded-md bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-700 text-stone-800 dark:text-stone-200"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-stone-700 dark:text-stone-300 mb-1">Tool Category</label>
                  <select
                    value={toolCategory}
                    onChange={(e) => setToolCategory(e.target.value as any)}
                    className="w-full px-3 py-1.5 text-xs rounded-md bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-700 text-stone-800 dark:text-stone-200"
                  >
                    <option value="saws">Table Saws & Power Saws</option>
                    <option value="hand-tools">Hand Planes, Saws & Chisels</option>
                    <option value="routers">Routers & Joinery</option>
                    <option value="dust-collection">Dust Collection</option>
                    <option value="clamps">Clamps & Workholding</option>
                    <option value="finishing">Finishing & Coatings</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-stone-700 dark:text-stone-300 mb-1">Estimated Price</label>
                  <input
                    type="text"
                    value={toolPrice}
                    onChange={(e) => setToolPrice(e.target.value)}
                    className="w-full px-3 py-1.5 text-xs rounded-md bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-700 text-stone-800 dark:text-stone-200"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-stone-700 dark:text-stone-300 mb-1">Affiliate Merchant</label>
                  <select
                    value={toolMerchant}
                    onChange={(e) => setToolMerchant(e.target.value as any)}
                    className="w-full px-3 py-1.5 text-xs rounded-md bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-700 text-stone-800 dark:text-stone-200"
                  >
                    <option value="Woodcraft">Woodcraft</option>
                    <option value="Rockler">Rockler</option>
                    <option value="Lee Valley">Lee Valley</option>
                    <option value="Highland Woodworking">Highland Woodworking</option>
                    <option value="Amazon">Amazon</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-stone-700 dark:text-stone-300 mb-1">Affiliate Link URL</label>
                  <input
                    type="text"
                    value={toolAffiliateLink}
                    onChange={(e) => setToolAffiliateLink(e.target.value)}
                    className="w-full px-3 py-1.5 text-xs rounded-md bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-700 text-stone-800 dark:text-stone-200"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-emerald-700 dark:text-emerald-400 mb-1">Key Pros (one per line)</label>
                  <textarea
                    rows={2}
                    value={toolPros}
                    onChange={(e) => setToolPros(e.target.value)}
                    className="w-full px-3 py-1.5 text-xs rounded-md bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-700 text-stone-800 dark:text-stone-200"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-amber-700 dark:text-amber-400 mb-1">Cons / Trade-offs (one per line)</label>
                  <textarea
                    rows={2}
                    value={toolCons}
                    onChange={(e) => setToolCons(e.target.value)}
                    className="w-full px-3 py-1.5 text-xs rounded-md bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-700 text-stone-800 dark:text-stone-200"
                  />
                </div>
              </div>
            </div>
          )}

          {/* DYNAMIC FIELDS: PROJECTS MENU */}
          {contentType === 'projects' && (
            <div className="p-4 rounded-lg bg-stone-100/70 dark:bg-stone-900/60 border border-stone-200 dark:border-stone-800 space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-800 dark:text-amber-400">
                <FolderKanban className="w-4 h-4" />
                <span>Woodworking Project Specifications</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-medium text-stone-700 dark:text-stone-300 mb-1">Project Category</label>
                  <select
                    value={projectCategory}
                    onChange={(e) => setProjectCategory(e.target.value as any)}
                    className="w-full px-3 py-1.5 text-xs rounded-md bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-700 text-stone-800 dark:text-stone-200"
                  >
                    <option value="furniture">Fine Furniture</option>
                    <option value="joinery">Timber Joinery</option>
                    <option value="shop">Workshop Builds</option>
                    <option value="turning">Lathe & Turning</option>
                    <option value="diy">DIY & Plans</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-stone-700 dark:text-stone-300 mb-1">Timber Species</label>
                  <input
                    type="text"
                    value={timberSpecies}
                    onChange={(e) => setTimberSpecies(e.target.value)}
                    className="w-full px-3 py-1.5 text-xs rounded-md bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-700 text-stone-800 dark:text-stone-200"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-stone-700 dark:text-stone-300 mb-1">Finished Dimensions</label>
                  <input
                    type="text"
                    value={dimensions}
                    onChange={(e) => setDimensions(e.target.value)}
                    className="w-full px-3 py-1.5 text-xs rounded-md bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-700 text-stone-800 dark:text-stone-200"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-stone-700 dark:text-stone-300 mb-1">Joinery Methods (comma separated)</label>
                <input
                  type="text"
                  value={joineryMethods}
                  onChange={(e) => setJoineryMethods(e.target.value)}
                  className="w-full px-3 py-1.5 text-xs rounded-md bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-700 text-stone-800 dark:text-stone-200"
                />
              </div>
            </div>
          )}

          {/* DYNAMIC FIELDS: PLANS HUB */}
          {contentType === 'plans' && (
            <div className="p-4 rounded-lg bg-stone-100/70 dark:bg-stone-900/60 border border-stone-200 dark:border-stone-800 space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-800 dark:text-amber-400">
                <FileSpreadsheet className="w-4 h-4" />
                <span>Woodworking Plan & Cut-List Parameters</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-medium text-stone-700 dark:text-stone-300 mb-1">Plan Category</label>
                  <select
                    value={planCategory}
                    onChange={(e) => setPlanCategory(e.target.value as any)}
                    className="w-full px-3 py-1.5 text-xs rounded-md bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-700 text-stone-800 dark:text-stone-200"
                  >
                    <option value="shop-jigs">Shop Jigs & Fixtures</option>
                    <option value="furniture">Fine Furniture</option>
                    <option value="outdoor">Outdoor Projects</option>
                    <option value="cabinetry">Cabinetry</option>
                    <option value="small-craft">Small Craft & Gifts</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-stone-700 dark:text-stone-300 mb-1">Skill Difficulty</label>
                  <select
                    value={planDifficulty}
                    onChange={(e) => setPlanDifficulty(e.target.value as any)}
                    className="w-full px-3 py-1.5 text-xs rounded-md bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-700 text-stone-800 dark:text-stone-200"
                  >
                    <option value="Beginner">Beginner (Basic Hand/Power tools)</option>
                    <option value="Intermediate">Intermediate (Mortise & Tenon, Jigs)</option>
                    <option value="Advanced">Advanced (Fine Joinery, Curved Work)</option>
                    <option value="Master">Master (Heirloom, Complex Carving)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-stone-700 dark:text-stone-300 mb-1">Estimated Shop Hours</label>
                  <input
                    type="text"
                    value={planHours}
                    onChange={(e) => setPlanHours(e.target.value)}
                    className="w-full px-3 py-1.5 text-xs rounded-md bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-700 text-stone-800 dark:text-stone-200"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-medium text-stone-700 dark:text-stone-300 mb-1">Lumber Required</label>
                  <input
                    type="text"
                    value={planLumber}
                    onChange={(e) => setPlanLumber(e.target.value)}
                    className="w-full px-3 py-1.5 text-xs rounded-md bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-700 text-stone-800 dark:text-stone-200"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-stone-700 dark:text-stone-300 mb-1">Estimated Cost</label>
                  <input
                    type="text"
                    value={planCost}
                    onChange={(e) => setPlanCost(e.target.value)}
                    className="w-full px-3 py-1.5 text-xs rounded-md bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-700 text-stone-800 dark:text-stone-200"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-stone-700 dark:text-stone-300 mb-1">Finished Dimensions</label>
                  <input
                    type="text"
                    value={planDimensions}
                    onChange={(e) => setPlanDimensions(e.target.value)}
                    className="w-full px-3 py-1.5 text-xs rounded-md bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-700 text-stone-800 dark:text-stone-200"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-stone-700 dark:text-stone-300 mb-1">
                  Cut-List Items (Format: Part Name | Qty | Thick | Width | Length | Material | Notes)
                </label>
                <textarea
                  rows={4}
                  value={planCutListRaw}
                  onChange={(e) => setPlanCutListRaw(e.target.value)}
                  className="w-full px-3 py-1.5 text-xs rounded-md bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-700 text-stone-800 dark:text-stone-200 font-mono"
                  placeholder="Base Carriage | 1 | 3/4&quot; | 20&quot; | 28&quot; | Baltic Birch"
                />
                <span className="text-[11px] text-stone-400">Enter each part on its own line using pipes (|)</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-stone-700 dark:text-stone-300 mb-1">Hardware / Fasteners (one per line)</label>
                  <textarea
                    rows={3}
                    value={planHardwareRaw}
                    onChange={(e) => setPlanHardwareRaw(e.target.value)}
                    className="w-full px-3 py-1.5 text-xs rounded-md bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-700 text-stone-800 dark:text-stone-200"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-stone-700 dark:text-stone-300 mb-1">Master Pro Tips for this Plan</label>
                  <textarea
                    rows={3}
                    value={planProTips}
                    onChange={(e) => setPlanProTips(e.target.value)}
                    className="w-full px-3 py-1.5 text-xs rounded-md bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-700 text-stone-800 dark:text-stone-200"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Cover Image Gallery Picker */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400 mb-2">
              Select or Custom Cover Image
            </label>
            <div className="grid grid-cols-4 sm:grid-cols-8 gap-2 mb-3">
              {CURATED_IMAGES.map((img, idx) => {
                const isSelected = coverImage === img.url && !customImageUrl;
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => {
                      setCoverImage(img.url);
                      setCustomImageUrl('');
                    }}
                    className={`relative h-16 rounded-md overflow-hidden border transition-all ${
                      isSelected 
                        ? 'ring-2 ring-amber-600 border-amber-600 scale-105 shadow-md' 
                        : 'border-stone-300 dark:border-stone-700 opacity-70 hover:opacity-100'
                    }`}
                    title={img.label}
                  >
                    <img src={img.url} alt={img.label} className="w-full h-full object-cover" />
                  </button>
                );
              })}
            </div>

            <div className="flex items-center gap-2">
              <ImageIcon className="w-4 h-4 text-stone-400 shrink-0" />
              <input
                type="text"
                value={customImageUrl}
                onChange={(e) => setCustomImageUrl(e.target.value)}
                placeholder="Or paste custom image URL (https://...)"
                className="w-full px-3 py-1.5 text-xs rounded-md bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-700 text-stone-800 dark:text-stone-200"
              />
            </div>
          </div>

          {/* Tags & Author */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-stone-700 dark:text-stone-300 mb-1">
                Tags (comma separated)
              </label>
              <input
                type="text"
                value={tagsInput}
                onChange={(e) => setTagsInput(e.target.value)}
                className="w-full px-3 py-1.5 text-xs rounded-md bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-700 text-stone-800 dark:text-stone-200"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-stone-700 dark:text-stone-300 mb-1">
                Author Byline
              </label>
              <input
                type="text"
                value={authorName}
                onChange={(e) => setAuthorName(e.target.value)}
                className="w-full px-3 py-1.5 text-xs rounded-md bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-700 text-stone-800 dark:text-stone-200"
              />
            </div>
          </div>

          {/* Footer Actions */}
          <div className="pt-4 border-t border-stone-200 dark:border-stone-800 flex items-center justify-between gap-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium rounded-lg text-stone-600 dark:text-stone-400 hover:bg-stone-200 dark:hover:bg-stone-800 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-stone-950 bg-amber-500 hover:bg-amber-400 rounded-lg shadow-md hover:shadow-lg transition-all"
            >
              <Plus className="w-4 h-4 text-stone-950" />
              <span>Publish to {contentType.toUpperCase()}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
