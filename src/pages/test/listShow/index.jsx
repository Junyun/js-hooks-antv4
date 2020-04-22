import { PageHeaderWrapper } from '@ant-design/pro-layout';
import ProTable from '@ant-design/pro-table';
import React, { useState, useEffect } from 'react';
import { Link, connect } from 'umi';
import styles from './style.less';

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        // copyable: true,
    },
    {
        title: 'Age',
        dataIndex: 'age',
        // copyable: true,
    },
    {
        title: 'Address',
        dataIndex: 'address',
        // copyable: true,
    },
];

const ListShow = props =>{
    const { dispatch, currentList } = props;
    const fetchData = async ()=> {
        await dispatch({
            type:'test/getList',
            payload:{}
        })
    }
    useEffect(()=>{
        fetchData()
    },[])
    return (
        <PageHeaderWrapper>
            <ProTable
                headerTitle='列表展示'
                rowKey="_id"
                columns={columns}
                dataSource={currentList}
                search={false}
            />
        </PageHeaderWrapper>
    )
}

export default connect(({ test }) => ({
    ...test,
  }))(ListShow);