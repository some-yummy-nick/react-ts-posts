import React, {useState} from 'react';
import {connect, ConnectedProps} from "react-redux";
import {createPost} from "store/actions/posts";
import {TypePost} from "../../types/TypePost";
import {showAlert, hideAlert} from "../../store/actions/alert";
import {Alert} from "../Alert/Alert";

interface RootState {
    alert: string
}

const mapState = (state: RootState) => ({
    alert: state.alert
});

const mapDispatch = {
    createPost: (post: TypePost) => ({}),
    showAlert: (text:string) => (()=>{}),
    hideAlert: () => ({})
};

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>

export const PostForm = (props: PropsFromRedux) => {
    const [title, setTitle] = useState("");

    const submitHandler = (e: React.FormEvent) => {
        e.preventDefault();
        if (!title.trim()) {
            props.showAlert("Название поста не может быть пустым");
            return;
        }
        const newPost = {
            id: Date.now(),
            title
        };
        props.createPost(newPost);
        setTitle("");
    };

    const changeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
        props.hideAlert()
    };

    return (
        <>
            <form onSubmit={submitHandler}>
                {props.alert && <Alert text={props.alert}/>}
                <div className="form-group mb-2">
                    <label htmlFor="input">Заголовок поста</label>
                    <input type="" id="input" name="title" className="form-control" value={title}
                           onChange={changeInput}/>
                </div>
                <button className="btn btn-success" type="submit">Создать</button>
            </form>
        </>
    )
};

const mapStateToProps = (state: any) => ({
    alert: state.alert.alert,
});

export default connect(mapStateToProps, {createPost, showAlert, hideAlert})(PostForm);
