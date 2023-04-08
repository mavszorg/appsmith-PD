export default {
	myFun1: async (currentRow) => {
		await storeValue("rowUpdate",currentRow);
		await Save_Data.run({currentRow});
		await get_orders.run();
		showAlert('Well done!.','success')
	},
		myFun2: async (currentRow) => {
		await storeValue("rowUpdate",currentRow);
	},
		getonlyuser: () => {
 	const email = user_emailCopy.text
	const username = email.split("@")[0];
	return username;
	},
	reloading: async () => {
	await get_user_department.run();
	await get_orders.run();
	await get_order_details.run();
	await get_user.run();	
		
	}
	
}
