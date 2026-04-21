import ceo from "../assets/images/CEO.jpg.jpeg";
import dm from "../assets/images/ajmal.jpeg";
import th from "../assets/images/thaju.jpeg";
import sh from "../assets/images/shabi.jpeg";
import ash from "../assets/images/ribu.jpeg";

export const projectsData = [
    {
      id: 1,
      name: 'NeoBank Digital',
      client: 'FinTech Startup',
      status: 'ongoing',
      dueDate: '2024-04-15',
      priority: 'high',
      team: ['Raniya', 'Ajmal'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
      description: 'Complete digital transformation for a leading fintech startup including mobile app and web platform.',
      budget: '$75,000',
      category: 'branding'
    },
    {
      id: 2,
      name: 'Maison Élégance',
      client: 'Luxury Retail',
      status: 'review',
      dueDate: '2024-03-30',
      priority: 'high',
      team: ['Wafa', 'Shabeeb'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
      description: 'Complete brand identity overhaul including packaging design and brand guidelines.',
      budget: '$45,000',
      category: 'branding'
    },
    {
      id: 3,
      name: 'CloudScale AI',
      client: 'Tech Startup',
      status: 'ongoing',
      dueDate: '2024-05-20',
      priority: 'medium',
      team: ['Thaju', 'Ashjal'],
      image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd',
      description: 'Brand strategy and market positioning for B2B SaaS platform.',
      budget: '$60,000',
      category: 'branding'
    },
    {
      id: 4,
      name: 'MediCare Plus',
      client: 'Healthcare',
      status: 'ongoing',
      dueDate: '2024-04-10',
      priority: 'high',
      team: ['Raniya', 'Ajmal'],
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d',
      description: 'Promotional video production and digital marketing campaign.',
      budget: '$35,000',
      category: 'video production'
    },
];

export const teamMembers = [
  { name: 'Ajmal Anfas', role: 'Digital Marketing Strategist', img: dm, desc: 'Delivering integrated digital solutions that enhance brand visibility, engagement, and revenue performance.' },
  { name: 'Thajudheen', role: 'Developer Head', img: th, desc: "He doesn't just write code — he builds digital experiences that help ideas come to life" },
  { name: 'Shabeeb Rahman', role: 'Creative Visualiser', img: sh, desc: 'Turns ideas into visuals that tell stories, capture attention, and bring brands to life.' },
  { name: 'Ashjal UK', role: 'Developer', img: ash, desc: 'Turns ideas into scalable digital solutions that power performance and drive impact.' },
  { name: 'Raniya CT', role: 'CEO', img: ceo, desc: 'Leads the company with passion, creativity, and a strong vision for helping businesses grow' },
  { name: 'Coming Soon', role: 'Team Member', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80', desc: 'Details for this team member will be added soon.' },
  { name: 'Coming Soon', role: 'Team Member', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80', desc: 'Details for this team member will be added soon.' },
];

export const navItems = [
    { id: "services", label: "Services" },
    { id: "portfolio", label: "Portfolio" },
    { id: "team", label: "Team" },
    { id: "life", label: "Life" },
    { id: "contact", label: "Contact" }
];
