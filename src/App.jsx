import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home/Home";
import Root from "./components/Root/Root";
import Books from "./components/Books/Books";
import About from "./components/About/About";
import BookDetails from "./components/BookDetails/BookDetails";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/home",
          element: <Home></Home>,
        },
        {
          path: "/books",
          element: <Books></Books>,
          loader: () => fetch("https://api.itbook.store/1.0/new"),
        },
        {
          path: "/book/:id",
          element: <BookDetails></BookDetails>,
          loader: ({ params }) => fetch(`https://api.itbook.store/1.0/books/${params.id}`),
        },
        {
          path: "/about",
          element: <About></About>,
        },
      ],
    },
  ]);
  return (
    <>
      {/* <Header></Header> */}
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
