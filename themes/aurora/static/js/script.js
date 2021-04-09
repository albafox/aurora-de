document.addEventListener('DOMContentLoaded', function () {
  new Splide( '.splide', {
    perPage: 3,
    type: 'loop',
    pagination: false,
    breakpoints: {
      '640': {
        perPage: 2,
        gap    : '1rem',
      },
      '480': {
        perPage: 1,
        gap    : '1rem',
      },
    }
  }).mount();

  lightGallery(document.getElementById('lightgallery'), {
    download: false
  });
});