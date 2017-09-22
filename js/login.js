//LOGIN COMPONENT


 Vue.component('login', {
 	template: `
 				   <div class="login-container">
	  				<h2>LOGIN</h2>
	  				<input id="username" type="text" name="username" placeholder="username">
	  				<input id="password" type="password" name="password" placeholder="password">
	  				<input v-on:click="checkpass" type="submit" value="Login">
	  				<a href="#"> Forgot Password </a>
  				</div>
  			  `,

  methods: {

    checkpass: function() {
      event.preventDefault();

      var pass = document.getElementById('password').value; 
      var user = document.getElementById('username').value; 

      if(user === 'amberpitcher' && pass === 'mypassword') {

        window.location = "./dashboard.html";
        
      } else {
        alert('Incorrect Username or Password!');
      }
    },
  }
 })

var login = new Vue({
  el: '#login'
})