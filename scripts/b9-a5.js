function scrollToSection() {
    var section = document.getElementById('sectionToScrollTo');
    section.scrollIntoView({ behavior: 'smooth' });
}
function play(elementId) {
    // Seat Count---------------------------------
    const seat = document.getElementById('seat-count');
    var seatNo = parseInt(seat.innerText);
    var newSeatNo = seatNo + 1;
    if (newSeatNo === 5) {
        alert("Maximum 4 Seats can be chosen!!!");
        return;
    }
    // Enabling coupon apply button
    if (newSeatNo === 4) {
        document.getElementById('coupon-apply-button').removeAttribute('disabled');
    }
    console.log(newSeatNo);
    seat.innerText = newSeatNo;
    // ---------------------------------------------------
    // Ticket Infos---------------------------
    const ticketInfos = document.getElementById('ticket-infos');
    const newListItem = document.createElement('div');
    newListItem.classList.add("flex");
    newListItem.classList.add('justify-between');
    var p1 = document.createElement('p');
    var p2 = document.createElement('p');
    var p3 = document.createElement('p');
    p1.innerText = elementId;
    p2.innerText = "Economy";
    p3.innerText = "550";
    newListItem.appendChild(p1);
    newListItem.appendChild(p2);
    newListItem.appendChild(p3);
    ticketInfos.appendChild(newListItem);
    // Seats Left--------------------------
    const left = document.getElementById('seats-left');
    var leftNo = parseInt(left.innerText);
    var newLeftNo = leftNo - 1;
    left.innerText = newLeftNo;
    // -----------------------------------------------------
    // Total Price----------------------------------------
    const totalPrice = document.getElementById('total-price');
    const totalPriceNumber = parseInt(totalPrice.innerText);
    var newTotalPriceNumber = totalPriceNumber + 550;
    totalPrice.innerText = newTotalPriceNumber;
    // Grand Total Price----------------------------------------------------
    const grandTotal = document.getElementById('grand-total');
    grandTotal.innerText = newTotalPriceNumber;
    // ----------------------------------------------------------
    // Change Background
    changeBg(elementId);
}
// Final Apply Button Enabling-----------------------------------------
const phoneNumber = document.getElementById('phone-number');
const finalApply = document.getElementById('final-apply');
phoneNumber.addEventListener('input', function () {
    if (phoneNumber.value.trim() !== "") {
        finalApply.disabled = false;
    }
    else {
        finalApply.disabled = true;
    }
});