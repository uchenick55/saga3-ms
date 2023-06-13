import React, {memo} from "react";
import sortAscending from "../../assets/svg/sort-ascending.svg"
import sortDescending from "../../assets/svg/sort-descending.svg"
import Image from "react-bootstrap/Image";

type renderSortButtonType = {
    sortHeaderDirection: boolean | undefined,
    setSortHeaderDirection: (sortHeaderDirection: boolean | undefined) => void
}
const RenderSortButton:React.FC<renderSortButtonType> = memo(({sortHeaderDirection, setSortHeaderDirection}) => {
    console.log("RenderSortButton")
    return <Image src={sortHeaderDirection? sortDescending: sortAscending} style={{width: "2rem", cursor: "pointer"}}
                  alt={"сортировка постов"} title={"сортировка постов"}
                  onClick={() => {
                      sortHeaderDirection === undefined // если направление сортировки не определено
                          ? setSortHeaderDirection( true ) // начальная прямая сортировка массива постов
                          : setSortHeaderDirection( !sortHeaderDirection ) // при последующих активациях реверс сортировки
                  }} // при клике перейти назад по истории
    />
})
export default RenderSortButton