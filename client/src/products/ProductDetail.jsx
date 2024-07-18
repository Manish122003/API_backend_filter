import React from "react";
import { Box, Typography, Button, Card, CardMedia, CardContent } from "@mui/material";
import { useParams } from "react-router-dom";

const ProductDetails = ({ productProps }) => {
   const { id } = useParams();

  if (!productProps || productProps.length == 0) {
    return <div>Loading...</div>;
  }

  const product = productProps.find((product) => product.id == id);

  if (!product) {
    return <div>Product not found!</div>;
  }
  return (
    <Card sx={{ maxWidth: 600, mx: "auto", mt: 4 }}>
      {/* <CardMedia component="img" height="300" image={productProps.image} alt={productProps.title} /> */}
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {product.company}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {product.productName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>
        <Typography variant="h6">${product.price}</Typography>
        <Typography variant="body2" color={product.availability === 'yes' ? 'green' : 'red'}>
          {product.availability === 'yes' ? 'In Stock' : 'Out of Stock'}
        </Typography>
        <Typography variant="h6">Rating{product.rating}</Typography>
        <Button variant="contained" color="primary" sx={{ mt: 2 }}>Add to Cart</Button>
      </CardContent>
    </Card>
  );
};

export default ProductDetails;
