const main = document.getElementById("main-container");

const section = document.createElement("section");
section.innerHTML = `
<h1> my new dynamic section </h1>
<p> this is new section </p>
<ul>
    <li>item number 1 </li>
    <li>item number 1 </li>
    <li>item number 1 </li>
    <li>item number 1 </li>
</ul>
`;
main.appendChild(section);
