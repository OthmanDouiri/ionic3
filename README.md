# Morocco welcome 2030
![image](https://github.com/user-attachments/assets/bb4ecb49-654b-4f66-9b21-a057f02c0d15)

The application is designed to promote tourism in Morocco during the 2030 World Cup. It will offer users an interactive experience to explore the rich culture, iconic cities, and unique activities that Morocco has to offer. The main features will include:

## Interactive City Guides
Information about the host cities, including tourist attractions, history, and special events during the tournament.

## Culture and Traditions
Sections dedicated to Moroccan gastronomy, music, art, and traditional festivals.

## Personalized Tourist Routes
Suggested itineraries based on the user's available time and preferences.

# MyApp - Ionic Vue.js Mobile Application

A modern cross-platform mobile application built with Ionic Framework and Vue.js 3, featuring a complete user interface with navigation, authentication, and various functional pages.

## 🚀 Technologies Used

### Core Framework
- **Vue.js 3** with Composition API
- **TypeScript** for type safety
- **Ionic Framework** for mobile UI components
- **Ionic Vue** integration

### Development Tools
- **Vite** - Fast build tool and dev server
- **Capacitor** - Native mobile app runtime
- **Vue Router** - Client-side routing
- **ESLint** - Code linting and formatting

### UI & Styling
- **Ionicons** - Icon library
- **Bootstrap 5.3.3** - CSS framework
- **Custom Fonts** (Brice family)
- **Swiper.js** - Touch slider component


## 📱 Features

### Navigation System
- **Side Menu** with multiple navigation options
- **Bottom Tab Bar** with 5 main sections
- **Dynamic Page Titles**
- **Back Button** functionality
- **Conditional Navigation** (hidden on login pages)

### Core Pages
- 🏠 **Home** - Main dashboard
- 🔔 **Notifications** - User notifications
- ❤️ **Likes** - Favorite items
- ⚙️ **Settings** - App configuration
- 👤 **Profile** - User profile management

### Authentication & Security
- 🔐 **Login System**
- 📝 **Multi-step Signup Process** (6 steps)
- 🔒 **Security Settings**
- 🛡️ **Privacy Policy**

### Additional Features
- 📍 **Places to Go** - Location-based content
- 🌟 **Popular Content**
- 📞 **Contact Us**
- ℹ️ **About Us**

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Ionic CLI

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/OthmanDouiri/ionic3
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Install Ionic CLI globally**
   ```bash
   npm install -g @ionic/cli
   ```

4. **Run the development server**
   ```bash
   ionic serve
   ```


## 📁 Project Structure

```
src/
├── components/
│   └── TabsComponent.vue    # Main navigation component
├── views/
│   ├── HomePage.vue
│   ├── LoginPage.vue
│   ├── NotificationsPage.vue
│   └── ...
├── router/
│   └── index.ts            # Route definitions
├── assets/
│   ├── fonts/              # Custom Brice font family
│   └── images/
└── main.ts                 # App entry point
```

## 🎨 Design System

### Color Scheme
- **Primary Color**: Orange Red (#ff4500)
- **Background**: Orange Red theme
- **Text**: White on colored backgrounds

### Navigation Features
- **Dynamic Titles**: Page titles update based on current route
- **Conditional Rendering**: Login pages hide navigation elements
- **Menu Integration**: Side menu with quick access to all features
- **Tab Bar**: Bottom navigation for main app sections

## 🔧 Configuration Files

- `vite.config.ts` - Vite build configuration
- `tsconfig.json` - TypeScript configuration
- `ionic.config.json` - Ionic CLI configuration
- `capacitor.config.ts` - Capacitor native configuration
- `vitest.config.ts` - Testing configuration

## 📊 Key Components

### TabsComponent.vue
Main navigation component featuring:
- Side menu with 6 navigation items
- Dynamic page title system
- Conditional navigation visibility
- Bottom tab bar with 5 main sections
- Back button functionality

## 🚀 Build & Deployment

### Development Build
```bash
npm run build
```


## 👥 Team

- **Developer**: [Your Name]
- **Framework**: Ionic Vue.js
- **Language**: TypeScript

---

**Built with ❤️ using Ionic Framework and Vue.js**
