let vertical = [
    ['IV', 'IU', 'IT', 'IS', 'IR', 'IQ', 'IP', 'IO', 'IN', 'IM', 'IL', 'IK', 'IJ', 'II', 'IH', 'IG'],
    ['IF', 'IE', 'ID', 'IC', 'IB', 'IA', 'HZ', 'HY', 'HX', 'HW', 'HV', 'HU', 'HT', 'HS', 'HR', 'HQ'],
    ['HP', 'HO', 'HN', 'HM', 'HL', 'HK', 'HJ', 'HI', 'HH', 'HG', 'HF', 'HE', 'HD', 'HC', 'HB', 'HA'],
    ['GZ', 'GY', 'GX', 'GW', 'GV', 'GU', 'GT', 'GS', 'GR', 'GQ', 'GP', 'GO', 'GN', 'GM', 'GL', 'GK'],
    ['GJ', 'GI', 'GH', 'GG', 'GF', 'GE', 'GD', 'GC', 'GB', 'GA', 'FZ', 'FY', 'FX', 'FW', 'FV', 'FU'],
    ['FT', 'FS', 'FR', 'FQ', 'FP', 'FO', 'FN', 'FM', 'FL', 'FK', 'FJ', 'FI', 'FH', 'FG', 'FF', 'FE'],
    ['FD', 'FC', 'FB', 'FA', 'EZ', 'EY', 'EX', 'EW', 'EV', 'EU', 'ET', 'ES', 'ER', 'EQ', 'EP', 'EO'],
    ['EN', 'EM', 'EL', 'EK', 'EJ', 'EI', 'EH', 'EG', 'EF', 'EE', 'ED', 'EC', 'EB', 'EA', 'DZ', 'DY'],
    ['DX', 'DW', 'DV', 'DU', 'DT', 'DS', 'DR', 'DQ', 'DP', 'DO', 'DN', 'DM', 'DL', 'DK', 'DJ', 'DI'],
    ['DH', 'DG', 'DF', 'DE', 'DD', 'DC', 'DB', 'DA', 'CZ', 'CY', 'CX', 'CW', 'CV', 'CU', 'CT', 'CS'],
    ['CR', 'CQ', 'CP', 'CO', 'CN', 'CM', 'CL', 'CK', 'CJ', 'CI', 'CH', 'CG', 'CF', 'CE', 'CD', 'CC'],
    ['CB', 'CA', 'BZ', 'BY', 'BX', 'BW', 'BV', 'BU', 'BT', 'BS', 'BR', 'BQ', 'BP', 'BO', 'BN', 'BM'],
    ['BL', 'BK', 'BJ', 'BI', 'BH', 'BG', 'BF', 'BE', 'BD', 'BC', 'BB', 'BA', 'AZ', 'AY', 'AX', 'AW'],
    ['AV', 'AU', 'AT', 'AS', 'AR', 'AQ', 'AP', 'AO', 'AN', 'AM', 'AL', 'AK', 'AJ', 'AI', 'AH', 'AG'],
    ['AF', 'AE', 'AD', 'AC', 'AB', 'AA', 'Z', 'Y', 'X', 'W', 'V', 'U', 'T', 'S', 'R', 'Q'],
    ['P', 'O', 'N', 'M', 'L', 'K', 'J', 'I', 'H', 'G', 'F', 'E', 'D', 'C', 'B', 'A']
]

const calculateTfifteen = (date) => {
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

export default calculateTfifteen;
