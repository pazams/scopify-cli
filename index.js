var fs        = require('fs');
var postcss   = require('postcss');
var scopify   = require('postcss-scopify');
var diveSync  = require('diveSync');
var path      = require('path');

// var userInput = process.argv.slice(2);
var userInput = process.argv[2];
console.log(userInput);

if (!isValidScope(userInput)){
    console.log(userInput + ' is NOT a valid css selector');
    return;
}

diveSync(process.cwd(), function(err, file) {
  if (err) {
      // throw err;
      console.log('COULD NOT SCOPE: '+ file);
      return;
  }
  if ( path.extname(file) !== ".css" ) {
      return;
  }

   var css = fs.readFileSync(file, 'utf8').toString();
   var out = postcss()
          .use(scopify(userInput))
          .process(css)
          .css;

  fs.writeFileSync(file,out);

  console.log('scoped: '+ file);

});


/**
 * Determine if scope is valid
 *
 * @param {string} scope
 */
function isValidScope(scope) {
    if (scope){
        return scope.indexOf(',') ===  -1;
    }
    else{
        return false;
    }

}

