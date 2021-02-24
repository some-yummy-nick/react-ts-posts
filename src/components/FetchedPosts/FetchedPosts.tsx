import React from 'react';
import {useDispatch, useSelector} from "react-redux";

import {fetchPosts} from "store/actions/posts";
import {Post} from "components/Post/Post";
import {Loader} from "components/Loader/Loader";

export const FetchedPosts: React.FC = () => {
    const dispatch = useDispatch();
    const posts = useSelector((state: any) => state.posts.fetchedPosts);
    const loader = useSelector((state: any) => state.loader.loader);

    if (loader) {
        return <Loader/>
    }

    if (!posts.length) {
        return <button className="btn btn-primary" onClick={() => dispatch(fetchPosts())}>Загрузить</button>
    }

    return (
        <>
            {posts.map((post: any) => <Post title={post.title} key={`post-${post.id}`}/>)}
        </>
    )
};
