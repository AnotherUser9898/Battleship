function renderShipHit(shipCell) {
    shipCell.style.cssText += "background-color: red";
}

function renderMisHit(gridCell) {
    gridCell.style.cssText += "background-color: yellow";
}



export {renderShipHit,renderMisHit};