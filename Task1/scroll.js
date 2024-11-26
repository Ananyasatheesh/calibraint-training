ScrollReveal({
  reset: true,
  duration: 2500,
  distance: "60px",
  delay: 50,
});

ScrollReveal().reveal(
  ".product-image, .wrapper, #related-products, #product-details, .rating-scroll, .rating-content",
  { delay: 120, origin: "left" }
);

ScrollReveal().reveal(
  "nav, .title, .short-des, .plus, .add-cart, #cart-value",
  { delay: 80, origin: "top" }
);

ScrollReveal().reveal("#product-details, .rating-content, .rating-scroll,", {
  delay: 50,
  origin: "left",
});
ScrollReveal().reveal("title, .details-table, .review-content", { delay: 50 });

ScrollReveal().reveal(".short-desc, footer", { delay: 50, origin: "bottom" });
