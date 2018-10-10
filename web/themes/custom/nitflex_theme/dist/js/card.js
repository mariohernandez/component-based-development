!function (document, Drupal, $) {
  'use strict';

  /**
   * Creates behavior for Add to Watch list.
   */

  Drupal.behaviors.addToWatchList = {
    attach: function attach(context) {
      /**
       * Bind open/close action to list containers.
       * @param {string} container - Card conteainer.
       * @param {string} button - Trigger button.
       * @param {context} context - Drupal context.
       * @returns {void}
       */
      function addToList(container, button, context) {
        var $container = $(container, context);

        $container.each(function () {
          var $cardItem = $(this);
          $cardItem.find(button).on('click', function () {
            // Adds the 'is-added' class to cards where
            // movie has been added to watch list.
            $container.not($cardItem).removeClass('is-added');
            $cardItem.toggleClass('is-added');
          });
        });
      }

      // Bind the function to the card.
      addToList('.card', '.js-add-to-list', context);
    }
  };
}(document, Drupal, jQuery);
//# sourceMappingURL=card.js.map
