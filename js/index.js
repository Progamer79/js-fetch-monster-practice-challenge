const BASE_URL = "http://localhost:3000/";









function getMonsters(page) {
const url = `${BASE_URL}monsters/?_limit=50&_page=${page}`;
return fetch(url)
   .then(r => r.json())
   

}
getMonsters(2).then(data => console.log(data));

function createMonsterDiv(monsterObj) {
    const div = document.createElement('div'),
    h2 = document.createElement('h2'),
    h3 = document.createElement('h3'),
    p = document.createElement('p');

    h

    h2.textContent = monsterObj.name;
    h3.textContent = monsterObj.age;
    p.textContent = monsterObj.description
}

   div.appendChild(h2);
   div.appendChild(h3);
   div.appendChild(p);

   return div;

const testMonsterObj = { 

}




  function showMonsters(monstersArray) {
      const monsterObj = monstersArray[0];
      const monsterContainer = document.getElementById('monster-container');
      const monsterDiv = createMonsterDiv(monsterObj);
      monsterContainer.appendChild(monsterDiv);

      monstersArray.forEach(monsterObj => {
         const monsterDiv = createMonsterDiv(monsterObj);
         monsterContainer.appendChild(monsterDiv);
      });
  }

  const testMonsterArray = [
]


  showMonsters(testMonstersArray);

 // getMonsters(1)
   // .then(monstersArray => console.log(monstersArray))


   getMonsters(1)
      .then(monstersArray => showMonsters(monstersArray));




