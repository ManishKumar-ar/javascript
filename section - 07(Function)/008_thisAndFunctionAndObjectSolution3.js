// function playVideo() {
//     console.log(this);
// }

// playVideo.call({ name: 'Mosh' });
// playVideo();





















///002/////another way 
// function playVideo() {
//     console.log(this);
// }

// playVideo.call({ name: 'Mosh' });
// playVideo.apply({ name: 'Mosh' });
// playVideo();











///003/// with the help of bind() //////////////


// function playVideo(a, b) {
//     console.log(this);
// }


// const fn = playVideo.bind({ name: 'Mosh' }); //it return a new function 
// fn();

//outpuit
//{ name: 'Mosh' }























///004/// the actual solution


const video = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(function (tag) {
            console.log(this.title, tag);
        }.bind(this));
    }
};

video.showTags();

//output
// a a
// a b
// a c