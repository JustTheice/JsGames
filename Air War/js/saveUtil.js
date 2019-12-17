(function(){
	if(!window.bTools){
		window.bTools = {};
	}
	window.bTools.storageUtil = {
		read(KEY){
			return JSON.parse(window.localStorage.getItem(KEY) || '[]');
		},
		save(KEY,newV){
			window.localStorage.setItem(KEY,JSON.stringify(newV));
		}
	}
})();