const qs = require('qs')
global.navigator = {appName: 'nodejs'}; // fake the navigator object
global.window = {}; // fake the window object
const jsencrypt = require('jsencrypt');
const pubkey = require('./pubkey')
const encrypt = new jsencrypt()
encrypt.setPublicKey(pubkey)
const data = qs.stringify({
account: process.env.0632221017,
password: process.env.lds221017,
school_id: process.env.2029,
request_source: 3,
system: '5.1.1'
})


const signdata = qs.stringify({
  address: process.env.江苏省南通市崇川区新开街道,
  address_name: process.env.江苏航运职业技术学院,
  latitude: encrypt.encrypt(process.env.31.916006),
  longitude: encrypt.encrypt(process.env.120.962776),
  remark: 0,
  change_sign_resource: 0
})

const reportdata = (family_name, family_phone) => {
  return qs.stringify({
    health_type: 1,
    province_id: 0,
    city_id: 0,
    district_id: 0,
    hubei: 0,
    ill: 0,
    state: 1,
    family_name,
    family_phone,
    temperature: (36 + Math.random()).toFixed(1),
    safe: [],
    file: ''
  })
}

const headers = {
  'content-type': 'application/x-www-form-urlencoded'
}
const loginApi = 'https://api.xixunyun.com/login/api?from=app&version=5.1.1&platform=android'
const signApi = (token) => {
  return `https://api.xixunyun.com/signin_rsa?token=${token}&from=app&version=5.1.1&platform=android&entrance_year=0&graduate_year=0&school_id=${process.env.SCHOOL_ID}`
}
const studentReportApi = (token) => {
  return `https://api.xixunyun.com/health/studentlist?token=${token}&page_no=1&page_size=1`
}
const studentReportCommitApi = (token) => {
  return `https://api.xixunyun.com/health/add?token=${token}`
}
const mail = process.env.1359694181@qq.com
const code = process.env.CODE
const token = process.env.TOKEN
module.exports = {
  data,
  signdata,
  reportdata,
  loginApi,
  signApi,
  studentReportApi,
  studentReportCommitApi,
  headers,
  mail,
  code,
  token
}
