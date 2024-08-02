function removeAllInlineStyles(player) {
    const cells = document.querySelectorAll(`.${player} > tr > td > .ship-node`);
    cells.forEach((cell) => {
        cell.removeAttribute("style");
    });
}

export {removeAllInlineStyles};