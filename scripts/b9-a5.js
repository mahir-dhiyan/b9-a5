function scrollToSection() {
    var section = document.getElementById('sectionToScrollTo');
    section.scrollIntoView({ behavior: 'smooth' });
}
function play(elementId){
    // Seat Count---------------------------------
    const seat = document.getElementById('seat-count');
    var seatNo=parseInt(seat.innerText);
    var newSeatNo=seatNo + 1;
    if(newSeatNo ===5){
        return;
    }
    console.log(newSeatNo);
    seat.innerText = newSeatNo;
    // ---------------------------------------------------
    // Seats Left--------------------------
    const left =document.getElementById('seats-left');
    var leftNo= parseInt(left.innerText);
    var newLeftNo=leftNo-1;
    left.innerText = newLeftNo;
    // -----------------------------------------------------
    // Change Background
    changeBg(elementId);
}
