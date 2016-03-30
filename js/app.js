var app = angular.module('cv', ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
  
  $routeProvider
    .when('/:page', {
      controller:'DefaultViewController',
      templateUrl:'templates/normal.html',
    })
    .otherwise({
      redirectTo:'/home'
    });
    
    $locationProvider.html5Mode(true);
})

app.directive('cvNormalBlurb',  function() {
    return {
        restrict: 'E', //html elements only
        scope: {
            smWidth : "=smWidth",
            mdWidth : "=mdWidth",
            title   : "=title",
            body    : "=body",
            image   : "=image"
        },
        templateUrl: function(elem, attr) {
            return "components/normalBlurb.html";
        }
    };
});

app.directive('cvImageBlurb',  function() {
    return {
        restrict: 'E', //html elements only
        scope: {
            smWidth : "=smWidth",
            mdWidth : "=mdWidth",
            title   : "=title",
            body    : "=body",
            images   : "=images",
        },
        templateUrl: function(elem, attr) {
            return "components/imageBlurb.html";
        }
    };
});


app.controller('Main', ['$scope','$rootScope','$routeParams', function($scope,$rootScope,$routeParams) {
    $scope.page = $routeParams.page;
    console.log($scope.page);
    $scope.$watch(function() {
            return $routeParams.page;
        },
        function() {
            $scope.page = $routeParams.page;
            console.log($scope.page);
        }
    );
}]);

app.controller('DefaultViewController', ['$scope','$rootScope','$routeParams','$sce', function($scope,$rootScope,$routeParams,$sce) {
    
    //Data structure to hold the different pages, ideally this would be in a database or hooked up to an api
    //But there isn't enought time for me to code that
    PAGES = {
        home: [
            {
               smWidth: "12",
               mdWidth: "4",
               title: "Strongest Langauges",
               id: "Strongest Langauges",
               body: $sce.trustAsHtml("test?"),
               type: "image",
               images: [
                    {
                        alt: "C++",
                        src: "img/languages/C_plus_plus.png",
                        href: "/languages#c_plus_plus"
                    },
                    {
                        alt: "java",
                        src: "img/languages/Java.png",
                        href: "/languages#java"
                    },
                    {
                        alt: "C",
                        src: "img/languages/C.png",
                        href: "/languages#c"
                    },
                    {
                        alt: "Python",
                        src: "img/languages/Python.png",
                        href: "/languages#python"
                    },
                    {
                        alt: "C#",
                        src: "img/languages/C_Sharp.png",
                        href: "/languages#c_sharp"
                    }
               ]
            },
            {
               smWidth: "12",
               mdWidth: "4",
               title: "Technologies",
               id: "Technologies",
               body: $sce.trustAsHtml("test?"),
               type: "image",
               images: [
                    {
                        alt: "ROS",
                        src: "img/technologies/ros.jpg",
                        href: "/technologies#ros"
                    },
                    {
                        alt: "Google App Engine",
                        src: "img/technologies/GoogleCloudPlatform.png",
                        href: "/technologies#google_app_engine"
                    },
                    {
                        alt: "Angular JS",
                        src: "img/technologies/AngularJS.png",
                        href: "/technologies#angular_js"
                    },
                    {
                        alt: "Linux",
                        src: "img/technologies/Linux.jpg",
                        href: "/technologies#linux"
                    },
                    {
                        alt: "Git",
                        src: "img/technologies/Git.png",
                        href: "/technologies#git"
                    },
                    {
                        alt: "JIRA",
                        src: "img/technologies/JIRA.jpg",
                        href: "/technologies#jira"
                    }
               ]
            },
            {
               smWidth: "12",
               mdWidth: "4",
               title: "Me on the Web",
               id: "Me on the Web",
               body: $sce.trustAsHtml("test?"),
               type: "image",
               images: [
                    {
                        alt:  "Github",
                        src:  "img/social_media/Github.png",
                        href: "https://github.com/hjed"
                    },
                    {
                        alt:  "Linkedin",
                        src:  "img/social_media/Linkedin.png",
                        href: "https://www.linkedin.com/in/harryjeday/"
                    }
               ]
            },
            {
               smWidth: "12",
               mdWidth: "12",
               title: "Key Experience in Breif",
               id: "key_experience",
               body: $sce.trustAsHtml(
                   "<h4>March 2015 – Present</h4>"+
                   "<a href='/experience#tutor'>Academic Tutor at UNSW School of Computer Science and Engineering</a><br/>"+
                   "<h4>Oct 2014 – Present</h4>"+
                   "<a href='/experience#bluesat'>Lead Software Developer at BLUEsat UNSW, Off-World Robotics Team</a><br/>"+
                   "<h4>Oct 2014 – Present</h4>"+
                   "<a href='/experience#tgm'>Software Development Intern at The Gingerbread Man</a><br/>"+
                   "<h4>Feb 2014 – Present</h4>"+
                   "<a href='/experience#syc'>State Youth Council PatrolLeader at Scouts Australia, NSW Branch</a>"
               ),
               type: "normal"
            },
            {
               smWidth: "12",
               mdWidth: "12",
               title: "Education in Breif",
               id: "education",
               body: $sce.trustAsHtml(
                   "<h4>The University of New South Wales</h4>"+
                   "<em>Bachelor's Degree, Computer Science, 2014 - 2016</em><br/>"+
                   "<ul>"+
                   "<li>High Distinctions in Computing 1, Computing 2, and Engineering Design</li>"+
                   "<li>WAM of 71.3</li>"+
                   "</ul>"+
                   "<h4>Ku-ring-gai Creative Arts High School</h4>"+
                   "<em>High School Certificate, 2008 - 2013</em>"+
                   "<ul>"+
                   "<li>Academic Achievements:"+
                   "<ul><li>ATAR: 93.15</li>"+
                   "<li>Mark of 95 in HSC Software Design Development.</li>"+
                   "<li>Topped school in Software Design Development, Physics, English Extension 1, and English Extension 2.</li>"+
                   "</ul></li>"+
                   "<li>Student Leadership"+
                   "<li>School Prefect 2013.</li>"+
                   "<li>SRC Representative 2010 to 2012.</li>"+
                   "<li>Coached the school programming team in year 12.</li>"+
                   "</ul></li>"+
                   "</li>"
               ),
               type: "normal"
            }
        ],
        languages:[
            {
               smWidth: "12",
               mdWidth: "12",
               title: "Python",
               id: "python",
               image : "/img/languages/Python.png",
               body: $sce.trustAsHtml(
                   "<p>I have signifcant experience in Python, primarily through my internship at <a href='/experience#tgm'>The Gingerbread Man</a> but have also done some experimentation in my own time</p>" +
                   "<p>Signifcant Python projects include:</p>"+
                   "<ul>"+
                   "<li>Ongoing work on the backend of a large location based mobile application hosted on Google App Engine. The application is designed to handle more than 1M users under normal load, and the code base is approxmiatly 15K lines.</li>"+
                   "<li>Developing a CMS designed for a top ten real-estate website which was also hosted on Google App Engine, with a backend written in Python</li>"+
                   "<li>As a personal project I started developing a system to keep track of qualifications and contact details for my Scout group. The project is currently stalled as I haven't had time to work on it, but the code can be found <a href='https://github.com/hjed/crewManager'>here</a>.</li>"+
                   "</ul>"
               ),
               type: "normal"
            },
            {
               smWidth: "12",
               mdWidth: "12",
               title: "C++",
               id: "c_plus_plus",
               image : "/img/languages/C_plus_plus.png",
               body: $sce.trustAsHtml(
                   "<p>My experience in C++ comes primarily from my work at <a href='/experience#bluesat'>BLUEsat</a>, where for the past two plus years I have been working on code for BLUEsat's 'Mars Rover'. As team lead for BLUEsat I have also trained others in C++, helping me gain a very strong understanding of the language. </p>" +
                   "<p>This code was used at the European Rover Challenge in 2015, and has since undergone signifcant improvements. The code is available to the public on <a href='https://github.com/bluesat/owr_software'>GitHub</a>.</p>"
               ),
               type: "normal"
            },
            {
               smWidth: "12",
               mdWidth: "12",
               title: "C",
               id: "c",
               image : "/img/languages/C.png",
               body: $sce.trustAsHtml(
                   "<p>C is the primary language used for courses at UNSW, meaning I have gained significant experience with it. This experience includes two C courses where I gained HDs.</p>"+
                   "<p>I also have gained a lot of experience in C from  <a href='/experience#tutor'>tutoring</a> at UNSW. Teaching C has given me a very strong understanding of the language and a strong focus on style. It has also exposed me to some rather obscure language features and weird syntax, that has significantly improved my ability to debug code.</p>"
               ),
               type: "normal"
            },
            {
               smWidth: "12",
               mdWidth: "12",
               title: "Java",
               id: "java",
               image : "/img/languages/Java.png",
               body: $sce.trustAsHtml(
                   "<p>After HTML, Java was the first language I learnt when I started teaching myself programing in year three of primary school. Consequently I have made a lot of mistakes in Java and as a result I am very familiar with its syntax and language features.</p>"
               ),
               type: "normal"
            },
            {
               smWidth: "12",
               mdWidth: "12",
               title: "C#",
               id: "c_sharp",
               image : "/img/languages/C_Sharp.png",
               body: $sce.trustAsHtml(
                   "<p>C# has been a recent adition to my language set, although its similarity to Java has made it very easy to learn. I have primarily used C# at my internship with <a href='/experience#tgm'>The Gingerbread Man</a> to assist in a number of Unity 3D projects. These include an advertising instalation at Circular Quay and a small amount of work (mainly interfacing with the Python backend system) on a multiplayer mobile game.</p>"
               ),
               type: "normal"
            },
            {
               smWidth: "12",
               mdWidth: "12",
               title: "Currently Learning",
               id: "currently_learning",
               body: $sce.trustAsHtml(
                   "<p>I am currently in the process of learning three languages:</p>"+
                   "<ul>"+
                   "<li>OpenCL - As part of my work at <a href='/experience#bluesat'>BLUEsat</a> I have been teaching myself OpenCL to help develop real time 3D modeling capabilities in our user interface. My experience in this language is still in the early stages.</li>" +
                   "<li>Haskell - As part of one of my courses at uni this semester I am learning Haskell. I am finding functional programing quite interesting and may continue learning this after completing the course.</li>" +
                   "<li>Prolog - I am currently learning Prolog as part of a course on Artificial Intelegence this semester.</li>" +
                   "</ul>"
               ),
               type: "normal"
            },
            {
               smWidth: "12",
               mdWidth: "12",
               title: "Some Experience With",
               id: "some_experience_with",
               body: $sce.trustAsHtml(
                   "<p>As well as the above mentioned languages I also have undertaken small projects in the following languages:</p>" +
                   "<ul>"+
                   "<li>Perl - I completed a number of CGI tasks and other excersises for COMP2041 in Semester 2, 2014</li>" +
                   "<li>PHP - I have made contributions to PHP codebases both through my intership at <a href='/experience#tgm'>The Gingerbread Man</a> and through messing around with tools like wordpress. I developed the wordpress theme used for <a href='http://bluesat.com.au/'>BLUEsat's website</a>.</li>" +
                   "<li>Visual Basic - As part of the HSC course in Software Design Development I developed a number of applications, including a small catapult game in Visual Basic. I recived a HSC mark of 95 in this course.</li>" +
                   "<li>Pascal - Also as part of HSC Software Design Development I did a small number of assignments in Pascal</li>" +
                   "</ul>"
               ),
               type: "normal"
            },
        ],
        technologies:[
            {
               smWidth: "12",
               mdWidth: "12",
               title: "ROS",
               id: "ros",
               image : "/img/technologies/ros.jpg",
               body: $sce.trustAsHtml(
                   "<p>Robotics Operating System (ROS) is a standardised framework used to code robotic systems (It is also NOT an OS). Since the begining of 2014 I have gained extensive experience with this framework throught my work at <a href='/experience#bluesat'>BLUEsat</a>  and have also since completed a course in Robotics Software Architecture that uses this framework.</p>"+
                   "<p>I am currently responsible for managing the software team at BLUEsat so as well as experience writing code for ROS I have also gained experience designing ROS systems and training others in the framework.</p>"
               ),
               type: "normal"
            },
            {
               smWidth: "12",
               mdWidth: "12",
               title: "Google App Engine",
               id: "google_app_engine",
               image : "/img/technologies/GoogleCloudPlatform.png",
               body: $sce.trustAsHtml(
                   "<p>My work at <a href='/experience#tgm'>The Gingerbread Man</a> has provided me with significant experience using Google App Engine, and related technologies such as NDB, Jinja and Google Cloud Endpoints.</p>"+
                   "<p>Major projects include:</p>"+
                   "<ul>"+
                   "<li>Ongoing work on the backend of a large location based mobile application hosted on Google App Engine. The application is designed to handle more than 1M users under normal load, and the code base is approxmiatly 15K lines.</li>"+
                   "<li>Developing a CMS designed for a top ten real-estate website which was also hosted on Google App Engine, with a backend written in Python</li>"+
                   "<li>As a personal project I started developing a system to keep track of qualifications and contact details for my Scout group. The project is currently stalled as I haven't had time to work on it, but the code can be found <a href='https://github.com/hjed/crewManager'>here</a>. Please note that I have since learned a lot more about writing scalable applications and there are parts of this code that are seriously flawed.</li>"+
                   "</ul>"
               ),
               type: "normal"
            },
            {
               smWidth: "12",
               mdWidth: "12",
               title: "Angular JS",
               id: "angular_js",
               image : "/img/technologies/AngularJS.png",
               body: $sce.trustAsHtml(
                   "My skills in Angular JS have also been primarily developed through my internship at <a href='/experience#tgm'>The Gingerbread Man</a>; however you can also see them in this site, the code for which can be found <a href='https://github.com/hjed/cv-website.git'>on GitHub.</a></p>"
               ),
               type: "normal"
            },
            {
               smWidth: "12",
               mdWidth: "12",
               title: "Linux",
               id: "linux",
               image : "/img/technologies/Linux.jpg",
               body: $sce.trustAsHtml(
                   "<p>I started using linux in year 7 of high school, and it has been my primary OS since 2013 (However I still use a Windows laptop for taking notes and a few other programs that don't run well in WINE). I am very familiar with Linux environments, and am confident using the terminal. I have experience writting bash scripts, fidling with X-Windows and fixing broken package systems.</p>" +
                   "<p>I have also experimented with things like setting up apache and samba servers, and have a deep understanding of how linux systems work.</p>"
            ),
               type: "normal"
            },
            {
               smWidth: "12",
               mdWidth: "12",
               title: "Git",
               id: "git",
               image : "/img/technologies/Git.png",
               body: $sce.trustAsHtml(
                   "<p>I have a lot of experience using git, having used it for a large number of projects on both Bitbucket and Github. My key learning experiences has been through <a href='/experience#bluesat'>BLUEsat</a> where I manage a git repositary with a large number of active contributors, that uses feature branches.</p>"+
                   "<p>I also have experience using git (and Bitbucket) for devleopment of comercial projects from my work at <a href='/experience#tgm'>The Gingerbread Man</a>, and have used git repos for a large number of group assignments. I am someone that my friends and coworkers go to for help when the git repo is 'broken'.</p>"
               ),
               type: "normal"
            },
            {
               smWidth: "12",
               mdWidth: "12",
               title: "JIRA",
               id: "jira",
               image : "/img/technologies/JIRA.jpg",
               body: $sce.trustAsHtml(
                   "<p>I have significant experience using JIRA (and Confluence) both through <a href='/experience#bluesat'>BLUEsat</a> where I manage a JIRA project with 12 active developers, and through my work at <a href='/experience#tgm'>The Gingerbread Man</a>.<p>"+
                   "<p>I have also helped train people to use JIRA effectively at both these locations, and at BLUEsat I managed the OWR Software team's transition from GitHub's very basic issue management system to JIRA and Confluence. </p>" 
               ),
               type: "normal"
            },
        ],
        experience:[
            {
               smWidth: "12",
               mdWidth: "12",
               title: "Software Development Intern at The Gingerbread Man",
               id: "tgm",
               image : "/img/logos/tgm.png",
               body: $sce.trustAsHtml(
                   "Member of a six-person development team, working in technologies including Unity, C#, Python, PHP, and WordPress. Major projects include:</p>"+
                   "<ul>" +
                   "<li>Ongoing work on a large location based mobile application using Unity and Google App Engine (14K lines code base). Including being the primary developer on the server architecture. </li>" +
                   "<li>The Google App Engine based backend of an application interfacing with social media APIs.</li>" +
                   "<li>Developing a CMS designed for a top ten real-estate website using Google App Engine, and Angular JS.</li>" +
                   "</ul>"
                ),
               type: "normal"
            },
            {
               smWidth: "12",
               mdWidth: "12",
               title: "Software Team Lead at BLUEsat UNSW, Off-World Robotics Division",
               id: "bluesat",
               image : "/img/logos/bluesat.png",
               body: $sce.trustAsHtml(
                   "<p>Working as a senior member of the BLUEsat OWR team to develop a Mars Rover to compete in the European Rover Challenge (ERC).</p>" +
                   "<ul>" +
                   "<li>The team placed 15th out of 40 teams at the 2015 ERC in Poland.</li>" +
                   "<li>Responsible for software related task allocation and documentation, managed using Atlassian JIRA and Confluence. </li>" +
                   "<li>Oversaw a successful transition to agile methodology.</li>" + 
                   "<li>Managed the growth of the software team from 4 to 12 developers.</li>" +
                   "<li>Significant contribution to the project’s C++ and Python code base.</li>" +
                   "<li>Significant contribution to the design of the software systems.</li>" +
                   "</ul>"
               ),
               type: "normal"
            },
            {
               smWidth: "12",
               mdWidth: "12",
               title: "Academic Tutor at UNSW Australia",
               id: "tutor",
               image : "/img/logos/unsw.png",
               body: $sce.trustAsHtml(
                   "<p>University tutor for three semesters, teaching classes that consist of a one-hour tutorial followed by a two-hour lab.</p>" +
                   "<ul>" +
                   "<li>" +
                   "Semester 1, 2015" +
                   "<ul>" +
                   "<li>2x Computing 1A</li>" +
                   "<li>1x Assistant Tutor in Computing 1 (Volunteer Role)</li>" +
                   "</ul>" +
                   "</li>" +
                   "<li>" +
                   "Semester 2, 2015" +
                   "<ul>" +
                   "<li>2x Computing 2</li>" +
                   "</ul>" +
                   "</li>" +
                   "<li>" +
                   "Semester 1, 2016" +
                   "<ul>" +
                   "<li>1x Computing 1</li>" +
                   "</ul>" +
                   "</li>" +
                   "</ul>"
               ),
               type: "normal"
            },
            {
               smWidth: "12",
               mdWidth: "12",
               title: "Patrol Leader at Scouts Australia, NSW Branch State Youth Council (SYC)",
               id: "syc",
               image : "/img/logos/syc.jpg",
               body: $sce.trustAsHtml(
                   "<ul>" +
                   "<li>On the organising team for four successful State Youth Council biannual conferences.</li>" +
                   "<li>Responsible for organising regular teleconferences, and managing patrol workload.</li>" +
                   "</ul>"
               ),
               type: "normal"
            },
            {
               smWidth: "12",
               mdWidth: "12",
               title: "Topic Team Leader for Stage Three of Scouts Australia's Youth Program Review (YPR)",
               id: "ypr",
               image : "/img/logos/scouts.png",
               body: $sce.trustAsHtml(
                   "<p>Responsible for leading one of the eight, ten-person topic teams working on stage three of Scouts Australia’s Youth Program Review.</p>" +
                   "<ul>"+
                   "<li>Team was responsible for researching and reporting on the Scout Method.</li>" + 
                   "<li> Responsible for co-ordinating with other teams across Australia. </li>" +
                   "<li>Working with member of the association to identify needed change.</li>" +
                   "<li>Findings presented to National Youth Program Team, the Chief Commissioner of Scouts Australia, and Chief Commissioners from a number of state branches.</li>"
               ),
               type: "normal"
            },
            {
               smWidth: "12",
               mdWidth: "12",
               title: "Treasurer at The Security Society of UNSW",
               id: "secsoc",
               image : "/img/logos/secsoc.png",
               body: $sce.trustAsHtml(
                   "<ul>" +
                   "<li>Active in getting the society up and runng again.</li>" +
                   "<li>Responsible for managing the society budget and bank account.</li>"+
                   "</ul>"
               ),
               type: "normal"
            },
        ]
    };
    
    page = $routeParams.page;
    console.log(page);
    $scope.elements = PAGES[page];
    console.log($scope.elements);
    
}]);

app.controller('pageSummary', ['$scope','$rootScope','$sce','$routeParams', function($scope,$rootScope,$sce, $routeParams) {
    
    PAGE_SUMMARIES = {
        home: {
            image : "img/LinkedinProfilePic.jpg",
            alt : "Profile image of Harry J.E Day",
            title : "Harry J.E Day",
            text : $sce.trustAsHtml(
                "<p>I am a third year, computer science student at the University of New South Wales, with a strong passion for computing." +
                "Through interning and extracurricular projects, I have gained strong skills in C++, Python, and Java as well as experience in a variety of other languages and frameworks.</p>" +
                "<p>I am also an experienced leader and team player, having developed strong group skills through constant involvement in extra-curricular activities such as" +
                "scouting and student leadership. This has culminated in my position leading the software team at a student society developing a Mars Rover for international competitions.</p>"
            )
        },
        languages: {
            image : "img/iceClimb.jpg",
            alt : "Image of Harry J.E Day Ice Climbing at Blue Lake",
            title : "Languages",
            text : $sce.trustAsHtml(
                "<p>I am competent in a wide range of languages (listed below), having gained experience through extra-ciricular projects, interning and course work. I am also a keen learner and am always looking to learn new and interesting technologies.</p>" 
            )
        },
        technologies: {
            image : "img/BLUEsatRover.jpg",
            alt : "Profile image of Harry J.E Day",
            title : "Technologies",
            text : $sce.trustAsHtml(
                "<p>I regularly experiment and look for new technologies to learn. From the robotics technologies I have learnt at BLUEsat to the web and cloud technologies I have learnt at The Gingerbread Man, and everything in between I have gained strong experience in working with a wide range of different platforms and frameworks</p>"
        
            )
        },
        experience: {
            image : "img/syc.jpg",
            alt : "Profile image of Harry J.E Day",
            title : "Experience and Major Projects",
            text : $sce.trustAsHtml(
                "<p>As well as interning at The Gingerbread Man, where I have gained a strong software development skill set and experience working in a comerical environment," +
                "I have gained experience through a large number of extra-curicular activities. These including heading the Software Team at BLUEsat's Off World Robotics division, leading one of two teams at the Scouts NSW, State Youth Council, and being one of eight team leaders for a major stage of Scout's Australia's Youth Program Review.</p>"
            )
        }
    };
    
    page = $routeParams.page;
    if(page == "") {
        page = "home";
    } else if(PAGE_SUMMARIES[page] == undefined) {
        page = "home";
    }
    
    
    
    $scope.image =  PAGE_SUMMARIES[page]["image"];
    $scope.alt   =  PAGE_SUMMARIES[page]["alt"];
    $scope.title =  PAGE_SUMMARIES[page]["title"];
    $scope.text  =  PAGE_SUMMARIES[page]["text"];
}]);

app.controller('imageBlurb', ['$scope','$rootScope','$window', function($scope,$rootScope,$window) {
    
}]);

