/**
 * @typedef Freelancer
 * @property {string} name
 * @property {string} occupation
 * @property {number} rate
 */

// === Constants ===
const NAMES = ["Alice", "Bob", "Carol", "Dave", "Eve"];
const OCCUPATIONS = ["Writer", "Teacher", "Programmer", "Designer", "Engineer"];
const PRICE_RANGE = { min: 20, max: 200 };
const NUM_FREELANCERS = 100;

// create function with random name, occ and price
function createFreelancer() {
  const name = NAMES[Math.floor(Math.random() * NAMES.length)];
  const occupation =
    OCCUPATIONS[Math.floor(Math.random() * OCCUPATIONS.length)];
  const price = Math.floor(
    Math.random() * (PRICE_RANGE.max - PRICE_RANGE.min + 1) + PRICE_RANGE.min
  );

  return { name, occupation, price };
}

// -------------------------------------------------------------------
const freelancers = Array.from({ length: NUM_FREELANCERS }, createFreelancer);

// -------------------------------------------------------------------
function getAverageRate(list) {
  const priceArr = list.map((item) => item.price);
  const averagePrice =
    priceArr.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    ) / list.length;
  return averagePrice;
}

const averageRate = getAverageRate(freelancers);

// -------------------------------------------------------------------
function FreelancerRow(freelancer) {
  const { name, occupation, price } = freelancer;
  const $row = document.createElement("tr");
  $row.classList.add("freelancer");
  $row.innerHTML = `
    <td>${name}</td>
    <td>${occupation}</td>
    <td>$${price}</td>
  `;
  return $row;
}

// -------------------------------------------------------------------
function FreelancerRows() {
  const $tbody = document.createElement("tbody");
  $tbody.classList.add("freelancer-rows");

  const $rows = freelancers.map(FreelancerRow);
  $tbody.replaceChildren(...$rows);

  return $tbody;
}

// -------------------------------------------------------------------
function AverageRateDisplay() {
  const $average = document.createElement("span");
  $average.classList.add("average-rate");
  $average.innerHTML = `
    <h2>Average Hourly Rate is $${averageRate}</h2>
  `;
  return $average;
}

// -------------------------------------------------------------------
function render() {
  const $app = document.querySelector("#app");

  $app.innerHTML = `
    <h1>Freelancer Forum</h1>
    <h3 class="average-rate-display"></h3>
    <table class="container">
      <thead>
        <tr>
          <th>Name</th>
          <th>Occupation</th>
          <th>Rate</th>
        </tr>
      </thead>
      <tbody class="freelancer-rows"></tbody>
    </table>
  `;

  $app.querySelector(".average-rate-display").replaceWith(AverageRateDisplay());
  $app.querySelector(".freelancer-rows").replaceWith(FreelancerRows());
}

render();
