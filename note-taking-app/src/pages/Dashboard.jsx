import { useState } from "react";
import { Navigate, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import DataTable from "datatables.net-react";
import DT from "datatables.net-bs5";

DataTable.use(DT);

function Dashboard() {
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
                    <th>Add page</th>
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
