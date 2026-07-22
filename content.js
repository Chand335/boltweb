console.log("Custom theme loaded.");
window.onload = function (e) {
document.querySelectorAll('.active').forEach(el => {
  el.classList.remove('fade');
});
document.querySelectorAll('.amhfld').forEach(el => {
  const formGroup = el.closest('.form-group');
  if (formGroup) {
    formGroup.classList.add('row');
  }
});
document.querySelectorAll('.clsTblName').forEach(function (element) {

    // Create SHOW link
    const showLink = document.createElement('a');
    showLink.className = 'getShowQuery ms-3';
    showLink.href = 'javascript:void(0);';
    showLink.dataset.val = element.dataset.val;
    showLink.dataset.type = 'TABLE';
    showLink.innerHTML = '<i class="fa fa-rocket" aria-hidden="true"></i>';

    // Insert after the table name
    element.after(showLink);

    element.parentElement.classList.add('align-items-center','justify-content-between');

    // Existing click event
    element.addEventListener('click', function () {
        const tableName = this.dataset.val;
        const tableType = this.dataset.type;

        const dqs = document.getElementById('dqs');

        if (tableType === 'TABLE' || tableType === 'VIEW') {
            dqs.value = `SELECT * FROM \`${tableName}\` LIMIT 10;`;
        } else if (tableType === 'PROCEDURE') {
            dqs.value = `SHOW CREATE PROCEDURE \`${tableName}\`;`;
        } else if (tableType === 'FUNCTION') {
            dqs.value = `SHOW CREATE FUNCTION \`${tableName}\`;`;
        }
    });

    // SHOW click event
    showLink.addEventListener('click', function () {
        const tableName = this.dataset.val;
        const dqs = document.getElementById('dqs');

        dqs.value =
            `SELECT COLUMN_NAME, COLUMN_TYPE, IS_NULLABLE, NUMERIC_PRECISION, COLUMN_DEFAULT
FROM information_schema.COLUMNS
WHERE table_schema = DATABASE()
AND table_name = '${tableName}';`;
    });
});

let input = document.querySelector('input[name="btnExecute"]')
  if (input) {
    input.type = 'submit';
  }
document.querySelectorAll('input').forEach(input => {
  input.onpaste = null;
});
window.validate = function () {
  console.log("After");
};
}

    const container = document.querySelector('.form-horizontal.bv-form');
    console.log(container);

    // Create search box
    const search = document.createElement('input');
    search.type = 'text';
    search.className = 'form-control mb-2';
    search.placeholder = 'Search tables...';

    // Insert search box before the list
    container.parentNode.insertBefore(search, container);
    // on type slash focus on the search box
    document.addEventListener('keydown', function (e) {
        if (e.key === '/') {
            e.preventDefault();
            search.focus();
        }
    });

    // Filter links
    search.addEventListener('input', function () {
        const keyword = this.value.trim().toLowerCase();

        container.querySelectorAll('.link').forEach(function (item) {
            const text = item.textContent.toLowerCase();
            item.style.display = text.includes(keyword) ? '' : 'none';
        });
    });


// name="btnExecute" get the button and add class w-100

document.querySelectorAll('input[name="btnExecute"]').forEach(input => {
  input.classList.add('w-100');
  input.parentElement.classList.add('col-sm-12','col-lg-12');
});
