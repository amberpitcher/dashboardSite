//SIDEBAR COMPONENT
'use strict';

var data = {
  userInfo:{
    icon: './img/icon_1.png',
    nickname: 'Amber',  
    subject: 'ITALIAN',
    progress: '28%',
  },

  health:{
      
    health1: false,
    health2: true,
    health3: false
  } 
}

 Vue.component('sidebar', {
 	template: `
          <div>
 				     <div class="user">
                <img id="icon" :src="userInfo.icon">
                <h4>{{ userInfo.nickname }}</h4>
                <div id="health">
                  <div v-if="health.health1 == true">
                    <i class="fa fa-heart" aria-hidden="true"></i>
                    <i class="fa fa-heart-o" aria-hidden="true"></i>
                    <i class="fa fa-heart-o" aria-hidden="true"></i>
                  </div>
                  <div v-else-if="health.health2 == true">
                    <i class="fa fa-heart" aria-hidden="true"></i>
                    <i class="fa fa-heart" aria-hidden="true"></i>
                    <i class="fa fa-heart-o" aria-hidden="true"></i>
                  </div>
                  <div v-else>
                    <i class="fa fa-heart" aria-hidden="true"></i>
                    <i class="fa fa-heart" aria-hidden="true"></i>
                    <i class="fa fa-heart" aria-hidden="true"></i>
                  </div>
                </div>
                <h5>{{ userInfo.subject }}</h5>
              </div>
             <div class="options">
                <a href="./settings.html" id="options"><i class="fa fa-gear" aria-hidden="true"></i>&nbsp;Settings</a>
                <a href="./index.html" id="Logout">Logout</a>
             </div>
          </div>
  			  `,

  	data: function(){
  		return data;
  	}
 })

var sidebar = new Vue({
  el: '#user-sidebar'
})