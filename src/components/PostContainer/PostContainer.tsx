import { useState, useEffect } from 'react';
import PostComponent from '../PostComponent/PostComponent';

interface PostProps {
    userId: number;
    id: number;
    title: string;
    body: string;
}

function PostContainer() {
    const [loading, setLoading] = useState(true);
    const [posts, setPosts] = useState<PostProps[]>([]);
    const [visiblePosts, setVisiblePosts] = useState(4);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setLoading(false);
                setPosts(data);
            })
            .catch(error => {
                console.error('An error occurred:', error);
            });
    }, []);


    const loadMorePosts = () => {
        setVisiblePosts(prevVisiblePosts => prevVisiblePosts + 4);
    };

    return (
        <>
            <PostComponent
                loadMorePosts = {loadMorePosts}
                loading = {loading}
                visiblePosts={visiblePosts}
                posts={posts}
            />
        </>
    );
}

export default PostContainer;
