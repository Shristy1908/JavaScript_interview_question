var dropdown = document.getElementById("dropdown");
var printItem = document.getElementById("printItem");
var url = "https://pokeapi.co/api/v2/pokemon/";

fetch(url)
  .then((response) => response.json())
  .then(function (datas) {
    datas.results.map((data, index) => {
      const option = document.createElement("option");
      option.value = JSON.stringify({
          name:data.name,
          url:data.url,
          key:index
      })
      option.textContent = data.name;
      dropdown.appendChild(option);
    });
  })
  .catch((error) => {
    console.error(error);
  });

dropdown.addEventListener("change", handleApi);

function handleApi() {
 
  const selectedOption = dropdown.options[dropdown.selectedIndex];
  const selectedOptionValue = JSON.parse(selectedOption.value);
  const url=selectedOptionValue.url;

  fetch(url)
  .then(response=>response.json())
  .then(function(data){
        const li1=document.createElement("li");
        const li2=document.createElement("li");
        const li3=document.createElement("li");
        li1.textContent=data.name;
        li2.textContent=data.height;
        li3.textContent=data.weight;
       // console.log(li1,li2,li3);
        //printItem.textContent=li1;
       // printItem.innerHTML=`<li>hjhjh</li>`;
       // const li=document.querySelectorAll("li");
       // printItem.replaceChild(li2,li);
        printItem.appendChild(li1);
        printItem.appendChild(li2);
        printItem.appendChild(li3);
  })
  .catch((error)=>{
    console.log(error);
  })

}
