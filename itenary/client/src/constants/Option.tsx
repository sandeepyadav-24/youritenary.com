export const Budget = [
  {
    heading: "cheap",
    desc: "Stay concious of cost",
  },
  {
    heading: "MOderate",
    desc: "Keep cost on the average side",
  },
  {
    heading: "Luxury",
    desc: "Dont worry about cost",
  },
];

export const Adventure = [
  {
    heading: "Just me",
    desc: "A sole traveler with explorations",
    people: 1,
  },
  {
    heading: "A couple",
    desc: "Two traveler in tandem",
    people: 2,
  },
  {
    heading: "A family ",
    desc: "A group of  fun loving adv ",
    people: 4,
  },
  {
    heading: "Friends ",
    desc: "A bunch of thrill seeks",
    people: 6,
  },
];

export const AI_PROMPT =
  "Generate Travel Plan for Location:  {location}, for {totalDays} Days for {traveler} with a {Budget} budget, give me hotels options list with hotelName, hotel address, Price, hotel image url, geo Coordinates, rating , descriptions and suggest itinerary with placeName, Place Details , Place Image Url, Geo Coordinates, ticket Pricing, Time travel each of the location for {totalDays} days with each day plan with best time to visit in JSON format      ";
