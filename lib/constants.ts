import { 
  Shirt, 
  Trophy, 
  Users, 
  Truck, 
  CheckCircle2, 
  ShieldCheck, 
  Zap, 
  Palette,
  Mail,
  Phone,
  MapPin,
  Clock,
  Instagram,
  Facebook,
  Twitter
} from 'lucide-react';

export const BRAND_NAME = "OMEGA Garment Enterprise";
export const TAGLINE = "WINNERS CHOICE!";
export const CONTACT_EMAIL = "fitsumhibizuneh966@gmail.com";
export const CONTACT_PHONE = "0911347574 /0960606099";
export const CONTACT_ADDRESS = "Hawassa, Ethiopia";
export const CONTACT_MAP_URL = "https://maps.app.goo.gl/khLfBveuouNXyM4S6";
export const WORKING_HOURS = "Mon - Sat: 8:30 AM - 6:30 PM";
export const WHATSAPP_NUMBER = "251911234567";

export const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

export const TRUST_BADGES = [
  { 
    title: "Quality Fabric", 
    description: "Premium, breathable materials designed for peak performance.",
    icon: ShieldCheck 
  },
  { 
    title: "Custom Branding", 
    description: "High-quality printing and embroidery for your team identity.",
    icon: Palette 
  },
  { 
    title: "Fast Delivery", 
    description: "Efficient production cycles to meet your deadlines.",
    icon: Zap 
  },
  { 
    title: "Bulk Orders", 
    description: "Scalable manufacturing for clubs, schools, and sectors.",
    icon: Users 
  },
];

export const PRODUCT_CATEGORIES = [
  {
    id: "t-shirt",
    name: "T-shirts",
    slug: "t-shirt",
    shortDescription: "Versatile, breathable T-shirts for training and casual wear.",
    bullets: ["100% Cotton or Polyester", "Moisture-wicking tech", "Custom prints available"],
    icon: Shirt,
  },
  {
    id: "uniform",
    name: "Team Uniforms",
    slug: "uniform",
    shortDescription: "Professional-grade uniforms for football, basketball, and more.",
    bullets: ["Durable stitching", "Sublimation printing", "All sizes available"],
    icon: Trophy,
  },
  {
    id: "tracksuit",
    name: "Tracksuits",
    slug: "tracksuit",
    shortDescription: "Stylish and comfortable tracksuits for travel and warm-ups.",
    bullets: ["Lightweight fabric", "Zippered pockets", "Custom embroidery"],
    icon: Shirt,
  },
  {
    id: "jackets",
    name: "Sport Jackets",
    slug: "jackets",
    shortDescription: "Weather-resistant jackets for outdoor sports and coaching.",
    bullets: ["Windproof & Water-resistant", "Mesh lining", "Adjustable hoods"],
    icon: Shirt,
  },
  // {
  //   id: "suits",
  //   name: "Suits & Formal",
  //   slug: "suits",
  //   shortDescription: "Premium suits for sector offices and formal team events.",
  //   bullets: ["Tailored fit", "High-quality wool blends", "Classic designs"],
  //   icon: Shirt,
  // },
  // {
  //   id: "pants",
  //   name: "Basketball ",
  //   slug: "basketball",
  //   shortDescription: "Specialized sports Basketball and protective .",
  //   bullets: ["Flexible materials", "Reinforced knees", "Impact protection"],
  //   icon: Shirt,
  // },
  // {
  //   id: "shirts",
  //   name: "Sport Shirts",
  //   slug: "shirts",
  //   shortDescription: "Professional shirts for corporate branding and offices.",
  //   bullets: ["Easy-iron fabric", "Long/Short sleeve", "Logo placement"],
  //   icon: Shirt,
  // },
  // {
  //   id: "various",
  //   name: "Various Clothes",
  //   slug: "various",
  //   shortDescription: "Custom garments tailored to your specific requirements.",
  //   bullets: ["Bespoke design", "Bulk production", "Quality guaranteed"],
  //   icon: Shirt,
  // },
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Abebe Kebede",
    role: "Coach, Addis United FC",
    content: "OMEGA provided our team with the best uniforms we've ever had. The fabric quality is exceptional and the branding is sharp.",
  },
  {
    id: 2,
    name: "Selamawit Tadesse",
    role: "Director, Sunshine School",
    content: "We ordered 500 school uniforms and OMEGA delivered ahead of schedule. The fit and durability are perfect for active students.",
  },
  {
    id: 3,
    name: "Dawit Mengistu",
    role: "HR Manager, Sector Office",
    content: "Our corporate shirts look professional and feel comfortable. OMEGA's attention to detail in embroidery is impressive.",
  },
];

export const FAQ_ITEMS = [
  {
    question: "What is the minimum order quantity (MOQ)?",
    answer: "Our standard MOQ is 20 pieces per design, but we can accommodate smaller orders for specialized items. Contact us for details.",
  },
  {
    question: "How long does production take?",
    answer: "Standard production time is 10-15 working days after design approval. Bulk orders may take longer depending on the volume.",
  },
  {
    question: "Do you offer custom design services?",
    answer: "Yes! Our design team can help you create custom logos, color schemes, and layouts for your team or organization.",
  },
  {
    question: "What branding methods do you use?",
    answer: "We offer high-quality screen printing, heat transfer, sublimation, and professional embroidery.",
  },
  {
    question: "Can you deliver outside of Hawassa?",
    answer: "Absolutely. We ship to all regions of Ethiopia and can arrange international shipping if required.",
  },
];

export const GALLERY_ITEMS = [
  { id: 1, category: "t-shirt", title: "Football T-shirt", src: "/gallery/tshirt.jpg" },
  { id: 2, category: "uniform", title: "Football Kit", src: "/gallery/foot-kit.jpg" },
  { id: 3, category: "tracksuit", title: "Team Tracksuit", src: "/gallery/trucksuit.jpg" },
  { id: 4, category: "jackets", title: "Coaching Jacket", src: "/gallery/jacket.jpg" },
  { id: 5, category: "t-shirt", title: "Custom Polo", src: "/gallery/football-tshirt.jpg" },
  { id: 6, category: "uniform", title: "Basketball Uniform", src: "/gallery/basket.jpg" },
  { id: 7, category: "tracksuit", title: "Warm-up Suit", src: "/gallery/t-shirt.jpg" },
  { id: 8, category: "various", title: "Custom Garment", src: "/gallery/tuta.jpg" },
];

export const SOCIAL_LINKS = [
  { icon: Facebook, href: "#", name: "Facebook" },
  { icon: Instagram, href: "#", name: "Instagram" },
  { icon: Twitter, href: "#", name: "Twitter" },
];
