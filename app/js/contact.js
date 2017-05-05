(function(){

  const Data = [
      {
        title: 'Email',
        fa: 'fa fa-envelope',
        url: 'mailto:rocksandwoks@gmail.com'
      },
      {
        title: 'Github',
        fa: 'fa fa-github',
        url: 'https://github.com/halfalpine'
      },
      {
        title: 'Twitter',
        fa: 'fa fa-twitter',
        url: 'https://twitter.com/halfalpine'
      },
      {
        title: 'LinkedIn',
        fa: 'fa fa-linkedin',
        url: 'https://www.linkedin.com/in/dirk-peters-4ab112a0/'
      }
  ];

let createContact = function(data) {
  return `
    <figure class="contact-figure">
        <i class="${data.fa} fa-5x" aria-hidden="true"></i>
        <figcaption>
          <a href='${data.url}'>${data.title}</a>
        </figcaption>
    </figure>
  `;
};

const contact = document.querySelector('.contact-container');
contact.innerHTML = Data.map(item => createContact(item)).join('');

console.log('hi');

})();
