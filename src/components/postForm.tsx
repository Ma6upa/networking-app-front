import React from 'react'
import {
  Box,
  Container,
  Typography,
  TextField,
  Button
} from '@mui/material';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';

const PostForm = () => {
  const { createPost, fetchPosts } = useActions();
  const { user } = useTypedSelector(state => state.user);

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    const target = event.currentTarget as HTMLFormElement;
    const data = new FormData(target);
    const postData = {
      postText: data.get('postText')?.toString()!,
      id: user.id,
      name: `${user.firstName && user.firstName} ${user.lastName && user.lastName}`,
      postPic: data.get('postPic') || null
    }
    if(!postData.postText) return
    await createPost(postData)
    fetchPosts(user.id)
  }

  return (
    <Container component="main" maxWidth="md">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          border: '1px dashed lightgray',
          padding: 2,
        }}
        component="form" onSubmit={handleSubmit} noValidate
      >
        <Typography component="h2" variant="h6">
          Создать пост
        </Typography>
        <TextField
          margin="normal"
          fullWidth
          multiline
          rows={3}
          id="postText"
          label="Расскажите, о чем вы думаете"
          name="postText"
          autoFocus
          required
        />
        <Box sx={{
          display: 'flex',
          flexDirection: 'row',
        }}>
          <Button
            variant="contained"
            component="label"
            sx={{ mt: 3, mb: 2, float: 'right', }}
          >
            Добавить фото
            <input
              type="file"
              accept="image/*"
              name="postPic"
              id="postPic"
              hidden
            />
          </Button>
          <Button
            type="submit"
            variant="contained"
            sx={{ mt: 3, mb: 2, float: 'right', ml: 2 }}
          >
            Сохранить
          </Button>
        </Box>
      </Box>
    </Container>
  )
}

export default PostForm;