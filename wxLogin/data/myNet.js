var Nets = {
  "code": 0,
  "msg": "操作成功",
  "result": [{
    "netId": "ASC1234",
    "netName": "全维8楼组网1",
    "netType": "适配器+交换机+AP",
    "province": "浙江省",
    "city": "杭州市",
    "county": "西湖区",
    "detailAddress": "西斗门路3号天堂软件园D座8楼"
  }, {
    "netId": "FIE3805",
    "netName": "全维8楼组网2",
    "netType": "仅AP",
    "province": "浙江省",
    "city": "杭州市",
    "county": "西湖区",
    "detailAddress": "西斗门路3号天堂软件园D座8楼"
  }]
}


var Devices = {
  "code": 0,
  "msg": "操作成功",
  "result": {
    "enterprise": "杭州全维技术有限公司",
    "netName": "全维8楼研发组wifi",
    "deviceInfo": [{
      "deviceSn": "AP2374SDQ38989HW12",
      "deviceType": "AP"
    }, {
      "deviceSn": "AP23ICL1238019DZO2",
      "deviceType": "AP",
    }, {
      "deviceSn": "APSIU228DUAM183HFI",
      "deviceType": "AP",
    }, {
      "deviceSn": "BLS198DASDIC183HFI",
      "deviceType": "交换机",
    }, {
      "deviceSn": "BLA29EFN329VJ83HFI",
      "deviceType": "交换机",
    }, {
      "deviceSn": "NLKAC392HD9CVNN239",
      "deviceType": "网关及其他",
    }]
  }
}

module.exports = {
  NetList: Nets,
  DeviceList: Devices
}