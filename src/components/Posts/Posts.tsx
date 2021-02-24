import React from 'react';
import {connect} from "react-redux";

//components
import {Post} from 'components/Post/Post';

//типы
import {TypePost} from 'types/TypePost'

type PostProps = {
    posts: TypePost[]
}

export const Posts: React.FC<PostProps> = ({posts}) => {
    if (!posts.length) {
        return <p>Постов пока нет</p>
    }
    return (
        <>
            Posts
            {posts.map(post => <Post title={post.title} key={`post-${post.id}`}/>)}
        </>
    )
};

const mapStateToProps = (state:any) => ({
    posts: state.posts.posts,
});

export default connect(mapStateToProps)(Posts);
