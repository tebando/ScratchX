(function(ext){

  ext._shutdown = function() {};

  ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
  };

  var global_list = {
          "naruto":"http://www.naruto-u.ac.jp/facultystaff/naosone/sensors/co2.json",
          "ip":"http://160.204.250.222/co2.json"
      };

  var global_key = new Array();
  for(key in global_list){
      global_key.push(key);
  }

  /* CO2 */
  ext.co2 = function(place, callback) {

    $.ajax({
            url:global_list[place],
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
  ext.get_sensor_temp = function(callback) {
    $.ajax({
            url: 'http://www.naruto-u.ac.jp/facultystaff/naosone/sensors/temp.json',
            dataType:'json',
            timeout:5000,
            success: function(data){
              if (data.cod == 200) {
                callback(data.temp);
              } else {
                callback();
              }
            }
    });
  };
  
var descriptor = {
  "blocks": [
    /* CO2 */
    ["R", "%m.menu のCO2濃度", "co2", "naruto"],
    ["R", "センサーの温度", "get_sensor_temp"]
  ],
  "menus": {
     menu: global_key
   }
};

ScratchExtensions.register("温度，CO2センサー拡張", descriptor, ext);

})({});
