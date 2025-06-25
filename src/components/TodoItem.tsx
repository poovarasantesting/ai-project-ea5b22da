import { useState } from "react";
import { Todo, useTodos } from "@/contexts/TodoContext";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Check, Pencil, Trash, X } from "lucide-react";

interface TodoItemProps {
  todo: Todo;
}

export function TodoItem({ todo }: TodoItemProps) {
  const { toggleTodo, deleteTodo, editTodo } = useTodos();
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(todo.text);

  const handleDelete = () => {
    deleteTodo(todo.id);
    toast.success("Task deleted successfully");
  };

  const handleEdit = () => {
    if (!isEditing) {
      setIsEditing(true);
      return;
    }

    if (editedText.trim() && editedText !== todo.text) {
      editTodo(todo.id, editedText);
      toast.success("Task updated successfully");
    } else if (!editedText.trim()) {
      setEditedText(todo.text);
      toast.error("Task cannot be empty");
    }
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedText(todo.text);
  };

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="group flex items-center justify-between p-4 border rounded-lg bg-white dark:bg-gray-800 shadow-sm hover:shadow transition-all mb-3">
      <div className="flex items-center gap-3 flex-grow">
        <Checkbox
          checked={todo.completed}
          onCheckedChange={() => toggleTodo(todo.id)}
          id={`todo-${todo.id}`}
        />
        
        {isEditing ? (
          <Input
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
            className="flex-grow"
            autoFocus
          />
        ) : (
          <div className="flex flex-col">
            <label
              htmlFor={`todo-${todo.id}`}
              className={`font-medium ${
                todo.completed ? "line-through text-gray-500 dark:text-gray-400" : ""
              }`}
            >
              {todo.text}
            </label>
            <span className="text-xs text-gray-500">{formatDate(todo.createdAt)}</span>
          </div>
        )}
      </div>

      <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
        {isEditing ? (
          <>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleEdit}
              className="h-8 w-8"
            >
              <Check className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleCancel}
              className="h-8 w-8"
            >
              <X className="h-4 w-4" />
            </Button>
          </>
        ) : (
          <>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleEdit}
              className="h-8 w-8 text-blue-500 hover:text-blue-600 hover:bg-blue-50"
            >
              <Pencil className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleDelete}
              className="h-8 w-8 text-red-500 hover:text-red-600 hover:bg-red-50"
            >
              <Trash className="h-4 w-4" />
            </Button>
          </>
        )}
      </div>
    </div>
  );
}