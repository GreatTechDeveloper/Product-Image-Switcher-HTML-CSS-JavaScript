const productImg = document.getElementById("productImg");
const btn = document.getElementsByClassName("btn");

btn[0].addEventListener("click", (event) => {
  productImg.src = "image1.png";

  for (let bt of btn) {
    bt.classList.remove("active");
  }
  event.target.classList.add("active");
});

btn[1].addEventListener("click", (event) => {
  productImg.src = "image2.png";

  for (let bt of btn) {
    bt.classList.remove("active");
  }
  event.target.classList.add("active");
});

btn[2].addEventListener("click", (event) => {
  productImg.src = "image3.png";

  for (let bt of btn) {
    bt.classList.remove("active");
  }
  event.target.classList.add("active");
});
