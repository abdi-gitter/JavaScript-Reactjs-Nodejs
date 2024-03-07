//! DOM Elements
const modal = document.getElementById("studentModal");
const form = document.getElementById("student-form");

//! Global Variables
const url = "https://cwbarry.pythonanywhere.com/student/";
let students;
const operation = {
  type: "Add",
  id: null,
};

function displayStudents(data) {
  const ulElm = document.getElementById("student-container");
  const html = data.map(
    (item) =>
      `
      <li data-id="${item.id}"
      class="list-group-item d-flex justify-content-between align-items-center"
    >
    ${item.number} - ${item.first_name} ${item.last_name}
      <div
        class="btn-group"
        role="group"
      >
        <button
           data-bs-toggle="modal"
           data-bs-target="#studentModal"
           type="button" class="btn btn-warning">
          <i class="bi bi-pencil"></i>
        </button>
        <button type="button" class="btn btn-danger">
          <i class="bi bi-trash"></i>
        </button>
      </div>
    </li>
      `
  );

  ulElm.innerHTML = html.join("");
}

async function getData() {
  const response = await axios.get(url);
  students = response.data;
  displayStudents(students);
}

window.addEventListener("DOMContentLoaded", () => {
  getData();
  // modalBS = new bootstrap.Modal(document.getElementById("exampleModal"));
});

form.addEventListener("submit", (event) => {
  // prevent refreshing page
  event.preventDefault();
  // collect information out of form inputs
  const first_name = document.getElementById("first-name").value;
  const last_name = document.getElementById("last-name").value;
  const number = document.getElementById("number").value;
  const path = document.getElementById("path").value;

  console.log(first_name, last_name, number, path);

  // Reset Form
  form.reset();

  //! check the mode
  if (operation.type === "Add") {
    // send this data to the API
    addStudent(first_name, last_name, number, path);
  } else {
    updateStudent(operation.id, first_name, last_name, number, path);
    operation.id = null;
    operation.type = "Add";
  }
  const modalBS = bootstrap.Modal.getInstance("#studentModal");
  modalBS.hide();
});

//! CRUD Operations
//? Add a Student
async function addStudent(first_name, last_name, number, path) {
  const response = await axios({
    method: "post",
    url: url,
    data: { first_name, last_name, number, path },
  });
  console.log(response);
  getData();
}

//? Update a Student
async function updateStudent(id, first_name, last_name, number, path) {
  const response = await axios({
    method: "put",
    url: url + id + "/",
    data: { first_name, last_name, number, path },
  });
  console.log(response);
  getData();
}

//? Delete a Student
async function deleteStudent(id) {
  const response = await axios({
    method: "delete",
    url: url + id + "/",
  });
  console.log(response);
  getData();
}

document.getElementById("student-container").addEventListener("click", (e) => {
  console.log(e.target);
  //! if delete button clicked or icon clicked
  if (
    e.target.classList.contains("btn-danger") ||
    e.target.classList.contains("bi-trash")
  ) {
    const id = e.target.closest("li").dataset.id;
    console.log(id);
    deleteStudent(id);
  }

  //! if update button is clicked then we will pass the data into form and set the form into edit mode
  //! Give this example only if you have enough time otherwise just call updateStudent function with fixed data
  if (
    e.target.classList.contains("btn-warning") ||
    e.target.classList.contains("bi-pencil")
  ) {
    const id = e.target.closest("li").dataset.id;
    operation.id = id;
    operation.type = "Update";

    const student = students.find((item) => +item.id === +id);

    document.getElementById("first-name").value = student.first_name;
    document.getElementById("last-name").value = student.last_name;
    document.getElementById("number").value = student.number;
    document.getElementById("path").value = student.path;
  }
});

modal.addEventListener("shown.bs.modal", () => {
  console.log("modal");
  form.querySelector("button").textContent = operation.type;
  document.getElementById(
    "studentModalLabel"
  ).textContent = `${operation.type} a Student`;
});

document.getElementById("add-student-btn").addEventListener("click", () => {
  operation.id = null;
  operation.type = "Add";
  form.reset();
});
