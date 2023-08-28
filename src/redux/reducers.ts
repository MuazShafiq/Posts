import * as actionTypes from './actionTypes';
import { RootState, RootAction } from './types';

const initialState: RootState = {
  loading: true,
  posts: [],
  visiblePosts: 4,
};

const rootReducer = (state = initialState, action: RootAction): RootState => {
  switch (action.type) {
    case actionTypes.LOAD_POSTS_SUCCESS:
      return { ...state, loading: false, posts: action.payload };
    case actionTypes.INCREMENT_VISIBLE_POSTS:
      return { ...state, visiblePosts: state.visiblePosts + 4 };
    default:
      return state;
  }
};

export default rootReducer;
