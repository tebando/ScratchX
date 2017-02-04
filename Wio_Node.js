(function(ext){

  ext._shutdown = function() {};

  ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
  };

  var token = '451daaedad456e264e5867c05cbe2beb';

  /* 4-Digit Display */
  ext.fdd = function(place, num) {

    var place = place.trim();
    var num = num.trim();

    if (place > 5 && place < 0) {
        console.log('place value is infelicity');
    }
    if (num > 10 && num < 0) {
        console.log('num value is infelicity');
    }

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

var descriptor = {
  "blocks": [
    /* 4-Digit Display */
    [" ", "%n 番目に%n を表示する", "fdd", "",""]
  ],
  "menus": {}
};

ScratchExtensions.register("ブロック群のタイトル", descriptor, ext);

})({});
