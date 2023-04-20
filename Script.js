//getelementById();
/*const heading=document.getElementById('hh');
console.log(heading);*/
//---------------------------------
//2.getElemetByTagName()
//const heading=document.getElementsByTagName('h1');
//console.log(heading[0]);
//--------------------------------------
//3.getElementByClassName()
//const heading=document.getElementsByClassName('heading1');
//console.log(heading[0]);
//------------------------------------
//4.queryselector useing class
//const heading=document.querySelector('.heading1');
//console.log(heading);
//-------------------------------------
//5.queryselector() useing id
//const heading=document.querySelector('#heading1');
//console.log(heading);
//------------------------------------
//6.queryselectorAll('heading) useing class
//7.queryselectorAll('#heading) useing class
//------------------------------------



//8.Traverse-DOM
/*const heading=document.querySelector('.heading');
const parent=heading.parentNode;
console.log(parent);*/
//--------------------------------

//9.children nodes
//let heading=document.querySelector('.parent');
//let child=heading.childNodes;
//console.log(child);
//child.document.style.color="red";

//--------------------------

//10.nextElemenySiblings
//const heading=document.querySelector('.heading');
//console.log(heading.nextElementSibling);

//11.nextElemenySiblings
//const heading=document.querySelector('.heading');
//console.log(heading.previousElementSibling);

//12.mainipulation
/*
const heading=document.querySelector('.heading');
heading.innerHTML='web dev is awesome';
heading.style.color="green";
heading.style.fontSize='50px';
heading.classList.add('titla');//class mainpulation
heading.classList.remove('heading');//class mainipulation */

//13.create-elements
/*const heading=document.createElement('h1');//create tage
heading.innerHTML='Hello Dhiren';//write content
heading.style.color="blue";//content color
const parent1=document.querySelector(".parent");//select the parent tag class name
parent1.appendChild(heading);//apend the content
console.log(heading);

const heading1=document.createElement("h3");//create tag
heading1.innerHTML="Hello Raja";
heading1.style.color="yellow";
const parent2=document.querySelector(".parent");
parent2.insertAdjacentElement('beforebegin',heading1);  */


//14.click event

const button1=document.querySelector('#btn');
const bulb=document.querySelector('#bulbid');

button1.addEventListener('click',function(){
  // bulb.src='./lighton.JPEG';
  const back=document.querySelector('#back');
   if(bulb.src.match('lightoff')){
    button1.textContent="off";
     bulb.src='./lighton.JPEG';
     bulb.src.style.width = '50px';
    
   }
   else
   {
    bulb.src='./lightoff.JPEG';
    button1.textContent="on";
   }
  // size.style.width="100px";
  console.log("button click");
});
