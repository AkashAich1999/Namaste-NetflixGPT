Developed Netflix Clone using ReactJS, Redux, Tailwind CSS, Firebase & TMDB API. 

Project Planing:
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
[NOTE: 'OPENAI API' has 'Become Paid'. So, 'GPT Search Functionality' was not implemented.]

1) Email Validation:
<img width="938" alt="Email_Validation_Sign_Up" src="https://github.com/AkashAich1999/netflix-gpt/assets/108985323/bfe912b7-cfa0-4dfd-8550-85bd24529a0f">

2) Password Validation:
<img width="932" alt="Password_Validation_Sign_Up" src="https://github.com/AkashAich1999/netflix-gpt/assets/108985323/61fcc073-dacc-49c6-a7d5-9d152359b0bf">

3) If User Enters Wrong Credentials While Signing Up:
<img width="932" alt="Incorrect_Credential_While_Logging_In" src="https://github.com/AkashAich1999/netflix-gpt/assets/108985323/86606d60-43e2-4402-9bdb-1ffd224efd39">

4) Background Trailer:
<img width="946" alt="Background_Trailer" src="https://github.com/AkashAich1999/netflix-gpt/assets/108985323/0ecbe2b7-1dea-4d46-9a11-c28bc9d4a3ff">

5) Movies Lists Fetched From TMDB API:
<img width="934" alt="Fetching_Movies_From_TMDB_API" src="https://github.com/AkashAich1999/netflix-gpt/assets/108985323/ac60bc50-18ac-41f6-8668-c53db41dbb32">

6) GPT Search Page (English Language)
<img width="943" alt="en_Search_Page" src="https://github.com/AkashAich1999/netflix-gpt/assets/108985323/4b57ab8f-5c63-4d3d-83f2-06a5860b5de4">

7) GPT Search Page (Hindi Language)
<img width="941" alt="hindi_Search_Page" src="https://github.com/AkashAich1999/netflix-gpt/assets/108985323/c996a292-2497-40bc-8b6a-e10c4838e560">
