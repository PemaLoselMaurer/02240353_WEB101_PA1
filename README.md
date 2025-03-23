# HoYoLAB Clone

This project is a clone of the HoYoLAB platform, built using React and Vite. It aims to replicate the core functionalities and design of the original platform, providing a user-friendly interface for interacting with posts, feeds, and other features.

## Features

### 1. **Navbar**
- A fixed navigation bar at the top of the application.
- Includes:
  - A logo for branding.
  - Tabs for navigation (e.g., Home, Interest Group).
  - A search bar with an icon for user input.
  - Notification and profile icons.

### 2. **Sidebar**
- A fixed sidebar on the right side of the application.
- Includes:
  - A "Post now" section with options to create posts, upload images, or videos.
  - A "Genshin Impact" section with quick links to resources like HoYoWiki and Teyvat Interactive Map.

### 3. **Feed**
- A central feed displaying posts.
- Includes:
  - Tabs for "Following," "Recommended," and "Event."
  - Posts with user information, content, images, tags, and reactions.

### 4. **Post Component**
- Displays individual posts with:
  - User avatar, name, and timestamp.
  - Post content, images, and tags.
  - Footer with views, comments, likes, and reactions.

### 5. **Global Styling**
- Consistent styling across the application using CSS.
- Dark-themed design with hover effects and transitions for better user experience.

## Technologies Used
- **React**: For building the user interface.
- **Vite**: For fast development and build processes.
- **CSS**: For styling components.
- **React Icons**: For adding icons to the application.

## Folder Structure
```
c:\Users\asusb\Desktop\02240353_WEB101_PA1\
│
├── hoyolab-clone\
│   ├── public\                # Public assets
│   ├── src\                   # Source code
│   │   ├── components\        # React components
│   │   │   ├── Navbar.jsx
│   │   │   ├── Sidebar.jsx
│   │   │   ├── Feed.jsx
│   │   │   ├── Post.jsx
│   │   ├── styles\            # CSS files for styling
│   │   │   ├── Navbar.css
│   │   │   ├── Sidebar.css
│   │   │   ├── Feed.css
│   │   │   ├── Post.css
│   │   │   ├── Global.css
│   │   ├── App.jsx             
│   │   ├── main.jsx           
│   ├── index.html             
│   ├── package.json           
│   ├── vite.config.js         
│   ├── .gitignore             
│
└── README.md                  
```

## Future Enhancements
- Add user authentication and profile management.
- Implement dynamic data fetching for posts and feeds.
- Add responsiveness for mobile and tablet devices.


