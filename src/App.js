import React, { useState } from 'react'
import { CloseOutlined } from '@ant-design/icons'
import { Button, Card, Col, Form, Input, Row, message } from 'antd'

const App = () => {
  const [naveen, setNaveen] = useState({ name: '', age: '', number: '' })
  const [state, setState] = useState([])
  const formRef = React.useRef(null)
  const onFinish = (values) => {
    let temp = [...state]
    temp.push(values)
    setState(temp)
    formRef.current?.resetFields()
  }
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }
  const deleteHandler = (value) => {
    let temp = []
    if (value) {
      if (state?.length > 0) {
        state?.map((data) => data.name !== value.name && temp.push(data))
      } else {
        temp = []
      }
    }
    setState(temp)
    message.success('Deleted successfully')
  }
  return (
    <Row gutter={16}>
      <Col span={8}></Col>
      <Col span={8}>
        <Card
          size="default"
          title="Add Form"
          bordered={true}
          style={{
            width: '100%',
          }}
        >
          <Form
            ref={formRef}
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            style={{
              maxWidth: 600,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Name"
              name="name"
              rules={[
                {
                  required: true,
                  message: 'Please input your Name!',
                },
              ]}
            >
              <Input
                type="text"
                onChange={(e) =>
                  setNaveen({
                    ...naveen,
                    name: e.target.value,
                  })
                }
              />
            </Form.Item>

            <Form.Item
              label="Age"
              name="age"
              rules={[
                {
                  required: true,
                  message: 'Please input your Age!',
                },
              ]}
            >
              <Input
                onChange={(e) =>
                  setNaveen({
                    ...naveen,
                    age: e.target.value,
                  })
                }
                type="number"
              />
            </Form.Item>

            <Form.Item
              label="Phone Number"
              name="number"
              type="number"
              rules={[
                {
                  required: true,
                  message: 'Please input your Phone number!',
                },
              ]}
            >
              <Input
                onChange={(e) =>
                  setNaveen({
                    ...naveen,
                    mumber: e.target.value,
                  })
                }
                type="number"
              />
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button type="primary" htmlType="submit">
                Add
              </Button>
            </Form.Item>
          </Form>
        </Card>

        {state?.length > 0
          ? state.map((dt) => (
              <Card
                size="default"
                bordered={true}
                style={{
                  width: '100%',
                }}
              >
                <div style={{ textAlign: 'end', color: 'red' }}>
                  <CloseOutlined onClick={() => deleteHandler(dt)} />
                </div>
                <Row>
                  <Col span={12}>Name:</Col>
                  <Col span={12}>{dt.name}</Col>
                </Row>
                <Row>
                  <Col span={12}>Age:</Col>
                  <Col span={12}>{dt.age}</Col>
                </Row>
                <Row>
                  <Col span={12}>Phone Number:</Col>
                  <Col span={12}>{dt.number}</Col>
                </Row>
              </Card>
            ))
          : null}
      </Col>
    </Row>
  )
}
export default App
