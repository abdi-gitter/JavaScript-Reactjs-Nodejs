//How to use postman
const url = 'https://cwbarry.pythonanywhere.com/student/';

// fetch(url).then((response) => {
//   console.log(response);
//   return response.json()
// });

// fetch(url)
//   .then((response) => response.json())
//   .then((data) => console.log(data));

async function getStudents() {
  // fetch with then syntax
  //   fetch(url)
  //     .then((response) => response.json())
  //     .then((data) => console.log(data));
  //   const response = await fetch(url);
  //   const data = await response.json();
  //   console.log(data);

  // fetch with async await syntax

  //   const response = await fetch(url);
  //   const data = await response.json();
  //   console.log(data);
  //   return data;

  // axios

  const response = await axios.get(url);
  console.log(response);
  console.log(response.data);
  return response.data;
}

function displayStudents(data) {
  const ulElm = document.getElementById('student-container');
  const html = data.map(
    (item) =>
      `<li class="list-group-item">${item.number} - ${item.first_name} ${item.last_name}</li>`
  );
  console.log(html);
  console.log(html.join(''));
  ulElm.innerHTML = html.join('');
  //   ulElm.innerHTML = `
  //   <li class="list-group-item">Student Name</li>
  //   <li class="list-group-item">Student Name</li>
  //   <li class="list-group-item">Student Name</li>
  //   <li class="list-group-item">Student Name</li>
  //   <li class="list-group-item">Student Name</li>
  //   <li class="list-group-item">Student Name</li>
  //   `;
}

async function getData() {
  const data = await getStudents();
  displayStudents(data);
}

window.addEventListener('DOMContentLoaded', getData);

document.querySelector('form').addEventListener('submit', (event) => {
  // prevent refreshing page
  event.preventDefault();
  // collect information out of form inputs
  const first_name = document.getElementById('first-name').value;
  const last_name = document.getElementById('last-name').value;
  const number = document.getElementById('number').value;
  const path = document.getElementById('path').value;

  console.log(first_name, last_name, number, path);

  // Reset Form
  document.getElementById('first-name').value = '';
  document.getElementById('last-name').value = '';
  document.getElementById('number').value = '';
  document.getElementById('path').value = '';

  // send this data to the API
  addStudent(first_name, last_name, number, path);
});

async function addStudent(first_name, last_name, number, path) {
  const response = await axios({
    method: 'post',
    url: url,
    data: { first_name, last_name, number, path },
  });
  console.log(response);
  await getData();
}

async function updateStudent(id, first_name, last_name, number, path) {
  const response = await axios({
    method: 'put',
    url: url + id + '/',
    data: { first_name, last_name, number, path },
  });
  console.log(response);
  await getData();
}

document.getElementById('update').addEventListener('click', () => {
  const first_name = document.getElementById('first-name').value;
  const last_name = document.getElementById('last-name').value;
  const number = document.getElementById('number').value;
  const path = document.getElementById('path').value;

  updateStudent(20, first_name, last_name, number, path);
});

document.getElementById('delete').addEventListener('click', () => {
  deleteStudent(21);
});

async function deleteStudent(id) {
  const response = await axios({
    method: 'delete',
    url: url + id + '/',
  });
  console.log(response);
  await getData();
}
