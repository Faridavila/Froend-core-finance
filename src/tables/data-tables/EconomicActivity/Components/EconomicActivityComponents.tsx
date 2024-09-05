import CRUDForm from "../../GeneralComponents/GeneralCrud/CRUDForm";
import { Button } from 'react-bootstrap';
import { EconomicActivityTypes } from '../Types/EconomicActivityTypes';
import { EconomicActivitySortFieldMap } from '../Types/MapeoEconomicActivity'; 
import { EditIcon, DeleteIcon } from '../Icons/Icons';
import {
  GetEconomicActivity,
  CreateEconomicActivity,
  UpdateEconomicActivity,
  DeleteEconomicActivity,
  GetSearchEconomicActivity,
} from '../API/EconomicActivity';

const EconomicActivityCRUD = () => {
  const itemTemplate = (): EconomicActivityTypes => ({
    id: 0,
    ciiuCode: 0, 
    description: '',
    status: '',
  });

  const columns: { key: keyof EconomicActivityTypes; 
    label: string; 
    hidden?: boolean; 
    required?: boolean; 
    minLength?: number; 
    maxLength?: number; 
    regex?: RegExp; 
  }[] = [
    { key: 'id', label: 'ID' },
    { key: 'ciiuCode', label: 'Codigo CIIU', required: true, minLength: 2, maxLength: 100, regex: /^\d+$/},
    { key: 'description', label: 'Descripcion', required: true, minLength: 2, maxLength: 100, regex: /^[A-Za-z\s]+$/ },
    { key: 'status', label: 'Estado', required: true, minLength: 2, maxLength: 50, regex: /^[A-Za-z\s]+$/ }
  ];
  


  const actions = (item: EconomicActivityTypes,handleEdit: (item: EconomicActivityTypes) => void,handleDelete: (id: number) => void) => (
    <>
      <Button
        style={{ border: 'none', marginRight: '10px', padding: '5px 10px', fontSize: '12px',height: '30px' }}
        onClick={() => handleEdit(item)}
      >
        <EditIcon />
      </Button>
      <Button
        style={{ border: 'none', marginRight: '10px', padding: '5px 10px', fontSize: '12px',height: '30px' }}
        variant='danger'
        onClick={() => handleDelete(item.id)}
      >
        <DeleteIcon />
      </Button>
    </>
  );
 
  const renderCustomFormField = (colKey: keyof EconomicActivityTypes, value: string, onChange: (newValue: string) => void) => {
    
    return null;
  };
  

  return (
    <div className="app-content content">
      <div className="content-overlay"></div>
      <div className="header-navbar-shadow"></div>
      <div className="content-wrapper container-xxl p-0">
        <div className="content-header row"></div>
        <div className="content-body">
          <h3>Gestión de actividades economicas</h3>
          <p>Administre las actividades economicas mediante la creación, edición o eliminación de registros.</p>

          {/* CRUD Form Section */}
          <div className="card">
            <div className="card-datatable table-responsive">
              <CRUDForm<EconomicActivityTypes>
                fetchItems={GetEconomicActivity}
                searchItem={GetSearchEconomicActivity}
                createItem={CreateEconomicActivity}
                updateItem={UpdateEconomicActivity}
                deleteItem={DeleteEconomicActivity}
                itemTemplate={itemTemplate}
                columns={columns}
                actions={actions}
                sortFieldMap={EconomicActivitySortFieldMap}
                renderCustomFormField={renderCustomFormField}  
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default EconomicActivityCRUD;
