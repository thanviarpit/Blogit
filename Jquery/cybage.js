// const petsData = [
//     {
//       name: "Purrsloud",
//       species: "Cat",
//       favFoods: ["wet food", "dry food", "<strong>any</strong> food"],
//       birthYear: 2016,
//       photo: "https://learnwebcode.github.io/json-example/images/cat-2.jpg"
//     },
//     {
//       name: "Barksalot",
//       species: "Dog",
//       birthYear: 2008,
//       photo: "https://learnwebcode.github.io/json-example/images/dog-1.jpg"
//     },
//     {
//       name: "Meowsalot",
//       species: "Cat",
//       favFoods: ["tuna", "catnip", "celery"],
//       birthYear: 2012,
//       photo: "https://learnwebcode.github.io/json-example/images/cat-1.jpg"
//     }
//   ];
  
//   function age(birthYear) {
//     let calculatedAge = new Date().getFullYear() - birthYear;
//     if (calculatedAge == 1) {
//       return "1 year old";
//     } else if (calculatedAge == 0) {
//       return "Baby";
//     } else {
//       return `${calculatedAge} years old`;
//     }
//   }
  
//   function foods(foods) {
//     return `
//   <h4>Favorite Foods</h4>
//   <ul class="foods-list">
//   ${foods.map(food => `<li>${food}</li>`).join("")}
//   </ul>
//   `;
//   }
  
//   function petTemplate(pet) {
//     return `
//       <div class="animal">
//       <img class="pet-photo" src="${pet.photo}">
//       <h2 class="pet-name">${pet.name} <span class="species">(${pet.species})</span></h2>
//       <p><strong>Age:</strong> ${age(pet.birthYear)}</p>
//       ${pet.favFoods ? foods(pet.favFoods) : ""}
//       </div>
//     `;
//   }
  
//   document.getElementById("app").innerHTML = `
//     <h1 class="app-title">Pets (${petsData.length} results)</h1>
//     ${petsData.map(petTemplate).join("")}
//     <p class="footer">These ${petsData.length} pets were added recently. Check back soon for updates.</p>
//   `;


  $(document).ready(function () {
    $("body").on("load", function () {
      $.ajax({
        type: "GET",
        url: "http://localhost:3000/blogs",
        dataType: "json",
        async: true,
        success: function (data) {
          console.log(data);
          let blogs = "";
          $.each(data, function (i, v) {
              blogs += `
            <div class="row">
            <br>
            <br>
            <h1 style="text-align:center; color:teal; font-weight:bold; font-size:25px">${v.name}</h1>
            <img style="width:150px; margin-left:245px" src="${v.image}">
            <h3 style="color:seagreen; text-align:center">Date: ${v.DateTime}</h3>
            <h3 style="text-align:center; font-weight:bold">Category:${v.category}</h3>
            <p>${v.content}</p> 
            <div class="d-flex justify-content-between left-div-btns">
            <div>
                <button class="left-div-like" id="like-btn">
                    <i class="far fa-thumbs-up"></i>Like
                </button>
            </div>
            </div>
        </div>
        <br>
        <br>
        <br>
            <hr> 

            </div>
            `;
          });
          $(".app").append(blogs);
          $("#waiting").hide();
        },
        error: function () {
          console.log("not able to process request");
        },
      });
    });
    $("body").trigger("load");
});



const like = document.getElementById('like-btn');
const singleClick = () => {
    like.style.fontweight = 'bold';
    like.style.background = '#3282b8';
    like.style.color = '#1b262c';
    like.innerHTML = " Liked";
}
const doubleClick = () => {
    like.style.fontweight = 'normal';
    like.style.background = '#3282b8';
    like.style.color = '#1b262c';
    like.innerHTML = " Like";
}
//to get the function on click and then double click
var clickCount = 0;
like.addEventListener('click', function () {
    clickCount++;
    if (clickCount === 1) {
        singleClickTimer = setTimeout(function () {
            clickCount = 0;
            singleClick();
        }, 400);
    } else if (clickCount === 2) {
        clearTimeout(singleClickTimer);
        clickCount = 0;
        doubleClick();
    }
}, false

);


/*var btn=document.getElementById("like-btn").addEventListener("click",getPost);
var con=0;
var div =document.getElementById("cardDiv");
function getPost()
{

fetch('../images/blogit1.jpeg')
.then((res)=>{
    return res.json();
})
.then((post)=>{
    for(let index=0;index<1;index++)
    {
        div.innerHTML+=`
        <div class="col-12 card p-4 shadow blog_left__div">
        <div class="d-flex justify-content-center align-items-center flex-column pt-3 pb-5">
            <h1 style="color: orangered">Blogs</h1>
        `
    }
})*/