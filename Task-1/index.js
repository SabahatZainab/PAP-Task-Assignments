
// Class-2 Task
//nodejs built in packages

const os = require('os');
console.log("Platform: " + os.platform());
console.log("Architecture: " + os.arch());
console.log("Host Name:"+ os.hostname());
console.log("Name of OS:"+os.type());
console.log("User Info:"+os.userInfo());

const myInt = setInterval(function () {
    console.log("Hello");
}, 5000);


