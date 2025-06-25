import { useState } from "react";
import { useTodos } from "@/contexts/TodoContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus } from "lucide-react";

export function TodoForm() {
  const [newTodo, setNewTodo] = useState("");
  const { addTodo } = useTodos();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTodo.trim()) {
      addTodo(newTodo);
      setNewTodo("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center space-x-2 mb-6">
      <Input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add a new task..."
        className="flex-grow"
        data-testid="new-todo-input"
      />
      <Button type="submit" size="icon">
        <Plus className="h-4 w-4" />
        <span className="sr-only">Add Task</span>
      </Button>
    </form>
  );
}