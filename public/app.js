var loc = document.getElementById("location")
var cin_date = document.getElementById("cin-date")
var cout_date = document.getElementById("cout-date")
var adults = document.getElementById("adults")
var child = document.getElementById("child")
var submit = document.getElementById("submit")
const form = document.querySelector('#form');

form.addEventListener("submit",getResults)

function getResults(event){
    event.preventDefault();
    console.log(loc.value)
    console.log(cin_date.value)
    console.log(cout_date.value)

    console.log(adults.value)
    console.log(child.value)

    
   // const {username , room } = Qs.parse(location.search, {ignoreQueryPrefix : true })

   // console.log(location.search)

    const u = "http://localhost:3000/hotels/"+loc.value+"/"+cin_date.value+"/"+cout_date.value

    fetch(u)
        .then(response=>{
            response.json().then(data=>{
                console.log(data)
            })
        })


}


