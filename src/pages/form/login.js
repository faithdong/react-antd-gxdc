/*
 * @Author: zhongxd 
 * @Date: 2018-09-17 10:54:28 
 * @Last Modified by: zhongxd
 * @Last Modified time: 2018-09-17 14:26:50
 */

import React from 'react';
import { Card, Form, Input, Button, message, Icon, Checkbox } from 'antd';


const FormItem = Form.Item;

class FormLogin extends React.Component {

  handleSubmit = (e) => {
    e.preventDefault();
    let userInfo = this.props.form.getFieldsValue();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        message.success(`${userInfo.userName} 表单组件学习,当前登录密码为 ${userInfo.userPwd}`);
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <Card title="登录行内表单" className="card-wrap">
          <Form layout="inline">
            <FormItem>
              {
                getFieldDecorator('userName', {
                  initialValue: 'frentend',
                  rules: [{ required: true, message: '请输入用户名' }, { min: 5, max: 10, message: "长度不在范围内" }],
                })(
                  <Input placeholder="请输入用户名" />
                )
              }
            </FormItem>
            <FormItem>
              {
                getFieldDecorator('userPwd', {
                  initialValue: '123456',
                  rules: [{ required: true, message: '请输入密码' }],
                })(
                  <Input type="password" placeholder="请输入密码" />
                )
              }
            </FormItem>
            <FormItem>
              <Button type="primary">登录</Button>
            </FormItem>
          </Form>
        </Card>

        <Card title="登录水平表单" className="card-wrap">
          <Form style={{ width: "300px" }}>
            <FormItem>
              {
                getFieldDecorator('userName', {
                  initialValue: 'frentend',
                  rules: [{ required: true, message: '请输入用户名' }, { min: 5, max: 10, message: "长度不在范围内" }],
                })(
                  <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请输入用户名" />
                )
              }
            </FormItem>
            <FormItem>
              {
                getFieldDecorator('userPwd', {
                  initialValue: '123456',
                  rules: [{ required: true, message: '请输入密码' }],
                })(
                  <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="请输入密码" />
                )
              }
            </FormItem>
            <FormItem>
              {getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: true,
              })(
                <Checkbox>记住密码</Checkbox>
              )}
              <a  href="" style={{float:'right'}}>忘记密码</a>
            </FormItem>
            <FormItem>
              <Button type="primary" onClick={this.handleSubmit}>登录</Button>
            </FormItem>
          </Form>
        </Card>
      </div>
    )
  }
}
export default Form.create()(FormLogin);