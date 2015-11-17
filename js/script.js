$(document).ready(function() {
    var fb = $("#fb");
    var tw = $("#tw");
    var inst = $("#inst");
    var fbName = $("#fb-name");
    var twName = $("#tw-name");
    var instName = $("#inst-name");

    fb.hover(
        function () { fbName.stop().fadeIn(250); },
        function () { fbName.stop().fadeOut(250); }
    );

    tw.hover(
        function () { twName.stop().fadeIn(250); },
        function () { twName.stop().fadeOut(250); }
    );

    inst.hover(
        function () { instName.stop().fadeIn(250); },
        function () { instName.stop().fadeOut(250); }
    );
});
