export default {
synchronize: async () => {
        await get_user.run();
        await get_user_department.run();
				await get_order_details.run();
				await get_orders.run();
				await get_total_amount.run();
    } ,
		autorefresh: async () => 
			{
		setInterval(() => {
			get_user.run(),
				get_orders.run(),
			get_user_department.run(),
				get_notes.run(),
				get_all_amount_by_item.run(),
				get_all_amount_by_itemCopy.run(),
				get_all_main_orders.run(),
				get_all_main_ordersCopy.run(),
				get_all_Live_orders_count.run(),
				get_allmain_orders_count_today.run(),
				get_orders.run(),
				get_all_amount_by_item.run()
											}, 2000, "autoupdate");
  }
}