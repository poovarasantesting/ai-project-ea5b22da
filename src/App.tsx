import { Toaster } from "@/components/ui/sonner";
import { TodoProvider } from "@/contexts/TodoContext";
import TodoPage from "@/pages/TodoPage";

export default function App() {
  return (
    <TodoProvider>
      <Toaster position="top-right" />
      <TodoPage />
    </TodoProvider>
  );
}