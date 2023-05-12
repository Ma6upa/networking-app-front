import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import {
  Box,
  Container,
  CssBaseline,
  Divider,
  ThemeProvider,
  Typography,
  createTheme
} from '@mui/material';
import PostForm from '../components/postForm';

const UserPage = () => {
  const { id } = useParams();
  const { fetchUser, fetchPosts } = useActions();
  const { user } = useTypedSelector(state => state.user);
  const { posts } = useTypedSelector(state => state.post);
  const theme = createTheme();

  useEffect(() => {
    fetchUser(id!)
    fetchPosts(id!)
  }, [])


  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="md">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            alignItems: 'center',
          }}>
            <Box>
              <img src={user.avatarPath ? `/${user.avatarPath}` : '/avatarDefault.jpg'} style={{
                width: 200,
                height: 200,
                borderRadius: 100
              }} />
            </Box>
            <Box sx={{ marginLeft: '5%' }}>
              <Typography component="h1" variant="h5">
                {user.firstName && user.firstName} {user.lastName && user.lastName}
              </Typography>
              <Typography component="h1" variant="h5">
                Почта: {user.email}
              </Typography>
              {user.city && (
                <Typography component="h1" variant="h5">
                  Город: {user.city}
                </Typography>
              )}
              {user.university && (
                <Typography component="h1" variant="h5">
                  ВУЗ: {user.university}
                </Typography>
              )}
            </Box>
          </Box>
          <Box
            sx={{
              marginTop: 5,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: '100%'
            }}
          >
            <PostForm />
          </Box>
          <Container component="main" maxWidth="md">
            <Box
              sx={{
                marginTop: 5,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '100%'
              }}
            >
              <Typography component="h2" variant="h4">
                Список постов
              </Typography>
              {posts.map((item, index) => (
                <Box
                  key={item._id}
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    border: '1px solid lightgray',
                    padding: 2,
                    width: '100%',
                    marginTop: 2,
                    marginBottom: 2
                  }}
                >
                  <Box>
                    <img src={`/${item.postPathToImg}`} style={{
                      width: 100,
                      height: 100,
                    }} />
                    <Typography component="h2" variant="h6"
                    >
                      {item.author.name}
                    </Typography>
                  </Box>
                  <Box
                   sx={{
                    flex: 1,
                    textAlign: 'center'
                   }}
                  >
                    <Typography component="h1" variant="h5">
                      {item.postText}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Container>
        </Box>
      </Container>
    </ThemeProvider>
  )
}

export { UserPage }