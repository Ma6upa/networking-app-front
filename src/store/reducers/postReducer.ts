import { PostAction, PostState, postsActionTypes } from "../../types/post"

const initialState: PostState = {
  message: '',
  loading: false,
  error: null,
  posts: [],
}

export const postReducer = (state = initialState, action: PostAction): PostState => {
  switch (action.type) {
    case postsActionTypes.CREATE_POST:
      return { loading: true, error: null, message: '', posts: [] }
      case postsActionTypes.FETCH_POSTS:
      return { loading: true, error: null, message: '', posts: [...state.posts, ...action.payload] }
    case postsActionTypes.CREATE_POST_SUCCESS:
      return { loading: false, error: null, message: action.payload, posts: [] }
    case postsActionTypes.CREATE_POST_ERROR:
      return { loading: false, error: action.payload, message: '', posts: [] }
    default:
      return state
  }
}
