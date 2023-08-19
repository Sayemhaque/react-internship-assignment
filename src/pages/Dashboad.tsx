import DepartmentList from "../component/DepartmentList";
import Navbar from "../component/Navbar";
import Table from "../component/Table";

const Dashboad = () => {
    return (
        <div>
            <Navbar />
            <Table />
            <DepartmentList />
        </div>
    );
};

export default Dashboad;