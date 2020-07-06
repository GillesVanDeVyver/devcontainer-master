"use strict";
exports.__esModule = true;
var bullmq_1 = require("bullmq");
new bullmq_1.Worker('REST_VENDOR_TASKS', __dirname + "/vendor/processor.js", {
    concurrency: 10,
    connection: {
        host: process.env.REDIS_SERVICE_HOST,
        port: Number(process.env.REDIS_SERVICE_PORT)
    }
});
