var apiHelper = {};

// 生成Mock返回的数据格式
apiHelper.GenMockRst = function (mockData) {
    // 返回Mock数据的基础格式
    let MockBaseRst = { "code": "000000", "v": "mock", "data": {} };
    return Object.assign({}, MockBaseRst, mockData);
}

// 开发接口
let ApiAjax1 = function (req, res, next) {
    if (req.query.v === "dev") { // http://localhost:3000/api/example/object?v=dev
        
        // 此处应该发起httprequest到后台人员的开发接口
        res.send({
            'code': '000000',
            'v': 'dev'
        });

    } else {
        next();
    }
}

// 测试接口
let ApiAjax2 = function (req, res, next) {
    if (req.query.v === "prod") {// http://localhost:3000/api/example/object?v=prod

        // 此处应该发起httprequest到生产接口
        res.send({
            'code': '000000',
            'v': 'prod'
        });

    } else {
        next();
    }
}

apiHelper.ajax = [ApiAjax1, ApiAjax2];

module.exports = apiHelper;