(function(ext){
  ext._shutdown = function() {};

  ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
  };

  /* hue */
  ext.onHue1 = function() {
    console.log("on:");
    $.ajax({
          url:'http://192.168.234.58:1880/setHue1?on=true',
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

  ext.colorHue1 = function(color) {
    console.log("oncolor:");
    $.ajax({
          url:'http://192.168.234.58:1880/setHue1?on=true&hue='+color,
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

  
  ext.offHue1 = function() {
    console.log("off:");
    $.ajax({
          url:'http://192.168.234.58:1880/setHue1?off=true',
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
  
  ext.onHue2 = function() {
    console.log("on:");
    $.ajax({
          url:'http://192.168.234.58:1880/setHue2?on=true',
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

  ext.colorHue2 = function(color) {
    console.log("oncolor:");
    $.ajax({
          url:'http://192.168.234.58:1880/setHue2?on=true&hue='+color,
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
  
  ext.offHue2 = function() {
    console.log("off:");
    $.ajax({
          url:'http://192.168.234.58:1880/setHue2?off=true',
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
  
    ext.onHue3 = function() {
    console.log("on:");
    $.ajax({
          url:'http://192.168.234.58:1880/setHue3?on=true',
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

  ext.colorHue3 = function(color) {
    console.log("oncolor:");
    $.ajax({
          url:'http://192.168.234.58:1880/setHue3?on=true&hue='+color,
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

  
  ext.offHue3 = function() {
    console.log("off:");
    $.ajax({
          url:'http://192.168.234.58:1880/setHue3?off=true',
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
    /* Hue */
    [" ", "LED1を点灯する", "onHue1", "",""],
    [" ", "LED1の色を %s にする", "colorHue1", "",""],
    [" ", "LED1を消灯する", "offHue1", "",""],
    [" ", "LED2を点灯する", "onHue2", "",""],
    [" ", "LED2の色を %s にする", "colorHue2", "",""],
    [" ", "LED2を消灯する", "offHue2", "",""],
    [" ", "LED3を点灯する", "onHue3", "",""],
    [" ", "LED3の色を %s にする", "colorHue3", "",""],
    [" ", "LED3を消灯する", "offHue3", "",""],
  ],
//  "menus": {
//     display:["表示する","表示しない"]
//  }
};

ScratchExtensions.register("Hueの制御", descriptor, ext);

})({});
