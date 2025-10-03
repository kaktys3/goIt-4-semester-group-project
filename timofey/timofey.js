document.addEventListener("DOMContentLoaded", () => {
    const characters = [
      {
        name: "Harry Potter",
        actor: "Daniel Radcliffe",
        dateOfBirth: "31-07-1980",
        house: "Gryffindor",
        alive: true,
        image: "https://ik.imagekit.io/hpapi/harry.jpg",
        info: "The Boy Who Lived"
      },
      {
        name: "Hermione Granger",
        actor: "Emma Watson",
        dateOfBirth: "19-09-1979",
        house: "Gryffindor",
        alive: true,
        image: "https://ik.imagekit.io/hpapi/hermione.jpeg",
        info: "The Boy Who Lived"
      },
      {
        name: "Ron Weasley",
        actor: "Rupert Grint",
        dateOfBirth: "01-03-1980",
        house: "Gryffindor",
        alive: true,
        image: "https://ik.imagekit.io/hpapi/ron.jpg",
        info: "Dragonski Despard"
      },
      {
        name: "Minerva McGonagall",
        actor: "Maggie Smith",
        dateOfBirth: "04-10-1925",
        house: "Gryffindor",
        alive: true,
        image: "https://ik.imagekit.io/hpapi/mcgonagall.jpg",
        info: "The Boy Who Lived"
      },
      {
        name: "Rubeus Hagrid",
        actor: "Robbie Coltrane",
        dateOfBirth: "06-12-1928",
        house: "Gryffindor",
        alive: true,
        image: "https://ik.imagekit.io/hpapi/hagrid.png",
        info: "Dragonski Despard"
      },
      {
        name: "Neville Longbottom",
        actor: "Matthew Lewis",
        dateOfBirth: "30-07-1980",
        house: "Gryffindor",
        alive: true,
        image: "https://ik.imagekit.io/hpapi/neville.jpg",
        info: "The Boy Who Lived"
      },
      {
        name: "Ginny Weasley",
        actor: "Bonnie Wright",
        dateOfBirth: "11-08-1981",
        house: "Gryffindor",
        alive: true,
        image: "https://ik.imagekit.io/hpapi/ginny.jpg",
        info: "The Boy Who Lived"
      },
      {
        name: "Sirius Black",
        actor: "Gary Oldman",
        dateOfBirth: "03-11-1959",
        house: "Gryffindor",
        alive: false,
        image: "https://ik.imagekit.io/hpapi/sirius.JPG",
        info: "Padfoot, Snuffles"
      }
    ];
  
    const gryffindorContainer = document.querySelector('.gryffindor');
  
    if (!gryffindorContainer) {
      console.error("❌ Елемент .gryffindor не знайдено!");
      return;
    }
  
    characters
      .filter(c => c.house === 'Gryffindor')
      .forEach(character => {
        const card = document.createElement('div');
        card.classList.add('character-card');
        card.innerHTML = `
          <img src="${character.image}" alt="${character.name}">
          <div class="card-content">
            <h3>${character.name}</h3>
            <p>${character.info}</p>
            <p>${character.house}</p>
            <p>${character.dateOfBirth}</p>
            <button class="more-info">Більше інформації ⚡</button>
          </div>
        `;
        gryffindorContainer.appendChild(card);
      });
  });
  const houses = document.querySelectorAll(".choose-house div");

 
  document.querySelector(".choose-gryffindor").classList.add("active");

  houses.forEach(house => {
    house.addEventListener("click", () => {
      houses.forEach(h => h.classList.remove("active"));
      house.classList.add("active");
    });
  });