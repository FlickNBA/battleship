export let boards = [document.querySelector("#player"), document.querySelector("#enemy")];

// export const drawShips1 = (data, index) => {
//   console.log(data, index);
//   let who = data.players[index];
//   console.log(who);
//   who.ships.forEach((ship) => {
//     console.log(ship, "ship");
//     ship.coordinates.forEach((c) => {
//       console.log(who);
//       let tile = document.querySelector(`#${who.id.slice(0, 1)}-${c.coordinates}`);
//       let shipDiv = document.createElement("div");
//       shipDiv.classList.add(who.name);
//       shipDiv.innerHTML = `${ship.name}`;

//       if (tile.childNodes.length > 1) {
//       }

//       tile.appendChild(shipDiv);
//     });
//   });
// };

export const drawShips2 = (data, player) => {
  let who = player;
  console.log(who);
  who.ships.forEach((ship) => {
    console.log(ship, "ship");
    ship.coordinates.forEach((c) => {
      console.log(who);
      let tile = document.querySelector(`#${who.id.slice(0, 1)}-${c.coordinates}`);
      let shipDiv = document.createElement("div");
      shipDiv.classList.add(who.name);
      shipDiv.innerHTML = `${ship.name}`;

      if (tile.childNodes) {
        tile.innerHTML = "";
      }

      tile.appendChild(shipDiv);
    });
  });
};

export const initBoard = (data) => {
  boards.forEach((board, index) => {
    document.querySelector(`.${board.id}`).innerText = data.players[index].name;
    board.style.width = `${Math.min(document.body.clientWidth, document.body.clientHeight) * 0.67}px`;
    board.style.height = `${Math.min(document.body.clientWidth, document.body.clientHeight) * 0.67}px`;
    board.style["grid-template-columns"] = `repeat(${data.size}, 1fr)`;
    board.style["grid-template-rows"] = `repeat(${data.size}, 1fr)`;

    for (let i = 0; i < data.size; i++) {
      for (let j = 0; j < data.size; j++) {
        let tile = document.createElement("div");
        tile.id = `${board.id.slice(0, 1)}-${i + 1}-${j + 1}`;
        //tile.innerHTML = `${i + 1}-${j + 1}`;
        board.appendChild(tile);
      }
    }
    //drawShips(data, index);
  });
};
