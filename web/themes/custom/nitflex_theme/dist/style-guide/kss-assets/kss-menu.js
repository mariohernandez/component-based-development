!(function ($) {
  'use strict';

  // Section links.
  const $sLinks =  $('.kss-menu__list-item--section > .kss-menu__list-item-link');

  // Content iframe.
  const $cFrame = $('.kss-layout__content-frame');

  // Content wrapper for homepage content.
  const $hContent = $('.kss-layout__main--home > .kss-layout__content-wrapper');

  // Menu toggle button.
  const $menuToggle = $('.kss-menu__toggle');

  // Breakpoint menu / buttons.
  const $bpMenu = $('.kss-breakpoint-menu');
  const $bpLink = $('.kss-breakpoint-menu__button');

  // Adding cache busting query string to links.
  $('.kss-menu__list-item-link').each(function(i, v) {
    const url = $(v).attr('href');
    $(v).attr('href', url + '&c=' + Date.now());
  });

  // 'item' query string.
  const match = RegExp('[?&]item=([^&]*)').exec(window.location.search);

  if (match) {
    let $link = $('[data-item="' +  match[1] + '"]');
    $cFrame.attr('src', 'item-' + match[1] + '.html');
    $cFrame.addClass('kss-active');
    $cFrame.parent().addClass('kss-active');
    $hContent.addClass('kss-inactive');
    let $linkParent = $link.parents('.kss-menu__list--child')
                           .siblings('.kss-menu__list-item-link');
    $linkParent.focus();
    $linkParent.addClass('kss-active');
    $bpMenu.addClass('kss-active');
    $link.addClass('kss-active');
  }

  $sLinks.on('click', function(event) {
    let $self = $(this);
    let $childMenu = $self.siblings('.kss-menu__list--child');
    if ($self.hasClass('kss-open')) {
      $self.removeClass('kss-open');
      $self.attr('aria-expanded', 'false');
      $childMenu.attr('aria-hidden', 'true');
    }
    else {
      $sLinks.removeClass('kss-open');
      $self.addClass('kss-open');
      $self.attr('aria-expanded', 'true');
      $childMenu.attr('aria-hidden', 'false');
    }
    event.preventDefault();
  });

  $menuToggle.on('click', function(event) {
    $(this).toggleClass('kss-open');
  });

  $bpLink.on('click', function(event) {
    let viewWidth = window.innerWidth ?
                    window.innerWidth : $(window).width();
    let $self = $(this);
    $bpLink.removeClass('kss-active');
    $self.addClass('kss-active');
    let bpValue = $self.data('bp-value');
    if (bpValue === 'full') {
      $cFrame.css('width', '100%');
    }
    else {
      viewWidth > bpValue ? $cFrame.css('width', bpValue) :
        $cFrame.css('width', '100%');
    }
    event.preventDefault();
  });

})(jQuery);
