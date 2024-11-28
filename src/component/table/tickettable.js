import React from 'react'
import { Table } from 'react-bootstrap'
import PropTypes from 'prop-types'

export const Tickettable = ({tickets}) => {
  return (
    <Table striped bordered hover>
        <thead>
            <tr>
                <th>#</th>
                <th> Subjects</th>
                <th> Status</th>
                <th> Open</th>
            </tr>
        </thead>
        <tbody>
            {
                tickets.length ? tickets.map(row=>
                <tr key={row.id}>
                    <td>{row.id}</td>
                    <td> {row.subject}</td>
                    <td>{row.status}</td>
                
                    <td>{row.addedAt}</td>
                </tr>)
                :
                <tr>
                    <td colSpan="4" className="text-center"> No data to show </td>
                    
                </tr>
            }
            
        </tbody>
    </Table>
  )
}
Tickettable.propTypes=PropTypes.array.isRequired
