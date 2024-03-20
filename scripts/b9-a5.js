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
        return;
    }
    // Enabling coupon apply button
    if (newSeatNo === 4) {
        document.getElementById('coupon-apply-button').removeAttribute('disabled');
    }
    console.log(newSeatNo);
    seat.innerText = newSeatNo;
    // ---------------------------------------------------
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
