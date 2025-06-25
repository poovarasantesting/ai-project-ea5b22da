import { TodoForm } from "@/components/TodoForm";
import { TodoList } from "@/components/TodoList";
import { useTodos } from "@/contexts/TodoContext";

export default function TodoPage() {
  const { todos } = useTodos();
  const completedCount = todos.filter(todo => todo.completed).length;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 px-4">
      <div className="max-w-lg mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
        <header className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Todo App
          </h1>
          {todos.length > 0 && (
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {completedCount} of {todos.length} tasks completed
            </p>
          )}
        </header>
        
        <TodoForm />
        <TodoList />
      </div>
    </div>
  );
}