// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  //input is a string which is targetclassname
  //output will be all the elements which have targetclassname // array type, several elements
  // document.body, element.childNodes, and element.classList
  var result = [];


  var searchClassName = function(element) {
    var split = element.className.split(' ');
    if (split.indexOf(className) > - 1) {
      result.push(element);
    }
    // if childNodes contain className,
    for (var i = 0; i < element.children.length; i++) {
      searchClassName(element.children[i]);
    }
  };
  searchClassName(document.body);
  return result;
};


// getElementsByClassName("targetClassName")