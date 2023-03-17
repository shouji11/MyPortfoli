
$(function(){
  var load =$("#loadIcon_wrap");
  
  $(".loadButton").click(function(){
    load.show();
  
    //loaded();

    // //ページの読み込みが完了してなくても3秒後にアニメーションを非表示にする
    $("#loading").delay(3000).fadeOut(300);
    $("#contents").delay(4000).fadeIn(600);

  });

});

// $(window).on("load",function() {
//   if(isLoading){
//     $("#loading").delay(600).fadeOut(300);
//     $("#contents").delay(800).fadeIn(600);
 
//   }
// });

const pushBtn = (btn,src,genre,tool,period) => {
    document.getElementById(btn).onclick = function(){
      document.getElementById("pics").src = src;      
      document.getElementById("genre").innerHTML  = genre;
      document.getElementById("tool").innerHTML  = tool;
      document.getElementById("period").innerHTML  = period;

    }
}
  
pushBtn("img_1","Img/ScreenShot/2DFighting.jpg","2D格闘","Unity","4ヶ月(内 3ヶ月)","")
pushBtn("img_2","Img/ScreenShot/game4/sundglass_Title.jpg","2Dアクション","Unity","3ヶ月(内 2ヶ月)")
pushBtn("img_3","Img/ScreenShot/game1/TankShooting1.jpg","3Dシューティング","DirectX12","3ヶ月(内 2ヶ月)")
pushBtn("img_4","Img/ScreenShot/game2/title.jpg","アクション","MonoGame","3ヶ月(内 2ヶ月)")
pushBtn("img_5","Img/ScreenShot/game3/title.jpg","回避アクション","MonoGame","1ヶ月")
pushBtn("img_6","Img/ScreenShot/actiongame.jpg","2Dアクション","Unity","3ヶ月(内 2ヶ月)")
pushBtn("img_7","Img/ScreenShot/shooting.jpg","シューティング","Unity","3ヶ月(内 2ヶ月)")
pushBtn("img_8","Img/ScreenShot/game5/oikake.jpg","追いかけ","MonoGame","約2～3週間")

