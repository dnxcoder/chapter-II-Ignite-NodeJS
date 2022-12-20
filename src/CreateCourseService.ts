interface Course {
  name: string;
  duration: number;
  educator: string;
}

class CreateCourseServer {
  execute({ educator, duration, name }: Course) {
    console.log(name, duration, educator);
  }
}

export default new CreateCourseServer();
