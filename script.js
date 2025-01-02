document.addEventListener('click', function(event) {
    if (event.target.tagName === 'IMG') {
        alert('You clicked on ' + event.target.alt);
    }
});
