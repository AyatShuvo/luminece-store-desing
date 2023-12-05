// sales card silde show
let count = 1

setInterval(() => {
  document.getElementById("radio" + count).checked = true;
  count++;
  if (count > 4) {
    count = 1
  }
},5000);


// toggole mobile start

const btn = document.querySelector(".toggle")
const menu = btn.querySelector(".menu")
menu.addEventListener ("click", function(){
  if (menu.classList.contains("fa-bars")) {
    
    menu.classList.replace("fa-bars", "fa-times")
    
  } else {
    menu.classList.replace("fa-times", "fa-bars")
  }
  document.getElementById("myDropdown").classList.toggle("show");
  
})


// flash card section
const flashCard = document.querySelector(".flash-card");

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

    // Set the date we're counting down to

    const discount = data.prices.regular_price - data.prices.sale_price;
    const regularPrice = data.prices.regular_price == data.prices.sale_price;
    element.innerHTML = `
        <div class="card">
          ${
            regularPrice
              ? ""
              : `<div class="card-head">
          <h5>Deal Of The Day</h5>
          <div class= "deal-time ${i}" id="${data.id}" >
          
          </div>
          </div>`
          }
          

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
                <h3>${data.prices.sale_price}${data.prices.currency_prefix}</h3>
                ${
                  regularPrice
                    ? ""
                    : `<h5 class="regular-data"><del>${data.prices.regular_price}${data.prices.currency_prefix} </del></h5>`
                }
                  ${
                    discount
                      ? `<div><h5 class="dis">Safe${discount}${data.prices.currency_prefix}</h5></div>`
                      : ""
                  }  
              </div>
            </div>
          </div>
        </div>
        `;

    flashCard.append(element);



function generateRandomDate(
  from = new Date(2024, 0, 1),
  to = new Date(),
) {
  return new Date(
    from.getTime() +
      Math.random() * (to.getTime() - from.getTime()),
  );
}




let countDownDate = new Date(generateRandomDate()).getTime();
// let countDownDate = generateRandomDate();
    // Update the count down every 1 second
    let x = setInterval(function () {
      // Get today's date and time
      let now = new Date().getTime();

      // Find the distance between now and the count down date
      let distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Output the result in an element with id="demo"
      var times = document.getElementById(`${data.id}`)
      if(times){

      times.innerHTML = `<div class="time">
        <h2>${days}</h2>
        <h6>Days</h6>
      </div>
      <img src="./images/Header/Icon/Colon.png"  />
      <div class="time">
        <h2>${hours}</h2>
        <h6>hour</h6>
      </div>
      <img src="./images/Header/Icon/Colon.png" />
      <div class="time">
        <h2>${minutes}</h2>
        <h6>min</h6>
      </div>
      <img src="./images/Header/Icon/Colon.png"  />
      <div class="time">
        <h2>${seconds}</h2>
        <h6>sec</h6>
      </div>`;
    }

      // If the count down is over, write some text
      if (distance < 0) {
        clearInterval(x);
        document.querySelectorAll(".deal-time").innerHTML = "EXPIRED";
      }
    }, 1000);
  });
}

flashSalesShow();





// trending item start

const trendItem = document.querySelector(".trend-item");

async function trendingItem() {
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

async function trendingItemShow() {
  const datas = await trendingItem();

  datas.forEach((data, i) => {
    const element = document.createElement("div");
    element.className = `trend-container ${i}`;
    element.enterKeyHint = data.id;

    element.innerHTML = `
    <div class="trend-card">
      <img
        loading="lazy"
        decoding="async"
        srcset="${data.images[0].srcset}"
        sizes="${data.images[0].sizes}"
        width="552px"
        height="437px"
        alt="trend-img"
      />
      <div class="post-name">
        <div class="post-names">
          <h4>${data.name}</h4>
          <h5>${data.add_to_cart.description}</h5>
        </div>
  
        <div class="post-price">
          <h4>${data.prices.regular_price + data.prices.currency_prefix}</h4>
          <h5>Shop Now</h5>
        </div>
      </div>
    </div>
    `;

    if (i <= 2) {
      return trendItem.append(element);
    }
  });
}
trendingItemShow();







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
                    <h2>৳${Math.round(data.price - discountPrice)}</h2>
                    <h4><del>৳${data.price}</del></h4>
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