module.exports = function getWelcomeEmailTemplate() {
  return {
    subject: `Welcome to BestinGems, Vignesh!`,
    text: `Welcome to BestinGems, Vignesh! Use coupon WELCOME15 for 15% off.`,
    html: `
    <!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to BestinGems</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      font-family: 'Arial', sans-serif;
      background-color: #f9f9f9;
      color: #333;
      line-height: 1.6; 
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
      background-color: #ffffff;
      border-radius: 8px; 
      border: 1px solid #0000; 
    }
    .header {
      text-align: center;
    }
    .logo {
      max-width: 200px;
      margin-bottom: 20px;
    }
    .nav-bar {
      display: flex;
      justify-content: between;
      width: 100%; 
      list-style: none;
      font-size: 16px;
      font-weight: 500;
      margin: 0 auto;
      flex-wrap: wrap;
      align-items: center;
    }
    .nav-bar a {
      text-decoration: none;
      color: #000000;
      font-weight: medium;
      padding: 12px;
      white-space: nowrap;
    }
    .nav-links a:hover {
      color: #1c1c1c;
    }
    .divider {
      border-top: 1px solid #000;
      margin: 20px auto;
      width: 90%;
    }
    .section {
      text-align: center;
      margin: 30px 0;
      padding: 0 20px;
    }
    h1, h2, h3 {
      color: #2a2e82;
      margin-top: 0;
    }  
    .email-image {
      width: 100%;
      max-width: 100%;
      height: auto;
      display: block;
      margin: 0 auto;
    }
    .footer {
      font-size: 12px;
      color: #777;
      text-align: center;
      padding: 20px 0;
    }
    h2 {
      color: #2a2e82;
      text-align: center;
      margin-bottom: 20px;
    }
   .varieties-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
      gap: 16px;
      max-width: 200px;
      margin: 24px auto; /* center the grid */
      padding: 0 16px;
    }

    .variety-item {
      background: #0a0a3c;
      color: #fff;
      margin-top: 8px;
      padding: 16px;
      border-radius: 4px;
      font-size: 16px;
      font-weight: 500;
      text-align: center;
      transition: background 0.3s ease;
    }

    .variety-item:hover {
      background: #1a1a5c;
      cursor: pointer;
    }

  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <img src="https://ecommstorageaccount1.blob.core.windows.net/container1/logo1.png" alt="Best in Gems" class="logo">
      <div class="nav-bar"> 
          <a href="https://bestingems.com">Gemstones</a> 
          <a href="https://bestingems.com/about">Jewelry</a> 
          <a href="https://bestingems.com/contact">Semi-Mounts</a> 
          <a href="https://bestingems.com/shop">Drops & Beads</a>  
      </div>
    </div> 

    <div class="section"> 
      <img src="https://ecommstorageaccount1.blob.core.windows.net/container1/WhatsApp%20Image%202025-05-22%20at%2016.01.28_9faadd1c.jpg" alt="Welcome" class="email-image">
    </div>

    <div class="divider"></div>
 
    <div class="section" style="background: #fff;">
        <div style="font-size: 2em; color: #0a0a3c; text-align: center; font-weight: 400; ">
          15% Discount 
        </div>
        <div style="font-size: 2em; color: #0a0a3c; text-align: center; margin-bottom: 24px;">
          Use Coupon Code: <strong style="font-weight: bold; color: #0a0a3c;">WELCOME15</strong>
        </div>
        <div style="text-align: center;">
          <a href="https://bestingems.com/cart" 
            style="display: inline-block; background: #0a0a3c; color: #fff; padding: 16px 40px; border-radius: 4px; font-size: 1.5em; text-decoration: none; font-weight: 400;">
            Claim Now
          </a>
        </div> 
    </div>

    <div class="divider"></div>

    <div class="section">
      <img src="https://ecommstorageaccount1.blob.core.windows.net/container1/WhatsApp%20Image%202025-05-22%20at%2016.01.29_6d54ddae.jpg" alt="Our Collection" class="email-image">
    </div>

    <div class="divider"></div>

   <div>
      <h2 style="text-align: center; font-size: 24px; font-weight: bold; color: #0a0a3c;;">
        Explore our large Varieties
      </h2>
      <div class="varieties-grid">
        <div class="variety-item">Pendants</div>
        <div class="variety-item">Rings</div>
        <div class="variety-item">Earrings</div>
        <div class="variety-item">Gemstones</div>
        <div class="variety-item">Semi-Mounts</div>
        <div class="variety-item">Drops & Beads</div>
      </div>
   </div>  

    <div class="divider"></div>

    <div class="footer">
      <p>&copy; ${new Date().getFullYear()} BestinGems. All rights reserved.</p>
      <p> 
        <a href="#" style="color: #777; text-decoration: none;">Privacy Policy</a>
      </p>
    </div>
  </div>
</body>
</html>
    `,
  };
};
