//API responses to frontend
document.addEventListener('DOMContentLoaded', function () {
  const usersContainer = document.getElementById('user-cards');
  let users = [];

  async function fetchData() {
      try {
          const response = await fetch('https://randomuser.me/api/?results=500&seed=foo');
          const data = await response.json();
          // Data from the api
          users = data.results.map(user => ({
              id: user.id.value, 
              gender: user.gender,
              fullName: user.name.first + ' ' + user.name.last, 
              city: user.location.city,
              country: user.location.country,
              email: user.email,
              username: user.login.username,
              password: user.login.password,
              age: user.dob.age,
              picture: user.picture.thumbnail,
              credit: Math.floor(Math.random() * 100) + 1
          }));
          displayUsers(users);
      } catch (error) {
          console.error('Fetching users failed:', error);
      }
  }

  function generateUserCard(user) {
      return `
          <div class="col-md-4 mb-4">
              <div class="card">
                  <img src="${user.picture}" class="card-img-top" alt="Profile picture of ${user.fullName}">
                  <div class="card-body">
                      <h5 class="card-title">${user.fullName}</h5>
                      <p class="card-text">${user.city}, ${user.country}</p>
                      <p class="card-text">Email: ${user.email}</p>
                      <p class="card-text">Credit: ${user.credit}</p>
                  </div>
              </div>
          </div>
      `;
  }

  function displayUsers(filteredUsers) {
      usersContainer.innerHTML = filteredUsers.map(user => generateUserCard(user)).join('');
  }

  function filterUsers(gender) {
      if (gender === 'all') {
          displayUsers(users);
      } else {
          const filteredUsers = users.filter(user => user.gender === gender);
          displayUsers(filteredUsers);
      }
  }

  // Fetch and display users on initial load
  fetchData();

  // Setup filter buttons
  document.getElementById('filter-all')
  .addEventListener('click', () => filterUsers('all'));
  document.getElementById('filter-female')
  .addEventListener('click', () => filterUsers('female'));
  document.getElementById('filter-male')
  .addEventListener('click', () => filterUsers('male'));
});

 




/* console.log('******app.js******');

const userCardsContainer = document.getElementById('userCards');
const buttonAll = document.getElementById('all');
const buttonFemale = document.getElementById('Female');
const buttonMale = document.getElementById('Male');

async function fetchUserData() {
  const res = await fetch('https://randomuser.me/api/?results=500&seed=foo');
  const data = await res.json();
  const users = data.results;
  console.log(users);

  //! display female and male users count seperately
  const NumberOfMales = users.filter(user => user.gender === 'male').length;
  const NumberOfFemales = users.filter(user => user.gender === 'female').length;
  console.log('Number of males: ' + NumberOfMales);
  console.log('Number of females: ' + NumberOfFemales);

  //! display all the users older than 40
  console.log(users.filter(user => user.dob.age > 40));

  //! display all the users from Germany
  console.log(users.filter(user => user.location.country === 'Germany'));

  //! display the index position of the first user from Germany
  console.log(users.findIndex(user => user.location.country === 'Germany'));
  console.log(users[4]);

  //! find the first user whoose age is 28
  console.log(users.findIndex(user => user.dob.age === 28));
  console.log(users[222]);

  //! generate a new user list from response:
  const newUsers = users.map(user => ({
    id: Math.floor(Math.random() * 4000) + 1000,
    gender: user.gender,
    fullName: user.name.first + user.name.last,
    city: user.location.city,
    country: user.location.country,
    email: user.email,
    username: user.login.username,
    password: user.login.password,
    age: user.dob.age,
    picture: user.picture.thumbnail,
    credit: Math.floor(Math.random() * 100) + 1,
  }));
  console.log(newUsers);

  //! Develop a bootstrap card and display first 20 users whose credit is greater than 50
  //   const usersWithMoreThan50Credit = newUsers.filter(user => user.credit > 50);
  //   for (let i = 0; i < 20; i++) {
  //     const user = usersWithMoreThan50Credit[i];
  //     const userCard = ` <div class="card col-md-4, mb-4" style="width:250px">
  //     <img  src="${user.picture}" alt="${user.fullName}" class="card-img-top" />
  //     <div class="card-body">
  //       <h4 class="card-title">${user.fullName}</h4>
  //       <h5 class="card-title">${user.city}</h5>
  //       <h6 class="card-title">${user.country}</h6>
  //       <p class="card-text">${user.age}</p>
  //       <p class="card-text">${user.email}</p>
  //       <p class="card-text">${user.credit}</p>
  //     </div>
  //   </div>`;
  //     userCardsContainer.innerHTML += userCard;
  //   }
}

fetchUserData();

async function filterUsers(gender) {
  const res = await fetch('https://randomuser.me/api/?results=500&seed=foo');
  const data = await res.json();
  const users = data.results;
  userCardsContainer.innerHTML = '';
  if (gender === 'all') {
    users.forEach(user => {
      const userCard = ` <div class="card col-md-4, mb-4" style="width:250px">
        <img  src="${user.picture.thumbnail}" alt="${
        user.name.first
      }" class="card-img-top" />
        <div class="card-body">
          <h4 class="card-title">${user.name.first + ' ' + user.name.last}</h4>
          <h5 class="card-title">${user.location.city}</h5>
          <h6 class="card-title">${user.location.country}</h6>
          <p class="card-text">${user.dob.age}</p>
          <p class="card-text">${user.email}</p>
        </div>
      </div>`;
      userCardsContainer.innerHTML += userCard;
    });
  } else {
    const filteredUsers = users.filter(user => user.gender === gender);
    filteredUsers.forEach(user => {
      const userCard = ` <div class="card col-md-4, mb-4" style="width:250px">
      <img  src="${user.picture.thumbnail}" alt="${
        user.name.first
      }" class="card-img-top" />
      <div class="card-body">
        <h4 class="card-title">${user.name.first + ' ' + user.name.last}</h4>
        <h5 class="card-title">${user.location.city}</h5>
        <h6 class="card-title">${user.location.country}</h6>
        <p class="card-text">${user.dob.age}</p>
        <p class="card-text">${user.email}</p>
      </div>
    </div>`;
      userCardsContainer.innerHTML += userCard;
    });
  }
}

buttonAll.addEventListener('click', e => {
  filterUsers('all');
});
buttonFemale.addEventListener('click', e => {
  filterUsers('female');
});
buttonMale.addEventListener('click', e => {
  filterUsers('male');
}); */










