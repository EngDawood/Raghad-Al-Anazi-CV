document.addEventListener('DOMContentLoaded', function() {
    const sectionTitles = document.querySelectorAll('.section-title');

    sectionTitles.forEach(title => {
        title.addEventListener('click', function() {
            const popupId = this.id + '-details';
            const popup = document.getElementById(popupId);

            if (popup) {
                popup.classList.toggle('show');
            }
        });
    });
});
