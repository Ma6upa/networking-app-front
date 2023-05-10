import React from 'react'
import {
  Box,
  Container,
  Typography,
  createTheme,
  TextField,
  Button
} from '@mui/material';

const PostForm = () => {
  const theme = createTheme();

  return (
    <Container component="main" maxWidth="md">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          border: '1px dashed lightgray',
          padding: 2,
        }}
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
              onChange={(e) => {
                const file = e.target.files![0];
              }}
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