import { Container, Typography } from "@mui/material";

const Home = () => {

  return (
    <Container>
        <Typography 
          variant='h4'
          align='center'
          color='primary.light'
          sx={{
            mt: 4, 
            border: '1px solid green', 
            borderRadius: 2
          }}
        >
          Home Page
        </Typography>
    </Container>
  )
}

export default Home;