/* Problem 1: Converting kilometer to meter*/
function kilometerToMeter(kilometer) {
    if (kilometer < 0) {
        return "Invaild Number! Kilometer can not be negative number "
    } else {
        var meter = 1000 * kilometer;
        return meter;
    }
}
var result = kilometerToMeter(5);
console.log(result)

/* Problem 2: Calculating the budget cost*/
function budgetCalculator(ghori, phone, laptop) {
    if (ghori < 0 || phone < 0 || laptop < 0) {
        var output = "Invaild Input! Quantity can not be negative number";
        return output;
    } else if (Number.isInteger(ghori) != true || Number.isInteger(phone) != true || Number.isInteger(laptop) != true) {
        var output = "Invaild Input! Quantity can not be float "
        return output;
    } else {
        var total = 50 * ghori + 100 * phone + 500 * laptop;
        return total;
    }
}
var result = budgetCalculator(5, 3, 1);
console.log(result);

/* Problem 3: Calculating the hotel cost based on days*/
function hotelCost(day) {
    var twentyDiscount = (100 - (100 * 0.2)); // 20% discount
    var fiftyDiscount = (100 - (100 * 0.5)); // 50% discount
    if (day < 0 || Number.isInteger(day) != true) {
        var output = "Invaild Integer!";
        return output;
    } else if (day >= 0 && day <= 10) {
        var output = day * 100;
        return output;
    } else if (day > 10 && day <= 20) {
        var output = ((10 * 100) + ((day - 10) * twentyDiscount));
        return output;
    } else {
        var output = ((10 * 100) + (10 * twentyDiscount) + ((day - 20) * fiftyDiscount))
        return output;
    }
}
var result = hotelCost(10);
console.log(result);

/* Problem 4: Find out the largest element from an array*/
function megaFriend(friendsName) {
    var initialArray = ""; //initializing an empty string
    var largestName;
    if (Array.isArray(friendsName) != true || friendsName.length === 0) {
        var output = "Invaild Array!"
        return output;
    } else {
        for (var i = 0; i < friendsName.length; i++) {
            var elementLength = friendsName[i].length;
            if (initialArray < elementLength) {
                initialArray = elementLength;
                largestName = friendsName[i];
            }
        }
    }
    return largestName;
}
var friendsName = ["Kalam", "Salam", "Alam", "Nalam", "jhalam", "MyNameIsKhan", "Balam", "Kamrul"];
console.log(megaFriend(friendsName));