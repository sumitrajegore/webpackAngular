// import 'core-js/es6'; 
declare var require: any

import 'core-js/es7/reflect'; 
require('zone.js/dist/zone'); 
// Development and test 
Error['stackTraceLimit'] = Infinity; 
require('zone.js/dist/long-stack-trace-zone'); 
