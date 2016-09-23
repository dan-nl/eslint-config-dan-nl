'use strict';

var test = require( 'tap' ).test;
var config = require( '../src/index' );

test( 'eslint-config should', function ( t ) {
  t.ok( config instanceof Object, 'be an instance of an Object' );
  t.ok( !( config instanceof Function ), 'not be an instance of a Function' );
  t.ok( !( config instanceof Array ), 'not be an instance of an Array' );
  t.end();
} );
