(function(){

  let resume = document.querySelector('.resume-link');
  let container = document.querySelector('.resume-container');
  let body = document.querySelector('body');

  resume.addEventListener('click', showResume);

  function hideResume() {
    console.log('mofo')
    let obj = document.querySelector('object');
    if (obj) {
      container.removeChild(obj);
      container.classList.remove('show');
    }
  }

  function showResume() {
    console.log('foo')

    let obj = document.createElement('object');
    let div = document.createElement('div');
    obj.data = '../img/resume.pdf';
    obj.type = 'application/pdf';
    obj.addEventListener('click', hideResume);
    container.appendChild(obj);
    container.classList.add('show');

    return false;
  }

})();
