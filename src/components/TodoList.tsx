import { useTodos } from "@/contexts/TodoContext";
import { TodoItem } from "@/components/TodoItem";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  ListFilter, 
  CheckCircle, 
  Circle, 
  ArrowUpDown
} from "lucide-react";

type FilterType = "all" | "active" | "completed";
type SortType = "newest" | "oldest";

export function TodoList() {
  const { todos } = useTodos();
  const [filter, setFilter] = useState<FilterType>("all");
  const [sort, setSort] = useState<SortType>("newest");

  const filteredTodos = todos.filter((todo) => {
    if (filter === "all") return true;
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  const sortedTodos = [...filteredTodos].sort((a, b) => {
    if (sort === "newest") {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    } else {
      return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
    }
  });

  return (
    <div>
      <div className="flex justify-between items-center mb-4 flex-wrap gap-2">
        <div className="flex items-center space-x-2">
          <ListFilter className="h-4 w-4 text-gray-500" />
          <div className="flex bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
            <Button
              variant={filter === "all" ? "default" : "ghost"}
              size="sm"
              onClick={() => setFilter("all")}
              className="text-xs h-7"
            >
              All
            </Button>
            <Button
              variant={filter === "active" ? "default" : "ghost"}
              size="sm"
              onClick={() => setFilter("active")}
              className="text-xs h-7"
            >
              <Circle className="h-3 w-3 mr-1" /> Active
            </Button>
            <Button
              variant={filter === "completed" ? "default" : "ghost"}
              size="sm"
              onClick={() => setFilter("completed")}
              className="text-xs h-7"
            >
              <CheckCircle className="h-3 w-3 mr-1" /> Completed
            </Button>
          </div>
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setSort(sort === "newest" ? "oldest" : "newest")}
          className="text-xs"
        >
          <ArrowUpDown className="h-3 w-3 mr-1" />
          {sort === "newest" ? "Newest First" : "Oldest First"}
        </Button>
      </div>

      <div className="space-y-1 mt-4">
        {sortedTodos.length > 0 ? (
          sortedTodos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))
        ) : (
          <div className="text-center py-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <p className="text-gray-500 dark:text-gray-400">
              {filter === "all"
                ? "No tasks yet. Add one above!"
                : filter === "active"
                ? "No active tasks."
                : "No completed tasks."}
            </p>
          </div>
        )}
      </div>
      
      <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">
        {filteredTodos.length} {filteredTodos.length === 1 ? "task" : "tasks"} {filter !== "all" && filter}
      </div>
    </div>
  );
}