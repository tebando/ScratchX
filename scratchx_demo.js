(function(ext){

  ext._shutdown = function() {};

  ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
  };

  var global_list = {
          "鳴門":"http://www.naruto-u.ac.jp/facultystaff/naosone/sensors/"
      };

  var global_key = new Array();
  for(key in global_list){
      global_key.push(key);
  }

  /* CO2 */
  ext.co2 = function(place, callback) {

    $.ajax({
            url:global_list[place]+"co2.json",
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

  /* 温度 */
  ext.temperature = function(place, callback) {

    $.ajax({
            url:global_list[place]+"temperature.json",
            dataType:'json',
            timeout:5000,
            success: function(data){
                        //console.log("success");
                        callback(data.temperature);
                     },
            error : function(){
                        //console.log("error");
                    },
            complete: function(data){
                        //console.log("complete");
                      }
    });
  };

var descriptor = {
  "blocks": [
    /* CO2 */
    ["R", "%m.menu のCO2濃度", "co2", "鳴門"],
    /* 温度 */
    ["R", "%m.menu の温度", "temperature", "鳴門"]
  ],
  "menus": {
     menu: global_key
   }
};

ScratchExtensions.register("ブロック群のタイトル", descriptor, ext);

})({});
