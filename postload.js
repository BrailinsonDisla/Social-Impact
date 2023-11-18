// get buttons from the navbar
const introButton = document.getElementById('intro-section-button');
const historyButton = document.getElementById('history-section-button');
const resourcesButton = document.getElementById('resources-section-button');
const newsButton = document.getElementById('news-section-button');
const contactUsButton = document.getElementById('contact-us-section-button');
const reduceMotionButton = document.getElementById('reduce-motion-button');

// set functionalities for the navbar buttons
introButton.addEventListener('click', () => {
    window.location.href = '#intro-section';
    window.scrollBy(0, -4 * 16);
});

historyButton.addEventListener('click', () => {
    window.location.href = '#history-section';
    window.scrollBy(166, -4 * 16);
});

resourcesButton.addEventListener('click', () => {
    window.location.href = '#resources-section';
    window.scrollBy(166, -4 * 16);
});

newsButton.addEventListener('click', () => {
    window.location.href = '#news-section';
    window.scrollBy(166, -4 * 16);
});

contactUsButton.addEventListener('click', () => {
    window.location.href = '#contact-us-section';
    window.scrollBy(166, -4 * 16);
});

// function to switch from and to dark mode
const toogleDarkMode = () => {
    document.getElementsByClassName('header-container')[0].classList.toggle('dark-mode');
    document.getElementById('navbar').classList.toggle('dark-mode')
    document.getElementById('navbar').querySelectorAll('button').forEach(element =>
        element.classList.toggle('dark-mode'));
    document.getElementsByClassName('intro-section')[0].classList.toggle('dark-mode');
    document.getElementsByClassName('purpose-statement')[0].classList.toggle('dark-mode');
    document.getElementsByClassName('history-section')[0].classList.toggle('dark-mode');
    document.getElementById('scrollable-history').querySelectorAll('li').forEach(elelemt => {
        elelemt.style.color = 'rgb(94, 94, 94);';
    });
    document.getElementsByClassName('resources-section')[0].classList.toggle('dark-mode');
    document.getElementsByClassName('news-section')[0].classList.toggle('dark-mode');
    document.getElementsByClassName('news-outlets')[0].querySelectorAll('a').forEach(element => { 
        element.style.color = 'rgb(94, 94, 94);'
        element.classList.toggle('dark-mode')
    });
    document.getElementsByClassName('petition-container')[0].classList.toggle('dark-mode');
    document.getElementsByClassName('petition-paragraph')[0].classList.toggle('dark-mode');
    document.getElementsByClassName('sign-petition')[0].classList.toggle('dark-mode');
    document.getElementsByClassName('footer')[0].classList.toggle('dark-mode');
}

// get the theme button
const themeButton = document.getElementById('theme-mode');

// set functionality for theme button
themeButton.addEventListener('click', toogleDarkMode);

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
const addSignature = (person) => {
    // gets element for signatures and count
    const signatures = document.getElementsByClassName('petition-signatures');
    const signaturesCounter = document.getElementById('signatures-count');

    // creates a new eleent for the signature
    const newSignature = document.createElement('p');

    // set the signature's content
    newSignature.textContent = `Signed by ${person.firstName} ${person.lastName} from ${person.country}`;

    // add signature and increase counter
    signatures[0].appendChild(newSignature);
    signaturesCount++;
    signaturesCounter.textContent = signaturesCount;
}

// function to validate form
const validateForm = () => {
    let petitionInputs = document.getElementById("sign-petition").elements;
    let containsErrors = false;

    let person = {
        firstName: '',
        lastName: '',
        country: '',
        email: ''
    };


    for (let i = 0; i < petitionInputs.length - 1; i++) {
        if (petitionInputs[i].value.length < 2) {
            containsErrors = true;
            petitionInputs[i].classList.add('error');
        } else {
            petitionInputs[i].classList.remove('error');
        }
    }

    if (!containsErrors) {
        person.firstName = petitionInputs[0].value;
        person.lastName = petitionInputs[1].value;
        person.country = petitionInputs[2].value;
        person.email = petitionInputs[3].value;

        addSignature(person);
        toggleModal(person);

        // clear the form's inputs
        for (let i = 0; i < petitionInputs.length - 1; i++) {
            petitionInputs[i].value = ''
        }
    }
}

// get petition buttons
const signNowButton = document.getElementById('sign-now-button');

// add functionality for the sign now button
signNowButton.addEventListener('click', validateForm)

document.getElementById('sign-petition').addEventListener('submit', (event) => {
    event.preventDefault();
    validateForm;
});

const toggleModal = (person) => {
    const modal = document.getElementById('petition-modal');
    modal.style.opacity = 1;
    modal.style.visibility = 'visible';
    jumpUpDown();

    const modalContent = document.getElementById('thanks-modal-text-content')
    modalContent.innerHTML = `Hi ${person.firstName} ${person.lastName}!
    Thank you for signing our petition for humanitarian support :)`;

    setTimeout(() => {
        modal.style.opacity = 0;
    }, 6000);  
    
    setTimeout(() => {
        modal.style.visibility = 'hidden';
    }, 8000);  
};

const jumpUpDown = () => {
    let upDown = 1;

    const modalImage = document.getElementById('modal-img');

    setInterval(() => {
        upDown *= -1;
        modalImage.style.transform = `translateY(${12.5 * upDown}%)`
    }, 250);
};

// gets close modal button
document.getElementById('close-modal-button').addEventListener('click', () => {
    const modal = document.getElementById('petition-modal');
    modal.style.opacity = 0;

    setTimeout(() => {
        modal.style.visibility = 'hidden';
    }, 2000);  
});

// define animation object for scrolling
let animation = {
    revealDistance: 150,
    initialOpacity: 0,
    transitionDelay: 0,
    transitionDuration : '2s',
    transitionProperty: 'all',
    transitionTimingFunction: 'ease'
}

// gets a collection of the revealable containers
revealableContainers = document.querySelectorAll('.revealable')

// function to define scroll animation
const reveal = () => {
    for (let i = 0; i < revealableContainers.length; i++) {
        let windowHeight = window.innerHeight;

        // gets the top of the container
        let topOfRevealableContainer = revealableContainers[i].getBoundingClientRect().top;
        let bottomOfRevealableContainer = revealableContainers[i].getBoundingClientRect().bottom;
        
        if (topOfRevealableContainer < windowHeight - animation.revealDistance) {
            revealableContainers[i].classList.add('active');
        } else {
            revealableContainers[i].classList.remove('active')
        }
    }
}

// function that stops scroll animation
const reduceMotion = () => {
    for (let i = 0; i < revealableContainers.length; i++) {
        revealableContainers[i].style.transform = 'translateY(0)';
        revealableContainers[i].style.opacity = 1;
        revealableContainers[i].style.transition = 'transform 0s ease-in, opacity 0s ease-in';
    }
};

// set functionalities for the motion button
reduceMotionButton.addEventListener('click', reduceMotion);

// adds event listener to window
window.addEventListener('scroll', reveal);
