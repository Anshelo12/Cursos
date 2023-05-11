import { Student } from "./entities/student"
import { Teacher } from "./entities/teacher"
//import { Course } from "./entities/course"
import { Activity } from "./entities/activity"
import { GradesBook } from "./entities/grades-book"

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

enum Course{
    typeScript = "TypeScript",
    php = "PHP",
    angular = "Angular"
}

enum Area{
    programacion = "Programacion",
    diseño = "Diseño",
    redes = "Redes"
}

// function addCourse(){
//     let currentCourse:Course = {
//         area:readHtml("areaCourse"),
//         name:readHtml("nameCourse"),
//     }
// course.push(currentCourse);
// console.table(course);
// }

//Activity
let activity:Activity[] = [];

function addActivity(){
    let currentActivity: Activity = {
    name: readHtml("nameActivity")
    }
activity.push(currentActivity);
console.table(activity);
}

//Grades-Book
let gradesBook:GradesBook[] = [];

function addGradesBook(){
    let currentGradesBook:GradesBook = {
        course:readHtml("courseGradesBook"),
        activity:readHtml("activityGradesBook"),
        weight:parseInt(readHtml("weightGradesBook")),
        noteMax:parseInt(readHtml("noteMaxGradesBook"))
    }
gradesBook.push(currentGradesBook);
console.table(gradesBook);
}

//Funcion para leer el HTML
function readHtml(id:string):string{
    return(<HTMLInputElement>document.getElementById(id)).value
}
//Funcion para agregar un dato a otro campo
function readCourse(): void {
    let courseGradesBook = document.getElementById("courseGradesBook") as HTMLSelectElement;
    //document.querySelectorAll('#courseGradesBook option').forEach(option => option.remove());

    let courses = Object.values(Course); //enum comvertido en un arreglo
    courses.forEach((value) => {         
        let option = document.createElement("option"); 
        option.value = value;
        option.text = value;
        courseGradesBook.add(option);
    });

}