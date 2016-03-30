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
               title: "Work Experience in Brief",
               id: "Work Experience in Brief",
               body: $sce.trustAsHtml("test?"),
               type: "normal"
            },
            {
               smWidth: "12",
               mdWidth: "12",
               title: "Projects in Breif",
               id: "Projects in Breif",
               body: $sce.trustAsHtml("test?"),
               type: "normal"
            },
            {
               smWidth: "12",
               mdWidth: "12",
               title: "Leadership and Team Experience in Brief",
               id: "Leadership and Team Experience in Brief",
               body: $sce.trustAsHtml("test?"),
               type: "normal"
            },
            {
               smWidth: "12",
               mdWidth: "12",
               title: "Interests and a bit More about me",
               id: "Interests and a bit More about me",
               body: $sce.trustAsHtml("test?"),
               type: "normal"
            },
        ],
        languages:[
            {
               smWidth: "12",
               mdWidth: "12",
               title: "Python",
               id: "python",
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
               body: $sce.trustAsHtml(
                   "<p>My experience in C++ comes primarily from my work at <a href='/experience#bluesat'>BLUEsat</a>, where for the past two plus years I have been working on code for BLUEsat's 'Mars Rover'.  </p>" +
                   "<p>This code was used at the European Rover Challenge in 2015, and has since undergone signifcant improvements. The code is available to the public on <a href='https://github.com/bluesat/owr_software'>GitHub</a>.</p>"
               ),
               type: "normal"
            },
            {
               smWidth: "12",
               mdWidth: "12",
               title: "C",
               id: "c",
               body: $sce.trustAsHtml("test?"),
               type: "normal"
            },
            {
               smWidth: "12",
               mdWidth: "12",
               title: "Java",
               id: "java",
               body: $sce.trustAsHtml("test?"),
               type: "normal"
            },
            {
               smWidth: "12",
               mdWidth: "12",
               title: "C#",
               id: "c_sharp",
               body: $sce.trustAsHtml("test?"),
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
               body: $sce.trustAsHtml("test?"),
               type: "normal"
            },
            {
               smWidth: "12",
               mdWidth: "12",
               title: "Google App Engine",
               id: "google_app_engine",
               body: $sce.trustAsHtml("test?"),
               type: "normal"
            },
            {
               smWidth: "12",
               mdWidth: "12",
               title: "Angular JS",
               id: "angular_js",
               body: $sce.trustAsHtml("test?"),
               type: "normal"
            },
            {
               smWidth: "12",
               mdWidth: "12",
               title: "Linux",
               id: "linux",
               body: $sce.trustAsHtml("test?"),
               type: "normal"
            },
            {
               smWidth: "12",
               mdWidth: "12",
               title: "Git",
               id: "git",
               body: $sce.trustAsHtml("test?"),
               type: "normal"
            },
            {
               smWidth: "12",
               mdWidth: "12",
               title: "JIRA",
               id: "jira",
               body: $sce.trustAsHtml("test?"),
               type: "normal"
            },
        ],
        experience:[
            {
               smWidth: "12",
               mdWidth: "12",
               title: "Software Development Intern at The Gingerbread Man",
               id: "tgm",
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
        languages_and_tech: {
            image : "img/LinkedinProfilePic.jpg",
            alt : "Profile image of Harry J.E Day",
            title : "Languages and Technologies",
            text : $sce.trustAsHtml(
                "<p>TODO I am a third year, computer science student at the University of New South Wales, with a strong passion for computing." +
                "Through interning and extracurricular projects, I have gained strong skills in C++, Python, and Java as well as experience in a variety of other languages and frameworks.</p>" +
                "<p>I am also an experienced leader and team player, having developed strong group skills through constant involvement in extra-curricular activities such as" +
                "scouting and student leadership. This has culminated in my position leading the software team at a student society developing a Mars Rover for international competitions.</p>"
            )
        },
        projects: {
            image : "img/LinkedinProfilePic.jpg",
            alt : "Profile image of Harry J.E Day",
            title : "Projects",
            text : $sce.trustAsHtml(
                "<p>TODO I am a third year, computer science student at the University of New South Wales, with a strong passion for computing." +
                "Through interning and extracurricular projects, I have gained strong skills in C++, Python, and Java as well as experience in a variety of other languages and frameworks.</p>" +
                "<p>I am also an experienced leader and team player, having developed strong group skills through constant involvement in extra-curricular activities such as" +
                "scouting and student leadership. This has culminated in my position leading the software team at a student society developing a Mars Rover for international competitions.</p>"
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

