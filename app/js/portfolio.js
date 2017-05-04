(function() {

  const Data = [
    {
      projectURL: 'Where2Surf',
      projectTitle: 'http://138.197.68.147',
      projectIMG: 'img/where2surf.jpg',
    },
    {
      projectURL: 'Simon',
      projectTitle: 'https://halfalpine.github.io/simon/',
      projectIMG: 'img/simon.jpg',
    },
    {
      projectURL: 'Tic Tac Toe',
      projectTitle: 'https://halfalpine.github.io/tic-tac-toe/',
      projectIMG: 'img/tic-tac-toe.jpg',
    },
    {
      projectURL: 'Calculator',
      projectTitle: 'https://halfalpine.github.io/javascript-calculator/',
      projectIMG: 'img/javascript-calculator.jpg',
    },
    {
      projectURL: 'Weather',
      projectTitle: 'https://halfalpine.github.io/local-weather/',
      projectIMG: 'img/local-weather.jpg',
    },
    {
      projectURL: 'Portfolio',
      projectTitle: 'https://halfalpine.github.io/javascript-calculator/',
      projectIMG: 'img/portfolio.jpg',
    },
  ];

  let createFigure = function(data) {
    return `
      <figure>
        <img src="${data.projectIMG}" alt="${data.projectTitle}"
        <figcaption>
          <a href=${data.projectURL}>
            <p class="project-title">${data.projectTitle}</p>
          </a>
        </figcaption>
      </figure>
    `
  };

  let portfolio = document.querySelector('.portfolio-container');

  Data.map(item => console.log(item));
  portfolio.innerHTML = Data.map(item => createFigure(item))
    .join('');

  console.log('hi');
})();
