import React, { useState } from 'react';
import ProductsData from '../components/product-mock.json';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Container,TextField,
} from '@mui/material';

export const ProductCard = () => {
  const [products] = useState(ProductsData);

  const [minPrice, setMinPrice] = useState('');

  const filteredProducts = products.filter((item) => {
    const min = minPrice;
    return item.price >= min;
  });

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Product List
      </Typography>

      <TextField
          label="Enter minimum price"
          type="number"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
        />

      <Grid container spacing={4}>
        {filteredProducts.map((item) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="180"
                image={item.image}
                alt={item.mobile}
              />
              <CardContent>
                <Typography variant="h6" component="div">
                  {item.brand}
                </Typography>
                <Typography color="text.secondary">{item.mobile}</Typography>
                <Typography variant="body2" color="text.primary" sx={{ mt: 1 }}>
                  Price: ${item.price}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
