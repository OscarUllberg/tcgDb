const sortCardsById = (newExpansionData: any) => {
  const cardById: Record<string, any> = {};
  for (const cardKey in newExpansionData) {
    const cardElement = newExpansionData[cardKey];
    if (cardElement.number) {
      // change first part of key to ${cardElement.set.ptcgoCode} if set is added to each element
      const key = `PFL-${cardElement.number}`;
      cardById[key] = cardElement;
    }
  }
  console.log("✅ cardById:", cardById);
  console.log(`✅ Flattened ${Object.keys(cardById).length} cards`);
  return cardById;
};

export default sortCardsById;
