import React from "react";
import { useState, useEffect } from "react";
import MenuListComposition from "./list";
import DataTable from "./panel";

const ManagementHome = () => {
  return (
    <div className="container">
      <div className="card">
        <div className="col-3">
          <MenuListComposition />
        </div>
        <div className="col-9">
          <DataTable />
        </div>
      </div>
    </div>
  );
};

export default ManagementHome;
