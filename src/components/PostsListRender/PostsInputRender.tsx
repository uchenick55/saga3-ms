import {AllPostsInitialStateType, PaginationDataType} from "../../redux/reducers/all-posts-reducer";
import React from "react";

type PostsInputRenderType = {
    SearchPostQuery: string,
    PostsInitialState: AllPostsInitialStateType,
    PaginationData: PaginationDataType,
    setSearchPostQuery: (SearchPostQuery: string) => void
    setPaginationData: (PaginationData: PaginationDataType) => void
}
const PostsInputRender: React.FC<PostsInputRenderType> = (
    {SearchPostQuery, setSearchPostQuery, setPaginationData, PostsInitialState, PaginationData}) => {

    const onChangeSearchPostQuery = (SearchPostQuery: string) => {// задаем новый поисковый запрос
        setSearchPostQuery( SearchPostQuery ) // обновляем локальный стейт
        if (PaginationData.CurrentPage !== 1) {//если страница пагинации !==1
            console.log( "смена текущей страницы и диапазона пагинации на 1 при поиске" )
            setPaginationData( PostsInitialState.PaginationData )
        }
    }


    return <div>
        <input autoFocus={true} type="text" value={SearchPostQuery}
               onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChangeSearchPostQuery( e.target.value )}/>
        <div onClick={() => setSearchPostQuery( "" )}>x</div>
    </div>
}

export default PostsInputRender