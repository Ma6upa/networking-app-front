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
  const { fetchUser } = useActions();
  const { user } = useTypedSelector(state => state.user);
  const theme = createTheme();

  useEffect(() => {
    fetchUser(id!)
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
              <img src={user.avatarPath? `/${user.avatarPath}` : '/avatarDefault.jpg'} style={{
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
        </Box>
      </Container>
    </ThemeProvider>
  )
}

export { UserPage }