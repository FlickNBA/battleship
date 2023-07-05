const sunkShip = (coordinates, player, enemy) => {
  let sunkTile = document.querySelector(`#${enemy.slice(0, 1)}-${coordinates}`);
  let tilesToSunk = document.querySelectorAll(`#${enemy} > div`);
  tilesToSunk.forEach((t) => {
    if (t.innerText == sunkTile.innerText) drawAttack(t.id.split("-").splice(1).join("-"), player, 555);
  });
};
export const drawAttack = (coordinates, player, result) => {
  console.log(coordinates, player, result);
  let CSS = "";
  let enemySelector = player.id.slice(0, 1) == "p" ? "enemy" : "player";

  switch (result) {
    case 1:
      CSS = "hit";
      break;
    case 2:
      CSS = "missed";
      break;
    case 3:
      CSS = "missed";
      break;
    case 5:
      CSS = "sunk";
      sunkShip(coordinates, player, enemySelector);
      break;
    case 555:
      CSS = "sunk";
      break;
  }

  let dot = document.createElement("div");
  dot.classList = `dot border-${player.id} ${CSS}`;

  if (document.querySelector(`#${enemySelector.slice(0, 1)}-${coordinates}`).childNodes.length > 1) {
    document.querySelector(`#${enemySelector.slice(0, 1)}-${coordinates} > .dot`).remove();
  }

  document.querySelector(`#${enemySelector.slice(0, 1)}-${coordinates}`).appendChild(dot);
};
