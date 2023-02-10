import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge';

const DataTable = ({
  tableHeaders,
  tableData,
  onDelete,
  totalData,
}) => {
  return (
    <Container>
      <Row>
        <span className='mb-2'>Showing {tableData.length} of {totalData} Members</span>
      </Row>
      <Row>
        <Col>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                { tableHeaders.map((header) => (
                  <th key={header.value}>{header.title}</th>
                ))}
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              { tableData.map((datum, index) => (
                <tr key={datum.id}>
                  <td>{index + 1}</td>
                  <td>{datum.name}</td>
                  <td>{datum.age}</td>
                  <td>{datum.rating}</td>
                  <td>
                    {datum?.activities.map((act, index) => (
                      <Badge key={index}>
                        {act}
                      </Badge>
                    ))}
                    <Badge></Badge>
                  </td>
                  <td>
                    <Button className='btn-sm btn-danger' onClick={() => onDelete(datum.id)}>Delete</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  )
}

export default DataTable;