import React from 'react';
import { Modal, Form, Input, Button } from 'antd';

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 5,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 12,
    },
  },
};

const UpdateItem = props =>{
  const { modalVisible, onCancel, onSubmit, currentRow } = props;
  // debugger;
  const onFinish = values => {
    console.log('Success:', values);
    onSubmit(values);
  };
  return(
      <Modal
        destroyOnClose
        title="更新"
        visible={modalVisible}
        onCancel={() => onCancel()}
        footer={null}
      >
        <Form {...formItemLayout}
          name="基本数据"
          onFinish={onFinish}
          initialValues={currentRow}
        >
          <Form.Item
            label="Name"
            name="name"
            colon={true}>
            <Input placeholder="unavailable choice" id="Name" />
          </Form.Item>
          <Form.Item
            label="Age"
            name="age"
            colon={true}>
            <Input placeholder="unavailable choice" id="Age" />
          </Form.Item>
          <Form.Item
            label="Address"
            name="address"
            colon={true}>
            <Input placeholder="unavailable choice" id="Address" />
          </Form.Item>
          <Button type="primary" htmlType="submit">提交</Button>
        </Form>
      </Modal>
  )
}

export default UpdateItem;