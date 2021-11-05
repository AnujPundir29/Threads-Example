const {
    isMainThread,
    Worker,
    workerData
} = require('worker_threads');

if (isMainThread) {
    console.log(`Main thread: process id: ${process.pid}`);
    new Worker(__filename, {
        workerData: [1, 3, 0, 7, 8, 9, 10]
    });
    new Worker(__filename, {
        workerData: [1, 3, 2, 3, 5, 6, 2, 10000]
    });
} else {
    console.log(`Worker, process id : ${process.pid}`);
    // workerData.sort();
    console.log(`Sorted array: ${workerData.sort()}`);
}