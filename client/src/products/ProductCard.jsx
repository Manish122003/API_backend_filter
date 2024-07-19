// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';

// const ProductCard = ({ product }) => {
//   return (
//     <Card sx={{ maxWidth: 345, m: 2 }}>
//       <CardMedia
//         component="img"
//         sx={{height:'200px', objectFit:'contain'}}
//         image={product.imageUrl}  // Use the product's imageUrl
//         alt={product.productName}
//       />
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
//         <Typography variant="h6">Rating {product.rating}</Typography>
//         <Button component={Link} to={`/product/${product.id}`} variant="contained" sx={{ mt: 2 }}>
//           View Details
//         </Button>
//       </CardContent>
//     </Card>
//   );
// };

// export default ProductCard;


import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardMedia, Typography, Button, Box, Chip } from '@mui/material';

const ProductCard = ({ product }) => {
  return (
    <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%', boxShadow: 3 }}>
      <CardMedia
        component="img"
        sx={{ height: 250, objectFit: 'cover', borderBottom: '1px solid #f0f0f0' }}
        image={product.imageUrl}  // Use the product's imageUrl
        alt={product.productName}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="subtitle2" component="div" color="text.secondary">
          {product.company}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {product.productName}
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
          {product.description}
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography variant="h6">${product.price}</Typography>
          <Chip
            label={product.availability === 'yes' ? 'In Stock' : 'Out of Stock'}
            color={product.availability === 'yes' ? 'success' : 'error'}
            size="small"
          />
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <Typography variant="body2" color="text.secondary">
            Rating:
          </Typography>
          <Typography variant="subtitle2" color="text.secondary" sx={{ ml: 1 }}>
            {product.rating}
          </Typography>
        </Box>
        <Button
          component={Link}
          to={`/product/${product.id}`}
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 'auto' }}
        >
          View Details
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;


