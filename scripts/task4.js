/* Lesson 4 */

/* DATA */

// Step 1: Declare a new variable to hold information about yourself
const information = {};
// Step 2: Inside of the object, add a property named name with a value of your name as a string
information.name = "Jared Chinchilla Snachez";
// Step 3: Add another property named photo with a value of the image path and name (used in Task 2) as a string
information.photo = "./images/jared.jpg";
// Step 4: Add another property named favoriteFoods with a value of an array of your favorite foods as strings ( hint: [] )
information.favoriteFoods = ["spaghetti", "pizza", "hamburger", "crepe"];
// Step 5: Add another property named hobbies with a value of an array of your hobbies as strings
information.hobbies = ["programing", "watch movies", "exercise"];
// Step 6: Add another property named placesLived with a value of an empty array
information.placesLived = [];
// Step 7: Inside of the empty array above, add a new object with two properties: place and length and values of an empty string
information.placesLived.push({place: "", length: ""});
// Step 8: For each property, add appropriate values as strings
information.placesLived[0].place = "Heredia";
information.placesLived[0].length = "8 years";
// Step 9: Add additional objects with the same properties for each place you've lived
information.placesLived.push({place: "Quepos", length: "11 years"});
information.placesLived.push({place: "Honduras", length: "2 years"});
/* OUTPUT */

// Step 1: Assign the value of the name property (of the object declared above) to the HTML <span> element with an ID of name
document.getElementById("name").innerText = information.name
// Step 2: Assign the value of the photo property as the src attribute of the HTML <img> element with an ID of photo
photo = document.getElementById("photo")
photo.setAttribute("src", information.photo)
// Step 3: Assign the value of the name property as the alt attribute of the HTML <img> element with an ID of photo
photo.setAttribute("alt", information.name)
// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
let elements = []
information.favoriteFoods.forEach(x => {
    let element = document.createElement("li")
    let text = document.createTextNode(x)
    element.appendChild(text)
    elements.push(element)
});
// Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods
let foods = document.getElementById("favorite-foods")
elements.forEach( x => {
    foods.appendChild(x);
})
// Step 6: Repeat Step 4 for each hobby in the hobbies property
let elements1 = []
information.hobbies.forEach(x => {
    let element = document.createElement("li")
    let text = document.createTextNode(x)
    element.appendChild(text)
    elements1.push(element)
});
// Step 7: Repeat Step 5 using the HTML <ul> element with an ID of hobbies
let hobbies = document.getElementById("hobbies")
elements1.forEach( x => {
    hobbies.appendChild(x);
})
// Step 8: For each object in the <em>placesLived</em> property:
// - Create an HTML <dt> element and put its place property in the <dt> element
let placesList = []
information.placesLived.forEach(x => {
    let element = document.createElement("dt")
    let node = document.createTextNode(x.place)
    element.appendChild(node)
    placesList.push(element)

})
// - Create an HTML <dd> element and put its length property in the <dd> element
let lengthList = []
information.placesLived.forEach(x => {
    let element = document.createElement("dd")
    let node = document.createTextNode(x.length)
    element.appendChild(node)
    lengthList.push(element)

})
// Step 9: Append the HTML <dt> and <dd> elements created above to the HTML <dl> element with an ID of places-lived
let dl = document.getElementById("places-lived")
placesList.forEach(x => {
    let y = placesList.indexOf(x)
    x.appendChild(lengthList[y])
    dl.appendChild(x)
})






