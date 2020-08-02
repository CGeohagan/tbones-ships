const shipData = [
    {
        name: 'Oseberg',
        description: 'Built in 2019 from Plank on Frame construction. The Oseberg ship (Norwegian: Osebergskipet) is a well-preserved Viking ship discovered in a large burial mound at the Oseberg farm near Tønsberg in Vestfold county, Norway.',
        images: ['/images/oseberg/image1.jpg', '/images/oseberg/image2.jpg', '/images/oseberg/image3.jpg', '/images/oseberg/image4.jpg'],
        location: 'Norway',
        coordinates: '59.3650° N, 10.3038° E'
    },
    {
        name: 'Riverboat',
        description: 'In the 19th century the riverboat was a main source for trade and travel on the Mississippi river. I decided to finish this model with clear lacquer in order to highlight the natural wood colors. The guardrails are brass.',
        images: ['/images/riverboat/image1.jpg', '/images/riverboat/image2.jpg', '/images/riverboat/image3.jpg', '/images/riverboat/image4.jpg'],
        location: 'Mississippi River',
        coordinates: '47.239722° N, 95.2075° W'
    },
    {
        name: 'Sea Witch',
        description: 'Model built in 1983. It was completely rerigged in 2018 to improve authenticity. A very fast ship which was used to transport tea from Canton, China and thus was referred to as a Tea Clipper. She was launched at Smith & Dimon in Manhattan on December 8, 1846, and wrecked on a reef 12 miles off Havana, 1856',
        images: ['/images/seawitch/image1.jpg', '/images/seawitch/image2.jpg', '/images/seawitch/image3.jpg', '/images/seawitch/image4.jpg'],
        location: 'Havana, Cuba',
        coordinates: '23.136° N, -82.358° W'
    },
    {
        name: 'Essex',
        description: 'The Essex was a whaling ship from Nantucket, Massachusetts famous for being rammed and sunk by a large whale in the southern Pacific Ocean. Stranded thousands of miles from the coast of South America, the crew was forced to use the remaining whaleboats to try to find land. The book "Moby Dick" by Herman Melville is based on their story.',
        images: ['/images/essex/image1.jpg', '/images/essex/image2.jpg', '/images/essex/image3.jpg'],
        location: 'West coast of South America',
        coordinates: '-0.667° S, -119° W'
    },
    {
        name: 'HMY Royal Caroline',
        description: 'The HMY Royal Caroline was a ship-rigged royal yacht which was ordered to replace the HMY Carolina as the principal British royal yacht in 1749. In 1761, the yacht conveyed Duchess Charlotte of Mecklenburg-Strelitz from Cuxhaven, Kiel to marry George III. It was renamed HMY Royal Charlotte in honor of the occasion.',
        images: ['/images/royalcaroline/image1.jpg', '/images/royalcaroline/image2.jpg', '/images/royalcaroline/image3.jpg'],
        location: 'River Thames, Deptford Dockyard, London England',
        coordinates: '51.4865° N, 0.0276° W'
    },
    {
        name: 'HMS Pandora',
        description: 'The HMS Pandora is plank on bulkhead construction, meaning the frame is built and then the hull planking is added separately. The Pandora was a Frigate and was smallish in size. She had an undistinguished career being the ship that was tasked by British Admiralty to go to the SouthSeas and find the missing HMS Bounty. She found some survivors and took them prisoner but unfortunately she sank on the Great Barrier Reef near Australia.',
        images: ['/images/pandora/image1.jpg', '/images/pandora/image2.jpg', '/images/pandora/image3.jpg'],
        location: 'Great Barrier Reef near Australia',
        coordinates: '-18.156° S, 147.485° E'
    },
    {
        name: 'USS Constitution',
        description: 'The USS Constitution was also known as Old Ironsides. This model was built in 2017. This model depicts sails being furled. The USS Constitution is famous for seabattles fought during the War of 1812. It is still on active duty in todays Navy.',
        images: ['/images/ussconstitution/image1.jpg', '/images/ussconstitution/image2.jpg', '/images/ussconstitution/image3.jpg'],
        location: 'Boston, MA',
        coordinates: '42.3601° N, -71.0589° W'
    },
    {
        name: 'Santa Maria',
        description: 'La Santa María was the largest of the three ships used by Christopher Columbus in his first voyage across the Atlantic Ocean in 1492. This model was built in 2016 while I was recuperating from knee surgery. ',
        images: ['/images/santamaria/image1.jpg', '/images/santamaria/image2.jpg', '/images/santamaria/image3.jpg'],
        location: 'Haiti (possibly)',
        coordinates: '18.9712° N, -72.2852° W'
    },
    {
        name: 'Rattlesnake',
        description: 'The Brig Rambler 1780 was a revolutionary war privateer.  Purchased by the Navy in 1813 commisioned the USS Rattlesnake she captured over 20 English ships during the War of 1812.  She was eventually captured by the Royal Navy and commissioned into Her Majesties Navy. This model was built in 2016 and painted the colors of the British Navy.',
        images: ['/images/rattlesnake/image1.jpg', '/images/rattlesnake/image2.jpg'],
        location: 'Halifax, Nova Scotia',
        coordinates: '44.6488° N, -63.5752° W'
    },
    {
        name: 'HMS Bounty',
        description: 'The Bounty famous for her mutiny was an armed transport tasked with the job of obtaining Breadfruit from the South Seas. This model was built in 2018. A replica of the Bounty was built for the movie. It sank in Hurricane Sandy.',
        images: ['/images/hmsbounty/image1.jpg', '/images/hmsbounty/image2.jpg'],
        location: 'Pitcairn Islands',
        coordinates: '24.3768° S, -128.3242° W'
    },
    {
        name: 'Charles W Morgan',
        description: 'The Charles W Morgan was a nineteenth century whaling ship.  She is preserved and can be toured at Mystic Seaport, Conn. This model was built in 1979.',
        images: ['/images/morgan/image1.jpg'],
        location: 'Mystic Seaport, Connecticut',
        coordinates: '41.3543° N, -71.9665° W'
    },
    {
        name: 'Gertrude Thebaud',
        description: 'American fishing and racing schooner built in 1930 at Essex, Mass. Competitor to the Canadian Bluenose.',
        images: ['/images/gertrude/image1.jpg'],
        location: 'La Guaira, Venezuela',
        coordinates: '10.6025° N, -66.9313° W'
    },
    {
        name: 'Black Pearl',
        description: 'Black Pearl based on the pirate ship in the movie "Pirates of the Caribbean". The original ship had black sails and hull. This is a true plank on bulkhead construction. This model was built by laying the keel, adding the framing and then forming and attaching the side planking. This is museum quality.',
        images: ['/images/blackpearl/image1.jpg', '/images/blackpearl/image2.jpg', '/images/blackpearl/image3.jpg'],
        location: 'Tortuga',
        coordinates: '18.9712° N, -72.2852° W'
    },
];

export default shipData;
