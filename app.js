var app = require('express')();
var http = require('http').createServer(app);
var gpio = require('onoff').Gpio;
var io = require('socket.io')(http);
const sensor = require('ds18b20-raspi');

const LED_id = [17, 18, 27, 22, 23, 24, 25, 5, 6, 13, 19, 26, 12, 16];
var LED = [];

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

http.listen(8080, () => {
  
});


LED_id.forEach((e,i)=>{
    LED.push(new gpio(e, 'out'));
    LED[i].writeSync(0);
});



temp();
setInterval(temp, 60000);

function temp(){
  tab = [];  
  x = Math.abs(sensor.readSimpleC());
  console.log(x);
  
  
  t = [Math.floor(Math.round(x)/10), Math.round(x%10)%10];
  
  for(i=0; i<=1; i++){
    switch(t[i]){
      case 0:
      tab = tab.concat([0,1,2,4,5,6].map((e)=>e+i*7));
    break;
    case 1:
      tab = tab.concat([0,6].map((e)=>e+i*7));
    break;
    case 2:
      tab = tab.concat([5,6,3,2,1].map((e)=>e+i*7));
    break;
    case 3:
      tab = tab.concat([5,6,3,0,1].map((e)=>e+i*7));
    break;
    case 4:
      tab = tab.concat([4,3,6,0].map((e)=>e+i*7));
    break;
    case 5:
      tab = tab.concat([5,4,3,0,1].map((e)=>e+i*7));
    break;
    case 6:
      tab = tab.concat([5,4,3,2,1,0].map((e)=>e+i*7));
    break;
    case 7:
      tab = tab.concat([5,6,0].map((e)=>e+i*7));
    break;
    case 8:
      tab = tab.concat([0,1,2,3,4,5,6].map((e)=>e+i*7));
    break;
    case 9:
      tab = tab.concat([0,1,3,4,5,6].map((e)=>e+i*7));
    break;
    }
  }
  wyswietl(tab);
}


function wyswietl(x){
  LED.forEach((e, i)=>{
    if(e.readSync() == 0 && x.includes(i)){
      e.writeSync(1);
    }else if(e.readSync() == 1 && !x.includes(i)){
      e.writeSync(0);
    }
  });
}
