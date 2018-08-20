(
    function() {
        activeMenu();
    }
)()

// Active menu on mobile
function activeMenu() {
    $('header').click(function() {
        $(this).toggleClass('active');
    })
}