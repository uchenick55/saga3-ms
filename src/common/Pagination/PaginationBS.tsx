import React, {memo} from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import Pagination from 'react-bootstrap/Pagination';
import classes from "./Pagination.module.css"
import {paginationDataType} from "../../redux/reducers/all-posts-reducer";

type paginationBSType = paginationDataType & {
    TotalPostsCount: number, // общее число постов на сервере
    setPaginationData: (paginationData:paginationDataType) => void// экшн креатор записи в стейт комментариев по ID статьи
}

const PaginationBS: React.FC<paginationBSType> = memo ( (
    {
        TotalPostsCount, // общее число постов на сервере
        pageSize, // количество постов на одной странице
        сurrentPage, // текущая страница пагинации
        currentRangeLocal, // текущий диапазон пагинации
        portionSize,// количество отображаемых страниц пагинации между порциями
        setPaginationData, // экшн креатор записи в стейт комментариев по ID статьи
    }) => {
    console.log( "PaginationBS" )
    const PagesCount = Math.ceil( TotalPostsCount / pageSize ); // сколько всего страниц можно вызвать
    //с постами пачками по pageSize
    const pages = []; // определяем массив страниц под все элементы
    for (let i = 1; i <= PagesCount; i++) {
        // В этот массив
        pages.push( i ); // добавляем все страницы элементов
    }

    const portionSizeLeft = 1 + portionSize * (currentRangeLocal - 1); // Нижнее значение порций (не меньше 1)
    const portionSizeRight = portionSize * currentRangeLocal; // Верхнее значение страниц (не больше PagesCount)
    const slicedPages2 = pages.filter(
        // фильтруем весь массив страниц элементов
        (p) => p >= portionSizeLeft && p <= portionSizeRight // оставляем только в заданном диапазоне
    );

    type setPortionValueType = "prevPortion" | "nextPortion"
    const setPortion = (setPortionValue: setPortionValueType) => { // задать текущую порцию пагинации
        if (setPortionValue === "prevPortion" && currentRangeLocal > 1) // если мы жмем prevPortion
        {
            setPaginationData({
                pageSize:pageSize, сurrentPage: сurrentPage,
                portionSize: portionSize, currentRangeLocal: currentRangeLocal -1,// уменьшаем диапазон на 1
            })
        }
        if (setPortionValue === "nextPortion") // если мы жмем nextPortion
        {
            setPaginationData({
                pageSize:pageSize, сurrentPage: сurrentPage,
                portionSize: portionSize, currentRangeLocal: currentRangeLocal +1,// увеличиваем диапазон на 1
            })
        }
    };
    const PaginationItemMemo = memo( Pagination.Item )

    const renderSlicedPages = ( slicedPages2.map( (p) => { // мапинг отобранного массива
        return (
            <PaginationItemMemo // пагинация бутстрапа
                active={p === сurrentPage} // акттивная страница
                key={p} // ключ
                onClick={() => { // по клику
                    p!== сurrentPage && // кликать по текущей странице пагинации нельзя
                    setPaginationData({
                        pageSize:pageSize, сurrentPage: p,// смена текущей страницы после клика
                        portionSize: portionSize, currentRangeLocal: currentRangeLocal,
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
                <Pagination.Prev disabled={currentRangeLocal===1} onClick={() => {
                    setPortion( "prevPortion" )
                }}/> {/*диапазон пагинации вниз*/}
                {renderSlicedPages} {/*отрисовка пагинации страниц внутри кнопок*/}
                <Pagination.Next disabled={Math.ceil(TotalPostsCount/(pageSize*portionSize)) <= currentRangeLocal} onClick={() => {
                    setPortion( "nextPortion" )
                }}/> {/*диапазон пагинации вверх*/}
            </Pagination>
        </div>
    );
} );

export default PaginationBS;
