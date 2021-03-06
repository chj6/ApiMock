define({ "api": [
  {
    "type": "get",
    "url": "/api/Example/array",
    "title": "返回array",
    "description": "<p>这个array是通过mock模拟出来的</p>",
    "name": "array",
    "group": "Example",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "v",
            "description": "<p>接口类型(dev,prod,default:mock)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\" : \"000000\",\n    \"data\" : {\n        \"id\" : 1,\n        \"name\" : \"name\",\n        \"value\" : 20\n    }\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/api/example/array"
      }
    ],
    "version": "1.0.0",
    "filename": "api/example.js",
    "groupTitle": "Example"
  },
  {
    "type": "get",
    "url": "/api/Example/object",
    "title": "返回object",
    "description": "<p>这个object是通过mock模拟出来的</p>",
    "name": "object",
    "group": "Example",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "v",
            "description": "<p>接口类型(dev,prod,default:mock)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\" : \"000000\",\n    \"data\" : {\n        \"id\" : \"id\",\n        \"guid\" : \"guid\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/api/example/object"
      }
    ],
    "version": "1.0.0",
    "filename": "api/example.js",
    "groupTitle": "Example"
  }
] });
