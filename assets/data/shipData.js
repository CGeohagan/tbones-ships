const shipData = [
  {
    name: "Riverboat",
    description:
      "In the 19th century the riverboat was a main source for trade and travel on the Mississippi river. I decided to finish this model with clear lacquer in order to highlight the natural wood colors. The guardrails are brass.",
    images: [
      "/images/riverboat/image1.jpg",
      "/images/riverboat/image2.jpg",
      "/images/riverboat/image3.jpg",
      "/images/riverboat/image4.jpg"
    ],
    location: "Mississippi River",
    coordinates: "47.239722° N, 95.2075° W"
  },
  {
    name: "Sea Witch",
    description:
      "Model built in 1983. It was completely rerigged in 2018 to improve authenticity. A very fast ship which was used to transport tea from Canton, China and thus was referred to as a Tea Clipper. She was launched at Smith & Dimon in Manhattan on December 8, 1846, and wrecked on a reef 12 miles off Havana, 1856",
    images: [
      "/images/seawitch/image1.jpg",
      "/images/seawitch/image2.jpg",
      "/images/seawitch/image3.jpg",
      "/images/seawitch/image4.jpg"
    ],
    location: "Havana, Cuba",
    coordinates: "23.136° N, -82.358° W"
  },
  {
    name: "Essex",
    description:
      'The Essex was a whaling ship from Nantucket, Massachusetts famous for being rammed and sunk by a large whale in the southern Pacific Ocean. Stranded thousands of miles from the coast of South America, the crew was forced to use the remaining whaleboats to try to find land. The book "Moby Dick" by Herman Melville is based on their story.',
    images: [
      "/images/essex/image1.jpg",
      "/images/essex/image2.jpg",
      "/images/essex/image3.jpg"
    ],
    location: "West coast of South America",
    coordinates: "-0.667° S, -119° W"
  },
  {
    name: "HMY Royal Caroline",
    description:
      "The HMY Royal Caroline was a ship-rigged royal yacht which was ordered to replace the HMY Carolina as the principal British royal yacht in 1749. In 1761, the yacht conveyed Duchess Charlotte of Mecklenburg-Strelitz from Cuxhaven, Kiel to marry George III. It was renamed HMY Royal Charlotte in honor of the occasion.",
    images: [
      "/images/royalcaroline/image1.jpg",
      "/images/royalcaroline/image2.jpg",
      "/images/royalcaroline/image3.jpg"
    ],
    location: "River Thames, Deptford Dockyard, London England",
    coordinates: "51.4865° N, 0.0276° W"
  },
  {
    name: "HMS Pandora",
    description:
      "The HMS Pandora is plank on bulkhead construction, meaning the frame is built and then the hull planking is added separately. The Pandora was a Frigate and was smallish in size. She had an undistinguished career being the ship that was tasked by British Admiralty to go to the SouthSeas and find the missing HMS Bounty. She found some survivors and took them prisoner but unfortunately she sank on the Great Barrier Reef near Australia.",
    images: [
      "/images/pandora/image1.jpg",
      "/images/pandora/image2.jpg",
      "/images/pandora/image3.jpg"
    ],
    location: "Great Barrier Reef near Australia",
    coordinates: "-18.156° S, 147.485° E"
  },
  {
    name: "USS Constitution",
    description:
      "The USS Constitution was also known as Old Ironsides. This model was built in 2017. This model depicts sails being furled. The USS Constitution is famous for seabattles fought during the War of 1812. It is still on active duty in todays Navy.",
    images: [
      "/images/ussconstitution/image1.jpg",
      "/images/ussconstitution/image2.jpg",
      "/images/ussconstitution/image3.jpg"
    ],
    location: "Boston, MA",
    coordinates: "42.3601° N, -71.0589° W"
  },
  {
    name: "Roter Lowe",
    description:
      "The Galleon Roter Lowe (Red Lion) was built in the Netherlands and was bought by the Council of Konigsburg in 1601. It served as a scout ship.",
    images: [
      "/images/roterlowe/image1.jpg",
      "/images/roterlowe/image2.jpg",
      "/images/roterlowe/image3.jpg"
    ],
    location: "the Netherlands",
    coordinates: "52.1326° N, 5.2913° E"
  },
  {
    name: "Wasa 1628",
    description:
      "This ship had an interesting history.  She was very ornate and built by one of the leading ship builder's of the day.  The problem came when King Gustav II requested an extra gun deck to make her the most powerful ship at that time.  The ship was top heavy and on her first voyage a breeze hit the ship and she keeled over and sank in the harbor.  They recently raised the ship and it is currently a museum in Stockholm.",
    images: [
      "/images/wasa/image1.jpg",
      "/images/wasa/image2.jpg",
      "/images/wasa/image3.jpg"
    ],
    location: "Stockholm, Sweden",
    coordinates: "59.3293° N, 18.0686° E"
  },
  {
    name: "Frigate Berlin 1674",
    description:
      "Built in Zealand in 1674 and chartered to the Brandenburg fleet.  Remained a part of the Brandenburg fleet till 1688.",
    images: [
      "/images/frigate/image1.jpg",
      "/images/frigate/image2.jpg",
      "/images/frigate/image3.jpg"
    ],
    location: "New Zealand",
    coordinates: "40.9006° S, 174.8860° E"
  },
  {
    name: "HMS Bellona 1760",
    description:
      "British ship of the line.  This means she was strong enough to engage in battle against any size enemy ship.  She served in the American Revolutionary War and many engagements serving for 50 years till 1814.  This was an unusual length of service for a wooden ship.",
    images: [
      "/images/bellona/image1.jpg",
      "/images/bellona/image2.jpg",
      "/images/bellona/image3.jpg"
    ],
    location: "United Kingdom",
    coordinates: "52.3555° N, 1.1743° W"
  },
  {
    name: "Prins Willem 1650",
    description:
      "Dutch East India Company ship.  She had a crew of 276.  She served as a warship in 1652.  She served as a merchant ship until 1661 when she sank in a violent storm near Saint Brandon in the Indian ocean.",
    images: [
      "/images/prinswillem/image1.jpg",
      "/images/prinswillem/image2.jpg",
      "/images/prinswillem/image3.jpg"
    ],
    location: "Saint Brandon Island",
    coordinates: "16.5833S 59.6167E"
  },
  {
    name: "La Couronne 1636",
    description:
      "First major warship designed and built by France themselves by order of Cardinal Richelieu.",
    images: [
      "/images/lacouronne/image1.jpg",
      "/images/lacouronne/image2.jpg",
      "/images/lacouronne/image3.jpg"
    ],
    location: "France",
    coordinates: "46.2276° N, 2.2137° E"
  },
  {
    name: "Rattlesnake",
    description:
      "The Brig Rambler 1780 was a revolutionary war privateer.  Purchased by the Navy in 1813 commisioned the USS Rattlesnake she captured over 20 English ships during the War of 1812.  She was eventually captured by the Royal Navy and commissioned into Her Majesties Navy. This model was built in 2016 and painted the colors of the British Navy.",
    images: [
      "/images/rattlesnake/image1.jpg",
      "/images/rattlesnake/image2.jpg"
    ],
    location: "Halifax, Nova Scotia",
    coordinates: "44.6488° N, -63.5752° W"
  },
  {
    name: "HMS Bounty",
    description:
      "The Bounty famous for her mutiny was an armed transport tasked with the job of obtaining Breadfruit from the South Seas. This model was built in 2018. A replica of the Bounty was built for the movie. It sank in Hurricane Sandy.",
    images: ["/images/hmsbounty/image1.jpg", "/images/hmsbounty/image2.jpg"],
    location: "Pitcairn Islands",
    coordinates: "24.3768° S, -128.3242° W"
  },
  {
    name: "Charles W Morgan",
    description:
      "The Charles W Morgan was a nineteenth century whaling ship.  She is preserved and can be toured at Mystic Seaport, Conn. This model was built in 1979.",
    images: ["/images/morgan/image1.jpg"],
    location: "Mystic Seaport, Connecticut",
    coordinates: "41.3543° N, -71.9665° W"
  },
  {
    name: "Gertrude Thebaud",
    description:
      "American fishing and racing schooner built in 1930 at Essex, Mass. Competitor to the Canadian Bluenose.",
    images: ["/images/gertrude/image1.jpg"],
    location: "La Guaira, Venezuela",
    coordinates: "10.6025° N, -66.9313° W"
  },
  {
    name: "Black Pearl",
    description:
      'Black Pearl based on the pirate ship in the movie "Pirates of the Caribbean". The original ship had black sails and hull. This is a true plank on bulkhead construction. This model was built by laying the keel, adding the framing and then forming and attaching the side planking. This is museum quality.',
    images: [
      "/images/blackpearl/image1.jpg",
      "/images/blackpearl/image2.jpg",
      "/images/blackpearl/image3.jpg"
    ],
    location: "Tortuga",
    coordinates: "18.9712° N, -72.2852° W"
  }
];

export default shipData;
