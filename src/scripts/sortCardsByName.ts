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
    // Initialize array if not present
    if (!nameToIds[name]) {
      nameToIds[name] = [];
    }
    // Push this ID
    nameToIds[name].push(cardId);
  }
  console.log("✅ nameToIds:", nameToIds);
  console.log(`✅ Found ${Object.keys(nameToIds).length} unique names`);
  return nameToIds;
};

export default sortCardsByName;
