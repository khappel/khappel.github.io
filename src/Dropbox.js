require('isomorphic-fetch'); // or another library of choice.
var Dropbox = require('dropbox').Dropbox;
var dbx = new Dropbox({ accessToken: 'sl.BfXKSNbIk3z1JXrgG2dl25zUM_gQ8-_zldJvvezUgIGsvDrwcEmWyO1MI8zfELXu-cc2rYJ__kDz_RAA5TknubYAXYiGSWZQc2CO3OeR7J7CMKcyFxB_RzWy-l2xI1k66J_yyIY' });
dbx.filesListFolder({path: ''})
  .then(function(response) {
    console.log(response);
  })
  .catch(function(error) {
    console.log(error);
  });