(function() {

  const Data = [
    {
      projectURL: 'Where2Surf',
      projectTitle: 'bar',
    },
    {
      projectURL: 'Simon',
      projectTitle: 'california',
    },
    {
      projectURL: 'Tic Tac Toe',
      projectTitle: 'dirk',
    },
    {
      projectURL: 'Calculator',
      projectTitle: 'milk',
    },
    {
      projectURL: 'Weather',
      projectTitle: 'sloper',
    },
    {
      projectURL: 'Portfolio',
      projectTitle: 'glass',
    },
  ];

  let createFigure = function(data) {
    return `
      <figure>
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
