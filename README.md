# Color Changer

Color Changer is a React-based web application that allows users to change the background color of a web page and maintain a log of colors. It is backed by an Express.js server that stores color data in a JSON file.

## Features

- Change the background color of the webpage by entering a color name or hex code.
- Maintain a log of all the colors entered.
- Fetch and display the color log from the backend server.
- Fully functional on local networks by detecting the local IP address.

## Prerequisites

Before running this application, ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## Getting Started

### 1. Clone the Repository

```bash
git clone <repository-url>
cd color-changer-node
```

### 2. Set Up the Backend Server

1. Navigate to the `backend` folder:

   ```bash
   cd backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the backend server:
   ```bash
   node server.js
   ```
   The server will run at `http://<your-local-ip>:5000`.

### 3. Set Up the React Frontend

1. Navigate to the `frontend` folder:

   ```bash
   cd ../frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the React development server:
   ```bash
   npm start
   ```
   The React app will run at `http://localhost:3000`.

## Usage

1. Open the React app in your browser.
2. Enter a color name (e.g., "red") or a hex code (e.g., "#ff5733") in the input field.
3. Click "Change Color" to update the background color.
4. The entered color will be logged below the input field.

## File Structure

```
color-changer-node/
├── backend/
│   ├── server.js       # Express.js server code
│   ├── colors.json     # JSON file to store color data
├── frontend/
│   ├── src/
│   │   ├── App.js      # React component
│   │   ├── App.css     # Styling for the app
│   │   ├── index.js    # React entry point
├── README.md           # Project documentation
```

## Troubleshooting

- If the app fails to fetch data from the backend, ensure the IP address in `App.js` matches your server's local IP.
- To find your local IP, check the terminal output from the backend server when it starts.

## Dependencies

### Backend

- [Express](https://expressjs.com/)
- [CORS](https://www.npmjs.com/package/cors)

### Frontend

- [React](https://reactjs.org/)
- [Axios](https://axios-http.com/)

## Future Enhancements

- Add validation for color input.
- Implement a color picker for easier selection.
- Deploy the app to a cloud platform for global access.
