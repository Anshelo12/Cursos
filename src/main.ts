import { Student } from "./entities/student"
import { Teacher } from "./entities/teacher"
import { Course } from "./entities/course"

//Student
let student:Student[] = [];

function addStudent(){
    let currentStudent:Student = {
        name:readHtml("nameStudent"),
        identification:parseInt(readHtml("identificationStudent")),
        address:readHtml("addressStudent"),
        registrationCode:parseInt(readHtml("registrationCodeStudent")),
        level:readHtml("levelStudent")
    }
student.push(currentStudent);
console.log(student);
console.table(student);
}

//Teacher
let teacher:Teacher[] = [];

enum Carrera{
    turismo = "Turismo",
    marketing = "Marketing",
    desarrollo = "Desarrollo de software"
}

function addTeacher(){
    let currentTeacher:Teacher = {
        name:readHtml("nameTeacher"),
        identification:parseInt(readHtml("identificationTeacher")),
        address:readHtml("addressTeacher"),
        carrer:readHtml("carrerTeacher"),
        title:readHtml("titleTeacher"),
        asignature:readHtml("asignatureTeacher") as "Interfaces" | "Programacion" | "Metodologias",
    }
teacher.push(currentTeacher);
console.table(teacher);
}

//Course
let course:Course[] = [];

function addCourse(){
    let currentCourse:Course = {
        area:readHtml("areaCourse"),
        name:readHtml("nameCourse")
    }
course.push(currentCourse);
console.table(course);
}

//Funcion para leer el HTML
function readHtml(id:string):string{
    return(<HTMLInputElement>document.getElementById(id)).value
}