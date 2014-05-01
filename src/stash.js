(function (global) {
  var Stash = global.Stash || {};
  var isNode = typeof require !== 'undefined';

  Stash.Item = require('./stash/item');
  Stash.Pool = require('./stash/pool');


  Stash.Drivers = {
    Ephemeral: require('./stash/drivers/ephemeral'),
    LocalStorage: require('./stash/drivers/local_storage'),
    Memcached: require('./stash/drivers/Memcached'),
    Redis: require('./stash/drivers/Redis')
  };

  if (isNode) {
    module.exports = Stash;
  } else {
    global.Stash = Stash;
  }
})(this);
