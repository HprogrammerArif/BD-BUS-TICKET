//  importat values

let Coupons = { NEW15: 15, Couple20: 20 };

// //  select deSeledct togle:
// let togle = true;

// //add background color by id
// function setBackgroundColorById(elementId) {
//   console.log(togle);
//   if (togle) {
//     const element = document.getElementById(elementId);
//     element.classList.add("bg-green-700");
//     //  decrease total seat count
//     const currentTotalSeat = getTotalSeatById("total-seat-count");
//     const updatedSeat = currentTotalSeat - 1;
//     console.log(updatedSeat);
//     setTextElementValueById("total-seat-count", updatedSeat);

//     //  increase passenger total seat count
//     const passengerCurrentTotalSeat = getTotalSeatById("passenger-seat-count");
//     const passengerUpdatedSeat = passengerCurrentTotalSeat + 1;
//     //console.log(passengerUpdatedSeat);
//     setTextElementValueById("passenger-seat-count", passengerUpdatedSeat);
//     appendSeat(elementId);
//   } else {
//     const element = document.getElementById(elementId);
//     element.classList.remove("bg-green-700");
//     //  decrease total seat count
//     const currentTotalSeat = getTotalSeatById("total-seat-count");
//     const updatedSeat = currentTotalSeat + 1;
//     setTextElementValueById("total-seat-count", updatedSeat);

//     //  increase passenger total seat count
//     const passengerCurrentTotalSeat = getTotalSeatById("passenger-seat-count");
//     const passengerUpdatedSeat = passengerCurrentTotalSeat - 1;
//     //console.log(passengerUpdatedSeat);
//     setTextElementValueById("passenger-seat-count", passengerUpdatedSeat);
//     appendSeat(elementId);
//   }
//   togle = !togle;
// }

const increaseTotalPrice = (newPrice, id) => {
  const label = document.getElementById(id);
  label.innerText = parseFloat(label.innerText) + newPrice;
};

// make a array of object to store selected seat details
let selectedSeats = [];

//  func, call by the btn ( onclick method)
const seatBooking = (id) => {
  //  chaeks if already in the list or not
  if (selectedSeats.some((item) => item.seatNum === id)) {
    DeSelectSeat(id);
  } else {
    SelectSeat(id);
  }
};

//  seatNum -> id of the btn
const SelectSeat = (seatNum) => {
  // condition to check the length of the array.  
  if (selectedSeats.length+1 <= 4) {
    const btn = document.getElementById(seatNum);
    btn.classList.add("bg-green-700");

    //   add selected seat to the list
    selectedSeats.push({
      seatNum: seatNum,
      class: "Business", // -> making a object to push
      price: 550,
    });
  }

  //  update func will refreash the selected seat display accordint to the list
  UpdateSeatFunc();
};
const DeSelectSeat = (seatNum) => {
  const btn = document.getElementById(seatNum);
  btn.classList.remove("bg-green-700");
  //  removing clicked btn from the array. by taking which seatNum is not match with the list.
  selectedSeats = selectedSeats.filter((i) => i.seatNum !== seatNum);

  //  update func will refreash the selected seat display accordint to the list
  UpdateSeatFunc();
};

const UpdateSeatFunc = () => {
  const parentDiv = document.getElementById("selected-seat-display");

  // at first remove all items from the display. then refreash it form the list.
  parentDiv.innerHTML = "";

  // getting all values form the list and show it in the display
  selectedSeats.map((item, i) => {
    const div = document.createElement("div");
    div.className = "flex justify-between";

    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");
    p1.textContent = item.seatNum;
    p2.textContent = item.class;
    p3.textContent = item.price;
    div.appendChild(p1);
    div.appendChild(p2);
    div.appendChild(p3);

    parentDiv.appendChild(div);
  });
};

// append seat and price
function appendSeat(e) {
  //  update total price:
  increaseTotalPrice(550, "totalPriceDisplay");
  increaseTotalPrice(550, "grandTotalPrice");

  // // Create div element
  // const creatDiv = document.createElement("div");

  // // Create h1 element for seat information
  // const h1 = document.createElement("h1");
  // const h1Text = document.createTextNode(e);
  // h1.appendChild(h1Text);
  // creatDiv.appendChild(h1);

  // // Create p element for seat type
  // const p = document.createElement("p");
  // const economyText = document.createTextNode("economy");
  // p.appendChild(economyText);
  // creatDiv.appendChild(p);

  // // Create h1 element for seat price
  // const price = document.createElement("h1");
  // const priceText = document.createTextNode(550);
  // price.appendChild(priceText);
  // creatDiv.appendChild(price);

  // // const getPrice = 9

  // // Append the created div to the element with id 'append-div'
  // const appendDiv = document.getElementById("append-div");
  // appendDiv.appendChild(creatDiv);

  // // adding css property
  // creatDiv.className = "flex justify-between p-2";
}

const UpdaetGrandTotal = () => {
  const inputField = document.getElementById("CouponSearch");

  if (inputField.value in Coupons) {
    // checking if the coupon is in coupon list
    const grandTotalPriceDisplay = document.getElementById("grandTotalPrice");
    const totalPrice = parseFloat(
      document.getElementById("totalPriceDisplay").innerText
    );
    newValue = totalPrice - (totalPrice * Coupons[inputField.value]) / 100;
    //      NEW15
    grandTotalPriceDisplay.innerText = newValue;
  }
};

function getTotalSeatById(elementId) {
  const element = document.getElementById(elementId);
  const elementValueText = element.innerText;
  const value = parseInt(elementValueText);
  return value;
}
function setTextElementValueById(elementId, value) {
  const element = document.getElementById(elementId);
  element.innerText = value;
}
