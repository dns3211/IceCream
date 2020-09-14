import './sass/main.scss';
$('#navToggle').click(function () {
  $(this).toggleClass('active');
  $('.overlay').toggleClass('open');
  // this line в–ј prevents content scroll-behind
  $('body').toggleClass('locked');
});
$('.overlay').click(function () {
  $(this).removeClass('open');
  $('.navBurger').removeClass('active');
});
