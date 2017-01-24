(function(ext){

  ext._shutdown = function() {};

  ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
  };

  var ip_list = {
          "A":"192.168.0.103",
          "B":"160.204.180.129",
          "C":"160.204.180.130",
          "D":"160.204.180.254"
      };

  var ip_key = new Array();
  for(key in ip_list){
      ip_key.push(key);
  }


  /* 温度 */
  ext.temp = function(place, callback) {
    $.ajax({
      url:'http://'+place+':1880/temp.json',
      dataType:'json',
      timeout:5000,
      success:function(data){
        callback(data.temp);
      },
      error:function(){
        console.log("temp error");
        callback("null");
      }
    });
  };

  /* 湿度 */
  ext.humi = function(place, callback) {
    $.ajax({
      url:'http://'+place+':1880/humi.json',
      dataType:'json',
      timeout:5000,
      success:function(data){
        callback(data.humi);
      },
      error:function(){
        console.log("humi error");
        callback("");
      }
    });
  };

  /* 気圧 */
  ext.baro = function(place, callback) {
    $.ajax({
      url:'http://'+place+':1880/baro.json',
      dataType:'json',
      timeout:5000,
      success:function(data){
        callback(data.baro);
      },
      error:function(){
        console.log("baro error");
        callback("");
      }
    });
  };

  /* 加速度 */
  ext.acce = function(place,callback) {
    $.ajax({
      url:'http://'+place+':1880/acce.json',
      dataType:'json',
      timeout:5000,
      success:function(data){
        /* 加速度x座標 */
        if($(':hidden[name="'+place+'_accex"]').length){
          $(':hidden[name="'+place+'_accex"]').val(data.accex);
        }else{
          $(document.body).append('<input type="hidden" name="'+place+'_accex" value="' + data.accex + '">');
        }
        /* 加速度y座標 */
        if($(':hidden[name="'+place+'_accey"]').length){
          $(':hidden[name="'+place+'_accey"]').val(data.accey);
        }else{
          $(document.body).append('<input type="hidden" name="'+place+'_accey" value="' + data.accey + '">');
        }
        /* 加速度z座標 */
        if($(':hidden[name="'+place+'_accez"]').length){
          $(':hidden[name="'+place+'_accez"]').val(data.accez);
        }else{
          $(document.body).append('<input type="hidden" name="'+place+'_accez" value="' + data.accez + '">');
        }
        callback('acce success');
      },
      error:function(){
        console.log("acce error");
        callback("");
      }
    });
  };
  ext.accex = function(place,callback) {
    callback($(':hidden[name="'+place+'_accex"]').val());
  };
  ext.accey = function(place,callback) {
    callback($(':hidden[name="'+place+'_accey"]').val());
  };
  ext.accez = function(place,callback) {
    callback($(':hidden[name="'+place+'_accez"]').val());
  };

  /* 磁気 */
  ext.megn = function(place,callback) {
    $.ajax({
      url:'http://'+place+':1880/megn.json',
      dataType:'json',
      timeout:5000,
      success:function(data){
        /* 磁気x座標 */
        if($(':hidden[name="'+place+'_megnx"]').length){
          $(':hidden[name="'+place+'_megnx"]').val(data.megnx);
        }else{
          $(document.body).append('<input type="hidden" name="'+place+'_megnx" value="' + data.megnx + '">');
        }
        /* 磁気y座標 */
        if($(':hidden[name="'+place+'_megny"]').length){
          $(':hidden[name="'+place+'_megny"]').val(data.megny);
        }else{
          $(document.body).append('<input type="hidden" name="'+place+'_megny" value="' + data.megny + '">');
        }
        /* 磁気z座標 */
        if($(':hidden[name="'+place+'_megnz"]').length){
          $(':hidden[name="'+place+'_megnz"]').val(data.megnz);
        }else{
          $(document.body).append('<input type="hidden" name="'+place+'_megnz" value="' + data.megnz + '">');
        }
        callback('megny success');
      },
      error:function(){
        console.log("megn error");
        callback("");
      }
    });
  };
  ext.megnx = function(place,callback) {
    callback($(':hidden[name="'+place+'_megnx"]').val());
  };
  ext.megny = function(place,callback) {
    callback($(':hidden[name="'+place+'_megny"]').val());
  };
  ext.megnz = function(place,callback) {
    callback($(':hidden[name="'+place+'_megnz"]').val());
  };

  /* 角速度 */
  ext.gyro = function(place,callback) {
    $.ajax({
      url:'http://'+place+':1880/gyro.json',
      dataType:'json',
      timeout:5000,
      success:function(data){
        /* 角速度x座標 */
        if($(':hidden[name="'+place+'_gyrox"]').length){
          $(':hidden[name="'+place+'_gyrox"]').val(data.gyrox);
        }else{
          $(document.body).append('<input type="hidden" name="'+place+'_gyrox" value="' + data.gyrox + '">');
        }
        /* 角速度y座標 */
        if($(':hidden[name="'+place+'_gyroy"]').length){
          $(':hidden[name="'+place+'_gyroy"]').val(data.gyroy);
        }else{
          $(document.body).append('<input type="hidden" name="'+place+'_gyroy" value="' + data.gyroy + '">');
        }
        /* 角速度z座標 */
        if($(':hidden[name="'+place+'_gyroz"]').length){
          $(':hidden[name="'+place+'_gyroz"]').val(data.gyroz);
        }else{
          $(document.body).append('<input type="hidden" name="'+place+'_gyroz" value="' + data.gyroz + '">');
        }
        callback('gyro success');
      },
      error:function(){
        console.log("gyro error");
        callback("");
      }
    });
  };
  ext.gyrox = function(place,callback) {
    callback($(':hidden[name="'+place+'_gyrox"]').val());
  };
  ext.gyroy = function(place,callback) {
    callback($(':hidden[name="'+place+'_gyroy"]').val());
  };
  ext.gyroz = function(place,callback) {
    callback($(':hidden[name="'+place+'_gyroz"]').val());
  };

  /* 照度 */
  ext.light = function(place, callback) {
    $.ajax({
      url:'http://'+place+':1880/light.json',
      dataType:'json',
      timeout:5000,
      success:function(data){
        callback(data.light);
      },
      error:function(){
        console.log("light error");
        callback("");
      }
    });
  };

  /* 超音波距離 */
  ext.distance = function(place, callback) {
    $.ajax({
      url:'http://'+place+':1880/distance.json',
      dataType:'json',
      timeout:5000,
      success:function(data){
        callback(data.distance);
      },
      error:function(){
        console.log("distance error");
        callback("");
      }
    });
  };

var descriptor = {
  "blocks": [
    /* 温度 */
    ["R", "%s の温度", "temp", ""],
    /* 湿度 */
    ["R", "%s の湿度", "humi", ""],
    /* 気圧 */
    ["R", "%s の気圧", "baro", ""],
    /* 加速度 */
    ["w", "%s の加速度を取得", "acce", ""],
    ["R", "%s のx座標加速度", "accex", ""],
    ["R", "%s のy座標加速度", "accey", ""],
    ["R", "%s のz座標加速度", "accez", ""],
    /* 磁気 */
    ["w", "%s の磁気を取得", "megn", ""],
    ["R", "%s のx座標磁気", "megnx", ""],
    ["R", "%s のy座標磁気", "megny", ""],
    ["R", "%s のz座標磁気", "megnz", ""],
    /* 角速度 */
    ["w", "%s の角速度を取得", "gyro", ""],
    ["R", "%s のx座標角速度", "gyrox", ""],
    ["R", "%s のy座標角速度", "gyroy", ""],
    ["R", "%s のz座標角速度", "gyroz", ""],
    /* 照度 */
    ["R", "%s の照度", "light", ""],
    /* 超音波距離センサ */
    ["R", "%s の超音波距離センサ", "distance", ""]
  ],
  "menus": {
     menu: ip_key
   }
};

ScratchExtensions.register("ブロック群のタイトル", descriptor, ext);

})({});
