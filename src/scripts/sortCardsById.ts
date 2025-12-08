const sortCardsById = (newExpansionData: any, cardByIdData: any) => {
  const cardById: Record<string, any> = {};
  for (const cardKey in newExpansionData) {
    const cardElement = newExpansionData[cardKey];
    if (cardElement.number) {
      // change first part of key to ${cardElement.set.ptcgoCode} if set is added to each element
      const key = `PFL-${cardElement.number}`;
      cardById[key] = cardElement;
    }
  }

  for (const cardKey in cardById) {
    cardByIdData[cardKey] = cardById[cardKey];
  }

  cardByIdData = Object.keys(cardByIdData)
    .sort()
    .reduce((sorted: Record<string, any>, key) => {
      sorted[key] = cardByIdData[key];
      return sorted;
    }, {});

  console.log("✅ 1. Update cardById with this:", cardByIdData);
  console.log(`✅ Flattened ${Object.keys(cardById).length} cards`);
  console.log("----------------------------------------------------");
  return cardById;
};

export default sortCardsById;
