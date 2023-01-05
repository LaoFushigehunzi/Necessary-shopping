const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return `${[year, month, day].map(formatNumber).join('/')} ${[hour, minute, second].map(formatNumber).join(':')}`
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : `0${n}`
}
function getUserProfile() {
  return new Promise((resolve, reject) => {
    wx.getUserProfile({
      desc: 'desc',
      success: function (res) {
        resolve(res);
      },
      fail: function (err) {
        reject(err);
      }
    })
  })
}
function login() {
  return new Promise((resolve, reject) => {
    wx.login({
      success: function (res) {
        resolve(res)
      },
      fail: function (err) {
        reject(err);
      }
    })
  })
}
function sendRequest() {
  return new Promise((resolve, reject) => {
    wx.request({

    })
  })
}


module.exports = {
  formatTime,
  getUserProfile,
  login,
  sendRequest
}
