function reloadPage() {
  var scrollPosition = window.scrollY || window.pageYOffset;
  window.location.reload();
  window.scrollTo(0, scrollPosition);
}

let categoriesHTML = '';

categories.forEach(element => {
  categoriesHTML+=`
  <li class="nav-link">
  <a href="">
    <i class='${element.icon}'></i>
    <span class="text nav-text">${element.name}</span>
  </a>
  </li>`
});
document.querySelector('.js-menu-links').innerHTML = categoriesHTML;


let MenuHTML = '';

menu.forEach(element => {
  MenuHTML += `<div class="container">
  <div class="picture">
      <img src="images/${element.id}.jpg" >
  </div>
  <div class="text">
    <div class="title">
        <a href=""></a>
    </div>
    <div class="author">
        <i class="fa-solid fa-user"></i>
        
        <div class="after-user-text">${element.username}</div>
        
        <i class="fa-solid fa-calendar-days"></i>
        <div class="after-user-text">${element.date}</div>
    </div>
    <div class="description">
    ${element.contents}
    </div>
    <div class="inner-details">
      <div class="category-for-menu-item">
        <i class='bx bx-category'></i>Category: ${element.category}</div>
      <div class="cost"><i class='bx bx-dollar-circle' ></i>Price: ${element.cost}</div>
    </div>
    <a href="" class="read-more">Change</a>
  </div>
</div>`
});

document.querySelector('.menu-elements').innerHTML = MenuHTML;