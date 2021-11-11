const btn = document.querySelector('.btn');
const options = document.querySelectorAll('.option');
btn.addEventListener('click', function() {
    alert(options);
    if (options.value === 'value1') {
        alert('You are right');
    } else {
        alert('You are wrong');
    }
});