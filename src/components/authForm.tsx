import {
  Box,
  Button,
  Container,
  CssBaseline,
  Grid,
  TextField,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material"
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";

const AuthForm = () => {
  const theme = createTheme();
  const { authRequest } = useActions()
  const {userData, error, loading} = useTypedSelector(state => state.auth)
  const navigate = useNavigate()

  useEffect(() => {
    if (userData.userId) {
      navigate(`/user/${userData.userId}`)
    }
  }, [userData])

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    const target = event.currentTarget as HTMLFormElement;
    const data = new FormData(target);
    const userData = {
      email: data.get('email')?.toString() || null,
      password: data.get('password')?.toString() || null,
    }
    authRequest(userData)
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Авторизация
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="E-Mail"
              name="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Пароль"
              type="password"
              id="password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Войти
            </Button>
            <Grid container>
              <Grid item>
                <Link to={'/registration'}>
                  У вас еще нет аккаунта? Зарегистрируйтесь
                </Link>
              </Grid>
            </Grid>
            {error && (
              <Box>
                <Typography component="h2" variant="h6" color={'red'}>
                  {error}
                </Typography>
              </Box>
            )}
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  )
}

export { AuthForm }