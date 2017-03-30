/*Use the Document Object Model (DOM) to complete the following exercises below:*/

/*1. Replace the n/a with the following:

Tay-Tay*/

var nameChange = document.getElementById("name1");
nameChange.innerHTML = "Tay-Tay";


/*2. Replace the n/a for DJ Khaled with the following: 

Project Manager*/

var replaceDJ = document.getElementById("position2");
replaceDJ.innerHTML = "Project Manager";


/*3. Replace the n/a for Piko Taro with the following:

Concatenation*/

var replacePiko = document.getElementById("alias3");
replacePiko.innerHTML = "Concatenation";


/*4. Replace the n/a for Snoop with the gangsta lorem ipsum*/

var replaceSnoop = document.getElementsByClassName("profile")[0];
replaceSnoop.innerHTML = "Lorizzle ipsum dolizzle sit amizzle, consectetuer adipiscing hizzle. Nullizzle sapizzle velizzle, mah nizzle volutpizzle, suscipizzle fo shizzle, gravida vizzle, my shizz. Pellentesque bling bling tortizzle. Sed own yo'. Fo shizzle izzle ghetto fo shizzle mah nizzle fo rizzle, mah home g-dizzle turpizzle tempizzle fo";

/*5. Relace the n/a for Samuel L Jackson with his lorem ipsum*/

var replacesLJackson = document.getElementsByClassName("profile")[2];
replacesLJackson.innerHTML = "Normally, both your asses would be dead as fucking fried chicken, but you happen to pull this shit while I'm in a transitional period so I don't wanna kill you, I wanna help you. But I can't give you this case, it don't belong to me. Besides, I've already been through too much shit this morning over this case to hand it over to your dumb ass.";


/*6. Create a div element for Chuck Norris and give it an id of "name7". Inside this div element, give it the contents of "Chuck Norris".

Append this div element to the nameBox div*/



var divElement = document.createElement("div");
divElement.id = "name7";
divElement.innerHTML = "Chuck Norris";
nameBox.appendChild(divElement); 

/*7. Create a div element for Grimmace and give it an id of "alias8". Inside this div element, give it the contents of "The Purple Monster".

Append this div element to the aliasBox div.*/

var divElem = document.createElement("div");
divElem.id = "alias8";
divElem.innerHTML = "The Purple Monster";
aliasBox.appendChild(divElem);


//Final Boss
/*8. Create your own profile.*/


/* Ella's Way: */

var  addDetails9 = document.getElementsByClassName("block3 col-sm-4")[2];
console.log(addDetails9);

/* To Insert picture through DOM:

addDetails9.innerHTML = "<img src = (put picture here)>" */

/* from css/styles.css, add the other elements: */
var addName9 = document.createElement("div");
addName9.id = "name9";
addName9.innerHTML = "Annie";
addDetails9.appendChild(addName9);

var  addDetails9 = document.getElementsByClassName("block3 col-sm-4")[2];
console.log(addDetails9);

var divElement9 = document.createElement("div");
divElement9.id = "position9";
divElement9.innerHTML = "EES";
addDetails9.appendChild(divElement9);

var  addDetails9 = document.getElementsByClassName("block3 col-sm-4")[2];
console.log(addDetails9);

var divElement9 = document.createElement("div");
divElement9.id = "alias9";
divElement9.innerHTML = "Banano";
addDetails9.appendChild(divElement9);

var  addDetails9 = document.getElementsByClassName("block3 col-sm-4")[2];
console.log(addDetails9);

var divElement9 = document.createElement("div");
divElement9.id = "bio9";
divElement9.innerHTML = "I am a Leo! Don't ever mistake my silence for ignorance, my calmness for acceptance or my kindness for a weakness.";
addDetails9.appendChild(divElement9);

/* James's Way:

var divs = document.getElementsByClassName("block3 col-sm-4")[2];
console.log(divs);

var ids = ["name9", "position9", "alias9", "bio9"];

var innerStuff = ["", "", "", ""];

var toAdd = document.createDocumentFragment();

for (var i=0; i<ids.length; i++){
	console.log(ids[i]);
	var newDivs = document.createElement("div");
	console.log(newDivs);
	newDivs.id = ids[i];
	console.log(newDivs);
	newDivs.innerHTML = innerStuff[i];
	console.log(newDivs);
	toAdd.appendChild(newDivs);
	console.log(tooAdd);
}
*/
