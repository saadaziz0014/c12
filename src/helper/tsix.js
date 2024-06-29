let vertical = [
  ["V", "U", "T", "S", "R", "Q", "P", "O", "N", "M"],
  ["C", "D", "E", "F", "G", "H", "I", "J", "K", "L"],
  ["B", "A", "Z", "Y", "X", "W", "V", "U", "T", "S"],
  ["I", "J", "K", "L", "M", "N", "O", "P", "Q", "R"],
  ["H", "G", "F", "E", "D", "C", "B", "A", "Z", "Y"],
  ["O", "P", "Q", "R", "S", "T", "U", "V", "W", "X"],
  ["N", "M", "L", "K", "J", "I", "H", "G", "F", "E"],
  ["D", "C", "B", "A", "Z", "Y", "X", "W", "V", "U"],
  ["K", "L", "M", "N", "O", "P", "Q", "R", "S", "T"],
  ["J", "I", "H", "G", "F", "E", "D", "C", "B", "A"],
];

const calculateTsix = (date) => {
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

export default calculateTsix;
