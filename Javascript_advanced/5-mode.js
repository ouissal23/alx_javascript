function changeMode(size, weight, transform, background, color) {
    return function() {
      const body = document.body;
      body.style.fontSize = size + 'px';
      body.style.fontWeight = weight;
      body.style.textTransform = transform;
      body.style.backgroundColor = background;
      body.style.color = color;
    };
  }
  
  function main() {
    const spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
    const darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
    const screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');
  
    const body = document.body;
    const paragraph = document.createElement('p');
    paragraph.textContent = 'Welcome Holberton!';
    body.appendChild(paragraph);
  
    const spookyButton = document.createElement('button');
    spookyButton.textContent = 'Spooky';
    spookyButton.addEventListener('click', spooky);
    body.appendChild(spookyButton);
  
    const darkModeButton = document.createElement('button');
    darkModeButton.textContent = 'Dark mode';
    darkModeButton.addEventListener('click', darkMode);
    body.appendChild(darkModeButton);
  
    const screamModeButton = document.createElement('button');
    screamModeButton.textContent = 'Scream mode';
    screamModeButton.addEventListener('click', screamMode);
    body.appendChild(screamModeButton);
  }
  
  document.addEventListener('DOMContentLoaded', main);