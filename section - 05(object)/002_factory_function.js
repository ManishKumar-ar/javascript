
// factory fuction - to create objects
function createCircle(radius) {
    return {
        radius,
        draw: function () {
            console.log('draw from inside object');
        }
    };
}


const circle1 = createCircle(1);   // here this fuunction return the object
console.log(circle1.radius);
circle1.draw();

////////////////////////////////////////////output//////////////////////////////
// 1
// draw from inside object


