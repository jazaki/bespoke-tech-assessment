import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'

import DataTable from './components/DataTable';
import { TextFilter, SelectFilter } from './components/FilterInput';

import { activityOptions, dataTableHeaders, membersRandomizeData } from './utils/constants';
import jsonData from './utils/members_data.json'

function App() {
  const [nameFilterValue, setNameFilter] = useState('')
  const [activityFilterValue, setActivityFilter] = useState('')
  const [membersData, setMembersData] = useState(membersRandomizeData)
  const onDeleteMember = (memberId) => {
    const newData = membersData.filter((datum) => datum.id !== memberId)
    setMembersData(newData)
  }
  const onSearchData = () => {
    const nameFilterExp = new RegExp(nameFilterValue, 'i');
    let filteredData
    if(nameFilterValue.trim().length === 0 && activityFilterValue.length === 0) {
      setMembersData(membersRandomizeData)
    }
    else if(nameFilterValue.trim().length === 0 && activityFilterValue.length !== 0) {
      filteredData = membersRandomizeData.filter((datum) => datum.activities.includes(activityFilterValue))
      setMembersData(filteredData)
    }
    else if(nameFilterValue.trim().length !== 0 && activityFilterValue.length === 0) {
      filteredData = membersRandomizeData.filter(datum => nameFilterExp.test(datum.name))
      setMembersData(filteredData)
    } else {
      filteredData = membersRandomizeData.filter((datum) => nameFilterExp.test(datum.name) && datum.activities.includes(activityFilterValue))
      setMembersData(filteredData)
    }
  }
  return (
    <Container className='container-fluid p-3'>
      <Row className='justify-content-center'>
        <Col className='col-3'>
          <TextFilter
            placeholder="Member's Name"
            value={nameFilterValue}
            onChange={setNameFilter}
          />
        </Col>
        <Col className='col-3'>
          <SelectFilter
            options={activityOptions}
            defaultOption="Filter By Activity"
            value={activityFilterValue}
            onChange={setActivityFilter}
          />
        </Col>
        <Col className='col-3'>
          <Button className='w-100' onClick={onSearchData}>
            Search
          </Button>
        </Col>
      </Row>
      <Row className='mt-5'>
        <Col>
          <DataTable
            tableHeaders={dataTableHeaders}
            tableData={membersData}
            onDelete={onDeleteMember}
            totalData={jsonData.length}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
