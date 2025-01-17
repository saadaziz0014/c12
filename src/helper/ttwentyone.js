let vertical = [
    ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
    ['AA', 'BA', 'CA', 'DA', 'EA', 'FA', 'GA', 'HA', 'IA', 'JA', 'KA', 'LA', 'MA', 'NA', 'OA', 'PA', 'QA', 'RA', 'SA', 'TA', 'UA', 'VA', 'WA', 'XA', 'YA', 'ZA'],
    ['AB', 'BB', 'CB', 'DB', 'EB', 'FB', 'GB', 'HB', 'IB', 'JB', 'KB', 'LB', 'MB', 'NB', 'OB', 'PB', 'QB', 'RB', 'SB', 'TB', 'UB', 'VB', 'WB', 'XB', 'YB', 'ZB'],
    ['AC', 'BC', 'CC', 'DC', 'EC', 'FC', 'GC', 'HC', 'IC', 'JC', 'KC', 'LC', 'MC', 'NC', 'OC', 'PC', 'QC', 'RC', 'SC', 'TC', 'UC', 'VC', 'WC', 'XC', 'YC', 'ZC'],
    ['AD', 'BD', 'CD', 'DD', 'ED', 'FD', 'GD', 'HD', 'ID', 'JD', 'KD', 'LD', 'MD', 'ND', 'OD', 'PD', 'QD', 'RD', 'SD', 'TD', 'UD', 'VD', 'WD', 'XD', 'YD', 'ZD'],
    ['AE', 'BE', 'CE', 'DE', 'EE', 'FE', 'GE', 'HE', 'IE', 'JE', 'KE', 'LE', 'ME', 'NE', 'OE', 'PE', 'QE', 'RE', 'SE', 'TE', 'UE', 'VE', 'WE', 'XE', 'YE', 'ZE'],
    ['AF', 'BF', 'CF', 'DF', 'EF', 'FF', 'GF', 'HF', 'IF', 'JF', 'KF', 'LF', 'MF', 'NF', 'OF', 'PF', 'QF', 'RF', 'SF', 'TF', 'UF', 'VF', 'WF', 'XF', 'YF', 'ZF'],
    ['AG', 'BG', 'CG', 'DG', 'EG', 'FG', 'GG', 'HG', 'IG', 'JG', 'KG', 'LG', 'MG', 'NG', 'OG', 'PG', 'QG', 'RG', 'SG', 'TG', 'UG', 'VG', 'WG', 'XG', 'YG', 'ZG'],
    ['AH', 'BH', 'CH', 'DH', 'EH', 'FH', 'GH', 'HH', 'IH', 'JH', 'KH', 'LH', 'MH', 'NH', 'OH', 'PH', 'QH', 'RH', 'SH', 'TH', 'UH', 'VH', 'WH', 'XH', 'YH', 'ZH'],
    ['AI', 'BI', 'CI', 'DI', 'EI', 'FI', 'GI', 'HI', 'II', 'JI', 'KI', 'LI', 'MI', 'NI', 'OI', 'PI', 'QI', 'RI', 'SI', 'TI', 'UI', 'VI', 'WI', 'XI', 'YI', 'ZI'],
    ['AJ', 'BJ', 'CJ', 'DJ', 'EJ', 'FJ', 'GJ', 'HJ', 'IJ', 'JJ', 'KJ', 'LJ', 'MJ', 'NJ', 'OJ', 'PJ', 'QJ', 'RJ', 'SJ', 'TJ', 'UJ', 'VJ', 'WJ', 'XJ', 'YJ', 'ZJ'],
    ['AK', 'BK', 'CK', 'DK', 'EK', 'FK', 'GK', 'HK', 'IK', 'JK', 'KK', 'LK', 'MK', 'NK', 'OK', 'PK', 'QK', 'RK', 'SK', 'TK', 'UK', 'VK', 'WK', 'XK', 'YK', 'ZK'],
    ['AL', 'BL', 'CL', 'DL', 'EL', 'FL', 'GL', 'HL', 'IL', 'JL', 'KL', 'LL', 'ML', 'NL', 'OL', 'PL', 'QL', 'RL', 'SL', 'TL', 'UL', 'VL', 'WL', 'XL', 'YL', 'ZL'],
    ['AM', 'BM', 'CM', 'DM', 'EM', 'FM', 'GM', 'HM', 'IM', 'JM', 'KM', 'LM', 'MM', 'NM', 'OM', 'PM', 'QM', 'RM', 'SM', 'TM', 'UM', 'VM', 'WM', 'XM', 'YM', 'ZM'],
    ['AN', 'BN', 'CN', 'DN', 'EN', 'FN', 'GN', 'HN', 'IN', 'JN', 'KN', 'LN', 'MN', 'NN', 'ON', 'PN', 'QN', 'RN', 'SN', 'TN', 'UN', 'VN', 'WN', 'XN', 'YN', 'ZN'],
    ['AO', 'BO', 'CO', 'DO', 'EO', 'FO', 'GO', 'HO', 'IO', 'JO', 'KO', 'LO', 'MO', 'NO', 'OO', 'PO', 'QO', 'RO', 'SO', 'TO', 'UO', 'VO', 'WO', 'XO', 'YO', 'ZO'],
    ['AP', 'BP', 'CP', 'DP', 'EP', 'FP', 'GP', 'HP', 'IP', 'JP', 'KP', 'LP', 'MP', 'NP', 'OP', 'PP', 'QP', 'RP', 'SP', 'TP', 'UP', 'VP', 'WP', 'XP', 'YP', 'ZP'],
    ['AQ', 'BQ', 'CQ', 'DQ', 'EQ', 'FQ', 'GQ', 'HQ', 'IQ', 'JQ', 'KQ', 'LQ', 'MQ', 'NQ', 'OQ', 'PQ', 'QQ', 'RQ', 'SQ', 'TQ', 'UQ', 'VQ', 'WQ', 'XQ', 'YQ', 'ZQ'],
    ['AR', 'BR', 'CR', 'DR', 'ER', 'FR', 'GR', 'HR', 'IR', 'JR', 'KR', 'LR', 'MR', 'NR', 'OR', 'PR', 'QR', 'RR', 'SR', 'TR', 'UR', 'VR', 'WR', 'XR', 'YR', 'ZR'],
    ['AS', 'BS', 'CS', 'DS', 'ES', 'FS', 'GS', 'HS', 'IS', 'JS', 'KS', 'LS', 'MS', 'NS', 'OS', 'PS', 'QS', 'RS', 'SS', 'TS', 'US', 'VS', 'WS', 'XS', 'YS', 'ZS'],
    ['AT', 'BT', 'CT', 'DT', 'ET', 'FT', 'GT', 'HT', 'IT', 'JT', 'KT', 'LT', 'MT', 'NT', 'OT', 'PT', 'QT', 'RT', 'ST', 'TT', 'UT', 'VT', 'WT', 'XT', 'YT', 'ZT'],
    ['AU', 'BU', 'CU', 'DU', 'EU', 'FU', 'GU', 'HU', 'IU', 'JU', 'KU', 'LU', 'MU', 'NU', 'OU', 'PU', 'QU', 'RU', 'SU', 'TU', 'UU', 'VU', 'WU', 'XU', 'YU', 'ZU'],
    ['AV', 'BV', 'CV', 'DV', 'EV', 'FV', 'GV', 'HV', 'IV', 'JV', 'KV', 'LV', 'MV', 'NV', 'OV', 'PV', 'QV', 'RV', 'SV', 'TV', 'UV', 'VV', 'WV', 'XV', 'YV', 'ZV'],
    ['AW', 'BW', 'CW', 'DW', 'EW', 'FW', 'GW', 'HW', 'IW', 'JW', 'KW', 'LW', 'MW', 'NW', 'OW', 'PW', 'QW', 'RW', 'SW', 'TW', 'UW', 'VW', 'WW', 'XW', 'YW', 'ZW'],
    ['AX', 'BX', 'CX', 'DX', 'EX', 'FX', 'GX', 'HX', 'IX', 'JX', 'KX', 'LX', 'MX', 'NX', 'OX', 'PX', 'QX', 'RX', 'SX', 'TX', 'UX', 'VX', 'WX', 'XX', 'YX', 'ZX'],
    ['AY', 'BY', 'CY', 'DY', 'EY', 'FY', 'GY', 'HY', 'IY', 'JY', 'KY', 'LY', 'MY', 'NY', 'OY', 'PY', 'QY', 'RY', 'SY', 'TY', 'UY', 'VY', 'WY', 'XY', 'YY', 'ZY'],
]
const calculateTtwentyone = (date) => {
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

export default calculateTtwentyone;