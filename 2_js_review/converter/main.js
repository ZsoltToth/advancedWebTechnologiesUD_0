const temp_converter = require('./temperature');

temp_converter.celsius2farenheit(0, console.log);

temp_converter.farenheit2celsius(32, (celsius)=>{
   if(celsius < 10){
       console.log("Too cold");
   }
   else{
       console.log("Its OK");
   }
});
