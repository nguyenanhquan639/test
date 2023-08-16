const headerIcon = [
  "logo.png",
  "line.png",
  "home.png",
  "shop.png",
  "user.png",
  "more.png",
];
const headerTab = document.getElementById("header-tab");
headerIcon.forEach((item) => {
  const image = document.createElement("img");
  image.setAttribute("src", `./images/${item}`);
  image.setAttribute("class", "cursor-pointer");

  headerTab.appendChild(image);
});
