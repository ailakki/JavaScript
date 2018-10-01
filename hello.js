

var array = ['v1','v2','v3'];

for (var i = 0; i < array.length; i++) {
    console.log(array[i]);
}

console.log(20);

var time = 0;

var timer = setInterval (function(){
    time += 2;
    console.log(time + ' sec. has passed.');
    if (time > 5){
        clearInterval(timer);
    }
}, 2000);

console.log(__dirname);
