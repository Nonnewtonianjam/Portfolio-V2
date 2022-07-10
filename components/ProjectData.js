import { v4 as uuidv4 } from 'uuid'
import OnDeck from '../public/projects/onDeck.webp'
import BookClub from '../public/projects/bookClub.webp'
import Clothing from '../public/projects/clothing.webp'
import ThereBeDragons from '../public/projects/thereBeDragons.webp'
//import Meeting from '../public/projects/meeting.webp'
//import Nurish from '../public/projects/nurish.webp'
import Puzzle from '../public/projects/puzzle.webp'


const Data = [
    {
        id: uuidv4(),
        name: 'OnDeck',
        excerpt:
        `Application to assist user's in finding live musical performances. The user 
        selects their desired parameters, and is presented with a list of recommendations along with a score 
        for how likely it is that they will enjoy the event.`,
        desc: 
        `The goal of this project was to make the app feel like a natural extension of the spotify experience. 
        I created the wireframe around the idea that the information would be displayed in the same fashion as 
        the playlists created on Spotify itself. Using the Spotify API I was able to create profile on a user's 
        musical preferences by looking at their most recently favorited songs. I would then use this profile to 
        generate a list of performers whose discography most closely matched the user's profile within a specified 
        region.`,
        img: OnDeck,
        alt: 'Render of OnDeck Project',
        tags: 'React, SCSS, Node, Spotify API, Google Maps API, BandsInTown API'
    },
    // {
    //     id: uuidv4(),
    //     name: 'Nurish App',
    //     excerpt:'Application to assist those without access to sufficient healthcare in preparing affordable meals that meet their dietary needs',
    //     desc:
    //     'An app to help people to get an overview of how they can make the city beautiful.',
    //     img: Nurish,
    //     tags: ['React, Typescript, MySql, Chomp API']
    // },
    // {
    //     id: uuidv4(),
    //     name: 'Meeting Room',
    //     excerpt: 'Application for scheduling meetings',
    //     desc:
    //     'Using this app you can track any e coin. Also you will get a good advise about investment form the professional',
    //     img: Meeting,
    //     tags: ['React', 'JavaScript', 'Firebase']
    // },
    {
        id: uuidv4(),
        name: 'BookClub',
        excerpt: `Book Club is a social media platform that empowers users to read and discuss various forms of 
        media through its groupchat functionality. The app also gives readers easy access to information regarding 
        events and new releases hosted by authors and local bookstores.`,
        desc:
        `This app was my attempt to redesign Goodreads in order to create a more centralized experience for content 
        creators and their fans. The primary focus emphasized parasocial and 
        user-created content that could then be curated and highlighted for greater visibility. The secondary element 
        of the app would be the 'book circles' which would allow users to create groups for structured discussions, 
        interviews and events.`,
        img: BookClub,
        alt: 'rendering of Book Club Application',
        tags:'React, JavaScript, WebRTC API, Firebase, GraphQL',
    },
    {
        id: uuidv4(),
        name: 'There Be Dragons',
        excerpt:`A mobile application to assist Game Masters in running impromptu campaigns of 
        Dungeons and Dragons. `,
        desc:
        `The primary focus of the project was finding a way to run a streamlined version of the game across several devices
         anywhere at any time. For the UI, I wanted to emulate the look of the games that we would normally run on desktop 
         as much as possible while also leaning into the UX inherent to touchscreen devices to create something that felt 
         familiar yet novel.`,
        img: ThereBeDragons,
        alt: 'Render Of There Be Dragons ',
        tags: 'React Native, Redux, TypeScript, Firebase'
    },
    {
        id: uuidv4(),
        name: 'Apparel Application',
        excerpt:'App with a focus on finding clothing compatible with a user\'s personal style.',
        desc:
        `The goal of this project was to attempt to make fashion more accessible for users by creating a system that 
        assists them in clothing coordination while also increasing theoretical conversion rates in the process. The 
        app initially prompts user to fill out a short survey regarding characteristics and preferences. This allows 
        for the creation of a heuristic profile of the user that allows for more accurate recommendations. Clothing is 
        parsed from a variety of different retailers, aggregated, and then displayed for the user.`,
        img: Clothing,
        alt: 'Render of Clothing E-Commerce Experience',
        tags: 'React, TypeScript, Next, MongoDB, Cheerio'
    },
    {
        id: uuidv4(),
        name: 'Puzzle Solver',
        excerpt:`This project came about at the beginning of the pandemic when I incorrectly assumed my four roommates shared my enthusiasm for puzzles.`,
        desc:
          `This project ended up being scaled down significantly as I did not have the workspace neccessary to for the gantry system that was
           initially designed. The question then became, how do I translate this into something more practical? The answer came in the form of 
           an OpenCV plugin for flutter. Operating the application on a mobile did present some issues regarding occlusion due to inconsistent lighting, the project 
           was successful. The final iteration of the algorithm could determine where a piece should be placed with an accuracy of roughly 94%. 
          I learned a great deal from this project: working with embedded systems, deploying ML models on mobile devices and computer vision are
           just a few of the topics I studied extensively to bring this project to life. The knowledge I gained working through this project is 
           indispensible. However, I do sometimes wonder if I should've just returned the puzzles.`,
        img: Puzzle,
        alt: 'Puzzle Solver',
        tags: 'OpenCV, Python',
      },
  ];
  
  export default Data;