//where to add
const placeList = document.getElementById('places-list');
const li = document.createElement('li');
//what to add
li.innerText = 'pahartoli bon';

//add the child
placeList.appendChild(li);

//where to add
const mainContainer = document.getElementById('main-content');
//what to be added
const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = 'My food list';
section.append(h1);

const ul= document.createElement('ul');

const li1 = document.createElement('li');
li1.innerText ='biriyani';
ul.appendChild(li1);

const li2 = document.createElement('li');
li2.innerText ='borhani';
ul.appendChild(li2);

const li3 = document.createElement('li');
li3.innerText ='salad';
ul.appendChild(li3);

section.append(ul);

mainContainer.append(section)

// set innerHtml directly
const sectionDress = document.createElement('section')
 sectionDress.innerHTML = `
<h1>my dress section </h1>
<ul>
    <li> tshirt </li>
    <li> Lungi </li>
    <li> sando genji </li>
</ul>

`

mainContainer.append(sectionDress)