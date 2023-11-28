    
let selectedRating = null;

function selectRating(rating) {

    const buttons = document.querySelectorAll('.rate');
    const toggleButton = document.getElementById('submit')

    buttons.forEach(button => {
        const buttonRating = parseInt(button.textContent);

        if (buttonRating === rating && selectedRating !== rating) {
            button.classList.add('selected');
            selectedRating = rating;
            toggleButton.disabled = false;
        }
        else if (buttonRating === rating && selectedRating === rating){
            button.classList.remove('selected');
            selectedRating = null;
        }
        else {
            button.classList.remove('selected');
        }
    });
    if (selectedRating === null) {
        toggleButton.disabled = true;
    }
}

function submitRating() {
    if (selectRating !== null) {
        document.getElementById('main').style.display = 'none';

        document.getElementById('response').style.display = 'flex';

        document.getElementById('selectedRating').innerHTML = `&nbsp;${selectedRating}&nbsp;`;
    }
}