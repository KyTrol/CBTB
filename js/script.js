$(document).ready(function() {
    
    isMediaNamePresent();
    isArticleCondensed();
    isTeamCondensed();
    
    $(window).resize(function() {
        isMediaNamePresent();
        isArticleCondensed();
        isTeamCondensed();
    });
});

function isMediaNamePresent() {
    $('#fb-name:visible').length ?  bindMediaFade() : unbindMediaFade();
}

function bindMediaFade() {
    var fbName = $("#fb-name");
    var twName = $("#tw-name");
    var instName = $("#inst-name");

    $('#fb').hover(
        function () { fbName.stop().fadeTo(250, 1); },
        function () { fbName.stop().fadeTo(250, 0); }
    );

    $('#tw').hover(
        function () { twName.stop().fadeTo(250, 1); },
        function () { twName.stop().fadeTo(250, 0); }
    );

    $('#inst').hover(
        function () { instName.stop().fadeTo(250, 1); },
        function () { instName.stop().fadeTo(250, 0); }
    );
}

function unbindMediaFade() {
    $('#fb').off('mouseenter mouseleave');
    $('#tw').off('mouseenter mouseleave');
    $('#inst').off('mouseenter mouseleave');
}

function isArticleCondensed() {
    $('.article hr').first().is(':hidden') ? bindArticleSlide() : unbindArticleSlide();
}

function bindArticleSlide() {
    var articleChildren = {
        about: $('#about').siblings().not('hr').fadeTo(1, 0).slideUp(1),
        events: $('#events').siblings().not('hr').fadeTo(1, 0).slideUp(1),
        help: $('#help').siblings().not('hr').fadeTo(1, 0).slideUp(1)
    };

    $('.article h4').off('click');
    $('.article h4').click(function() {
        $(articleChildren[this.id]).each(function() {
            if ($(this).is(':visible')) {
                $(this).fadeTo(300, 0).slideUp(250);
            }
            else {
                $(this).slideDown(250).fadeTo(300, 1);
            }
            
        });
    });
}

function unbindArticleSlide() {
    $('#about').siblings().fadeTo(1, 1);
    $('#events').siblings().fadeTo(1, 1);
    $('#help').siblings().fadeTo(1, 1);
    $('.article h4').off('click');
}

function isTeamCondensed() {
    $('.team-header hr').is(':hidden') ? bindOverlay() : unbindOverlay();
}

function bindOverlay() {
    $('.member img').off('click');
    $('.member img').click(function() {
        $('.dialog-content p').replaceWith($('#' + this.id).parent().siblings().children().clone());
        $('.dialog-portrait').attr('src', $(this).attr('src'));
        $('.dialog-portrait').attr('alt', $(this).attr('alt'));
        animateOverlay();
    });   
}

function unbindOverlay() {
    $('.member img').off('click');
}

function animateOverlay() {
    if ($('#overlay').is(':visible')) {
        $('html').css({"overflow": "auto"});
        $('.dialog').animate({"top": "-50%"});
        $('#overlay').fadeOut(200);
        $('.dialog-portrait').fadeTo(1, 0);
    }
    else {
        $('html').css({"overflow": "hidden"});
        $('#overlay').fadeIn(200);
        $('.dialog').animate({"top": "50%"}, function() {
            $('.dialog-portrait').fadeTo(300, 1);
        });
    }
}