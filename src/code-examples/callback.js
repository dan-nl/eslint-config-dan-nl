'use strict';

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
