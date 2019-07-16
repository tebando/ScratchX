(function(ext){
  var hostname = '';
  var hub = '';
  var port = 0;
  ext._shutdown = function() {};

  ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
  };
  ext.set_hostname = function(str) {
    hostname = str;
  };
  /* usb hub per port power control*/
  ext.usbHubCtrl = function(hub, port, power) {
    console.log("on:");
    $.ajax({
          url:'http://' + hostname + ':1880/usbhub?hub=' + hub + '&port=' + port + '&power=' + power,
          type:'GET',
          timeout:5000,
          dataType:'text',
          success: function(data){
            console.log(data.result);
          },
          error : function(){
            console.log('error');
          }
    });
  };
  /* wifibulb power control*/
  ext.bulbCtrl = function(ip, power) {
    console.log("on:");
    $.ajax({
          url:'http://' + hostname + ':1880/bulb?ip=' + ip + '&power=' + power,
          type:'GET',
          timeout:5000,
          dataType:'text',
          success: function(data){
            console.log(data.result);
          },
          error : function(){
            console.log('error');
          }
    });
  };
  /* wifibulb color control*/
  ext.bulbColor= function(ip, r, g, b) {
    console.log("on:");
    $.ajax({
          url:'http://' + hostname + ':1880/bulb?ip=' + ip + '&color=' + r + ',' + g + ',' + b,
          type:'GET',
          timeout:5000,
          dataType:'text',
          success: function(data){
            console.log(data.result);
          },
          error : function(){
            console.log('error');
          }
    });
  };

  /* CO2 */
  ext.get_co2 = function(callback) {
    $.ajax({
            url:'http://' + hostname + ':1880/co2.json',
            dataType:'json',
            timeout:5000,
            success: function(data){
                        //console.log("success");
                        callback(data.co2);
                     },
            error : function(){
                        //console.log("error");
                    },
            complete: function(data){
                        //console.log("complete");
                      }
    });
  };

  /* Temp */
  ext.get_temp= function(callback) {
    $.ajax({
            url:'http://' + hostname + ':1880/temp.json',
            dataType:'json',
            timeout:5000,
            success: function(data) {
                callback(data.temp);
            },
            error : function(){
            },
            complete: function(data) {
            }
    });
  };


var strings = {
	ON:	'on',
	OFF:	'off'
};

  
var descriptor = {
  "blocks": [
    [" ", "コントローラの接続先を %s にする", "set_hostname", 'hostname',""],
    /* usb hub per port power control*/
    [" ", "usbhub %s ポート %n を %m.power にする", "usbHubCtrl", 'hub', 'port', 'power',""],
    [" ", "wifiBulb %s を %m.power にする", "bulbCtrl", 'ip', 'power',""],
    [" ", "wifiBulb %s の色を %n, %n, %n にする", "bulbColor", 'ip', 'r','g','b',""],
    ["R", "センサーのCO2濃度", "get_co2", ""],
    ["R", "センサーの温度", "get_temp",""]
  ],
//  "menus": {
//     display:["表示する","表示しない"]
  "menus": {
	 power: [ strings.ON, strings.OFF ]
  }
//  }
};

ScratchExtensions.register("計測とLED,USB Hubの制御", descriptor, ext);

})({});
