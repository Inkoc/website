document.addEventListener('DOMContentLoaded', (event) => {
    const logo = document.getElementById('logo');
    let container = document.querySelector('.container');
    let x = Math.random() * (container.clientWidth - logo.clientWidth);
    let y = Math.random() * (container.clientHeight - logo.clientHeight);
    let xSpeed = 2;
    let ySpeed = 2;

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    function moveLogo() {
        x += xSpeed;
        y += ySpeed;

        if (x <= 0 || x + logo.clientWidth >= container.clientWidth) {
            xSpeed = -xSpeed;
            logo.style.color = getRandomColor();
        }
        if (y <= 0 || y + logo.clientHeight >= container.clientHeight) {
            ySpeed = -ySpeed;
            logo.style.color = getRandomColor();
        }

        logo.style.transform = `translate(${x}px, ${y}px)`;
    }

    setInterval(moveLogo, 10);
});
