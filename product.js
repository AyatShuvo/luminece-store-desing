try {
  const windo15 = window.location.search;

  if (!windo15) {
    window.location.replace("http://127.0.0.1:5501/error.html");
  }
  const windo2 = window.location.href.split("?");

  async function fetcing(id) {
    const response = await fetch(
      `https://shop.mercegrower.com/wp-json/wc/store/v1/products/${id}`
    );
    if (response.status == 200) {
      const data = await response.json();
      return data;
    } else {
      const data = 404;
      return data;
    }
  }
  const productHero = document.querySelector(".product-hero-section");

  async function fetchShow() {
    const data = await fetcing(windo2[1]);
    if (data == 404) {
      window.location.replace("http://127.0.0.1:5501/error.html");
    } else {
      const element = document.createElement("div");
      element.className = `product-card `;
      element.innerHTML = `
      <div class="product-hero-img-left">
      <div class="div-img-left">
        <img             
        sizes="${data.images[0].sizes}"
        loading="lazy"
        decoding="async"
        srcset="${data.images[0].srcset}" 
        width="170px" 
        height="192px">
  
        <img src="./images/item-image/product-2.jpeg" width="170px" height="192px">
        <img src="./images/item-image/product-3.jpeg" width="170px" height="192px">
        <img src="./images/item-image/product-4.jpeg" width="170px" height="192px">
        <img src="./images/item-image/product-5.jpeg" width="170px" height="192px">
      </div>
  
      <div class="div-img-right">
        <img src=            
        sizes="${data.images[0].sizes}"
        loading="lazy"
        decoding="async"
        srcset="${data.images[0].srcset}"
        class="product"
        alt="card-img" 
        width="505px" 
        height="670px" 
        style="object-fit: cover">
      </div>
      
    </div>
    
    <div class="product--hero-details-right">
      <div class="product-h1">
        <div class="product-name-price">
          <h1>${data.name}</h1>
          <h2>${data.prices.sale_price}${data.prices.currency_prefix}</h2>
        </div>
        <div class="product-react">
          <i class="fa-solid fa-heart"></i>
        </div>  
      </div>
  
      <div class="product-h2">
        <p>size</p>
        <div>XS</div>
        <div>S</div>
        <div>M</div>
        <div>L</div>
        <div>XL</div>
      </div>
  
      <div class="product-h3">
        <p>Color</p>
        <div class="color-1"></div>
        <div class="color-2"></div>
        <div class="color-3"></div>
        <div class="color-4"></div>
      </div>
  
      <div class="product-h4">
        <p class="shipping">Shipping</p>
        <div class="shipping-days">
          <p>Free Shipping To Victoria Teritory</p>
          <p>Delivery Time: 14-17 days</p>
        </div>
      </div>
  
      <div class="product-h5">
        <p class="quantity">Quantity</p>
        <div class="quantits">
          <p >- 2 +</p>
        </div>
        <div>
          <p>50 Available/ 104 sold</p>
        </div>
        
      </div>
  
      <div class="product-h6">
        <h2>${data.prices.regular_price}${data.prices.currency_prefix}</h2>
        <hr>
        <p>${data.add_to_cart.description}</p>
  
      </div>
  
      <div class="product-h7">
        
          <div class="shop-button">
            <p>Shop Now</p>
          </div>
          <div class="add-button">
            <p>Add to Basket</p>
          </div>
        
      </div>
  
    </div>
      `;
      productHero.append(element);
    }
  }

  fetchShow();
} catch (error) {
  console.log(error);
}
