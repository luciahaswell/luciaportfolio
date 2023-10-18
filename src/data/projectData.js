const projectData = [
    {
        projectName: "Healthy Competition",
        foldername: 'healthycompetition',
        techsUsed: "Figma",
        shortDescription: "UI Design for an app that lets users compete while taking care of their health physically and mentally",
        longDescription: "Business overview: Healthy Competition is an app that users can compete against each other in the bettering of themselves. They can gain points by either exercising or doing self-care items to take care of themselves. All of the apps on the market that host fitness competitions only connect to fitness trackers and go based on exercise. We are focusing on physical and mental health and how the two of them combine for a healthy lifestyle.\nProject's scope: The app will be a platform that hosts healthy competitions. Users can customize their challenges to suit their needs. They can choose their own timeline, self-care items they want to incorporate, and invite their friends to join.\nProject's goals and objectives: Healthy Competition aims to get people to take care of their mental and physical health while sparking their competitive nature in a healthy way. Users will complete self-care tasks on a daily basis and create healthy habits without even realizing it.\nTarget audience: The end users of this application will be anyone from the ages of 16-60 looking to create healthy habits in a group setting. Groups can be coworkers, neighbors, friends, family, etc.\nDirect Competitors: none \nIndirect Competitors: Friendly competition, Challenges - Compete, Get Fit, GymRats. This product stands out because all of the challenge apps listed above only include exercise in their competition.\nDesign Preferences: The app will have a cool tone, green-focused color palette. The interface will be clean and minimalist with some pops of colors to associate fun with your health.",
        projectScreenshots: [
            require("../media/projectimgs/healthycompetition/prototype.png"),
            require("../media/projectimgs/healthycompetition/Vision Board.png"),
            require("../media/projectimgs/healthycompetition/sitemap.png"),
            require("../media/projectimgs/healthycompetition/wireframe.png")
        ],
        gitHubLink: "https://www.figma.com/file/c434Q6plbQph8ft2LDUPjb/Healthy-Competition?type=design&node-id=65%3A548&mode=design&t=lOQPe68NJ1fnI9Np-1",
        mainColor:"#EF7251",
        accentColor:"#E5AAC9",
        projectVideo: require("../media/projectimgs/videos/HealthyCompetitionVideo.mp4"),
        oddEven: 'odd'
    },
     {
        projectName: "Alex in Italy",
        techsUsed: "Figma, HTML, CSS, JavaScript, React",
        foldername: 'alexinitaly',
        shortDescription: "Freelance Project: Italy Travel Blog",
        longDescription: "Freelance project for a client. Alex got a grant to travel across Italy in the Summer and explore the history, nature, and cuisine of the country. She wanted a web page where she could showcase her trip and share it with others. We met to talk about her expectations for this project. What information should be displayed and how she wanted it laid out. I built a site map that went through all the possible paths and organized the information in the best manner. When running that past her, I proceeded to build the design in Figma to her liking based on some color palettes and fonts she provided. Organizing all this information efficiently was the biggest tackle, since there was so much for each place she traveled to in Italy. Once we got a design we both agreed on, I built the webpage using React and then deployed using Netlify so she can share her travel stories with the grant providers, her students, friends, and family!",
        projectScreenshots: [ 
            require("../media/projectimgs/alexinitaly/step1.png"),
            require("../media/projectimgs/alexinitaly/step2.png"),
            require("../media/projectimgs/alexinitaly/step3.png"),
            require("../media/projectimgs/alexinitaly/step4.png")
    ],
        gitHubLink: "https://alex-in-italy.netlify.app",
        mainColor:"#DDB954",
        accentColor:"#3560DB",
        projectVideo: require("../media/projectimgs/videos/AlexInItalyVideo.mp4"),
        oddEven: 'even'
    },
        {
        projectName: "Travel Nurse Guide",
        techsUsed: "Figma, HTML, CSS, JavaScript, React",
        foldername: 'statelicensure',
        shortDescription: "Freelance Project: Visual guide to help out Travel Nurse Recruiters & Travel Nurses",
        longDescription: "Freelance project for a client who is a travel nurse recruiter. In order to best help her nurses, she was looking for a way to organize RN state licensure in an interactive format that was informative and easy to understand for her and for the nurses she sends it to. We sat down and talked about her needs for this project and came up with a beautiful solution! RN state licensure is constantly changing and she wanted to be able to update the map on her own when these changes occurred. I worked through a solution to connect to the Google Sheets API so that whenever there is an update to the state licensure, she can manually update the docs and the site will automatically update for her. Tackling the interactive map was the toughest part. I did a lot of research and found that I could import an SVG map of the United States using a Figma plugin. However, it was still missing the state abbreviations and the British Virgin Islands. I added all of these and was able to export the entire SVG as a whole and then took it apart to turn each state into a component into React to add the hover features! I designed the site layout on Figma, then built it with React, and then deployed it using Netlify!",
        projectScreenshots: [
            require("../media/projectimgs/statelicensure/step1.jpg"),
            require("../media/projectimgs/statelicensure/step2.jpg"),
            require("../media/projectimgs/statelicensure/step3.jpg"),
            require("../media/projectimgs/statelicensure/step4.jpg")
        ],
        gitHubLink: "https://statelicensure.netlify.app/",
        mainColor:"#8DB49A",
        accentColor:"#E1D6C3",
        projectVideo: require("../media/projectimgs/videos/TravelNurseVideo.mov"),
        oddEven: 'odd'
    },
    {
        projectName: "Tic-Tac-Toe",
        techsUsed: "Figma, HTML, CSS, JavaScript, React",
        foldername: 'tictactoe',
        shortDescription: "Baby’s first React application -  Tic-Tac-Toe",
        longDescription: "React app that lets users play the classic game of tic-tac-toe. Includes a dark mode feature to switch the display colors.",
        projectScreenshots: [
            require("../media/projectimgs/tictactoe/step1.JPG"),
            require("../media/projectimgs/tictactoe/step2.JPG"),
            require("../media/projectimgs/tictactoe/step3.JPG"),
            require("../media/projectimgs/tictactoe/step4.JPG")
        ],
        gitHubLink: "https://luciahaswell.github.io/tictactoe/",
        mainColor:"#E5AAC9",
        accentColor:"#E28836",
        projectVideo: require("../media/projectimgs/videos/TicTacToeVideo.mp4"),
        oddEven: 'even'
    },
    {
        projectName: "Othello",
        techsUsed: "Figma, HTML, CSS, JavaScript, React",
        foldername: 'othello',
        shortDescription: "Othello game built with React",
        longDescription: "I recently took an international flight that had screens on the back of the seats. On this 12 hour long voyage, I perused the little screen to find something to entertain my little brain. After finding Othello, I played for a few hours. Finding strategies on how to win and proper chip placement. I started to think more about the logic on how the chips were flipped and figured this would be my next project in React! I got home from the trip and dove right in. So here, I present to you - Othello (Lucia's Version).",
        projectScreenshots: [require("../media/projectimgs/othello/step1.JPG"),
            require("../media/projectimgs/othello/step2.JPG"),
            require("../media/projectimgs/othello/step3.JPG"),
            require("../media/projectimgs/othello/step4.jpg")],
        gitHubLink: "https://luciahaswell.github.io/othello",
        mainColor:"#EF7251",
        accentColor:"#E5AAC9",
        projectVideo: require("../media/projectimgs/videos/OthelloVideo.mp4"),
        oddEven: 'odd'
    }



]

export default projectData; 