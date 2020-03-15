const employees = [];

$(document).ready(init);

function init() {
  $(".js-").on("submit", addEmployeeOrder);
  $(".js-table-body").on("click", ".js-btn-delete", deleteOrder);
}

function deleteOrder(event) {
  console.log("DELETE:", event);
  console.log("DELETE:", this);
  const employeeIndex = $(this).data("index");
  console.log("DELETE:", employeeIndex);

  employee.splice(employeeIndex, 1);

  render();
}

function submitEmployeeInfo(event) {
  console.log("submit:", event);
  event.preventDefault();
  console.log("new employee");

  const newEmployeeInfo = {
    firstName: $(".js-input-first").val(),
    lastName: $(".js-input-last").val(),
    idNumber: $(".js-input-id").val(),
    title: $(".js-input-title").val(),
    annualSalary: parseFloat($(".js-input-salary").val())
  };

  employees.push(newEmployeeInfo);
  console.log("Employees:", employees);
  render();
}
