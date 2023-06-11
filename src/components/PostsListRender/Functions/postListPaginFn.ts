import {PostType} from "../../../common/commonTypes/commonTypes";

type postListPaginFnType = (
    PostsList: Array<PostType>,
    PageSize: number,
    CurrentPage: number
) => Array<PostType>
//делим посты в соответствии с пагинацией
const postListPaginFn: postListPaginFnType = (PostsList, PageSize, CurrentPage) => {
    return PostsList.filter( (post: PostType, ind: number) =>
        ind >= (PageSize * (CurrentPage - 1)) && ind < (PageSize * CurrentPage) )
}
export default postListPaginFn