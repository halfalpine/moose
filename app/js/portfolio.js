(function() {

  const Data = [
    {
      projectTitle: 'Where2Surf',
      projectURL: 'http://138.197.68.147',
      projectIMG: 'img/where2surf.jpg',
    },
    {
      projectTitle: 'Simon',
      projectURL: 'https://halfalpine.github.io/simon/',
      projectIMG: 'img/simon.jpg',
    },
    {
      projectTitle: 'Tic Tac Toe',
      projectURL: 'https://halfalpine.github.io/tic-tac-toe/',
      projectIMG: 'img/tic-tac-toe.jpg',
    },
    {
      projectTitle: 'Calculator',
      projectURL: 'https://halfalpine.github.io/javascript-calculator/',
      projectIMG: 'img/javascript-calculator.jpg',
    },
    {
      projectTitle: 'Weather',
      projectURL: 'https://halfalpine.github.io/local-weather/',
      projectIMG: 'img/local-weather.jpg',
    },
    {
      projectTitle: 'Portfolio',
      projectURL: 'https://halfalpine.github.io/javascript-calculator/',
      projectIMG: 'img/portfolio.jpg',
    },
  ];

  let createFigure = function(data) {
    return `
      <figure>
        <img src="${data.projectIMG}" alt="${data.projectTitle}">
        <figcaption>
          <a href=${data.projectURL}>
            <p class="project-title">${data.projectTitle}</p>
          </a>
        </figcaption>
      </figure>
    `
  };

  const portfolio = document.querySelector('.portfolio-container');

  Data.map(item => console.log(item));
  portfolio.innerHTML = Data.map(item => createFigure(item))
    .join('');

})();
