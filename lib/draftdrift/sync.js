var config = require("config"),
    Drift = require(__dirname + "/Drift");

var sync = function () {
	var drifts = Drift.all();

	var queue = [];
	drifts.forEach(function (focusDrift) {

	});

	// まずはsync_idを全てリスト化した方がいいと思う。
	// その全てのsync_idについて、drift全てで調べる。
	// 重複が無ければadd指令、重複があったら最新版にupdate指令
	// sync_id未定のものも全てリスト。idを新しく付けて、他のdriftにadd指令。
};

module.exports = sync;