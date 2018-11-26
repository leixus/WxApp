var networkLists = {
  code: "0",
  msg: "操作成功",
  result: [{
      netTypeId: 0,
      netType: "仅AP"
    },
    {
      netTypeId: 1,
      netType: "交换机+AP"
    },
    {
      netTypeId: 2,
      netType: "适配器+交换机+AP"
    },
    {
      netTypeId: 3,
      netType: "适配器+AP"
    }
  ]
}
var deviceTypeLists = {
  result: [{
    deviceTypeId: 0,
    deviceType: "AP"
  }, {
    deviceTypeId: 1,
    deviceType: "AC"
  }, {
    deviceTypeId: 2,
    deviceType: "网关及其他设备"
  }]
}
var NetLists = {
  result: [{
    netId: 0,
    netName: "全维8楼会议室1"
  }, {
    netId: 1,
    netName: "全维8楼研发组"
  }, {
    netId: 2,
    netName: "全维8楼会议室3"
  }, {
    netId: 3,
    netName: "全维8楼会议室4"
  }]
}
module.exports = {
  networkList: networkLists,
  deviceTypeList: deviceTypeLists,
  NetList: NetLists
}