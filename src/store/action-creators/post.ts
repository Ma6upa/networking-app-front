import { Dispatch } from "redux"
import axios from "axios"
import { PostAction, postsActionTypes } from "../../types/post"

interface PostData {
  postText: string,
  id: string,
  name: string,
  postPic: FormDataEntryValue | null
}

export const createPost = (postData: PostData) => {
  return async (dispatch: Dispatch<PostAction>) => {
    try {
      dispatch({ type: postsActionTypes.CREATE_POST })
      if (postData.postPic) {
        let formData = new FormData()
        formData.append('postPic', postData.postPic)
        await axios.post(process.env.REACT_APP_API_URL + "/api/posts/uploadPostPic", formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          }
        )
      }
      const response = await axios.post(process.env.REACT_APP_API_URL + "/api/posts/createPost", {
        postText: postData.postText,
        author: {
          id: postData.id,
          name: postData.name
        }
      })
      dispatch({ type: postsActionTypes.CREATE_POST_SUCCESS, payload: response.data.message })
    } catch (e) {
      dispatch({
        type: postsActionTypes.CREATE_POST_ERROR,
        payload: 'Произошла ошибка при создании поста'
      })
    }
  }
}

export const fetchPosts = (userId: string) => {
  return async (dispatch: Dispatch<PostAction>) => {
    try {
      const response = await axios.get(process.env.REACT_APP_API_URL + "/api/posts/getPosts", {
        params: {
          userId: userId
        }
      })
      dispatch({ type: postsActionTypes.FETCH_POSTS, payload: response.data })
    } catch (e) {
      dispatch({
        type: postsActionTypes.CREATE_POST_ERROR,
        payload: 'Произошла ошибка при загрузке постов'
      })
    }
  }
}
