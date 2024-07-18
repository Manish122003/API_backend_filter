// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
// import PhoneImage from '../../images/Phone.jpeg';
// import ComputerImage from '../../images/computer.jpeg';
// import TVImage from '../../images/TV.jpeg';
// import EarphoneImage from '../../images/Earphone.jpeg';
// import TabletImage from '../../images/Tablet.jpeg';
// import ChargerImage from '../../images/Charger.jpeg';
// import MouseImage from '../../images/Mouse.jpeg';
// import KeypadImage from '../../images/Keypad.jpeg';
// import BluetoothImage from '../../images/Bluetooth.jpeg';
// import PendriveImage from '../../images/Pendrive.jpeg';
// import RemoteImage from '../../images/Remote.jpeg';
// import SpeakerImage from '../../images/Speaker.jpeg';
// import HeadsetImage from '../../images/Headset.jpeg';
// import LaptopImage from '../../images/Laptop.jpeg';

// // Category to image mapping
// const categoryImages = {
//   Phone: PhoneImage,
//   Computer: ComputerImage,
//   TV: TVImage,
//   Earphone: EarphoneImage,
//   Tablet: TabletImage,
//   Charger: ChargerImage,
//   Mouse: MouseImage,
//   Keypad: KeypadImage,
//   Bluetooth: BluetoothImage,
//   Pendrive: PendriveImage,
//   Remote: RemoteImage,
//   Speaker: SpeakerImage,
//   Headset: HeadsetImage,
//   Laptop: LaptopImage,
// };

// const ProductCard = ({ product }) => {
//   const productImage = categoryImages[product.category] || product.imageUrl;

//   return (
//     <Card sx={{ maxWidth: 345, m: 2 }}>
//       <CardMedia
//         component="img"
//         // height="40"
//         sx={{height:'200px',objectFit:'contain'}}
//         image={productImage}
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
//         <Typography variant="h6">Rating{product.rating}</Typography>
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
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';

const ProductCard = ({ product }) => {
  return (
    <Card sx={{ maxWidth: 345, m: 2 }}>
      <CardMedia
        component="img"
        sx={{height:'200px', objectFit:'contain'}}
        image={product.imageUrl}  // Use the product's imageUrl
        alt={product.productName}
      />
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
        <Typography variant="h6">Rating {product.rating}</Typography>
        <Button component={Link} to={`/product/${product.id}`} variant="contained" sx={{ mt: 2 }}>
          View Details
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
