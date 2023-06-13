import RenderSortButton from "../PostsListRender/RenderSortButton";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {GlobalStateType} from "../../redux/store/store-redux";
import {AllPostsActions} from "../../redux/reducers/all-posts-reducer";

const SortPostsContainer: React.FC = () => {
    const {setSortHeaderDirectionAC} = AllPostsActions // извлекаем колбеки из AllPostsActions

    const dispatch = useDispatch()

    // определение направления сортировки по заголовкам массива постов
    const sortHeaderDirection: boolean | undefined = useSelector( (state: GlobalStateType) => state.allPosts.SortHeaderDirection )
    // колбек направления сортировки по заголовкам массива постов
    const setSortHeaderDirection = (sortHeaderDirection:boolean | undefined) => dispatch(setSortHeaderDirectionAC(sortHeaderDirection))

    return <RenderSortButton // отрисовка кнопки сортировки
        sortHeaderDirection={sortHeaderDirection}
        setSortHeaderDirection={setSortHeaderDirection}/>
}

export default SortPostsContainer
