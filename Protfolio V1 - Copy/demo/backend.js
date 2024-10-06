// ====================js for text animation =================== 
 
 var typed = new Typed (".typing",{
strings:["Web Designer","Web Developer","Graphic Designer","YOUTUBER"],
typeSpeed:100,
BackSpeed:60,
loop:true
})

// ==========================JS for link with google sheets =============================

 var tablinks = document.getElementsByClassName('tab-links');
 var tabcontents = document.getElementsByClassName('tab-contents');

 
 
 function opentab(tabname) {
     for (tablink of tablinks) {
         tablink.classList.remove("active-link");
     }
     for (tabcontent of tabcontents) {
         tabcontent.classList.remove("active-tab");
     }
     event.currentTarget.classList.add("active-link");
     document.getElementById(tabname).classList.add("active-tab")
 }


 var sidemenu = document.getElementById("sidemenu");
 function openmenu() {
     sidemenu.style.right = "0";


 }
 function closemenu() {
     sidemenu.style.right = "-200px";


 }


 const scriptURL = 'https://script.google.com/macros/s/AKfycbwGAI6VLOuXKKM5CRBs7KPvecBnrYot3ctwz6R00ApRZjKFs3PUKKpvpsy9oO_KWBmCHQ/exec'
 const form = document.forms['submit-to-google-sheet']
 const msg = document.getElementById('msg')

 form.addEventListener('submit', e => {
     e.preventDefault()
     fetch(scriptURL, { method: 'POST', body: new FormData(form) })
         .then(response => {
             msg.innerHTML = "Message sent sucessfully"
             setTimeout(function () {
                 msg.innerHTML = ""
             }, 2000)
             form.reset()
         })
         .catch(error => console.error('Error!', error.message))
 })



 
// ==========================JS for link with google sheets =============================

var tablinks = document.getElementsByClassName('tab-links');
var tabcontents = document.getElementsByClassName('tab-contents');



function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab")
}


var sidemenu = document.getElementById("sidemenu");
function openmenu() {
    sidemenu.style.right = "0";


}
function closemenu() {
    sidemenu.style.right = "-200px";


}


const scriptURL = 'https://script.google.com/macros/s/AKfycbwGAI6VLOuXKKM5CRBs7KPvecBnrYot3ctwz6R00ApRZjKFs3PUKKpvpsy9oO_KWBmCHQ/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById('msg')

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Message sent sucessfully"
            setTimeout(function () {
                msg.innerHTML = ""
            }, 2000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
})

// -----------------Styles for progress for skills.html-------------------//
document.addEventListener('DOMContentLoaded', () => {
    const progressElements = document.querySelectorAll('.progress');
    
    function animateProgressBar(id, percentage) {
        const progressElement = document.getElementById(id);
        let progressValue = 0;
        const interval = setInterval(() => {
            progressValue++;
            progressElement.style.background = `conic-gradient(#4caf50 0% ${progressValue}%, #ccc ${progressValue}% 100%)`;
            if (progressValue >= percentage) {
                clearInterval(interval);
            }
        }, 15);
    }

    // Call this function when the page loads
    function loadSkills() {
        animateProgressBar('progress-html', 100);  // HTML example, 100% progress
        animateProgressBar('progress-css', 90);    // CSS example, 90% progress
        // Add for other skills similarly
    }

    // Load the skills when the page opens
    loadSkills();
});


