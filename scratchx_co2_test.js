(function(ext){

  ext._shutdown = function() {};

  ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
  };

  var global_list = {
          "naruto":"http://www.naruto-u.ac.jp/facultystaff/naosone/sensors/co2.json",
      };

  var global_key = new Array();
  for(key in global_list){
      global_key.push(key);
  }

  /* CO2 */
  ext.co2 = function(place, callback) {

    $.ajax({
            url:global_list[place],
            type: 'POST',
            dataType:'jsonp',
            jsonpCallback:'co2',
            timeout:5000,
            success: function(data){
                        //console.log(data['co2']);
                        callback(data['co2']);
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
    ["R", "%m.menu のCO2濃度", "co2", "naruto"]
  ],
  "menus": {
     menu: global_key
   }
};

ScratchExtensions.register("ブロック群のタイトル", descriptor, ext);

})({});
