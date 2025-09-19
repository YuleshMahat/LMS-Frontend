import React, { useEffect, useState } from "react";
import { Button, Container, Form, Table } from "react-bootstrap";
import { deleteAccountApi, getUsersApi } from "../features/admin/adminApi";
import { toast } from "react-toastify";

const Users = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const result = await getUsersApi();
    if (result.status) {
      setUsers(result.users);
    }
  };

  useEffect(() => {
    //update local state variable
    getUsers();
  }, []);

  const handleAccountDelete = async (id) => {
    const result = await deleteAccountApi(id);
    toast[result?.status ? "success" : "error"](result?.message);
    if (result.status) {
      getUsers();
    }
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
            <th className="tableData">Status</th>
            <th className="tableData">Action</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user, index) => (
            <tr key={index}>
              <td className="tableData">{index + 1}</td>
              <td className="tableData">{user.fName}</td>
              <td className="tableData">{user.lName}</td>
              <td className="tableData">{user.email}</td>
              <td className="tableData">{user.role}</td>
              <td className="tableData">
                <Button
                  className="btn btn-danger"
                  onClick={() => {
                    handleAccountDelete(user._id);
                  }}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Users;
