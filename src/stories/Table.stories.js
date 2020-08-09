import React from 'react';
import Table from '../components/Table';

export default {
    title: 'Table component',
    component: Table
}

function Example() {
    return (
        <Table title={"Student's Database"} datas={[{'name': 'Abdul', 'course': 'WREE'}]}/>
    )
}