$(document).ready(function() {
    var fb = $("#fb");
    var tw = $("#tw");
    var inst = $("#inst");
    var fbName = $("#fb-name");
    var twName = $("#tw-name");
    var instName = $("#inst-name");

    fb.hover(
        function () { fbName.stop().fadeTo(250, 1); },
        function () { fbName.stop().fadeTo(250, 0); }
    );

    tw.hover(
        function () { twName.stop().fadeTo(250, 1); },
        function () { twName.stop().fadeTo(250, 0); }
    );

    inst.hover(
        function () { instName.stop().fadeTo(250, 1); },
        function () { instName.stop().fadeTo(250, 0); }
    );
});
