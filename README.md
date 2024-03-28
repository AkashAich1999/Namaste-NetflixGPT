In Development Phase (Currently) .....

Building Netflix Clone using ReactJS, Redux, Tailwind CSS, Firebase & TMDB API. 
I might also use OpenAI API for GPT Search Functionality. (Optional)

Features:
- Login/Sign Up

- Browse (After Authentication)
    - Header.
    - Main Movie Portion:
        - Trailer in Background.
        - Title & Description.
        - MovieSuggestions:
            - MovieLists * N.
    - GPT Powers:
        - Search Bar.
        - Movie Suggestions.

Implementation Done Till Now:
- Create React App
- Configured Tailwind CSS
- Header Completed
- Routing using 'react-router-dom'
- Login Form Page
- Sign Up Form Page
- Form Validation
- using 'useRef' Hook
- Firebase Setup
- Deploying Our App To Production
- Create SignUp User Account
- Implemented User SignIn Feature
- Created Redux Store with userSlice
- Implemented Sign out Feature 
- Implemented Update Profile Feature
- BugFix: Sign up user displayName and profile picture update
- BugFix: if the user is not logged in & tries to Access /browse, Then Redirect to Login Page
- BugFix: if the user is logged in & tries to access /, then redirect it to /browse
- Unsubscibed to the onAuthStateChanged callback
- Add hardcoded values to the constants file
- Regiter TMDB API & create an app & get access token
- Get Data from TMDB 'Now Playing' movies list API
- Adding movie data to the store (moviesSlice)
- Creating our own Custom Hook (useNowPlayingMovies)
- Building 'Browse Page'
- Building 'Video Title' & 'Video Background'
- Creating Custom Hook for Trailer Video
- Fetch Data for Trailer Video
- Update Store with Trailer Video Data
- Embedded the Yotube video and make it autoplay and mute
- Tailwind Classes to make Main Container look awesome
- Build Secondary Component
- Build Movie List
- Build Movie Card
- TMDB Image CDN URL
- Made the Browsre page amazing with Tailwind CSS
- usePopularMovies Custom hook
- Building GPT Search Page (GptSearch)
- Building GPT Search Bar (GptSearchBar)
- Building 'Multi-language' Feature in 'GPT Search Page'
- 
- 
- 