import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import RootLayout from "./RootLayout";

function App() {
	const router = createBrowserRouter(createRoutesFromElements([<Route path="/" element={<RootLayout />}></Route>]));
	return <RouterProvider router={router} />;
}

export default App;
