const main = document.getElementById("main");
const addUser = document.getElementById("add-user");
const double = document.getElementById("double");
const showMillionaries = document.getElementById("show-Millionaries");
const sort = document.getElementById("sort");
const calculatewealth = document.getElementById("cal-wealth");

let data = [];

getData();
getData();
getData();

//fetch random user and add money
async function getData() {
  try {
    let result = await axios.get("https://randomuser.me/api/");

    const newuser = {
      name: `${result.data.results[0].name.first} ${result.data.results[0].name.last}`,
      money: Math.floor(Math.random() * 1000000),
    };

    console.log(newuser);
    addData(newuser);
  } catch (error) {
    console.log(error);
  }
}

//double money
function doubleMoney() {
  data = data.map((user) => {
    return {
      ...user,
      money: user.money * 2,
    };
  });

  updateDOM(data);
}

//sort money
function sortMoney() {
  data.sort((a, b) => b.money - a.money);

  updateDOM(data);
}

//find millianaire person only
function Millionaries() {
  data = data.filter((user) => user.money > 1000000);

  updateDOM(data);
}

//total wealth calculation
function calculatTotalewealth() {
  const total = data.reduce((acc, num) => (acc += num.money), 0);

  addtotal(formatMoney(total));

  console.log(total);
}
function addtotal(total) {
  const addtotalele = document.createElement("div");
  addtotalele.classList.add("totalWealth");
  addtotalele.innerHTML = `<strong>Total: </strong> ${total}`;
  main.appendChild(addtotalele);
}

// add new object to array
function addData(newuser) {
  data.push(newuser);
  updateDOM(data);
}

const updateDOM = (data) => {
  main.innerHTML = "<h3><strong>Person</strong> Wealth</h3>";

  data.forEach((element) => {
    const divele = document.createElement("div");
    divele.classList.add("person");
    divele.innerHTML = `<strong>${element.name}</strong> ${formatMoney(
      element.money
    )}`;
    main.appendChild(divele);
  });
};

//format money
function formatMoney(number) {
  return "₹" + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
}

// add user when clicking on adduser btn
addUser.addEventListener("click", getData);

//double money when clicking on double btn
double.addEventListener("click", doubleMoney);

// sort money when clicking on sort btn
sort.addEventListener("click", sortMoney);

// showMillianaries when clicking on sort btn
calculatewealth.addEventListener("click", calculatTotalewealth);
