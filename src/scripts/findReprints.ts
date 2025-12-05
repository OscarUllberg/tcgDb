//import cardDb from "./cardDb.json";

// type Card = {
//   id: string;
//   name: string;
//   supertype: string;
//   hp?: string;
//   types?: string[];
//   attacks?: { name: string; damage?: string; text?: string }[];
//   abilities?: { name: string; text?: string }[];
//   [key: string]: any;
// };

// type CardDb = Record<string, Record<string, Record<string, Card>>>;

// const db = cardDb as CardDb;

const findAllReprints = () => {
  console.log("findAllReprints is currently disabled.");
  // const allCards: Card[] = [];

  // // Flatten the database to a single array of cards
  // for (const seriesKey in db) {
  //   const series = db[seriesKey];
  //   for (const expansionKey in series) {
  //     const expansion = series[expansionKey];
  //     for (const cardKey in expansion) {
  //       const card = expansion[cardKey];
  //       allCards.push(card);
  //     }
  //   }
  // }

  // const reprintMap: Record<string, string[]> = {};

  // // Helper to check if two cards are reprints
  // const isReprint = (a: Card, b: Card): boolean => {
  //   if (a.supertype === "Pokémon" && b.supertype === "Pokémon") {
  //     return (
  //       a.name === b.name &&
  //       a.hp === b.hp &&
  //       JSON.stringify(a.types) === JSON.stringify(b.types) &&
  //       JSON.stringify(a.attacks?.[0]) === JSON.stringify(b.attacks?.[0]) &&
  //       JSON.stringify(a.abilities?.[0]) === JSON.stringify(b.abilities?.[0])
  //     );
  //   } else {
  //     // For non-Pokémon, only compare names
  //     return a.name === b.name;
  //   }
  // };

  // // Compare each card with every other card
  // for (let i = 0; i < allCards.length; i++) {
  //   const cardA = allCards[i];
  //   for (let j = 0; j < allCards.length; j++) {
  //     if (i === j) continue;
  //     const cardB = allCards[j];

  //     if (isReprint(cardA, cardB)) {
  //       if (cardB.id) {
  //         // ✅ only add if cardB.id exists
  //         if (!reprintMap[cardA.id]) reprintMap[cardA.id] = [];
  //         if (!reprintMap[cardA.id].includes(cardB.id)) {
  //           reprintMap[cardA.id].push(cardB.id);
  //         }
  //       }
  //     }
  //   }
  // }

  // console.log("reprintMap", reprintMap);
};

export default findAllReprints;
