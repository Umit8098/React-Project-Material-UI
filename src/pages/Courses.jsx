import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';

import data from '../data';

// MUI GRID
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';


const Courses = () => {
  return (
    <Container>

      <Typography 
        variant='h4'
        align='center'
        mt={4}
        color='error'
      >
        CARDS & GRIDS
      </Typography>

      <Grid 
        container 
        spacing={2}
        justifyContent="center"
        alignItems="center"
      >

        {data.map((course) => {
          const {id, name, text, img} = course;
        
          return(
          
            <Grid 
              size={{ xs: 12, sm: 6, md: 4 }}
              key={id}
            >
            
              <Card>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    // height="140"
                    image={img}
                    alt={name}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {name}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      {text}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Share
                  </Button>
                </CardActions>
              </Card>
          
            </Grid>
  
          )
        })}
    
      </Grid>

    </Container>

  );
}

export default Courses;

