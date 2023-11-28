    
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
            localStorage.setItem("selected_score", selectedRating)
        }
        else if (buttonRating === rating && selectedRating === rating){
            button.classList.remove('selected');
            selectedRating = null;
            localStorage.clear();
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
        
//Si quiero hacer redirect, uso location y agrego el response a otro archivo
//        location.href=""

//        document.getElementById('selectedRating').
//        innerHTML = `&nbsp;${selectedRating}&nbsp;`;
//! Otra solución para mejorar el contenido del <p>
        const p = document.getElementById('answer');
        p.innerText = 'You selected ' + localStorage.getItem("selected_score") + ' out of 5.'
    }
}