import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import {UserActions} from "../../redux/reducers/user-reducer";

const UserPosts: React.FC = () => {
    const dispatch = useDispatch()

    useEffect( () => {
        dispatch( UserActions.getUserDataAC(1)  )//
    }, [] )

    return <div>
        UserPosts
    </div>
}
export default UserPosts