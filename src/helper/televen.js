let vertical = [
    ['IG', 'IH', 'II', 'IJ', 'IK', 'IL', 'IM', 'IN', 'IO', 'IP', 'IQ', 'IR', 'IS', 'IT', 'IU', 'IV'],
    ['HQ', 'HR', 'HS', 'HT', 'HU', 'HV', 'HW', 'HX', 'HY', 'HZ', 'IA', 'IB', 'IC', 'ID', 'IE', 'IF'],
    ['HA', 'HB', 'HC', 'HD', 'HE', 'HF', 'HG', 'HH', 'HI', 'HJ', 'HK', 'HL', 'HM', 'HN', 'HO', 'HP'],
    ['GK', 'GL', 'GM', 'GN', 'GO', 'GP', 'GQ', 'GR', 'GS', 'GT', 'GU', 'GV', 'GW', 'GX', 'GY', 'GZ'],
    ['FU', 'FV', 'FW', 'FX', 'FY', 'FZ', 'GA', 'GB', 'GC', 'GD', 'GE', 'GF', 'GG', 'GH', 'GI', 'GJ'],
    ['FE', 'FF', 'FG', 'FH', 'FI', 'FJ', 'FK', 'FL', 'FM', 'FN', 'FO', 'FP', 'FQ', 'FR', 'FS', 'FT'],
    ['EO', 'EP', 'EQ', 'ER', 'ES', 'ET', 'EU', 'EV', 'EW', 'EX', 'EY', 'EZ', 'FA', 'FB', 'FC', 'FD'],
    ['DY', 'DZ', 'EA', 'EB', 'EC', 'ED', 'EE', 'EF', 'EG', 'EH', 'EI', 'EJ', 'EK', 'EL', 'EM', 'EN'],
    ['DI', 'DJ', 'DK', 'DL', 'DM', 'DN', 'DO', 'DP', 'DQ', 'DR', 'DS', 'DT', 'DU', 'DV', 'DW', 'DX'],
    ['CS', 'CT', 'CU', 'CV', 'CW', 'CX', 'CY', 'CZ', 'DA', 'DB', 'DC', 'DD', 'DE', 'DF', 'DG', 'DH'],
    ['CC', 'CD', 'CE', 'CF', 'CG', 'CH', 'CI', 'CJ', 'CK', 'CL', 'CM', 'CN', 'CO', 'CP', 'CQ', 'CR'],
    ['BM', 'BN', 'BO', 'BP', 'BQ', 'BR', 'BS', 'BT', 'BU', 'BV', 'BW', 'BX', 'BY', 'BZ', 'CA', 'CB'],
    ['AW', 'AX', 'AY', 'AZ', 'BA', 'BB', 'BC', 'BD', 'BE', 'BF', 'BG', 'BH', 'BI', 'BJ', 'BK', 'BL'],
    ['AG', 'AH', 'AI', 'AJ', 'AK', 'AL', 'AM', 'AN', 'AO', 'AP', 'AQ', 'AR', 'AS', 'AT', 'AU', 'AV'],
    ['Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'AA', 'AB', 'AC', 'AD', 'AE', 'AF'],
    ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P'],
]

const calculateTeleven = (date) => {
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

export default calculateTeleven;
