import React from 'react';
import Table from '../components/Table';
import {data} from './mockData';
import {tableConstants} from './tableConstant';


const Dashboard = () => {
  const handleEdit = (item) => () => {
    alert(JSON.stringify(item))
  }

  return(
    <div className='row'>
    <div className='col-sm-6'>
    <h4>default table</h4>
      <Table cols={tableConstants(handleEdit)} data={data} />
    </div>

      <div className='col-sm-6'>
      <h4>dark table</h4>
        <Table cols={tableConstants(handleEdit)} data={data} isDark/>
      </div>
      <div className='col-sm-6'>
      <h4>borderless table</h4>
        <Table cols={tableConstants(handleEdit)} data={data} bordered={false}/>
      </div>
      <div className='col-sm-6'>
      <h4>striped table</h4>
        <Table cols={tableConstants(handleEdit)} data={data} striped />
      </div>
      <div className='col-sm-6'>
      <h4>hoverable table</h4>
        <Table cols={tableConstants(handleEdit)} data={data} hoverable />
      </div>
    </div>
  )
}

export default Dashboard;