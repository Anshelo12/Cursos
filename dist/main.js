"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Student
let student = [];
function addStudent() {
    let currentStudent = {
        name: readHtml("nameStudent"),
        identification: parseInt(readHtml("identificationStudent")),
        address: readHtml("addressStudent"),
        registrationCode: parseInt(readHtml("registrationCodeStudent")),
        level: readHtml("levelStudent")
    };
    student.push(currentStudent);
    console.log(student);
    console.table(student);
}
//Teacher
let teacher = [];
var Carrera;
(function (Carrera) {
    Carrera["turismo"] = "Turismo";
    Carrera["marketing"] = "Marketing";
    Carrera["desarrollo"] = "Desarrollo de software";
})(Carrera || (Carrera = {}));
function addTeacher() {
    let currentTeacher = {
        name: readHtml("nameTeacher"),
        identification: parseInt(readHtml("identificationTeacher")),
        address: readHtml("addressTeacher"),
        carrer: readHtml("carrerTeacher"),
        title: readHtml("titleTeacher"),
        asignature: readHtml("asignatureTeacher"),
    };
    teacher.push(currentTeacher);
    console.table(teacher);
}
//Course
let course = [];
function addCourse() {
    let currentCourse = {
        area: readHtml("areaCourse"),
        name: readHtml("nameCourse")
    };
    course.push(currentCourse);
    console.table(course);
}
//Funcion para leer el HTML
function readHtml(id) {
    return document.getElementById(id).value;
}
