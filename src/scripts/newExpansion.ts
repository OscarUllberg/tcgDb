import findAllReprints from "./findReprints";
import sortCardsById from "./sortCardsById";
import sortCardsByName from "./sortCardsByName";

const newExpansion = async () => {
  // read new set
  const newExpansionData = await fetch("cardBySet/me2.json").then((res) =>
    res.json()
  );

  // read cardById
  const cardByIdData = await fetch("datastructureJsonFiles/cardById.json").then(
    (res) => res.json()
  );

  // read cardByName
  const cardByNameData = await fetch(
    "datastructureJsonFiles/cardByName.json"
  ).then((res) => res.json());

  // read reprintList
  const reprintListData = await fetch(
    "datastructureJsonFiles/reprintList.json"
  ).then((res) => res.json());

  // 1. handle newExpansion for cardById
  // Go through newExpansionData and add card.id as key
  // Then console log the new list
  const updatedCardById = sortCardsById(newExpansionData, cardByIdData);

  // 2. handle newExpansion for cardByName
  // For each card in newExpansionData check if card.name exists in cardByNameData
  // If it does, add card.id to the array
  // If not, create a new array with card.id
  sortCardsByName(updatedCardById, cardByNameData);

  // 3. handle newExpansion for reprintList
  findAllReprints(updatedCardById, reprintListData);

  console.log(
    "Remember to update oldFullCardDb with the new expansion! And update firebase."
  );
};

export default newExpansion;
