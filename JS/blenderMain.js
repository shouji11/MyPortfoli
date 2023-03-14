
$('#header a[href*="#"]').click(function () {
  var elmHash = $(this).attr('href'); //ページ内リンクのHTMLタグhrefから、リンクされているエリアidの値を取得
  var pos = $(elmHash).offset().top;  //idの上部の距離を取得
  $('body,html').animate({scrollTop: pos}, 500); //取得した位置にスクロール。500の数値が大きくなるほどゆっくりスクロール
  return false;
});

const pushBtn = (btn,src,txt) => {
    document.getElementById(btn).onclick = function(){
      document.getElementById("video").src = src;      
      document.getElementById("title").innerHTML = txt;      
  
    }
}
pushBtn("bimg_1","mati.mp4","街")
pushBtn("bimg_2","rain.mp4","rain")
pushBtn("bimg_3","synthwave.mp4","80`s_synthwave")

