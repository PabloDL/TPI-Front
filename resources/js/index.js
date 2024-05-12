const registerForm = document.getElementById("registerForm");
const loginForm = document.getElementById("loginForm");
const dialogReg = document.querySelectorAll("dialog")[0];
const dialogLog = document.querySelectorAll("dialog")[1];
const openLogin = document.querySelector("#openLogin");
const openRegister = document.querySelector("#openRegister");

openLogin.addEventListener("click", function() {
  dialogLog.showModal();
});

openRegister.addEventListener("click", function() {
  dialogReg.showModal();
});

window.onclick = function(event) {
  if (event.target == dialogLog || event.target == dialogReg) {
    dialogLog.close();
    dialogReg.close();
  }
}

//---------------------------------------------------------------------

const filters = document.querySelectorAll(".sidebar dl dd");

filters.forEach(function (item){
  item.addEventListener("click", function(){ toggleFilter(item); });
});

function toggleFilter(filter){
  console.log("toggled")
  let container = filter;

  if(container.className === "excluded"){
    container.classList.remove("excluded");
  }
  else if( container.className === "selected"){
    container.classList.remove("selected");
    container.classList.add("excluded")
  }
  else{
    container.classList.add("selected")
  }
}


// document.querySelectorAll('dt').forEach(dt => {
//     dt.addEventListener('click', function resetCategoryFilters() {
//       const ddSiblings = Array.from(this.nextElementSibling.nextElementSibling.children);
      
//       // Iterate over each <dd> sibling and remove all classes
//       ddSiblings.forEach(dd => {
//         dd.classList.remove(...dd.selected);
//         dd.classList.remove(...dd.excluded);
//       });
//     });
//   });

  