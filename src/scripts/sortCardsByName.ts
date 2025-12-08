type CardById = Record<string, { name: string }>;

const sortCardsByName = (
  updatedCardById: Record<string, any>,
  cardByNameData: any
) => {
  const nameToIds: Record<string, string[]> = {};
  const cardByIdTyped = updatedCardById as CardById;

  for (const cardId in cardByIdTyped) {
    const card = cardByIdTyped[cardId];
    const name = card.name
      .toLowerCase()
      .replace(/[\[\]#]/g, "")
      .trim();
    if (!name) continue;

    if (!nameToIds[name]) {
      nameToIds[name] = [];
    }
    nameToIds[name].push(cardId);
  }

  // Merge updatedCardById into cardByNameData
  for (const name in nameToIds) {
    if (!cardByNameData[name]) {
      cardByNameData[name] = [];
    }
    cardByNameData[name].push(...nameToIds[name]);
  }

  // Sort cardByNameData alphabetically
  const sortedCardByNameData = Object.keys(cardByNameData)
    .sort()
    .reduce((acc, key) => {
      acc[key] = cardByNameData[key];
      return acc;
    }, {} as Record<string, any>);

  Object.assign(cardByNameData, sortedCardByNameData);

  console.log("✅ 2. Update cardByName with this:", cardByNameData);
  console.log("----------------------------------------------------");
  return cardByNameData;
};

export default sortCardsByName;
