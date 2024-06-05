document.getElementById('task-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const taskInput = document.getElementById('task-input');
    const description = taskInput.value.trim();
    const categorySelect = document.getElementById('category-select');
    const category = categorySelect.value;

    if (description !== '' && category !== 'Sélectionner une catégorie') {
        taskManager.addTask(description, category);
        taskInput.value = '';
        renderTasks();  // Afficher toutes les tâches après l'ajout
        categorySelect.selectedIndex = 0;
    }
});

document.getElementById('filter-button').addEventListener('click', () => {
    const categorySelect = document.getElementById('category-select');
    const selectedCategory = categorySelect.value;

    if (categorySelect.selectedIndex !== 0) {
        renderTasks(selectedCategory);  // Filtrer les tâches par catégorie
    } else {
        renderTasks();  // Afficher toutes les tâches si aucune catégorie n'est sélectionnée
    }
});