function countChange(money, coins) {
    return getWays(0, money, coins);
}

function getWays(index, value, coins) {
    if (index === coins.length) {
        return 0;
    }
    if (value === 0) {
        return 1;
    }
    if (value < 0) {
        return 0;
    }
    let get1 = getWays(index + 1, value, coins);
    let get2 = getWays(index, value - coins[index], coins);
    const res = get1 + get2;
    return res;
}