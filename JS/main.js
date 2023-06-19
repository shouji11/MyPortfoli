
//// 星アニメーション
// particlesJS("particles-js", {
// 	"particles":{
// 		"number":{
// 			"value":346,//この数値を変更すると星の数が増減できる
// 			"density":{
// 				"enable":true,
// 				"value_area":800
// 			}
// 		},
// 		"color":{
// 			"value":"#ffffff"
// 		},
// 		"shape":{
// 			"type":"circle",//形状はcircleを指定
// 			"stroke":{
// 				"width":0
// 			},
// 			},
// 		"opacity":{
// 			"value":1,//シェイプの透明度
// 			"random":true,//シェイプの透明度をランダムにする
// 			"anim":{
// 				"enable":true,//シェイプの透明度をアニメーションさせる
// 				"speed":3,//シェイプの透明度をアニメーションさせる
// 				"opacity_min":0,//透明度の最小値０
// 				"sync":false//全てを同時にアニメーションさせない
// 			}
// 		},
// 		"size":{
// 			"value":2,
// 			"random":true,
// 			"anim":{
// 				"enable":false,
// 				"speed":4,
// 				"size_min":0.3,
// 				"sync":false
// 			}
// 		},
// 		"line_linked":{
// 			"enable":false,
// 		},
// 		"move":{
// 			"enable":true,
// 			"speed":120,//この数値を小さくするとゆっくりな動きになる
// 		"direction":"none",//方向指定なし
// 		"random":true,//動きはランダムに
// 		"straight":true,//動きをとどめる
// 			"out_mode":"out",
// 			"bounce":false,
// 			"attract":{
// 				"enable":false,
// 				"rotateX":600,
// 				"rotateY":600
// 			}
// 		}
// 	},
// 	"interactivity":{
// 		"detect_on":"canvas",
// 		"events":{
// 			"onhover":{
// 				"enable":false,
// 			},
// 			"onclick":{
// 				"enable":false,
// 			},
// 			"resize":true
// 		}
// 	},
// 	"retina_detect":true
// });
////クリックした時のスクロール
$('#header a[href*="#"]').click(function () {
  var elmHash = $(this).attr('href'); //ページ内リンクのHTMLタグhrefから、リンクされているエリアidの値を取得
  var pos = $(elmHash).offset().top;  //idの上部の距離を取得
  $('body,html').animate({scrollTop: pos}, 500); //取得した位置にスクロール。500の数値が大きくなるほどゆっくりスクロール
  return false;
});
$('#footer').click(function () {	
	$('body,html').animate(
		{scrollTop: 0}, 500); //取得した位置にスクロール。500の数値が大きくなるほどゆっくりスクロール
	return false;
});

////スクロールした際のフェード
function fadeAnime(){
  $(".fadeTrigger").each(function(){
    var elemPos = $(this).offset().top-50;//要素より、50px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
    $(this).addClass('fadeUp');// 画面内に入ったらfadeInというクラス名を追記
    }else{
    $(this).removeClass('fadeUp');// 画面外に出たらfadeInというクラス名を外す
    }  
  });
}

$(window).scroll(function (){
  fadeAnime();/* アニメーション用の関数を呼ぶ*/
});

