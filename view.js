class TaskRenderer {
    render(task, index) {
        throw new Error('Method render must be implemented');
    }
}

class WorkTaskRenderer extends TaskRenderer {
    render(task, index) {
        return `
            <tr style="background-color: red; color: white;">
                <td class="task-number">${index + 1}</td>
                <td class="task-description">${task.description}</td>
            </tr>
        `;
    }
}

class HomeTaskRenderer extends TaskRenderer {
    render(task, index) {
        return `
            <tr style="background-color: blue; color: white;">
                <td class="task-number">${index + 1}</td>
                <td class="task-description">${task.description}</td>
            </tr>
        `;
    }
}

class OtherTaskRenderer extends TaskRenderer {
    render(task, index) {
        return `
            <tr style="background-color: green; color: white;">
                <td class="task-number">${index + 1}</td>
                <td class="task-description">${task.description}</td>
            </tr>
        `;
    }
}

function renderTasks(filterCategory = null) {
    const taskListContainer = document.getElementById('task-list');
    taskListContainer.innerHTML = '';

    let tasksToRender = taskManager.getAllTasks();

    if (filterCategory && filterCategory !== 'Sélectionner une catégorie') {
        // Filtrer les tâches par catégorie sélectionnée
        tasksToRender = tasksToRender.filter(task => task.category === filterCategory);
    }

    tasksToRender.forEach((task, index) => {
        let renderer;
        switch (task.category) {
            case 'WORK':
                renderer = new WorkTaskRenderer();
                break;
            case 'HOME':
                renderer = new HomeTaskRenderer();
                break;
            case 'OTHER':
                renderer = new OtherTaskRenderer();
                break;
            default:
                throw new Error('Invalid category');
        }
        
        taskListContainer.innerHTML += renderer.render(task, index);
    });
}
