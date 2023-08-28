import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, RootAction } from '../../redux/types';
import { loadPosts } from '../../redux/actions';
import PostComponent from '../PostComponent/PostComponent';
import { Dispatch } from 'redux';

function PostContainer() {
  const loading = useSelector((state: RootState) => state.loading);
  const posts = useSelector((state: RootState) => state.posts);
  const visiblePosts = useSelector((state: RootState) => state.visiblePosts);

  const reduxDispatch = useDispatch<Dispatch<RootAction>>();
  const loadPostsAction = loadPosts();

  useEffect(() => {
    loadPostsAction(reduxDispatch);
  }, [reduxDispatch, loadPostsAction]);

  const loadMorePosts = () => {
    reduxDispatch({ type: 'INCREMENT_VISIBLE_POSTS' });
  };

  return (
    <>
      <PostComponent
        loadMorePosts={loadMorePosts}
        loading={loading}
        visiblePosts={visiblePosts}
        posts={posts}
      />
    </>
  );
}

export default PostContainer;