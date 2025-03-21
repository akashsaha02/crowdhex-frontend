
# CrowdHex  

[CrowdHex Live Site](https://crowdhex.web.app/)  

**CrowdHex** is an intuitive and powerful crowdfunding platform designed to empower individuals and organizations. By connecting campaign creators with supporters, CrowdHex helps bring innovative ideas, personal goals, and community projects to life. With user-friendly features, a modern aesthetic, and a secure environment, CrowdHex ensures an exceptional experience for both campaigners and donors.

![alt text](./src/assets/github-banner.png)
---

## Table of Contents  

- [Features](#features)  
- [Tech Stack](#tech-stack)  
- [Getting Started](#getting-started)  
  - [Installation](#installation)  
  - [Setup](#setup)  
- [Usage](#usage)  
- [Contributing](#contributing)  
- [License](#license)  

---

## Features  

### 1. **User Authentication**  
- Secure and seamless user authentication using Firebase Authentication.  
- Features include login, registration, and logout functionality.  
- Forgot password support for easy account recovery.  

### 2. **Campaign Management**  
- **Create Campaigns**: Users can create campaigns by providing details such as a title, description, goal amount, and image.  
- **Update Campaigns**: Edit campaign details as needed to reflect changes.  
- **Campaign Tracking**: Monitor campaign progress in real-time, with clear visual indicators for funds raised.  

### 3. **Donation Management**  
- Donate directly to campaigns with a simple and secure interface.  
- Track your donations on a dedicated **My Donations** page with detailed information such as campaign title, amount donated, and date of donation.  

### 4. **Responsive Design**  
- Optimized for all devices, including desktops, tablets, and smartphones.  
- Modern design principles ensure seamless navigation across different screen sizes.  

### 5. **Theme Toggle**  
- Dynamic light and dark themes for a personalized user experience.  
- Themes are applied consistently across all components for visual harmony.  

### 6. **Real-time Notifications**  
- Instant feedback with toast notifications for key user actions such as logging in, logging out, creating campaigns, and updating profiles.  

## Tech Stack  

- **Frontend**: React.js, Tailwind CSS, DaisyUI
- **Backend**: ExpressJs, NodeJs  
- **Authentication**: Firebase Authentication  
- **Deployment**: Firebase Hosting, Vercel (Backend)  
- **Utilities**: Axios, React Helmet, React Table, Lottie React, React Typewritter  

---

## Getting Started  

### Installation  

1. Clone the repository:  
   ```bash  
   git clone https://github.com/akashsaha02/crowdhex-frontend.git  
   cd crowdhex-frontend  
   ```  

2. Install dependencies:  
   ```bash  
   npm install  
   ```  

### Setup  

1. Create a `.env` file in the root directory with the following environment variables:  
   ```env  
   VITE_API_BASE_URL=https://your-api-url.com  
   ```  

2. Start the development server:  
   ```bash  
   npm run dev  
   ```  

---

## Usage  

1. **Create an Account**:  
   - Navigate to the sign-up page to create an account.  

2. **Explore Campaigns**:  
   - Browse active campaigns on the homepage.  

3. **Start a Campaign**:  
   - Log in and click "Create Campaign" to start your crowdfunding journey.  

4. **Manage Contributions**:  
   - View all your donations on the **My Donations** page.  

---

## Contributing  

We welcome contributions from the community!  

1. Fork the repository.  
2. Create a feature branch:  
   ```bash  
   git checkout -b feature-name  
   ```  
3. Commit your changes:  
   ```bash  
   git commit -m "Add feature name"  
   ```  
4. Push to the branch:  
   ```bash  
   git push origin feature-name  
   ```  
5. Open a pull request on GitHub.  

---

## License  

This project is licensed under the [MIT License](LICENSE).  

---

CrowdHex is more than a platform—it’s a community-driven solution for funding innovation and bringing ideas to life. Join us today and make a difference!