import React, { Component } from 'react';
import './index.less'
import Icon from 'src/components/Icon';
import { observable, action } from 'mobx';
import { observer } from 'mobx-react';
import { Button, Popover} from 'antd';

@observer
class Coupon extends Component {
  @observable shadeShow=false
  
  @action.bound
  handleMouseEnter(){
    this.shadeShow=true
  }
  
  @action.bound
  handleMouseLeave(){
    this.shadeShow=false
  }
  render() {
    const {name,type,start,end,money} = this.props;
    const content = (
      <div>
        <div>1、适用城市：北京、上海、广州、深圳</div>
        <div>2、所有车型</div>
      </div>
    )
    return(
      <div className="sy-coupon_wrap" >
        <div onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
        <div className="sy-coupon_info">
          <div className="sy-coupon_money">
            ￥{money}
          </div>
          <div className="sy-coupon_text">
            <span>{name}</span><br/>
            <span>{type}</span>
          </div>
        </div>
        {this.shadeShow&&
          <div className="sy-coupon_shade">
            <Button>下临时单</Button>
            <Button>下长期单</Button>
          </div>
        }
        </div>
        <div className="sy-coupon_time">
          <span>有效期：{start}-{end}</span>
          <span>
            使用规则
            <Popover content={content} title="使用规则">
            <span className="sy-coupon_icon"><Icon type="shiyongguize" /></span>
            </Popover>
          </span>
        </div>
      </div>
    )
  }
};

export default Coupon