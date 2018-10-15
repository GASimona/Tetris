function uniKeyCode(event) {
    var key = event.which || event.keyCode;
    // stanga
    if (key == 37) {
            directie = STANGA;
            deplaseazaPiesa(STANGA);
        return false;

    }
    // dreapta
    if (key == 39) {
            directie = DREAPTA;
            deplaseazaPiesa(DREAPTA);
        return false;

    }
    // jos
    if (key == 40) {
        directie = JOS;
        deplaseazaPiesa(JOS);
        return false;

    }
    if (key == 32) {
        adaugaPiesa();
        return false;

    }
}
document.onkeydown = uniKeyCode;

