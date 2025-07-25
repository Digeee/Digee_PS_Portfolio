
        document.addEventListener('DOMContentLoaded', function() {
            // Typing effect for title
            const title = "Introduction to Personal Skills";
            let i = 0;
            const typingInterval = setInterval(() => {
                document.getElementById('typing-title').textContent += title[i];
                i++;
                if (i >= title.length) clearInterval(typingInterval);
            }, 100);
            
            // Set current date
            const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            const today = new Date();
            document.getElementById('current-date').textContent = today.toLocaleDateString('en-US', options);
            
            // Initialize particles.js
            particlesJS('particles-js', {
                "particles": {
                    "number": {
                        "value": 80,
                        "density": {
                            "enable": true,
                            "value_area": 800
                        }
                    },
                    "color": {
                        "value": "#6e48aa"
                    },
                    "shape": {
                        "type": "circle",
                        "stroke": {
                            "width": 0,
                            "color": "#000000"
                        },
                        "polygon": {
                            "nb_sides": 5
                        }
                    },
                    "opacity": {
                        "value": 0.5,
                        "random": false,
                        "anim": {
                            "enable": false,
                            "speed": 1,
                            "opacity_min": 0.1,
                            "sync": false
                        }
                    },
                    "size": {
                        "value": 3,
                        "random": true,
                        "anim": {
                            "enable": false,
                            "speed": 40,
                            "size_min": 0.1,
                            "sync": false
                        }
                    },
                    "line_linked": {
                        "enable": true,
                        "distance": 150,
                        "color": "#9d50bb",
                        "opacity": 0.4,
                        "width": 1
                    },
                    "move": {
                        "enable": true,
                        "speed": 2,
                        "direction": "none",
                        "random": false,
                        "straight": false,
                        "out_mode": "out",
                        "bounce": false,
                        "attract": {
                            "enable": false,
                            "rotateX": 600,
                            "rotateY": 1200
                        }
                    }
                },
                "interactivity": {
                    "detect_on": "canvas",
                    "events": {
                        "onhover": {
                            "enable": true,
                            "mode": "grab"
                        },
                        "onclick": {
                            "enable": true,
                            "mode": "push"
                        },
                        "resize": true
                    },
                    "modes": {
                        "grab": {
                            "distance": 140,
                            "line_linked": {
                                "opacity": 1
                            }
                        },
                        "bubble": {
                            "distance": 400,
                            "size": 40,
                            "duration": 2,
                            "opacity": 8,
                            "speed": 3
                        },
                        "repulse": {
                            "distance": 200,
                            "duration": 0.4
                        },
                        "push": {
                            "particles_nb": 4
                        },
                        "remove": {
                            "particles_nb": 2
                        }
                    }
                },
                "retina_detect": true
            });
            
            // Scroll animations
            const animatedElements = document.querySelectorAll('[data-animation]');
            
            function checkScroll() {
                animatedElements.forEach(element => {
                    const elementTop = element.getBoundingClientRect().top;
                    const windowHeight = window.innerHeight;
                    
                    if (elementTop < windowHeight - 100) {
                        element.style.opacity = 1;
                        element.style.transform = 'translateY(0)';
                    }
                });
            }
            
            // Set initial state
            animatedElements.forEach(element => {
                element.style.opacity = 0;
                element.style.transform = 'translateY(20px)';
                element.style.transition = 'all 0.6s ease-out';
            });
            
            window.addEventListener('scroll', checkScroll);
            checkScroll(); // Run once on load
            
            // Hover effects for cards
            const cards = document.querySelectorAll('.glass');
            cards.forEach(card => {
                card.addEventListener('mouseenter', () => {
                    card.style.transform = 'translateY(-10px)';
                });
                card.addEventListener('mouseleave', () => {
                    card.style.transform = 'translateY(0)';
                });
            });
            
            // Hover pulse effect for buttons
            const buttons = document.querySelectorAll('.hover-pulse');
            buttons.forEach(button => {
                button.addEventListener('mouseenter', () => {
                    button.classList.add('pulse');
                });
                button.addEventListener('mouseleave', () => {
                    button.classList.remove('pulse');
                });
            });
            
            // Hover scale effect for image holders
            const imageHolders = document.querySelectorAll('.hover-scale');
            imageHolders.forEach(holder => {
                holder.addEventListener('mouseenter', () => {
                    holder.style.transform = 'scale(1.05)';
                });
                holder.addEventListener('mouseleave', () => {
                    holder.style.transform = 'scale(1)';
                });
            });
            
            // Confetti effect on click
            document.addEventListener('click', function(e) {
                createConfetti(e.clientX, e.clientY);
            });
            
            function createConfetti(x, y) {
                const colors = ['#6e48aa', '#9d50bb', '#4776E6', '#8E54E9', '#ff0000', '#ff7300', '#fffb00', '#48ff00', '#00ffd5'];
                
                for (let i = 0; i < 20; i++) {
                    const confetti = document.createElement('div');
                    confetti.className = 'confetti';
                    confetti.style.left = x + 'px';
                    confetti.style.top = y + 'px';
                    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                    document.body.appendChild(confetti);
                    
                    const angle = Math.random() * Math.PI * 2;
                    const velocity = 5 + Math.random() * 5;
                    const rotation = Math.random() * 360;
                    
                    let posX = x;
                    let posY = y;
                    let opacity = 1;
                    let scale = 0.5 + Math.random();
                    
                    confetti.style.width = (5 + Math.random() * 10) + 'px';
                    confetti.style.height = (5 + Math.random() * 10) + 'px';
                    confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
                    confetti.style.opacity = opacity;
                    confetti.style.transform = `rotate(${rotation}deg) scale(${scale})`;
                    
                    const animateConfetti = () => {
                        posX += Math.cos(angle) * velocity;
                        posY += Math.sin(angle) * velocity + 0.5; // Add gravity
                        opacity -= 0.02;
                        scale -= 0.01;
                        
                        confetti.style.left = posX + 'px';
                        confetti.style.top = posY + 'px';
                        confetti.style.opacity = opacity;
                        confetti.style.transform = `rotate(${rotation}deg) scale(${scale})`;
                        
                        if (opacity > 0 && scale > 0) {
                            requestAnimationFrame(animateConfetti);
                        } else {
                            confetti.remove();
                        }
                    };
                    
                    requestAnimationFrame(animateConfetti);
                }
            }
        });
   