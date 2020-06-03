'use strict';
var mach = require('mach');
var path = require('path');
var app = mach.stack();
app.use(mach.file, path.join(__dirname,'public')); //changed from public to lesson04 for wcet3 student server
mach.serve(app, 8080); // port 8080 to 80 for HTTP