# CodeChill

CodeChill is a simple collaborative code editor built with React and Node.js.

## How to Run the Project

1. **Install dependencies**
   ```sh
   npm install
   ```

2. **Build the frontend**
   ```sh
   npm run build
   ```
   This creates a `build` folder with the production-ready frontend.

3. **Start the backend server**
   ```sh
   node server.js
   ```
   This will serve both the backend (WebSocket server) and the frontend (from the `build` folder) on [http://localhost:3000](http://localhost:3000).

4. **Open the app**
   Go to [http://localhost:3000](http://localhost:3000) in your browser.

---

### Troubleshooting
- If you see an error about `build/index.html` missing, make sure you ran `npm run build` before starting the server.
- If you get an error about the port being in use, stop any other app using port 3000 or change the port in `server.js`.
- If you see missing module errors, make sure you ran `npm install`.

---

## Built by

Tanishk Sarode

Enjoy coding together with CodeChill!
