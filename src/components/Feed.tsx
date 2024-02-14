import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Checkbox, IconButton, Typography } from '@mui/material'
import React from 'react'
import { Products } from '../utils/ProductData'
import { red } from '@mui/material/colors';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteIcon from '@mui/icons-material/Favorite';
import "../App.css";
import { Favorite, FavoriteBorder } from '@mui/icons-material';

const Feed = () => {
  const item = Products[0];
  return (
    <Box flex="4" p={2} bgcolor={red} >
      {Products.map((item) => 
      <Card sx={{marginBottom: "10px"}}>
        <CardActionArea>
          <CardMedia
          
            component="img"
            image={item.thumbnail}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {item.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {item.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>

          <IconButton aria-label="add to favorites">
          <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color:"red"}} />} />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        </CardActions>
      </Card>
      )}
    </Box>
  )
}

export default Feed