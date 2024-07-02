

let vertical = [
    ['XM', 'XL', 'XK', 'XJ', 'XI', 'XH', 'XG', 'XF', 'XE', 'XD', 'XC', 'XB', 'XA', 'XN', 'XO', 'XP', 'XQ', 'XR', 'XS', 'XT', 'XU', 'XV', 'XW', 'XX', 'XY', 'XZ'],
    ['WM', 'WL', 'WK', 'WJ', 'WI', 'WH', 'WG', 'WF', 'WE', 'WD', 'WC', 'WB', 'WA', 'WZ', 'WY', 'WX', 'WW', 'WV', 'WU', 'WT', 'WS', 'WR', 'WQ', 'WP', 'WO', 'WN'],
    ['VM', 'VL', 'VK', 'VJ', 'VI', 'VH', 'VG', 'VF', 'VE', 'VD', 'VC', 'VB', 'VA', 'VN', 'VO', 'VP', 'VQ', 'VR', 'VS', 'VT', 'VU', 'VV', 'VW', 'VX', 'VY', 'VZ'],
    ['UM', 'UL', 'UK', 'UJ', 'UI', 'UH', 'UG', 'UF', 'UE', 'UD', 'UC', 'UB', 'UA', 'UZ', 'UY', 'UX', 'UW', 'UV', 'UU', 'UT', 'US', 'UR', 'UQ', 'UP', 'UO', 'UN'],
    ['TM', 'TL', 'TK', 'TJ', 'TI', 'TH', 'TG', 'TF', 'TE', 'TD', 'TC', 'TB', 'TA', 'TN', 'TO', 'TP', 'TQ', 'TR', 'TS', 'TT', 'TU', 'TV', 'TW', 'TX', 'TY', 'TZ'],
    ['SM', 'SL', 'SK', 'SJ', 'SI', 'SH', 'SG', 'SF', 'SE', 'SD', 'SC', 'SB', 'SA', 'SZ', 'SY', 'SX', 'SW', 'SV', 'SU', 'ST', 'SS', 'SR', 'SQ', 'SP', 'SO', 'SN'],
    ['RM', 'RL', 'RK', 'RJ', 'RI', 'RH', 'RG', 'RF', 'RE', 'RD', 'RC', 'RB', 'RA', 'RN', 'RO', 'RP', 'RQ', 'RR', 'RS', 'RT', 'RU', 'RV', 'RW', 'RX', 'RY', 'RZ'],
    ['QM', 'QL', 'QK', 'QJ', 'QI', 'QH', 'QG', 'QF', 'QE', 'QD', 'QC', 'QB', 'QA', 'QZ', 'QY', 'QX', 'QW', 'QV', 'QU', 'QT', 'QS', 'QR', 'QQ', 'QP', 'QO', 'QN'],
    ['PM', 'PL', 'PK', 'PJ', 'PI', 'PH', 'PG', 'PF', 'PE', 'PD', 'PC', 'PB', 'PA', 'PN', 'PO', 'PP', 'PQ', 'PR', 'PS', 'PT', 'PU', 'PV', 'PW', 'PX', 'PY', 'PZ'],
    ['OM', 'OL', 'OK', 'OJ', 'OI', 'OH', 'OG', 'OF', 'OE', 'OD', 'OC', 'OB', 'OA', 'OZ', 'OY', 'OX', 'OW', 'OV', 'OU', 'OT', 'OS', 'OR', 'OQ', 'OP', 'OO', 'ON'],
    ['NM', 'NL', 'NK', 'NJ', 'NI', 'NH', 'NG', 'NF', 'NE', 'ND', 'NC', 'NB', 'NA', 'NN', 'NO', 'NP', 'NQ', 'NR', 'NS', 'NT', 'NU', 'NV', 'NW', 'NX', 'NY', 'NZ'],
    ['MM', 'ML', 'MK', 'MJ', 'MI', 'MH', 'MG', 'MF', 'ME', 'MD', 'MC', 'MB', 'MA', 'MZ', 'MY', 'MX', 'MW', 'MV', 'MU', 'MT', 'MS', 'MR', 'MQ', 'MP', 'MO', 'MN'],
    ['M', 'L', 'K', 'J', 'I', 'H', 'G', 'F', 'E', 'D', 'C', 'B', 'A', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
    ['Z', 'Y', 'X', 'W', 'V', 'U', 'T', 'S', 'R', 'Q', 'P', 'O', 'N', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M'],
    ['NA', 'OA', 'PA', 'QA', 'RA', 'SA', 'TA', 'UA', 'VA', 'WA', 'XA', 'YA', 'ZA', 'AA', 'AB', 'AC', 'AD', 'AE', 'AF', 'AG', 'AH', 'AI', 'AJ', 'AK', 'AL', 'AM'],
    ['BZ', 'BY', 'BX', 'BW', 'BV', 'BU', 'BT', 'BS', 'BR', 'BQ', 'BP', 'BO', 'BN', 'BA', 'BB', 'BC', 'BD', 'BE', 'BF', 'BG', 'BH', 'BI', 'BJ', 'BK', 'BL', 'BM'],
    ['CN', 'CO', 'CP', 'CQ', 'CR', 'CS', 'CT', 'CU', 'CV', 'CW', 'CX', 'CY', 'CZ', 'CA', 'CB', 'CC', 'CD', 'CE', 'CF', 'CG', 'CH', 'CI', 'CJ', 'CK', 'CL', 'CM'],
    ['DZ', 'DY', 'DX', 'DW', 'DV', 'DU', 'DT', 'DS', 'DR', 'DQ', 'DP', 'DO', 'DN', 'DA', 'DB', 'DC', 'DD', 'DE', 'DF', 'DG', 'DH', 'DI', 'DJ', 'DK', 'DL', 'DM'],
    ['EN', 'EO', 'EP', 'EQ', 'ER', 'ES', 'ET', 'EU', 'EV', 'EW', 'EX', 'EY', 'EZ', 'EA', 'EB', 'EC', 'ED', 'EE', 'EF', 'EG', 'EH', 'EI', 'EJ', 'EK', 'EL', 'EM'],
    ['FZ', 'FY', 'FX', 'FW', 'FV', 'FU', 'FT', 'FS', 'FR', 'FQ', 'FP', 'FO', 'FN', 'FA', 'FB', 'FC', 'FD', 'FE', 'FF', 'FG', 'FH', 'FI', 'FJ', 'FK', 'FL', 'FM'],
    ['GN', 'GO', 'GP', 'GQ', 'GR', 'GS', 'GT', 'GU', 'GV', 'GW', 'GX', 'GY', 'GZ', 'GA', 'GB', 'GC', 'GD', 'GE', 'GF', 'GG', 'GH', 'GI', 'GJ', 'GK', 'GL', 'GM'],
    ['HZ', 'HY', 'HX', 'HW', 'HV', 'HU', 'HT', 'HS', 'HR', 'HQ', 'HP', 'HO', 'HN', 'HA', 'HB', 'HC', 'HD', 'HE', 'HF', 'HG', 'HH', 'HI', 'HJ', 'HK', 'HL', 'HM'],
    ['IN', 'IO', 'IP', 'IQ', 'IR', 'IS', 'IT', 'IU', 'IV', 'IW', 'IX', 'IY', 'IZ', 'IA', 'IB', 'IC', 'ID', 'IE', 'IF', 'IG', 'IH', 'II', 'IJ', 'IK', 'IL', 'IM'],
    ['JZ', 'JY', 'JX', 'JW', 'JV', 'JU', 'JT', 'JS', 'JR', 'JQ', 'JP', 'JO', 'JN', 'JA', 'JB', 'JC', 'JD', 'JE', 'JF', 'JG', 'JH', 'JI', 'JJ', 'JK', 'JL', 'JM'],
    ['KN', 'KO', 'KP', 'KQ', 'KR', 'KS', 'KT', 'KU', 'KV', 'KW', 'KX', 'KY', 'KZ', 'KA', 'KB', 'KC', 'KD', 'KE', 'KF', 'KG', 'KH', 'KI', 'KJ', 'KK', 'KL', 'KM'],
    ['LZ', 'LY', 'LX', 'LW', 'LV', 'LU', 'LT', 'LS', 'LR', 'LQ', 'LP', 'LO', 'LN', 'LA', 'LB', 'LC', 'LD', 'LE', 'LF', 'LG', 'LH', 'LI', 'LJ', 'LK', 'LL', 'LM'],
]

const calculateTtwenty = (date) => {
    let dateArr = [];
    let formatedDate = new Date(date);
    let day = formatedDate.getDate();
    let month = formatedDate.getMonth() + 1;
    let year = formatedDate.getFullYear();
    if (day <= 25 && year <= 2025) {
        dateArr[2] = month;
        dateArr[3] = day;
        dateArr[0] = date[0].concat(date[1]);
        dateArr[1] = date[2].concat(date[3]);
    } else if (day > 25 && year <= 2025) {
        dateArr[0] = date[0].concat(date[1]);
        dateArr[1] = date[2].concat(date[3]);
        dateArr[2] = date[5];
        dateArr[3] = date[6];
        dateArr[4] = date[8];
        dateArr[5] = date[9];
    } else if (day <= 25 && year > 2025) {
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
        topRight = topRight.concat(vertical[25 - dateArr[i + 1]][dateArr[i]]);
    }
    for (let i = 0; i < dateArr.length; i += 2) {
        rightBottom = rightBottom.concat(
            vertical[25 - dateArr[i]][25 - dateArr[i + 1]]
        );
    }
    for (let i = 0; i < dateArr.length; i += 2) {
        bottomLeft = bottomLeft.concat(vertical[dateArr[i + 1]][25 - dateArr[i]]);
    }
    return {
        leftTop,
        topRight,
        rightBottom,
        bottomLeft,
    };
};

export default calculateTtwenty;
