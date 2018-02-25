'use strict';

try {
  JSON.parse( '' )
} catch ( err ) {
  console.log( 'oops!', err )
} finally {
  console.log( 'finally!' )
}
