//EJS Compiled Views - This file was automatically generated on Sun Dec 06 2020 00:18:51 GMT+0100 (Central European Standard Time)
ejs.views_include = function(locals) {
    console.log("views_include_setup",locals);
    return function(path, d) {
        console.log("ejs.views_include",path,d);
        return ejs["views_"+path.replace(/\//g,"_")]({...d,...locals}, null, ejs.views_include(locals));
    }
};
ejs.views_button = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "\n<p1><%=answer%></p1>\n\n<button id=\"readyButton\">READY</button>"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("\n<p1>")
    ; __line = 2
    ; __append(escapeFn(answer))
    ; __append("</p1>\n\n<button id=\"readyButton\">READY</button>")
    ; __line = 4
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}

ejs.views_error = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "<h1><%= message %></h1>\n<h2><%= error.status %></h2>\n<pre><%= error.stack %></pre>\n"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("<h1>")
    ; __append(escapeFn( message ))
    ; __append("</h1>\n<h2>")
    ; __line = 2
    ; __append(escapeFn( error.status ))
    ; __append("</h2>\n<pre>")
    ; __line = 3
    ; __append(escapeFn( error.stack ))
    ; __append("</pre>\n")
    ; __line = 4
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}

ejs.views_index = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "<!DOCTYPE html>\n<html>\n<head>\n  <title><%= title%></title>\n  <link rel='stylesheet' href='/stylesheets/style.css' />\n</head>\n<body>\n<div class=\"wrapper\">\n  <div class=\"pageTitle title\">Sign Up For The Experiment</div>\n  <div class=\"secondaryTitle title\">Please fill this form to sign up.</div>\n  <form class=\"form\"  method=\"post\" action=\"/users\" enctype=\"multipart/form-data\">\n    <input type=\"text\" name=\"name\" class=\"name formEntry\" placeholder=\"Name\">\n    <input type=\"text\" name=\"email\" class=\"email formEntry\" placeholder=\"Email\">\n    <input type=\"submit\" class=\"submit formEntry\" value=\"Submit\">\n\n  </form>\n</div>\n</body>\n</html>\n"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("<!DOCTYPE html>\n<html>\n<head>\n  <title>")
    ; __line = 4
    ; __append(escapeFn( title))
    ; __append("</title>\n  <link rel='stylesheet' href='/stylesheets/style.css' />\n</head>\n<body>\n<div class=\"wrapper\">\n  <div class=\"pageTitle title\">Sign Up For The Experiment</div>\n  <div class=\"secondaryTitle title\">Please fill this form to sign up.</div>\n  <form class=\"form\"  method=\"post\" action=\"/users\" enctype=\"multipart/form-data\">\n    <input type=\"text\" name=\"name\" class=\"name formEntry\" placeholder=\"Name\">\n    <input type=\"text\" name=\"email\" class=\"email formEntry\" placeholder=\"Email\">\n    <input type=\"submit\" class=\"submit formEntry\" value=\"Submit\">\n\n  </form>\n</div>\n</body>\n</html>\n")
    ; __line = 20
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}

ejs.views_test = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "<!DOCTYPE html>\n<html>\n<head>\n    <title><%= title%></title>\n    <link rel='stylesheet' href='/stylesheets/style.css' />\n</head>\n<body>\n<div class=\"wrapper\">\n    <div class=\"pageTitle title\">Sign Up For The Experiment</div>\n    <div class=\"secondaryTitle title\">Please fill this form to sign up.</div>\n    <form class=\"form\"  method=\"post\" action=\"/users\" enctype=\"multipart/form-data\">\n        <input type=\"text\" name=\"name\" class=\"name formEntry\" placeholder=\"Name\">\n        <input type=\"text\" name=\"email\" class=\"email formEntry\" placeholder=\"Email\">\n        <input type=\"submit\" class=\"submit formEntry\" value=\"Submit\">\n\n    </form>\n    <div id=\"entrypoint\"></div>\n\n\n</div>\n</body>\n<script src=\"javascripts/ejs/ejs.js\"></script>\n<script src=\"js/views.js\"></script>\n<script src=\"javascripts/app.js\"></script>\n<script src=\"javascripts/main.js\"></script>\n\n\n</html>"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("<!DOCTYPE html>\n<html>\n<head>\n    <title>")
    ; __line = 4
    ; __append(escapeFn( title))
    ; __append("</title>\n    <link rel='stylesheet' href='/stylesheets/style.css' />\n</head>\n<body>\n<div class=\"wrapper\">\n    <div class=\"pageTitle title\">Sign Up For The Experiment</div>\n    <div class=\"secondaryTitle title\">Please fill this form to sign up.</div>\n    <form class=\"form\"  method=\"post\" action=\"/users\" enctype=\"multipart/form-data\">\n        <input type=\"text\" name=\"name\" class=\"name formEntry\" placeholder=\"Name\">\n        <input type=\"text\" name=\"email\" class=\"email formEntry\" placeholder=\"Email\">\n        <input type=\"submit\" class=\"submit formEntry\" value=\"Submit\">\n\n    </form>\n    <div id=\"entrypoint\"></div>\n\n\n</div>\n</body>\n<script src=\"javascripts/ejs/ejs.js\"></script>\n<script src=\"js/views.js\"></script>\n<script src=\"javascripts/app.js\"></script>\n<script src=\"javascripts/main.js\"></script>\n\n\n</html>")
    ; __line = 28
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}

ejs.views_test2 = function(locals, escapeFn, include = ejs.views_include(locals), rethrow
) {
rethrow = rethrow || function rethrow(err, str, flnm, lineno, esc) {
  var lines = str.split('\n');
  var start = Math.max(lineno - 3, 0);
  var end = Math.min(lines.length, lineno + 3);
  var filename = esc(flnm);
  // Error context
  var context = lines.slice(start, end).map(function (line, i){
    var curr = i + start + 1;
    return (curr == lineno ? ' >> ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'ejs') + ':'
    + lineno + '\n'
    + context + '\n\n'
    + err.message;

  throw err;
};
escapeFn = escapeFn || function (markup) {
  return markup == undefined
    ? ''
    : String(markup)
      .replace(_MATCH_HTML, encode_char);
};
var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
;
var __line = 1
  , __lines = "<!DOCTYPE html>\n\n<div class=\"wrapper\">\n\n        <% variables.forEach(function (v) { %>\n        <button name=\"answer\" class=<%= buttonClass%>><%=v%></button>\n        <% }) %>\n\n\n\n\n</div>\n"
  , __filename = undefined;
try {
  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
  with (locals || {}) {
    ; __append("<!DOCTYPE html>\n\n<div class=\"wrapper\">\n\n        ")
    ; __line = 5
    ;  variables.forEach(function (v) { 
    ; __append("\n        <button name=\"answer\" class=")
    ; __line = 6
    ; __append(escapeFn( buttonClass))
    ; __append(">")
    ; __append(escapeFn(v))
    ; __append("</button>\n        ")
    ; __line = 7
    ;  }) 
    ; __append("\n\n\n\n\n</div>\n")
    ; __line = 13
  }
  return __output;
} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}

}