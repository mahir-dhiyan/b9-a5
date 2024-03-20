function changeBg(elementId) {
    const button = document.getElementById(elementId);
    button.classList.add('bg-green-400');
}
function coupon() {
    console.log('click');
    const couponText = document.getElementById('coupon-place');
    const couponTextValue = couponText.value;
    if (couponTextValue === 'NEW15') {
        const grandTotal = document.getElementById('grand-total');
        grandTotal.innerText = 1870;
        const couponBox = document.getElementById('coupon-box');
        couponBox.classList.add('hidden');
    }
    else if (couponTextValue === 'Couple 20') {
        const grandTotal = document.getElementById('grand-total');
        grandTotal.innerText = 1760;
        const couponBox = document.getElementById('coupon-box');
        couponBox.classList.add('hidden');
    }
}

// Get the modal element
var modal = document.getElementById('my_modal_1');

// Function to open the modal
function openModal() {
    modal.showModal();
}

// Function to close the modal
function closeModal() {
    modal.close();
}