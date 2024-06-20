const animationArea = document.getElementById('animation');
const eyes = document.querySelectorAll('.eye');
const pupils = document.querySelectorAll('.pupil');

animationArea.addEventListener('mousemove', (e) => {
    const rect = animationArea.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    pupils.forEach(pupil => {
        const eyeRect = pupil.parentElement.getBoundingClientRect();
        const eyeX = eyeRect.left + eyeRect.width / 2;
        const eyeY = eyeRect.top + eyeRect.height / 2;
        const angle = Math.atan2(y - eyeY, x - eyeX);
        const distance = Math.min(eyeRect.width / 4, Math.hypot(x - eyeX, y - eyeY));
        pupil.style.transform = `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px)`;
    });
});

// Function to make the eyes align and follow the mouse
animationArea.addEventListener('mouseenter', () => {
    eyes.forEach(eye => {
        eye.style.transform = 'translateY(0)';
    });
});

animationArea.addEventListener('mouseleave', () => {
    eyes.forEach(eye => {
        eye.style.transform = 'translateY(-20px)';
    });
});
