// const video = {
//     title: 'a',
//     tags: ['a', 'b', 'c'],
//     showTags() {
//         this.tags.forEach(function(tag) {
//             console.log( this.title,tag);
//         });
//     }
// };

// video.showTags();



//output
// a
// b
// c














const video = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(function(tag) {
            console.log( this,tag);
        });
    }
};

video.showTags();


//output
// undefined a
// undefined b
// undefined c