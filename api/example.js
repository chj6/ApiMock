var express = require('express');
var router = express.Router();
let Mock = require('mockjs');

// 大部分后台接口应该都可以通过调用这个方法去实现，特殊情况在router中进行重写回调函数即可
let ApiHelper = require('../utils/apiHelper');

// 下面注释是api注释必写，可以借助vscode的ApiDoc Snippets插件
/**
 * @api {get}/api/Example/array 返回array
 * @apiDescription 这个array是通过mock模拟出来的
 * @apiName array
 * @apiGroup Example
 * @apiParam {string} v 接口类型(dev,prod,default:mock)
 * @apiSuccess {json} data
 * @apiSuccessExample {json} Success-Response:
 *  {
 *      "code" : "000000",
 *      "data" : {
 *          "id" : 1,
 *          "name" : "name",
 *          "value" : 20
 *      }
 *  }
 * @apiSampleRequest api/example/array
 * @apiVersion 1.0.0
 */
router.all('/array', ApiHelper.ajax, function (req, res, next) {
    let rst = ApiHelper.GenMockRst(Mock.mock({
        "data|1-9": [{
            "id|+1": 1,
            "name|5-8": /[a-zA-Z]/,
            "value|0-50": 20
        }]
    }));
    res.send(rst);
});

/**
 * @api {get}/api/Example/object 返回object
 * @apiDescription 这个object是通过mock模拟出来的
 * @apiName object
 * @apiGroup Example
 * @apiParam {string} v 接口类型(dev,prod,default:mock)
 * @apiSuccess {json} data
 * @apiSuccessExample {json} Success-Response:
 *  {
 *      "code" : "000000",
 *      "data" : {
 *          "id" : "id",
 *          "guid" : "guid"
 *      }
 *  }
 * @apiSampleRequest api/example/object
 * @apiVersion 1.0.0
 */
router.all('/object', ApiHelper.ajax, function (req, res, next) {
    let rst = ApiHelper.GenMockRst(Mock.mock({
        "data": {
            'id': '@id',
            'guid': '@guid',
            'ename': '@first @last',
            'name': '@cname',
            'age|1-100': 1,
            'sex|1': ['男', '女', '未知'],
            'email': '@email',
            'blogWeb': '@url',
            'bornDate': '@date("yyyy-MM-dd")',
            'bornTime': '@time("HH:mm:ss")',
            'joinTime': '@datetime("yyyy-MM-dd HH:mm:ss")',
            'iconSrc': Mock.Random.image('200x100', '#4A7BF7', 'Image'),
            'address': '@county(true)',
            'description': '@cword(20,50)',
            'edescription': '@word(20,50)',
            'mobile': /^1\d{10}$/,
            'cellphone': /^(0\d{2}-\d{8}(-\d{1,4})?)|(0\d{3}-\d{7,8}(-\d{1,4})?)$/
        }
    }));
    res.send(rst);
});

module.exports = router;