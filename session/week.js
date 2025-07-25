document.addEventListener('DOMContentLoaded', function() {
    // Add hover effects to glass elements
    const glassElements = document.querySelectorAll('.glass');
    
    glassElements.forEach(element => {
        element.addEventListener('mousemove', (e) => {
            const rect = element.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            element.style.setProperty('--mouse-x', `${x}px`);
            element.style.setProperty('--mouse-y', `${y}px`);
            
            const glow = element.querySelector('.glass-glow');
            if (!glow) {
                const newGlow = document.createElement('div');
                newGlow.className = 'glass-glow';
                element.appendChild(newGlow);
            }
        });
    });
    
    // Add typing animation to headers
    const headers = document.querySelectorAll('h1, h2');
    headers.forEach(header => {
        const text = header.textContent;
        header.textContent = '';
        
        let i = 0;
        const typing = setInterval(() => {
            if (i < text.length) {
                header.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(typing);
            }
        }, 50);
    });
    
    // Add parallax effect to background
    window.addEventListener('scroll', function() {
        const scrollPosition = window.pageYOffset;
        const bg = document.querySelector('.bg-image');
        bg.style.transform = `translateY(${scrollPosition * 0.5}px)`;
    });
    
    // Add ripple effect to buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            const x = e.clientX - e.target.getBoundingClientRect().left;
            const y = e.clientY - e.target.getBoundingClientRect().top;
            
            const ripple = document.createElement('span');
            ripple.className = 'ripple';
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
                window.location.href = this.getAttribute('href');
            }, 1000);
        });
    });
});