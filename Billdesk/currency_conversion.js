// async function convertCurrency(amount, fromCurrency, toCurrency) {
//   const apiKey = "6c81cef99f2246418899fc84";
//   const response = await fetch(
//     `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${fromCurrency}`
//   );
//   const data = await response.json();
//   console.log(data);
//   const rate = data.conversion_rates[toCurrency];
//   return (amount * rate).toFixed(2); // Converted amount in INR
// }

// // Usage
// const amountInUSD = 200;
// convertCurrency(amountInUSD, "USD", "INR").then((inrAmount) => {
//   console.log(`Amount in INR: ₹${inrAmount}`);
// });

// const https = require("https");
// https
//   .get(
//     "https://www.taxrate.io/api/v1/rate/getratebyzip?api_key=12345678&zip=90210",
//     (resp) => {
//       let data = "";
//       resp.on("data", (chunk) => {
//         data += chunk;
//       });
//       resp.on("end", () => {
//         const json_data = JSON.parse(data);
//         console.log(json_data.rate);
//       });
//     }
//   )
//   .on("error", (err) => {
//     console.log("Error: " + err.message);
//   });

  // Your VATLayer API key (replace 'your_api_key_here' with your actual API key)
const apiKey = '7aa8e918040d7857748a07814e190681';  // Replace with your API key from VATLayer
const productPriceUSD = 100;  // The price of the product in USD

// API endpoint for VATLayer to get tax rate information for the UK
const apiUrl = `https://api.vatlayer.com/rates?access_key=${apiKey}&country=GB`;

// Function to get tax details and calculate VAT
async function getTaxDetails() {
  try {
    // Fetch VAT rates for the UK
    const response = await fetch(apiUrl);
    
    if (!response.ok) {
      throw new Error('Failed to fetch VAT data');
    }

    const data = await response.json();
    
    // Extract VAT rate for the UK
    const vatRate = data.rates.GB;  // GB represents the UK in the VATLayer API response
    
    if (!vatRate) {
      console.error('No VAT rate found for the UK');
      return;
    }

    // Calculate VAT and total price
    const vatAmount = (productPriceUSD * vatRate) / 100;  // VAT amount
    const totalPrice = productPriceUSD + vatAmount;  // Total price including VAT

    // Display the tax details on your website
    console.log(`Product Price: $${productPriceUSD}`);
    console.log(`VAT Rate for the UK: ${vatRate}%`);
    console.log(`VAT Amount: $${vatAmount.toFixed(2)}`);
    console.log(`Total Price (with VAT): $${totalPrice.toFixed(2)}`);

    // Optionally, you can display these details in your webpage UI
    document.getElementById('product-price').textContent = `$${productPriceUSD}`;
    document.getElementById('vat-rate').textContent = `${vatRate}%`;
    document.getElementById('vat-amount').textContent = `$${vatAmount.toFixed(2)}`;
    document.getElementById('total-price').textContent = `$${totalPrice.toFixed(2)}`;
    
  } catch (error) {
    console.error('Error:', error);
  }
}

// Call the function to get tax details and display them
getTaxDetails();


const fruits={
  name:"ananya",
  age:20,
  cmpy:"Calibraint",
  tenth:95,
  twevelth:90,
  clg:85
}

const map = ((map=>{fruits.map()}))
const bstPercentage = ((percentage)=>{fruits.filter(percentage>80)})

const 
console.log(bstPercentage);
