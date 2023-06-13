import {postType} from "../../../common/commonTypes/commonTypes";

type postListSearchFilterFnType = (
    postsList: Array<postType>,
    searchPostQuery:string
) => Array<postType>
//делим посты в соответствии с пагинацией
const postListSearchFilterFn: postListSearchFilterFnType = (postsList, searchPostQuery) => {
    return postsList.filter( (post: postType) => post.title.toLowerCase().includes( searchPostQuery.toLowerCase() ) )
}
export default postListSearchFilterFn