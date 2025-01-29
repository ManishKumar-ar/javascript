const video = {
    title: 'a',
    play() {
        console.log(this);
    }
};

video.stop = function () {
    console.log(this);
};

video.stop();

//output
// { title: 'a', play: [Function: play], stop: [Function (anonymous)] }