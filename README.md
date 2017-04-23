# mongodb-for-fhir-resource

Ok, this is an experiment project for my master thesis.

At the basic of the origin code for mongodb version of FHIR resource from fhir.org.

What I want to do is convert the data type of different health and medical wearable device to FHIR resources in mongoDB.

- Firstly, establish a meta data framework of WD data.
- Secondly, map the framework to FHIR resources.
- Finally, code and prepare some real data of WD.
- Well done!

## Useage

```
git clone https://github.com/zelda/mongodb-for-fhir-resource.git

npm install

node app.js (install and start mongo service)

```

## MongoDB on mac

- [Mac下安装MongoDB 及使用教程](https://segmentfault.com/a/1190000002547229)
- [Mac 上安装MongoDB](http://www.jianshu.com/p/dd0c39bf7be4)
- Mongo path in my Mac: /usr/local/Cellar/mongodb/3.4.3/bin

```
# mongo
# use fhir
```

## Useful links
- [Express 3.x API 中文手册](http://www.expressjs.com.cn/3x/api.html#app.set)
- [Express 4.x API 中文手册](http://www.expressjs.com.cn/4x/api.html)
- [Mongoose全面理解](http://www.cnblogs.com/jayruan/p/5123754.html)
- [Node.js开发入门——MongoDB与Mongoose](http://blog.csdn.net/foruok/article/details/47746057)
- [Mongoose学习参考文档——基础篇](http://cnodejs.org/topic/504b4924e2b84515770103dd)
- [nodejs+mongodb做项目的详解(最新)](http://cnodejs.org/topic/547293caa3e2aee40698df0b)

## Issues

- `node app.js` ---> `Error: 'options' may not be used as a schema pathname` at `app/models/questionnaire.js` line 71 

`options` is a reserved schema names that can't be used.

At last, I change one name for `options`

