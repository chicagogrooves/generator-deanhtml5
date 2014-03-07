/*globals rxt:false, exports:false */
var deps=["jquery", "underscore", "underscore.string", "coffee-script", "rx", "bootstrap", "css!bootstrap-css", "css!/css/main"];
console.log("Loading up " + deps.join(","));
function depsLoaded(){
  //console.log('Loaded: ' + deps.join(',''))
}
requirejs(deps, depsLoaded);

require(["domReady!", "jquery", "coffee!js/templates/example"], function(doc, $, tmpl){
  //Dom is ready here
  console.log("The dom will see you now");
  $("h2").html( tmpl({title: "<%= title %>"}) );
});
