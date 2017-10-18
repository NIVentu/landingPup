(function () {
    "use strict";

    var dots = 0;

    $(function () {
        setInterval(type, 200);
        redirect();
    });

    function redirect() {
        window.location.replace("http://5733agtlka5ey1tgxgxioo6s2d.hop.clickbank.net/");
    }

    function type() {
        if (dots < 3) {
            $("#dots").append(".");
            dots++;
        } else {
            $("#dots").html("");
            dots = 0;
        }
    }

})();

