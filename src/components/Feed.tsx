import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Checkbox, IconButton, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Products } from '../utils/ProductData'
import { red } from '@mui/material/colors';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteIcon from '@mui/icons-material/Favorite';
import "../App.css";
import { Favorite, FavoriteBorder } from '@mui/icons-material';

type products = {
title: string;
thumbnail: string;
description: string;

}


const Feed = () => {
  const [productData, setProductData] = useState<any>() ;

  const fetchProducts = async () => {
    try {
      const raw = await fetch('https://dummyjson.com/products?limit=10');
      const jsonData = await raw.json();
      console.log(jsonData);
      setProductData(jsonData?.products)
    } catch{
      return <></>
    }
  };
  useEffect(() => {
    fetchProducts();
  },[])
  return (
    <Box flex="4" p={2} bgcolor={red} >
      {productData && productData.map((item: any) =>
        <Card sx={{ marginBottom: "10px" }}>
          <CardActionArea>
            <CardMedia

              component="img"
              image={item.thumbnail}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item?.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item?.description}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>

            <IconButton aria-label="add to favorites">
              <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{ color: "red" }} />} />
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