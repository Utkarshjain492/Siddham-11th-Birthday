const no = document.querySelector('.no');
const settings = document.getElementById('settings');
const cross = document.getElementById('close');
const menu = document.getElementById('menu');

const purple = document.getElementById('purple');
const red = document.getElementById('red');
const yellow = document.getElementById('yellow');
const green = document.getElementById('green');
const blue = document.getElementById('blue');
const brown = document.getElementById('brown');
const orange = document.getElementById('orange');

const section = document.querySelector('main');
const hover = document.querySelector('hover');

const buttonWidth = 150;
const buttonHeight = 100;

const maxWidth = window.innerWidth - buttonWidth;
const maxHeight = window.innerHeight - buttonHeight;

no.addEventListener('mouseover', () => {
    no.style.left = Math.floor(Math.random() * (maxWidth + 1)) + 'px';
    no.style.top = Math.floor(Math.random() * (maxHeight + 1)) + 'px';
});

settings.addEventListener('click', () => {
    document.getElementById('close').style.animation = 'cls 0.5s linear';
    document.getElementById('settings').style.display = 'none';
    document.getElementById('menu').style.animation = 'menuOpn 1s forwards';
    document.getElementById('close').style.display = 'block';
});

cross.addEventListener('click', () => {
    document.getElementById('settings').style.animation = 'set 0.5s linear';
    document.getElementById('close').style.display = 'none';
    document.getElementById('menu').style.animation = 'menuCls 3s forwards';
    document.getElementById('settings').style.display = 'block';
});


purple.addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('settings').style.animation = 'set 0.5s linear';
    document.getElementById('close').style.display = 'none';
    document.getElementById('menu').style.animation = 'menuCls 3s forwards';
    document.getElementById('settings').style.display = 'block';
    var newStyle = document.createElement('style');
    newStyle.innerHTML = `
        .main::before {
	        background: linear-gradient(#000,purple,#000);
        }

        .hover:hover {
            background-color: purple;
        }

        .name::before {
            background: linear-gradient(to top, #5D0565 50%, #47034E 50%);
        }

        .msg::before {
            background: linear-gradient(to top, #5D0565 50%, #47034E 50%);
        }

        a:hover {
            background-color: #5D0565;
            color: black;
            box-shadow: 0 0 5px #5D0565,
                        0 0 25px #5D0565,
                        0 0 50px #5D0565,
                        0 0 250px #5D0565;
            -webkit-box-reflect: below 1px linear-gradient(transparent, #0005);
        }

        a span:nth-child(1) {
            background: linear-gradient(to right, transparent, purple);
        }

        a span:nth-child(2) {
            background: linear-gradient(to bottom, transparent, purple);
        }

        a span:nth-child(3) {
            background: linear-gradient(to left, transparent, purple);
        }

        a span:nth-child(4) {
            background: linear-gradient(to top, transparent, purple);
        }
    `;
    document.head.appendChild(newStyle);
});
    
red.addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('settings').style.animation = 'set 0.5s linear';
    document.getElementById('close').style.display = 'none';
    document.getElementById('menu').style.animation = 'menuCls 3s forwards';
    document.getElementById('settings').style.display = 'block';
    var newStyle = document.createElement('style');
    newStyle.innerHTML = `
        .main::before {
            background: linear-gradient(#000,red,#000);
        }
            
        .hover:hover {
            background-color: red;
        }

        .name::before {
            background: linear-gradient(to top, #c30f0e 50%, #900b0a 50%);
        }

        .msg::before {
            background: linear-gradient(to top, #c30f0e 50%, #900b0a 50%);
        }

        a:hover {
            background-color: #c30f0e;
            color: black;
            box-shadow: 0 0 5px #c30f0e,
                        0 0 25px #c30f0e,
                        0 0 50px #c30f0e,
                        0 0 250px #c30f0e;
            -webkit-box-reflect: below 1px linear-gradient(transparent, #0005);
        }

        a span:nth-child(1) {
            background: linear-gradient(to right, transparent, red);
        }

        a span:nth-child(2) {
            background: linear-gradient(to bottom, transparent, red);
        }

        a span:nth-child(3) {
            background: linear-gradient(to left, transparent, red);
        }

        a span:nth-child(4) {
            background: linear-gradient(to top, transparent, red);
        }
    `;
    document.head.appendChild(newStyle);
});

yellow.addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('settings').style.animation = 'set 0.5s linear';
    document.getElementById('close').style.display = 'none';
    document.getElementById('menu').style.animation = 'menuCls 3s forwards';
    document.getElementById('settings').style.display = 'block';
    var newStyle = document.createElement('style');
    newStyle.innerHTML = `
        .main::before {
	        background: linear-gradient(#000,yellow,#000);
        }

        .hover:hover {
            background-color: yellow;
        }

        .name::before {
            background: linear-gradient(to top, #fff176 50%, #f2d03b 50%);
        }

        .msg::before {
            background: linear-gradient(to top, #fff176 50%, #f2d03b 50%);
        }

        a:hover {
            background-color: #fff176;
            color: black;
            box-shadow: 0 0 5px #fff176,
                        0 0 25px #fff176,
                        0 0 50px #fff176,
                        0 0 250px #fff176;
            -webkit-box-reflect: below 1px linear-gradient(transparent, #0005);
        }

        a span:nth-child(1) {
            background: linear-gradient(to right, transparent, yellow);
        }

        a span:nth-child(2) {
            background: linear-gradient(to bottom, transparent, yellow);
        }

        a span:nth-child(3) {
            background: linear-gradient(to left, transparent, yellow);
        }

        a span:nth-child(4) {
            background: linear-gradient(to top, transparent, yellow);
        }
    `;
    document.head.appendChild(newStyle);
});

green.addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('settings').style.animation = 'set 0.5s linear';
    document.getElementById('close').style.display = 'none';
    document.getElementById('menu').style.animation = 'menuCls 3s forwards';
    document.getElementById('settings').style.display = 'block';
    var newStyle = document.createElement('style');
    newStyle.innerHTML = `
        .main::before {
	        background: linear-gradient(#000,green,#000);
        }

        .hover:hover {
            background-color: green;
        }

        .name::before {
            background: linear-gradient(to top, #8bc34a 50%, #588f27 50%);
        }

        .msg::before {
            background: linear-gradient(to top, #8bc34a 50%, #588f27 50%);
        }

        a:hover {
            background-color: #8bc34a;
            color: black;
            box-shadow: 0 0 5px #8bc34a,
                        0 0 25px #8bc34a,
                        0 0 50px #8bc34a,
                        0 0 250px #8bc34a;
            -webkit-box-reflect: below 1px linear-gradient(transparent, #0005);
        }

        a span:nth-child(1) {
            background: linear-gradient(to right, transparent, green);
        }

        a span:nth-child(2) {
            background: linear-gradient(to bottom, transparent, green);
        }

        a span:nth-child(3) {
            background: linear-gradient(to left, transparent, green);
        }

        a span:nth-child(4) {
            background: linear-gradient(to top, transparent, green);
        }
    `;
    document.head.appendChild(newStyle);
});

blue.addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('settings').style.animation = 'set 0.5s linear';
    document.getElementById('close').style.display = 'none';
    document.getElementById('menu').style.animation = 'menuCls 3s forwards';
    document.getElementById('settings').style.display = 'block';
    var newStyle = document.createElement('style');
    newStyle.innerHTML = `
        .main::before {
	        background: linear-gradient(#000,blue,#000);
        }

        .hover:hover {
            background-color: blue;
        }

        .name::before {
            background: linear-gradient(to top, #04668c 50%, #00abd8 50%);
        }

        .msg::before {
            background: linear-gradient(to top, #04668c 50%, #00abd8 50%);
        }

        a:hover {
            background-color: #04668c;
            color: black;
            box-shadow: 0 0 5px #04668c,
                        0 0 25px #04668c,
                        0 0 50px #04668c,
                        0 0 250px #04668c;
            -webkit-box-reflect: below 1px linear-gradient(transparent, #0005);
        }

        a span:nth-child(1) {
            background: linear-gradient(to right, transparent, blue);
        }

        a span:nth-child(2) {
            background: linear-gradient(to bottom, transparent, blue);
        }

        a span:nth-child(3) {
            background: linear-gradient(to left, transparent, blue);
        }

        a span:nth-child(4) {
            background: linear-gradient(to top, transparent, blue);
        }
    `;
    document.head.appendChild(newStyle);
});

brown.addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('settings').style.animation = 'set 0.5s linear';
    document.getElementById('close').style.display = 'none';
    document.getElementById('menu').style.animation = 'menuCls 3s forwards';
    document.getElementById('settings').style.display = 'block';
    var newStyle = document.createElement('style');
    newStyle.innerHTML = `
        .main::before {
	        background: linear-gradient(#000,brown,#000);
        }

        .hover:hover {
            background-color: brown;
        }

        .name::before {
            background: linear-gradient(to top, #4D2C29 50%, #78432C 50%);
        }

        .msg::before {
            background: linear-gradient(to top, #4D2C29 50%, #78432C 50%);
        }

        a:hover {
            background-color: #4D2C29;
            color: black;
            box-shadow: 0 0 5px #4D2C29,
                        0 0 25px #4D2C29,
                        0 0 50px #4D2C29,
                        0 0 250px #4D2C29;
            -webkit-box-reflect: below 1px linear-gradient(transparent, #0005);
        }

        a span:nth-child(1) {
            background: linear-gradient(to right, transparent, brown);
        }

        a span:nth-child(2) {
            background: linear-gradient(to bottom, transparent, brown);
        }

        a span:nth-child(3) {
            background: linear-gradient(to left, transparent, brown);
        }

        a span:nth-child(4) {
            background: linear-gradient(to top, transparent, brown);
        }
    `;
    document.head.appendChild(newStyle);
});

orange.addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('settings').style.animation = 'set 0.5s linear';
    document.getElementById('close').style.display = 'none';
    document.getElementById('menu').style.animation = 'menuCls 3s forwards';
    document.getElementById('settings').style.display = 'block';
    var newStyle = document.createElement('style');
    newStyle.innerHTML = `
        .main::before {
	        background: linear-gradient(#000,orange,#000);
        }

        .hover:hover {
            background-color: orange;
        }

        .name::before {
            background: linear-gradient(to top, #f57336 50%, #fa5b0f 50%);
        }

        .msg::before {
            background: linear-gradient(to top, #f57336 50%, #fa5b0f 50%);
        }

        a:hover {
            background-color: #f57336;
            color: black;
            box-shadow: 0 0 5px #f57336,
                        0 0 25px #f57336,
                        0 0 50px #f57336,
                        0 0 250px #f57336;
            -webkit-box-reflect: below 1px linear-gradient(transparent, #0005);
        }

        a span:nth-child(1) {
            background: linear-gradient(to right, transparent, orange);
        }

        a span:nth-child(2) {
            background: linear-gradient(to bottom, transparent, orange);
        }

        a span:nth-child(3) {
            background: linear-gradient(to left, transparent, orange);
        }

        a span:nth-child(4) {
            background: linear-gradient(to top, transparent, orange);
        }
    `;
    document.head.appendChild(newStyle);
});