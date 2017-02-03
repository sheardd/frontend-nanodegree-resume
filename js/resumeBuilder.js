var name = 'Dave Sheard';
var role = 'Full Stack Developer';
var contactNumber = '+44354873521';
var email = 'david.sheard@hotmail.com'
var imageURL = 'images/fry.jpg';
var skills = ['here', 'are', 'some', 'skills']

var bio = {
	'name': HTMLheaderName.replace('%data%', name),
	'role': HTMLheaderRole.replace('%data%', role),
	'mobile': HTMLmobile.replace('%data%', contactNumber),
	'email': HTMLemail.replace('%data%', email),
	'image': HTMLbioPic.replace('%data%', imageURL),
	'welcome': HTMLwelcomeMsg.replace('%data%', 'Welcome To Me.'),
	'skills': skills
}

var work = {
	'jobs': [
		{
			'role': HTMLworkTitle.replace('%data%', 'Full Stack Developer'),
			'employer': HTMLworkEmployer.replace('%data%', 'Self-Employed'),
			'years' : HTMLworkDates.replace('%data%', '2016-present'),
			'city' : HTMLworkLocation.replace('%data%', 'Hampshire'),
			'desc' : HTMLworkDescription.replace("%data%", "Endless Googling of why things don't work")
		},
		{
			'role': HTMLworkTitle.replace('%data%', 'Waiter'),
			'employer': HTMLworkEmployer.replace('%data%', 'Mettricks Tea & Coffee'),
			'years' : HTMLworkDates.replace('%data%', '2016-present'),
			'city' : HTMLworkLocation.replace('%data%', 'Hampshire'),
			'desc' : HTMLworkDescription.replace("%data%", "Explaining to people why their food isn't ready and why their latte isn't hot enough")
		}
	]
};

var edu = {
	'schools': [
		{
			'name': HTMLschoolName.replace("%data%", "King's College"),
			'years': HTMLschoolDates.replace('%data%', '2010-2014'),
			'city': HTMLschoolLocation.replace('%data%', 'London'),
			'degree': HTMLschoolDegree.replace('%data%', '2:1'),
			'subj': HTMLschoolMajor.replace('%data%', 'Spanish')
		},
		{
			'name': HTMLschoolName.replace('%data%', 'Truro College'),
			'years': HTMLschoolDates.replace('%data%', '2005-2007'),
			'city': HTMLschoolLocation.replace('%data%', 'Truro'),
			'degree': HTMLschoolDegree.replace('%data%', 'A, B, C, Distinction'),
			'subj': HTMLschoolMajor.replace('%data%', 'Spanish, English Lit, Music, Music Performance')
		}
	],
	'online': [
		{
			'name': HTMLonlineSchool.replace('%data%', 'Udacity'),
			'years': HTMLonlineDates.replace('%data%', '2016-present'),
			'city': HTMLonlineURL.replace('%data%', 'https://www.udacity.com/'),
			'subj': HTMLonlineTitle.replace('%data%', 'FSND')
		},
		{
			'name': HTMLonlineSchool.replace('%data%', 'Udacity'),
			'years': HTMLonlineDates.replace('%data%', '2016'),
			'city': HTMLonlineURL.replace('%data%', 'https://www.udacity.com/'),
			'subj': HTMLonlineTitle.replace('%data%', 'IPND')
		}
	]
};

var projects = {
	'opticgait': [
		{
			'name': HTMLprojectTitle.replace("%data%", "The Girls' Lounge"),
			'dates': HTMLprojectDates.replace('%data%', '2016'),
			'desc': HTMLprojectDescription.replace('%data%', 'some work I did.'),
			'image': HTMLprojectImage.replace('%data%', 'http://thegirlslounge.com/wp-content/uploads/logo-thegirlslounge.png')
		},
		{
			'name': HTMLprojectTitle.replace("%data%", "Performance Physiotherapy and Yoga"),
			'dates': HTMLprojectDates.replace('%data%', '2016'),
			'desc': HTMLprojectDescription.replace('%data%', 'some other work I did.'),
			'image': HTMLprojectImage.replace('%data%', 'https://www.performancephysioandyoga.com/wp-content/uploads/2016/09/ppy-logo-940sq.png')
		}
	]
};

projects.display = function() {
	projects.opticgait.forEach(function(project) {
		$('#projects').append(HTMLprojectStart);
		$('.project-entry:last').append(project.name);
		$('.project-entry:last').append(project.dates);
		$('.project-entry:last').append(project.desc);
		$('.project-entry:last').append(project.image);
	});
};

function displayWork(){
	$('#header').prepend(bio.welcome);
	$('#header').prepend(bio.role);
	$('#header').prepend(bio.name);
	$('#header').prepend(bio.image);
	$('#topContacts').append(bio.email);
	$('#topContacts').append(bio.mobile);
	$('#main').append(internationalizeButton);
	/*$('#header').append(HTMLskillsStart);
	for (i = 0; i < bio.skills.length; i++) {
		var skill = HTMLskills.replace('%data%', bio.skills[i]);
		$('#skills').append(skill);
	}
	$('#education').append(HTMLschoolStart);
	$('.education-entry').append(edu.schools[0].name);
	$('#workExperience').append(HTMLworkStart);
	$('.work-entry').append(work.jobs[0]['role']);
	$('.work-entry').append(work.jobs[1]['role']);*/

	if (bio.hasOwnProperty('skills')) {
		$('#header').append(HTMLskillsStart);
		for (i = 0; i < bio.skills.length; i++) {
			var skill = HTMLskills.replace('%data%', bio.skills[i]);
			$('#skills').append(skill);
		}
	}

	for (job in work.jobs) {
		$('#workExperience').append(HTMLworkStart);
		var jobInfo = work.jobs[job].employer + work.jobs[job].role;
		$('.work-entry:last').append(jobInfo);
		$('.work-entry:last').append(work.jobs[job].years);
		$('.work-entry:last').append(work.jobs[job].city);
		$('.work-entry:last').append(work.jobs[job].desc);
	}
	projects.display();
}

displayWork();