// get buttons from the navbar
const intoButton = document.getElementById('intro-section-button');
const historyButton = document.getElementById('history-section-button');
const resourcesButton = document.getElementById('resources-section-button');
const newsButton = document.getElementById('news-section-button');
const contactUsButton = document.getElementById('contact-us-section-button');

// get the theme button
const themeButton = document.getElementById('theme-mode');

// set functionalities for the navbar buttons
intoButton.addEventListener('click', () => {
    window.location.href = '#intro-section';
});

historyButton.addEventListener('click', () => {
    window.location.href = '#history-section';
});

resourcesButton.addEventListener('click', () => {
    window.location.href = '#resources-section';
});

newsButton.addEventListener('click', () => {
    window.location.href = '#news-section';
});

contactUsButton.addEventListener('click', () => {
    window.location.href = '#contact-us-section';
});

// function to switch from and to dark mode
const toogleDarkMode = () => {
    document.body.classList.toggle("dark-mode");

    document.getElementById('scrollable-history').querySelectorAll('li').forEach(element => {
        element.style.color = 'black';
    });
}

// set functionality for theme button
themeButton.addEventListener('click', toogleDarkMode);

// get petition buttons
const signNowButton = document.getElementById('sign-now-button');

// get all list items in scrollable history
const events = document.getElementById('scrollable-history').querySelectorAll('li');

// creates an intersection observer for history events
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.intersectionRatio >= 0.5) {
            entry.target.style.opacity = '1';
            entry.target.style.transition = 'opacity 2s';
        } else {
            entry.target.style.opacity = '0';
            entry.target.style.transition = 'opacity 2s';
        }
    });
}, {
    root: document.querySelector('scrollable-history'),
    rootMargin: '0px',
    threshold: 0.5,
});

// observe each event history item
events.forEach(e => {
    observer.observe(e);
  });

// track the number of signatures
let signaturesCount = 1;

// function to add signatures
const addSignature = (signature) => {
    // gets element for signatures and count
    const signatures = document.getElementsByClassName('petition-signatures');
    const signaturesCounter = document.getElementById('signatures-count');

    // creates a new eleent for the signature
    const newSignature = document.createElement('p');

    // set the signature's content
    newSignature.textContent = signature;

    // add signature and increase counter
    signatures[0].appendChild(newSignature);
    signaturesCount++;
    signaturesCounter.textContent = signaturesCount;

}

// function to validate form
const validateForm = () => {
    let containsErrors = false;
    var petitionInputs = document.getElementById("sign-petition").elements;

    for (let i = 0; i < petitionInputs.length - 1; i++) {
        if (petitionInputs[i].value.length < 2) {
            containsErrors = true;
            petitionInputs[i].classList.add('error');
        } else {
            petitionInputs[i].classList.remove('error');
        }
    }

    if (!containsErrors) {
        const firstName = petitionInputs[0].value;
        const lastName = petitionInputs[1].value;
        const country = petitionInputs[2].value;
        addSignature(`Signed by ${firstName} ${lastName} from ${country}`)

        // clear the form's inputs
        petitionInputs[0].value = ''
        petitionInputs[1].value = ''
        petitionInputs[2].value = ''
    }
}

// add functionality for the sign now button
signNowButton.addEventListener('click', validateForm)

document.getElementById('sign-petition').addEventListener('submit', (event) => {
    event.preventDefault();
    validateForm;
});