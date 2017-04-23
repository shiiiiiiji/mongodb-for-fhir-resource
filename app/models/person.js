var mongoose = require('mongoose'); //引入mongoose工具

//使用mongoose的Schema方法对Person资源进行建模
var PersonSchema = new mongoose.Schema(
    //传入一个对象参数，根据FHIR资源定义Person模式的结构和数据类型
    {
        identifier: [{  //标识
            use: String,
            label: String,
            system: String,
            value: String
        }],
        name: [{    //姓名
            use: String,
            text: String,
            family: [String],
            given: [String],
            prefix: [String],
            suffix: [String]
        }],
        telecom: [{ //电话
        }],
        gender: String, //性别
        birthDate: Date,    //出生日期
        address: [{ //地址
        }],
        photo: {    //照片
        },
        managingOrganization: {
        },
        active: Boolean,
        link: [{
            target: {
            },
            assurance: String,
        }]
    }
);

//导出Model
mongoose.model('Person', PersonSchema);