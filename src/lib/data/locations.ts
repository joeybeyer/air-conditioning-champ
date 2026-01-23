// src/lib/data/locations.ts
// West Valley Arizona location data for Air Conditioning Champ

export interface LocationFAQ {
  question: string;
  answer: string;
}

export interface Location {
  slug: string;
  city: string;
  state: string;
  stateFullName: string;
  zipCodes: string[];
  population: number;
  neighborhoods: string[];
  landmarks: string[];
  majorRoads: string[];
  nearbyLocations: string[];
  climateNotes: string;
  localInfo: string;
  serviceNotes: string;
  faqs: LocationFAQ[];
  metaTitle: string;
  metaDescription: string;
  keyTakeaways: string[];
}

export const LOCATIONS: Location[] = [
  {
    slug: 'el-mirage-az',
    city: 'El Mirage',
    state: 'AZ',
    stateFullName: 'Arizona',
    zipCodes: ['85335'],
    population: 35000,
    neighborhoods: ['El Mirage City Center', 'Dysart Ranch', 'Thompson Ranch', 'Rancho El Mirage'],
    landmarks: ['El Mirage Aquatic Center', 'Thunderbird Conservation Park', 'El Mirage Community Center', 'Festival Foothills'],
    majorRoads: ['Grand Avenue (US 60)', 'Dysart Road', 'El Mirage Road', 'Olive Avenue', 'Northern Avenue'],
    nearbyLocations: ['surprise-az', 'peoria-az', 'glendale-az'],
    climateNotes: `El Mirage experiences the full intensity of Arizona's desert climate with summer temperatures regularly exceeding 110°F. The city sits at approximately 1,100 feet elevation in the Sonoran Desert, receiving less than 8 inches of rainfall annually. Monsoon season from July through September brings sudden dust storms and humidity spikes that stress AC systems.`,
    localInfo: `El Mirage is one of the fastest-growing communities in the West Valley, attracting families with affordable housing and easy access to Phoenix via Grand Avenue. The city has invested heavily in parks and recreation facilities, including the popular El Mirage Aquatic Center. Many homes are newer construction with modern HVAC systems.`,
    serviceNotes: `Our El Mirage service area covers all neighborhoods including the newer developments along Dysart Road and the established communities near Grand Avenue. We maintain quick response times throughout El Mirage with technicians familiar with the specific HVAC challenges of homes in this area.`,
    faqs: [
      { question: 'How quickly can you respond to AC emergencies in El Mirage?', answer: 'We typically respond to AC emergencies in El Mirage within 1-2 hours. Our technicians are stationed throughout the West Valley, ensuring fast service to El Mirage residents 24/7.' },
      { question: 'What are common AC problems in El Mirage homes?', answer: 'Common AC problems in El Mirage include compressor failures from extreme heat, clogged filters from desert dust, and refrigerant leaks. The combination of high temperatures and fine desert dust puts extra strain on HVAC systems.' },
      { question: 'Do you service the newer developments in El Mirage?', answer: 'Yes, we service all El Mirage neighborhoods including newer developments like Thompson Ranch and Dysart Ranch, as well as established areas near the city center.' },
      { question: 'How much does AC repair cost in El Mirage, AZ?', answer: 'AC repair in El Mirage typically costs between $89-$500 depending on the issue. We provide upfront pricing before starting any work.' },
      { question: 'Do you offer AC maintenance plans in El Mirage?', answer: 'Yes, we offer maintenance plans for El Mirage residents that include bi-annual tune-ups, priority scheduling, and repair discounts.' },
    ],
    metaTitle: 'El Mirage AC Repair & HVAC Service | Air Conditioning Champ',
    metaDescription: 'Expert AC repair and HVAC services in El Mirage, AZ. 24/7 emergency service, all brands, upfront pricing. Fast response throughout El Mirage. Call now!',
    keyTakeaways: ['Same-day AC service in El Mirage with 1-2 hour emergency response times', 'Serving all El Mirage neighborhoods including Dysart Ranch and Thompson Ranch', 'Licensed technicians experienced with desert climate HVAC challenges'],
  },
  {
    slug: 'surprise-az',
    city: 'Surprise',
    state: 'AZ',
    stateFullName: 'Arizona',
    zipCodes: ['85374', '85378', '85379', '85387', '85388'],
    population: 143000,
    neighborhoods: ['Surprise Farms', 'Marley Park', 'Rancho Gabriela', 'Arizona Traditions', 'Sun Village', 'Ashton Ranch', 'Desert Oasis', 'Surprise City Center'],
    landmarks: ['Surprise Stadium', 'Surprise Tennis & Racquet Complex', 'Surprise Recreation Campus', 'White Tank Mountain Regional Park', 'Surprise Community Park'],
    majorRoads: ['Grand Avenue (US 60)', 'Bell Road', 'Greenway Road', 'Waddell Road', 'Cotton Lane', 'Litchfield Road'],
    nearbyLocations: ['el-mirage-az', 'peoria-az', 'sun-city-west-az'],
    climateNotes: `Surprise shares the extreme desert climate typical of the West Valley, with summer highs frequently reaching 110-115°F. Located at the base of the White Tank Mountains, Surprise can experience slightly different microweather patterns during monsoon season.`,
    localInfo: `Surprise has grown from a small agricultural community to one of Arizona's largest cities, known for its master-planned communities and spring training baseball. The city features a mix of housing from active adult communities like Sun Village to family neighborhoods like Marley Park.`,
    serviceNotes: `Surprise is one of our busiest service areas due to its size and diverse housing stock. We serve all Surprise neighborhoods from the active adult communities in the north to the family developments throughout the city.`,
    faqs: [
      { question: 'How quickly can you get to Surprise for AC repair?', answer: 'We typically arrive in Surprise within 1-2 hours for emergency calls. With Surprise being one of our primary service areas, we always have technicians nearby ready to respond.' },
      { question: 'Do you service the 55+ communities in Surprise?', answer: 'Yes, we regularly service Sun Village, Arizona Traditions, and other active adult communities in Surprise. We understand the specific HVAC needs of these communities.' },
      { question: 'What AC brands do you service in Surprise?', answer: 'We service all major AC brands in Surprise including Trane, Carrier, Lennox, Rheem, Goodman, and more.' },
      { question: 'How much does a new AC cost in Surprise, AZ?', answer: 'A new AC system in Surprise typically costs $4,500-$12,000 depending on home size and efficiency rating. We offer free in-home estimates and financing options.' },
      { question: 'Is AC maintenance really necessary in Surprise?', answer: 'Absolutely. The extreme Surprise heat puts tremendous strain on AC systems. Regular maintenance prevents breakdowns and extends system life.' },
    ],
    metaTitle: 'Surprise AZ AC Repair & HVAC Service | Air Conditioning Champ',
    metaDescription: 'Professional AC repair and HVAC services in Surprise, Arizona. 24/7 emergency service, free estimates, all neighborhoods served. Call for fast AC service!',
    keyTakeaways: ['Serving all Surprise neighborhoods including Marley Park, Sun Village, and Surprise Farms', '24/7 emergency AC service with fast response times throughout Surprise', 'Experienced with both family homes and 55+ community HVAC needs'],
  },
  {
    slug: 'peoria-az',
    city: 'Peoria',
    state: 'AZ',
    stateFullName: 'Arizona',
    zipCodes: ['85345', '85380', '85381', '85382', '85383'],
    population: 190000,
    neighborhoods: ['Vistancia', 'Westwing', 'Terramar', 'Fletcher Heights', 'Old Town Peoria', 'Sunrise Heights', 'Lake Pleasant Heights', 'Peoria Pines'],
    landmarks: ['Lake Pleasant Regional Park', 'Peoria Sports Complex', 'Rio Vista Recreation Center', 'Challenger Space Center', 'Pioneer Community Park'],
    majorRoads: ['Grand Avenue (US 60)', 'Lake Pleasant Parkway', 'Thunderbird Road', '83rd Avenue', 'Happy Valley Road', 'Pinnacle Peak Road'],
    nearbyLocations: ['glendale-az', 'surprise-az', 'el-mirage-az', 'sun-city-az'],
    climateNotes: `Peoria's climate varies slightly by location—areas closer to Lake Pleasant experience marginally cooler summer nights, while central Peoria sees the full desert heat. Summer temperatures exceed 110°F regularly.`,
    localInfo: `Peoria spans from established neighborhoods near Old Town to the master-planned communities of Vistancia in the north. The city is known for excellent schools, spring training baseball, and Lake Pleasant recreation.`,
    serviceNotes: `Peoria is a core service area for Air Conditioning Champ. We serve the entire city from the newer Vistancia developments to the established Fletcher Heights neighborhood.`,
    faqs: [
      { question: 'Do you service all areas of Peoria, AZ?', answer: 'Yes, we service all of Peoria from the newer communities like Vistancia and Westwing to established areas like Fletcher Heights and Old Town Peoria.' },
      { question: 'How much does AC repair cost in Peoria?', answer: 'AC repair in Peoria ranges from $89-$500 depending on the issue. Our diagnostic fee is $89 and is waived if you proceed with the repair.' },
      { question: 'Can you install a new AC system in north Peoria?', answer: 'Absolutely. We install new AC systems throughout Peoria including Vistancia, Westwing, and all north Peoria communities.' },
      { question: 'Do homes near Lake Pleasant need different AC service?', answer: 'Homes near Lake Pleasant may experience slightly more humidity during monsoons, which can affect AC performance. Regular maintenance is important.' },
      { question: 'What is the best AC system for Peoria homes?', answer: 'For Peoria\'s extreme heat, we recommend high-efficiency systems (16+ SEER) from quality brands like Trane or Carrier.' },
    ],
    metaTitle: 'Peoria AZ AC Repair & Installation | Air Conditioning Champ',
    metaDescription: 'Expert AC repair and installation in Peoria, Arizona. Serving Vistancia, Old Town, and all Peoria neighborhoods. 24/7 emergency service. Call now!',
    keyTakeaways: ['Full-service HVAC coverage across all Peoria neighborhoods from Old Town to Vistancia', '24/7 emergency AC repair with rapid response throughout Peoria', 'Experienced with both older Peoria homes and new construction HVAC systems'],
  },
  {
    slug: 'glendale-az',
    city: 'Glendale',
    state: 'AZ',
    stateFullName: 'Arizona',
    zipCodes: ['85301', '85302', '85303', '85304', '85305', '85306', '85307', '85308', '85310', '85311', '85312', '85318'],
    population: 250000,
    neighborhoods: ['Arrowhead Ranch', 'Bellair', 'Historic Downtown', 'Thunderbird', 'Sahuaro Ranch', 'Manistee Ranch', 'Glen Lakes', 'Cactus Corridor'],
    landmarks: ['State Farm Stadium', 'Westgate Entertainment District', 'Glendale Civic Center', 'Sahuaro Ranch Park', 'Historic Catlin Court', 'Glendale Community College'],
    majorRoads: ['Loop 101', 'Grand Avenue (US 60)', 'Glendale Avenue', 'Northern Avenue', 'Thunderbird Road', '59th Avenue', '67th Avenue'],
    nearbyLocations: ['peoria-az', 'el-mirage-az', 'avondale-az'],
    climateNotes: `Glendale sits in the heart of the Phoenix metro heat island, often recording some of the highest temperatures in the Valley. Summer nights stay warmer due to urban heat retention.`,
    localInfo: `Glendale is a diverse city blending historic neighborhoods with modern development. The Arrowhead area features upscale homes and shopping, while historic downtown offers character and the famous Antique District.`,
    serviceNotes: `Glendale's size and diversity make it one of our most active service areas. We serve everything from the historic homes in central Glendale to the newer luxury properties in Arrowhead.`,
    faqs: [
      { question: 'Do you offer emergency AC service in Glendale?', answer: 'Yes, we provide 24/7 emergency AC service throughout Glendale. With Glendale\'s extreme heat, we always have technicians ready to respond.' },
      { question: 'Can you service older AC units in historic Glendale homes?', answer: 'Absolutely. We service older systems in Glendale\'s historic neighborhoods. When repairs aren\'t cost-effective, we recommend efficient replacement options.' },
      { question: 'How much does AC installation cost in Glendale?', answer: 'AC installation in Glendale typically costs $4,500-$12,000 depending on system size and efficiency. We offer free in-home estimates and financing.' },
      { question: 'Do you service the Arrowhead area of Glendale?', answer: 'Yes, we serve all of Arrowhead Ranch and north Glendale. Many Arrowhead homes have high-efficiency systems we\'re experienced in maintaining.' },
      { question: 'Why does my Glendale home stay so warm at night?', answer: 'Glendale experiences the urban heat island effect, with buildings and pavement retaining heat. This means AC systems work harder at night.' },
    ],
    metaTitle: 'Glendale AZ AC Repair & HVAC Service | Air Conditioning Champ',
    metaDescription: 'Professional AC repair and HVAC services in Glendale, Arizona. From Arrowhead to Historic Downtown. 24/7 emergency service. Call for AC repair!',
    keyTakeaways: ['Comprehensive HVAC service across all Glendale from historic downtown to Arrowhead Ranch', '24/7 emergency service with fast response in Arizona\'s 5th largest city', 'Experienced with diverse housing stock from 1950s homes to modern luxury properties'],
  },
  {
    slug: 'goodyear-az',
    city: 'Goodyear',
    state: 'AZ',
    stateFullName: 'Arizona',
    zipCodes: ['85338', '85395'],
    population: 95000,
    neighborhoods: ['Estrella Mountain Ranch', 'Palm Valley', 'Pebble Creek', 'Canyon Trails', 'Sarival', 'Goodyear Village'],
    landmarks: ['Estrella Mountain Regional Park', 'Goodyear Ballpark', 'Palm Valley Golf Course', 'Estrella Star Tower', 'Bullard Wash Trail'],
    majorRoads: ['I-10', 'Estrella Parkway', 'Litchfield Road', 'Yuma Road', 'McDowell Road', 'Van Buren Street'],
    nearbyLocations: ['avondale-az', 'litchfield-park-az', 'buckeye-az'],
    climateNotes: `Goodyear experiences the full desert heat with some of the highest temperatures in the West Valley. Summer temperatures routinely hit 115°F, putting extreme demands on AC systems.`,
    localInfo: `Goodyear has transformed from a small agricultural town to a thriving city with master-planned communities like Estrella Mountain Ranch and Pebble Creek. Most homes are newer construction with modern HVAC systems.`,
    serviceNotes: `Goodyear is a growing service area with many newer homes requiring regular maintenance to keep warranties valid. We serve all Goodyear communities from Palm Valley to Estrella Mountain Ranch.`,
    faqs: [
      { question: 'Do you service Estrella Mountain Ranch in Goodyear?', answer: 'Yes, we provide full HVAC service throughout Estrella Mountain Ranch and all Goodyear communities.' },
      { question: 'How often should I change my AC filter in Goodyear?', answer: 'In Goodyear, we recommend changing AC filters monthly during summer. The combination of extreme use and desert dust means filters clog faster.' },
      { question: 'Is a high SEER AC worth it in Goodyear?', answer: 'Absolutely. With Goodyear\'s extreme heat, higher SEER systems (18+) pay for themselves faster through energy savings.' },
      { question: 'Can you service my AC warranty in Goodyear?', answer: 'Yes, we perform manufacturer-authorized warranty service in Goodyear. Regular maintenance is typically required to maintain warranty coverage.' },
      { question: 'How long do AC systems last in Goodyear?', answer: 'AC systems in Goodyear typically last 12-15 years with proper maintenance, compared to 15-20 years in milder climates.' },
    ],
    metaTitle: 'Goodyear AZ AC Repair & Service | Air Conditioning Champ',
    metaDescription: 'Expert AC repair and HVAC service in Goodyear, Arizona. Serving Estrella Mountain Ranch, Palm Valley & all communities. 24/7 emergency service. Call now!',
    keyTakeaways: ['Serving all Goodyear communities including Estrella Mountain Ranch and Pebble Creek', 'Experienced with newer construction HVAC systems and builder warranty service', '24/7 emergency response in one of Arizona\'s fastest-growing cities'],
  },
  {
    slug: 'avondale-az',
    city: 'Avondale',
    state: 'AZ',
    stateFullName: 'Arizona',
    zipCodes: ['85323', '85392'],
    population: 90000,
    neighborhoods: ['Garden Lakes', 'Coldwater Springs', 'Tres Rios', 'Crystal Gardens', 'Avondale Civic Center', 'Westwind'],
    landmarks: ['Phoenix Raceway', 'Friendship Park', 'Avondale Civic Center', 'Tres Rios Wetlands', 'Festival Fields'],
    majorRoads: ['I-10', 'Avondale Boulevard', 'Dysart Road', 'McDowell Road', 'Van Buren Street', 'Buckeye Road'],
    nearbyLocations: ['goodyear-az', 'litchfield-park-az', 'glendale-az'],
    climateNotes: `Avondale shares the extreme West Valley climate with temperatures frequently exceeding 110°F in summer. The Tres Rios wetlands area can experience slightly higher humidity.`,
    localInfo: `Avondale offers a mix of established neighborhoods and newer developments at accessible price points. The city is known for Phoenix Raceway and hosts major NASCAR events.`,
    serviceNotes: `Avondale is a key service area with accessible pricing that makes quality HVAC service especially important to residents. We serve all Avondale neighborhoods with fast response times.`,
    faqs: [
      { question: 'How quickly can you get to Avondale for AC repair?', answer: 'We typically reach Avondale within 1-2 hours for emergency calls. Avondale\'s central West Valley location means we usually have technicians nearby.' },
      { question: 'Do you offer affordable AC repair in Avondale?', answer: 'Yes, we provide competitive pricing for all Avondale residents. Our diagnostic fee is only $89 and is waived with repair.' },
      { question: 'What AC brands are common in Avondale homes?', answer: 'Avondale homes commonly have Goodman, Trane, and Carrier systems. We service all brands.' },
      { question: 'Is it worth upgrading my Avondale home\'s AC?', answer: 'If your AC is 10+ years old, upgrading to a higher efficiency system can significantly reduce energy bills.' },
      { question: 'Do you service Garden Lakes in Avondale?', answer: 'Yes, we service all of Garden Lakes and every Avondale neighborhood.' },
    ],
    metaTitle: 'Avondale AZ AC Repair & Service | Air Conditioning Champ',
    metaDescription: 'Reliable AC repair and HVAC services in Avondale, Arizona. Serving Garden Lakes, Coldwater Springs & all areas. Affordable pricing, 24/7 service. Call now!',
    keyTakeaways: ['Affordable AC repair and service throughout all Avondale neighborhoods', 'Fast response times with technicians stationed in the West Valley', 'Experienced with builder-grade and upgraded HVAC systems common in Avondale'],
  },
  {
    slug: 'buckeye-az',
    city: 'Buckeye',
    state: 'AZ',
    stateFullName: 'Arizona',
    zipCodes: ['85326', '85396'],
    population: 91000,
    neighborhoods: ['Verrado', 'Tartesso', 'Sundance', 'Westpark', 'Festival Ranch', 'Downtown Buckeye'],
    landmarks: ['Skyline Regional Park', 'Verrado Golf Club', 'Buckeye Hills Regional Park', 'Downtown Buckeye', 'White Tank Mountains'],
    majorRoads: ['I-10', 'Verrado Way', 'Watson Road', 'Miller Road', 'MC 85', 'Baseline Road'],
    nearbyLocations: ['goodyear-az', 'litchfield-park-az', 'avondale-az'],
    climateNotes: `Buckeye sits at the western edge of the Phoenix metro, experiencing intense desert heat that can reach 115°F or higher. The proximity to open desert means more dust and wind.`,
    localInfo: `Buckeye is Arizona's fastest-growing city, with master-planned communities like Verrado, Tartesso, and Sundance attracting families and retirees. Many homes are brand new with the latest HVAC technology.`,
    serviceNotes: `Buckeye presents unique service considerations due to its rapid growth and western location. We've expanded coverage to serve all Buckeye communities from Verrado to Downtown.`,
    faqs: [
      { question: 'Do you really service Buckeye, AZ?', answer: 'Yes, we provide full HVAC service throughout Buckeye including Verrado, Tartesso, Sundance, and all other communities.' },
      { question: 'How long does it take to reach Buckeye for emergencies?', answer: 'Emergency response to Buckeye typically takes 1-2 hours depending on your location within the city.' },
      { question: 'Are Buckeye homes\' AC systems different?', answer: 'Many Buckeye homes have newer, high-efficiency systems due to recent construction. These often include smart thermostats.' },
      { question: 'Why do Verrado homes get so hot?', answer: 'Verrado\'s foothill location and southwest-facing slopes can increase heat exposure. Proper AC sizing and maintenance are especially important.' },
      { question: 'Do you offer new AC installation in Buckeye?', answer: 'Yes, we install new AC systems throughout Buckeye with free estimates and financing available.' },
    ],
    metaTitle: 'Buckeye AZ AC Repair & Installation | Air Conditioning Champ',
    metaDescription: 'Professional AC repair and installation in Buckeye, Arizona. Serving Verrado, Tartesso, Sundance & all areas. Growing with Buckeye! Call for service.',
    keyTakeaways: ['Full HVAC service coverage in Arizona\'s fastest-growing city', 'Experienced with new construction systems in Verrado, Tartesso, and Sundance', 'Reliable emergency response throughout all Buckeye communities'],
  },
  {
    slug: 'litchfield-park-az',
    city: 'Litchfield Park',
    state: 'AZ',
    stateFullName: 'Arizona',
    zipCodes: ['85340'],
    population: 7000,
    neighborhoods: ['Litchfield Park Historic District', 'Village at Litchfield Park', 'Russell Ranch', 'Wigwam Creek'],
    landmarks: ['The Wigwam Resort', 'Litchfield Park Recreation Center', 'Litchfield Elementary', 'La Loma Park', 'Historic Downtown'],
    majorRoads: ['Litchfield Road', 'Indian School Road', 'Camelback Road', 'Old Litchfield Road'],
    nearbyLocations: ['goodyear-az', 'avondale-az', 'glendale-az'],
    climateNotes: `Litchfield Park shares the West Valley's desert climate but benefits from extensive mature landscaping that provides shade and slightly moderates temperatures.`,
    localInfo: `Litchfield Park is a small, affluent community with a charming downtown and the historic Wigwam Resort. The city maintains strict development standards, preserving its character.`,
    serviceNotes: `Litchfield Park's discerning homeowners expect premium service. Our technicians are experienced with high-end systems including zoned systems and smart home integration.`,
    faqs: [
      { question: 'Do you service historic homes in Litchfield Park?', answer: 'Yes, we service historic Litchfield Park homes including properties with older ductwork or unique configurations.' },
      { question: 'Can you service high-end AC systems in Litchfield Park?', answer: 'Absolutely. We\'re experienced with premium brands and advanced systems including zoned HVAC and variable-speed equipment.' },
      { question: 'How much does AC service cost in Litchfield Park?', answer: 'Our rates are competitive regardless of location. AC service starts at $89 for diagnostics.' },
      { question: 'Do you service The Wigwam area of Litchfield Park?', answer: 'Yes, we service all of Litchfield Park including the historic district near The Wigwam.' },
      { question: 'Can you help with AC zoning in my Litchfield Park home?', answer: 'Yes, we install and service zoned HVAC systems that allow different temperatures in different areas.' },
    ],
    metaTitle: 'Litchfield Park AZ AC Service | Air Conditioning Champ',
    metaDescription: 'Premium AC repair and HVAC service in Litchfield Park, Arizona. Experienced with high-end systems and historic homes. Professional service. Call now!',
    keyTakeaways: ['Premium HVAC service for Litchfield Park\'s discerning homeowners', 'Experienced with high-end systems, zoning, and smart home integration', 'Respectful, professional service appropriate for this exclusive community'],
  },
  {
    slug: 'sun-city-az',
    city: 'Sun City',
    state: 'AZ',
    stateFullName: 'Arizona',
    zipCodes: ['85351', '85372', '85373'],
    population: 37000,
    neighborhoods: ['Sun City Phase 1', 'Sun City Phase 2', 'Sun City Grand', 'Sundial Recreation Center Area', 'Lakeview Recreation Center Area'],
    landmarks: ['Sun Bowl Amphitheater', 'Sundial Recreation Center', 'Sun City Country Club', 'Bell Recreation Center', 'Marinette Recreation Center'],
    majorRoads: ['Grand Avenue (US 60)', '103rd Avenue', '99th Avenue', 'Bell Road', 'Thunderbird Road'],
    nearbyLocations: ['sun-city-west-az', 'peoria-az', 'surprise-az'],
    climateNotes: `Sun City experiences extreme summer heat typical of the West Valley, with temperatures regularly exceeding 110°F. Many residents spend summers elsewhere, but those who stay depend heavily on reliable cooling.`,
    localInfo: `Sun City is America's first active adult retirement community, established in 1960. The community offers residents 55+ a lifestyle centered on recreation. Many homes date from the 1960s-1980s and may have older HVAC systems.`,
    serviceNotes: `Sun City requires technicians who understand both older HVAC systems and the needs of retired homeowners. We provide patient, respectful service with clear explanations.`,
    faqs: [
      { question: 'Do you service older AC units in Sun City?', answer: 'Yes, we service AC systems of all ages in Sun City. Many homes have older units that still function well with proper maintenance.' },
      { question: 'Can you help with Sun City HOA requirements?', answer: 'Yes, we\'re familiar with Sun City\'s community guidelines regarding exterior HVAC equipment.' },
      { question: 'Do you offer senior discounts in Sun City?', answer: 'Yes, we offer senior discounts for Sun City residents. Ask about our senior pricing when you schedule service.' },
      { question: 'How do I prepare my Sun City home AC for winter?', answer: 'For snowbird homeowners, we offer winterization services to protect your AC while you\'re away.' },
      { question: 'Is it worth replacing my old Sun City AC?', answer: 'It depends on the system\'s condition and your plans. We\'ll provide an honest assessment of repair vs. replacement costs.' },
    ],
    metaTitle: 'Sun City AZ AC Repair & Service | Air Conditioning Champ',
    metaDescription: 'Trusted AC repair and HVAC service in Sun City, Arizona. Senior-friendly service, experience with older systems, HOA compliant solutions. Call today!',
    keyTakeaways: ['Senior-friendly service with patient, clear communication', 'Experienced with older HVAC systems common in Sun City homes', 'Familiar with Sun City HOA requirements for exterior equipment'],
  },
  {
    slug: 'sun-city-west-az',
    city: 'Sun City West',
    state: 'AZ',
    stateFullName: 'Arizona',
    zipCodes: ['85375', '85376'],
    population: 26000,
    neighborhoods: ['Sun City West North', 'Sun City West South', 'Corte Bella', 'R.H. Johnson Recreation Center Area', 'Beardsley Recreation Center Area'],
    landmarks: ['R.H. Johnson Recreation Center', 'Beardsley Park', 'Lizard Acres Trail', 'Sun City West Golf Courses', 'Stardust Theatre'],
    majorRoads: ['Grand Avenue (US 60)', 'R.H. Johnson Boulevard', 'Meeker Boulevard', 'Camino Del Sol', '128th Avenue'],
    nearbyLocations: ['sun-city-az', 'surprise-az', 'peoria-az'],
    climateNotes: `Sun City West sits at a slightly higher elevation than Sun City, providing marginally cooler summer nights. However, daytime temperatures still regularly exceed 110°F.`,
    localInfo: `Sun City West is a newer active adult community (1978+) adjacent to Sun City, offering similar amenities with more modern homes. Properties generally have newer HVAC systems than Sun City.`,
    serviceNotes: `Sun City West homes typically have HVAC systems from the 1980s-2000s. Our technicians provide the same senior-friendly service as in Sun City.`,
    faqs: [
      { question: 'How is Sun City West AC service different from Sun City?', answer: 'Sun City West homes are generally newer with more modern HVAC systems. However, many are now reaching the age where maintenance or replacement becomes necessary.' },
      { question: 'Do you offer maintenance plans for Sun City West?', answer: 'Yes, we offer maintenance plans ideal for Sun City West residents, including those who winter elsewhere.' },
      { question: 'Can you upgrade my Sun City West AC to be more efficient?', answer: 'Absolutely. Many Sun City West homes can benefit from upgrading to modern high-efficiency systems.' },
      { question: 'What brands are common in Sun City West?', answer: 'Sun City West homes commonly have Carrier, Lennox, Trane, and Goodman systems from original construction.' },
      { question: 'Do you comply with Sun City West REC requirements?', answer: 'Yes, we\'re familiar with the Recreation Centers of Sun City West guidelines and ensure all work complies.' },
    ],
    metaTitle: 'Sun City West AZ AC Repair & Service | Air Conditioning Champ',
    metaDescription: 'Professional AC repair and HVAC service in Sun City West, Arizona. Senior-friendly, experienced with 80s-90s era systems. Serving all SCW areas. Call now!',
    keyTakeaways: ['Experienced with 1980s-2000s era HVAC systems common in Sun City West', 'Senior-friendly service with clear communication and fair pricing', 'Maintenance plans available including options for seasonal residents'],
  },
  {
    slug: 'cave-creek-az',
    city: 'Cave Creek',
    state: 'AZ',
    stateFullName: 'Arizona',
    zipCodes: ['85327', '85331'],
    population: 5000,
    neighborhoods: ['Cave Creek Town Center', 'Rancho Mañana', 'Tatum Ranch', 'Lone Mountain', 'Black Mountain'],
    landmarks: ['Cave Creek Regional Park', 'Spur Cross Ranch Conservation Area', 'Frontier Town', 'Cave Creek Trail', 'Black Mountain'],
    majorRoads: ['Cave Creek Road', 'Carefree Highway', 'Scottsdale Road', 'Pima Road', 'Dynamite Boulevard'],
    nearbyLocations: ['surprise-az', 'peoria-az', 'glendale-az'],
    climateNotes: `Cave Creek sits at a higher elevation in the Sonoran Desert foothills, experiencing slightly cooler temperatures than the valley floor. However, summer highs still regularly exceed 105°F, and the desert location means intense sun exposure.`,
    localInfo: `Cave Creek is a charming Western-themed town known for its Old West atmosphere, art galleries, and desert landscape. Many homes are custom-built on larger lots with unique HVAC requirements due to the terrain and architecture.`,
    serviceNotes: `Cave Creek's custom homes and rural setting present unique HVAC challenges. We service all Cave Creek properties from town center to the surrounding desert communities.`,
    faqs: [
      { question: 'Do you service Cave Creek, AZ?', answer: 'Yes, we provide full AC repair and HVAC services throughout Cave Creek, including the surrounding desert communities and custom home properties.' },
      { question: 'How quickly can you reach Cave Creek for AC emergencies?', answer: 'We typically respond to Cave Creek AC emergencies within 1-2 hours. Despite the distance, we prioritize emergency calls.' },
      { question: 'Can you work on custom home HVAC systems in Cave Creek?', answer: 'Absolutely. Many Cave Creek homes have custom or oversized HVAC systems. Our technicians are experienced with complex installations.' },
      { question: 'How much does AC repair cost in Cave Creek?', answer: 'AC repair in Cave Creek typically costs $89-$500 depending on the issue. We provide upfront pricing before any work begins.' },
      { question: 'Do Cave Creek homes need different AC maintenance?', answer: 'Cave Creek homes often have more dust exposure and unique configurations. We recommend more frequent filter changes and annual tune-ups.' },
    ],
    metaTitle: 'Cave Creek AZ AC Repair & Service | Air Conditioning Champ',
    metaDescription: 'Professional AC repair and HVAC services in Cave Creek, Arizona. Experienced with custom homes and desert properties. 24/7 emergency service. Call now!',
    keyTakeaways: ['Full HVAC service coverage throughout Cave Creek and surrounding desert communities', 'Experienced with custom homes and unique desert property configurations', '24/7 emergency AC repair with responsive service to Cave Creek'],
  },
];

export function getLocationBySlug(slug: string): Location | undefined {
  return LOCATIONS.find((location) => location.slug === slug);
}

export function getAllLocationSlugs(): string[] {
  return LOCATIONS.map((location) => location.slug);
}

export function getNearbyLocations(currentSlug: string): Location[] {
  const current = getLocationBySlug(currentSlug);
  if (!current) return [];
  return current.nearbyLocations
    .map((slug) => getLocationBySlug(slug))
    .filter((location): location is Location => location !== undefined);
}

export function getCityList(): Array<{ slug: string; name: string; state: string }> {
  return LOCATIONS.map(({ slug, city, state }) => ({ slug, name: city, state }));
}
