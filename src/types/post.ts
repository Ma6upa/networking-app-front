export enum postsActionTypes {
  CREATE_POST = 'CREATE_POST',
  CREATE_POST_SUCCESS = 'CREATE_POST_SUCCESS',
  CREATE_POST_ERROR = 'CREATE_POST_ERROR',
}

export interface PostState {
  message: string;
  loading: boolean;
  error: null | string
}

interface createPostAction {
  type: postsActionTypes.CREATE_POST
}

interface createPostSuccessAction {
  type: postsActionTypes.CREATE_POST_SUCCESS
  payload: string
}

interface createPostErrorAction {
  type: postsActionTypes.CREATE_POST_ERROR
  payload: string
}

export type PostAction = createPostAction | createPostSuccessAction | createPostErrorAction
