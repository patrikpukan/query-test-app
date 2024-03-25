import Cards from "./components/Cards";
import Creator from "./components/Creator";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Creator />
        <Cards />
      </QueryClientProvider>
    </>
  );
}

export default App;
