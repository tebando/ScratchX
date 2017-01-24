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
      url:'http://'+ip_list[place]+':1880/temp.json',
      dataType:'json',
      timeout:5000,
      success:function(data){
        callback(data.temp);
      },
      error:function(){
        console.log("temp error");
      }
    });
  };

  /* 湿度 */
  ext.humi = function(place, callback) {
    $.ajax({
      url:'http://'+ip_list[place]+':1880/humi.json',
      dataType:'json',
      timeout:5000,
      success:function(data){
        callback(data.humi);
      },
      error:function(){
        console.log("humi error");
      }
    });
  };

  /* 気圧 */
  ext.baro = function(place, callback) {
    $.ajax({
      url:'http://'+ip_list[place]+':1880/baro.json',
      dataType:'json',
      timeout:5000,
      success:function(data){
        callback(data.baro);
      },
      error:function(){
        console.log("baro error");
      }
    });
  };

  /* 加速度 */
  ext.acce = function(place,callback) {
    $.ajax({
      url:'http://'+ip_list[place]+':1880/acce.json',
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
      },
      error:function(){
        console.log("acce error");
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
      url:'http://'+ip_list[place]+':1880/megn.json',
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
      },
      error:function(){
        console.log("megn error");
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
      url:'http://'+ip_list[place]+':1880/gyro.json',
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
      },
      error:function(){
        console.log("gyro error");
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
      url:'http://'+ip_list[place]+':1880/light.json',
      dataType:'json',
      timeout:5000,
      success:function(data){
        callback(data.light);
      },
      error:function(){
        console.log("light error");
      }
    });
  };

  /* 超音波距離 */
  ext.distance = function(place, callback) {
    $.ajax({
      url:'http://'+ip_list[place]+':1880/distance.json',
      dataType:'json',
      timeout:5000,
      success:function(data){
        callback(data.distance);
      },
      error:function(){
        console.log("distance error");
      }
    });
  };

var descriptor = {
  "blocks": [
    /* 温度 */
    ["R", "%m.menu の温度", "temp", ip_key[0]],
    /* 湿度 */
    ["R", "%m.menu の湿度", "humi", ip_key[0]],
    /* 気圧 */
    ["R", "%m.menu の気圧", "baro", ip_key[0]],
    /* 加速度 */
    ["w", "%m.menu の加速度を取得", "acce", ip_key[0]],
    ["R", "%m.menu のx座標加速度", "accex", ip_key[0]],
    ["R", "%m.menu のy座標加速度", "accey", ip_key[0]],
    ["R", "%m.menu のz座標加速度", "accez", ip_key[0]],
    /* 磁気 */
    ["w", "%m.menu の磁気を取得", "megn", ip_key[0]],
    ["R", "%m.menu のx座標磁気", "megnx", ip_key[0]],
    ["R", "%m.menu のy座標磁気", "megny", ip_key[0]],
    ["R", "%m.menu のz座標磁気", "megnz", ip_key[0]],
    /* 角速度 */
    ["w", "%m.menu の角速度を取得", "gyro", ip_key[0]],
    ["R", "%m.menu のx座標角速度", "gyrox", ip_key[0]],
    ["R", "%m.menu のy座標角速度", "gyroy", ip_key[0]],
    ["R", "%m.menu のz座標角速度", "gyroz", ip_key[0]],
    /* 照度 */
    ["R", "%m.menu の照度", "light", ip_key[0]],
    /* 超音波距離センサ */
    ["R", "%m.distance_menu の超音波距離センサ", "distance", "A"]
  ],
  "menus": {
     menu: ip_key,
     distance_menu: ["A"]
   }
};

ScratchExtensions.register("ブロック群のタイトル", descriptor, ext);

})({});
