import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { PlusOutlined } from '@ant-design/icons';
import ProTable from '@ant-design/pro-table';
import { Button } from 'antd';
import React, { useState, useEffect } from 'react';
import { Link, connect } from 'umi';
import CreateItem from './components/CreateItem';
import UpdateItem from './components/UpdateItem';
import styles from './style.less';

const Action = props =>{
    const { dispatch, currentList } = props;
    const [createModalVisible, setCreateModalVisible] = useState(false);
    const [updateModalVisible, setUpdateModalVisible] = useState(false);
    const [currentRow, setCurrentRow] = useState(false);

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
        },
        {
            title: 'Age',
            dataIndex: 'age',
            hideInSearch:true
        },
        {
            title: 'Address',
            dataIndex: 'address',
            hideInSearch:true
        },
        {
            title: '操作',
            render: ( row ) =>[
                <a
                  onClick={() => {
                    // window.alert('确认删除？');
                    deleteItem(row);
                  }}
                >
                  删除
                </a>,
                <a
                  onClick={() => {
                    // window.alert('确认更新？');
                    setCurrentRow(row);
                    setUpdateModalVisible(true);
                  }}
                >
                  更新
                </a>,
            ]
    
        }
    ];
    
    // 删除
    const deleteItem = async (item) => {
        console.log('====>>>> 删除item:',item)
        await dispatch({
            type:'test/deleteItem',
            payload:{_id: item._id}
        })
    }

    // 更新
    const updateItem = async (values) => {
        console.log('====>>>> 更新item:',values)
        await dispatch({
            type:'test/updateItem',
            payload:{
                _id:currentRow._id,
                values:values
            }
        })
        setUpdateModalVisible(false);
    }
    const createItem = async (values) => {
        console.log('====>>>> 创建item:',values);
        await dispatch({
            type:'test/createItem',
            payload:values
        })
        setCreateModalVisible(false);
    }

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
                toolBarRender={(action, { selectedRows }) => [
                    <Button type="primary" onClick={() => setCreateModalVisible(true)}>
                      <PlusOutlined /> 新建
                    </Button>,]}
            />
            <CreateItem 
                modalVisible={createModalVisible}
                onCancel={() => {setCreateModalVisible(false);}}
                onSubmit={createItem}
            />
            <UpdateItem 
                modalVisible={updateModalVisible}
                currentRow={currentRow}
                onCancel={() => {setUpdateModalVisible(false);}}
                onSubmit={updateItem}
            />
        </PageHeaderWrapper>
    )
}

export default connect(({ test }) => ({
  ...test
}))(Action);