import React, { useEffect, useState } from "react";
import { Container, Form, Table } from "react-bootstrap";
import { changeAdminStatus, getAdminsApi } from "../features/admin/adminApi";
import { toast } from "react-toastify";

const Admin = () => {
  const [adminUsers, setAdminUsers] = useState([]);

  useEffect(() => {
    //get admin users from database
    //update local state variable
    const getAdmins = async () => {
      const result = await getAdminsApi();
      if (result.status) {
        setAdminUsers(result.admins);
      }
    };
    getAdmins();
  }, []);

  const handleChange = async (id) => {
    const result = await changeAdminStatus(id);
    toast[result?.status ? "success" : "error"](result?.message);
  };

  return (
    <Container className="p-3">
      <Table striped>
        <thead>
          <tr>
            <th className="tableData">#</th>
            <th className="tableData">First Name</th>
            <th className="tableData">Last Name</th>
            <th className="tableData">Email</th>
            <th className="tableData">Admin Status</th>
          </tr>
        </thead>
        <tbody>
          {adminUsers?.map((admin, index) => (
            <tr key={index}>
              <td className="tableData">{index + 1}</td>
              <td className="tableData">{admin.fName}</td>
              <td className="tableData">{admin.lName}</td>
              <td className="tableData">{admin.email}</td>
              <td className="tableData">
                <Form>
                  <Form.Check
                    type="switch"
                    id="custom-switch"
                    className="formSwitch"
                    checked={admin.role == "admin" ? true : false}
                    onChange={() => {
                      handleChange(admin._id);
                    }}
                  />
                </Form>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Admin;
