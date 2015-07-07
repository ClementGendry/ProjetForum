(function() {
  'use strict';

  angular
    .module('projetForum')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
