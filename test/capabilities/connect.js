exports.connect = {
	goodConfig: require('../../conf/local').connectors['appc.salesforce'],
	badConfig: {
		requireSessionLogin: false,
		url: 'https://test.salesforce.com/',
		username: 'dtoth@appcelerator.com.appcdev',
		password: 'some-bad-password',
		token: 'mybadtokenforsalesforce',
		generateModelsFromSchema: true
	}
};
