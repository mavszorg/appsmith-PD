export default {
		acccc: async () => {
				Object.keys(appsmith.store)
		.map(key => storeValue(key,undefined));
	},
		Continue: async () => {
			showModal('Modal1');
	
		if(!appsmith.URL.fullPath.includes('#access_token=')) return;
		 	appsmith.URL.fullPath.split('#')[1].split('&').forEach(i => {
			const [key,value] = i.split('=');
			 storeValue(key,value); 
		});

		}
}
