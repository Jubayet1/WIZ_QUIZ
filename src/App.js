import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Quiz from "./pages/Quiz/Quiz";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      loader: async () =>
        fetch("https://openapi.programming-hero.com/api/quiz"),
      element: <Home />,
    },
    {
      path: `/quiz/:id`,
      loader: async ({ params }) =>
        fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`),
      element: <Quiz />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
