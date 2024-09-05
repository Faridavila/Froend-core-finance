import CRUDForm from "../../GeneralComponents/GeneralCrud/CRUDForm";
import { Button } from 'react-bootstrap';
import { DepartmentTypes } from '../Types/DepartmentTypes';
import { DepartmentSortFieldMap } from '../Types/MapeoDepartment'; 
import { EditIcon, DeleteIcon } from '../Icons/Icons';
import {
  GetDepartment,
  CreateDepartment,
  UpdateDepartment,
  DeleteDepartment,
  GetSearchDepartment,
} from '../API/DepartmentAPI';
import React from "react";

const Department = () =>  {
  const itemTemplate = (): DepartmentTypes => ({
    id: 0,
    departmentCode: 0, 
    departmentName: '',
    status: '',
  });

  const columns: { 
    key: keyof DepartmentTypes; 
    label: string; 
    hidden?: boolean; 
    required?: boolean; 
    minLength?: number; 
    maxLength?: number; 
    regex?: RegExp; 
  }[] = [
    { key: 'id', label: 'ID' },
    { key: 'departmentCode', label: 'Codigo', required: true, minLength: 2, maxLength: 100, regex: /^\d+$/},
    { key: 'departmentName', label: 'Nombre', required: true, minLength: 2, maxLength: 100, regex: /^[A-Za-z\s]+$/ },
    { key: 'status', label: 'Estado', required: true, minLength: 2, maxLength: 50, regex: /^[A-Za-z\s]+$/ }
  ];

  const actions = (item: DepartmentTypes, handleEdit: (item: DepartmentTypes) => void, handleDelete: (id: number) => void) => (
    <>
      <Button
        style={{ border: 'none', marginRight: '10px', padding: '5px 10px', fontSize: '12px', height: '30px' }}
        onClick={() => handleEdit(item)}
      >
        <EditIcon />
      </Button>
      <Button
        style={{ border: 'none', marginRight: '10px', padding: '5px 10px', fontSize: '12px', height: '30px' }}
        variant='danger'
        onClick={() => handleDelete(item.id)}
      >
        <DeleteIcon />
      </Button>
    </>
  );
 
  const renderCustomFormField = (colKey: keyof DepartmentTypes, value: string, onChange: (newValue: string) => void) => {
    return null;  // Retorna null si no necesitas campos personalizados
  };

  return (
    <div className="app-content content">
      <div className="content-overlay"></div>
      <div className="header-navbar-shadow"></div>
      <div className="content-wrapper container-xxl p-0">
        <div className="content-header row"></div>
        <div className="content-body">
          <h3>Gestión de Departamentos</h3>
          <p>Administre los departamentos mediante la creación, edición o eliminación de registros.</p>

          {/* CRUD Form Section */}
          <div className="card">
            <div className="card-datatable table-responsive">
              <CRUDForm<DepartmentTypes>
                fetchItems={GetDepartment}
                searchItem={GetSearchDepartment}
                createItem={CreateDepartment}
                updateItem={UpdateDepartment}
                deleteItem={DeleteDepartment}
                itemTemplate={itemTemplate}
                columns={columns}
                actions={actions}
                sortFieldMap={DepartmentSortFieldMap}
                renderCustomFormField={renderCustomFormField}  
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Department;
