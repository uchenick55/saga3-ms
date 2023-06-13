import React from "react";
import sortAscending from "../../assets/svg/sort-ascending.svg"
import sortDescending from "../../assets/svg/sort-descending.svg"
import goBack from "../../assets/svg/back-arrow1.svg";
import s from "../../common/classes/common.module.css";
import Image from "react-bootstrap/Image";

type RenderSortButtonType = {
    sortHeaderDirection: boolean | undefined,
    setSortHeaderDirection: (sortHeaderDirection: boolean | undefined) => void
}
const RenderSortButton:React.FC<RenderSortButtonType> = ({sortHeaderDirection, setSortHeaderDirection}) => {
    console.log("RenderSortButton")
    return <Image src={sortHeaderDirection? sortDescending: sortAscending} className={s.SortImage}
                  alt={"сортировка постов"} title={"сортировка постов"}
                  onClick={() => {
                      sortHeaderDirection === undefined // если направление сортировки не определено
                          ? setSortHeaderDirection( true ) // начальная прямая сортировка массива постов
                          : setSortHeaderDirection( !sortHeaderDirection ) // при последующих активациях реверс сортировки
                  }} // при клике перейти назад по истории
    />
}
export default RenderSortButton