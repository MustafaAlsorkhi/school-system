class student {
    static arr = [];

    constructor (info) {     
        this.info = info;
    }

    myfunction(){
        student.arr.push(this.info);
        localStorage.setItem("Students", JSON.stringify(student.arr));     /// convert the data from java script to json
    }
}

let tableInfo = document.getElementById("table");
let submit = document.getElementById("Submit");

// Restore the data saved when the page loads
document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("Students")) {
        const savedStudents = JSON.parse(localStorage.getItem("Students"));      // convert the data from json to java script to display it
        student.arr = savedStudents;

//Display data saved in localStorage
        savedStudents.forEach((studentInfo) => {
            createStudentCard(studentInfo);
        });
    }
});

function createStudentCard(info) {
    let card = document.createElement("div");
    card.style.border = "2px solid black";
    card.style.marginLeft = "10px";
    card.style.marginTop = "7px";
    card.style.width = "120px";
    card.style.backgroundColor = "#f3f4f7";

    let imgg = document.createElement("img");
    imgg.src = 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png';
    imgg.classList.add("photo");
    card.appendChild(imgg);

    for (const value of info) {
        let div = document.createElement("div");
        div.innerHTML = value;
        card.appendChild(div);
    }

    let cardSIn = document.getElementById("cardSIn");
    cardSIn.appendChild(card);
}

submit.addEventListener("click", (eventt) => {
    eventt.preventDefault();
    let row = document.createElement("tr")
    let nameT= document.createElement("td")
    let dateT= document.createElement("td")
    let genderT= document.createElement("td")
    let PhoneT= document.createElement("td")
    let gradeT= document.createElement("td")
    
    dateT.innerHTML=document.getElementById("date").value;
    genderT.innerHTML=document.getElementById("gender").value;
    PhoneT.innerHTML=document.getElementById("Phone").value;
    gradeT.innerHTML=document.getElementById("grade").value;

     row.appendChild(nameT);
     row.appendChild(dateT);
     row.appendChild(genderT);
     row.appendChild(PhoneT);
     row.appendChild(gradeT);

     tableInfo.appendChild(row);
//_________________________________________________________________________________________
    const info = [
        
        document.getElementById("name").value,
        document.getElementById("date").value,
        document.getElementById("gender").value,
        document.getElementById("Phone").value,
        document.getElementById("grade").value
    ];


// Save data to localStorage
    let hh = new student(info);
    hh.myfunction();


// Create and display the student card
    createStudentCard(info);

  
});
