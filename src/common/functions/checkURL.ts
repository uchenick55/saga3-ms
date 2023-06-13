type checkURLType = (
    location: {
        hash: string,
        key:string,
        pathname: string,
        search: string,
        state: string
    }
) => string
//получаем название текущей страницы из URL
const checkURL: checkURLType = (location) => {
    const patch = location.pathname // путь из URL вида /profile
        .split( "" ) // разделить все на массив ['/', 'd', 'i', 'a', 'l', 'o', 'g', 's', '/', '2', '8', '8', '3', '1',]
    const tempPatch: Array<String> = [] // задать пустой массив
    for (let i: number = 1; i < patch.length; i++) { // начиная со второго элемента, первый элемент всегда '/'
        if (patch[i] === '/') {
            break // прервать цикл, если встречаем /
        }
        tempPatch.push( patch[i] ) // добавляем элементы в массив
    }
    return tempPatch.join( "" )// итоговый путь

}
export default checkURL