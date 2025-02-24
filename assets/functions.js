//Functions
/**
 * function used to add html element in page
 * @param {*member of the team} member 
 * @returns markup
 */
function addMarkUp(member) {
    const { name, role, email, img } = member
    const markup = `
  <div class="col d-flex member-card align-center">
      <img src="assets/${img}" alt="" width="120px">
      <div class="card-body" id="description">
          <h5>${name.toUpperCase()}</h5>
          <div>${role}</div>
          <div><a href="">${email}</a></div>
      </div>
  </div>`
    return markup
}

/**
 * For loop to cycle in the array and add member in the array in page
 * @param {*teamMembers} array 
 * @param {*memberListEl} domEl 
 */
function renderTeamMembers(array, domEl) {
    for (let i = 0; i < array.length; i++) {
        const thisMember = array[i];
        //function to add mark up
        const markup = addMarkUp(thisMember)
        domEl.innerHTML += markup
    }
}