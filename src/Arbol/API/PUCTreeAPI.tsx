import { TreeNode } from '../Types/PUCType';

const apiUrl = 'http://localhost:8080/api/v1/back-app-catalog-core-service/accounting';

// Obtener todas las clases de cuentas
export const fetchAllAccountClasses = async (): Promise<TreeNode[]> => {
  const response = await fetch(`${apiUrl}/get-all-account-classes`);
  if (!response.ok) {
    throw new Error('Error al obtener las clases de cuentas');
  }
  const data = await response.json();
  return data.map((item: any) => ({
    id: item.accountingAccountClassId,
    level: 1,
    code: item.accountingAccountClassCode,
    name: item.accountingAccountClassName,
    children: []
  }));
};

// Obtener todos los grupos de cuentas por ID de clase de cuenta contable
export const fetchAllAccountGroups = async (classId: number): Promise<TreeNode[]> => {
  const response = await fetch(`${apiUrl}/get-all-account-groups-by-class-id/${classId}`);
  if (!response.ok) {
    throw new Error('Error al obtener los grupos de cuentas');
  }
  const data = await response.json();
  return data.map((item: any) => ({
    id: item.accountingAccountGroupId,
    level: 2,
    code: item.accountingAccountGroupCode,
    name: item.accountingAccountGroupName,
    children: []
  }));
};

// Obtener todas las cuentas contables por ID de grupo de cuentas
export const fetchAllAccounts = async (groupId: number): Promise<TreeNode[]> => {
  const response = await fetch(`${apiUrl}/get-all-accounts-by-account-group-id/${groupId}`);
  if (!response.ok) {
    throw new Error('Error al obtener las cuentas contables');
  }
  const data = await response.json();
  return data.map((item: any) => ({
    id: item.accountingAccountId,
    level: 3,
    code: item.accountingAccountCode,
    name: item.accountingAccountName,
    children: []
  }));
};

// Obtener todas las subcuentas por ID de cuenta contable
export const fetchAllSubAccounts = async (accountId: number): Promise<TreeNode[]> => {
  const response = await fetch(`${apiUrl}/get-all-sub-accounts-by-account-id/${accountId}`);
  if (!response.ok) {
    throw new Error('Error al obtener las subcuentas');
  }
  const data = await response.json();
  return data.map((item: any) => ({
    id: item.subAccountingAccountId,
    level: 4,
    code: item.subAccountingAccountCode,
    name: item.subAccountingAccountName,
    children: [] 
  }));
};

export const fetchAuxiliaryAccountsBySubAccountId = async (subAccountId: number): Promise<TreeNode[]> => {
  const response = await fetch(`${apiUrl}/get-auxiliary-accounts/${subAccountId}`);
  if (!response.ok) {
    throw new Error('Error al obtener las cuentas auxiliares para la subcuenta con ID: ' + subAccountId);
  }
  const data = await response.json();
  return data.map((item: any) => ({
    id: item.accountingAuxiliaryAccountId,
    level: 5,
    code: item.accountingAuxiliaryAccountCode,
    name: item.accountingAuxiliaryAccountName,
    children: []
  }));
};

export const createAuxiliaryAccount = async (auxiliaryAccount: TreeNode): Promise<TreeNode> => {
  const response = await fetch(`${apiUrl}/create`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(auxiliaryAccount),
  });
  if (!response.ok) {
    throw new Error('Error al crear la cuenta auxiliar');
  }
  return await response.json();
};


export const updateAuxiliaryAccount = async (id: number, auxiliaryAccount: TreeNode): Promise<TreeNode> => {
  const response = await fetch(`${apiUrl}/update/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(auxiliaryAccount),
  });
  if (!response.ok) {
    throw new Error('Error al actualizar la cuenta auxiliar');
  }
  return await response.json();
};


export const deleteAuxiliaryAccount = async (id: number): Promise<void> => {
  const response = await fetch(`${apiUrl}/delete/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('Error al eliminar la cuenta auxiliar');
  }
  return;
};
