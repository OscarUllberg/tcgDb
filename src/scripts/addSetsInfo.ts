const addSetsInfo = (
  newExpansionData: any,
  setsInfoData: any,
  expansionCode: string
) => {
  for (const serieskey in setsInfoData) {
    const series = setsInfoData[serieskey];
    for (const expansionKey in series) {
      const expansion = series[expansionKey];
      if (expansion.id === expansionCode) {
        var setInfo = expansion;
      }
    }
  }

  for (const cardKey in newExpansionData) {
    newExpansionData[cardKey].set = {
      releaseDate: setInfo.releaseDate,
      images: setInfo.images,
      ptcgoCode: setInfo.ptcgoCode,
      name: setInfo.name,
    };
  }

  console.log("✅ 1. Update setsInfo with this:", newExpansionData);
  console.log("----------------------------------------------------");
  return newExpansionData;
};

export default addSetsInfo;
