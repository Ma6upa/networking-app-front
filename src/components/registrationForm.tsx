import {
  Box,
  Button,
  Card,
  Container,
  CssBaseline,
  Grid,
  TextField,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useActions } from "../hooks/useActions";

const RegistrationForm = () => {
  const theme = createTheme();
  const { registrationRequest } = useActions()
  const reader = new FileReader();
  const [avatar, setAvatar] = useState<string>('/avatarDefault.jpg')
  const [file, setFile] = useState<File | null>(null)

  const convertDate = (dateString: string | null) => {
    if (dateString) {
      let p = dateString.split(/\D/g)
      return [p[2], p[1], p[0]].join("-")
    }
  }

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    const target = event.currentTarget as HTMLFormElement;
    const data = new FormData(target);
    const userData = {
      email: data.get('email')?.toString() || null,
      password: data.get('password')?.toString() || null,
      firstName: data.get('firstName')?.toString() || null,
      lastName: data.get('lastName')?.toString() || null,
      birthDate: convertDate(data.get('birthDate')?.toString() || null) || null,
      city: data.get('city')?.toString() || null,
      university: data.get('university')?.toString() || null,
      avatar: file
    }
    registrationRequest(userData)
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
            Регистрация
          </Typography>
          <Box
            sx={{
              width: 200,
              height: 200,
            }}
          >
            <img src={avatar} style={{
              width: 200,
              height: 200,
              borderRadius: 100
            }}/>
          </Box>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="E-mail"
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
            <TextField
              margin="normal"
              fullWidth
              name="firstName"
              label="Имя"
              id="firstName"
            />
            <TextField
              margin="normal"
              fullWidth
              name="lastName"
              label="Фамилия"
              id="lastName"
            />
            <Card sx={{
              padding: 2,
              bgcolor: '#f5f5f5'
            }}>
              <Typography component="h2" variant="h6">
                Описание
              </Typography>
              <TextField
                type={'date'}
                margin="normal"
                fullWidth
                name="birthDate"
                label="Дата рождения"
                id="birthDate"
                InputLabelProps={{ shrink: true }}
                InputProps={{ inputProps: { max: "9999-12-31" } }}
              />
              <TextField
                margin="normal"
                fullWidth
                name="city"
                label="Город"
                id="city"
              />
              <TextField
                margin="normal"
                fullWidth
                name="university"
                label="ВУЗ"
                id="university"
              />
            </Card>
            <Button
              variant="contained"
              component="label"
              sx={{ mt: 3 }}
            >
              Загрузить аватар
              <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files![0];
                  setFile(file)
                  reader.readAsDataURL(file)!
                  reader.onloadend = () => {
                    setAvatar(reader.result as string)
                  };
                }}
                hidden
              />
            </Button>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Зарегистрироваться
            </Button>
            <Grid container>
              <Grid item>
                <Link to={'/'}>
                  У вас уже есть аккаунт? Авторизуйтесь
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  )
}

export { RegistrationForm }
