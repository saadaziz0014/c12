let vertical = [
  ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P'],
  ['FA', 'EA', 'DA', 'CA', 'BA', 'AA', 'Z', 'X', 'W', 'V', 'U', 'T', 'S', 'R', 'Q'],
  ['GA', 'HA', 'IA', 'JA', 'KA', 'LA', 'MA', 'NA', 'OA', 'PA', 'QA', 'RA', 'SA', 'TA', 'UA', 'VA'],
  ['LB', 'KB', 'JB', 'IB', 'HB', 'GB', 'FB', 'EB', 'DB', 'CB', 'BB', 'AB', 'ZA', 'XA', 'WA'],
  ['MB', 'NB', 'OB', 'PB', 'QB', 'RB', 'SB', 'TB', 'UB', 'VB', 'WB', 'XB', 'YB', 'ZB', 'AC', 'BC'],
  ['RC', 'QC', 'PC', 'OC', 'NC', 'MC', 'LC', 'KC', 'JC', 'IC', 'HC', 'GC', 'FC', 'EC', 'DC', 'CC'],
  ['SC', 'TC', 'UC', 'VC', 'WC', 'XC', 'YC', 'ZC', 'AD', 'BD', 'CD', 'DD', 'ED', 'FD', 'GD', 'HD'],
  ['XD', 'WD', 'VD', 'UD', 'TD', 'SD', 'RD', 'QD', 'PD', 'OD', 'ND', 'MD', 'LD', 'KD', 'JD', 'ID'],
  ['YD', 'ZD', 'AE', 'BE', 'CE', 'DE', 'EE', 'FE', 'GE', 'HE', 'IE', 'JE', 'KE', 'LE', 'ME', 'NE'],
  ['DF', 'CF', 'BF', 'AF', 'ZE', 'YE', 'XE', 'WE', 'VE', 'UE', 'TE', 'SE', 'RE', 'QE', 'PE', 'OE'],
  ['EF', 'FF', 'GF', 'HF', 'IF', 'JF', 'KF', 'LF', 'MF', 'NF', 'OF', 'PF', 'QF', 'RF', 'SF', 'TF'],
  ['JG', 'IG', 'HG', 'GG', 'FG', 'EG', 'DG', 'CG', 'BG', 'AG', 'ZF', 'YF', 'XF', 'WF', 'VF', 'UF'],
  ['KG', 'LG', 'MG', 'NG', 'OG', 'PG', 'QG', 'RG', 'SG', 'TG', 'UG', 'VG', 'WG', 'XG', 'YG', 'ZG'],
  ['PH', 'OH', 'NH', 'MH', 'LH', 'KH', 'JH', 'IH', 'HH', 'GH', 'FH', 'EH', 'DH', 'CH', 'BH', 'AH'],
  ['QH', 'RH', 'SH', 'TH', 'UH', 'VH', 'WH', 'XH', 'YH', 'ZH', 'AI', 'BI', 'CI', 'DI', 'EI', 'FI'],
  ['VI', 'UI', 'TI', 'SI', 'RI', 'QI', 'PI', 'OI', 'NI', 'MI', 'LI', 'KI', 'JI', 'II', 'HI', 'GI'],
];

const calculateTten = (date) => {
  let dateArr = [];
  let formatedDate = new Date(date);
  let day = formatedDate.getDate();
  let month = formatedDate.getMonth() + 1;
  if (day <= 15) {
    dateArr[4] = month;
    dateArr[5] = day;
    dateArr[0] = date[0];
    dateArr[1] = date[1];
    dateArr[2] = date[2];
    dateArr[3] = date[3];
  } else {
    dateArr[0] = date[0];
    dateArr[1] = date[1];
    dateArr[2] = date[2];
    dateArr[3] = date[3];
    dateArr[4] = date[5];
    dateArr[5] = date[6];
    dateArr[6] = date[8];
    dateArr[7] = date[9];
  }
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
    topRight = topRight.concat(vertical[15 - dateArr[i + 1]][dateArr[i]]);
  }
  for (let i = 0; i < dateArr.length; i += 2) {
    rightBottom = rightBottom.concat(
      vertical[15 - dateArr[i]][15 - dateArr[i + 1]]
    );
  }
  for (let i = 0; i < dateArr.length; i += 2) {
    bottomLeft = bottomLeft.concat(vertical[dateArr[i + 1]][15 - dateArr[i]]);
  }
  return {
    leftTop,
    topRight,
    rightBottom,
    bottomLeft,
  };
};

export default calculateTten;
