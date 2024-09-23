$(document).ready(function() {
    // Show the first page on load
    $('#page-1').show();

    // Function to validate inputs on the current page
    function validatePage(pageId) {
        var isValid = true;
        
        $('#' + pageId + ' input').each(function() {
            var $input = $(this);
            var $error = $input.next('.error-message');
            
            if ($input.val().trim() === '') {
                isValid = false;
                $input.addClass('input-error');
                
                if ($error.length === 0) {
                    // Create an error message element if it doesn't exist
                    $input.after('<div class="error-message">This field is required.</div>');
                }
            } else {
                $input.removeClass('input-error');
                $error.remove(); // Remove error message if input is filled
            }
        });
        
        return isValid;
    }

    // When the "Next" button is clicked
    $('.next-btn').on('click', function(event) {
        event.preventDefault(); // Prevent form submission

        var currentPage = $(this).closest('.form-page');
        var nextPageId = $(this).data('next');

        if (validatePage(currentPage.attr('id'))) {
            $('.form-page').hide(); // Hide all form pages
            $('#' + nextPageId).show(); // Show the next page
        }
    });

    // Optional: Reset error style on input focus
    $('input').on('focus', function() {
        $(this).removeClass('input-error');
        $(this).next('.error-message').remove();
    });

    // Optional: go back to the login page (not implemented)
    $('.back-btn').on('click', function() {
        location.href = "login.html";
    });
});
