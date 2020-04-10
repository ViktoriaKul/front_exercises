function countItem(str) {

    let arr = [];
    for (let index = 0; index < str.length; index++) {
        let symbol = str[index]
        arr.push(symbol)
    }

    var res = {};
    for (var i = 0, j = arr.length; i < j; i++) {
        res[arr[i]] = (res[arr[i]] || 0) + 1;
    }

    let result = [];
    for (var item in res) {
        result.push([item, res[item]]);
    }
    console.log(result);
}