document.addEventListener("DOMContentLoaded", function() {
    var icons = document.querySelectorAll('use[xlink\\:href="assets/images/icons.svg?1738853146#icon-logo"]');
    icons.forEach(function(icon) {
      icon.setAttribute('xlink:href', 'https://www.svgrepo.com/show/510445/logo-rackext.svg');
    });
  });