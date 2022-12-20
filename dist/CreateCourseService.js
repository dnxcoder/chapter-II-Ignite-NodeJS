"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CreateCourseServer {
    execute({ educator, duration = 8, name }) {
        console.log(name, duration, educator);
    }
}
exports.default = new CreateCourseServer();
