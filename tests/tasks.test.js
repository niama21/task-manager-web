const test = require("node:test"); 
const assert = require("node:assert"); 
const { defaultTasks, addTask, toggleTask, removeTask } = 
require("../tasks.js"); 
  
test("addTask ajoute la tâche à la fin de la liste", function () { 
  // Étant donné une liste de départ 
  const tasks = defaultTasks(); 
  // Quand j'ajoute une tâche 
  addTask(tasks, "Préparer le TP"); 
  // Alors elle apparaît à la fin de la liste 
  assert.strictEqual(tasks.length, 5); 
  assert.strictEqual(tasks[4].title, "Préparer le TP"); 
}); 
test("addTask ignore une tâche vide", function () {
  const tasks = defaultTasks();

  addTask(tasks, "   ");

  assert.strictEqual(tasks.length, 4);
});
test("toggleTask change le statut de la tâche", function () {
  const tasks = defaultTasks();

  // La première tâche est terminée au départ
  assert.strictEqual(tasks[0].done, true);

  // On inverse son statut
  toggleTask(tasks, 0);

  // Elle doit devenir non terminée
  assert.strictEqual(tasks[0].done, false);
});
test("removeTask supprime une tâche de la liste", function () {
  const tasks = defaultTasks();

  // On supprime la première tâche
  removeTask(tasks, 0);

  // La liste doit contenir 3 tâches
  assert.strictEqual(tasks.length, 3);

  // La première tâche restante doit être "Corriger les TP"
  assert.strictEqual(tasks[0].title, "Corriger les TP");
});
test("la liste de départ contient quatre tâches", function () {
  const tasks = defaultTasks();

  assert.strictEqual(tasks.length, 4);
});
test("addTask crée une tâche non terminée", function () {
  const tasks = defaultTasks();

  addTask(tasks, "Préparer le TP");

  assert.strictEqual(tasks[4].done, false);
});