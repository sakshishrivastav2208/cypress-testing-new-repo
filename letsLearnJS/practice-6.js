const wells = [
  {
    wellId: "W12345",
    name: "Well Alpha",
    location: {
      latitude: 36.7783,
      longitude: -119.4179,
    },
    status: "active",
    operator: "Operator XYZ",
    productionData: {
      dailyProduction: 150,
      unit: "barrels",
    },
  },
  {
    wellId: "W67890",
    name: "Well Beta",
    location: {
      latitude: 34.0522,
      longitude: -118.2437,
    },
    status: "active",
    operator: "Operator ABC",
    productionData: {
      dailyProduction: 200,
      unit: "barrels",
    },
  },
  {
    wellId: "W11121",
    name: "Well Gamma",
    location: {
      latitude: 40.7128,
      longitude: -74.006,
    },
    status: "active",
    operator: "Operator DEF",
    productionData: {
      dailyProduction: 180,
      unit: "barrels",
    },
  },
];
//function to sum the total daily production of wells
function totalproduction(wells) {
  let sum = 0;
  for (let i = 0; i < wells.length; i++) {
    sum += wells[i].productionData.dailyProduction;
  }
  return sum;
}

console.log(totalproduction(wells));

//return wellobject of id given as input in parameter
function wellObjectOfAssociatedId(wells, id) {
  for (let i = 0; i < wells.length; i++) {
    if (wells[i].wellId === id) {
      return wells[i];
    }
  }
  return null;
}
console.log(wellObjectOfAssociatedId(wells, "W67890"));
console.log(
  wellObjectOfAssociatedId(wells, "43ad6539-82e8-4ff1-abe0-364c5f9217eb")
);
//update the status of well
function updateWellStatus(wells, wellId, newStatus) {
  for (let i = 0; i < wells.length; i++) {
    if (wells[i].wellId === wellId) {
      wells[i].status = newStatus;
      return wells[i];
    }
  }
  return null;
}
console.log(updateWellStatus(wells, "W11121", "inactive"));
//find well with highest production
function findWellWithHighestProduction(wells) {
  let max = 0;
  for (let i = 0; i < wells.length; i++) {
    if (max < wells[i].productionData.dailyProduction) {
      max = wells[i].productionData.dailyProduction;
    }
  }
  return max;
}
console.log(findWellWithHighestProduction(wells));
