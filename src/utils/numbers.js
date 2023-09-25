export function numFormatter(num) {
    if (num > 999 && num < 1000000) {
        return (num / 1000).toFixed(1) + 'k';
    } else if (num > 1000000) {
        return (num / 1000000).toFixed(1) + 'm';
    } else if (num < 900) {
        return num;
    }
}

export function addZero(num) {
    return num < 10 ? '0' + num : num;
}