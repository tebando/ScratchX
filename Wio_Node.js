(function(ext){

  ext._shutdown = function() {};

  ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
  };

  var token = '451daaedad456e264e5867c05cbe2beb';

  /* 4-Digit Display */
  ext.fdd = function(place, num) {

    var place = place-1;

    console.log("place:"+place);
    console.log("num:"+num);
    $.ajax({
          url:'https://cn.wio.seeed.io/v1/node/Grove4DigitUART0/display_digits/'+ place +'/'+ num +'?access_token='+token,
          type:'POST',
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
  /* 4-Digit Display Colon */
  ext.fddc = function(dis) {
    var dis_val = 0
    if (dis == '表示する') {
      dis_val = 1;
    }

    $.ajax({
          url:'https://cn.wio.seeed.io/v1/node/Grove4DigitUART0/display_point/' + dis_val + '?access_token='+token,
          type:'POST',
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
    /* 4-Digit Display */
    [" ", "数字表示機の%n 番目に%n を表示する", "fdd", "",""],
    [" ", "数字表示機の:を %m.display", "fddc", "表示する"]
  ],
  "menus": {
     display:["表示する","表示しない"]
  }
};

ScratchExtensions.register("ブロック群のタイトル", descriptor, ext);

})({});
