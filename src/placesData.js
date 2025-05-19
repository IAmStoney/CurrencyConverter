// placesData.js
const placesByCountry = {
  England: [
    {
      name: "Big Ben",
      link: "https://www.parliament.uk/bigben",
      image: "https://images.unsplash.com/photo-1508264165352-258db2ebd59b?auto=format&fit=crop&w=600&q=80",
      description: "Famous clock tower and iconic symbol of London."
    },
    {
      name: "Stonehenge",
      link: "https://www.english-heritage.org.uk/visit/places/stonehenge/",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Stonehenge2007_07_30.jpg/500px-Stonehenge2007_07_30.jpg",
      description: "Prehistoric monument of standing stones in Wiltshire."
    },
    {
      name: "Tower of London",
      link: "https://www.hrp.org.uk/tower-of-london/",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Tower_of_London_from_the_Shard_%288515883950%29.jpg/1280px-Tower_of_London_from_the_Shard_%288515883950%29.jpg",
      description: "Historic castle located on the north bank of the River Thames."
    },
  ],
  USA: [
    {
      name: "Statue of Liberty",
      link: "https://www.nps.gov/stli/index.htm",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Statue_of_Liberty_7.jpg/320px-Statue_of_Liberty_7.jpg",
      description: "Iconic symbol of freedom located in New York Harbor."
    },
    {
      name: "Grand Canyon",
      link: "https://www.nps.gov/grca/index.htm",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Canyon_River_Tree_%28165872763%29.jpeg/500px-Canyon_River_Tree_%28165872763%29.jpeg",
      description: "Famous vast canyon carved by the Colorado River."
    },
    {
      name: "Yellowstone National Park",
      link: "https://www.nps.gov/yell/index.htm",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Grand_Canyon_of_yellowstone.jpg/500px-Grand_Canyon_of_yellowstone.jpg",
      description: "America's first national park, known for geysers and wildlife."
    },
  ],
  Australia: [
    {
      name: "Sydney Opera House",
      link: "https://www.sydneyoperahouse.com/",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Sydney_Opera_House_Sails.jpg/320px-Sydney_Opera_House_Sails.jpg",
      description: "Famous performing arts center with unique architecture."
    },
    {
      name: "Great Barrier Reef",
      link: "https://www.australia.com/en/places/cairns-and-surrounds/guide-to-the-great-barrier-reef.html",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/ISS-45_StoryOfWater%2C_Great_Barrier_Reef%2C_Australia.jpg/500px-ISS-45_StoryOfWater%2C_Great_Barrier_Reef%2C_Australia.jpg",
      description: "World’s largest coral reef system, ideal for diving."
    },
    {
      name: "Uluru (Ayers Rock)",
      link: "https://parksaustralia.gov.au/uluru/",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/ULURU.jpg/1200px-ULURU.jpg",
      description: "Massive sandstone monolith in central Australia."
    },
  ],
  India: [
    {
      name: "Taj Mahal",
      link: "https://www.tajmahal.gov.in/",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Taj-Mahal.jpg/320px-Taj-Mahal.jpg",
      description: "Marble mausoleum and UNESCO World Heritage site."
    },
    {
      name: "Jaipur City Palace",
      link: "https://jaipurcitypalace.in/",
      image: "https://upload.wikimedia.org/wikipedia/commons/4/41/East_facade_Hawa_Mahal_Jaipur_from_ground_level_%28July_2022%29_-_img_01.jpg",
      description: "Historic royal residence with beautiful architecture."
    },
    {
      name: "Kerala Backwaters",
      link: "https://www.keralatourism.org/backwaters/",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/House_Boat_DSW.jpg/960px-House_Boat_DSW.jpg",
      description: "Network of lagoons and lakes offering serene boat rides."
    },
  ],
};

export default placesByCountry;

