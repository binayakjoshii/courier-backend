<h1>SwiftCourier Backend API</h1>
<p>The core API service for the SwiftCourier logistics system.</p>

<h2>🚀 Deployment Status</h2>
<ul>
  <li><b>Platform:</b> Render</li>
  <li><b>Production URL:</b> <a href="https://courier-backend-rr5t.onrender.com">https://courier-backend-rr5t.onrender.com</a></li>
</ul>

<h2>⚙️ Local Development</h2>
<pre>
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
</pre>

<hr>

<h2>📚 API Documentation</h2>
<p>Base URL: <code>https://courier-backend-rr5t.onrender.com</code></p>

<table border="1" style="width:100%; border-collapse: collapse;">
  <tr style="background-color: #f2f2f2;">
    <th>Method</th><th>Endpoint</th><th>Description</th><th>Auth Required</th>
  </tr>
  <tr><td>POST</td><td><code>/api/auth/register</code></td><td>Register a new user</td><td>No</td></tr>
  <tr><td>POST</td><td><code>/api/auth/login</code></td><td>Login and receive token</td><td>No</td></tr>
  <tr><td>POST</td><td><code>/api/bookings</code></td><td>Create new shipment</td><td>Yes</td></tr>
  <tr><td>GET</td><td><code>/api/track/:id</code></td><td>Track a shipment</td><td>No</td></tr>
</table>

<p>All protected routes require the header: <code>Authorization: Bearer &lt;token&gt;</code></p>

<hr>
<p><b>Founder:</b> Binayak Joshi</p>
