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
	reloading: async () => {
	await get_user_department.run();
	await get_orders.run();
	await get_order_details.run();
	await get_user.run();	
		
	},
		runvolume: async () => {
		await get_printer_vol.run();
		await get_postcard_vol.run();
		await get_letter_vol.run();
		await get_cheque_vol.run();	
		await get_postcard_vol_count.run();
		await get_letter_vol_count.run();
		await get_cheque_vol_count.run();	
		await get_invoice_summary.run();
		await get_all_main_orders.run();
		await get_all_amount_by_item.run();
		
	}
	
}
