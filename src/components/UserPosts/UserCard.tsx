import {UserDataType} from "../../common/commonTypes/commonTypes";
import React from "react";

type UserCardType = {
    UserData: UserDataType
}
const UserCard: React.FC<UserCardType> = ({UserData}) => { // отрисовка карточки пользователя (автора постов)
    const {id, name, username, email, address, phone, website, company} = UserData
    return <div>
        <h2>UserData</h2>
        <ul>
            <li>id: {id}</li>
            <li>name: {name}</li>
            <li>username: {username}</li>
            <li>email: {email}</li>
            <li><b>address</b>
                <ul>
                    <li> street: {address?.street}</li>
                    <li> suite: {address?.suite}</li>
                    <li> city: {address?.city}</li>
                    <li> zipcode: {address?.zipcode}</li>
                    <li><b>geo</b>
                        <ul>
                            <li> {address?.geo?.lat}  </li>
                            <li> {address?.geo?.lng}  </li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li>phone: {phone}</li>
            <li>website: {website}</li>
            <div><b>company</b>
                <ul>
                    <li> name: {company?.name}</li>
                    <li> catchPhrase: {company?.catchPhrase}</li>
                    <li> bs: {company?.bs}</li>
                </ul>
            </div>
        </ul>
    </div>
}
export default UserCard