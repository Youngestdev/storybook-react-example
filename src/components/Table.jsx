import React from 'react';

function Table({ title, datas }) {
    return (
        <table>
            <caption>{title}</caption>
            <thead>
                <th>Name</th>    
                <th>Registered Course</th>
            </thead>            
            <tbody>
                {/* Write code for the body. */}
                {datas ? <RenderTableData data={datas} /> : 'No data atm'}
            </tbody>
        </table>
    )
}

function RenderTableData(data){
    data.map(student => {
        return (
            <tr>
                <td>{student.name}</td>
                <td>{student.course}</td>
            </tr>
        )
    })
}

export default Table