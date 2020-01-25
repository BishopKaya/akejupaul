var dropdown = document.querySelector('.dropdown');
var navbarburger=document.querySelector('.burger')
dropdown.addEventListener('click', function(event) {
  event.stopPropagation();
  e.preventDefault();
  dropdown.classList.toggle('is-active');
});
navbarburger.addEventListener('click',function(event){
    event.stopPropagation();
    event.preventDefault();
    navbarburger.classList.toggle('is-active')
})
var deletes=document.querySelector('.delete')
var notification=document.querySelector('.notification')
deletes.addEventListener('click',function(event){
    notification.remove();
})