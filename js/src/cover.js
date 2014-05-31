$(function () {
  var $coverImg = $('img[alt^="cover"]');

  var src = $coverImg.attr('src');
  var $root = $('#layout-root');

  $coverImg.parents('.e2-text-picture').remove();

  if (!src || !$root.hasClass('layout--note')) {
    return;
  }

  var colors = $.map($coverImg.attr('alt').split(' ').slice(1), function (color) {
    return 'cover__color--' + color
  }).join(' ');
  var minHeight = 300;
  var $fotorama = $('<div class="cover__fotorama ' + colors + '"></div>')
      .insertBefore($root.addClass('cover'))
      .fotorama({
        width: '100%',
        ratio: 16/9,
        maxheight: '90%',
        minheight: minHeight,
        fit: 'cover',
        allowfullscreen: false,
        nav: false,
        arrows: false,
        click: false,
        swipe: false,
        trackpad: false,
        spinner: {
          zIndex: -1
        }
      });
  var fotorama = $fotorama.data('fotorama');

  var $dummy = $('<div></div>');

  $('.js-cover').each(function () {
    $(this).appendTo($dummy);
  });

  $('*[lead]').each(function () {
    $(this).wrapInner('<span class="text-bg"><span class="text-bg text-bg--1"><span class="text-bg text-bg--2"></span></span></span>').appendTo($('.js-cover-lead', $dummy));
  });

  fotorama.load([{img: src, html: '<div class="layout layout--cover cover__layout ' + colors + ' fotorama__select"><div class="layout__floor cover__floor">' + $dummy.html() +'</div></div>'}]);

  if (!navigator.userAgent.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone/i)) {
    // Включаю параллакс, если браузер не мобильный
    var $window = $(window);
    var $stage = $('.fotorama__stage', $fotorama);
    var parallax = 5;
    var fotoramaHeight = 0;
    var scrollTop;

    $window
        .on('resize orientationchange', function () {
          var _minHeight = 0;

          $('.js-cover').each(function () {
            _minHeight += $(this).innerHeight();
          });

          if (_minHeight > minHeight) {
            minHeight = _minHeight;
            fotorama.setOptions({minheight: minHeight});
          }

          fotoramaHeight = $fotorama.height();

          $window.scroll();
        })
        .on('scroll', function () {
          var _scrollTop = Math.min(Math.max($window.scrollTop(), 0), fotoramaHeight);

          console.log('_scrollTop', _scrollTop);

          if (_scrollTop !== scrollTop) {
            console.log('transform the $stage');
            scrollTop = _scrollTop;
            $stage.css({transform: 'translateY(' + (Math.max($window.scrollTop(), 0) / parallax) + 'px)'});
          }
        })
        .resize();
    }
});
