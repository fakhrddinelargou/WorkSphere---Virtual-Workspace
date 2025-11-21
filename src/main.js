const workersContainer = document.getElementById("workersContainer");
const formulaire = document.getElementById("formulaire");
const form = document.getElementById("form");
const inputs = document.getElementById("inputs");
const expInput = document.getElementById("expInput");
const addExperience = document.getElementById("addExperience");
const workerPost = document.getElementById("worker-post");
const postS = document.getElementById("posts");
let workerProfile;
let userId = 1;
let workers = [];
let posts_conference = [];
let posts_reception = [];
let posts_serveurs = [];
let posts_securite = [];
let posts_personnel = [];
let posts_archives = [];
let check = true;
let newWorker = {};
function addNewWorker() {
  form.classList.add("animation")
  form.classList.remove("animationHidden")
  formulaire.classList.remove("hdn");
}

uploadImage.onchange = () => {
  workerProfile = URL.createObjectURL(uploadImage.files[0]);


  profile.src = workerProfile;
  // console.log( URL.createObjectURL(uploadImage.files[0]));
  //    const image = {image : workerProfile}
  // console.log(image);
  // newWorker.image = workerProfile
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(workerProfile);

  if (check) {
    validationFirstForm();
  } else {
    console.log(firstname.value);

    const job = document.getElementById("job");
    const company = document.getElementById("company");
    const date = document.getElementById("date");
    let isValid = true;

    if (job && company && date) {
      const Datee = date.value.trim();
      const today = new Date();
      const selectDate = new Date(Datee);

      if (date && Datee !== "" && selectDate >= today) {
        document.getElementById("checkDt").classList.add("hidden");
        isValid = false;
      } else {
        document.getElementById("checkDt").classList.remove("hidden");
        isValid = true;
      }

      if (company && company.value.length < 3) {
        document.getElementById("checkCp").classList.remove("hidden");
        isValid = false;
      } else {
        document.getElementById("checkCp").classList.add("hidden");
        isValid = true;
      }

      if (job && job.value.length < 3) {
        document.getElementById("checkJb").classList.remove("hidden");
        isValid = false;
      } else {
        document.getElementById("checkJb").classList.add("hidden");
        isValid = true;
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
        image: workerProfile,
        role: role.value,
      };
      console.log(newWorker);

      workers.push(newWorker);

      firstname.value = "";
      lastname.value = "";
      email.value = "";
      number.value = "";
      job.value = "";
      company.value = "";
      date.value = "";
      expInput.innerHTML = "";
      displayWorkewrs();
      check = true;
      form.classList.remove("animation")
      form.classList.add("animationHidden")
        setTimeout(() => {
     formulaire.classList.add("hdn");
  }, 250);
    }
  }
});

document.getElementById("closeForm").addEventListener('click' , ()=>{
form.classList.remove("animation")
      form.classList.add("animationHidden")
  setTimeout(() => {
     formulaire.classList.add("hdn");
  }, 250);
 
})
function validationFirstForm() {
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

  const ValidNumber =
    /^(06|07|05)/.test(number.value) &&
    /^\d+$/.test(number.value) &&
    number.value.length === 10;
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
    check = false;
    addExperience.disabled = false;
    console.log(addExperience.disabled);
    if (!addExperience.disabled) {
      addExperience.style.color = "green";
    }
  }
}

function addExperiences() {
  inputs.classList.add("HI");
  expInput.innerHTML += ` 
   <label class="flex flex-col w-full my-4" for="job">
       <p class="text-gray-600 mb-2">Job Title*</p> 
        <input class="bg-gray-100 h-10 pl-2 rounded-md mb-1 border border-gray-400 outline-none" type="text" id="job" placeholder="Job Title">
        <p id="checkJb" class="text-red-500 text-[.6rem] hidden">
This field is required</p>
    </label>
      <label class="flex flex-col w-full mb-4" for="job">
       <p class="text-gray-600 mb-2">Company*</p> 
        <input class="bg-gray-100 h-10 pl-2 rounded-md mb-1 border border-gray-400 outline-none" type="text" id="company" placeholder="Co..">
        <p id="checkCp" class="text-red-500 text-[.6rem] hidden">
This field is required</p>
    </label>
      <label class="flex flex-col w-full mb-4" for="date">
       <p class="text-gray-600 mb-2">Date*</p> 
        <input class="bg-gray-100 h-10 pl-2 rounded-md mb-1 border border-gray-400 outline-none" type="date" id="date">
        <p id="checkDt" class="text-red-500 text-[.6rem] hidden">
This field is required</p>
    </label>
    `;
  addExperience.disabled = true;
  if (addExperience.disabled) {
    addExperience.style.color = "#0db93b58";
  }
}

function displayWorkewrs() {
  console.log(workers);
  workersContainer.innerHTML = "";

  workers.forEach((worker) => {
    workersContainer.innerHTML += `
     <div
                            class="flex items-center relative gap-4 px-3 h-16 border border-gray-100 rounded-md ring-1 ring-gray-50 inset-shadow-2xs">
                            <div class="bg-blue-50 rounded-full p">
                                <img class="h-12 w-12 rounded-full"
                                    src=${
                                      worker.image !== undefined
                                        ? worker.image
                                        : "images/profile.jpg"
                                    } alt="maleUser" />
                            </div>
                            <div>
                                <p
                                    class="text-sm font-semibold text-slate-700 group-hover:text-slate-900">${
                                      worker.firstname + " " + worker.lastname
                                    }</p>
                                <p
                                    class="text-[.8rem] font-medium text-slate-500 group-hover:text-slate-700">${
                                      worker.role
                                    }</p>
                            </div>
                                   <div class="flex items-center gap-6 ml-auto">
                                <div id="post-${
                                  worker.id
                                }" class="cursor-pointer"><svg width="22px" fill="#334155"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M320.4 64C302.7 64 288.4 78.3 288.4 96L288.4 128L128.4 128C110.7 128 96.4 142.3 96.4 160L96.4 224C96.4 241.7 110.7 256 128.4 256L288.4 256L288.4 320L135 320C130.8 320 126.7 321.7 123.7 324.7L75.7 372.7C69.5 378.9 69.5 389.1 75.7 395.3L123.7 443.3C126.7 446.3 130.8 448 135 448L288.4 448L288.4 544C288.4 561.7 302.7 576 320.4 576C338.1 576 352.4 561.7 352.4 544L352.4 448L512.4 448C530.1 448 544.4 433.7 544.4 416L544.4 352C544.4 334.3 530.1 320 512.4 320L352.4 320L352.4 256L505.8 256C510 256 514.1 254.3 517.1 251.3L565.1 203.3C571.3 197.1 571.3 186.9 565.1 180.7L517.1 132.7C514.1 129.7 510 128 505.8 128L352.4 128L352.4 96C352.4 78.3 338.1 64 320.4 64z"/></svg></div>
                                <div id="profile-${
                                  worker.id
                                }" class="cursor-pointer"><svg width="22px" fill="#334155" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M384 64C366.3 64 352 78.3 352 96C352 113.7 366.3 128 384 128L466.7 128L265.3 329.4C252.8 341.9 252.8 362.2 265.3 374.7C277.8 387.2 298.1 387.2 310.6 374.7L512 173.3L512 256C512 273.7 526.3 288 544 288C561.7 288 576 273.7 576 256L576 96C576 78.3 561.7 64 544 64L384 64zM144 160C99.8 160 64 195.8 64 240L64 496C64 540.2 99.8 576 144 576L400 576C444.2 576 480 540.2 480 496L480 416C480 398.3 465.7 384 448 384C430.3 384 416 398.3 416 416L416 496C416 504.8 408.8 512 400 512L144 512C135.2 512 128 504.8 128 496L128 240C128 231.2 135.2 224 144 224L224 224C241.7 224 256 209.7 256 192C256 174.3 241.7 160 224 160L144 160z"/></svg></div>
                            </div>
                        </div>
    
    `;
  });

  openProfile();
  workers.forEach((el) => {
    checkPost(el);
  });
}

function openProfile() {
  workers.forEach((el) => {
    const userProfile = document.getElementById(`profile-${el.id}`);
    userProfile.addEventListener("click", () => {
      document.getElementById("worker-profile").classList.remove("hdn");

      document.getElementById("worker-profile").innerHTML = `

<section id="prfl" class="relative animation bg-white w-full max-w-[95%] lg:w-[50%] rounded-xl overflow-hidden  ">
            <div id="closeProfile" class="absolute right-6 top-4 cursor-pointer text-gray-500 text-[1.3rem] ">&#x2716;</div>
            <img class="w-full h-40" src="/images/bgProfile.jpg" alt="background">
            <div class="sm:flex sm:flex-col items-center ">
                <img class="w-24 rounded-full relative  m-auto top-[-3rem] border-4 border-white " src=${
                  el.image !== undefined ? el.image : "/images/profile.jpg"
                } alt="profile">
              <div class="flex flex-col gap-6  w-full p-6">
                <div class="flex items-center  ml-5  "><p class="w-[20%] text-sm font-bold text-gray-800">Full Name : </p> <p class=" w-full text-center text-gray-500 text-sm ">${
                  el.firstname + " " + el.lastname
                }</p></div>
                <div class="flex items-center  ml-5 "><p class=" w-[20%] text-sm font-bold text-gray-800">Email : </p> <p class="w-full text-center  text-gray-500 text-sm ">${
                  el.email
                }</p></div>
                <div class="flex items-center  ml-5 "><p class=" w-[20%] text-sm font-bold text-gray-800">Phone : </p> <p class="w-full text-center  text-gray-500 text-sm ">${
                  el.number
                }</p></div>
                <div class="flex flex-col gap-6 border py-4 rounded-md">
                <div class="flex items-center  ml-5 "><p class=" w-[20%] text-sm font-bold text-gray-800">Job : </p> <p class="w-full text-center  text-gray-500 text-sm ">${
                  el.job
                }</p></div>
                <div class="flex items-center  ml-5 "><p class=" w-[20%] text-sm font-bold text-gray-800">Post : </p> <p class="w-full text-center  text-gray-500 text-sm ">${
                  el.role
                }</p></div>
                <div class="flex items-center  ml-5 "><p class=" w-[20%] text-sm font-bold text-gray-800">Company : </p> <p class="w-full text-center  text-gray-500 text-sm ">${
                  el.company
                }</p></div>
                <div class="flex items-center  ml-5 "><p class=" w-[20%] text-sm font-bold text-gray-800">Location : </p> <p class="w-full text-center  text-gray-500 text-sm ">Casablanca/stat</p></div>
                </div>
                </div>
            </div>
                     <div class="w-full pr-4 pb-4 flex mt-12">
                <button id="remove-${
                  el.id
                }" class="bg-red-600 rounded-md h-8 w-20 text-gray-50 text-sm ml-auto">remove</button>
            </div>
        </section>

`;

      const closeProfile = document.getElementById("closeProfile");
      if (closeProfile) {
        closeProfile.addEventListener("click", () => {
          document.getElementById("prfl").classList.add("animationHidden");
          document.getElementById("prfl").classList.remove("animation");
          setTimeout(() => {
            document.getElementById("worker-profile").classList.add("hdn");
          }, 250);
        });
      }

      const removeBtn = document.getElementById(`remove-${el.id}`);
    removeBtn.addEventListener("click", () => {
      workers = workers.filter((item) => item.id !== el.id);
      displayWorkewrs();
      document.getElementById("worker-profile").classList.add("hdn");
      if (workers.length < 1) {
        workersContainer.innerHTML = `  <div
        class="w-full h-72 lg:h-[32rem]  flex items-center justify-center">
        <img src="/images/empty.png" alt="empty">
        </div>`;
      }
    });

    });
});
}

// COMPLATED 100%
function checkPost(el) {
  const postBtn = document.getElementById(`post-${el.id}`);
  postBtn.addEventListener("click", () => {
    workersPosts(el);
  });
}

// NEED FIX
function checkPostDiv(el) {
  console.log("lalaslad");

  const divBtn = document.getElementById(`div-worker${el.id}`);
  console.log("btn : ", divBtn);

  divBtn.addEventListener("click", () => {
    console.log(el);

    workersPosts(el);
  });
}
// COMPLATED 100%
function workersPosts(el) {
  workerPost.classList.remove("hdn");
  postS.innerHTML = `

           <div id="closeProfile" class=" absolute right-2 top-1 cursor-pointer text-gray-500 text-[1.3rem] ">&#x2716;</div>
        <div id="cf-${el.id}" class="${
    el.role === "Manager" || el.role === "Réceptionniste"
      ? "bg-white cursor-pointer "
      : "bg-gray-300 cursor-not-allowed"
  } h-12 rounded-md flex items-center pl-4">Salle de conférence</div> 
  
  
        <div id="rn-${el.id}" class="${
    el.role === "Réceptionniste" ||
    el.role === "Manager" ||
    el.role === "Nettoyage "
      ? "bg-white cursor-pointer"
      : "bg-gray-300 cursor-not-allowed"
  } h-12 rounded-md flex items-center pl-4" >Réception</div> 
  
  
        <div id="sr-${el.id}" class="${
    el.role === "Technicien IT" ||
    el.role === "Manager" ||
    el.role === "Nettoyage"
      ? "bg-white cursor-pointer"
      : "bg-gray-300 cursor-not-allowed"
  } h-12 rounded-md flex items-center pl-4" >Salle des serveurs</div> 
  
  
        <div id="sc-${el.id}" class="${
    el.role === "Agent de sécurité" ||
    el.role === "Manager" ||
    el.role === "Nettoyage"
      ? "bg-white cursor-pointer"
      : "bg-gray-300 cursor-not-allowed"
  } h-12 rounded-md flex items-center pl-4">Salle de sécurité</div>    


        <div id="pr-${el.id}" class="${
    el.role === "Manager" || el.role === "Nettoyage"
      ? "bg-white cursor-pointer"
      : "bg-gray-300 cursor-not-allowed"
  } h-12 rounded-md flex items-center pl-4" >Salle du personnel</div>    


        <div id="ar-${el.id}" class="${
    el.role === "Agent de sécurité" || el.role === "Manager"
      ? "bg-white cursor-pointer"
      : "bg-gray-300 cursor-not-allowed"
  } h-12 rounded-md flex items-center pl-4" >Salle d’archives</div>   
 

  
        <div id="ls-${el.id}" class="bg-white cursor-not-allowed h-12 rounded-md flex items-center pl-4" >List</div> 


`;
  document.getElementById("closeProfile").addEventListener("click", () => {
    console.log("eafasdfa");
    
    workerPost.classList.add("hdn");
  });
  posts(el);
}

function posts(el) {
  const cfBtn = document.getElementById(`cf-${el.id}`);
  const rnBtn = document.getElementById(`rn-${el.id}`);
  const srBtn = document.getElementById(`sr-${el.id}`);
  const scBtn = document.getElementById(`sc-${el.id}`);
  const prBtn = document.getElementById(`pr-${el.id}`);
  const arBtn = document.getElementById(`ar-${el.id}`);
  const lsBtn = document.getElementById(`ls-${el.id}`)
  cfBtn.addEventListener("click", () => {
    if (el.role === "Manager" || el.role === "Réceptionniste") {
      removeCardFromSalles(el, "conference");
    }
  });

  rnBtn.addEventListener("click", () => {
    if (
      el.role === "Réceptionniste" ||
      el.role === "Manager" ||
      el.role === "Nettoyage"
    ) {
      removeCardFromSalles(el, "reception");
    }
  });

  srBtn.addEventListener("click", () => {
    if (
      el.role === "Technicien IT" ||
      el.role === "Manager" ||
      el.role === "Nettoyage"
    ) {
      removeCardFromSalles(el, "serveurs");
    }
  });

  scBtn.addEventListener("click", () => {
    if (
      el.role === "Agent de sécurité" ||
      el.role === "Manager" ||
      el.role === "Nettoyage"
    ) {
      removeCardFromSalles(el, "securite");
    }
  });
  prBtn.addEventListener("click", () => {
    if (el.role === "Manager" || el.role === "Nettoyage") {
      removeCardFromSalles(el, "personnel");
    }
  });
  arBtn.addEventListener("click", () => {
    if (el.role === "Agent de sécurité" || el.role === "Manager") {
      removeCardFromSalles(el, "archives");
    }
  });
lsBtn.addEventListener('click' , ()=>{
    removeCardFromSalles(el, "list");
})

}

function removeCardFromSalles(el, salle) {
  if (salle !== "conference") {
    posts_conference = posts_conference.filter((rm) => rm.id !== el.id);
  }
  if (salle !== "reception") {
    posts_reception = posts_reception.filter((rm) => rm.id !== el.id);
  }
  if (salle !== "serveurs") {
    posts_serveurs = posts_serveurs.filter((rm) => rm.id !== el.id);
  }
  if (salle !== "securite") {
    posts_securite = posts_securite.filter((rm) => rm.id !== el.id);
  }
  if (salle !== "personnel") {
    posts_personnel = posts_personnel.filter((rm) => rm.id !== el.id);
  }
  if (salle !== "archives") {
    posts_archives = posts_archives.filter((rm) => rm.id !== el.id);
  }
 if(salle !== "list"){
  workers = workers.filter((ls)=> ls.id !== el.id )
 }
  //  workers = workers.filter((it) => it.id !== el.id);

  switch (salle) {
    case "conference":
      if (!posts_conference.some((item) => item.id === el.id)) {
        posts_conference.push(el);
      }
      break;
    case "reception":
      if (!posts_reception.some((item) => item.id === el.id)) {
        posts_reception.push(el);
      }
      break;
    case "serveurs":
      if (!posts_serveurs.some((item) => item.id === el.id)) {
        posts_serveurs.push(el);
      }
      break;
    case "securite":
      if (!posts_securite.some((item) => item.id === el.id)) {
        posts_securite.push(el);
      }
      break;
    case "personnel":
      if (!posts_personnel.some((item) => item.id === el.id)) {
        posts_personnel.push(el);
      }
      break;
    case "archives":
      if (!posts_archives.some((item) => item.id === el.id)) {
        posts_archives.push(el);
      }
      break;
      case "list" : 
      if(!workers.some((item)=> item.id === el.id)){
        workers.push(el)
      }
  }
  postsConference();
  postsReception();
  postsServeurs();
  postsSecurite();
  postsPersonnel();
  postsArchives();
  displayWorkewrs()
}

function postsConference() {
  const cfSpace = document.getElementById("cf-space");

  cfSpace.innerHTML = "";

  posts_conference.forEach((el) => {
    cfSpace.innerHTML += `
    
    
    
     <div id="div-worker${
       el.id
     }" class="bg-white flex items-center gap-1 p-1 rounded-md  ">
                                <img src=${
                                  el.image !== undefined
                                    ? el.image
                                    : "/images/profile.jpg"
                                } alt="profile"  class="rounded-full w-4 lg:w-8 ">
                                <div class="sm:w-16 lg:w-24">
                                    <p class="text-[.4rem] lg:text-[.6rem] text-gray-800 font-semibold">${
                                      el.firstname + " " + el.lastname
                                    }</p>
                                    <p class="text-gray-600 font-semibold text-[.35rem] lg:text-[.5rem]">${
                                      el.role
                                    }</p>
                                </div>
                            </div> 
    
    
    
    `;
  
  });
  
      // if (workers.length < 1) {
      //   workersContainer.innerHTML = `  <div
      //                         class="w-full h-72 lg:h-[32rem]  flex items-center justify-center">
      //                         <img src="/images/empty.png" alt="empty">
      //                     </div>`;
      // }
  if(posts_conference.length > 0){
    document.querySelector(".bg-cf").style.backgroundColor = "transparent"
  }else{
    document.querySelector(".bg-cf").style.backgroundColor = "#b90d0d58"
  }
  // displayWorkewrs();
  posts_conference.forEach((el) => {
    checkPostDiv(el);
  });
}

function postsReception() {
  const rcSpace = document.getElementById("rc-space");
  rcSpace.innerHTML = "";

  posts_reception.forEach((el) => {
    rcSpace.innerHTML += `
    
    
    
     <div id="div-worker${
       el.id
     }" class="bg-white flex items-center gap-1 p-1 rounded-md  ">
                                <img src=${
                                  el.image !== undefined
                                    ? el.image
                                    : "/images/profile.jpg"
                                } alt="profile"  class="rounded-full w-4 lg:w-8 ">
                                <div class="sm:w-16 lg:w-24">
                                    <p class="text-[.4rem] lg:text-[.6rem] text-gray-800 font-semibold">${
                                      el.firstname + " " + el.lastname
                                    }</p>
                                    <p class="text-gray-600 font-semibold text-[.35rem] lg:text-[.5rem]">${
                                      el.role
                                    }</p>
                                </div>
                            </div> 
    
    
    
    `;
  });
  // if (workers.length < 1) {
  //   workersContainer.innerHTML = `  <div
  //                         class="w-full h-72 lg:h-[32rem]  flex items-center justify-center">
  //                         <img src="/images/empty.png" alt="empty">
  //                     </div>`;
  // }

  if(posts_reception.length > 0){
  document.querySelector(".bg-rc").style.backgroundColor = "transparent"
}else{
  document.querySelector(".bg-rc").style.backgroundColor = "#b90d0d58"
}
  // displayWorkewrs();

  posts_reception.forEach((el) => {
    checkPostDiv(el);
  });
}

function postsServeurs() {
  const srSpace = document.getElementById("sr-space");

  srSpace.innerHTML = "";

  posts_serveurs.forEach((el) => {
    srSpace.innerHTML += `
    
    
    
     <div id="div-worker${
       el.id
     }" class="bg-white flex items-center gap-1 p-1 rounded-md  ">
                                <img src=${
                                  el.image !== undefined
                                    ? el.image
                                    : "/images/profile.jpg"
                                } alt="profile"  class="rounded-full w-4 lg:w-8 ">
                                <div class="sm:w-16 lg:w-24">
                                    <p class="text-[.4rem] lg:text-[.6rem] text-gray-800 font-semibold">${
                                      el.firstname + " " + el.lastname
                                    }</p>
                                    <p class="text-gray-600 font-semibold text-[.35rem] lg:text-[.5rem]">${
                                      el.role
                                    }</p>
                                </div>
                            </div> 
    
    
    
    `;

  });
  // if (workers.length < 1) {
  //   workersContainer.innerHTML = `  <div
  //                         class="w-full h-72 lg:h-[32rem]  flex items-center justify-center">
  //                         <img src="/images/empty.png" alt="empty">
  //                     </div>`;
  // }
        if(posts_serveurs.length > 0){
    document.querySelector(".bg-sr").style.backgroundColor = "transparent"
  }else{
    document.querySelector(".bg-sr").style.backgroundColor = "#b90d0d58"
  }
  // displayWorkewrs();
  posts_serveurs.forEach((el) => {
    checkPostDiv(el);
  });
}

function postsSecurite() {
  const scSpace = document.getElementById("sc-space");

  scSpace.innerHTML = "";

  posts_securite.forEach((el) => {
    scSpace.innerHTML += `
    
    
    
     <div id="div-worker${
       el.id
     }" class="bg-white flex items-center gap-1 p-1 rounded-md  ">
                                <img src=${
                                  el.image !== undefined
                                    ? el.image
                                    : "/images/profile.jpg"
                                } alt="profile"  class="rounded-full w-4 lg:w-8 ">
                                <div class="sm:w-16 lg:w-24">
                                    <p class="text-[.4rem] lg:text-[.6rem] text-gray-800 font-semibold">${
                                      el.firstname + " " + el.lastname
                                    }</p>
                                    <p class="text-gray-600 font-semibold text-[.35rem] lg:text-[.5rem]">${
                                      el.role
                                    }</p>
                                </div>
                            </div> 
    
    
    
    `;
    // workers = workers.filter((it) => it.id !== el.id);
  });
  // if (workers.length < 1) {
  //   workersContainer.innerHTML = `  <div
  //                         class="w-full h-72 lg:h-[32rem]  flex items-center justify-center">
  //                         <img src="/images/empty.png" alt="empty">
  //                     </div>`;
  // }
        if(posts_securite.length > 0){
    document.querySelector(".bg-sc").style.backgroundColor = "transparent"
  }else{
    document.querySelector(".bg-sc").style.backgroundColor = "#b90d0d58"
  }
  // displayWorkewrs();

  posts_securite.forEach((el) => {
    checkPostDiv(el);
  });
}

function postsPersonnel() {
  const prSpace = document.getElementById("pr-space");
  prSpace.innerHTML = "";

  posts_personnel.forEach((el) => {
    prSpace.innerHTML += `
    
    
    
     <div id="div-worker${
       el.id
     }" class="bg-white flex items-center gap-1 p-1 rounded-md  ">
                                <img src=${
                                  el.image !== undefined
                                    ? el.image
                                    : "/images/profile.jpg"
                                } alt="profile"  class="rounded-full w-4 lg:w-8 ">
                                <div class="sm:w-16 lg:w-24">
                                    <p class="text-[.4rem] lg:text-[.6rem] text-gray-800 font-semibold">${
                                      el.firstname + " " + el.lastname
                                    }</p>
                                    <p class="text-gray-600 font-semibold text-[.35rem] lg:text-[.5rem]">${
                                      el.role
                                    }</p>
                                </div>
                            </div> 
    
    
    
    `;
    // workers = workers.filter((it) => it.id !== el.id);
  });
  // if (workers.length < 1) {
  //   workersContainer.innerHTML = `  <div
  //                         class="w-full h-72 lg:h-[32rem]  flex items-center justify-center">
  //                         <img src="/images/empty.png" alt="empty">
  //                     </div>`;
  // }
        if(posts_personnel.length > 0){
    document.querySelector(".bg-pr").style.backgroundColor = "transparent"
  }else{
    document.querySelector(".bg-pr").style.backgroundColor = "#b90d0d58"
  }
  // displayWorkewrs();

  posts_personnel.forEach((el) => {
    checkPostDiv(el);
  });
}

function postsArchives(){
    const arSpace = document.getElementById("ar-space");
  arSpace.innerHTML = "";

  posts_archives.forEach((el) => {
    arSpace.innerHTML += `
    
    
    
     <div id="div-worker${
       el.id
     }" class="bg-white flex items-center gap-1 p-1 rounded-md  ">
                                <img src=${
                                  el.image !== undefined
                                    ? el.image
                                    : "/images/profile.jpg"
                                } alt="profile"  class="rounded-full w-4 lg:w-8 ">
                                <div class="sm:w-16 lg:w-24">
                                    <p class="text-[.4rem] lg:text-[.6rem] text-gray-800 font-semibold">${
                                      el.firstname + " " + el.lastname
                                    }</p>
                                    <p class="text-gray-600 font-semibold text-[.35rem] lg:text-[.5rem]">${
                                      el.role
                                    }</p>
                                </div>
                            </div> 
    
    
    
    `;
    // workers = workers.filter((it) => it.id !== el.id);
  });
  // if (workers.length < 1) {
  //   workersContainer.innerHTML = `  <div
  //                         class="w-full h-72 lg:h-[32rem]  flex items-center justify-center">
  //                         <img src="/images/empty.png" alt="empty">
  //                     </div>`;
  // }
        if(posts_archives.length > 0){
    document.querySelector(".bg-ar").style.backgroundColor = "transparent"
  }else{
    document.querySelector(".bg-ar").style.backgroundColor = "#b90d0d58"
  }
  // displayWorkewrs();

  posts_archives.forEach((el) => {
    checkPostDiv(el);
  });
}










































// workersContainer.innerHTML=`  <div
//                     class="w-full h-72 lg:h-[32rem]  flex items-center justify-center">
//                     <img src="/images/empty.png" alt="empty">
//                 </div>`

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
