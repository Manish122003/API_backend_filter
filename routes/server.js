const { default: axios } = require("axios");
const express = require("express");
const router = express.Router();

//ALL DATA
router.get("/product", async (req, res) => {
  try {
    const result = await axios.get(`https://json-server.bytexl.app/products`);
    // console.log(result.data)
    console.log("Hi");
    return res.status(200).json({
      result: result.data,
    });
  } catch (error) {
    console.log(error);
  }
});

// ALL COMPANY DATA
router.get("/company", async (req, res) => {
  try {
    const result = await axios.get(`https://json-server.bytexl.app/companies`);
    return res.status(200).json({
      message: "DONE",
      result: result.data,
    });
  } catch (error) {
    console.log(error);
  }
});

//FILTER BY COMPANY NAME
router.get("/company/:companyname/products", async (req, res) => {
  try {
    console.log("dm");
    const { companyname } = req.params;
    const { minPrice, maxPrice } = req.query;
    console.log(companyname);
    
    let result;

    if (maxPrice & minPrice) {
        result = await axios.get(
          `https://json-server.bytexl.app/companies/${companyname}/products?minPrice=${minPrice}&maxPrice=${maxPrice}`
        );
      } else if (maxPrice & !minPrice) {
        result = await axios.get(
          `https://json-server.bytexl.app/companies/${companyname}/products?maxPrice=${maxPrice}`
        );
      } else if (!maxPrice & minPrice) {
        result = await axios.get(
          `https://json-server.bytexl.app/companies/${companyname}/products?minPrice=${minPrice}`
        );
      } else {
        result = await axios.get(
          `https://json-server.bytexl.app/companies/${companyname}products`
        );
      }

    
    return res.status(200).json({
      message: "DONE",
      result: result.data,
    });
  } catch (error) {
    console.log(error);
  }
});

//ALL CATEGORY DATA
router.get("/category", async (req, res) => {
  try {
    const result = await axios.get(`https://json-server.bytexl.app/categories`);
    return res.status(200).json({
      message: "DONE",
      result: result.data,
    });
  } catch (error) {
    console.log(error);
  }
});

//FILTER BY CATEGORY NAME
router.get("/category/:categoryname/products", async (req, res) => {
  try {
    console.log("dm");
    const { categoryname } = req.params;
    const { minPrice, maxPrice } = req.query;
    console.log(categoryname);
    const result = await axios.get(
      `https://json-server.bytexl.app/categories/${categoryname}/products?minPrice=${minPrice}&maxPrice=${maxPrice}`
    );
    return res.status(200).json({
      message: "DONE",
      result: result.data,
    });
  } catch (error) {
    console.log(error);
  }
});

//FILTETR BY BOTH CATEGORY AND COMPANY
router.get("/companies/:companyname/categories/:categoryname/products",
  async (req, res) => {
    try {
      console.log("dm");
      const { categoryname, companyname } = req.params;
      const { minPrice, maxPrice } = req.query;
      let result;
      if (maxPrice & minPrice) {
        result = await axios.get(
          `https://json-server.bytexl.app/companies/${companyname}/categories/${categoryname}/products?minPrice=${minPrice}&maxPrice=${maxPrice}`
        );
      } else if (maxPrice & !minPrice) {
        result = await axios.get(
          `https://json-server.bytexl.app/companies/${companyname}/categories/${categoryname}/products?maxPrice=${maxPrice}`
        );
      } else if (!maxPrice & minPrice) {
        result = await axios.get(
          `https://json-server.bytexl.app/companies/${companyname}/categories/${categoryname}/products?minPrice=${minPrice}`
        );
      } else {
        result = await axios.get(
          `https://json-server.bytexl.app/companies/${companyname}/categories/${categoryname}/products`
        );
      }

      return res.status(200).json({
        message: "DONE",
        result: result.data,
      });
    } catch (error) {
      console.log(error);
    }
  }
);

//original //FILTETR BY BOTH CATEGORY AND COMPANY
// router.get(
//     "/companies/:companyname/categories/:categoryname/products",
//     async (req, res) => {
//       try {
//         console.log("dm");
//         const { categoryname, companyname } = req.params;
//         const { minPrice, maxPrice } = req.query;
//
//           const result = await axios.get(
//               `https://json-server.bytexl.app/companies/${companyname}/categories/${categoryname}/products?minPrice=${minPrice}&maxPrice=${maxPrice}`
//             );
//

//         return res.status(200).json({
//           message: "DONE",
//           result: result.data,
//         });
//       } catch (error) {
//         console.log(error);
//       }
//     }
//   );

// //FILTER BY AVAILABILITY (YES/NO)
// router.get("/availability", async (req, res) => {
//   try {
//     console.log("dm");
//     const { category, company, availability } = req.query;
//     const result = await axios.get(
//       `https://json-server.bytexl.app/companies/${company}/categories/${category}/products?availability=${availability}`
//     );
//     return res.status(200).json({
//       message: "DONE",
//       result: result.data,
//     });
//   } catch (error) {
//     console.log(error);
//   }
// });

// //FILTER BY MIN PRICE
// router.get("/minprice", async (req, res) => {
//   try {
//     console.log("dm");
//     const { category, company, minPrice } = req.query;
//     const result = await axios.get(
//       `https://json-server.bytexl.app/companies/${company}/categories/${category}/products?minPrice=${minPrice}`
//     );
//     return res.status(200).json({
//       message: "DONE",
//       result: result.data,
//     });
//   } catch (error) {
//     console.log(error);
//   }
// });

//FILTER BY MAX PRICE
// router.get("/maxprice", async (req, res) => {
//   try {
//     console.log("dm");
//     const { category, company, maxPrice } = req.query;
//     const result = await axios.get(
//       `https://json-server.bytexl.app/companies/${company}/categories/${category}/products?maxPrice=${maxPrice}`
//     );
//     return res.status(200).json({
//       message: "DONE",
//       result: result.data,
//     });
//   } catch (error) {
//     console.log(error);
//   }
// });

//FILTER BY MIN AND MAX PRICE
// companies/AMZ/categories/Laptop/products?top=5&minPrice=1&maxPrice=10000
// router.get("/maxprice", async (req, res) => {
//   try {
//     console.log("dm");
//     const { category, company, minPrice, maxPrice } = req.query;
//     const result = await axios.get(
//       `https://json-server.bytexl.app/companies/${company}/categories/${category}/products?top=5&minPrice=${minPrice}&maxPrice=${maxPrice}`
//     );
//     return res.status(200).json({
//       message: "DONE",
//       result: result.data.slice(0, 5),
//     });
//   } catch (error) {
//     console.log(error);
//   }
// });

module.exports = router;
