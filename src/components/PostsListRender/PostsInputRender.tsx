import {AllPostsInitialStateType, PaginationDataType} from "../../redux/reducers/all-posts-reducer";
import React, {useEffect, useState} from "react";

type PostsInputRenderType = {
    SearchPostQuery: string,
    PostsInitialState: AllPostsInitialStateType,
    PaginationData: PaginationDataType,
    setSearchPostQuery: (SearchPostQuery: string) => void
    setPaginationData: (PaginationData: PaginationDataType) => void
}
const PostsInputRender: React.FC<PostsInputRenderType> = (
    {SearchPostQuery, setSearchPostQuery, setPaginationData, PostsInitialState, PaginationData}) => {
    console.log("PostsInputRender")
    const [QueryTmp, setQueryTmp] = useState(SearchPostQuery)

    const onChangeSearchPostQuery = (SearchPostQuery: string) => {// задаем новый поисковый запрос
        setSearchPostQuery( SearchPostQuery ) // обновляем локальный стейт
        if (PaginationData.CurrentPage !== 1) {//если страница пагинации !==1
            console.log( "смена текущей страницы и диапазона пагинации на 1 при поиске" )
            setPaginationData( PostsInitialState.PaginationData )
        }
    }

    useEffect(() => { // задержка ввода input (не реагирует на каждый символ сразу)
        const setSearchPostQueryTmp = QueryTmp // временное значение до задержки
        const id = setTimeout(() => {
            if (setSearchPostQueryTmp === QueryTmp) { // если по истечениию задержки поисковый запрос не изменился
                onChangeSearchPostQuery(QueryTmp) // применить поисковый запрос для фильтрации
            }
        }, 500); // задержка, мс
        return () => {
            clearTimeout(id); //
        };
    }, [QueryTmp]);


    return <div>
        <input autoFocus={true} type="text" value={QueryTmp}
               onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setQueryTmp(e.target.value) }}/>
        <div onClick={() => setSearchPostQuery( "" )}>x</div>
    </div>
}

export default PostsInputRender