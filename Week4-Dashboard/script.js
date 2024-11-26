function toggleMenu(menuId) {
  // Get the selected menu
  const selectedMenu = document.getElementById(menuId);
  const sidebar = document.getElementById("sidebar");
  const cardsAll = document.getElementById("cards-all");
  const barGraph = document.getElementById("bar-graph");
  const cards = document.getElementById("cards");
  const totalSales = document.querySelector(".total-sales");
  const totalOrders = document.querySelector(".total-orders");
  const totalPending = document.querySelector(".total-pending");
  const cardHeader = document.querySelector(".card-header");
  const barPieChart = document.getElementById("bar-pie-chart");
  const pieChart = document.querySelector(
    ".pie-chart .chart-container .my-chart"
  );
  const barContent = document.querySelector(".bar-font");
  if (cardsAll.style.display !== "hidden") {
    const menus = document.querySelectorAll(".menu ul");
    menus.forEach((menu) => {
      if (menu.style.display === "block") {
        // cardsAll.style.left = "150px";
        const isLap = window.matchMedia("(min-width: 1030px)").matches;
        if (isLap) {
          cardsAll.style.left = "200px";
          cardsAll.style.width = "79%";
          barGraph.style.width = "50%";
          cards.style.justifyContent = "space-around";
          // barPieChart.style.marginLeft = "50px";
        } else if (
          window.matchMedia("(min-width: 768px) and (max-width: 1024px)")
            .matches
        ) {
          // console.log(menu);
          cardsAll.style.left = "15%";
          cardsAll.style.top = "8%";
          sidebar.style.width = "37%";
          barGraph.style.width = "90%";
          cards.setAttribute("style", "width: 94% !important;");
          barGraph.style.width = "60%";
          barPieChart.style.width = "87%";
        } else if (
          window.matchMedia("(min-width:0px) and (max-width:767px)").matches
        ) {
          // cardsAll.style.left = "70px";
          // cards.style.left = "70px";
          cardsAll.setAttribute("style", "left: 70px !important;");
          cards.setAttribute("style", "left: 70px !important;");
          cardsAll.setAttribute("style", "width: 100% !important;");
          cardsAll.setAttribute("style", "display: block !important;");
          totalOrders.setAttribute("style", "height: 150px !important;");
          totalOrders.setAttribute("style", "width: 100% !important;");
          totalOrders.setAttribute("style", "font-size: 10px !important;");
          totalOrders.setAttribute("style", "padding: 20px !important;");
          cardHeader.setAttribute("style", "left: 70px !important;");
          barPieChart.setAttribute("style", "left: 70px !important;");
          pieChart.setAttribute("style", "width: 100px !important;");

          totalOrders.setAttribute(
            "style",
            "box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px!important;"
          );
        }
      } else if (menu.style.display !== "block") {
        console.log(menu);
        if (
          window.matchMedia("(min-width: 768px) and (max-width: 1024px)")
            .matches
        ) {
          cardsAll.style.left = "250px";
        }
        const isLap = window.matchMedia("(min-width: 1030px)").matches;
        if (isLap) {
          cardsAll.style.left = "27%";
          cardsAll.style.width = "65%";
        }
        if (
          window.matchMedia("(min-width:0px) and (max-width:767px)").matches
        ) {
          // cardsAll.style.left = "150px";
          // cards.style.left = "150px";
          cardsAll.setAttribute("style", "left: 150px !important;");
          cards.setAttribute("style", "left: 150px !important;");
          // cardsAll.style.width="10%";
          cardsAll.setAttribute("style", "width: 50% !important;");
          cardHeader.setAttribute("style", "left: 150px !important;");
          barPieChart.setAttribute("style", "left: 150px !important;");
          totalOrders.setAttribute("style", "height: 70px !important;");
          totalOrders.setAttribute("style", "width: 10% !important;");
          totalOrders.setAttribute(
            "style",
            "box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px!important;"
          );
          totalOrders.setAttribute("style", "font-size: 10px !important;");
          pieChart.setAttribute("style", "width: 100px !important;");
          barContent.setAttribute("style", "font-size: 12px !important;");

          // totalOrders.style.height="70px";
        }
        // cardsAll.style.left = "25%";
        // cardsAll.style.top = "8%";
        // cardsAll.style.width = "70%";
        // barGraph.style.width = "100%";
        // barPieChart.style.width = "100%";
        // barPieChart.style.maxWidth = "100vw";
        // cards.style.marginLeft = "30px";
        // // cards.style.justifyContent = "flex-start";
        // barPieChart.style.justifyContent = "flex-start";
      }
    });
  }
  const menuList = selectedMenu.querySelector("ul");
  // console.log(menuList)
  if (menuList.style.display === "block") {
    menuList.style.display = "none";
  } else {
    //   const menus = document.querySelectorAll(".menu ul");
    //   const menuListAll = document.querySelectorAll(".menu");
    //   menus.forEach((menu) => {
    //     menu.style.display = "none";
    //   });
    menuList.style.display = "block";
  }
}
function displayContent() {
  const cardsAll = document.getElementById("cards-all");
  cardsAll.style.display = "block";
  const menus = document.querySelectorAll(".menu");
  const selectedMenu = document.getElementById(menuId);

  const menuList = selectedMenu.querySelector("ul");
  console.log(menuList);
  if (menuList.style.display === "block") {
    menuList.style.display = "none";
  } else if (menuList.style.display !== "block") {
    const menus = document.querySelectorAll(".menu ul");
    const menuListAll = document.querySelectorAll(".menu");
    menus.forEach((menu) => {
      menu.style.display = "none";
    });
    menuList.style.display = "block";
  }
  // console.log(menus);
  // menus.classList.remove("box-shadow");
}

function mobileMenu() {
  const sidebar = document.getElementById("sidebar");

  // Toggle between showing and hiding the sidebar
  if (sidebar.style.display === "block") {
    sidebar.setAttribute("style", "display: none !important;");
  } else {
    sidebar.setAttribute("style", "display: block !important;");
    sidebar.setAttribute("style", "z-index: 10 !important;");
  }
}
