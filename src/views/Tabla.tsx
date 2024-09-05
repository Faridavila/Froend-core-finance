import React, { useState, useEffect } from "react";
import { Table, Card, CardHeader, CardBody, CardTitle } from "reactstrap";
import { GetDepartmentId } from "./../Department/API/DepartmentAPI"; 
import { DepartmentTypes } from "./../Department/Types/DepartmentTypes";

// Assuming ObjectResponse is structured like this:
interface ObjectResponse<T> {
  success: boolean;
  data: T;
  message: string;
}

const TablePage = () => {
  const [department, setDepartment] = useState<DepartmentTypes | null>(null);
  const [loading, setLoading] = useState(true);
  const departmentId = 1;

  useEffect(() => {
    const fetchDepartment = async () => {
      try {
        const response = await GetDepartmentId(departmentId);
        if (response && response.data) {
          setDepartment(response.data as unknown as DepartmentTypes); 
        }
      } catch (error) {
        console.error("Error fetching department:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDepartment();
  }, [departmentId]);

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Department Details</CardTitle>
        </CardHeader>
        <CardBody>
          {loading ? (
            <p>Loading...</p>
          ) : department ? (
            <Table bordered>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Department Code</th>
                  <th>Department Name</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{department.id}</td>
                  <td>{department.departmentCode}</td>
                  <td>{department.departmentName}</td>
                  <td>{department.status}</td>
                </tr>
              </tbody>
            </Table>
          ) : (
            <p>No department found</p>
          )}
        </CardBody>
      </Card>
    </div>
  );
};

export default TablePage;
