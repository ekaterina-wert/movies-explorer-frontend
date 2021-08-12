export function timeConverter (num) {
    const h = Math.floor(num / 60);
    const m = Math.floor(num % 60);

    const hDisplay = h > 0 ? h + "ч " : "";
    const mDisplay = m > 0 ? m + "м" : "";

    return hDisplay + mDisplay; 
}
