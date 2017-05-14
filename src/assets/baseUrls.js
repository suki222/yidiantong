/**
 * Created by wujw on 17/5/3.
 */
  //const base="http://localhost:8089"
  const base="http://wjw.idocore.com:8089"
module.exports={
  //----------------赠品------------------
  GIFT_LIST:`${base}/gift/getlist`,//赠品列表
  //----------------用户相关---------------
  USER_GET_USERNUM:`${base}/user/getUserNum`,//获取用户数
  USER_LOGIN:`${base}/user/login`,//登录
  USER_GET_USERINFO:`${base}/user/getUserInfo`,//获取用户信息
  USER_RESET_PWD:`${base}/user/resetPwd`,//修改密码
  USER_GET_VIP:`${base}/user/getVipType`,//获取用户vip等级
  //----------------订单相关---------------
  ORDER_GET_LIST:`${base}/order/getList`,//获取订单信息
  ORDER_ADD_ORDER:`${base}/order/addOrder`,//提交订单信息
  //----------------绑定相关---------------
  BIND_GET_INFO:`${base}/bind/getInfo`,//获取绑定信息
  BIND_ADD_BIND:`${base}/bind/addBind`//添加绑定信息
}
