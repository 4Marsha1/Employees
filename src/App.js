import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EmployeeDetails from "./components/EmployeeDetails";
import EmployeeTable from "./components/EmployeeTable";
import HierarchyTree from "./components/HierarchyTree";
import store from "./redux/store";

const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route
                        exact
                        path="/"
                        element={<EmployeeTable />}
                    />
                    <Route
                        exact
                        path="/employee"
                        element={<EmployeeDetails />}
                    />
                    <Route
                        exact
                        path="/hierarchy_tree"
                        element={<HierarchyTree />}
                    />
                </Routes>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
