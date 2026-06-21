<h1>SwiftCourier Backend API</h1>
<p>The core API service for the SwiftCourier logistics system.</p>

<h3> Deployment Status</h3>
<ul>
  <li><b>Platform:</b> Render</li>
  <li><b>Production URL:</b> <a href="https://courier-backend-rr5t.onrender.com">https://courier-backend-rr5t.onrender.com</a></li>
</ul>

<h3>🛠 Tech Stack</h3>
<ul>
  <li><b>Runtime:</b> Node.js</li>
  <li><b>Framework:</b> Express.js</li>
  <li><b>Database:</b> MongoDB</li>
</ul>

<h3>⚙️ Local Development</h3>
<ol>
  <li>Clone the repository and run <code>npm install</code>.</li>
  <li>Create a <code>.env</code> file in the root directory:</li>
</ol>
<pre>
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
</pre>
<p>3. Start the server: <code>node server.js</code></p>

<h3> Production Notes</h3>
<ul>
  <li><b>CORS:</b> The <code>server.js</code> is configured to whitelist your Vercel production URL.</li>
  <li><b>MongoDB:</b> Ensure <code>0.0.0.0/0</code> is whitelisted in your Atlas Network Access settings.</li>
</ul>

<hr>
<p><b>Founder:</b> Binayak Joshi | Full-Stack Developer</p>
