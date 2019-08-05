(function(ext){
  ext._shutdown = function() {};

  ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
  };

  /* fan_led */
  ext.onFan = function() {
    console.log("on:");
    $.ajax({
          url:'http://192.168.234.58:1880/onFan',
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

  ext.offFan = function() {
    console.log("off:");
    $.ajax({
          url:'http://192.168.234.58:1880/offFan',
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

  ext.onLight1 = function() {
    console.log("on:");
    $.ajax({
          url:'http://192.168.234.58:1880/onLight1',
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

  ext.offLight1 = function() {
    console.log("off:");
    $.ajax({
          url:'http://192.168.234.58:1880/offLight1',
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

  ext.onLight2 = function() {
    console.log("on:");
    $.ajax({
          url:'http://192.168.234.58:1880/onLight2',
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

  ext.offLight2 = function() {
    console.log("off:");
    $.ajax({
          url:'http://192.168.234.58:1880/offLight2',
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

  
var descriptor = {
  "blocks": [
    /* fan_led */
    [" ", "扇風機をONにする", "onFan", "",""],
    [" ", "扇風機をOFFにする", "offFan", "",""],
    [" ", "ミニLED1を点灯する", "onLight1", "",""],
    [" ", "ミニLED1を消灯する", "offLight1", "",""],
    [" ", "ミニLED2を点灯する", "onLight2", "",""],
    [" ", "ミニLED2を消灯する", "offLight2", "",""],
  ],
//  "menus": {
//     display:["表示する","表示しない"]
//  }
};

ScratchExtensions.register("扇風機とミニLEDの制御", descriptor, ext);

})({});
