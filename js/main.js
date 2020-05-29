  window.onresize = set;
  set();
  function set(){
    //获取视口宽度
    var w = document.documentElement.clientWidth;
    if(w > 750){
      document.documentElement.style.fontSize = "20px";
    }else if(w < 320){
      document.documentElement.style.fontSize = 320 / 750 * 20 +"px"
    }else{
      //与设计图的倍数 (750是设计图宽度)
      var rate  = w / 750;
      //改变根基的字号html size是20px
      var htmlSize = rate * 20;
      //更改html的字号
      document.documentElement.style.fontSize = htmlSize + "px";
    }
  }