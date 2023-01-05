const root = 'http://localhost:5050'

function requestPost(url, params) {
    url = root + url;
    return new Promise(function (request, reject) {
        wx.request({
            url: url,
            data: params,
            method: 'post',
            timeout: 60000,
            success: function (res) {
                resolve(res)
            },
            fail: function (err) {
                reject(err)
            }
        })
    })
}
function requestGet(url, params) {
    url = root + url;
    return new Promise(function (request, reject) {
        wx.request({
            url: url,
            data: params,
            method: 'get',
            timeout: 60000,
            success: function (res) {
                resolve(res)
            },
            fail: function (err) {
                reject(err)
            }
        })
    })
}

module.exports = {
    requestGet,
    requestPost
}