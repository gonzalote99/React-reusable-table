import React from 'react';

export const tableConstants = (handleEdit) => {
  return[
    {
      title: 'ID',
      render: rowData => {
        return <span>{rowData.id}</span>;
      },
      
    },
    {
      title: 'Name',
      render: rowData => {
        return <span>{rowData.name}</span>;
      },

    },
    {
      title: 'Username',
      render: rowData => {
        return <span>{rowData.username}</span>;
      },

    },
    {
      title: 'Email',
      render: rowData => {
        return <span>{rowData.email}</span>;
      },

    },
    {
      title: 'Phone',
      render: rowData => {
        return <span>{rowData.phone}</span>;
      },

    },
    {
      title: 'Website',
      render: rowData => {
        return <span>{rowData.website}</span>;
      },

    },
    {
      title: 'Action',
      render: rowData => {
        return <button className='btn btn-warning' onClick={handleEdit(rowData)}>edit</button>;
      },

    },
  ];
};