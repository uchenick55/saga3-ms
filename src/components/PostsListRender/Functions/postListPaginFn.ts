import {postType} from "../../../common/commonTypes/commonTypes";

type postListPaginFnType = (
    postsList: Array<postType>,
    pageSize: number,
    сurrentPage: number
) => Array<postType>
//делим посты в соответствии с пагинацией
const postListPaginFn: postListPaginFnType = (postsList, pageSize, сurrentPage) => {
    return postsList.filter( (post: postType, ind: number) =>
        ind >= (pageSize * (сurrentPage - 1)) && ind < (pageSize * сurrentPage) )
}
export default postListPaginFn