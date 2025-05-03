# SocialMediaUsers
This Angular project visualizes the growth of Instagram and YouTube users over the years with the integration of ECharts.

### Basic Commands
1. To create: ng new SocialMediaUsers
2. Installation: npm install ngx-echarts echarts
3. Imports: Proper import statements in the code
4. Create components: ng g c components/overview, ng g c components/visuals
5. Create Models: ng g i models/UserData
6. Create Services: ng g s services/UserData
7. To Run: ng serve 
- Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

### Data Source
- Static data is provided within user-data.service.ts for instagram, youtube and combined yearly values

### Components
##### 1. Overview
- Displays title and a brief description about the project
##### 2. Visuals
- Displays the charts created that shows the no of users on social media (Instagram, Youtube)
- It has 3 charts -> Instagram users, Youtube Users and a Comparison chart to show the average increase of users per year
- The comparison chart can be viewed as a bar, line or pie chart
  
### Features
- Displays Instagram and YouTube user data from 2018 to 2024
- Comparison chart showing average yearly increase in users
- Dropdown to switch between Bar, Line, and Pie chart types
- Interactive tooltips and stylized chart rendering using ECharts
- Modular service to manage and fetch user data

### Chart types Supported
- Bar
- Line
- Pie

