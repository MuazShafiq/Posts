import * as actionTypes from './actionTypes';

export interface LoadPostsSuccessAction {
  type: typeof actionTypes.LOAD_POSTS_SUCCESS;
  payload: PostProps[];
}

export interface IncrementVisiblePostsAction {
  type: typeof actionTypes.INCREMENT_VISIBLE_POSTS;
}

export type RootAction = LoadPostsSuccessAction | IncrementVisiblePostsAction;

export interface RootState {
  loading: boolean;
  posts: PostProps[];
  visiblePosts: number;
}

export interface PostProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}
