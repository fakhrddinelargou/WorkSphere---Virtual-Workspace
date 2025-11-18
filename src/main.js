const workersContainer = document.getElementById("workersContainer");
const formulaire = document.getElementById("formulaire");
const form = document.getElementById("form");
const inputs = document.getElementById("inputs");
const expInput = document.getElementById("expInput");
const addExperience = document.getElementById("addExperience")

let  workerProfile;
let userId = 1
let workers = [];
let posts = [];
let check = true
let newWorker = {}
formulaire.classList.add("hidden")


function addNewWorker(){
        formulaire.classList.remove("hidden")
}

uploadImage.onchange = () => {
    workerProfile= URL.createObjectURL(uploadImage.files[0]);
    
    profile.src = workerProfile
    // console.log( URL.createObjectURL(uploadImage.files[0]));
//    const image = {image : workerProfile}
    // console.log(image);
    // newWorker.image = workerProfile

    
};

form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(workerProfile);
    

    if(check){
        validationFirstForm()
    }else{

 console.log(firstname.value);
    
    const job = document.getElementById("job");
const company = document.getElementById("company");
const date = document.getElementById("date");
let isValid = true

if(job && company && date){
    const Datee = date.value.trim();
    const today = new Date();
    const selectDate = new Date(Datee);

    if(Datee !== "" && selectDate >= today){
        document.getElementById("checkDt").classList.add("hidden");
        isValid = false
    } else {
        document.getElementById("checkDt").classList.remove("hidden");
        isValid = true
       
    }

    if(company.value.length < 3){
        document.getElementById("checkCp").classList.remove("hidden");
        isValid = false
      
    } else {
        document.getElementById("checkCp").classList.add("hidden");
        isValid = true
    
    }

    if(job.value.length < 3){
        document.getElementById("checkJb").classList.remove("hidden");
        isValid = false
         
    } else {
        document.getElementById("checkJb").classList.add("hidden");
        isValid = true
    
    }
}


if (isValid) {

    newWorker = {
        id: `user${userId++}`,
        firstname: firstname.value,
        lastname: lastname.value,
        email: email.value,
        number: number.value,
        job: job.value,
        company: company.value,
        date: date.value,
        image : workerProfile,
        role : role.value
    };
    console.log(newWorker);
    
    workers.push(newWorker);
    
    firstname.value = ""
    lastname.value = ""
    email.value = ""
    number.value = ""
    job.value = ""
    company.value = ""
    date.value = ""
    expInput.innerHTML = ""
    displayWorkewrs();
    check = true
    formulaire.classList.add("hidden");
}
  


    }


  

});




function validationFirstForm(){
    const profile = document.getElementById("profile");
const uploadImage = document.getElementById("uploadImage");
const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const role = document.getElementById("role");
const email = document.getElementById("email");
const number = document.getElementById("number");
const checkFn = document.getElementById("checkFn");
const checkLn = document.getElementById("checkLn");
const checkEm = document.getElementById("checkEm");
const checkNmr = document.getElementById("checkNmr");


    
  
  
  const ValidNumber = /^(06|07|05)/.test(number.value) && /^\d+$/.test(number.value) && number.value.length === 10;
  const ValidEmail = email.value.includes("@gmail.com");
  const ValidFirstName = firstname.value.length >= 3;
  const ValidlastName = lastname.value.length >= 3;



  if (ValidFirstName) {
    checkFn.classList.add("hidden");
  } else {
    checkFn.classList.remove("hidden");
  }
  if (ValidlastName) {
    checkLn.classList.add("hidden");
  } else {
    checkLn.classList.remove("hidden");
  }
  if (ValidEmail) {
    checkEm.classList.add("hidden");
  } else {
    checkEm.classList.remove("hidden");
  }
  if (ValidNumber) {
    checkNmr.classList.add("hidden");
  } else {
    checkNmr.classList.remove("hidden");
  }
  
  
        if (ValidFirstName && ValidlastName && ValidEmail && ValidNumber) {
            console.log(newWorker);
            check = false
            addExperience.disabled = false
            console.log(addExperience.disabled);
                if(!addExperience.disabled){
        addExperience.style.color  ="green"
    }
}
    
}

function addExperiences() {

    inputs.classList.add('HI')
  expInput.innerHTML += ` 
   <label class="flex flex-col w-full my-4" for="job">
       <p class="text-gray-600 mb-2">Job Title*</p> 
        <input class="bg-gray-100 h-10 pl-2 rounded-md mb-1 border border-gray-400 outline-none" type="text" id="job" placeholder="Job Title">
        <p id="checkJb" class="text-red-500 text-[.6rem] hidden">somethink wrong</p>
    </label>
      <label class="flex flex-col w-full mb-4" for="job">
       <p class="text-gray-600 mb-2">Company*</p> 
        <input class="bg-gray-100 h-10 pl-2 rounded-md mb-1 border border-gray-400 outline-none" type="text" id="company" placeholder="Co..">
        <p id="checkCp" class="text-red-500 text-[.6rem] hidden">somethink wrong</p>
    </label>
      <label class="flex flex-col w-full mb-4" for="date">
       <p class="text-gray-600 mb-2">Date*</p> 
        <input class="bg-gray-100 h-10 pl-2 rounded-md mb-1 border border-gray-400 outline-none" type="date" id="date">
        <p id="checkDt" class="text-red-500 text-[.6rem] hidden">somethink wrong</p>
    </label>
    `;
            addExperience.disabled = true
    if(addExperience.disabled){
        addExperience.style.color  ="#0db93b58"
    }

   



}

function displayWorkewrs(){
console.log(workers);
workersContainer.innerHTML =""

workers.forEach((worker)=>{

    workersContainer.innerHTML+=`
     <div
                            class="flex items-center gap-4 px-3 h-16 border border-gray-100 rounded-md ring-1 ring-gray-50 inset-shadow-2xs">
                            <div class="bg-blue-50 rounded-full p">
                                <img class="h-12 w-12 rounded-full"
                                    src=${worker.image !== undefined ? worker.image : "images/profile.jpg"  } alt="maleUser" />
                            </div>
                            <div class>
                                <p
                                    class="text-sm font-semibold text-slate-700 group-hover:text-slate-900">${worker.firstname + " " + worker.lastname}</p>
                                <p
                                    class="text-[.8rem] font-medium text-slate-500 group-hover:text-slate-700">${worker.role}</p>
                            </div>
                        </div>
    
    `
})

}









































// function addNewWorker() {}

// EXPERIENCES

//    <label class="flex flex-col w-full mb-4" for="job">
//        <p class="text-gray-600 mb-2">Job Title*</p>
//         <input class="bg-gray-100 h-10 pl-2 rounded-md mb-1 border border-gray-400 outline-none" type="text" id="job" placeholder="Job Title">
//         <p id="checkJb" class="text-red-500 text-[.6rem] hidden">somethink wrong</p>
//     </label>
//       <label class="flex flex-col w-full mb-4" for="job">
//        <p class="text-gray-600 mb-2">Company*</p>
//         <input class="bg-gray-100 h-10 pl-2 rounded-md mb-1 border border-gray-400 outline-none" type="text" id="company" placeholder="Co..">
//         <p id="checkCp" class="text-red-500 text-[.6rem] hidden">somethink wrong</p>
//     </label>
//       <label class="flex flex-col w-full mb-4" for="date">
//        <p class="text-gray-600 mb-2">Date*</p>
//         <input class="bg-gray-100 h-10 pl-2 rounded-md mb-1 border border-gray-400 outline-none" type="date" id="date">
//         <p id="checkDt" class="text-red-500 text-[.6rem] hidden">somethink wrong</p>
//     </label>

// ROLE
//   <div class="bg-white flex items-center gap-1 p-1 rounded-md  ">
//                                 <img src="/images/profile.jpg" alt="profile"  class="rounded-full w-4 lg:w-8 ">
//                                 <div class="sm:w-16 lg:w-24">
//                                     <p class="text-[.4rem] lg:text-[.6rem] text-gray-800 font-semibold">Fakhreddine</p>
//                                     <p class="text-gray-600 font-semibold text-[.35rem] lg:text-[.5rem]">programmer</p>
//                                 </div>
//                             </div>

// EMPTY

//       <div
//                             class="w-full h-72 lg:h-[32rem]  flex items-center justify-center">
//                             <img src="/images/empty.png" alt="empty">
//                         </div>

// WORKERS PROFILE

//  <div
//                             class="flex items-center gap-4 px-3 h-16 border border-gray-100 rounded-md ring-1 ring-gray-50 inset-shadow-2xs">
//                             <div class="bg-blue-50 rounded-full p">
//                                 <img class="h-12 w-12 rounded-full"
//                                     src="/images/maleUser.png" alt="maleUser" />
//                             </div>
//                             <div class>
//                                 <p
//                                     class="text-sm font-semibold text-slate-700 group-hover:text-slate-900">Fakhreddine
//                                     Largou</p>
//                                 <p
//                                     class="text-[.8rem] font-medium text-slate-500 group-hover:text-slate-700">FullStack
//                                     Developer</p>
//                             </div>
//                         </div>
