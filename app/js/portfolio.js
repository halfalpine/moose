(function(){

  const Data = [
    {
      projectURL: 'spaghetti',
      projectTitle: 'bar',
    },
    {
      projectURL: 'california',
      projectTitle: 'california',
    },
    {
      projectURL: 'dirk',
      projectTitle: 'dirk'
    },
    {
      projectURL: 'milk',
      projectTitle: 'milk',
    },
    {
      projectURL: 'sloper',
      projectTitle: 'sloper',
    },
    {
      projectURL: 'dirk',
      projectTitle: 'glass'
    }
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
