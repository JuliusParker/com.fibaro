'use strict';

const ZwaveDevice = require('homey-meshdriver').ZwaveDevice;

class FibaroDoubleSwitchDevice extends ZwaveDevice {

	onMeshInit() {
		this.registerCapability('onoff', 'SWITCH_BINARY');
	}

}

module.exports = FibaroDoubleSwitchDevice;
