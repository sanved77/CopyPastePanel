const panels = {
    linkPanel : {
        label: 'Links',
        tabs : [
            {
                label: 'LinkedIn',
                picture: 'fab fa-linkedin',
                text: 'https://www.linkedin.com/in/sanved/',
                color: '#2867B2'
            },
            {
                label: 'GitHub',
                picture: 'fab fa-github',
                text: 'https://github.com/sanved77',
                color: '#000'
            },
            {
                label: 'Sanved',
                picture: 'far fa-user',
                text: 'http://sanved.com/',
                color: '#254c73'
            },
            {
                label: 'Play',
                picture: 'fab fa-google-play',
                text: 'https://play.google.com/store/apps/developer?id=SanWade',
                color: '#45c0c3'
            }
        ]
    },
    jobsPanel : {
        label: 'Jobs',
        tabs : [
            {
                label: 'Binghamton',
                picture: 'fas fa-school',
                text: '- Reduced manual computation by 90% by developing Android and iOS apps for telemedicine using Java and Swift in Android Studio and Xcode, that led to 15%-20% increase in efficiency\n' +
                '- Developed web applications using Bootstrap, Bulma and PHP, MySQL as the backend to support the Android/iOS apps',
                color: '#006600',
                bigText: true
            },
            {
                label: 'Core',
                picture: 'fas fa-circle-notch',
                text: '- Developed a Business Management Tool using ActionHero, Vue, Nginx, PostgreSQL, Node to eliminate manual process\n' + 
                '- Developed an Android/iOS app for 10,000+ daily users with NativeScript-Vue for surveying and automatic reporting\n' +
                '- Achieved 40% quicker load time compared to the legacy system with pre/post processing middleware in REST calls\n' +
                '- Provided 100% test coverage by writing test modules for REST APIs using Mocha and Chai test suite\n' +
                '- Contributed in Design Meetings and discussions to analyze and translate client requirements and familiarized with daily stand-ups, retrospection meetings, and 10-day sprints following Agile Software Development Process',
                color: '#47b012',
                bigText: true
            },
            {
                label: 'EnhanceVR',
                picture: 'fas fa-vr-cardboard',
                text: '- Designed, developed and maintained Enhance VR’s web portal using MongoDB, Express, React, Node (MERN) stack and deployed it using Heroku and reduced load by 50% by using load balancing techniques',
                color: '#ff7400',
                bigText: true
            },
            {
                label: 'Wiseass',
                picture: 'fas fa-democrat',
                text: '- Developed various Android apps for business management assisted by cloud application services (SaaS) which were designed using Node, Express and MongoDB and optimized with load balancers and microservices architecture\n' +
                '- Built business development strategies and oversaw the end to end process for client acquisition and sales for 15+ clients',
                color: '#00abff',
                bigText: true
            }
        ]
    },
}

export default panels;