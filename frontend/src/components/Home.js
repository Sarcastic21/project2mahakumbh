// import React from "react";
// import { Hero } from "../components/Hero";
// import { Introduction } from "../components/landing/Introduction";
// import { Countdown } from "../components/Countdown";
// import { EventsList } from "../components/events/EventsList";
// import { PackageCard } from "../components/PackageCard";
// import { AuthProvider } from "../context/AuthContext";

// const tour_package = [
//   {
//     id: "1",
//     title: "Mahakumbh 2025",
//     duration: "3 days and 2 nights",
//     contact_numbers: ["9316802278", "6351168010"],
//     itinerary: {
//       day_1: {
//         morning: {
//           pickup: "From Prayagraj Railway Station or Airport",
//           welcome: "Traditional greeting with refreshments",
//           check_in:
//             "Accommodation in a comfortable hotel or camp near the Kumbh Mela grounds",
//           breakfast: "Delicious Indian breakfast",
//         },
//         afternoon: [
//           {
//             activity: "Sangam Visit & Holy Bath",
//             description:
//               "Boat ride to the Sangam for a holy dip at the confluence of Ganga, Yamuna, and Saraswati",
//           },
//           {
//             activity: "Bade Hanuman Ji Mandir",
//             description: "Visit the famous reclining Hanuman temple",
//           },
//           {
//             activity: "Akshayavat Corridor",
//             description: "Explore the sacred indestructible banyan tree",
//           },
//           {
//             activity: "Patalpuri Mandir",
//             description: "Visit the ancient underground temple",
//           },
//           {
//             activity: "Saraswati Koop",
//             description:
//               "Explore the legendary well believed to be the origin of the Saraswati River",
//           },
//         ],
//         evening: [
//           {
//             activity: "Shiv Mandapam & Mandir",
//             description: "Visit the serene temple dedicated to Lord Shiva",
//           },
//           {
//             activity: "Ganga Aarti at Sangam",
//             description: "Witness the mesmerizing evening Ganga Aarti ceremony",
//           },
//           {
//             activity: "Parade Grounds Exploration",
//             description:
//               "Enjoy cultural activities and local shopping opportunities",
//           },
//         ],
//         night: {
//           dinner: "Traditional vegetarian dinner with local delicacies",
//           accommodation: "Return to accommodation in a luxurious tent",
//         },
//       },
//       // Add day_2 and day_3 itinerary details here...
//     },
//     _inclusions_: [
//       {
//         description:
//           "Transportation services (pickup/drop-off and internal transfers)",
//       },
//       { description: "Comfortable lodging with modern amenities" },
//       { description: "Meals (breakfast and dinner)" },
//       {
//         description:
//           "Activities (holy baths, boat rides, guided tours, hot air balloon rides)",
//       },
//       { description: "Expert guidance throughout the trip" },
//     ],
//     _exclusions_: [{ description: "Lunch and personal expenses" }],
//     _terms_conditions_: [
//       {
//         title: "Cancellation by Guests",
//         policy:
//           "100% refund for cancellations made at least 14 days before, 50% refund for 7-13 days before, no refund for less than 7 days.",
//       },
//       {
//         title: "Cancellation by Agency",
//         policy:
//           "Reschedule or partial refund in case of unforeseen circumstances.",
//       },
//     ],
//   },
//   {
//     id: "2",
//     title: "Mahakumbh 2025",
//     duration: "2 days and 1 night",
//     contact_numbers: ["9316802278", "6351168010"],
//     itinerary: {
//       day_1: {
//         morning: {
//           pickup: "From Prayagraj Railway Station or Airport",
//           welcome: "Traditional greeting with refreshments",
//           check_in:
//             "Accommodation in a comfortable hotel or camp near the Kumbh Mela grounds",
//           breakfast: "Traditional Indian breakfast",
//         },
//         afternoon: [
//           {
//             activity: "Sangam Visit & Holy Bath",
//             description:
//               "Boat ride to the Sangam for a holy dip at the confluence of Ganga, Yamuna, and Saraswati",
//           },
//           {
//             activity: "Bade Hanuman Ji Mandir",
//             description: "Visit the famous reclining Hanuman temple",
//           },
//           {
//             activity: "Akshayavat Corridor",
//             description:
//               "Explore the sacred indestructible banyan tree and learn its historical significance",
//           },
//           {
//             activity: "Patalpuri Mandir",
//             description:
//               "Visit the ancient underground temple, believed to be a spiritual gateway to the netherworld",
//           },
//         ],
//         evening: [
//           {
//             activity: "Shiv Mandapam & Mandir",
//             description: "Visit the serene temple dedicated to Lord Shiva",
//           },
//           {
//             activity: "Ganga Aarti at Sangam",
//             description: "Witness the mesmerizing evening Ganga Aarti ceremony",
//           },
//           {
//             activity: "Mela Grounds Exploration",
//             description:
//               "Enjoy cultural activities and local shopping opportunities",
//           },
//         ],
//         night: {
//           dinner: "Traditional vegetarian dinner with local delicacies",
//           return_accommodation: "Relax and prepare for the next day",
//         },
//       },
//       day_2: {
//         _morning_activities_: [
//           {
//             activity: "Holy Bath",
//             description: "Another rejuvenating bath at the Sangam",
//           },
//           {
//             activity: "Breakfast",
//             description: "Delicious Indian breakfast to start the day",
//           },
//           {
//             activity: "Explore Various Akhadas",
//             description:
//               "Discover unique traditions and spiritual practices of the Akhadas",
//           },
//           {
//             activity: "Nag Vasuki Mandir",
//             description:
//               "Explore the revered temple dedicated to the serpent king",
//           },
//         ],
//         _afternoon_adventure_: [
//           {
//             activity: "Hot Air Balloon Ride",
//             description: "(subject to weather conditions)",
//           },
//         ],
//         _evening_activities_: [
//           {
//             activity: "Mankameshwar Mandir",
//             description:
//               "Visit the sacred temple believed to fulfill devotees' wishes",
//           },
//           {
//             activity: "Boat Club",
//             description: "Enjoy a peaceful boat ride along the serene Ganga",
//           },
//         ],
//         _departure_: [
//           {
//             activity: "Drop-off",
//             description:
//               "At Prayagraj Railway Station or Airport with a complimentary souvenir",
//           },
//         ],
//       },
//     },
//     _inclusions_: [
//       {
//         description:
//           "Transportation services (pickup/drop-off and internal transfers)",
//       },
//       { description: "Comfortable lodging with modern amenities" },
//       { description: "Meals (breakfast and dinner)" },
//       {
//         description:
//           "Activities (holy baths, boat rides, guided tours, hot air balloon rides)",
//       },
//       { description: "Expert guidance throughout the trip" },
//     ],
//     _exclusions_: [{ description: "Lunch and personal expenses" }],
//     _terms_conditions_: [
//       {
//         title: "Cancellation by Guests",
//         policy:
//           "100% refund for cancellations made at least 14 days before, 50% refund for 7-13 days before, no refund for less than 7 days.",
//       },
//       {
//         title: "Cancellation by Agency",
//         policy:
//           "Reschedule or partial refund in case of unforeseen circumstances.",
//       },
//     ],
//   },
// ];

// export function HomePage() {
//   return (
//     <div>
//       <AuthProvider>
//         <Hero />
//       </AuthProvider>
//       <Introduction />
//       <Countdown />
//       <EventsList />

//       <section className="py-20 px-4">
//         <div className="container mx-auto">
//           <h2 className="text-4xl font-bold text-center mb-12">
//             Featured Packages
//           </h2>
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {tour_package.map((pkg) => (
//               <PackageCard key={pkg.id} pkg={pkg} />
//             ))}
//           </div>
//         </div>
//       </section>

//     </div>
//   );
// }
