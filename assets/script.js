const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

//1️⃣Get element from html by id
const memberListEl = document.getElementById("member_list")
const formEl = document.querySelector("form")

//2️⃣Function that loop in the array and add elements to the page
renderTeamMembers(teamMembers, memberListEl)

//3️⃣Event litsener to submit the form
formEl.addEventListener('submit', (e) => {
  e.preventDefault()
  //get elements value to display later
  const name = document.getElementById("user_name").value
  const role = document.getElementById("user_role").value
  const email = document.getElementById("user_mail").value
  const img = document.getElementById("user_img").value
  //create a new object with the semplified version of es6
  const newMember = {
    name,
    role,
    email,
    img,
  }
  //function to add html elements
  const markup = addMarkUp(newMember)
  memberListEl.innerHTML += markup
})


