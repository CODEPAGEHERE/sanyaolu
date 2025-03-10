document.addEventListener("DOMContentLoaded", function () {
    let balance = 250000;
    let balanceElement = document.querySelector(".balance h1");

    function updateBalance(amount) {
        balance += amount;
        balanceElement.textContent = `₦${balance.toLocaleString()}.00`;
    }

    // Example: Simulating a transaction
    setTimeout(() => {
        updateBalance(-5000); // Deduct ₦5000 after 3 seconds
    }, 3000);
});
