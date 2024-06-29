let vertical = [
  ["J", "I", "H", "G", "F", "E", "D", "C", "B", "A"],
  ["T", "S", "R", "Q", "P", "O", "N", "M", "L", "K"],
  ["D", "C", "B", "A", "Z", "Y", "X", "W", "V", "U"],
  ["N", "M", "L", "K", "J", "I", "H", "G", "F", "E"],
  ["X", "W", "V", "U", "T", "S", "R", "Q", "P", "O"],
  ["H", "G", "F", "E", "D", "C", "B", "A", "Z", "Y"],
  ["R", "Q", "P", "O", "N", "M", "L", "K", "J", "I"],
  ["B", "A", "Z", "Y", "X", "W", "V", "U", "T", "S"],
  ["L", "K", "J", "I", "H", "G", "F", "E", "D", "C"],
  ["V", "U", "T", "S", "R", "Q", "P", "O", "N", "M"],
];

const calculateTone = (date) => {
  let dateArr = [];
  dateArr[0] = date[0];
  dateArr[1] = date[1];
  dateArr[2] = date[2];
  dateArr[3] = date[3];
  dateArr[4] = date[5];
  dateArr[5] = date[6];
  dateArr[6] = date[8];
  dateArr[7] = date[9];
  for (let i = 0; i < dateArr.length; i++) {
    dateArr[i] = parseInt(dateArr[i]);
  }

  let leftTop = [];
  let topRight = [];
  let rightBottom = [];
  let bottomLeft = [];
  for (let i = 0; i < dateArr.length; i += 2) {
    leftTop = leftTop.concat(vertical[dateArr[i]][dateArr[i + 1]]);
  }
  for (let i = 0; i < dateArr.length; i += 2) {
    topRight = topRight.concat(vertical[9 - dateArr[i + 1]][dateArr[i]]);
  }
  for (let i = 0; i < dateArr.length; i += 2) {
    rightBottom = rightBottom.concat(
      vertical[9 - dateArr[i]][9 - dateArr[i + 1]]
    );
  }
  for (let i = 0; i < dateArr.length; i += 2) {
    bottomLeft = bottomLeft.concat(vertical[dateArr[i + 1]][9 - dateArr[i]]);
  }
  return {
    leftTop,
    topRight,
    rightBottom,
    bottomLeft,
  };
};

export default calculateTone;
