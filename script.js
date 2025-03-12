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
    // Toggle notification dropdown on click
    $(".notification").click(function (event) {
        event.stopPropagation(); // Prevent click from closing immediately
        $(".notification-dropdown").toggle();
    });

    // Hide dropdown when clicking outside
    $(document).click(function () {
        $(".notification-dropdown").hide();
    });

    // Prevent dropdown from closing when clicking inside it
    $(".notification-dropdown").click(function (event) {
        event.stopPropagation();
    });
});
