$(document).ready(function() {
    $(".balance-toggle").click(function() {
        let balanceText = $(this).siblings(".balance-amount");
        let realAmount = balanceText.attr("data-amount");
        
        if (balanceText.text() === "******") {
            balanceText.text(realAmount);
            $(this).removeClass("bi-eye").addClass("bi-eye-slash");
        } else {
            balanceText.text("******");
            $(this).removeClass("bi-eye-slash").addClass("bi-eye");
        }
    });
});


$(document).ready(function () {
    $(".notification").click(function () {
        window.location.href = "notifications.html"; // Redirect to the notifications page
    });
});
