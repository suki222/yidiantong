/**
 * Created by wujw on 17/4/11.
 */
//服务套餐的banner图
const buyserver_banner_list = [
  require('../assets/img/buyserver_banner_1.jpg'),
  require('../assets/img/buyserver_banner_2.jpg'),
  require('../assets/img/buyserver_banner_3.jpg'),
  require('../assets/img/buyserver_banner_4.jpg')
];
export const buyserverBanner = buyserver_banner_list.map((one) => ({
  url: 'javascript:',
  img: one
}));
// 购买页面图
const serverinfo_banner_list = [
  require('../assets/img/server_info_banner_1.jpg'),
  require('../assets/img/server_info_banner_2.jpg')
];
export const serverinfoBanner = serverinfo_banner_list.map((one) => ({
  url: 'javascript:',
  img: one
}));
//赠品列表
export const productList = [
  {
    name: '小米电饭煲',
    imgUrl: require('../assets/img/gift_dfb.jpg'),
    detail: '这里是产品介绍这里是产品介绍这里是产品介绍这里是产品介绍这里是产品介绍这里是产品介绍这',
    price: '349.0',
    hot: '1200',
    key: '1'
  },
  {
    name: '美的家用烘培烤箱',
    imgUrl: require('../assets/img/gift_kx.jpg'),
    detail: '这里是产品介绍这里是产品介绍这里是产品介绍这里是产品介绍这里是产品介绍这里是产品介绍这',
    price: '349.0',
    hot: '1200'
  },
  {
    name: '九阳多功能料理机',
    imgUrl: require('../assets/img/gift_llj.jpg'),
    detail: '这里是产品介绍这里是产品介绍这里是产品介绍这里是产品介绍这里是产品介绍这里是产品介绍这',
    price: '349.0',
    hot: '1200'
  },
  {
    name: '苏泊尔平底锅',
    imgUrl: require('../assets/img/gift_pdg.jpg'),
    detail: '这里是产品介绍这里是产品介绍这里是产品介绍这里是产品介绍这里是产品介绍这里是产品介绍这',
    price: '349.0',
    hot: '1200'
  },
  {
    name: '美的充电LED台灯',
    imgUrl: require('../assets/img/gift_LEDtd.jpg'),
    detail: '这里是产品介绍这里是产品介绍这里是产品介绍这里是产品介绍这里是产品介绍这里是产品介绍这',
    price: '349.0',
    hot: '1200'
  },
  {
    name: 'JBL蓝牙音箱',
    imgUrl: require('../assets/img/gift_yx.jpg'),
    detail: '这里是产品介绍这里是产品介绍这里是产品介绍这里是产品介绍这里是产品介绍这里是产品介绍这',
    price: '349.0',
    hot: '1200'
  },
  {
    name: '小米手环2',
    imgUrl: require('../assets/img/gift_xmsh.jpg'),
    detail: '这里是产品介绍这里是产品介绍这里是产品介绍这里是产品介绍这里是产品介绍这里是产品介绍这',
    price: '349.0',
    hot: '1200'
  },
  {
    name: '小熊养生壶',
    imgUrl: require('../assets/img/gift_ysh.jpg'),
    detail: '这里是产品介绍这里是产品介绍这里是产品介绍这里是产品介绍这里是产品介绍这里是产品介绍这',
    price: '349.0',
    hot: '1200'
  },
  {
    name: '乐扣保鲜盒两件套',
    imgUrl: require('../assets/img/gift_bxh.jpg'),
    detail: '这里是产品介绍这里是产品介绍这里是产品介绍这里是产品介绍这里是产品介绍这里是产品介绍',
    price: '349.0',
    hot: '1200'
  },
  {
    name: '乐扣不锈钢真空杯',
    imgUrl: require('../assets/img/gift_zkb.jpg'),
    detail: '这里是产品介绍这里是产品介绍这里是产品介绍这里是产品介绍',
    price: '349.0',
    hot: '1200'
  },
]
//常见问题列表
export const askList = [
  {
    title: '如何续费?', arrowType: false, content: [
    {label: '1.点击公众号“缴费”菜单'},
    {label: '2.进入服务购买界面'},
    {label: '3.选择需要续费的会员服务，进行下单购买即可'}
  ]
  },
  {
    title: '如何修改密码?', arrowType: false, content: [
    {label: '1.点击公众号“我的账户”菜单'},
    {label: '2.进入“账户信息”页面'},
    {label: '3.点击修改密码，进入修改密码页面即可修改'}
  ]
  },
  {
    title: '如何查询到期时间?', arrowType: false, content: [
    {label: '1.点击公众号“我的账户”菜单'},
    {label: '2.进入“到期时间”页面即可查看'},
  ]
  }
]

//问题列表
export const FAQList = [
  {title: '热门问题', arrowType: false, askList: askList},
  {
    title: '首次开通问题', arrowType: false, askList: [
    {
      title: '如何获取单位编号及登录密码?', content: [
      {label: '1.通过电话或QQ联系客服，告知客服所属单位的单位名称等信息;'},
      {label: '2.经客服审核确认后，客服会立即告知您相应的单位编号及初始登录密码'},
    ]
    },
    {
      title: '如何注册开通?', content: [
      {label: '1.百度搜索“地区+E点通”，进入E点通官网;'},
      {label: '2.点击“用户登录”右上角的“注册开通”;'},
      {label: '3.输入单位编号及初始密码进行账户开通.'},
    ]
    },
  ]
  },
  {
    title: '发票问题', arrowType: false, askList: [
    {
      title: '发票什么时候寄出?', content: [
      {label: '发票将在交易成功后的20个工作日内寄出，请您注意查收.'},
    ]
    },
    {
      title: '如何开具专用发票?', content: [
      {label: '当前系统默认开具普通发票，若您需要开具专票请您下单后及时联系客服。'},
    ]
    },
  ]
  }
]
//开通指南
export const openGuide = [
  {
    headpic: '', title: '如何获取单位编号及登录密码?', content: [
    {label: '通过电话或QQ联系客服，告知客服所属单位的单位名称等信息;'},
    {label: '经客服审核确认后，客服会立即告知您相应的单位编号及初始登录密码.'}
  ]
  },
  {
    headpic: '', title: '如何注册开通?', content: [
    {label: '百度搜索“地区+E点通”，进入E点通官网;'},
    {label: '点击“用户登录”右上角的“注册开通”;'},
    {label: '输入单位编号及初始密码进行账户开通.'}
  ]
  }
]
// 服务套餐类型
  export const serverlist=[
    {key: 'vip4', url: require('../assets/img/server_vip4_bg.png'), cost: '3000',cost_:'1000',realcost:'3000',giftcost:'888', value:'钻石VIP会员包',bannerIndex:3},
    {key: 'vip3', url: require('../assets/img/server_vip3_bg.png'), cost: '2000',cost_:'0',realcost:'2000',giftcost:'500', value:'白金VIP会员包',bannerIndex:3},
    {key: 'vip2', url: require('../assets/img/server_vip2_bg.png'), cost: '1000',cost_:'0',realcost:'1000',giftcost:'266',value:'黄金VIP会员包',bannerIndex:2},
    {key: 'vip1', url: require('../assets/img/server_vip1_bg.png'), cost: '500',cost_:'0',realcost:'500',giftcost:'0',value:'白银VIP会员包',bannerIndex:1},
    {key: 'vip', url: require('../assets/img/server_vip_bg.png'), cost: '200',cost_:'0',realcost:'200',giftcost:'0',value:'普通会员包',bannerIndex:0}
  ]

