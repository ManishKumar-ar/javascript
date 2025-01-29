// //001// add some elements that not a part of it /////////////////

// const video = {
//     title: 'a',
//     tags: ['a', 'b', 'c'],
//     showTags() {
//         this.tags.forEach(function (tag) {
//             console.log(this, tag);
//         },{firstName:"manish"}); 
//     }
// };

// video.showTags();



//output
// { firstName: 'manish' } a
// { firstName: 'manish' } b
// { firstName: 'manish' } c



























//002// solution -  /////////////////

const video = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(function (tag) {
            console.log(this.title, tag);
        }, this);
    }
};

video.showTags();

//output
// a a
// a b
// a c
