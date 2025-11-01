import { Box, Button, Container, TextField, Typography } from '@mui/material'

import { useState } from 'react';
import { useNavigate } from 'react-router-dom'


const Register = () => {

  let error = false;
  // let error = true;

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate()

  const handleSubmit = (e)=>{
    e.preventDefault();
    if (!userName.trim() || !email.trim() || !password.trim()) {
    alert("User name, Email ve şifre boş olamaz!");
    return;
    }
    const user = { userName, email, password };  // ✅ user nesnesi
    sessionStorage.setItem("user", JSON.stringify(user));
    navigate(-1);// veya navigate("/courses");
  }

  return (
    <>
      <Container
        maxWidth='sm' // xs, sm, md, lg, xl
        sx={{
          border: '2px solid blue',
          bgcolor: 'whitesmoke',
          my: 4,
          p: 2,
        }}
      >
        <Typography 
          variant='h4'
          align='center'
          color='error.light'
          sx={{
            mt: 4, 
            border: '1px solid green', 
            borderRadius: 2
          }}
        >
          Register
        </Typography>

        <Box 
          sx={{
            mt: 2,
            textAlign: 'center',
          }}
        >
            <TextField
              // margin='dense'
              margin='normal'
              id='username'
              label="User Name"
              type='text'
              placeholder='Enter your user name'
              variant="outlined"
              fullWidth
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />

            <TextField
              // margin='dense'
              margin='normal'
              id='email'
              label="Email"
              type='email'
              placeholder='Enter your email'
              variant="outlined"
              fullWidth
              error = {error}
              helperText={error && "Incorrect email format"}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <TextField
              // margin='dense'
              margin='normal'
              id='password'
              label="Password"
              type='password'
              placeholder='Enter your password'
              variant="outlined"
              fullWidth
              error = {error}
              helperText={error && "Incorrect password format"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              type='submit'
              variant='contained'
              sx={{
                mt: 2 
              }}
              onClick={handleSubmit}
            >
              Submit
            </Button>
        </Box>
        
      </Container>

    </>
  )
}

export default Register;