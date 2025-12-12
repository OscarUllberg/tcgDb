import oldFullCardDb from "../../datastructureJsonFiles/oldFullCardDb.json";

type Card = {
  id: string;
  name: string;
  supertype: string;
  hp?: string;
  types?: string[];
  attacks?: { name: string; damage?: string; text?: string }[];
  abilities?: { name: string; text?: string }[];
  [key: string]: any;
};

const findAllReprints = (
  updatedCardById: Record<string, Card>,
  reprintListData: Record<string, string[]>
) => {
  // ---- 1. Build flat list of ALL old cards ----
  const oldCards: Card[] = [];

  for (const seriesKey in oldFullCardDb as Record<string, any>) {
    const series = (oldFullCardDb as Record<string, any>)[seriesKey];
    for (const expansionKey in series) {
      const expansion = series[expansionKey];
      for (const cardKey in expansion) {
        oldCards.push(expansion[cardKey]);
      }
    }
  }

  // ---- 2. Convert updated cards into array ----
  const updatedCards = Object.values(updatedCardById);

  // ---- 3. Combine all target comparison cards ----
  const comparePool = [...oldCards, ...updatedCards];

  // ---- 4. Helper function ----
  const isReprint = (a: Card, b: Card): boolean => {
    if (a.supertype === "Pokémon" && b.supertype === "Pokémon") {
      return (
        a.name === b.name &&
        a.hp === b.hp &&
        JSON.stringify(a.types) === JSON.stringify(b.types) &&
        JSON.stringify(a.attacks?.[0]) === JSON.stringify(b.attacks?.[0]) &&
        JSON.stringify(a.abilities?.[0]) === JSON.stringify(b.abilities?.[0])
      );
    } else {
      // Non-Pokemon → compare only name
      return a.name === b.name;
    }
  };

  // ---- 5. Build reprint map for only UPDATED cards ----
  for (const updatedCard of updatedCards) {
    const updatedId = updatedCard.id;
    if (!updatedId) continue;

    // ensure key exists
    if (!reprintListData[updatedId]) reprintListData[updatedId] = [];

    for (const otherCard of comparePool) {
      if (!otherCard.id) continue;
      if (otherCard.id === updatedId) continue;

      if (isReprint(updatedCard, otherCard)) {
        if (!reprintListData[updatedId].includes(otherCard.id)) {
          reprintListData[updatedId].push(otherCard.id);
          if (!reprintListData[otherCard.id])
            reprintListData[otherCard.id] = [];
          if (!reprintListData[otherCard.id].includes(updatedId)) {
            reprintListData[otherCard.id].push(updatedId);
          }
        }
      }
    }
  }

  // ---- 6. Clean up reprintListData by removing empty arrays and sort ----
  for (const cardId in reprintListData) {
    if (reprintListData[cardId].length === 0) {
      delete reprintListData[cardId];
    }
  }

  const sortedReprintListData = Object.keys(reprintListData)
    .sort()
    .reduce((acc, key) => {
      acc[key] = reprintListData[key].sort();
      return acc;
    }, {} as Record<string, string[]>);

  console.log("✅ 4. Update ReprintList with this:", sortedReprintListData);
  console.log("----------------------------------------------------");

  return sortedReprintListData;
};

export default findAllReprints;
