function addTask() {
  const input = document.getElementById('taskInput');
  const text = input.value.trim();
  if (!text) return;

  const li = document.createElement('li');
  li.innerHTML = `
    <span onclick="toggleDone(this)">${text}</span>
    <button class="del" onclick="deleteTask(this)">✕</button>
  `;
  document.getElementById('taskList').appendChild(li);
  input.value = '';
  updateEmpty();
}

function toggleDone(span) {
  span.parentElement.classList.toggle('done');
}

function deleteTask(btn) {
  btn.parentElement.remove();
  updateEmpty();
}

function updateEmpty() {
  const tasks = document.getElementById('taskList').children;
  document.getElementById('empty').style.display =
    tasks.length === 0 ? 'block' : 'none';
}

document.getElementById('taskInput').addEventListener('keypress', function(e) {
  if (e.key === 'Enter') addTask();
});