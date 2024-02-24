import "./App.css";
import SubGen from "./components/subgen";
import { Header } from "./components/HomePage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import GeneratorTool from "./components/GeneratorTool";

function App() {

  const router = createBrowserRouter([
    {
      path: "/generate",
      element: (
        <>
          <SubGen/>
        </>
      )
    },
    {
      path: "/",
      element:(
        <>
          <Header/>
        </>
      )
    },
    {
      path: "/tool",
      element:(
        <>
          <GeneratorTool/>
        </>
      )
    }
  ])
  return (
    <>
      <RouterProvider router = {router}/>
    </>
  );
}

export default App;
