import React, { Component } from 'react';
import Coupon from 'src/components/Coupon'

class DiscountCoupon extends Component {
  render () {
    return (
      <div className="sy-coupon">
        <div className="sy-coupon_list">
            <Coupon money="8" name="优惠卷劵名称" start="2018.06.18" end="2018.07.10" type="卷类型"></Coupon>
        </div>
      </div>
    )
  }
}

export default DiscountCoupon