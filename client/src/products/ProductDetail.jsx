// import React from "react";
// import { Box, Typography, Button, Card, CardMedia, CardContent } from "@mui/material";
// import { useParams } from "react-router-dom";

// const ProductDetails = ({ productProps }) => {
//    const { id } = useParams();

//   if (!productProps || productProps.length == 0) {
//     return <div>Loading...</div>;
//   }

//   const product = productProps.find((product) => product.id == id);

//   if (!product) {
//     return <div>Product not found!</div>;
//   }
//   return (
//     <Card sx={{ maxWidth: 600, mx: "auto", mt: 4 }}>
//       {/* <CardMedia component="img" height="300" image={productProps.image} alt={productProps.title} /> */}
//       <CardContent>
//         <Typography gutterBottom variant="h6" component="div">
//           {product.company}
//         </Typography>
//         <Typography gutterBottom variant="h5" component="div">
//           {product.productName}
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//           {product.description}
//         </Typography>
//         <Typography variant="h6">${product.price}</Typography>
//         <Typography variant="body2" color={product.availability === 'yes' ? 'green' : 'red'}>
//           {product.availability === 'yes' ? 'In Stock' : 'Out of Stock'}
//         </Typography>
//         <Typography variant="h6">Rating{product.rating}</Typography>
//         <Button variant="contained" color="primary" sx={{ mt: 2 }}>Add to Cart</Button>
//       </CardContent>
//     </Card>
//   );
// };

// export default ProductDetails;


import React from "react";
import { useParams } from "react-router-dom";
import { Box, Typography, Button, Card, CardMedia, CardContent, Chip } from "@mui/material";

const ProductDetails = ({ productProps }) => {
  const { id } = useParams();

  // Find the product based on id
  const product = productProps.find((product) => product.id == id);

  // If product is not found, display a message
  if (!product) {
    return <div>Product not found!</div>;
  }

  return (
    <Box sx={{ maxWidth: 800, mx: 'auto', mt: 4, p: 2 }}>
      <Card sx={{ display: 'flex' }}>
        <CardMedia
          component="img"
          sx={{ width: 400, objectFit: 'cover' }}
          image={product.imageUrl}
          alt={product.productName}
        />
        <CardContent>
          <Typography variant="h5" gutterBottom>
            {product.productName}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" gutterBottom>
            {product.company}
          </Typography>
          <Typography variant="body1" gutterBottom>
            {product.description}
          </Typography>
          <Typography variant="h6" gutterBottom>
            ${product.price}
          </Typography>
          <Chip
            label={product.availability === 'yes' ? 'In Stock' : 'Out of Stock'}
            color={product.availability === 'yes' ? 'success' : 'error'}
            size="small"
            sx={{ mb: 1 }}
          />
          <Typography variant="subtitle2" color="text.secondary" gutterBottom>
            Rating: {product.rating}
          </Typography>
          <Button variant="contained" color="primary" sx={{ mt: 2 }}>
            Add to Cart
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ProductDetails;

