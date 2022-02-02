console.log('%c HI', 'color: firebrick')


// //Challenge 1
// // Add JavaScript that:

// // on page load, fetches the images using the url above ⬆️
// // parses the response as JSON
// // adds image elements to the DOM for each 🤔 image in the array

// ------------------------------------------------------------

// //Challenge 2
// // After the first challenge is completed, add JavaScript that:

// // on page load, fetches all the dog breeds using the url above ⬆️
// // // adds the breeds to the page in the <ul> provided in index.html


// ------------------------------------------------------------

//Challenge 3
// Once all of the breeds are rendered in the <ul>, add JavaScript so that, 
// when the user clicks on any one of the <li>s, the font color of that <li> changes. 
// This can be a color of your choosing.


// ------------------------------------------------------------

//Challenge 4
// Once we are able to load all of the dog breeds onto the page, 
// add JavaScript so that the user can filter breeds that start 
// with a particular letter using a dropdown (Links to an external site.).

// For example, if the user selects 'a' in the dropdown, 
// only show the breeds with names that start with the letter a. 
// For simplicity, the dropdown only includes the letters a-d. However, 
// we can imagine expanding this to include the entire alphabet.

// ------------------------------------------------------------


document.addEventListener("DOMContentLoaded", ()=>{
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    const container = document.getElementById("dog-image-container")
    fetch(imgUrl)
    .then(res => res.json())
    .then(data => data.message.forEach(e => {

        const img = document.createElement("img")
        img.src = e
        container.appendChild(img)

   }))

const breedUrl = 'https://dog.ceo/api/breeds/list/all';
const dogBreeds = document.getElementById("dog-breeds");


function list(keys){
    const li = document.createElement("li");
    li.innerText = keys;
    li.addEventListener("click", ()=> {
        li.style.color = "Red";
    })
    dogBreeds.appendChild(li);
}

fetch(breedUrl)
   .then(res => res.json())
   .then(data => {
       console.log(data.message)
   const key = Object.keys(data.message)
    console.log(key)
   key.forEach(k => list(k))
   const dropDown = document.querySelector("#breed-dropdown")
   dropDown.addEventListener("change", () => {
       dogBreeds.innerHTML = ""
        switch(dropDown.value){
           case "a": 
            key.forEach(k => {
                if (k.startsWith("a")){
                    list(k)
                } 
            })
            break;
            case "b":
             key.forEach(k => {
                if (k.startsWith("b")){
                        list(k)
                    }
                })
            break;
            case "c": 
             key.forEach(k => {
                if (k.startsWith("c")){
                     list(k)
                 }
             })
             break;
             default: 
              key.forEach(k => {
                if (k.startsWith("d")){
                    list(k)
                }
            })
       }

   })
 })
})





