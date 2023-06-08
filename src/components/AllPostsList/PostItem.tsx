import React from "react";
import Image from "react-bootstrap/Image";
import s from "./Posts.module.css"
import {NavLink} from "react-router-dom";

type PostItemType = {
    "userId": number,
    "title": string,
    "body": string
    Avatar: string
}
const PostItem: React.FC<PostItemType> = ({userId, body, title, Avatar}) => {
    return <div>
        <NavLink to={'/user-posts/' + userId}>
            <Image fluid={true} src={Avatar} className={s.PostItemImage}
                   onClick={() => {

                   }} alt={"Аватар пользователя"} title={`Все посты пользователя ${userId}`}
            />
        </NavLink>
        <div>
            {title}
        </div>
        <div>
            {body}
        </div>

    </div>
}
export default PostItem