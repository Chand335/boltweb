document.querySelectorAll('.active').forEach(el => {
  el.classList.remove('fade');
});
document.querySelectorAll('.amhfld').forEach(el => {
  const formGroup = el.closest('.form-group');
  if (formGroup) {
    formGroup.classList.add('row');
  }
});

window.onload = function (e) {
  document.querySelectorAll('.clsTblName').forEach(el => {
    el.addEventListener('click', (e) => {
      // e.currentTarget refers to the element that the event listener is attached to
      const target = e.currentTarget;

      // Use the dataset property to get data-* attributes
      const tableName = target.dataset.val;
      const tableType = target.dataset.type;
      const tableDefinition = target.dataset.definition;

      const dqsInput = document.getElementById('dqs');

      if (tableType === 'TABLE' || tableType === 'VIEW') {
        dqsInput.value = 'SELECT * FROM ' + tableName + ' limit 10;';
      } else if (tableType === 'PROCEDURE') {
        dqsInput.value = 'SHOW CREATE PROCEDURE ' + tableName + ';';
      } else if (tableType === 'FUNCTION') {
        dqsInput.value = 'SHOW CREATE FUNCTION ' + tableName + ';';
      }
    });
  });

  let input = document.querySelector('input[name="btnExecute"]')
  if (input) {
    input.type = 'submit';
  }
}
document.querySelectorAll('input').forEach(input => {
  input.onpaste = null;
});
window.validate = function () {
  console.log("After");
};

