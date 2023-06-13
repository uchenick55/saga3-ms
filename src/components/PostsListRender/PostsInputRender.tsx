import {AllPostsInitialStateType, PaginationDataType} from "../../redux/reducers/all-posts-reducer";
import React, {useEffect, useState} from "react";
import {Col, InputGroup, Row} from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import GoBack from "../GoBack/GoBack";
import SortPostsContainer from "../SortPosts/SortPostsContainer";
import goBack from "../../assets/svg/back-arrow1.svg";
import closeCircle from "../../assets/svg/close-circle.svg";
import s from "../../common/classes/common.module.css";
import Image from "react-bootstrap/Image";
import Menu from "../Menu/Menu";

type PostsInputRenderType = {
    SearchPostQuery: string,
    PostsInitialState: AllPostsInitialStateType,
    PaginationData: PaginationDataType,
    patchFromState: string
    setSearchPostQuery: (SearchPostQuery: string) => void
    setPaginationData: (PaginationData: PaginationDataType) => void
}
const PostsInputRender: React.FC<PostsInputRenderType> = (
    {SearchPostQuery, setSearchPostQuery, setPaginationData, PostsInitialState, PaginationData, patchFromState}) => {
    console.log( "PostsInputRender" )
    const [QueryTmp, setQueryTmp] = useState( SearchPostQuery )

    const onChangeSearchPostQuery = (SearchPostQuery: string) => {// задаем новый поисковый запрос
        setSearchPostQuery( SearchPostQuery ) // обновляем локальный стейт
        if (PaginationData.CurrentPage !== 1) {//если страница пагинации !==1
            console.log( "смена текущей страницы и диапазона пагинации на 1 при поиске" )
            setPaginationData( PostsInitialState.PaginationData )
        }
    }

    const onClearField = () => {
        setSearchPostQuery( "" )
        setQueryTmp( "" )
    }

    useEffect( () => { // задержка ввода input (не реагирует на каждый символ сразу)
        const setSearchPostQueryTmp = QueryTmp // временное значение до задержки
        const id = setTimeout( () => {
            if (setSearchPostQueryTmp === QueryTmp) { // если по истечениию задержки поисковый запрос не изменился
                onChangeSearchPostQuery( QueryTmp ) // применить поисковый запрос для фильтрации
            }
        }, 500 ); // задержка, мс
        return () => {
            clearTimeout( id ); //
        };
    }, [QueryTmp] );


    return <div className='position-relative' style={{border: "1px solid #dee2e6", borderRadius: "0.5rem"}}>
        {patchFromState !== "about-me" && <Image src={closeCircle} className={s.CloseCircle}
                                                 alt={"go back"} title={"go back"}
                                                 onClick={() => onClearField()} // очистить поле поиска
        />}

        {patchFromState !== "about-me" // для страниц кроме about-me отобразить
            && <InputGroup>
            {patchFromState !== "" && <InputGroup.Text> <GoBack/> </InputGroup.Text>}
            <InputGroup.Text><SortPostsContainer/></InputGroup.Text>

            {patchFromState !== "about-me" && <Form.Control
                placeholder="поиск по постам..."
                type="text"
                value={QueryTmp}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setQueryTmp( e.target.value )
                }}
            />}
            <InputGroup.Text><Menu/></InputGroup.Text>
        </InputGroup>}
        {patchFromState === "about-me" &&
        <Row style={{margin: "0.4rem"}}>
            <Col style={{margin: "0.2rem"}}><GoBack/></Col>
            <Col className='d-flex justify-content-end'><Menu/></Col>

        </Row>}

    </div>
}

export default PostsInputRender