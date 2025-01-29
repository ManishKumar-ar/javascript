// //001//show this show in function is global object///////////

// function playVideo() {
//     console.log(this);
// }

// playVideo();


// //output
// {/* <ref *1> Object [global]  */}





















//002//show this show in function is global object///////////

// function Video(title) {
//     this.title = title;
//     this.manish = title;
//     console.log(this);
// }

// const v = new Video('b');


//output
// Video { title: 'b' }










//003//show this show in function is global object///////////

// function Video(title) {
//     this.title = title;
//     this.manish = title;
//     console.log(this);
// }

// const v = new Video('b');


//output
// Video { title: 'b', manish: 'b' }