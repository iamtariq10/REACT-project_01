import React from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import ButtonPrimary from './btnPrimary';
import ButtonSecondary from './btnSecondary';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
export default function TableExample(props) {

    
  return (
    <Table className="table">
      <Thead>
        <Tr>
          <Th>NAME</Th>
          <Th>ROLL</Th>
          <Th>COURSE</Th>
          <Th>Action</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>Mohammad Tariq</Td>
          <Td>19581</Td>
          <Td>Web and Mobile</Td>
          <Td><EditIcon className="IconsFocus"/><DeleteIcon className="IconsFocus"/></Td>
        </Tr>
       
        
      </Tbody>
    </Table>
  );
}