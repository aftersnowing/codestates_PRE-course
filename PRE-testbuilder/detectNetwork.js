var detectNetwork = function(cardNumber) {
    var c1 = cardNumber.substring(0, 1);
    var c2 = cardNumber.substring(0, 2);
    var c3 = cardNumber.substring(0, 3);
    var c4 = cardNumber.substring(0, 4);
    var c6 = cardNumber.substring(0, 6);
    var l = cardNumber.length;

    if ((c2 === "38" || c2 === "39") && l === 14) {
        return "Diner's Club";
    } else if ((c2 === "34" || c2 === "37") && l === 15) {
        return "American Express";
    } else if (
        c1 === "4" &&
        (l === 13 || l === 16 || l === 19) &&
        !(c2[1] === "9" && (l === 16 || l === 19))
    ) {
        return "Visa";
    } else if (
        (c2 === "51" ||
            c2 === "52" ||
            c2 === "53" ||
            c2 === "54" ||
            c2 === "55") &&
        l === 16
    ) {
        return "MasterCard";
    } else if (
        (c4 === "6011" ||
            c3 === "644" ||
            c3 === "645" ||
            c3 === "646" ||
            c3 === "647" ||
            c3 === "648" ||
            c3 === "649" ||
            c2 === "65") &&
        (l === 16 || l === 19)
    ) {
        return "Discover";
    } else if (
        (c4 === "5018" || c4 === "5020" || c4 === "5038" || c4 === "6304") &&
        (l === 12 ||
            l === 13 ||
            l === 14 ||
            l === 15 ||
            l === 16 ||
            l === 17 ||
            l === 18 ||
            l === 19)
    ) {
        return "Maestro";
    } else if (
        ((function() {
            for (let i = 622126; i < 622926; i++) {
                if (i.toString() === c6) {
                    return true;
                }
            }
        })() ||
            (function() {
                for (let i = 624; i < 627; i++) {
                    if (i.toString() === c3) {
                        return true;
                    }
                }
            })() ||
            (function() {
                for (let i = 6282; i < 6289; i++) {
                    if (i.toString() === c4) {
                        return true;
                    }
                }
            })()) &&
        (function() {
            for (let i = 16; i < 20; i++) {
                if (i === l) {
                    return true;
                }
            }
        })()
    ) {
        return "China UnionPay";
    } else if (
        ((function() {
            for (let el of [4903, 4905, 4911, 4936, 6333, 6759]) {
                if (el.toString() === c4) {
                    return true;
                }
            }
        })() ||
            (function() {
                for (let el of [564182, 633110]) {
                    if (el.toString() === c6) {
                        return true;
                    }
                }
            })()) &&
        (function() {
            for (let el of [16, 18, 19]) {
                if (el === l) {
                    return true;
                }
            }
        })()
    ) {
        return "Switch";
    }

    // hina UnionPay always has a prefix of 622126-622925, 624-626, or 6282-6288 and a length of 16-19.
    // Switch always has a prefix of 4903, 4905, 4911, 4936, 564182, 633110, 6333, or 6759 and a length of 16, 18, or 19.

    // Heads up! Switch and Visa seem to have some overlapping card numbers - in any apparent conflict, you should choose the network with the longer prefix.

    // When detectNetwork returns the correct network for every prefix and length combination for Diner's Club, American Express, Visa, MasterCard, Discover, Maestro, China UnionPay, and Switch you can invoke nextStep:
};
