const sections = document.querySelectorAll('section');
// console.log(section);
for(section of sections){
    section.style.border = '1px solid steelblue';
    section.style.marginBottom = '5px';
    section.style.borderRadius = '15px';
    section.style.paddingLeft = '10px';
    section.style.backgroundColor = 'lightgray'

}
// const placesConatiner = document.getElementById('places-container');
// placesConatiner.style.backgroundColor = 'yellow';
const placesConatiner = document.getElementById('places-container');
placesConatiner.classList.add('yellow-bg');
placesConatiner.classList.remove('large-text');
// placesConatiner.classList.remove('large-text')