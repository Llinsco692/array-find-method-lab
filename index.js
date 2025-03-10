// code your solution here
function superbowlWin(records) {
    // Use the find() method to search for the first win (where result is "W")
    const winRecord = records.find(record => record.result === "W");
    
    // If a win is found, return the year; otherwise, return undefined
    return winRecord ? winRecord.year : undefined;
  }
  