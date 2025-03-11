$(document).ready(function() {
    // Balance Hide/Show
    $(".toggle-balance").click(function() {
        let balanceText = $(this).prev();
        if (balanceText.text() === "₦107,000" || balanceText.text() === "₦500,000") {
            balanceText.text("******");
            $(this).text("👁 Show");
        } else {
            balanceText.text($(this).attr("data-balance"));
            $(this).text("👁 Hide");
        }
    });

    // Notification Bell Click
    $("#notification-btn").click(function() {
        $(".notification-dropdown").toggle();
    });

    // Close Notification Dropdown on Outside Click
    $(document).click(function(event) {
        if (!$(event.target).closest("#notification-btn, .notification-dropdown").length) {
            $(".notification-dropdown").hide();
        }
    });
});
