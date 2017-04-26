(function(){

  const Data = [
    {
      projectURL: 'foo',
      projectTitle: 'bar',
      descriptionURL: 'baz'
    },
    {
      projectURL: 'a',
      projectTitle: 'b',
      descriptionURL: 'c'
    }
  ];

  let createFigure = function(data) {
    return `
      <figure>
        <a href="#{projectURL}"><img src="#" alt="#{projectTitle}"></a>
        <figcaption>
          <a href="#{projectURL}">
            <h2 class="project-title">#{projectTitle}</h2>
          </a>
          <p class="project-description">More info</p>
        </figcaption>
      </figure>
    `
  };

  let portfolio = document.querySelector('.portfolio-container');

  portfolio.innerHTML = Data.forEach(item => createFigure(item));

  console.log('hi');
})();
