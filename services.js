const express = require('express'),
	app = express(),
	port = 3022,
	router = express.Router(),
	bodyParser = require('body-parser'),
	path = require('path'),
	compress = require('compression'),
	imagemin = require("imagemin"),
	webp = require("imagemin-webp");
	outputFolder = "./public/assets/images",
	JPEGImages = './public/assets/images/*.jpg';
	imagemin([JPEGImages], outputFolder, {
		plugins: [webp({
		  quality: 85 
		})]
	  }); 
app.use(compress({
    threshold: 0,
    filter: function(req, res) {
        var ct = res.get('content-type')
        return true
    }
}));
router.get('/', function(req,res,next){
	res.render('index')
})
router.get('/introduce', function (req, res, next) {
	res.json([
		{
			id: 1,
			icon: "fa fa-star",
			title: "MISSION",
			des: "Our mission is our name (KOLABS). To build great companies we must collaborate to innovate."
		},
		{
			id: 2,
			icon: "fa fa-user",
			title: "WE DON'T HAVE CLIENTS NOR DO WE WANT ANY",
			des: "We are self funded and well backed by our group of angel investors who share in our vision."
		},
		{
			id: 3,
			icon: "fa fa-heart",
			title: "JOIN KOLABS",
			des: "To be apart of the KoLab team means you have a company working for you not the other way around. We focus on internal development that continues throughout your career."
		}

	]);
})
router.get('/working', function (req, res, next) {
	res.json([{
			id: 1,
			des: "Performance appraisals TWICE per year"
		},
		{
			id: 2,
			des: "Laptop with wireless connection for flexibility"
		},
		{
			id: 3,
			des: "Monthly BONUS based on performance and 13th month salary"
		},
		{
			id: 4,
			des: "Agile and international environment (USA)"
		},
		{
			id: 5,
			des: "Company trip, health check-up, English club and exciting team building activities"
		},
		{
			id: 6,
			des: "At KOLABS you will be challenged and developed – talented employees are the key to our success"
		}

	]);
})
router.get('/skill', function (req, res, next) {
	res.json([{
			id: "1",
			img:"assets/images/skill_net.jpg",
			webp:"assets/images/skill_net.webp",
			title:".NET",
			des: "The .NET framework is a software framework designed mainly for the Microsoft Windows OS"
		},
		{
			id: "2",
			img:"assets/images/skill_react.jpg",
			webp:"assets/images/skill_react.webp",
			title:"REACT JS",
			des: "ReactJS basically is an open-source JavaScript library which is used for building user interfaces specifically for single page applications"
		},
		{
			id: "3",
			title:"SQL",
			img:"assets/images/skill_sql.jpg",
			webp:"assets/images/skill_sql.webp",
			des: "Structured Query Language (SQL) is a language for querying databases."
		},
		{
			id: "4",
			title:"MVC",
			img:"assets/images/skill_mvc.jpg",
			webp:"assets/images/skill_mvc.webp",
			des: "MVC is an architectural pattern that separates an application into three main logical components."
		},
	])
})
router.get('/feedback', function (req, res, next) {
	res.json([{
			id: "1",
			content:"CEO is friendly, supportive and open-minded to staff's ideas. Colleagues are super hilarious. Has flexibility, remote-working-mode,laptop which can be bring home. No restriction of surfing internet, youtube,facebook on working time. Staff even can take a short sleep if they feel tired.Free English class after working time, 4 times/week, nice female teacher",
			name:"Huy Phan",
			img:"assets/images/huyphan.jpg",
			webp:"assets/images/huyphan.webp",
			comment: "Nice boss, friendly and flexible work enviroment"
		},
		{
			id: "2",
			content:"Great enviroment, great colleagues and capable, work fun and help each other, weekly lunch treat our boss, monthly movie and party,...",
			name:"Nhut Chau",
			img:"assets/images/nhatcm.jpg",
			webp:"assets/images/nhatcm.webp",
			comment: "Great company, great teams, great jobs"
		},
		{
			id: "3",
			content:"You are a part of your project. Great co-worker have good knowledge, good place to show your ability. I absolutely happy with all of things i have: environment, co-worker...",
			name:"Hoa Hoang",
			img:"assets/images/hoahoang.jpg",
			webp:"assets/images/hoahoang.webp",
			comment: "Great job, great team, great company"
		},
		{
			id: "4",
			content:"Đồng nghiệp tuyệt vời, làm việc với nhau vui vẻ, giúp đỡ lần nhau, có năng lực, boss chiêu đãi ăn trưa mỗi tuần, party, xem phim....",
			name:"Hieu Nguyen",
			img:"assets/images/hieunguyen.jpg",
			webp:"assets/images/hieunguyen.webp",
			comment: "Awesome from co-worker to boss"
		},
	])
})
router.get('/career', function (req, res, next) {
	res.json([{
			id: "1",
			classes:"modalNodejs",
			title:"Front-end Developer (Nodejs or React)",
			des:"If you're a Front-end Developer looking for a career opportunity, please read on!",
			img:"assets/images/nodejs.jpg",
			webp:"assets/images/nodejs.webp",
		},
		{
			id: "2",
			classes:"modalDotNet",			
			title:".NET Developer",
			des:"If you're a .NET Developer looking for a career opportunity, please read on!",
			img:"assets/images/Microsoft_NET.jpg",
			webp:"assets/images/Microsoft_NET.webp",
		},
		{
			id: "3",
			classes:"openModalQC",						
			title:"Quality Control Engineer",
			des:"If you're a Quality Control Engineer looking for a career opportunity, please read on!",
			img:"assets/images/career_manager.jpg",
			webp:"assets/images/career_manager.webp",
		},
	])
})
router.get('/choose', function (req, res, next) {
	res.json([{
			id: "1",
			title:"Professional & Friendly Working Enviroment",
			body:"The Founders have only one philosophy when piecing together the team at KoLabs. Concentrate on hiring the most passionate of people and greatness will follow. The focus is placed on the team and not the projects here at KoLabs.",
		},
		{
			id: "2",
			title:"Lastest Web/Mobile Technologies",
			body:"Being on the cutting edge is what is required to be relevant in the ever changing world of tech. If you are not learning something new each day or being challenged, then you are at the wrong company and following the wrong leader.",
		},
		{
			id: "3",
			title:"Attractive Salary And Benefits",
			body:"We adopt a management consulting firm promotion structure here. We believe in promoting whenever the person has stepped up and is ready, not just when a gap needs to be filled.",
		},
		{
			id: "4",
			title:"Fast Delivery",
			body:"Be agile! Everyone has a role in the company laboratory machine that is KoLab. Keep everyone on their feet and you will be amazed on what we can accomplish together.",
		},
		
	])
})
router.get('/info', function (req , res, next){
	res.json([
		{
			id:"1",
			icon:"fa fa-phone",
			detail:"+84 8 6685 2648",
			title:"CALL US"
		},
		{
			id:"2",
			icon:"fa fa-envelope",
			detail:"ltran@kolabs.co",
			title:"EMAIL ADDRESS"
		},
		{
			id:"3",
			icon:"fa fa-map-marker",
			detail:"5 Dong Da, Wrd 2, Tan Binh Dist",
			title:"OFFICE LOCATION"
		},
		{
			id:"4",
			icon:"fa fa-clock-o",
			detail:"Monday-Friday 9.00-18.00",
			title:"WORKING HOURS"
		}
	])
})
router.get('/aside', function (req , res, next){
	res.json([
		{
			id:"1",
			classes:"section-about",
			name:"ABOUT",
		},
		{
			id:"2",
			classes:"section-working",
			name:"WHY US",
		},
		{
			id:"3",
			classes:"section-skill",
			name:"SKILL",
		},
		{
			id:"4",
			classes:"section-whyChoose",
			name:"WHY CHOOSE",
		},
		{
			id:"5",
			classes:"section-feedback",
			name:"FEEDBACK",
		},
		{
			id:"6",
			classes:"section-team",
			name:"TEAM",
		},
		{
			id:"7",
			classes:"section-career",
			name:"CAREERS",
		},
		{
			id:"8",
			classes:"footer__info",
			name:"CONTACT US",
		},
	])
})
router.get('*', function(req, res, next) {
	if(res.status != 200)
	{
		res.redirect('/')
	}
  });
app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

app.use(bodyParser.json());
app.set('views', __dirname + '/views')
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, '/public')));
app.use(express.static(__dirname + '/public'));
app.use(router)
module.exports = {
	router
}
app.listen(port, () => console.log(`Listening on port ${port}`));