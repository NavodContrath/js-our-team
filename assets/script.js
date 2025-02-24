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

//2️⃣For loop to cycle in the array
for (let i = 0; i < teamMembers.length; i++) {
  const thisMember = teamMembers[i];
  //function to add mark up
  const markup = addMarkUp(thisMember)
  memberListEl.innerHTML += markup
}

//Functions

/**3️⃣
 * function used to add html element in page
 * @param {*member of the team} member 
 * @returns markup
 */
function addMarkUp(member) {
  const { name, role, email, img } = member
  const markup = `
<div class="col d-flex gap-5 member-card align-center">
    <img src="assets/${img}" alt="" width="120px">
    <div class="card-body" id="description">
        <h5>${name.toUpperCase()}</h5>
        <div>${role}</div>
        <div><a href="">${img}</a></div>
    </div>
</div>`
  return markup
}


