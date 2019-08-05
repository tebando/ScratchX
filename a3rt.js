//
// https://blog.tinkers.jp/12017050324-2/2/
//
(function(ext) {
  ext._shutdown = function() {};
   
  //他のデバイスと接続する時に使用する。今回はこれでよい。
  ext._getStatus = function() {
    return {status: 2, msg: 'Ready'};
  };
   
  /*---------------------------------
  +  get_ai_talk_msg メソッド
  +  引数msgに質問内容が渡される。
  +  返事が返ってきたら呼び出し元へコールバックされる。
  -----------------------------------*/
  ext.get_ai_talk_msg = function(msg, callback) {
     
    //TalkAPIに渡すパラメータ値(APIキーと質問)
    let formdata = new FormData();
     
    //発行済みapikey
    formdata.append('apikey','DZZbRxwYgguo4nxJJaBGL9lvV15PYYzR');
    //質問
    formdata.append('query',msg);
    //TalkAPIにリクエスト送信
    fetch('https://api.a3rt.recruit-tech.co.jp/talk/v1/smalltalk',{
          method: 'post',
          body: formdata,
      }).then(function(response) {
        //エラーチェック
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response.json();
      }).then(function(data) {
          //質問に対する答えをコールバック
          callback(data.results[0].reply);
      }).catch(function(err) {
        //エラー発生時(固定で)
        callback('ごめんなさい。答えられなかった。（' + err.statusText + '）');
      });
  };
   
  /*--------------------------------- 
  +  talk_ai_talk_msg メソッド
  +  引数msgに質問内容が渡される。
  +  返事が返ってきたら返事を音声化して出力
  -----------------------------------*/
  ext.talk_ai_talk_msg = function(msg) {
     
    //TalkAPIに渡すパラメータ値(APIキーと質問)
    let formdata = new FormData();
     
    //発行済みapikey
    formdata.append('apikey','DZZbRxwYgguo4nxJJaBGL9lvV15PYYzR');
    //質問
    formdata.append('query',msg);
    //TalkAPIにリクエスト送信
    fetch('https://api.a3rt.recruit-tech.co.jp/talk/v1/smalltalk',{
          method: 'post',
          body: formdata,
      }).then(function(response) {
        //エラーチェック
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response.json();
      }).then(function(data) {
        //質問に対する答えを話す
        //Web Speech API を使用する
        var synthes = new SpeechSynthesisUtterance(data.results[0].reply);
        //日本語に設定
        synthes.lang = "ja-JP"
        //読み上げ開始
        speechSynthesis.speak( synthes );
      }).catch(function(err) {
        //エラー発生時
        var synthes = new SpeechSynthesisUtterance('ごめんなさい。答えられなかった。');
        synthes.lang = "ja-JP"
        speechSynthesis.speak( synthes );
      });
  };
 
  /*--------------------------------- 
  +  ScratchXに表示する命令ブロックを定義
  +  → %sはブロックで入力された文字列が入る
  +  → 「%s と聞いたへんじ」ブロックが実行されるとget_ai_talk_msgメソッドが呼ばれる
  +  → 「%s と聞いたへんじを話す」ブロックが実行されるとtalk_ai_talk_msgメソッドが呼ばれる
  -----------------------------------*/
  var descriptor = {
    blocks: [
      ['R', '%s と聞いたへんじ', 'get_ai_talk_msg'],
      [' ', '%s と聞いたへんじを話す', 'talk_ai_talk_msg'],
 
    ]
  };
   
  //ScratchXに登録する
  ScratchExtensions.register('リクルートAI(TalkAPI)', descriptor, ext);
})({});
