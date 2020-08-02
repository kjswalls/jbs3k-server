const { v4: uniqueId } = require("uuid");

const categories = [
  { id: 0, name: "All" },
  { id: 1, name: "Consumer goods" },
  { id: 2, name: "Altruism" },
  { id: 3, name: "Lifestyle" },
  { id: 4, name: "Conquest" },
  { id: 5, name: "???" },
];

const items = [
  {
    id: uniqueId(),
    title: "End world hunger",
    description:
      "Based on achieving a 5% hunger target by 2030, which I think means: hunger 95% eliminated in all countries. This calculation also includes the effects of climate change on food production.",
    image:
      "https://res.cloudinary.com/kjswalls/image/upload/c_scale,w_100/q_100,f_auto/v1589680449/jbs3k/Burger_gzueoh.svg",
    largeImage: null,
    price: 52_000_000_000,
    category: 2,
    source:
      "https://www.ifpri.org/blog/multibillion-dollar-question-how-much-will-it-cost-end-hunger-and-undernutrition",
  },
  {
    id: uniqueId(),
    title: "Sick mansion",
    description:
      "The most expensive home ever sold in California. Jeff B. bought this in Feb 2020.",
    image:
      "https://res.cloudinary.com/kjswalls/image/upload/c_scale,w_100/q_100,f_auto/v1589680450/jbs3k/Mansion_jnwfr3.svg",
    largeImage: null,
    price: 165_000_000,
    category: 3,
    source:
      "https://www.msn.com/en-us/money/realestate/jeff-bezos-reportedly-just-bought-the-most-expensive-home-ever-sold-in-california-%E2%80%94-after-spending-nearly-a-year-touring-mega-mansions/ar-BBZEc1X",
  },
  {
    id: uniqueId(),
    title: "M1 Abrams tank",
    description:
      "In 1999 these tanks cost $6.2m each, so the price here is adjusted for inflation. Boom boom!",
    image:
      "https://res.cloudinary.com/kjswalls/image/upload/c_scale,w_100/q_100,f_auto/v1591591287/jbs3k/tank_xsqgxq.svg",
    largeImage: null,
    price: 9_556_876,
    category: 4,
    source:
      "https://www.globalsecurity.org/military/library/budget/fy1999/dot-e/army/99m1a2.html",
  },
  {
    id: uniqueId(),
    title: "Nintendo Switch",
    description: "Itsa me, Mario!",
    image:
      "https://res.cloudinary.com/kjswalls/image/upload/c_scale,w_100/q_100,f_auto/v1591597452/jbs3k/switch_ygus3h.svg",
    largeImage: null,
    price: 299,
    category: 1,
    source: "https://www.nintendo.com/switch/buy-now/",
  },
  {
    id: uniqueId(),
    title: "Large pizza",
    description: "Pizza pizza!",
    image:
      "https://res.cloudinary.com/kjswalls/image/upload/c_scale,w_100/q_100,f_auto/v1592106962/jbs3k/pizza_1_vfbclk.svg",
    largeImage: null,
    price: 25.99,
    category: 1,
    source: "https://www.papajohns.com/order/menu#",
  },
  {
    id: uniqueId(),
    title: "College education",
    description: "Average total price for a 4-year degree in 2020, USA",
    image:
      "https://res.cloudinary.com/kjswalls/image/upload/c_scale,w_100/q_100,f_auto/v1592106834/jbs3k/graduation_ocbzdv.svg",
    largeImage: null,
    price: 122_000,
    category: 3,
    source: "https://educationdata.org/average-cost-of-college/",
  },
  {
    id: uniqueId(),
    title: "Free college in America",
    description:
      "According to 2016-2017 data from the Department of Education about the total cost of tuition and fees at all public colleges and universities in America.",
    image:
      "https://res.cloudinary.com/kjswalls/image/upload/c_scale,w_100/q_100,f_auto/v1592170694/jbs3k/caps3_kjejso.svg",
    largeImage: null,
    price: 79_000_000_000,
    category: 2,
    source:
      "https://nces.ed.gov/programs/digest/d18/tables/dt18_333.10.asp?current=yes",
  },
  {
    id: uniqueId(),
    title: "Trip to space",
    description:
      "The price for a trip to and 10-day stay on the ISS in 2020, courtesy of SpaceX. This is probably free for Jeff B. himself, since he owns his own spaceflight company (Blue Origin).",
    image:
      "https://res.cloudinary.com/kjswalls/image/upload/c_scale,w_100/q_100,f_auto/v1592170536/jbs3k/shuttle_nggq0e.svg",
    largeImage: null,
    price: 55_000_000,
    category: 3,
    source:
      "https://www.nytimes.com/2020/03/05/science/axiom-space-station.html",
  },
  {
    id: uniqueId(),
    title: "Private island",
    description: "🏝",
    image:
      "https://res.cloudinary.com/kjswalls/image/upload/c_scale,w_100/q_100,f_auto/v1592170297/jbs3k/island2_otw35k.svg",
    largeImage: null,
    price: 55_000_000,
    category: 3,
    source:
      "https://www.privateislandsonline.com/south-pacific/fiji/nananu-i-cake2unknown",
  },
  {
    id: uniqueId(),
    title: "Cryogenic preservation",
    description:
      'Have your body frozen when you die. "Cryonics is a technique intended to hopefully save lives and greatly extend lifespan. It involves cooling legally-dead people to liquid nitrogen temperature where physical decay essentially stops, in the hope that future scientific procedures will someday revive them and restore them to youth and good health."',
    image:
      "https://res.cloudinary.com/kjswalls/image/upload/c_scale,w_100/q_100,f_auto/v1592170128/jbs3k/cryo3_wj4kq1.svg",
    largeImage: null,
    price: 28_000,
    category: 5,
    source: "https://www.cryonics.org/about-us/faqs",
  },
  {
    id: uniqueId(),
    title: "Costa Rica",
    description:
      "Buy the entire country. Just based on Costa Rica's GDP in 2019.",
    image:
      "https://res.cloudinary.com/kjswalls/image/upload/c_scale,w_100/q_100,f_auto/v1592172977/jbs3k/costaRica_qqnrvy.svg",
    largeImage: null,
    price: 60_000_000_000,
    category: 4,
    source: "https://tradingeconomics.com/costa-rica/gdp",
  },
  {
    id: uniqueId(),
    title: "Russian military",
    description:
      "Own the Russian military for one year. This is the Russian Federation's military budget in 2019",
    image:
      "https://res.cloudinary.com/kjswalls/image/upload/c_scale,w_100/q_100,f_auto/v1594872464/jbs3k/russianMilitary_hknjiu.svg",
    largeImage: null,
    price: 65_100_000_000,
    category: 4,
    source:
      "https://www.sipri.org/sites/default/files/2020-04/fs_2020_04_milex_0_0.pdf",
  },
  {
    id: uniqueId(),
    title: "2020 Bugatti Chiron",
    description: "For the daily commute, of course",
    image:
      "https://res.cloudinary.com/kjswalls/image/upload/c_scale,w_100/q_100,f_auto/v1594872775/jbs3k/bugatti_bdh9gk.svg",
    largeImage: null,
    price: 2_990_000,
    category: 3,
    source:
      "https://www.caranddriver.com/bugatti/chiron#:~:text=The%20Chiron%20costs%20almost%20%243,as%20exotic%20as%20hypercars%20get.",
  },
  {
    id: uniqueId(),
    title: "4K VR Gaming PC",
    description: "2020 high end build",
    image:
      "https://res.cloudinary.com/kjswalls/image/upload/c_scale,w_100/q_100,f_auto/v1594873068/jbs3k/gamingPC_ltvcpx.svg",
    largeImage: null,
    price: 2000,
    category: 1,
    source:
      "https://www.amazon.com/gp/aws/cart/add.html?AssociateTag=thowisguy-20&ASIN.1=B086MG1C7C&Quantity.1=1&ASIN.2=B079K244KZ&Quantity.2=1&ASIN.3=B0876J8436&Quantity.3=1&ASIN.4=B07V5K4X78&Quantity.4=1&ASIN.5=B07TVFBN26&Quantity.5=1&ASIN.6=B078DPCY3T&Quantity.6=1&ASIN.8=B07JFVLT7G&Quantity.8=1&ASIN.9=B01MQU6CWU&Quantity.9=1",
  },
  {
    id: uniqueId(),
    title: "Prada",
    description: "The whole company",
    image:
      "https://res.cloudinary.com/kjswalls/image/upload/c_scale,w_100/q_100,f_auto/v1594875741/jbs3k/prada_gdblav.svg",
    largeImage: null,
    price: 11_400_000_000,
    category: 4,
    source: "https://www.forbes.com/companies/prada/#17bcef7843a6",
  },
  {
    id: uniqueId(),
    title: "End homelessness in America",
    description: "Estimated in 2012. This is probably too low now, but still",
    image:
      "https://res.cloudinary.com/kjswalls/image/upload/c_scale,w_100/q_100,f_auto/v1595102026/jbs3k/homelessness_cyhipw.svg",
    largeImage: null,
    price: 20_000_000_000,
    category: 2,
    source:
      "https://www.nytimes.com/2012/12/10/us/homeless-rates-steady-despite-recession-hud-says.html?_r=1&",
  },
  {
    id: uniqueId(),
    title: "McDonald's",
    description: "McDonald's Corporation's net worth as of 06/2020",
    image:
      "https://res.cloudinary.com/kjswalls/image/upload/c_scale,w_100/q_100,f_auto/v1595102315/jbs3k/mcdonalds_aygpip.svg",
    largeImage: null,
    price: 140_660_000_000,
    category: 4,
    source: "https://www.macrotrends.net/stocks/charts/MCD/mcdonalds/net-worth",
  },
  {
    id: uniqueId(),
    title: "Medicare for All",
    description:
      "Estimated cost by 2031 for Bernie Sanders' universal health care plan",
    image:
      "https://res.cloudinary.com/kjswalls/image/upload/c_scale,w_100/q_100,f_auto/v1595102496/jbs3k/healthcare_fsahgd.svg",
    largeImage: null,
    price: 33_000_000_000_000,
    category: 2,
    source:
      "https://www.washingtonpost.com/business/economy/does-bernie-sanderss-health-plan-cost-33-trillion--or-save-2-trillion/2018/07/31/d178b14e-9432-11e8-a679-b09212fb69c2_story.html",
  },
  {
    id: uniqueId(),
    title: "End Amazon deforestation",
    description:
      "Estimated cost to reduce deforestation in the Brazilian Amazon to nearly zero within 10 years, made in 2008",
    image:
      "https://res.cloudinary.com/kjswalls/image/upload/c_scale,w_100/q_100,f_auto/v1595102694/jbs3k/deforestation_stuizw.svg",
    largeImage: null,
    price: 6_000_000_000,
    category: 2,
    source:
      "https://news.mongabay.com/2008/01/how-much-would-it-cost-to-end-amazon-deforestation/",
  },
  {
    id: uniqueId(),
    title: "Pause climate change",
    description:
      "A soil restoration project that would give the world 20 years to fix global warming",
    image:
      "https://res.cloudinary.com/kjswalls/image/upload/c_scale,w_100/q_100,f_auto/v1595104113/jbs3k/soilRestoration_wtaly3.svg",
    largeImage: null,
    price: 300_000_000_000,
    category: 2,
    source:
      "https://www.bloomberg.com/news/articles/2019-10-23/how-to-halt-global-warming-for-300-billion",
  },
  {
    id: uniqueId(),
    title: "Remake every Star Wars movie",
    description:
      "Total combined production cost of every Star Wars movie ever made through 2019",
    image:
      "https://res.cloudinary.com/kjswalls/image/upload/c_scale,w_100/q_100,f_auto/v1595105120/jbs3k/starWars2_kqfnar.svg",
    largeImage: null,
    price: 1_441_500_000,
    category: 5,
    source:
      "https://www.statista.com/statistics/311356/star-wars-production-costs-box-office-revenue/",
  },
  {
    id: uniqueId(),
    title: "Castle in France",
    description: "🇫🇷🏰",
    image:
      "https://res.cloudinary.com/kjswalls/image/upload/c_scale,w_100/q_100,f_auto/v1595104581/jbs3k/castle_kghbh8.svg",
    largeImage: null,
    price: 2_138_526,
    category: 3,
    source:
      "https://www.my-french-house.com/property-in-france/chinon-chinon-indre-et-loire-loire-valley/chateau/63974",
  },
  {
    id: uniqueId(),
    title: "Imperial Bösendorfer",
    description: "The 'Rolls-Royce of pianos'",
    image:
      "https://res.cloudinary.com/kjswalls/image/upload/c_scale,w_100/q_100,f_auto/v1595104714/jbs3k/piano_xopofx.svg",
    largeImage: null,
    price: 560_000,
    category: 1,
    source:
      "https://en.wikipedia.org/wiki/Imperial_B%C3%B6sendorfer#:~:text=Pricing%20and%20availability,computer%20reproducing%20system%20is%20installed.",
  },
  {
    id: uniqueId(),
    title: "Ford F-150",
    description: "2020. Built tough, etc",
    image:
      "https://res.cloudinary.com/kjswalls/image/upload/c_scale,w_100/q_100,f_auto/v1595106115/jbs3k/fordTruck_xouqv3.svg",
    largeImage: null,
    price: 28_745,
    category: 1,
    source: "https://www.ford.com/trucks/f150/",
  },
  {
    id: uniqueId(),
    title: "Build Disney World",
    description:
      "In 2016, somebody on Quora estimated the cost of building Disney World in modern dollars. Here is that figure.",
    image:
      "https://res.cloudinary.com/kjswalls/image/upload/c_scale,w_100/q_100,f_auto/v1595106297/jbs3k/carousel_kbjx9g.svg",
    largeImage: null,
    price: 12_300_000_000,
    category: 5,
    source:
      "https://www.quora.com/How-much-did-it-cost-to-build-Walt-Disney-World",
  },
  {
    id: uniqueId(),
    title: "Ticket to Disney World",
    description: "🐭",
    image:
      "https://res.cloudinary.com/kjswalls/image/upload/c_scale,w_100/q_100,f_auto/v1595106411/jbs3k/tickets_edaspv.svg",
    largeImage: null,
    price: 169.34,
    category: 1,
    source:
      "https://www.mousesavers.com/regular-walt-disney-world-ticket-prices/",
  },
  {
    id: uniqueId(),
    title: "One bluefin tuna",
    description: "It's endangered, and someone bought it to make sushi",
    image:
      "https://res.cloudinary.com/kjswalls/image/upload/c_scale,w_100/q_100,f_auto/v1595297446/jbs3k/tuna_bccp3r.svg",
    largeImage: null,
    price: 3_100_000,
    category: 5,
    source:
      "https://www.reuters.com/article/us-tuna-auction/tuna-sells-for-record-3-million-in-auction-at-tokyos-new-fish-market-idUSKCN1OZ056",
  },
  {
    id: uniqueId(),
    title: "Parking spot in Manhattan",
    description:
      "In 2015 some Manhattan condo was built with 3 parking spots, sold for a million each",
    image:
      "https://res.cloudinary.com/kjswalls/image/upload/c_scale,w_100/q_100,f_auto/v1595298380/jbs3k/parkingSpot_azsq4o.svg",
    largeImage: null,
    price: 1_000_000,
    category: 5,
    source:
      "https://www.dnainfo.com/new-york/20150505/tribeca/motor-courts-valets-1m-spots-parking-as-ultimate-manhattan-amenity/",
  },
  {
    id: uniqueId(),
    title: "carinsurance.com",
    description: "The price of this domain in 2010",
    image:
      "https://res.cloudinary.com/kjswalls/image/upload/c_scale,w_100/q_100,f_auto/v1595299989/jbs3k/website_d4ynnj.svg",
    largeImage: null,
    price: 49_700_000,
    category: 5,
    source:
      "https://www.godaddy.com/garage/the-top-20-most-expensive-domain-names/",
  },
  {
    id: uniqueId(),
    title: "History Supreme yacht",
    description:
      "The price of the History Supreme, the most expensive boat ever. A monument to our arrogance",
    image:
      "https://res.cloudinary.com/kjswalls/image/upload/c_scale,w_100/q_100,f_auto/v1595300388/jbs3k/yacht_xncnz6.svg",
    largeImage: null,
    price: 4_800_000_000,
    category: 5,
    source:
      "https://www.luxhabitat.ae/the-journal/top-10-most-expensive-yachts-in-the-world/",
  },
  {
    id: uniqueId(),
    title: "Pineapple",
    description: "Delicious, nutritious",
    image:
      "https://res.cloudinary.com/kjswalls/image/upload/c_scale,w_100/q_100,f_auto/v1595301728/jbs3k/pineapple4_zwdyls.svg",
    largeImage: null,
    price: 1.98,
    category: 1,
    source: "https://www.walmart.com/ip/Pineapple/44391200",
  },
  {
    id: uniqueId(),
    title: "Personal butler",
    description: "Assuming a yearly salary of $100k, for 40 years",
    image:
      "https://res.cloudinary.com/kjswalls/image/upload/c_scale,w_100/q_100,f_auto/v1595301219/jbs3k/butler_ysiabp.svg",
    largeImage: null,
    price: 3_200_000,
    category: 3,
    source:
      "https://www.estateandmanor.com/house-management/hire-a-butler-guide/#:~:text=What%20does%20it%20cost%20to,across%20the%20industry%20is%2020%25.",
  },
  {
    id: uniqueId(),
    title: "The Matrix on DVD",
    description: "1️⃣",
    image:
      "https://res.cloudinary.com/kjswalls/image/upload/c_scale,w_100/q_100,f_auto/v1595302216/jbs3k/dvd_xwvyzi.svg",
    largeImage: null,
    price: 7.25,
    category: 1,
    source:
      "https://www.amazon.com/Matrix-Keanu-Reeves/dp/B00000K19E/ref=tmm_dvd_swatch_0?_encoding=UTF8&qid=&sr=",
  },
  {
    id: uniqueId(),
    title: "Save endangered species",
    description:
      "The cost of preserving endangered land animals for one year. Sea turtle = land animal",
    image:
      "https://res.cloudinary.com/kjswalls/image/upload/c_scale,w_100/q_100,f_auto/v1595302401/jbs3k/seaTurtle_bkogyk.svg",
    largeImage: null,
    price: 76_000_000_000,
    category: 2,
    source:
      "http://www.bbc.com/earth/story/20150715-why-save-an-endangered-species",
  },
  {
    id: uniqueId(),
    title: '16" MacBook Pro',
    description: "The BIG Yoshi",
    image:
      "https://res.cloudinary.com/kjswalls/image/upload/c_scale,w_100/q_100,f_auto/v1595302739/jbs3k/macbook_catm7c.svg",
    largeImage: null,
    price: 2_799,
    category: 1,
    source: "https://www.apple.com/shop/buy-mac/macbook-pro/16-inch",
  },
  {
    id: uniqueId(),
    title: "Peloton bike",
    description: "A super crazy exercise bike. Idk",
    image:
      "https://res.cloudinary.com/kjswalls/image/upload/c_scale,w_100/q_100,f_auto/v1595302962/jbs3k/peloton_ywnwts.svg",
    largeImage: null,
    price: 2_245,
    category: 1,
    source:
      "https://www.onepeloton.com/shop/bike#:~:text=*Get%20the%20Peloton%20Bike%20for,unlimited%20access%20to%20Peloton%20classes.",
  },
  {
    id: uniqueId(),
    title: "Millennium Falcon",
    description: "The fastest hunk of junk in the galaxy",
    image:
      "https://res.cloudinary.com/kjswalls/image/upload/c_scale,w_100/q_100,f_auto/v1595384096/jbs3k/mfalcon_wnbrus.svg",
    largeImage: null,
    price: 2_474_132_337,
    category: 5,
    source:
      "https://www.cinemablend.com/news/1587590/how-much-the-millennium-falcon-would-cost-in-real-life#:~:text=The%20folks%20over%20at%20Twizzle,1%2C988%2C348%2C881%20British%20pounds%2C%20or%20%242%2C474%2C132%2C337.",
  },
  {
    id: uniqueId(),
    title: "Maison Margiela jacket",
    description: "White windbreaker with a hood",
    image:
      "https://res.cloudinary.com/kjswalls/image/upload/c_scale,w_100/q_100,f_auto/v1595384382/jbs3k/jacket2_rdggf0.svg",
    largeImage: null,
    price: 1_580,
    category: 3,
    source:
      "https://www.maisonmargiela.com/us/maison-margiela/blazer_cod41947647ea.html",
  },
  {
    id: uniqueId(),
    title: "Pants from Target",
    description: "They've got a good selection",
    image:
      "https://res.cloudinary.com/kjswalls/image/upload/c_scale,w_100/q_100,f_auto/v1595384578/jbs3k/pants_ffbdmk.svg",
    largeImage: null,
    price: 29.99,
    category: 1,
    source:
      "https://www.target.com/p/women-39-s-high-rise-wide-leg-cropped-jeans-universal-thread-8482-cream-14/-/A-77430887?ref=tgt_adv_XS000000&AFID=google_pla_df&fndsrc=tgtao&CPNG=PLA_Women%2BShopping_Brand&adgroup=SC_Women&LID=700000001170770pgs&network=g&device=c&location=9032082&ds_rl=1241788&ds_rl=1246978&ds_rl=1248099&gclid=CjwKCAjw8pH3BRAXEiwA1pvMsZ5ZLYxB1GiOuzE11MTY8IdZfdFCPnu-bzU9nGlKzgYYMLA_9ZlIqBoCYdEQAvD_BwE&gclsrc=aw.ds",
  },
  {
    id: uniqueId(),
    title: "Jet ski",
    description: "It's impossible to be sad while riding a jet ski",
    image:
      "https://res.cloudinary.com/kjswalls/image/upload/c_scale,w_100/q_100,f_auto/v1595384703/jbs3k/jetski_f83zgk.svg",
    largeImage: null,
    price: 15_699,
    category: 3,
    source: "https://www.yamahawaverunners.com/fx-series/fx-svho/",
  },
  {
    id: uniqueId(),
    title: "Private jet",
    description: "For when you need to go places?",
    image:
      "https://res.cloudinary.com/kjswalls/image/upload/c_scale,w_100/q_100,f_auto/v1595384890/jbs3k/jet_u2ihrn.svg",
    largeImage: null,
    price: 6_799_999,
    category: 3,
    source:
      "https://www.controller.com/listings/aircraft/for-sale/190034797/2015-cessna-citation-cj4",
  },
  {
    id: uniqueId(),
    title: "Designer bed",
    description: "Why not?",
    image:
      "https://res.cloudinary.com/kjswalls/image/upload/c_scale,w_100/q_100,f_auto/v1595385002/jbs3k/bed_qxjbky.svg",
    largeImage: null,
    price: 175_000,
    category: 3,
    source:
      "https://www.thedailybeast.com/savoir-beds-royal-state-bed-just-perfect-if-you-have-dollar175000",
  },
  {
    id: uniqueId(),
    title: "Eliminate malaria",
    description:
      "The estimate is a range, from 90 - 120b. This eliminates malaria by 2040",
    image:
      "https://res.cloudinary.com/kjswalls/image/upload/c_scale,w_100/q_100,f_auto/v1595385171/jbs3k/malaria_f1x3sw.svg",
    largeImage: null,
    price: 105_000_000_000,
    category: 2,
    source:
      "https://www.cfr.org/backgrounder/can-malaria-be-eradicated#:~:text=Eradicating%20malaria%20by%202040%20would,and%20mortality%20by%2040%20percent.",
  },
  {
    id: uniqueId(),
    title: "Tomahawk missile",
    description: "In case you need to shoot far away",
    image:
      "https://res.cloudinary.com/kjswalls/image/upload/c_scale,w_100/q_100,f_auto/v1595385460/jbs3k/missile_qzeo1h.svg",
    largeImage: null,
    price: 1_500_000,
    category: 4,
    source: "https://fas.org/man/dod-101/sys/smart/bgm-109.htm",
  },
  {
    id: uniqueId(),
    title: "Aircraft carrier",
    description:
      "The price of the USS Gerald Ford, paid for by American taxpayers. But it could have been Jeff B.",
    image:
      "https://res.cloudinary.com/kjswalls/image/upload/c_scale,w_100/q_100,f_auto/v1595385613/jbs3k/aircraftCarrier_bk4b5l.svg",
    largeImage: null,
    price: 12_800_000_000,
    category: 4,
    source:
      "https://www.cnet.com/pictures/meet-the-navys-new-13-billion-aircraft-carrier/10/",
  },
];

module.exports = {
  items,
  categories,
};
