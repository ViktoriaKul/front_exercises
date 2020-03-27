function getHighAmount(name, quantity, price) {
    if (name.length !== quantity.length || name.length !== price.length) { return 0 }
    let count = 0
    let quantityPrice = [];
    for (let index = 0; index < quantity.length; index++) {
        quantityPrice[index] = quantity[index] * price[index]
        count++
    }
    let result = {};
    for (let i = 0; i < name.length; i++) {
        result[name[i]] = quantityPrice[i];
    }
    var sorted = [];
    for (var item in result) {
        sorted.push([item, result[item]]);
    }
    sorted.sort(function (a, b) {
        return b[1] - a[1];
    });
    let nameResult = []
    for (let elements = 0; elements < sorted.length; elements++) {
        nameResult.push(sorted[elements][0]);

    }
    console.log(nameResult)
}