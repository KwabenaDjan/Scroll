window.addEventListener("scroll", function(event) {
    var top = this.pageYOffset;
    var layers = document.getElementsByClassName("parallax")[0];
    var depth1 = layers.getAttribute("data-depth1");
    var depth2 = layers.getAttribute("data-depth2");
    var depth3 = layers.getAttribute("data-depth3");

    var movement1 = -(top * depth1);
    var movement2 = -(top * depth2);
    var movement3 = -(top * depth3);

    var translate3d1 = 'translate3d(0, ' + movement1 + 'px, 0)';
    var translate3d2 = 'translate3d(0, ' + movement2 + 'px, 0)';
    var translate3d3 = 'translate3d(0, ' + movement3 + 'px, 0)';

    layers.getElementsByClassName("bgimg-1")[0].style.transform = translate3d1;
    layers.getElementsByClassName("bgimg-2")[0].style.transform = translate3d2;
    layers.getElementsByClassName("bgimg-3")[0].style.transform = translate3d3;
});
