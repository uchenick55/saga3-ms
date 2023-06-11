import {PostType} from "../../../common/commonTypes/commonTypes";

type postListSearchFilterFnType = (
    PostsList: Array<PostType>,
    SearchPostQuery:string
) => Array<PostType>
//делим посты в соответствии с пагинацией
const postListSearchFilterFn: postListSearchFilterFnType = (PostsList, SearchPostQuery) => {
    return PostsList.filter( (post: PostType) => post.title.toLowerCase().includes( SearchPostQuery.toLowerCase() ) )
}
export default postListSearchFilterFn