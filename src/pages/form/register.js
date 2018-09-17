/*
 * @Author: zhongxd 
 * @Date: 2018-09-17 14:31:44 
 * @Last Modified by: zhongxd
 * @Last Modified time: 2018-09-17 17:49:34
 */

import React from 'react';
import { Form, Card, Button, Input, Checkbox, Radio, Select, Switch, DatePicker, TimePicker, Upload, Icon, message, InputNumber } from 'antd';
import moment from 'moment';


const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const Option = Select.Option;
const TextArea = Input.TextArea;


class FormRegister extends React.Component {

  state = {
    
  }

  getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  }

  handleChange = (info) => {
    if (info.file.state === "uploading") {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      this.getBase64(info.file.originFileObj, imageUrl => this.setState({
        userImg:imageUrl,
        loading: false,
      }));
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let userInfo = this.props.form.getFieldsValue();
    console.log(JSON.stringify(userInfo));
    message.success("测试数据");
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: 12,
        sm: 4,
      },
      wrapperCol: {
        xs: 12,
        sm: 20
      }
    };
    const offsetLayout = {
      wrapperCol:{
        xs:24,
        sm:{
          span:12,
          offset:4
        },
      }
    }
    return (
      <div>
        <Card title="注册表单">
          <Form>
            <FormItem label="用户名" {...formItemLayout}>
              {
                getFieldDecorator('userName', {
                  initialValue: 'frentend',
                  rules: [{ required: true, message: '请输入用户名' }, { min: 5, max: 10, message: "长度不在范围内" }],
                })(
                  <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请输入用户名" />
                )
              }
            </FormItem>

            <FormItem label="密码" {...formItemLayout}>
              {
                getFieldDecorator('userPwd', {
                  initialValue: 'frentend',
                  rules: [{ required: true, message: '请输入密码' }],
                })(
                  <Input type="password" prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请输入密码" />
                )
              }
            </FormItem>

            <FormItem label="性别" {...formItemLayout}>
              {
                getFieldDecorator('sex', {
                  initialValue: '1',
                })(
                  <RadioGroup>
                    <Radio value="1">男</Radio>
                    <Radio value="2">女</Radio>
                  </RadioGroup>
                )
              }
            </FormItem>

            <FormItem label="年龄" {...formItemLayout}>
              {
                getFieldDecorator('age', {
                  initialValue: '18',
                })(
                  <InputNumber></InputNumber>
                )
              }
            </FormItem>

            <FormItem label="当前状态" {...formItemLayout}>
              {
                getFieldDecorator('state', {
                  initialValue: "2"
                })(
                  <Select>
                    <Option value="1">咸鱼一条</Option>
                    <Option value="2">风华浪子</Option>
                    <Option value="3">蚂蚁金服</Option>
                    <Option value="4">百度FE</Option>
                    <Option value="5">腾讯课堂</Option>
                  </Select>
                )
              }
            </FormItem>

            <FormItem label="爱好" {...formItemLayout}>
              {
                getFieldDecorator('interest', {
                  initialValue: ["1", "5"]
                })(
                  <Select mode="multiple">
                    <Option value="1">爬山</Option>
                    <Option value="2">游泳</Option>
                    <Option value="3">篮球</Option>
                    <Option value="4">足球</Option>
                    <Option value="5">排球</Option>
                    <Option value="6">插花</Option>
                    <Option value="7">唱歌</Option>
                    <Option value="8">跳舞</Option>
                    <Option value="9">画画</Option>
                    <Option value="10">电影</Option>
                  </Select>
                )
              }
            </FormItem>

            <FormItem label="是否已婚" {...formItemLayout}>
              {
                getFieldDecorator('isMarried', {
                  valuePropName: 'checked',
                  initialValue: true
                })(
                  <Switch />
                )
              }
            </FormItem>

            <FormItem label="生日" {...formItemLayout}>
              {
                getFieldDecorator('birthday', {
                  initialValue: moment('2000-12-07')
                })(
                  <DatePicker showTime format="YYYY/MM/DD HH:mm:ss" />
                )
              }
            </FormItem>

            <FormItem label="联系地址" {...formItemLayout}>
              {
                getFieldDecorator('address', {
                  initialValue: '四川省成都市'
                })(
                  <TextArea />
                )
              }
            </FormItem>

            <FormItem label="早起时间" {...formItemLayout}>
              {
                getFieldDecorator('tiem')(
                  <TimePicker />
                )
              }
            </FormItem>

            <FormItem label="上传头像" {...formItemLayout}>
              {
                getFieldDecorator('userImg')(
                  <Upload listType="picture-card"
                    showUploadList={false}
                    action='//jsonplaceholder.typicode.com/posts/'
                    onChange={this.handleChange}>
                    {this.state.userImg?<img src={this.state.userImg} /> : <Icon  type="plus"/>}
                  </Upload>
                )
              }
            </FormItem>

            <FormItem {...offsetLayout}>
              {
                getFieldDecorator('agree')(
                  <Checkbox>同意<a href="" >协议</a></Checkbox>
                )
              }
            </FormItem>

            <FormItem {...offsetLayout}>
              <Button type="primary" onClick={this.handleSubmit}>注册</Button>
            </FormItem>

          </Form>

        </Card>
      </div>
    );

  }
}

export default Form.create()(FormRegister);