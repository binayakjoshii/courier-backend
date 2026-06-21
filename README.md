<h1>SwiftCourier Backend API</h1>
<p>The core API service for the SwiftCourier logistics system.</p>

<h2>🚀 Deployment Status</h2>
<ul>
  <li><b>Platform:</b> Render</li>
  <li><b>Production URL:</b> <a href="https://courier-backend-rr5t.onrender.com">https://courier-backend-rr5t.onrender.com</a></li>
</ul>

<h2>⚙️ Local Development</h2>
<pre style="background: #f6f8fa; padding: 12px; border-radius: 6px; border: 1px solid #e1e4e8;">
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
</pre>

<hr>

<h2>📚 API Documentation</h2>
<p>Base URL: <code>https://courier-backend-rr5t.onrender.com</code></p>

<h3>Authentication Format</h3>
<p>All protected routes require a JWT token in the Authorization header:</p>
<pre style="background: #f6f8fa; padding: 12px; border-radius: 6px; border: 1px solid #e1e4e8;">Authorization: Bearer &lt;your_jwt_token&gt;</pre>

<h3>Standard Status Codes</h3>
<ul>
  <li><b>200 / 201:</b> Success / Created</li>
  <li><b>400:</b> Bad Request (Missing or invalid data)</li>
  <li><b>401:</b> Unauthorized (Missing or invalid token)</li>
  <li><b>404:</b> Not Found (Resource does not exist)</li>
  <li><b>500:</b> Internal Server Error</li>
</ul>

<h3>Endpoints Reference</h3>

<table border="1" style="width:100%; border-collapse: collapse; text-align: left;">
  <tr style="background-color: #f6f8fa;">
    <th style="padding: 8px;">Method</th>
    <th style="padding: 8px;">Endpoint</th>
    <th style="padding: 8px;">Description</th>
    <th style="padding: 8px;">Auth</th>
  </tr>
  <tr>
    <td style="padding: 8px;"><b>POST</b></td>
    <td style="padding: 8px;"><code>/api/auth/register</code></td>
    <td style="padding: 8px;">Register a new user account</td>
    <td style="padding: 8px;">No</td>
  </tr>
  <tr>
    <td style="padding: 8px;"><b>POST</b></td>
    <td style="padding: 8px;"><code>/api/auth/login</code></td>
    <td style="padding: 8px;">Authenticate and receive JWT</td>
    <td style="padding: 8px;">No</td>
  </tr>
  <tr>
    <td style="padding: 8px;"><b>POST</b></td>
    <td style="padding: 8px;"><code>/api/bookings</code></td>
    <td style="padding: 8px;">Create a new shipment request</td>
    <td style="padding: 8px;">Yes</td>
  </tr>
  <tr>
    <td style="padding: 8px;"><b>GET</b></td>
    <td style="padding: 8px;"><code>/api/track/:id</code></td>
    <td style="padding: 8px;">Retrieve live tracking details</td>
    <td style="padding: 8px;">No</td>
  </tr>
</table>

<br>

<details style="margin-bottom: 10px; padding: 10px; border: 1px solid #e1e4e8; border-radius: 6px;">
  <summary style="font-weight: bold; cursor: pointer;">📝 View Auth Payloads (Register & Login)</summary>
  <div style="margin-top: 10px;">
    <h4>POST /api/auth/register</h4>
    <b>Request Body:</b>
<pre style="background: #f6f8fa; padding: 10px; border-radius: 4px;">{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "password": "securePassword123",
  "role": "customer"
}</pre>
    <b>Success Response (201):</b>
<pre style="background: #f6f8fa; padding: 10px; border-radius: 4px;">{
  "message": "User registered successfully"
}</pre>
  </div>
</details>

<details style="margin-bottom: 10px; padding: 10px; border: 1px solid #e1e4e8; border-radius: 6px;">
  <summary style="font-weight: bold; cursor: pointer;">📦 View Booking Payload (Create Shipment)</summary>
  <div style="margin-top: 10px;">
    <h4>POST /api/bookings</h4>
    <b>Request Body:</b>
<pre style="background: #f6f8fa; padding: 10px; border-radius: 4px;">{
  "receiver": { "name": "John Smith" },
  "package": { "type": "Electronics", "weight": 2.5 }
}</pre>
    <b>Success Response (201):</b>
<pre style="background: #f6f8fa; padding: 10px; border-radius: 4px;">{
  "message": "Booking created",
  "trackingNumber": "TRK-123456789",
  "booking": { ... }
}</pre>
  </div>
</details>

<details style="margin-bottom: 10px; padding: 10px; border: 1px solid #e1e4e8; border-radius: 6px;">
  <summary style="font-weight: bold; cursor: pointer;">📍 View Tracking Payload (Get Status)</summary>
  <div style="margin-top: 10px;">
    <h4>GET /api/track/:id</h4>
    <b>URL Parameter:</b> <code>id</code> (The Tracking Number string)<br><br>
    <b>Success Response (200):</b>
<pre style="background: #f6f8fa; padding: 10px; border-radius: 4px;">{
  "trackingNumber": "TRK-123456789",
  "currentStatus": "In Transit",
  "timeline": [
    {
      "status": "Order Placed",
      "timestamp": "2024-05-20T10:00:00Z"
    }
  ],
  "bookingId": {
    "receiver": { "name": "John Smith" },
    "package": { "type": "Electronics", "weight": 2.5 }
  }
}</pre>
  </div>
</details>

<hr>
<p><b>Founder:</b> Binayak Joshi | Full-Stack Web Developer</p>
