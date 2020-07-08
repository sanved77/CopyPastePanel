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
                color: '#9d2a1b'
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
    msgPanel : {
        label: 'Messages',
        tabs : [
            {
                label: 'Connect',
                picture: 'fab fa-linkedin',
                text: 'Hey Sanved!\n' +
                'I was hoping to know more about your role as a Software Engineer at Wiseass. I was also curious if there were five minutes we would chat and learn more about the path you took and any advice you wish you would\'ve had as a student.\n' +
                'Thank you and Go Bearcats!',
                color: '#2867B2',
                bigText: true
            },
            {
                label: 'Web - Job ID',
                picture: 'fas fa-globe',
                text: 'Hello AAAA !\n' +
                'I am sure you must be incredibly busy and must be getting a lot of emails, but this will only take 60 seconds to read.\n\n' + 
                'I am a graduate student and have completed my Masters in Computer Science this May and I have 2+ years of experience as a Software Engineer focusing on development of web apps and large scale systems supporting 15,000+ daily users. My expertise lies in JavaScript ES6, Java and web frameworks like Node, React and Vue.\n\n' +
                'The XXXX position at YYYY, ZZZZ aligns with my skill set and I believe I would be a productive asset to your company. Would you be willing to share my LinkedIn profile and resume with the hiring team and let them know that I\'ve applied? I would obliged if you could put in a good word.\n\n' +
                'I can totally understand if you are busy and can\'t respond, but even a 1-2 line reply would mean a lot to me. I am attaching my resume for your reference. Happy to chat more if you have the time.\n\n' +                
                'Thank you.',
                color: '#dcb02c',
                bigText: true
            },
            {
                label: 'Web - Team',
                picture: 'fas fa-globe',
                text: 'Hello AAAA !\n' +
                'I am sure you must be incredibly busy and must be getting a lot of emails, but this will only take 60 seconds to read.\n\n' + 
                'I am a graduate student and have completed my Masters in Computer Science this May and I have 2+ years of experience as a Software Engineer focusing on development of web apps and large scale systems supporting 15,000+ daily users. My expertise lies in JavaScript ES6, Java and web frameworks like Node, React and Vue.\n\n' +
                'I was wondering if there are any open positions in your team which align with my skill set. I believe I would be a productive asset to your company. Please let me know if you’d be open to a conversation to discuss potential opportunities.\n\n' +
                'I can totally understand if you are busy and can\'t respond, but even a 1-2 line reply would mean a lot to me. I am attaching my resume for your reference. Happy to chat more if you have the time.\n\n' +                
                'Thank you.',
                color: '#dcb02c',
                bigText: true
            },
            {
                label: 'Ask Referal',
                picture: 'fas fa-people-arrows',
                text: 'I came across the Software Engineer, Backend role at eBay, (Job ID - R0039152) and recently applied. I have a Master\'s Degree in Computer Science with 2 years of experience and the listed requirements closely match my background and skills.\n\n' +

                'Would you be willing to share my LinkedIn profile and resume with the hiring team and let them know that I\'ve applied? I would obliged if you could put in a good word.\n\n' +
                
                'I am attaching my resume for your reference. Happy to chat more if you have the time as well. Looking forward to hearing from you.\n\n' +
                
                'Thank You.\n\n' +
                
                'Regards,\n' +
                'Sanved Tapkeer',
                color: '#b02cdc',
                bigText: true
            },
            {
                label: 'Recruiter',
                picture: 'fas fa-user-tie',
                text: 'Hi AAAA!\n' +
                'My name is Sanved Tapkeer and I notice that you\'re hiring for XXXX. With a master’s degree in Computer Science and hands-on experience in software development, I am confident I will be an asset to your company and would love to connect to discuss potential opportunities',
                color: '#ff7373',
                bigText: true
            },
            {
                label: 'Droid - Job ID',
                picture: 'fab fa-android',
                text: 'Hello AAAA !\n' +
                'I am sure you must be incredibly busy and must be getting a lot of emails, but this will only take 60 seconds to read.\n\n' + 
                'I am a graduate student and have completed my Masters in Computer Science this May and I have 3+ years of experience as an Android Engineer focusing on lucid UI/UX and performance. My expertise lie in native as well as hybrid environments like NativeScript and React native. I have developed and published numerous apps on the play store as well.\n\n' +
                'The XXXX position at YYYY, ZZZZ aligns with my skill set and I believe I would be a productive asset to your company. Would you be willing to share my LinkedIn profile and resume with the hiring team and let them know that I\'ve applied? I would obliged if you could put in a good word. \n\n' +
                'I can totally understand if you are busy and can\'t respond, but even a 1-2 line reply would mean a lot to me. I am attaching my resume for your reference. Happy to chat more if you have the time.\n\n' +                
                'Thank you.',
                color: '#4d9d1b',
                bigText: true
            },
            {
                label: 'Droid - Team',
                picture: 'fab fa-android',
                text: 'Hello AAAA !\n' +
                'I am sure you must be incredibly busy and must be getting a lot of emails, but this will only take 60 seconds to read.\n\n' + 
                'I am a graduate student and have completed my Masters in Computer Science this May and I have 3+ years of experience as an Android Engineer focusing on lucid UI/UX and performance. My expertise lie in native as well as hybrid environments like NativeScript and React native. I have developed and published numerous apps on the play store as well.\n\n' +
                'I was wondering if there are any open positions in your team which align with my skill set. I believe I would be a productive asset to your company. Please let me know if you’d be open to a conversation to discuss potential opportunities. \n\n' +
                'I can totally understand if you are busy and can\'t respond, but even a 1-2 line reply would mean a lot to me. I am attaching my resume for your reference. Happy to chat more if you have the time.\n\n' +                
                'Thank you.',
                color: '#4d9d1b',
                bigText: true
            }
        ]
    }
}

export default panels;