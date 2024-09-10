$(document).ready(function() {
    // Filter wallpapers by category
    $('.filter-button').click(function() {
        $('.filter-button').removeClass('active');
        $(this).addClass('active');

        let filterValue = $(this).data('filter');
        $('.wallpaper').hide();
        if (filterValue === 'all') {
            $('.wallpaper').show();
        } else {
            $('.wallpaper[data-category="' + filterValue + '"]').show();
        }
    });

    // Search for wallpapers
    $('#search-button').click(function() {
        let searchTerm = $('#search').val().toLowerCase();
        $('.wallpaper').hide();
        $('.wallpaper[data-tag*="' + searchTerm + '"]').show();
    });

    // Initialize with all wallpapers visible
    $('.wallpaper').show();
});