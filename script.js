
/*
    Top
 */

document.getElementById('up').addEventListener('click',function() {
    let t = parseInt(document.getElementById('kenny').style.top);
    if ( t > 0) {
        t = t - 10;
        document.getElementById('kenny').style.top = t + 'px';
    }
});

/*
    Left
 */

document.getElementById('left').addEventListener('click',function() {
    let l = parseInt(document.getElementById('kenny').style.left);
    if ( l > 0) {
        l = l - 10;
        document.getElementById('kenny').style.left = l + 'px';
    }
});

/*
    Right
 */

let dead = 1;
document.getElementById('right').addEventListener('click',function() {
    let r = parseInt(document.getElementById('kenny').style.left);
    if ( r < 450 - 32) {
        r = r + 10;
        document.getElementById('kenny').style.left = r + 'px';
    }
    else {
        document.getElementById('kenny').style.top = "200px";
        document.getElementById('kenny').style.left = "200px";
        alert ("Kenny est mort !" + " " + dead);
        dead++;
    }
});

let lineRed = document.createElement('div');
lineRed.style.backgroundColor = "red";
lineRed.style.width = "50px";
lineRed.style.height = "500px";
lineRed.style.position = "relative";
lineRed.style.left = "450px";

let container = document.getElementById('viewport');
container.prepend(lineRed);

/*
    Down
 */

document.getElementById('down').addEventListener('click',function() {
    let d = parseInt(document.getElementById('kenny').style.top);
    if ( d < 500 -32) {
        d = d + 10;
        document.getElementById('kenny').style.top = d + 'px';
    }
});



