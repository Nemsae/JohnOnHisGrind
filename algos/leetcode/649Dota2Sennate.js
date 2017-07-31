/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function(senate) {
    // let direQ = [],
        // radiantQ = [];
    let votingRights = {};
    let direSize = 0,
        radiantSize = 0;
    let senateSize = senate.length,
        senateArr = senate.split('');

    for (let i = 0; i < senateSize; i++) {
        let senator = senate[i];
        if (senator === 'R') {
            // radiantQ.push(senator);
            radiantSize++;
        } else {
            // direQ.push(senator);
            direSize++;
        }
    }

    let victory = isVictory(direSize, radiantSize);

    while (victory === false) {
        for (let i = 0; i < senateSize; i++) {
            let senator = senateArr[i];
            // console.log(i, 'senator: ', senator)
            // console.log(i, 'senateArr: ', senateArr)
            if (victory) {
                // console.log(i, victory, ' won!');
                return victory;
            } else {
                if (senator === 'R') {
                    //  check if there are any after
                    let banIndex = senateArr.indexOf('D', i);
                    //  if not, check first one before
                    if (banIndex === -1) {
                        banIndex = senateArr.indexOf('D');
                    }
                    senateArr.splice(banIndex, 1);
                    // console.log(i, 'senateArr:R ', senateArr)
                    senateSize--;
                    direSize--;
                    if (banIndex < i) {
                        i--;
                    }
                } else if (senator === 'D') {
                    let banIndex = senateArr.indexOf('R', i);
                    if (banIndex === -1) {
                        banIndex = senateArr.indexOf('R');
                    }
                    senateArr.splice(banIndex, 1);
                    // console.log(i, 'senateArr:D ', senateArr)
                    senateSize--;
                    radiantSize--;
                    if (banIndex < i) {
                        i--;
                    }
                }
            }
            victory = isVictory(direSize, radiantSize);
        }
    }

    return victory;
};

var isVictory = (direSize, radiantSize) => {
    if (direSize === 0) return 'Radiant';
    if (radiantSize === 0) return 'Dire';
    return false;
}
