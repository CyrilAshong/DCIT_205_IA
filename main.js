document.addEventListener('DOMContentLoaded', function () {
    var icon = document.getElementById('icon');

    icon.addEventListener('click', function () {
        var ul = document.querySelector('ul');
        ul.classList.toggle('show');
    });
});

