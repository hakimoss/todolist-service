/**
 * @api {get} api/todolist/ Request todolist
 * @apiName GetUser
 * @apiGroup User
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     You just add [faire du javascript] to todoList.
 *
 *
 * @apiErrorExample Error-Response:
 *   {
 *   "statusCode": 400,
 *   "message": "wrong type of data, need an array",
 *   "errors": [
 *       "wrong type of data, need an array"
 *   ],
 *   "stack": "BadRequestException: wrong type of data, need an array\n    at ToDoListHandler.createToDoList (webpack-internal:///(api)/./pages/api/todolist.ts:29:19)\n    at ToDoListHandler.runMainLayer (C:\\Users\\hakim\\OneDrive\\Bureau\\repo\\todolist-service\\node_modules\\next-api-decorators\\dist\\internals\\handler.js:71:47)\n    at processTicksAndRejections (node:internal/process/task_queues:96:5)\n    at async ToDoListHandler.descriptor.value (C:\\Users\\hakim\\OneDrive\\Bureau\\repo\\todolist-service\\node_modules\\next-api-decorators\\dist\\internals\\handler.js:105:13)\n    at async Object.apiResolver (C:\\Users\\hakim\\OneDrive\\Bureau\\repo\\todolist-service\\node_modules\\next\\dist\\server\\api-utils\\node.js:372:9)\n    at async DevServer.runApi (C:\\Users\\hakim\\OneDrive\\Bureau\\repo\\todolist-service\\node_modules\\next\\dist\\server\\next-server.js:488:9)\n    at async Object.fn (C:\\Users\\hakim\\OneDrive\\Bureau\\repo\\todolist-service\\node_modules\\next\\dist\\server\\next-server.js:751:37)\n    at async Router.execute (C:\\Users\\hakim\\OneDrive\\Bureau\\repo\\todolist-service\\node_modules\\next\\dist\\server\\router.js:253:36)\n    at async DevServer.run (C:\\Users\\hakim\\OneDrive\\Bureau\\repo\\todolist-service\\node_modules\\next\\dist\\server\\base-server.js:384:29)\n    at async DevServer.run (C:\\Users\\hakim\\OneDrive\\Bureau\\repo\\todolist-service\\node_modules\\next\\dist\\server\\dev\\next-dev-server.js:743:20)\n    at async DevServer.handleRequest (C:\\Users\\hakim\\OneDrive\\Bureau\\repo\\todolist-service\\node_modules\\next\\dist\\server\\base-server.js:322:20)"
 *   }
 */

/**
 * @api {post} api/todolist/ Request todolist
 *
 * @apiParam {string[]} Element in you list.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     You just add [faire du javascript] to todoList.
 * @apiErrorExample Error-Response:
 *   {
 *   "statusCode": 400,
 *   "message": "wrong type of data, need an array",
 *   "errors": [
 *       "wrong type of data, need an array"
 *   ],
 *   "stack": "BadRequestException: wrong type of data, need an array\n    at ToDoListHandler.createToDoList (webpack-internal:///(api)/./pages/api/todolist.ts:29:19)\n    at ToDoListHandler.runMainLayer (C:\\Users\\hakim\\OneDrive\\Bureau\\repo\\todolist-service\\node_modules\\next-api-decorators\\dist\\internals\\handler.js:71:47)\n    at processTicksAndRejections (node:internal/process/task_queues:96:5)\n    at async ToDoListHandler.descriptor.value (C:\\Users\\hakim\\OneDrive\\Bureau\\repo\\todolist-service\\node_modules\\next-api-decorators\\dist\\internals\\handler.js:105:13)\n    at async Object.apiResolver (C:\\Users\\hakim\\OneDrive\\Bureau\\repo\\todolist-service\\node_modules\\next\\dist\\server\\api-utils\\node.js:372:9)\n    at async DevServer.runApi (C:\\Users\\hakim\\OneDrive\\Bureau\\repo\\todolist-service\\node_modules\\next\\dist\\server\\next-server.js:488:9)\n    at async Object.fn (C:\\Users\\hakim\\OneDrive\\Bureau\\repo\\todolist-service\\node_modules\\next\\dist\\server\\next-server.js:751:37)\n    at async Router.execute (C:\\Users\\hakim\\OneDrive\\Bureau\\repo\\todolist-service\\node_modules\\next\\dist\\server\\router.js:253:36)\n    at async DevServer.run (C:\\Users\\hakim\\OneDrive\\Bureau\\repo\\todolist-service\\node_modules\\next\\dist\\server\\base-server.js:384:29)\n    at async DevServer.run (C:\\Users\\hakim\\OneDrive\\Bureau\\repo\\todolist-service\\node_modules\\next\\dist\\server\\dev\\next-dev-server.js:743:20)\n    at async DevServer.handleRequest (C:\\Users\\hakim\\OneDrive\\Bureau\\repo\\todolist-service\\node_modules\\next\\dist\\server\\base-server.js:322:20)"
 *   }
 */