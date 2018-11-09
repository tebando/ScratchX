function(ext){
  ext._shutdown = function() {};

  ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
  };

  /* hue */
  ext.onHue1 = function() {

    console.log("on:");
    $.ajax({
          url:'http://160.204.91.185:1880/setHue1?on=true',
          type:'GET',
          timeout:5000,
          dataType:'json',
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
          url:'http://160.204.91.185:1880/setHue1?off=true',
          type:'GET',
          timeout:5000,
          dataType:'json',
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
    [" ", "LED1を消灯する", "offHue1", "",""],
  ],
  "menus": {
     display:["表示する","表示しない"]
  }
};

ScratchExtensions.register("Hueの制御", descriptor, ext);

})({});
