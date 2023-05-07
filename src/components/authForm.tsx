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
import { useState } from "react";
import { Link } from "react-router-dom";

const AuthForm = () => {
  const theme = createTheme();
  const [noUser, setNoUser] = useState(false);

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    const target = event.currentTarget as HTMLFormElement;
    const data = new FormData(target);
    const userData = {
      login: data.get('login')?.toString() || null,
      password: data.get('password')?.toString() || null,
    }
    console.log(userData)
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
              id="login"
              label="Логин"
              name="login"
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
                <Link to={'/signUp'}>
                  У вас еще нет аккаунта? Зарегистрируйтесь
                </Link>
              </Grid>
            </Grid>
            {noUser && (
              <Box>
                <Typography component="h2" variant="h6">
                  Такого пользователя не существует, пожалуйста <Link to={'/registration'}>Зарегистрируйтесь</Link>
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