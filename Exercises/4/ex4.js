// ---- Exercise: Event Properties

const clickarea = document.getElementById('click-area');
const clickinfo = document.getElementById('click-info');

clickarea.addEventListener('click', (e) => {
    let mouseBtn;

    const modifiers = [];
    if (e.ctrlKey) modifiers.push('Ctrl');
    if (e.shiftKey) modifiers.push('Shift');
    if (e.altKey) modifiers.push('Alt');
    if (e.metaKey) modifiers.push('Meta');

    if (e.button == 0) {
        mouseBtn = 'left'
    } else if (e.button == 1) {
        mouseBtn = 'middle'
    } else if (e.button == 2) {
        mouseBtn = 'right'
    } mouseBtn = 'maybe touchpad'

    clickinfo.innerText = `X: ${e.pageX}, Y: ${e.pageY}, clicked ${mouseBtn} button `
    const modifier = document.createElement('p');
    modifier.innerText = modifiers.length > 0 ? modifiers.join(' + ') : 'None';
    clickinfo.appendChild(modifier);
})

clickarea.addEventListener('contextmenu', e => {
    e.preventDefault();
});


// Exercise: Event Target

const menu = document.getElementById('menu');
const selected = document.getElementById('selected');

menu.addEventListener('click', (e) => {
    selected.innerText = e.target.getAttribute('data-action');
})
// ### Exercise: Dynamic List with Delegation

const addBtn = document.getElementById('add-btn');
const list = document.getElementById('todo-list');
const textInput = document.getElementById('todo-input');

addBtn.addEventListener('click', (e) => {
    e.preventDefault();

    if (!textInput.value.trim()) return;

    const element = document.createElement('li');
    element.textContent = textInput.value;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'delete';

    deleteBtn.addEventListener('click', function (e) {
        e.preventDefault();
        this.parentElement.remove();
    });

    element.appendChild(deleteBtn);
    list.appendChild(element);

    textInput.value = '';
});

// Table Row Selection

const table = document.getElementById('data-table');
const selectedRow = document.getElementById('selected-row');

table.addEventListener('click', (e) => {
    const row = e.target.closest('tr');
    if (!row || row.closest('thead')) return;

    const previouslySelected = table.querySelector('tr.selected');
    if (previouslySelected) {
        previouslySelected.classList.remove('selected');
    }

    row.classList.add('selected');
    const id = row.dataset.id;
    selectedRow.textContent = `Selected ID: ${id}`;
})

//  Custom Link Behavior

const link = document.getElementById('custom-link');
const description = document.getElementById('link-message');

link.addEventListener('click', (e) => {
    e.preventDefault();

    const href = e.target.href;
    description.innerText = `You tried to visit: ${href}`;
    link.textContent = 'Custom action performed!'
})

// Propagation
const outer = document.getElementById('outer');
const inner = document.getElementById('inner');
const btn = document.getElementById('btn');
const log = document.getElementById('log');

function logEvent(name) {
    return () => {
        log.textContent += name + ' → ';
    };

}
outer.addEventListener('click', (e) => {
    e.stopPropagation();
    logEvent('Outer')();
});
inner.addEventListener('click', (e) => {
    e.stopPropagation();
    logEvent('Inner')();
})
// btn.addEventListener('click', logEvent('Button'));

btn.addEventListener('click', e => {
    e.stopPropagation();
    log.textContent = 'Button';
});