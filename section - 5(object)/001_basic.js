const circle = {
    radius: 1,      // Number data type
    location: {     // Object literal for location
        x: 1,
        y: 1
    },
    isVisible: true, 
    draw: function () {
        console.log('draw from inside object');
    }
};

console.log('Radius:', circle.radius); 
console.log('Location:', circle.location); 
console.log('Location x:', circle.location.x); 
console.log('Location y:', circle.location.y);
console.log('Is Visible:', circle.isVisible);

circle.draw();

//output/////////////////////////////////////////////////////////////////////////////////////////
// Radius: 1
// Location: { x: 1, y: 1 }
// Location x: 1
// Location y: 1
// Is Visible: true
// draw from inside object



//////////////////////////////////////////////////////////////////////////////////////////////////////////
// Logging all properties and values using bracket notation
console.log('Radius:', circle['radius']); 
console.log('Location:', circle['location']); 
console.log('Location x:', circle['location']['x']); 
console.log('Location y:', circle['location']['y']);
console.log('Is Visible:', circle['isVisible']);

// Calling the draw method using bracket notation
circle['draw']();