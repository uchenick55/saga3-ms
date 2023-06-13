import {postType} from "../../../common/commonTypes/commonTypes";

type postListSearchFilterFnType = (
    PostsList: Array<postType>,
    searchPostQuery:string
) => Array<postType>
//делим посты в соответствии с пагинацией
const postListSearchFilterFn: postListSearchFilterFnType = (PostsList, searchPostQuery) => {
    return PostsList.filter( (post: postType) => post.title.toLowerCase().includes( searchPostQuery.toLowerCase() ) )
}
export default postListSearchFilterFn