import React, { useState } from 'react';
import { ChevronDown, RefreshCw, Mail, Car, MapPin, Loader2 } from 'lucide-react';

const MyersBlogApp = () => {
  // Mock data for car brands and their corresponding dealership locations
  const brandsData = {
    Nissan: ['Barrhaven', 'Kanata', 'Orléans', 'Ottawa'],
    Toyota: ['Barrhaven'],
    Hyundai: ['Barrhaven', 'Kanata'],
    Infiniti: ['Ottawa'],
    Dodge: ['Manotick'],
    Jeep: ['Manotick'],
    Ram: ['Manotick'],
    Chevrolet: ['Orléans', 'Kanata', 'Ottawa'],
    GMC: ['Orléans', 'Kanata'],
    Volkswagen: ['Kanata', 'Barrhaven'],
    Subaru: ['Barrhaven']
  };

  // Blog post suggestions (5 per brand-location)
  const blogSuggestions = {
    Nissan: {
      Barrhaven: [
        {
          title: "2024 Nissan Altima vs Honda Accord: Which Sedan Wins in Barrhaven?",
          keywords: ["Nissan Altima Barrhaven", "sedan comparison", "fuel efficiency Ottawa"],
          summary: "Compare the Altima’s performance, design, and fuel efficiency against the Honda Accord for Barrhaven commuters and families."
        },
        {
          title: "Top 5 Family-Friendly Features in the 2024 Nissan Rogue",
          keywords: ["Nissan Rogue family", "SUV safety Barrhaven", "cargo space"],
          summary: "Discover why the Rogue is the go-to SUV for Barrhaven families, with advanced safety, space, and comfort."
        },
        {
          title: "Certified Pre-Owned Nissan: Smart Choice in Barrhaven",
          keywords: ["certified pre-owned Nissan", "Barrhaven dealership", "warranty coverage"],
          summary: "Explore the benefits of buying certified pre-owned Nissan models in Barrhaven, from warranties to cost savings."
        },
        {
          title: "Electric Revolution: Why the Nissan Leaf Fits Ottawa Suburbs",
          keywords: ["Nissan Leaf Barrhaven", "EV benefits Ottawa", "charging stations"],
          summary: "Why Barrhaven commuters are choosing the Nissan Leaf for eco-friendly and cost-efficient driving."
        },
        {
          title: "Winter Prep: Nissan Maintenance Tips for Barrhaven Drivers",
          keywords: ["Nissan winter prep", "snow tires Ottawa", "AWD systems"],
          summary: "Essential winter maintenance tips to keep your Nissan reliable through Ottawa’s snowy season."
        }
      ],
      Kanata: [
        {
          title: "Nissan Sentra: The Perfect First Car for Kanata Students",
          keywords: ["Nissan Sentra Kanata", "student vehicle", "first car"],
          summary: "Affordable, safe, and tech-savvy—the Nissan Sentra is an ideal first car for Kanata students."
        },
        {
          title: "Exploring Kanata’s Best Scenic Routes in a Nissan Pathfinder",
          keywords: ["Nissan Pathfinder Kanata", "family SUV", "scenic drives"],
          summary: "Take your Pathfinder on the best scenic routes around Kanata for family adventures."
        },
        {
          title: "Nissan Z: Sports Car Thrills for Kanata Enthusiasts",
          keywords: ["Nissan Z Kanata", "sports car performance", "driving fun"],
          summary: "Unleash heritage sports car performance with the redesigned Nissan Z in Kanata."
        },
        {
          title: "Tech-Savvy Drivers: The Nissan Maxima in Kanata",
          keywords: ["Nissan Maxima Kanata", "sedan tech features", "infotainment"],
          summary: "Discover the premium technology features that make the Maxima a standout sedan in Kanata."
        },
        {
          title: "Family SUV Spotlight: Nissan Armada for Kanata Households",
          keywords: ["Nissan Armada Kanata", "full-size SUV", "8-passenger"],
          summary: "Why the Nissan Armada is the perfect SUV for Kanata’s larger families needing space and towing."
        }
      ],
      Orléans: [
        {
          title: "Nissan Titan: Workhorse Pickup for Orléans Contractors",
          keywords: ["Nissan Titan Orléans", "pickup truck", "contractor vehicle"],
          summary: "The Titan delivers heavy-duty power and reliability for trades and construction work in Orléans."
        },
        {
          title: "Luxury Meets Comfort: Nissan Murano in Orléans",
          keywords: ["Nissan Murano Orléans", "luxury SUV", "family comfort"],
          summary: "Premium features and sleek style make the Murano a top SUV for Orléans families."
        },
        {
          title: "Nissan NV200: Commercial Van for Orléans Small Business",
          keywords: ["Nissan NV200 Orléans", "work van", "commercial vehicle"],
          summary: "Perfect for entrepreneurs, the NV200 offers practicality and efficiency for Orléans businesses."
        },
        {
          title: "Nissan Frontier: Mid-Size Pickup for Work and Play",
          keywords: ["Nissan Frontier Orléans", "mid-size truck", "outdoor lifestyle"],
          summary: "Explore why the Nissan Frontier is ideal for Orléans residents who want both utility and fun."
        },
        {
          title: "Family Road Trips Made Easy: Nissan Quest in Orléans",
          keywords: ["Nissan Quest Orléans", "minivan", "family adventures"],
          summary: "The Quest is the versatile family minivan built for Orléans road trips and everyday driving."
        }
      ],
      Ottawa: [
        {
          title: "Downtown Parking Solutions: Nissan Versa in Ottawa",
          keywords: ["Nissan Versa Ottawa", "compact sedan", "city car"],
          summary: "The Nissan Versa makes downtown Ottawa driving and parking stress-free."
        },
        {
          title: "Nissan Kicks: Urban SUV Built for Ottawa Life",
          keywords: ["Nissan Kicks Ottawa", "compact SUV", "city living"],
          summary: "Perfectly sized for Ottawa city living, the Nissan Kicks blends SUV versatility with style."
        },
        {
          title: "Executive Travel: Nissan Maxima for Ottawa Professionals",
          keywords: ["Nissan Maxima Ottawa", "executive sedan", "luxury features"],
          summary: "Why Ottawa professionals choose the Maxima for executive-level comfort and performance."
        },
        {
          title: "Performance Legends: Nissan GTR in Ottawa",
          keywords: ["Nissan GTR Ottawa", "supercar", "performance"],
          summary: "The Nissan GTR delivers supercar thrills to Ottawa’s most passionate driving enthusiasts."
        },
        {
          title: "Sustainable Business: Nissan e-NV200 Electric Van",
          keywords: ["Nissan e-NV200 Ottawa", "electric van", "commercial fleet"],
          summary: "Ottawa businesses are adopting the e-NV200 for sustainable, cost-saving deliveries."
        }
      ]
    },
      Toyota: {
    Barrhaven: [
      {
        title: "Toyota RAV4 Hybrid: Maximum Fuel Efficiency for Barrhaven",
        keywords: ["Toyota RAV4 Hybrid Barrhaven", "SUV fuel efficiency", "eco driving"],
        summary: "Why the RAV4 Hybrid is Barrhaven’s top choice for eco-friendly commuting."
      },
      {
        title: "2024 Toyota Camry: Sedan Excellence in Barrhaven",
        keywords: ["Toyota Camry Barrhaven", "midsize sedan", "reliability"],
        summary: "Explore why the redesigned Camry continues to dominate the midsize sedan market in Barrhaven."
      },
      {
        title: "Toyota Prius: Barrhaven’s Hybrid Leader",
        keywords: ["Toyota Prius Barrhaven", "hybrid technology", "eco-friendly"],
        summary: "The Prius remains the standard for hybrids, popular among Barrhaven’s green-minded drivers."
      },
      {
        title: "Toyota Highlander: Family-Friendly 3-Row SUV",
        keywords: ["Toyota Highlander Barrhaven", "family SUV", "3-row seating"],
        summary: "Perfect for growing Barrhaven families, the Highlander balances space and safety."
      },
      {
        title: "Toyota Corolla: Best First Car for Students",
        keywords: ["Toyota Corolla Barrhaven", "first car", "student vehicle"],
        summary: "Why the Corolla is a top choice for Barrhaven students looking for reliability and affordability."
      }
    ]
  },
  Hyundai: {
    Barrhaven: [
      {
        title: "Hyundai Tucson vs Honda CR-V: Compact SUV Showdown",
        keywords: ["Hyundai Tucson Barrhaven", "SUV comparison", "compact crossover"],
        summary: "Why the Tucson stands out for Barrhaven drivers comparing compact SUVs."
      },
      {
        title: "Hyundai Elantra: Best Value Sedan for First-Time Buyers",
        keywords: ["Hyundai Elantra Barrhaven", "sedan", "first-time buyers"],
        summary: "Affordable, reliable, and packed with warranty coverage—the Elantra is ideal for Barrhaven buyers."
      },
      {
        title: "Hyundai Palisade: Large SUV Comfort in Barrhaven",
        keywords: ["Hyundai Palisade Barrhaven", "8-passenger SUV", "luxury SUV"],
        summary: "Why the Palisade is the luxury 8-passenger SUV Barrhaven families are choosing."
      },
      {
        title: "Hyundai Kona Electric: Zero-Emission SUV",
        keywords: ["Hyundai Kona EV Barrhaven", "electric SUV", "green driving"],
        summary: "Kona EV is perfect for Barrhaven drivers wanting electric power with SUV practicality."
      },
      {
        title: "Hyundai Sonata: Tech-Savvy Sedan for Professionals",
        keywords: ["Hyundai Sonata Barrhaven", "tech sedan", "professionals"],
        summary: "The Sonata blends bold design with advanced technology for Barrhaven professionals."
      }
    ],
    Kanata: [
      {
        title: "Hyundai Santa Fe: Family SUV for Kanata Adventures",
        keywords: ["Hyundai Santa Fe Kanata", "3-row SUV", "family vehicle"],
        summary: "The Santa Fe’s space and safety features make it a top choice for Kanata families."
      },
      {
        title: "Hyundai Ioniq 5: EV Innovation for Kanata Drivers",
        keywords: ["Hyundai Ioniq 5 Kanata", "electric SUV", "EV charging"],
        summary: "Ioniq 5 sets new standards in Kanata for EV performance and charging speed."
      },
      {
        title: "Hyundai Veloster N: Hot Hatch Fun for Kanata",
        keywords: ["Hyundai Veloster N Kanata", "sports hatch", "performance"],
        summary: "Why the Veloster N is a top pick for Kanata’s driving enthusiasts."
      },
      {
        title: "Hyundai Genesis G90: Premium Sedan for Kanata Executives",
        keywords: ["Hyundai Genesis G90 Kanata", "luxury sedan", "executive car"],
        summary: "The G90 offers world-class refinement for Kanata’s executives."
      },
      {
        title: "Hyundai Venue: Compact SUV Built for Kanata City Life",
        keywords: ["Hyundai Venue Kanata", "urban SUV", "city driving"],
        summary: "Perfect for Kanata professionals who want small SUV practicality and style."
      }
    ]
  },
  Infiniti: {
    Ottawa: [
      {
        title: "Infiniti QX60: Luxury 3-Row SUV for Ottawa Executives",
        keywords: ["Infiniti QX60 Ottawa", "executive SUV", "premium family"],
        summary: "The QX60 is the perfect balance of space and luxury for Ottawa executives."
      },
      {
        title: "Infiniti Q50: Luxury Sedan for Ottawa Professionals",
        keywords: ["Infiniti Q50 Ottawa", "luxury sedan", "performance sedan"],
        summary: "Why Ottawa professionals love the Infiniti Q50’s performance and design."
      },
      {
        title: "Infiniti QX80: Commanding Luxury SUV for Ottawa Families",
        keywords: ["Infiniti QX80 Ottawa", "luxury SUV", "full-size SUV"],
        summary: "The QX80 delivers full-size SUV power and luxury for Ottawa families."
      },
      {
        title: "Infiniti Q60: Coupe Performance in Ottawa",
        keywords: ["Infiniti Q60 Ottawa", "luxury coupe", "sports performance"],
        summary: "Stylish and sporty, the Q60 is the luxury coupe Ottawa drivers admire."
      },
      {
        title: "Infiniti QX50: Compact SUV Tech for Ottawa",
        keywords: ["Infiniti QX50 Ottawa", "compact SUV", "premium features"],
        summary: "The Infiniti QX50 combines advanced tech and luxury in a compact SUV package."
      }
    ]
  },
  Dodge: {
    Manotick: [
      {
        title: "Dodge Challenger: Classic Muscle in Manotick",
        keywords: ["Dodge Challenger Manotick", "muscle car", "HEMI power"],
        summary: "Legendary muscle performance makes the Challenger a head-turner in Manotick."
      },
      {
        title: "Dodge Charger: Four-Door Performance for Manotick Families",
        keywords: ["Dodge Charger Manotick", "sports sedan", "family muscle car"],
        summary: "The Charger blends muscle power with practicality for Manotick households."
      },
      {
        title: "Dodge Durango: 3-Row SUV Performance",
        keywords: ["Dodge Durango Manotick", "3-row SUV", "SUV towing"],
        summary: "Durango is the ultimate performance SUV for large Manotick families."
      },
      {
        title: "Dodge Journey: Affordable SUV in Manotick",
        keywords: ["Dodge Journey Manotick", "family SUV", "value SUV"],
        summary: "A budget-friendly SUV that fits the needs of Manotick’s families."
      },
      {
        title: "Dodge Grand Caravan: Minivan Icon in Manotick",
        keywords: ["Dodge Grand Caravan Manotick", "minivan", "Stow n Go"],
        summary: "The Grand Caravan continues to be a trusted minivan for Manotick families."
      }
    ]
  },
  Jeep: {
    Manotick: [
      {
        title: "Jeep Wrangler: Off-Road King of Manotick",
        keywords: ["Jeep Wrangler Manotick", "4x4", "off-road"],
        summary: "The Wrangler remains the ultimate off-road machine for Manotick adventurers."
      },
      {
        title: "Jeep Grand Cherokee: Luxury Meets Capability",
        keywords: ["Jeep Grand Cherokee Manotick", "luxury SUV", "towing capacity"],
        summary: "Grand Cherokee offers both luxury and rugged performance for Manotick drivers."
      },
      {
        title: "Jeep Cherokee: Mid-Size Adventure SUV",
        keywords: ["Jeep Cherokee Manotick", "mid-size SUV", "trail SUV"],
        summary: "Perfect for Manotick families seeking a balance of adventure and daily driving."
      },
      {
        title: "Jeep Compass: Compact Jeep for Everyday Life",
        keywords: ["Jeep Compass Manotick", "compact SUV", "affordable Jeep"],
        summary: "The Compass provides Jeep capability in a compact, affordable package."
      },
      {
        title: "Jeep Gladiator: Pickup with Jeep DNA",
        keywords: ["Jeep Gladiator Manotick", "pickup truck", "convertible truck"],
        summary: "The Gladiator combines Wrangler fun with pickup practicality in Manotick."
      }
    ]
  },
  Ram: {
    Manotick: [
      {
        title: "Ram 1500: Best-in-Class Pickup for Manotick",
        keywords: ["Ram 1500 Manotick", "pickup truck", "best-in-class"],
        summary: "The Ram 1500 combines strength and comfort for Manotick drivers."
      },
      {
        title: "Ram 2500: Heavy-Duty Power in Manotick",
        keywords: ["Ram 2500 Manotick", "heavy duty", "work truck"],
        summary: "Why contractors in Manotick trust the Ram 2500 for power and hauling."
      },
      {
        title: "Ram 3500: Maximum Capability for Manotick",
        keywords: ["Ram 3500 Manotick", "commercial truck", "heavy-duty"],
        summary: "The Ram 3500 delivers ultimate towing and hauling for Manotick businesses."
      },
      {
        title: "Ram ProMaster: Commercial Van for Manotick Trades",
        keywords: ["Ram ProMaster Manotick", "cargo van", "business van"],
        summary: "The ProMaster is built for contractors and businesses in Manotick."
      },
      {
        title: "Ram ProMaster City: Small Van Solution for Manotick",
        keywords: ["Ram ProMaster City Manotick", "compact van", "business efficiency"],
        summary: "A compact commercial van perfect for small businesses in Manotick."
      }
    ]
  },
  Chevrolet: {
    Orléans: [
      {
        title: "Chevrolet Equinox: Family-Friendly SUV for Orléans",
        keywords: ["Chevrolet Equinox Orléans", "SUV", "family"],
        summary: "The Equinox is ideal for Orléans families balancing affordability and features."
      },
      {
        title: "Chevrolet Silverado: Trusted Pickup in Orléans",
        keywords: ["Chevrolet Silverado Orléans", "pickup", "contractors"],
        summary: "Orléans contractors choose the Silverado for dependability and power."
      },
      {
        title: "Chevrolet Cruze: Efficient Sedan in Orléans",
        keywords: ["Chevrolet Cruze Orléans", "sedan", "fuel economy"],
        summary: "Perfect for commuters, the Cruze offers efficiency and comfort in Orléans."
      },
      {
        title: "Chevrolet Traverse: Spacious SUV for Families",
        keywords: ["Chevrolet Traverse Orléans", "3-row SUV", "large family"],
        summary: "The Traverse delivers comfort and space for big Orléans families."
      },
      {
        title: "Chevrolet Bolt EV: Electric Driving in Orléans",
        keywords: ["Chevrolet Bolt EV Orléans", "electric vehicle", "eco car"],
        summary: "Orléans residents go green with the Bolt EV, a practical affordable electric car."
      }
    ],
    Kanata: [
      {
        title: "Chevrolet Malibu: Commuter Sedan for Kanata",
        keywords: ["Chevrolet Malibu Kanata", "midsize sedan", "commuter car"],
        summary: "The Malibu is perfect for Kanata professionals needing comfort and value."
      },
      {
        title: "Chevrolet Suburban: Family SUV in Kanata",
        keywords: ["Chevrolet Suburban Kanata", "SUV", "large family"],
        summary: "The Suburban offers maximum space and comfort for large Kanata families."
      },
      {
        title: "Chevrolet Camaro: Muscle Car Fun for Kanata",
        keywords: ["Chevrolet Camaro Kanata", "sports car", "muscle car"],
        summary: "Kanata driving enthusiasts can unleash power with the Camaro."
      },
      {
        title: "Chevrolet Colorado: Mid-Size Truck for Kanata",
        keywords: ["Chevrolet Colorado Kanata", "mid-size truck", "pickup"],
        summary: "Colorado strikes the balance of power and drivability for Kanata households."
      },
      {
        title: "Chevrolet Corvette: Supercar Thrills in Kanata",
        keywords: ["Chevrolet Corvette Kanata", "supercar", "performance"],
        summary: "The Corvette delivers exotic performance for Kanata car lovers."
      }
    ],
    Ottawa: [
      {
        title: "Chevrolet Tahoe: Big SUV for Ottawa Families",
        keywords: ["Chevrolet Tahoe Ottawa", "large SUV", "family"],
        summary: "The Tahoe provides space and capability for Ottawa’s big families."
      },
      {
        title: "Chevrolet Impala: Executive Sedan in Ottawa",
        keywords: ["Chevrolet Impala Ottawa", "executive sedan", "luxury"],
        summary: "Why Ottawa executives rely on the Impala for space and refinement."
      },
      {
        title: "Chevrolet Express: Commercial Van for Ottawa Businesses",
        keywords: ["Chevrolet Express Ottawa", "cargo van", "work van"],
        summary: "The Express is a trusted solution for Ottawa’s small business fleets."
      },
      {
        title: "Chevrolet Spark: Compact Car for Ottawa City Life",
        keywords: ["Chevrolet Spark Ottawa", "compact car", "fuel economy"],
        summary: "Small, efficient, and easy to park—the Spark is perfect for Ottawa city living."
      },
      {
        title: "Chevrolet Silverado HD: Heavy Duty for Ottawa Contractors",
        keywords: ["Chevrolet Silverado HD Ottawa", "heavy-duty truck", "contractor truck"],
        summary: "Ottawa contractors choose the Silverado HD for maximum towing and durability."
      }
    ]
  },
  GMC: {
    Orléans: [
      {
        title: "GMC Sierra: Work-Ready Pickup in Orléans",
        keywords: ["GMC Sierra Orléans", "pickup truck", "work truck"],
        summary: "Professional grade pickup that balances power and refinement in Orléans."
      },
      {
        title: "GMC Terrain: Compact SUV for Families",
        keywords: ["GMC Terrain Orléans", "SUV", "family vehicle"],
        summary: "The Terrain offers small SUV practicality with GMC quality in Orléans."
      },
      {
        title: "GMC Canyon: Mid-Size Pickup in Orléans",
        keywords: ["GMC Canyon Orléans", "mid-size pickup", "contractor"],
        summary: "The Canyon is the right-size truck for Orléans contractors and families."
      },
      {
        title: "GMC Yukon: Full-Size SUV for Orléans Executives",
        keywords: ["GMC Yukon Orléans", "SUV", "executive SUV"],
        summary: "Yukon delivers luxury and power for Orléans executives and big families."
      },
      {
        title: "GMC Savana: Commercial Van for Orléans Business",
        keywords: ["GMC Savana Orléans", "work van", "cargo van"],
        summary: "The Savana is a go-to van for Orléans contractors and delivery companies."
      }
    ],
    Kanata: [
      {
        title: "GMC Acadia: Family SUV in Kanata",
        keywords: ["GMC Acadia Kanata", "SUV", "3-row"],
        summary: "Acadia offers premium features and three rows for Kanata families."
      },
      {
        title: "GMC Denali Lineup: Luxury SUVs for Kanata",
        keywords: ["GMC Denali Kanata", "luxury SUV", "premium trim"],
        summary: "Denali models deliver GMC’s top luxury and capability for Kanata drivers."
      },
      {
        title: "GMC AT4: Off-Road Capability in Kanata",
        keywords: ["GMC AT4 Kanata", "off-road SUV", "rugged"],
        summary: "AT4 SUVs and trucks offer Kanata residents off-road power and refinement."
      },
      {
        title: "GMC MultiPro Tailgate: Work Smarter in Kanata",
        keywords: ["GMC MultiPro Kanata", "tailgate innovation", "truck features"],
        summary: "Learn why Kanata truck owners love GMC’s MultiPro tailgate."
      },
      {
        title: "GMC Hummer EV: Electric Supertruck for Kanata",
        keywords: ["GMC Hummer EV Kanata", "electric truck", "luxury EV"],
        summary: "The Hummer EV brings electric innovation to Kanata in style."
      }
    ]
  },
  Volkswagen: {
    Kanata: [
      {
        title: "Volkswagen Atlas: SUV for Kanata Families",
        keywords: ["Volkswagen Atlas Kanata", "3-row SUV", "German SUV"],
        summary: "The Atlas delivers German engineering and space for Kanata families."
      },
      {
        title: "VW Golf: Iconic Hatchback for Kanata City Driving",
        keywords: ["Volkswagen Golf Kanata", "hatchback", "compact car"],
        summary: "The Golf is stylish and practical, perfect for Kanata professionals."
      },
      {
        title: "VW Tiguan: Compact SUV for Kanata",
        keywords: ["Volkswagen Tiguan Kanata", "compact SUV", "family SUV"],
        summary: "Tiguan is Kanata’s go-to compact SUV with German reliability."
      },
      {
        title: "VW Passat: Premium Sedan for Kanata Professionals",
        keywords: ["Volkswagen Passat Kanata", "sedan", "professional"],
        summary: "Kanata executives enjoy the comfort and style of the Passat sedan."
      },
      {
        title: "VW ID.4: Electric SUV Comes to Kanata",
        keywords: ["Volkswagen ID.4 Kanata", "electric SUV", "EV"],
        summary: "The ID.4 is Volkswagen’s all-electric SUV now available in Kanata."
      }
    ],
    Barrhaven: [
      {
        title: "VW Jetta: Compact Sedan for Barrhaven Families",
        keywords: ["Volkswagen Jetta Barrhaven", "compact sedan", "German sedan"],
        summary: "Jetta offers style and reliability, popular with Barrhaven commuters."
      },
      {
        title: "VW Taos: Compact SUV Value in Barrhaven",
        keywords: ["Volkswagen Taos Barrhaven", "small SUV", "SUV value"],
        summary: "The Taos provides SUV practicality at a compact size for Barrhaven residents."
      },
      {
        title: "VW Golf GTI: Hot Hatch Fun in Barrhaven",
        keywords: ["Volkswagen Golf GTI Barrhaven", "sports hatch", "GTI"],
        summary: "Barrhaven drivers love the GTI for sporty handling and performance."
      },
      {
        title: "German Reliability: VW’s Promise for Barrhaven",
        keywords: ["Volkswagen Barrhaven", "German engineering", "VW reliability"],
        summary: "Volkswagen’s German build quality makes it a reliable choice for Barrhaven drivers."
      },
      {
        title: "VW Arteon: Premium Sedan in Barrhaven",
        keywords: ["Volkswagen Arteon Barrhaven", "premium sedan", "luxury"],
        summary: "Arteon offers coupe-like design and premium comfort for Barrhaven buyers."
      }
    ]
  },
  Subaru: {
    Barrhaven: [
      {
        title: "Subaru Outback: Adventure Wagon for Barrhaven",
        keywords: ["Subaru Outback Barrhaven", "AWD wagon", "adventure vehicle"],
        summary: "Outback’s AWD and cargo space make it Barrhaven’s favorite adventure vehicle."
      },
      {
        title: "Subaru Forester: Compact SUV Safety Leader",
        keywords: ["Subaru Forester Barrhaven", "SUV safety", "compact SUV"],
        summary: "Forester offers class-leading safety for Barrhaven families."
      },
      {
        title: "Subaru Ascent: 3-Row SUV for Barrhaven Families",
        keywords: ["Subaru Ascent Barrhaven", "family SUV", "3-row SUV"],
        summary: "Large Barrhaven families love the space and safety of the Ascent."
      },
      {
        title: "Subaru Legacy: All-Weather Sedan in Barrhaven",
        keywords: ["Subaru Legacy Barrhaven", "sedan AWD", "all-weather driving"],
        summary: "Legacy provides all-weather confidence for Barrhaven commuters."
      },
      {
        title: "Subaru WRX: Rally Performance Sedan",
        keywords: ["Subaru WRX Barrhaven", "performance sedan", "rally car"],
        summary: "Barrhaven drivers unleash AWD turbocharged performance in the WRX."
      }
    ]
  }
  };

  // State management
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [currentSuggestions, setCurrentSuggestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showEmailPrompt, setShowEmailPrompt] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  // Handle brand selection
  const handleBrandSelect = (brand) => {
    setSelectedBrand(brand);
    setSelectedLocation('');
    setCurrentSuggestions([]);
  };

  // Handle location selection and trigger data loading
  const handleLocationSelect = async (location) => {
    setSelectedLocation(location);
    setIsLoading(true);
    setCurrentIndex(0);

    await new Promise(resolve => setTimeout(resolve, 1000));

    const allSuggestions = blogSuggestions[selectedBrand]?.[location] || [];
    const firstThree = allSuggestions.slice(0, 3);
    setCurrentSuggestions(firstThree);
    setIsLoading(false);
  };

  // Refresh cycle
  const handleRefresh = async () => {
    setIsLoading(true);

    const allSuggestions = blogSuggestions[selectedBrand]?.[selectedLocation] || [];
    const nextIndex = (currentIndex + 3) % allSuggestions.length;

    let nextSuggestions;
    if (nextIndex + 3 <= allSuggestions.length) {
      nextSuggestions = allSuggestions.slice(nextIndex, nextIndex + 3);
    } else {
      const remaining = allSuggestions.slice(nextIndex);
      const fromStart = allSuggestions.slice(0, 3 - remaining.length);
      nextSuggestions = [...remaining, ...fromStart];
    }

    await new Promise(resolve => setTimeout(resolve, 1000));

    setCurrentSuggestions(nextSuggestions);
    setCurrentIndex(nextIndex);
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 p-4">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-white">
          <div className="flex items-center gap-2 mb-2">
            <Car className="w-6 h-6" />
            <h1 className="text-xl font-bold">Myers Automotive</h1>
          </div>
          <p className="text-blue-100 text-sm">SEO Blog Post Suggestions</p>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Brand Selection */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Select Car Brand
            </label>
            <div className="grid grid-cols-2 gap-3">
              {Object.keys(brandsData).map(brand => (
                <button
                  key={brand}
                  onClick={() => handleBrandSelect(brand)}
                  className={`p-3 rounded-lg border-2 text-sm font-medium ${
                    selectedBrand === brand
                      ? 'border-blue-500 bg-blue-50 text-blue-700'
                      : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50'
                  }`}
                >
                  {brand}
                </button>
              ))}
            </div>
          </div>

          {/* Location Selection */}
          {selectedBrand && (
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                <MapPin className="inline w-4 h-4 mr-1" />
                Select Myers Location
              </label>
              <div className="space-y-2">
                {brandsData[selectedBrand].map(location => (
                  <button
                    key={location}
                    onClick={() => handleLocationSelect(location)}
                    className={`w-full p-3 rounded-lg border-2 text-sm font-medium text-left ${
                      selectedLocation === location
                        ? 'border-green-500 bg-green-50 text-green-700'
                        : 'border-gray-200 hover:border-green-300 hover:bg-green-50'
                    }`}
                  >
                    Myers {selectedBrand} - {location}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Loading State */}
          {isLoading && (
            <div className="text-center py-8">
              <Loader2 className="w-8 h-8 animate-spin mx-auto text-blue-600 mb-3" />
              <p className="text-gray-600 font-medium">Gathering Data...</p>
            </div>
          )}

          {/* Blog Suggestions */}
          {!isLoading && currentSuggestions.length > 0 && (
            <div className="space-y-4">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold text-gray-800">Blog Post Ideas</h2>
                <button
                  onClick={handleRefresh}
                  className="flex items-center gap-2 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm"
                >
                  <RefreshCw className="w-4 h-4" />
                  Refresh
                </button>
              </div>

              {currentSuggestions.map((post, index) => (
                <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-semibold text-blue-700 hover:text-blue-800 mb-2">
                    {post.title}
                  </h3>
                  <div className="mb-3 flex flex-wrap gap-2">
                    {post.keywords.map((keyword, kidx) => (
                      <span key={kidx} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                        {keyword}
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-700 text-sm">{post.summary}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyersBlogApp;
