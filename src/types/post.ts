export enum postsActionTypes {
  CREATE_POST = 'CREATE_POST',
  FETCH_POSTS = 'FETCH_POSTS',
  CREATE_POST_SUCCESS = 'CREATE_POST_SUCCESS',
  CREATE_POST_ERROR = 'CREATE_POST_ERROR',
}

export interface PostState {
  message: string;
  loading: boolean;
  error: null | string,
  posts: any[]
}

export interface Post {
  id: string,
  postText: string,
  postPathToImg: string,
  author: {
    id: string,
    name: string
  }
}

interface createPostAction {
  type: postsActionTypes.CREATE_POST
}

interface fetchPostsAction {
  type: postsActionTypes.FETCH_POSTS,
  payload: Post[]
}

interface fetchPostsAction {
  type: postsActionTypes.FETCH_POSTS
}

interface createPostSuccessAction {
  type: postsActionTypes.CREATE_POST_SUCCESS
  payload: string
}

interface createPostErrorAction {
  type: postsActionTypes.CREATE_POST_ERROR
  payload: string
}

export type PostAction = createPostAction | createPostSuccessAction | createPostErrorAction | fetchPostsAction
