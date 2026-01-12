import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import DataTable from "datatables.net-react";
import DT from "datatables.net-bs5";
import { addPage } from "../api/page.js";

DataTable.use(DT);

function Dashboard() {
  const navigate = useNavigate();

  const handleAddPage = async () => {
    const res = await addPage();
    console.log(res);
    if (res.ok) {
    } else {
      if (res.status === 401) {
        localStorage.removeItem("token");
        navigate("/login", { replace: true });
      } else {
        alert(
          "Something went wrong. Please try again or contact support if the problem persists."
        );
      }
    }
  };

  useEffect(() => {
    const target = document.querySelector(".dt-info");

    if (target) {
      // get the parent of dt-info
      const parentDiv = target.parentNode;

      // get the grandparent (parent of the parent)
      const grandparentDiv = parentDiv.parentNode;

      if (grandparentDiv) {
        const newDiv = document.createElement("div");
        newDiv.innerHTML = `
              <button class="btn btn-primary">New Page +</button>
        `;
        const button = newDiv.querySelector("button");
        button.addEventListener("click", handleAddPage);
        // newDiv.style.background = "#f0f0f0";

        // insert BEFORE the parent div in the grandparent
        grandparentDiv.insertBefore(newDiv, parentDiv);

        // Or insert AFTER the parent div
        // grandparentDiv.insertBefore(newDiv, parentDiv.nextSibling);
      }
    }
  }, []);

  return (
    <>
      <Navbar />

      <div className="container d-flex justify-content-center align-items-center my-5">
        <div className="container">
          <div className="card">
            <div className="card-body">
              <DataTable className="table table-bordered">
                <thead>
                  <tr>
                    <th>Name</th>
                  </tr>
                </thead>
                <tbody></tbody>
              </DataTable>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
