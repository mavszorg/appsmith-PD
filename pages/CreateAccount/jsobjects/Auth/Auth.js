export default {
	newAccount: () => {
    if (Input1.text !== Input2.text) {
   showAlert("Created password and confirm password do not match",'error');
    return;
  }
			storeValue('newpw',Input2.text)
  		create_acc.run()
         .then(() => {showAlert("Congratulations on creating your new account! We're thrilled to have you join our community. Here's to many great experiences ahead!",'success'),storeValue('newpw',undefined)},navigateTo('https://app.appsmith.com/app/printerdashboard/login-63d17c6f516f8c24ae46454e?embed=true', {}, 'SAME_WINDOW'))
					
					.catch((error) => {console.error("Error:", error)})
}
}