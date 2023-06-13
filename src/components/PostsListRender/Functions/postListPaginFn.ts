import {PostType} from "../../../common/commonTypes/commonTypes";

type postListPaginFnType = (
    PostsList: Array<PostType>,
    pageSize: number,
    сurrentPage: number
) => Array<PostType>
//делим посты в соответствии с пагинацией
const postListPaginFn: postListPaginFnType = (PostsList, pageSize, сurrentPage) => {
    return PostsList.filter( (post: PostType, ind: number) =>
        ind >= (pageSize * (сurrentPage - 1)) && ind < (pageSize * сurrentPage) )
}
export default postListPaginFn