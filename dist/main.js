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
var Course;
(function (Course) {
    Course["typeScript"] = "TypeScript";
    Course["php"] = "PHP";
    Course["angular"] = "Angular";
})(Course || (Course = {}));
var Area;
(function (Area) {
    Area["programacion"] = "Programacion";
    Area["dise\u00F1o"] = "Dise\u00F1o";
    Area["redes"] = "Redes";
})(Area || (Area = {}));
// function addCourse(){
//     let currentCourse:Course = {
//         area:readHtml("areaCourse"),
//         name:readHtml("nameCourse"),
//     }
// course.push(currentCourse);
// console.table(course);
// }
//Activity
let activity = [];
function addActivity() {
    let currentActivity = {
        name: readHtml("nameActivity")
    };
    activity.push(currentActivity);
    console.table(activity);
}
//Grades-Book
let gradesBook = [];
function addGradesBook() {
    let currentGradesBook = {
        course: readHtml("courseGradesBook"),
        activity: readHtml("activityGradesBook"),
        weight: parseInt(readHtml("weightGradesBook")),
        noteMax: parseInt(readHtml("noteMaxGradesBook"))
    };
    gradesBook.push(currentGradesBook);
    console.table(gradesBook);
}
//Funcion para leer el HTML
function readHtml(id) {
    return document.getElementById(id).value;
}
//Funcion para agregar un dato a otro campo
function readCourse() {
    let courseGradesBook = document.getElementById("courseGradesBook");
    //document.querySelectorAll('#courseGradesBook option').forEach(option => option.remove());
    let courses = Object.values(Course); //enum comvertido en un arreglo
    courses.forEach((value) => {
        let option = document.createElement("option");
        option.value = value;
        option.text = value;
        courseGradesBook.add(option);
    });
}
