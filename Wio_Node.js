(function(ext){

  ext._shutdown = function() {};

  ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
  };

  var token = '451daaedad456e264e5867c05cbe2beb';

  /* 4-Digit Display */
  ext.fdd = function(place, num, callback) {
    place = place.replace(/ /g, "");
    num = num.replace(/ /g, "");

    if (place > 5 && place < 0) {
        console.log('place value is infelicity');
    	callback('place error');
    } else {
        place = parseInt(place)-1;
    }
    if (num > 10 && num < 0) {
        console.log('num value is infelicity');
    	callback('num error');
    }

    console.log("place:"+place);
    console.log("num:"+num);
    $.ajax({
          url:'https://cn.wio.seeed.io/v1/node/Grove4DigitUART0/display_digits/'+ place +'/'+ parseInt(num) +'?access_token='+token,
          type:'post',
          timeout:5000,
          cache:false,
          dataType:'json',
          success: function(data){
            console.log(data.result);
            callback(data.result);
          },
          error : function(){
            console.log('error');
            callback('error');
          }
    });
  };

var descriptor = {
  "blocks": [
    /* 4-Digit Display */
    ["w", "%n 番目に%n を表示する", "fdd", "",""]
  ],
  "menus": {}
};

ScratchExtensions.register("ブロック群のタイトル", descriptor, ext);

})({});
