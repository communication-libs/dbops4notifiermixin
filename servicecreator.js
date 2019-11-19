function createServiceMixin (execlib) {
  'use strict';

  var lib = execlib.lib,
    qlib = lib.qlib,
    execSuite = execlib.execSuite;

  function ServiceMixin (prophash) {
  }
  ServiceMixin.prototype.destroy = function () {
  };
  ServiceMixin.prototype.doCommunicationDelivery = execSuite.dependentServiceMethod([], ['CommunicationDBOps'], function (dbopssink, sendingsystemcode, sendingsystemid, sendingsystemnotified, defer) {
    qlib.promise2defer(dbopssink.call('doDelivery', sendingsystemcode, sendingsystemid, sendingsystemnotified), defer);
  });
  ServiceMixin.prototype.doCommunicationBounce = execSuite.dependentServiceMethod([], ['CommunicationDBOps'], function (dbopssink, bounceobj, defer) {
    qlib.promise2defer(dbopssink.call('doBounce', bounceobj), defer);
  });
  ServiceMixin.prototype.doCommunicationComplaint = execSuite.dependentServiceMethod([], ['CommunicationDBOps'], function (dbopssink, complaintobj, defer) {
    qlib.promise2defer(dbopssink.call('doComplaint', complaintobj), defer);
  });

  ServiceMixin.addMethods = function (klass) {
    lib.inheritMethods(klass, ServiceMixin
      ,'doCommunicationDelivery'
      ,'doCommunicationBounce'
      ,'doCommunicationComplaint'
    );
  };

  return ServiceMixin;
}
module.exports = createServiceMixin;
