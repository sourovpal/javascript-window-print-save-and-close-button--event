  setTimeout(function(){
    window.print();
  },100);
  var mediaQueryList = window.matchMedia('print');
  mediaQueryList.addListener(function(mql) {
    if (mql.matches) {
      console.log('before print dialog open');
    } else {
      setTimeout(function(){
        window.opener = self;
        window.close();
      },100);
        console.log('after print dialog closed');
    }
});
