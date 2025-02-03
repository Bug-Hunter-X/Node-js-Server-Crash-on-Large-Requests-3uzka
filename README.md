# Node.js Server Crash on Large Requests

This repository demonstrates a common issue in Node.js servers where they can crash when handling very large requests. The problem arises from not properly handling the 'data' event in the HTTP request.  When a large request is received, the server may run out of memory because it continuously appends data to the `body` variable without a limit. This leads to a crash.  The solution involves setting limits on the request size.

## Bug

The `server.js` file contains the buggy code.  The server listens on port 3000 and attempts to read the entire request body into memory.  If you send a large request, it will likely cause the server to crash.

## Solution

The `server-fixed.js` file shows a corrected version that limits the request size.  This version includes a solution to prevent excessive memory consumption.  It demonstrates the use of `req.on('data', ...)` with a proper mechanism to handle large requests or reject them.