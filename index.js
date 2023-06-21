// code your solution here
function superbowlWin(records) {
    const winningRecord = records.find(record => record.result === "W");
    return winningRecord ? winningRecord.year : undefined;
  }
  
  function superBowl() {
    const records = [
      { year: "2017", result: "W" },
      { year: "2018", result: "undefined" },
      { year: "2019", result: "L" }
    ];
    return superbowlWin(records);
  }
  
  console.log(superBowl());