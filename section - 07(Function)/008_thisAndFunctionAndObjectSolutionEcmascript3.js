//ecmascript  - when we use the arrow function then it was inherit the this property
const video = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
                                       //here the current method have all the property 
                                       //so from here the arrow funciton inherit all the this property
        this.tags.forEach((tag)=> {  
            console.log(this.title, tag);
        });
    }
};

video.showTags();

//output
// a a
// a b
// a c