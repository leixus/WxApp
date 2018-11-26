var WOs = {
  code: "0",
  msg: "操作成功",
  result: [{
    workNum: "1134567",
    enterprise: "全维技术",
    deviceType: "AP/交换机",
    deviceModelQuantity: "QW123:10台/QW456:1台",
    createTime: "2018/04/04 12:00",
    endTime: "",
    workStatus: "进行中",
    workFeedback: "",
    remarks: "",
    responsible: "张小强",
    contactMethod: "18158511293"
  }, {
    workNum: "1196528",
    enterprise: "阿里巴巴",
    deviceType: "AP/交换机",
    deviceModelQuantity: "QW123:10台/QW456:1台",
    createTime: "2018/04/04 12:00",
    endTime: "2018/04/07 15:00",
    workStatus: "已完结",
    workFeedback: "成功安装",
    remarks: "安装成功没有问题",
    responsible: "张小强",
    contactMethod: "18158511293"
  }, {
    workNum: "5123413",
    enterprise: "小米",
    deviceType: "AP",
    deviceModelQuantity: "QW123:10台/QW456:1台/WE313:4台",
    createTime: "2018/04/04 12:00",
    endTime: "",
    workStatus: "进行中",
    workFeedback: "",
    remarks: "",
    responsible: "张小强",
    contactMethod: "18158511293"
  }, {
    workNum: "7676433",
    enterprise: "华为",
    deviceType: "交换机",
    deviceModelQuantity: "QW123:10台",
    createTime: "2018/04/05 12:00",
    endTime: "2018/04/08 15:00",
    workStatus: "已完结",
    workFeedback: "异常安装",
    remarks: "AP差了很多台",
    responsible: "张小强",
    contactMethod: "18158511293"
  }, {
    workNum: "1142323",
    enterprise: "网易",
    deviceType: "AP/交换机",
    deviceModelQuantity: "QW123:10台/QW456:1台",
    createTime: "2018/04/04 12:00",
    endTime: "",
    workStatus: "进行中",
    workFeedback: "",
    remarks: "",
    responsible: "张小强",
    contactMethod: "18158511293"
  }, {
    workNum: "7674324",
    enterprise: "腾讯",
    deviceType: "交换机",
    deviceModelQuantity: "QW123:10台",
    createTime: "2018/04/05 12:00",
    endTime: "2018/04/08 15:00",
    workStatus: "已完结",
    workFeedback: "异常安装",
    remarks: "AP差了很多台",
    responsible: "张小强",
    contactMethod: "18158511293"
  }]
}

var companys = [{
  enterpriseId: "qw183748",
  enterprise: "全维技术"
}, {
  enterpriseId: "albb28473",
  enterprise: "阿里巴巴"
}, {
  enterpriseId: "xm183941",
  enterprise: "小米"
}, {
  enterpriseId: "hw18392929",
  enterprise: "华为"
}]
module.exports = {
  WOList: WOs,
  companyList: companys
}