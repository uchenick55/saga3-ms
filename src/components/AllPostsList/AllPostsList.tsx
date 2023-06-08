import React from "react";
import {useSelector} from "react-redux";
import {GlobalStateType} from "../../redux/store/store-redux";
import PostItem from "./PostItem";
import {PostType} from "../../common/commonTypes/commonTypes";
import Avatar from "../../assets/svg/avatar-default.svg"

const AllPostsList: React.FC = () => {
    const AllPosts: Array<PostType> = useSelector( (state: GlobalStateType) => state.allPosts.AllPosts )
    console.log( AllPosts )
    return <div>
        {AllPosts.map( (postItem) => {
                const {body, id, title, userId} = postItem // извлекаем данные из массива постов
                return <PostItem key={id} body={body} title={title} userId={userId} Avatar={Avatar}/> // отрисовка одного поста
            }
        )}
    </div>
}
export default AllPostsList