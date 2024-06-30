
let vertical = [
    ['IG', 'IH', 'II', 'IJ', 'IK', 'IL', 'IM', 'IN', 'IO', 'IP', 'IQ', 'IR', 'IS', 'IT', 'IU', 'IV'],
    ['IF', 'IE', 'ID', 'IC', 'IB', 'IA', 'HZ', 'HY', 'HX', 'HW', 'HV', 'HU', 'HT', 'HS', 'HR', 'HQ'],
    ['HA', 'HB', 'HC', 'HD', 'HE', 'HF', 'HG', 'HH', 'HI', 'HJ', 'HK', 'HL', 'HM', 'HN', 'HO', 'HP'],
    ['GZ', 'GY', 'GX', 'GW', 'GV', 'GU', 'GT', 'GS', 'GR', 'GQ', 'GP', 'GO', 'GN', 'GM', 'GL', 'GK'],
    ['FU', 'FV', 'FW', 'FX', 'FY', 'FZ', 'GA', 'GB', 'GC', 'GD', 'GE', 'GF', 'GG', 'GH', 'GI', 'GJ'],
    ['FT', 'FS', 'FR', 'FQ', 'FP', 'FO', 'FN', 'FM', 'FL', 'FK', 'FJ', 'FI', 'FH', 'FG', 'FF', 'FE'],
    ['EO', 'EP', 'EQ', 'ER', 'ES', 'ET', 'EU', 'EV', 'EW', 'EX', 'EY', 'EZ', 'FA', 'FB', 'FC', 'FD'],
    ['EN', 'EM', 'EL', 'EK', 'EJ', 'EI', 'EH', 'EG', 'EF', 'EE', 'ED', 'EC', 'EB', 'EA', 'DZ', 'DY'],
    ['DI', 'DJ', 'DK', 'DL', 'DM', 'DN', 'DO', 'DP', 'DQ', 'DR', 'DS', 'DT', 'DU', 'DV', 'DW', 'DX'],
    ['DH', 'DG', 'DF', 'DE', 'DD', 'DC', 'DB', 'DA', 'CZ', 'CY', 'CX', 'CW', 'CV', 'CU', 'CT', 'CS'],
    ['CC', 'CD', 'CE', 'CF', 'CG', 'CH', 'CI', 'CJ', 'CK', 'CL', 'CM', 'CN', 'CO', 'CP', 'CQ', 'CR'],
    ['CB', 'CA', 'BZ', 'BY', 'BX', 'BW', 'BV', 'BU', 'BT', 'BS', 'BR', 'BQ', 'BP', 'BO', 'BN', 'BM'],
    ['AW', 'AX', 'AY', 'AZ', 'BA', 'BB', 'BC', 'BD', 'BE', 'BF', 'BG', 'BH', 'BI', 'BJ', 'BK', 'BL'],
    ['AV', 'AU', 'AT', 'AS', 'AR', 'AQ', 'AP', 'AN', 'AM', 'AL', 'AK', 'AJ', 'AH', 'AI', 'AH', 'AG'],
    ['Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'AA', 'AB', 'AC', 'AD', 'AE', 'AF'],
    ['P', 'O', 'N', 'M', 'L', 'K', 'J', 'I', 'H', 'G', 'F', 'E', 'D', 'C', 'B', 'A']
]

const calculateTseventeen = (date) => {
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

export default calculateTseventeen;
