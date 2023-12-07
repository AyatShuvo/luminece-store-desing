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
      window.location.replace("http://127.0.0.1:5501/error.html");
    }
  }

  async function fetchShow() {
    const datas = await fetcing(windo2[1]);
    return datas;
  }

  fetchShow();
} catch (error) {
  console.log(error);
}
