import sortCardsById from "./sortCardsById";
import sortCardsByName from "./sortCardsByName";

const newExpansion = async () => {
  // read new set
  const newExpansionData = await fetch("cardBySet/me2.json").then((res) =>
    res.json()
  );

  // read cardById
  const cardByIdData = await fetch("cardBySet/me2.json").then((res) =>
    res.json()
  );

  // read cardByName
  const cardByNameData = await fetch("cardBySet/me2.json").then((res) =>
    res.json()
  );

  // read reprintList
  const reprintListData = await fetch("cardBySet/me2.json").then((res) =>
    res.json()
  );

  // 1. handle newExpansion for cardById
  // Go through newExpansionData and add card.id as key
  // Then console log the new list
  const updatedCardById = sortCardsById(newExpansionData);

  // 2. handle newExpansion for cardByName
  // For each card in newExpansionData check if card.name exists in cardByNameData
  // If it does, add card.id to the array
  // If not, create a new array with card.id
  sortCardsByName(updatedCardById, cardByNameData);

  // 3. handle newExpansion for reprintList

  console.log("New expansion script executed");
};

export default newExpansion;
