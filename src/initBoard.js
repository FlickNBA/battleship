let boards = [document.querySelector("#player"), document.querySelector("#enemy")];

const drawShips = (data, index) => {
  //let who = board.id;
  console.log(data, index);
  let who = data.players[index];
  console.log(who);
  who.ships.forEach((ship) => {
    console.log(ship, "ship");
    ship.coordinates.forEach((c) => {
      let tile = document.querySelector(`#${boards[index].id.slice(0, 1)}-${c.coordinates}`);
      let shipDiv = document.createElement("div");
      shipDiv.classList.add(who.name);
      shipDiv.innerHTML = `${ship.owner.name}`;
      tile.appendChild(shipDiv);
    });
  });
};

export const initBoard = (data) => {
  boards.forEach((board, index) => {
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
    drawShips(data, index);
  });
};

export const dot = (player) => {
  let d = document.createElement("div");
  d.classList = "dot";
};

// export const updateDOM = (data) => {
//   //who is player, who is enemy
//   let player = data.players[0];
//   let enemy = data.players[1];
//   data.board.forEach((tile) => {
//     let playerIndex;
//     let cssClass;
//     console.log(tile);
//     // let attackedBy = tile.attackedBy;
//     // let howManyShips = tile.status.length;
//     // console.log(`attacked by ${attackedBy}, ships on this tile: ${howManyShips}`);
//     tile.status.forEach((sh) => {
//       if (sh.owner == player) {
//         playerIndex = 0;
//       } else {
//         playerIndex = 1;
//       }
//       drawShip(sh, playerIndex);
//     });

//     tile.attackedBy.forEach((at) => {
//       console.log("attack", at);
//     });
//   });
// };
