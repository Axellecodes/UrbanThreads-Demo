  // Parallax effect for product section
        window.addEventListener('scroll', () => {
            const parallax = document.querySelector('.parallax');
            if (parallax) {
                let scrollPosition = window.pageYOffset;
                parallax.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
            }
        });

        // Mobile menu toggle
        function toggleMenu() {
            const menu = document.querySelector('.navbar ul');
            menu.classList.toggle('active');
        }

        // Fade-in animation on scroll
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));