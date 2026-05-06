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
  updateCounter();
}
}

function deleteTask(btn) {
  btn.parentElement.remove();
  updateEmpty();
}

function updateEmpty() {
  const tasks = document.getElementById('taskList').children;
  document.getElementById('empty').style.display =
    tasks.length === 0 ? 'block' : 'none';
  updateCounter();
}

function updateCounter() {
  const tasks = document.getElementById('taskList').children;
  const total = tasks.length;
  const done = document.querySelectorAll('#taskList li.done').length;
  const left = total - done;
  document.getElementById('totalCount').textContent = total;
  document.getElementById('doneCount').textContent = done;
  document.getElementById('leftCount').textContent = left;
}
}

document.getElementById('taskInput').addEventListener('keypress', function(e) {
  if (e.key === 'Enter') addTask();
});