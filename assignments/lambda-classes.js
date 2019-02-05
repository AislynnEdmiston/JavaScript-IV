// CODE here for your Lambda Classes



//Person
/* First we need a Person class. This will be our `base-class` Person receives `name` `age` `location` `gender` all as props Person receives `speak` as a method. This method logs out a phrase `Hello my name is Fred, I am from Bedrock` where `name` and `location` are the object's own props */

class Person{
    constructor(bio){
        this.name = bio.name;
        this.age = bio.age;
        this.location = bio.location;
        this.gender = bio.gender
    }

    speak(){
        console.log(`Hello my name is ${this.name}, I am from ${this.location}.`)
    }
}

//Instructor
/*  Now that we have a Person as our base class, we'll build our Instructor class.
 Instructor uses the same attributes that have been set up by Person
 Instructor has the following unique props:
   `specialty` what the Instructor is good at i.e. 'redux'
   `favLanguage` i.e. 'JavaScript, Python, Elm etc.'
   `catchPhrase` i.e. `Don't forget the homies`
 Instructor has the following methods:
   `demo` receives a `subject` string as an argument and logs out the phrase 'Today we are learning about {subject}' where subject is the param passed in.
   `grade` receives a `student` object and a `subject` string as arguments and logs out '{student.name} receives a perfect score on {subject}' */

class Instructor extends Person {
    constructor (instructorinfo){
        super (instructorinfo);
        this.specialty = instructorinfo.specialty;
        this.favLanguage = instructorinfo.favLanguage;
        this.catchPhrase = instructorinfo.catchPhrase;
    }

    demo(subject) {
        console.log(`Today we are learning about ${subject}`);
    }

    grade(student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}`)
    }

}

   //Student
/*  Now we need some students!
 Student uses the same attributes that have been set up by Person
 Student has the following unique props:
   `previousBackground` i.e. what the Student used to do before Lambda School
   `className` i.e. CS132
   `favSubjects`. i.e. an array of the student's favorite subjects ['Html', 'CSS', 'JavaScript']
 Student has the following methods:
   `listsSubjects` a method that logs out all of the student's favoriteSubjects one by one.
   `PRAssignment` a method that receives a subject as an argument and logs out that the `student.name has submitted a PR for {subject}`
   `sprintChallenge` similar to PRAssignment but logs out `student.name has begun sprint challenge on {subject}`
 */

class Student extends Person {
    constructor (studentinfo){
        super(studentinfo);
        this.previousBackground = studentinfo.previousBackground;
        this.className = studentinfo.className;
        this.favSubjects = studentinfo.favSubjects;
    }

    listsSubjects() {
        console.log(...this.favSubjects);
    }

    PRAssignment(student, subject){
        console.log(`${student.name} has submitted a PR for ${subject}`)
    }

    sprintChallenge(student, subject){
        console.log(`${student.name} has begun sprint challenge on ${subject}`)
    }
}


 //Project Mananger
/* Now that we have instructors and students, we'd be nowhere without our PM's
 ProjectManagers are extensions of Instructors
 ProjectManagers have the following uniqe props:
   `gradClassName`: i.e. CS1
   `favInstructor`: i.e. Sean
 ProjectManangers have the following Methods:
   `standUp` a method that takes in a slack channel and logs `{name} announces to {channel}, @channel standy times!​​​​​
   `debugsCode` a method that takes in a student object and a subject and logs out `{name} debugs {student.name}'s code on {subject}` */

   class ProjectManagers extends Instructor {
    constructor (pm){
        super (pm);
        this.gradClassName = pm.gradClassName;
        this.favInstructor = pm.favInstructor;
    }

    standUp(pm, channel) {
        console.log(`${pm.name} announces to ${channel}, @channel standy times!`)
    }

    debugsCode(pm, student, subject) {
        console.log(`${pm.name} debugs ${student.name}'s code on ${subject}`)
    }
}

   //Instructors

const Freya = new Instructor ({
    name: 'Freya',
    age: 30, 
    location: 'Athens',
    gender: 'Female',
    specialty: "JavaScript",
    favLanguage: "Css",
    catchPhrase: "Gotta code them all!"
});

const Odin = new Instructor ({
    name: 'Odin',
    age: 49, 
    location:'Norway',
    gender: 'Male',
    specialty: "Python",
    favLanguage: "Python",
    catchPhrase: "And the thunder rolls"
});

const Nyxx = new Instructor ({
    name: 'Nyxx',
    age:  29, 
    location: 'Paris',
    gender: 'Female',
    specialty: "HTML&CSS",
    favLanguage: "PhP",
    catchPhrase: "Startastic Job guys!"
});

   //PMs

const Athena = new ProjectManagers ({
    name: 'Athena',
    age: 20, 
    location: 'Denver',
    gender: 'Female',
    gradClassName: "CS15",
    favInstructor: "Odin"
});

const Leta = new ProjectManagers ({
    name: 'Leta',
    age: 25, 
    location: 'Alanta',
    gender: 'Female',
    gradClassName: "CS14",
    favInstructor: "Nyxx"
});

const Zypher = new ProjectManagers ({
    name = 'Zypher',
    age = 30, 
    location = 'New York City',
    gender = 'Male',
    gradClassName: "CS14",
    favInstructor: "Nyxx"
})

   //Students

const asteria = new Student ({
    name: 'Asteria',
    age: 20, 
    location: 'Denver',
    gender: 'Female',
    previousBackground: "Some html and css knowledge",
    favSubjects: ["JavaScript", "html"]
})

const ani = new Person ({
    name: 'Ani',
    age: 21, 
    location: 'Orlando',
    gender: 'Female',
    previousBackground: "Web Design",
    favSubjects: ["CSS", "html", "React"]
})

const rogue = new Person ({
    name: 'Rogue',
    age: 32, 
    location: 'Phoenix',
    gender: 'Male',
    previousBackground: "Backend",
    favSubjects: ["MySql", "PHP", "Ruby"]
})

const ren = new Person ({
    name: 'Ren',
    age: 26, 
    location: 'Olympia',
    gender: 'Male',
    previousBackground: "Some JavaScript",
    favSubjects: ["JavaScript"]
})

//Invoke

Nyxx.speak(); 
Odin.demo('JavaScript');
Freya.grade(asteria, 'JavaScript');
asteria.listsSubjects();
asteria.PRAssignment(asteria, "Advance Css");
asteria.sprintChallenge(asteria, "Applied JS");
Athena.debugsCode(Athena, asteria, "Js IV");
Athena.standUp(Athena, 'general')