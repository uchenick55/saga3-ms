import {PostType} from "../../../common/commonTypes/commonTypes";

type postListSearchFilterFnType = (
    PostsList: Array<PostType>,
    searchPostQuery:string
) => Array<PostType>
//делим посты в соответствии с пагинацией
const postListSearchFilterFn: postListSearchFilterFnType = (PostsList, searchPostQuery) => {
    return PostsList.filter( (post: PostType) => post.title.toLowerCase().includes( searchPostQuery.toLowerCase() ) )
}
export default postListSearchFilterFn