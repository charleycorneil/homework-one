// document.getElementById("ticketNum").innerHTML = " 3 ";

// document.getElementById("ticketCost").innerHTML = " 14 ";

// document.getElementById("ttCost").innerHTML += " 42 " + 42;

// document.getElementById("bank").innerHTML = " $65.87 ";

// document.getElementById("addJacket").innerHTML = " False ";

// document.getElementById("profPizza").innerHTML = "Students: 12, Rector: 2 ";

// document.getElementById("Monty").innerHTML = " $34.5 ";

// document.getElementById("tips").innerHTML = " $193.0675 ";

// Larry's Movie Tickets
let ticketNum = 3,
  ticketCost = 14;
document.getElementById("ttCost").innerHTML = `Total: $${
  ticketNum * ticketCost
}`;

// Shopping
let bankBalance = 235.87,
  shirt = 35,
  pants = 75,
  shoes = 60;
let balanceAfterOutfit = bankBalance - (shirt + pants + shoes);
document.getElementById(
  "bank"
).innerHTML = `After purchasing the outfit, my bank account balance is $${balanceAfterOutfit.toFixed(
  2
)}`;
document.getElementById("addJacket").innerHTML = `Add Jacket: ${
  balanceAfterOutfit >= 70
}`;

// Pizza
let pizzas = 4,
  slicesPerPizza = 8,
  slicesPerStudent = 2.5;
let totalSlices = pizzas * slicesPerPizza;
document.getElementById("profPizza").innerHTML = `Students: ${Math.floor(
  totalSlices / slicesPerStudent
)}, Rector: ${totalSlices % slicesPerStudent}`;

// Monty's Mega Bar
let totalMealCost = 2 * 12 + 6 + 3 * 1.5;
document.getElementById("Monty").innerHTML = `$${totalMealCost}`;

// Weekly Tip Average
let week1 = 202.45,
  week2 = 134.97,
  week3 = 256.63,
  week4 = 178.22;
let totalTips = week1 + week2 + week3 + week4;
let avgTips = totalTips / 4;
document.getElementById("tips").innerHTML = `Weekly Tip Average: $${avgTips}`;
