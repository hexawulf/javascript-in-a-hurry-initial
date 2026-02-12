// main.js 
// ---- Constants Section ----

const weatherAPIKey = "600a269dd85fd49784b08c1a4140c312";
const weatherAPIUrl = `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=${weatherAPIKey}&units=metric`;

const galleryImages = [
  { src: "./assets/gallery/image1.jpg", alt: "Thumbnail image 1" },
  { src: "./assets/gallery/image2.jpg", alt: "Thumbnail image 2" },
  { src: "./assets/gallery/image3.jpg", alt: "Thumbnail image 3" },
];

const products = [

    {
      title: "AstroFiction",
      author: "John Doe",
      price: 49.9,
      image: "./assets/products/img6.png"
    },
    {
      title: "Space Odissey",
      author: "Marie Anne",
      price: 35,
      image: "./assets/products/img1.png"
    },
    {
      title: "Doomed City",
      author: "Jason Cobert",
      price: 0,
      image: "./assets/products/img2.png"
    },
    {
      title: "Black Dog",
      author: "John Doe",
      price: 85.35,
      image: "./assets/products/img3.png"
    },
    {
      title: "My Little Robot",
      author: "Pedro Paulo",
      price: 0,
      image: "./assets/products/img5.png"
    },
    {
      title: "Garden Girl",
      author: "Ankit Patel",
      price: 45,
      image: "./assets/products/img4.png"
    }

];

// ---- Menu Section ----
function menuHandler() {
  const openBtn = document.querySelector("#open-nav-menu");
  const closeBtn = document.querySelector("#close-nav-menu");
  const navWrapper = document.querySelector("header nav .wrapper");

  if (!openBtn || !closeBtn || !navWrapper) return;

  openBtn.addEventListener("click", () => navWrapper.classList.add("nav-open"));
  closeBtn.addEventListener("click", () => navWrapper.classList.remove("nav-open"));
}

function celsiusToFahr(temperature) {
  return temperature * (9 / 5) + 32;
}

// ---- Greeting Section ----
function greetingHandler() {
  const greetingEl = document.querySelector("h1#greeting");

  if (!greetingEl) return;

  let greetingText;
  const currentHour = new Date().getHours();

  if (currentHour < 12) {
    greetingText = "Good morning!";
  } else if (currentHour < 18) {
    greetingText = "Good afternoon!";
  } else {
    greetingText = "Good evening!";
  }

  greetingEl.innerHTML = greetingText;
}

// ---- Weather Section ---
function weatherHandler() {
  navigator.geolocation.getCurrentPosition(position => {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    let apiUrl = weatherAPIUrl.replace("{lat}", latitude).replace("{lon}", longitude); 
    
    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const weatherCondition = data.weather[0].description;
      const userLocation = data.name;
      const temperature = data.main.temp;
      try {
        const weatherEl = document.querySelector("p#weather");
        const weatherGroup = document.querySelector(".weather-group");

        if (!weatherEl || !weatherGroup) return;

        const celsiusText = `The weather is ${weatherCondition} in ${userLocation} and it's ${temperature.toFixed(1)} Degrees Celsius outside.`;
        const fahrText = `The weather is ${weatherCondition} in ${userLocation} and it's ${celsiusToFahr(temperature).toFixed(1)} Degrees Fahrenheit outside.`;

        weatherEl.innerHTML = celsiusText;

        weatherGroup.addEventListener("click", (e) => {
          if (e.target?.id === "celsius") {
            weatherEl.innerHTML = celsiusText;
          } else if (e.target?.id === "fahr") {
            weatherEl.innerHTML = fahrText;
          }
        });
      } catch (error) {
        console.error("Error fetching weather data:", error);
        document.querySelector("p#weather").innerHTML = "Unable to retrieve weather information at this time.";
      }
    });
  });
}

// ---- Clock Section ----
function clockHandler() {
  const hoursEl = document.querySelector("span[data-time=hours]");
  const minutesEl = document.querySelector("span[data-time=minutes]");
  const secondsEl = document.querySelector("span[data-time=seconds]");

  if (!hoursEl || !minutesEl || !secondsEl) return;

  const tick = () => {
    const t = new Date();
    hoursEl.textContent = String(t.getHours()).padStart(2, "0");
    minutesEl.textContent = String(t.getMinutes()).padStart(2, "0");
    secondsEl.textContent = String(t.getSeconds()).padStart(2, "0");
  };

  tick();
  setInterval(tick, 1000);
}
// ---- Gallery Section  ----
function galleryHandler() {
  const mainImage = document.querySelector("#gallery > img");
  const thumbnails = document.querySelector("#gallery .thumbnails");

  if (!mainImage || !thumbnails || galleryImages.length === 0) return;

  mainImage.src = galleryImages[0].src;
  mainImage.alt = galleryImages[0].alt;

  thumbnails.innerHTML = "";

  galleryImages.forEach((image, index) => {
    const thumb = document.createElement("img");
    thumb.src = image.src;
    thumb.alt = image.alt;
    thumb.dataset.arrayIndex = String(index);
    thumb.dataset.selected = index === 0 ? "true" : "false";

    thumb.addEventListener("click", (e) => {
      const selectedIndex = Number(e.currentTarget.dataset.arrayIndex);
      const selectedImage = galleryImages[selectedIndex];

      if (!selectedImage) return;

      mainImage.src = selectedImage.src;
      mainImage.alt = selectedImage.alt;

      thumbnails.querySelectorAll("img").forEach((img) => {
        img.dataset.selected = "false";
      });

      e.currentTarget.dataset.selected = "true";
    });

    thumbnails.appendChild(thumb);
  });
}
// ---- Products Section ----

function populateProducts(productList) {
let productsSection = document.querySelector(".products-area");
// Clear previous products
productsSection.textContent = "";
  // Run a loop through the products array and create the HTML element ("product-item") for each product
  productList.forEach(function(product, index) {

    // Create the product HTML element
    let productElm = document.createElement("div");
    productElm.classList.add("product-item");
    
    // Create and append the product image
    let productImage = document.createElement("img"); 
    productImage.src = product.image;
    productImage.alt = "Image for "  + product.title;

    // Create the product details container
    let productDetails = document.createElement("div");
    productDetails.classList.add("product-details");

    // Create the h3 product title
    let productTitle = document.createElement("h3");
    productTitle.classList.add("product-title");
    productTitle.textContent = product.title;

    // Create the p product author
    let productAuthor = document.createElement("p");
    productAuthor.classList.add("product-author");
    productAuthor.textContent = product.author;

    // Create the p price title
    let priceTitle = document.createElement("p");
    priceTitle.classList.add("price-title");
    priceTitle.textContent = "Price";

    // Create the p product price
    let productPrice = document.createElement("p");
    productPrice.classList.add("product-price");
    // Check if price is 0
    productPrice.textContent = product.price === 0 ? "Free" : "$ " + product.price.toFixed(2);

    // Add all product details to productDetails container
    productDetails.append(productTitle);
    productDetails.append(productAuthor);
    productDetails.append(priceTitle);
    productDetails.append(productPrice);
    
    // Add all HTML child elements to productElm
    productElm.append(productImage);
    productElm.append(productDetails);

    // Add complete individual product to the products section
    productsSection.append(productElm);
  
  
  
  });
}

function productsHandler() {
  
  let productsSection = document.querySelector(".products-section");
  // Run a loop through the products array and create the HTML element ("product-item") for each product
  products.forEach(function(product, index) {

    // Create the product HTML element
    let productElm = document.createElement("div");
    productElm.classList.add("product-item");
    
    // Create and append the product image
    let productImage = document.createElement("img"); 
    productImage.src = product.image;
    productImage.alt = "Image for "  + product.title;

    // Create the product details container
    let productDetails = document.createElement("div");
    productDetails.classList.add("product-details");

    // Create the h3 product title
    let productTitle = document.createElement("h3");
    productTitle.classList.add("product-title");
    productTitle.textContent = product.title;

    // Create the p product author
    let productAuthor = document.createElement("p");
    productAuthor.classList.add("product-author");
    productAuthor.textContent = product.author;

    // Create the p price title
    let priceTitle = document.createElement("p");
    priceTitle.classList.add("price-title");
    priceTitle.textContent = "Price";

    // Create the p product price
    let productPrice = document.createElement("p");
    productPrice.classList.add("product-price");
    // Check if price is 0
    productPrice.textContent = product.price === 0 ? "Free" : "$ " + product.price.toFixed(2);

    // Add all product details to productDetails container
    productDetails.append(productTitle);
    productDetails.append(productAuthor);
    productDetails.append(priceTitle);
    productDetails.append(productPrice);
    
    // Add all HTML child elements to productElm
    productElm.append(productImage);
    productElm.append(productDetails);

    // Add complete individual product to the products section
    productsSection.append(productElm);
  
  
  
  });
}


let totalProducts = products.length;

let freeProducts = products.filter(item => !item.price || item.price === 0);



let paidProducts = products.filter(item => item.price > 0);



document.querySelector(".products-filter label[for=all] span.product-amount").textContent = totalProducts;
document.querySelector(".products-filter label[for=paid] span.product-amount").textContent = paidProducts.length;
document.querySelector(".products-filter label[for=free] span.product-amount").textContent = freeProducts.length;


let productsFilter = document.querySelector(".products-filter");

productsFilter.addEventListener("click", function(e) {
  if (e.target.id === "all") {
    populateProducts(products);
  } else if (e.target.id === "paid") {
    populateProducts(paidProducts);
  } else if (e.target.id === "free") {
    populateProducts(freeProducts);
  }
});

// ---- Footer Section ---
// 
function footerHandler() {
let currentYear = new Date().getFullYear();
document.querySelector("footer").textContent = `© ${currentYear} All rights reserved.`;





}


// ---- Page Load ----
menuHandler();
greetingHandler();
clockHandler();
galleryHandler();
populateProducts(products);
footerHandler();
weatherHandler();