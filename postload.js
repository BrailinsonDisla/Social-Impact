// get buttons from the navbar
const pur_stat_btn = document.getElementById('purpose-statement-b')
const hist_btn = document.getElementById('history-b')
const res_btn = document.getElementById('resources-b')
const news_btn = document.getElementById('news-b')
const cont_btn = document.getElementById('contact-us-b')
const theButton = document.getElementById('theme-mode')
const signNowButton = document.getElementById('sign-now-button')
const signNowForm = document.getElementById('sign-petition')

// set the functionality for the buttons
pur_stat_btn.addEventListener('click', () => {
    window.location.href = '#purpose-statement';
})
hist_btn.addEventListener('click', () => {
    window.location.href = '#history';
})
res_btn.addEventListener('click', () => {
    window.location.href = '#resources';
})
news_btn.addEventListener('click', () => {
    window.location.href = '#news';
})
cont_btn.addEventListener('click', () => {
    window.location.href = '#contact-us';
})

// signNowForm.addEventListener('submit', (event) => {
//     event.preventDefault();

//     const firstName = signNowForm.elements['first_name'].value;
//     const lastName = signNowForm.elements['last_name'].value;
//     const country = signNowForm.elements['country'].value;

//     addSignature(`🖊️ ${firstName} ${lastName} -- ${country}`)
// })

const toogleDarkMode = () => {
    document.body.classList.toggle("dark-mode");
}

const addSignature = (signature) => {
    const signatures = document.getElementsByClassName('signatures');
    const newSignature = document.createElement('p');
    newSignature.textContent = signature;

    signatures[0].appendChild(newSignature);
}

theButton.addEventListener('click', toogleDarkMode);




const validateForm = () => {
    let containsErrors = false;

    var petitionInputs = document.getElementById("sign-petition").elements;


    for (let i = 0; i < petitionInputs.length; i++) {
        if (petitionInputs[i].value.length < 2) {
            containsErrors = true;
            petitionInputs[i].classList.add('error');
            break;
        } else {
            petitionInputs[i].classList.remove('error');

        }
    }

    if (!containsErrors) {
        const firstName = petitionInputs[0].value
        const lastName = petitionInputs[1].value;
        const country = petitionInputs[2].value;
        addSignature(`🖊️ ${firstName} ${lastName} -- ${country}`)
    }
}

signNowButton.addEventListener('click', validateForm)


// get all the list items in scrollable history
const events = document.getElementById('scrollable-history').querySelectorAll('li')

// creates an intersection observer for history events
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.intersectionRatio >= 0.5) {
            entry.target.style.opacity = '1';
            entry.target.style.transition = 'opacity 1s';
        } else {
            entry.target.style.opacity = '0';
            entry.target.style.transition = 'opacity 1s';
        }
    });
}, {
    root: document.querySelector('scrollable-history'),
    rootMargin: '0px',
    threshold: 0.5,
});

// observe each event item
events.forEach(e => {
    observer.observe(e);
  });