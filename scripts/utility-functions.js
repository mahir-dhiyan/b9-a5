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
    }
    else if (couponTextValue === 'Couple 20') {
        const grandTotal = document.getElementById('grand-total');
        grandTotal.innerText = 1760;
    }
}