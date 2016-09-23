'use strict';

/**
 * @param {string} title
 * @param {Function} callback
 * @returns {void}
 */
function describe( title, callback ) {
  callback( title );
}

describe( 'title', function () {
  // do something
} );

describe( 'title',
  function () {
    // do something
  }
);

describe(
  'title',
  function () {
    // do something
  }
);
