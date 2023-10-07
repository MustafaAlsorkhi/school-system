 
 class student {

    constructor (name,date,gender,Phone,garde){     
        this.name = name;
        this.date = date;
        this.gender = gender;
        this.Phone = Phone;
        this.garde = garde;
    }
      myfunction(...a){
        let arr=[];

        arr.push(a);
        console.log(arr)
      
          localStorage.setItem("Students", JSON.stringify(a));
      }
 }
 

 let tableInfo  = document.getElementById("table");

let submit = document.getElementById("Submit");

submit.addEventListener("click" , (eventt) =>{
    eventt.preventDefault();
    
    let row = document.createElement("tr")
    let nameT= document.createElement("td")
    let dateT= document.createElement("td")
    let genderT= document.createElement("td")
    let PhoneT= document.createElement("td")
    let gradeT= document.createElement("td")
    
    nameT.innerHTML=document.getElementById("name").value;
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


//________________________________________________________________________________________________________________________________________

    let card = document.createElement("div");
    card.style.border = "1px solid black";
    card.style.marginLeft="10px"
    card.style.marginTop="7px"
    card.style.width="120px"


    let imgg = document.createElement("img");

    let name= document.createElement("div")
    let date= document.createElement("div")
    let gender= document.createElement("div")
    let Phone= document.createElement("div")
    let grade= document.createElement("div")
    
   

    imgg.src="mgmg/edfw.png"
    
    
    name.innerHTML=document.getElementById("name").value;
    date.innerHTML=document.getElementById("date").value;
    gender.innerHTML=document.getElementById("gender").value;


    Phone.innerHTML=document.getElementById("Phone").value;
    grade.innerHTML=document.getElementById("grade").value;


let nName = document.getElementById("name").value;
let nDate = document.getElementById("date").value;
let nGender = document.getElementById("gender").value;


let nPhone = document.getElementById("Phone").value;
let nGrade = document.getElementById("grade").value;


 let hh = new student(name,date,gender,Phone,grade);     
 hh.myfunction([nName,nDate,nGender,nPhone,nGrade]);          

    card.appendChild(imgg);
    card.appendChild(name);
    card.appendChild(date);
    card.appendChild(gender);
    card.appendChild(Phone);
    card.appendChild(grade);

    let cardSIn = document.getElementById("cardSIn");
    
    cardSIn.appendChild(card);     







});


