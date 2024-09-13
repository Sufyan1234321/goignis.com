document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.animate');
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });
});


document.querySelector('.view-more').addEventListener('click', () => {
    alert('Loading more reviews...');
    // You can replace this alert with the actual logic to load more reviews
});


document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });
});

document.querySelector('.menu-toggle').addEventListener('click', () => {
    const navMenu = document.querySelector('.nav-menu');
    if (navMenu.style.left === '0px') {
        navMenu.style.left = '-250px';
    } else {
        navMenu.style.left = '0px';
    }
});




// Open and Close chatbox
document.getElementById('open-chat-btn').addEventListener('click', function() {
    document.getElementById('chat-box').style.display = 'block';
    this.style.display = 'none';
});

document.getElementById('close-chat').addEventListener('click', function() {
    document.getElementById('chat-box').style.display = 'none';
    document.getElementById('open-chat-btn').style.display = 'block';
});

// Send message
document.getElementById('send-btn').addEventListener('click', function() {
    var inputField = document.getElementById('user-input');
    var chatContent = document.getElementById('chat-content');
    var message = inputField.value;

    if (message) {
        var messageElem = document.createElement('div');
        messageElem.textContent = "You: " + message;
        chatContent.appendChild(messageElem);

        // Simulate a reply from support
        var replyElem = document.createElement('div');
        replyElem.textContent = "Support: Thanks for reaching out!";
        setTimeout(function() {
            chatContent.appendChild(replyElem);
        }, 1000);

        // Clear input
        inputField.value = '';
        chatContent.scrollTop = chatContent.scrollHeight;
    }
});












let currentIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.opacity = i === index ? '1' : '0';
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

// Initial display
showSlide(currentIndex);

// Change slides every 5 seconds
setInterval(nextSlide, 5000);
