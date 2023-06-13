import RenderSortButton from "../PostsListRender/RenderSortButton";
import React, {useCallback} from "react";
import {useDispatch, useSelector} from "react-redux";
import {globalStateType} from "../../redux/store/store-redux";
import {allPostsActions} from "../../redux/reducers/all-posts-reducer";

const SortPostsContainer: React.FC = () => {
    const {setSortHeaderDirectionAC} = allPostsActions // извлекаем колбеки из allPostsActions

    const dispatch = useDispatch()

    // определение направления сортировки по заголовкам массива постов
    const sortHeaderDirection: boolean | undefined = useSelector( (state: globalStateType) => state.allPosts.sortHeaderDirection )
    // колбек направления сортировки по заголовкам массива постов
    const setSortHeaderDirection = (sortHeaderDirection:boolean | undefined) => dispatch(setSortHeaderDirectionAC(sortHeaderDirection))

    return <RenderSortButton // отрисовка кнопки сортировки
        sortHeaderDirection={sortHeaderDirection}
        setSortHeaderDirection={useCallback(setSortHeaderDirection,[]) }/>
}

export default SortPostsContainer
