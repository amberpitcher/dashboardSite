//DASH COMPONENT
'use strict';

var data = {
  lesson:{

    name: "BODY PARTS",
    icon: 'fa fa-eye',
    inProgress: true
  },

  classroom:{
    className: 'Italian 101',
    joined: false
  },

  inbox: [
     {
      title: 'Messages',
      link: './messages.html',
      noNoti: true
    },
   {  
      title: 'Friend Requests',
      link: './requests.html',
      noNoti: false
    },
     {
      title: 'Friend List',
      link: './friends.html',
      noNoti: true
    },
    { 
      title: 'Leaderboard',
      link: './leaderboard.html',
      noNoti: true
    }
  ]
}

 Vue.component('dashboard', {
 	template: `
            <div>
              <div id="flex-one">
                <button class="lesson">
                  <div v-if="lesson.inProgress == true">
                    <i :class="lesson.icon" aria-hidden="true"></i>
                    <h2>Next Lesson</h2>
                    <p>{{lesson.name}}</p>
                  </div>

                  <div v-else>
                  <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                  <h2>Take the test!</h2>
                  <div>
                </button>

                <button class="classroom">
                  <div v-if="classroom.joined == true">
                    <h2>{{classroom.className}}</h2> 
                    <p>Forum</p>
                  </div>
                  <div v-else>
                    <h2>Join A Class</h2>
                    <p>Learn along with other Perroquet users!</p>
                  </div>
                </button>

                <button class="inbox">
                  <a href="#" v-for="data in inbox">
                    {{data.title}} 
                    <i v-bind:class="{active: data.noNoti}" class="fa fa-circle" aria-hidden="true"></i>
                  </a>
                </button>
              </div>

              <div id="flex-two">
                <button class="stats">
                  <h3> View Your Stats</h3>
                  <div>
                    <canvas id="myChart" height="60"></canvas>
                  </div>
                  <p>fluent in Italian</p>
                </button>

                <button class="practice">
                    <i class="fa fa-heart" aria-hidden="true"></i>
                  <h2>Practice</h2>
                  <p> to increase your health! </p>
                </button>
              </div>
            </div>
  			  `,

  	data: function(){
  		return data;
  	}
 })

var dashboard = new Vue({
  el: '#dash'
})