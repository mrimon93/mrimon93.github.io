
document.getElementById('home').addEventListener('click', function () {
    // Redirect to the home page (replace "home.html" with your actual home page URL)
    window.location.href = 'index.html';
});

document.getElementById('about').addEventListener('click', function () {
    // Redirect to the about page (replace "about.html" with your actual about page URL)
    window.location.href = 'about.html';
});

document.getElementById('contact').addEventListener('click', function () {
    // Redirect to the contact page (replace "contact.html" with your actual contact page URL)
    window.location.href = 'contact.html';
});

function loadContent(url, navItem) {
    // Using jQuery for simplicity, you can use other methods to fetch content
    $.ajax({
        url: url,
        type: 'GET',
        success: function (data) {
            $('#dynamic-content').html(data);
            // Remove 'active' class from all nav items
            $('.nav-item').removeClass('active');
            // Add 'active' class to the clicked nav item
            $(navItem).parent().addClass('active');
        },
        error: function () {
            $('#dynamic-content').html('<p>Error loading content.</p>');
        }
    });
}
