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
			get_user_department.run()
											}, 2000, "autoupdate");
  }
}