import React from "react";

type RenderSortButtonType = {
    sortHeaderDirection: boolean | undefined,
    setSortHeaderDirection: (sortHeaderDirection: boolean | undefined) => void
}
const RenderSortButton:React.FC<RenderSortButtonType> = ({sortHeaderDirection, setSortHeaderDirection}) => {
    console.log("RenderSortButton")
    return <button onClick={() => {
        sortHeaderDirection === undefined // если направление сортировки не определено
            ? setSortHeaderDirection( true ) // начальная прямая сортировка массива постов
            : setSortHeaderDirection( !sortHeaderDirection ) // при последующих активациях реверс сортировки
    }}>Сортировка постов по заголовкам
    </button>
}
export default RenderSortButton