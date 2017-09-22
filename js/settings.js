//SETTINGS COMPONENT

'use strict';

var data = {

  	icons: [
  		{ 
  			img: "./img/icon_1.png",
  			value: "icon1",
  			picked: true
  		 },
  		 { 
  			img: "./img/icon_2.png",
  			value: "icon2",
  			picked: false
  		 },
  		 { 
  			img: "./img/icon_3.png",
  			value: "icon3",
  			picked: false
  		 },
  		 { 
  			img: "./img/icon_4.png",
  			value: "icon4",
  			picked: false
  		 },
       { 
        img: "./img/icon_5.png",
        value: "icon4",
        picked: false
       },
       { 
        img: "./img/icon_6.png",
        value: "icon4",
        picked: false
       }
  	],

  	themes: [
  		{
  			icon: "./img/pink_theme.png",
  			value: "pinkTheme",
        picked: true
  		},
  		{
  			icon: "./img/grey_theme.png",
  			value: "greyTheme",
        picked: false
  		}
  	],

  	courses: [
  		{
  			name: "Italian",
  			img: "./img/italy_icon.png",
        completion: "28%",
        isActive: true
  		}
  	],

  	languages: [
  		{
  			name: "French",
  			taken: false
  		},
  		{
  			name: "German",
  			taken: false
  		},
  		{
  			name: "Hebrew",
  			taken: false
  		},
  		{
  			name: "Italian",
  			taken: true
  		},
  		{
  			name: "Japanese",
  			taken: false
  		},
  		{
  			name: "Korean",
  			taken: false
  		},
  		{
  			name: "Polish",
  			taken: false
  		},
  		{
  			name: "Spanish",
  			taken: false
  		},
  		{
  			name: "Vietnamese",
  			taken: false
  		}
  	]

   


}

 Vue.component('settings', {
 	template: `
      <div>
        <a href="./dashboard.html">&#60; Go Back</a>
      	<form class="general">
          <h2>General</h2>
      		<section class="icon">
      			<h3>Choose Your Icon</h3>
	     		  <label v-for="icon in icons">
					    <input type="radio" name="icon" :value="icon.value">
						  <img :src="icon.img">
					  </label>
					</section>

					<section class="username">
						<h3>Change Nickname</h3>
						<input type="text" name="username" maxlength="8">
						<p id="error-username"></p>
					</section>

					<section class="theme">
						<h3>Change Your Dashboard Theme</h3>
						<label v-for="theme in themes">
              <input type="radio" name="theme" :value="theme.value">
  						<img :src="theme.icon">
						</label>
					</section>

					<input v-on:click="saveChanges" id="save" type="button" value="Save Changes">
            	</form>

				<section class="courses">
          <h2>Courses</h2>
					<form class="swap-course">
            <div>
							<h3>Switch Courses</h3>
							<p>You can swap between courses anytime without losing your progress!</p>
							<div id="swap-course">
                <label v-for="course in courses">
  							  <input type="radio" name="course" :value="course.name">
  							  <img v-bind:src="course.img">
  							  <h4> {{course.name}} </h4>
  							</label>
              </div>
             </div> 
              <input v-on:click="swapCourse" type="button" id="switch" value="Switch Course">
					</form>

					<form class="add-course">
						<div>
							<h3>Add Another Course</h3>
							<select>
									<option v-bind:class="{ hidden: language.taken }" v-for="language in languages" :value="language.name">{{language.name}}</option>
							</select>
						</div>
						<input v-on:click="addCourse" type="button" value="Add Course">
					</form>
				</section>
    </div>
					
  			  `,

    methods:{
      saveChanges: function(){

        //CHANGING THEME
        var chosenTheme = document.querySelector('input[name="theme"]:checked').value;
        var stylesheet = document.getElementById("stylesheet");

        localStorage.setItem("style1", "css/styles.css");
        localStorage.setItem("style2", "css/styles2.css");

        if(chosenTheme == "pinkTheme"){
          stylesheet.setAttribute("href", localStorage.getItem("style1"));
        } 
        else if(chosenTheme == "greyTheme"){
          stylesheet.setAttribute("href", localStorage.getItem("style2"));
        }  
    },

    //SWAP COURSE

    swapCourse: function(){
      var chosenCourse = document.querySelector('input[name="course"]:checked').value;
        
      alert("Subject switched to " + chosenCourse + "!")

    },

    //ADD COURSE
    addCourse: function(){
        var selectedCourse = document.querySelector('select').value;
        var container = document.getElementById('swap-course');
        var currentHTML = $('#swap-course').html();

        currentHTML = currentHTML + `<label>
                                      <input type="radio" name="course" value="` + selectedCourse +`">
                                      <img src="./img/` + selectedCourse + `.png">
                                      <h4>` + selectedCourse + `</h4>
                                     </label>`;
        $(container).html(currentHTML);                    
    }
},
      data: function(){
      return data;      
    }

});

var settings = new Vue({
  el: '#settings'
})