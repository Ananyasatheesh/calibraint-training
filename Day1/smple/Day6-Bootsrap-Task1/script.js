function imgClick(img) {
  const images = document.querySelectorAll(".image");
  images.forEach((image) => image.classList.remove("selected"));

  img.classList.add("selected");

  var originalImg = document.getElementById("originalImg");
  originalImg.src = img.src;
} 

var x = 0;
function button1() {
  if (x > 0) {
    x--;
    document.getElementById("cart-value").innerHTML = x;
    console.log(document.getElementById("cart-value").innerHTML);
  }
}
function button2() {
  x++;
  document.getElementById("cart-value").innerHTML = x;
}

function addedCart() {
  const msg = document.getElementById("cart-added-message");
  const cartValue = document.getElementById("cart-value").textContent;
  document.getElementById("cart-notification").innerHTML = cartValue;
  if (cartValue != 0) {
    if (confirm("Do you want to add AQUA ALLEGORIA to cart?")) {
      if (cartValue > 0) {
        msg.innerHTML = cartValue + " items added to cart";
      }
    } else {
      msg.style.display = "block";
    }
  } else {
    alert("cart cannot be empty");
  }
}
function openForm() {
  document.getElementById("review-form").classList.remove("d-none");
  document.getElementById("open-btn").classList.add("d-none");
}

function closeForm() {
  document.getElementById("review-form").classList.add("d-none");
  document.getElementById("open-btn").classList.remove("d-none");
}


function addToReview(event) {
  event.preventDefault();

  var name = document.getElementById("username").value;
  var star = document.getElementById("star").value;
  var review = document.getElementById("review").value;

  if (!name || !star || !review) {
    alert("Please fill in all fields.");
    return;
  }

  var newReview = {
    name: name,
    star: star,
    review: review,
  };

  var reviews = JSON.parse(localStorage.getItem("reviews")) || [];

  reviews.push(newReview);

  localStorage.setItem("reviews", JSON.stringify(reviews));

  displayReviews();

  document.getElementById("username").value = "";
  document.getElementById("star").value = "";
  document.getElementById("review").value = "";
  closeForm();
}

function displayReviews() {
  var reviewsContainer = document.querySelector(".review-content");

  if (!reviewsContainer) {
    console.error('Element with class "review-content" not found.');
    return;
  }

  var reviews = JSON.parse(localStorage.getItem("reviews")) || [];

  reviewsContainer.innerHTML = "";

  reviews.forEach(function (reviewData) {
    var reviewHTML = `
      <div class="customer-rating-1">
        <div class="customer-rating">
          <span class="customer-rating-star">${"&starf;".repeat(
            reviewData.star
          )}</span>
          <span class="customer-rating-name" style="margin-left: 20px; margin-top: 2px">${
            reviewData.name
          }</span>
        </div>
        <div class="customer-review" style="font-family: alegreya, sans-serif">${
          reviewData.review
        }</div>
        <div class="customer-review-date" style="margin-top: 10px">06-Sep-2024</div>
      </div> <br>
    `;
    reviewsContainer.innerHTML += reviewHTML;
  });
}

window.onload = function () {
  displayReviews();
};
