var mongoose = require('mongoose');
var _ = require('underscore');
var fs = require('fs');
var eco = require('eco');
var async = require('async');
var Person = mongoose.model('Person');  //生成Person Model
var ResourceHistory = mongoose.model('ResourceHistory');
var ResponseFormatHelper = require(__dirname + '/../../lib/response_format_helper');

// 定义Model具体行为

exports.load = function(req, res, id, vid, next) {
  if (req.resourceHistory) {
    if(vid !== null){
      req.resourceHistory.getVersion(vid, function(err, person) {
        req.person = person;
        next(person);
      });
    } else {
      req.resourceHistory.findLatest(function(err, person) {
        req.person = person;
        next(person);
      });
    }
  } else {
    ResourceHistory.findOne(id, function(rhErr, resourceHistory) {
      if (rhErr) {
        next(rhErr);
      }
      if(resourceHistory !== null) {
        req.resourceHistory = resourceHistory;
        req.resourceHistory.findLatest(function(err, person) {
          req.person = person;
          next(person);
        });
      }
    });
  }
};  //Load Person资源

exports.show = function(req, res) { //显示
  var person = req.person;
  var json = JSON.stringify(person);
  res.send(json);
};

exports.create = function(req, res) { //创建
  var person = new Person(req.body);
  person.save(function(err, savedPerson) {
    if(err) {
      res.send(500);
    } else {
      var resourceHistory = new ResourceHistory({resourceType: 'Person'});
      resourceHistory.addVersion(savedPerson.id);
      resourceHistory.save(function(rhErr, savedResourceHistory){
        if (rhErr) {
          res.send(500);
        } else {
          res.set('Location', ("http://localhost:3000/person/@" + resourceHistory.id));
          res.send(201);
        }
      });
    }
  });
};

exports.update = function(req, res) {
  var person = req.person;
  person = _.extend(person, req.body);
  person.save(function(err, savedperson) {
    if(err) {
      res.send(500);
    } else {
      var resourceHistory = req.resourceHistory;
      resourceHistory.addVersion(savedperson);
      resourceHistory.save(function(rhErr, savedResourceHistory) {
        if (rhErr) {
          res.send(500);
        } else {
          res.send(200);
        }
      });
    }
  });
};  //更新

exports.destroy = function(req, res) {
  var person = req.person;
  person.remove(function (err) {
    if(err) {
      res.send(500);
    } else {
      res.send(204);
    }
  });
};  //销毁

exports.list = function(req, res) {

  var content = {
    title: "Search results for resource type Person",
    id: "http://localhost:3000/person",
    totalResults: 0,
    link: {
      href: "http://localhost:3000/person",
      rel: "self"
    },
    updated: new Date(Date.now()),
    entry: []
  };

  ResourceHistory.find({resourceType:"Person"}, function (rhErr, histories) {
    if (rhErr) {
      return next(rhErr);
    }
    var counter = 0;
    async.forEach(histories, function(history, callback) {
      counter++;
      content.totalResults = counter;
      history.findLatest( function(err, person) {
        var entrywrapper = {
          title: "Person " + history.vistaId + " Version " + history.versionCount(),
          id: "http://localhost:3000/person/@" + history.vistaId,
          link: {
            href: "http://localhost:3000/person/@" + history.vistaId + "/history/@" + history.versionCount(),
            rel: "self"
          },
          updated: history.lastUpdatedAt(),
          published: new Date(Date.now()),
          content: person
        };
        content.entry.push(entrywrapper);
        callback();
      });
    }, function(err) {
        res.send(JSON.stringify(content));
    });
  });
};  //列出