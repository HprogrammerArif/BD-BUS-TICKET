//add background color by id
function setBackgroundColorById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add('bg-green-700');
  element.classList.add('btn-disabled');



  //  decrease total seat count
  const currentTotalSeat = getTotalSeatById('total-seat-count');
  const updatedSeat = currentTotalSeat - 1;
  console.log(updatedSeat);
  setTextElementValueById('total-seat-count', updatedSeat);

  //  increase passenger total seat count
  const passengerCurrentTotalSeat = getTotalSeatById('passenger-seat-count');
  const passengerUpdatedSeat = passengerCurrentTotalSeat + 1;
  //console.log(passengerUpdatedSeat);
  setTextElementValueById('passenger-seat-count', passengerUpdatedSeat);
  appendSeat(elementId)
}


// append seat and price
function appendSeat(e) {
  // Create div element
  const creatDiv = document.createElement('div');

  // Create h1 element for seat information
  const h1 = document.createElement('h1');
  const h1Text = document.createTextNode(e);
  h1.appendChild(h1Text);
  creatDiv.appendChild(h1);

  // Create p element for seat type
  const p = document.createElement('p');
  const economyText = document.createTextNode('economy');
  p.appendChild(economyText);
  creatDiv.appendChild(p);

  // Create h1 element for seat price
  const price = document.createElement('h1');
  const priceText = document.createTextNode(550);
  price.appendChild(priceText);
  creatDiv.appendChild(price);

  // Append the created div to the element with id 'append-div'
  const appendDiv = document.getElementById('append-div');
  appendDiv.appendChild(creatDiv);

  // adding css property
  creatDiv.className = 'flex justify-between p-2'
}



    







   
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