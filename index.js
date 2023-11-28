// fetch('https://dummyjson.com/products')
// .then(res => res.json())
// .then(json => console.log(json))
const top100Item = document.querySelector(".top100-item");

async function top100Fetch() {
  try {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    return data.products;
  } catch (error) {
    console.log(error);
  }
}

console.log(top100Item);
async function dataShow() {
  const datas = await top100Fetch();

  datas.forEach((data, i) => {
    const element = document.createElement("div");
    element.className = `top100-container ${i}`;
    element.enterKeyHint = data.id;
    const discountPrice = (data.discountPercentage / data.price) * 100;
    element.innerHTML = `
        <div class="top100-card">
            <img 
                sizes ="(max-width:500px) 100vw,500px"
                loading= "lazy"
                decoding= "async" 
                height = "350px"
                width = "500px"
                class="product-img"
                src= "${data.thumbnail}"
                alt="${data.title}"
            />

            <div class="all-details">
                <div class="title-div">
                <div class="top100-title">
                    <h4>${data.title}</h4>
                    <p>${data.category} - ${data.brand}</p>
                </div>
                <i class="fa-regular fa-heart"></i>
                </div>

                <div class="starbig">
                    <img src="./images/Header/Icon/starbig.png" alt="star" />
                    <img src="./images/Header/Icon/starbig.png" alt="star" />
                    <img src="./images/Header/Icon/starbig.png" alt="star" />
                    <img src="./images/Header/Icon/starbig.png" alt="star" />
                    <h5>(${data.rating})</h5>
                </div>

                <div class="top100-price">
                    <h2>${Math.round(data.price - discountPrice)}</h2>
                    <h4><del>${data.price}</del></h4>
                <div>
                    <h4 class="discount">- ${data.discountPercentage}%</h4>
                </div>
                </div>
            </div>
            </div>

        `;

    if (i < 4) {
      return top100Item.append(element);
    }
  });
}

dataShow();

const flashCard = document.querySelector(".flash-card");
console.log(flashCard);

async function flashsalesFetch() {
  try {
    const response = await fetch(
      "https://shop.mercegrower.com/wp-json/wc/store/v1/products"
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

async function flashSalesShow() {
  const datas = await flashsalesFetch();

  datas.forEach((data, i) => {
    const element = document.createElement("div");
    element.className = `div-container ${i}`;
    element.enterKeyHint = data.id;
    console.log(data);

    const discount = data.prices.regular_price - data.prices.sale_price;
    console.log(discount);

    element.innerHTML = `
        <div class="card">
          <div class="card-head">
            <h5>Deal Of The Day</h5>
            <div class="deal-time">
              <div class="time">
                <h2>12</h2>
                <h6>hour</h6>
              </div>
              <img src="./images/Header/Icon/Colon.png" width="" />
              <div class="time">
                <h2>43</h2>
                <h6>min</h6>
              </div>
              <img src="./images/Header/Icon/Colon.png" alt="" />
              <div class="time">
                <h2>12</h2>
                <h6>sec</h6>
              </div>
            </div>
          </div>

          <img
            sizes="${data.images[0].sizes}"
            loading="lazy"
            decoding="async"
            srcset="${data.images[0].srcset}"
            class="product"
            width = "241px"
            height = "229px"
            alt="card-img"
          />

          <div class="card-buttom">
            <div class="title">
              <h3>${data.name}</h3>
              <h6>${data.add_to_cart.description}</h6>
            </div>

            <div class="star-price">
              <div class="star">
                <img src="./images/Header/Icon/star.png" alt="" />
                <img src="./images/Header/Icon/star.png" alt="" />
                <img src="./images/Header/Icon/star.png" alt="" />
                <img src="./images/Header/Icon/star.png" alt="" />
                <h6>(${data.average_rating})</h6>
              </div>

              <div class="price">
                <h3>${data.prices.currency_prefix} ${data.prices.price} </h3>
                <h5><del>${data.prices.currency_prefix} ${data.prices.regular_price}</del></h5>
                <div>
                  <h5>${data.prices.currency_prefix} ${discount}</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        `;

    flashCard.append(element);
  });
}

flashSalesShow();
