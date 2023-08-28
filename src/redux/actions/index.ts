import { Dispatch } from 'redux';
import * as actionTypes from '../actionTypes';
import { RootAction } from '../types';

export const loadPosts = (): ((dispatch: Dispatch<RootAction>) => void) => {
  return (dispatch: Dispatch<RootAction>) => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: actionTypes.LOAD_POSTS_SUCCESS, payload: data });
      })
      .catch((error) => {
        console.error('An error occurred:', error);
      });
  };
};