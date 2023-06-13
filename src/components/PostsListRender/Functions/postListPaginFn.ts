import {postType} from "../../../common/commonTypes/commonTypes";

type postListPaginFnType = (
    PostsList: Array<postType>,
    pageSize: number,
    сurrentPage: number
) => Array<postType>
//делим посты в соответствии с пагинацией
const postListPaginFn: postListPaginFnType = (PostsList, pageSize, сurrentPage) => {
    return PostsList.filter( (post: postType, ind: number) =>
        ind >= (pageSize * (сurrentPage - 1)) && ind < (pageSize * сurrentPage) )
}
export default postListPaginFn