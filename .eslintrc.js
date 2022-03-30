// npm i -D babel-eslint@8 eslint-config-alloy@3 eslint @babel/eslint-parser vue-eslint-parser eslint-plugin-vue
module.exports = {
	extends: ["alloy"],
	globals: {
		GM_registerMenuCommand: true,
		GM_getResourceURL: true,
		GM_xmlhttpRequest: true,
		GM_setClipboard: true,
		GM_notification: true,
		GM_addElement: true,
		GM_deleteValue: true,
		GM_listValues: true,
		GM_openInTab: true,
		GM_addStyle: true,
		GM_setValue: true,
		GM_getValue: true,
		GM_info: true,
		Masonry: true,
		InfiniteScroll: true,
	},
	rules: {
		// "no-param-reassign": "warn",
		// "no-constructor-return": "off",
		// "no-unused-vars": "warn",
		// "max-params": "off",
		// "no-template-curly-in-string": "warn",
	},
};
