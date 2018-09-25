/*
 * @Author: zhongxd 
 * @Date: 2018-09-25 13:58:24 
 * @Last Modified by: zhongxd
 * @Last Modified time: 2018-09-25 15:15:53
 */

import React from 'react';
import { Input, Select, Form, Button, Checkbox, Radio , DatePicker} from 'antd';
import Utils from './../../utils/utils';

const FormItem = Form.Item;
const Option = Select.Option;

class FilterForm extends React.Component {

  initFormList = () => {
    const { getFieldDecorator } = this.props.form;
    const formList = this.props.formList;
    const formItemList = [];
    if (formList && formList.length > 0) {
      formList.forEach((item, i) => {
        let label = item.label;
        let field = item.field;
        let initialValue = item.initialValue || '';
        let placeholder = item.placeholder;
        let width = item.width;
        if(item.type == "时间查询"){
          const begin_time = 
          <FormItem label={label} key={field}>
              {
                getFieldDecorator("begin_time")(
                  <DatePicker showTime={true} placeholder={placeholder} format="yyyy-MM-dd HH:MM:SS" />
                )
              }
            </FormItem>;
            formItemList.push(begin_time);
            const end_time = 
            <FormItem label="~" colon={false} key={field}>
                {
                  getFieldDecorator("end_time")(
                    <DatePicker showTime={true} placeholder={placeholder} format="yyyy-MM-dd HH:MM:SS" />
                  )
                }
              </FormItem>;
              formItemList.push(end_time);
        }else if (item.type === "INPUT") {
          const INPUT =
            <FormItem label={label} key={field}>
              {
                getFieldDecorator([field], {
                  initialValue: initialValue
                })(
                  <Input type="text" placeholder={placeholder} />
                )
              }
            </FormItem>;
          formItemList.push(INPUT);
        } else if (item.type === "SELECT") {
          const SELECT =
            <FormItem label={label} key={field}>
              {
                getFieldDecorator([field], {
                  initialValue: initialValue
                })(
                  <Select style={{ width: width }} placeholder={placeholder}>
                    {Utils.getOptionsList(item.list)}
                  </Select>
                )
              }
            </FormItem>;
          formItemList.push(SELECT);
        } else if (item.type === "CHECKBOX") {
          const CHECKBOX =
            <FormItem label={label} key={field}>
              {
                getFieldDecorator([field], {
                  valuePropName: 'checked',
                  initialValue: initialValue // true || false
                })(
                  <Checkbox style={{ width: width }} placeholder={placeholder}>
                    {label}
                  </Checkbox>
                )
              }
            </FormItem>;
          formItemList.push(CHECKBOX);
        }
      })
    }
    return formItemList;
  }

  handleFilterSubmit = () =>{
    let filedsValue = this.props.form.getFiledsValue(); 
    this.props.filterSubmit(filedsValue);
  }

  reset = () => {
    this.props.form.resetFields();
  }

  render() {
    return (
      <Form layout="inline">
        <FormItem>
          {this.initFormList()}
        </FormItem>
        <FormItem>
          <Button type="primary" style={{ margin: '0 20px' }} onClick={this.handleFilterSubmit}>查询</Button>
          <Button onClick={this.reset}>重置</Button>
        </FormItem>
      </Form>
    )
  }
}

export default FilterForm = Form.create()(FilterForm);