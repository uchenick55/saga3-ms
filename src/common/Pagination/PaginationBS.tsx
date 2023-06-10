import React, {memo, useMemo} from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import Pagination from 'react-bootstrap/Pagination';
import classes from "./Pagination.module.css"
import {PaginationDataType} from "../../redux/reducers/all-posts-reducer";

type PaginationBSType = PaginationDataType & {
    TotalPostsCount: number, // общее число постов на сервере
    setPaginationData: (PaginationData:PaginationDataType) => void// экшн креатор записи в стейт комментариев по ID статьи
}

const PaginationBS: React.FC<PaginationBSType> = memo( (
    {
        TotalPostsCount, // общее число постов на сервере
        PageSize, // количество постов на одной странице
        CurrentPage, // текущая страница пагинации
        CurrentRangeLocal, // текущий диапазон пагинации
        PortionSize,// количество отображаемых страниц пагинации между порциями
        setPaginationData, // экшн креатор записи в стейт комментариев по ID статьи
    }) => {
    console.log( "PaginationBS" )
    const PagesCount = Math.ceil( TotalPostsCount / PageSize ); // сколько всего страниц можно вызвать
    //с постами пачками по PageSize
    const pages = []; // определяем массив страниц под все элементы
    for (let i = 1; i <= PagesCount; i++) {
        // В этот массив
        pages.push( i ); // добавляем все страницы элементов
    }

    const PortionSizeLeft = 1 + PortionSize * (CurrentRangeLocal - 1); // Нижнее значение порций (не меньше 1)
    const PortionSizeRight = PortionSize * CurrentRangeLocal; // Верхнее значение страниц (не больше PagesCount)
    const slicedPages2 = pages.filter(
        // фильтруем весь массив страниц элементов
        (p) => p >= PortionSizeLeft && p <= PortionSizeRight // оставляем только в заданном диапазоне
    );

    type setPortionValueType = "prevPortion" | "nextPortion"
    const setPortion = (setPortionValue: setPortionValueType) => { // задать текущую порцию пагинации
        if (setPortionValue === "prevPortion" && CurrentRangeLocal > 1) // если мы жмем prevPortion
        {
            setPaginationData({
                PageSize:PageSize, CurrentPage: CurrentPage,
                PortionSize: PortionSize, CurrentRangeLocal: CurrentRangeLocal -1,// уменьшаем диапазон на 1
            })
        }
        if (setPortionValue === "nextPortion") // если мы жмем nextPortion
        {
            setPaginationData({
                PageSize:PageSize, CurrentPage: CurrentPage,
                PortionSize: PortionSize, CurrentRangeLocal: CurrentRangeLocal +1,// увеличиваем диапазон на 1
            })
        }
    };
    const PaginationItemMemo = memo( Pagination.Item )

    const renderSlicedPages = ( slicedPages2.map( (p) => { // мапинг отобранного массива
        return (
            <PaginationItemMemo // пагинация бутстрапа
                active={p === CurrentPage} // акттивная страница
                key={p} // ключ
                onClick={() => { // по клику
                    setPaginationData({
                        PageSize:PageSize, CurrentPage: p,// смена текущей страницы после клика
                        PortionSize: PortionSize, CurrentRangeLocal: CurrentRangeLocal,
                    })
                }}
            >
                {p} {/*отрисовать номер страницы в пагинации*/}
            </PaginationItemMemo>

        );
    } ) )

    return (
        <div className={classes.pagination}>
            <Pagination className={"pagination align-items-center justify-content-center"}> {/*стиль мышки рука */}
                <Pagination.Prev disabled={CurrentRangeLocal===1} onClick={() => {
                    setPortion( "prevPortion" )
                }}/> {/*диапазон пагинации вниз*/}
                {renderSlicedPages} {/*отрисовка пагинации страниц внутри кнопок*/}
                <Pagination.Next disabled={Math.ceil(TotalPostsCount/(PageSize*PortionSize)) <= CurrentRangeLocal} onClick={() => {
                    setPortion( "nextPortion" )
                }}/> {/*диапазон пагинации вверх*/}
            </Pagination>
        </div>
    );
} );

export default PaginationBS;
