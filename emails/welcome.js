module.exports = function getWelcomeEmailTemplate() {
  return {
    subject: `Welcome to BestinGems, Vignesh!`,
    text: `Welcome to BestinGems, Vignesh! Use coupon WELCOME15 for 15% off.`,
    html: `
   <!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Welcome to BestinGems</title>
</head>
<body style="margin:0; padding:0; font-family:Arial, sans-serif; background-color:#f9f9f9; color:#333;">
  <table width="100%" bgcolor="#f9f9f9" cellpadding="0" cellspacing="0">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" bgcolor="#ffffff" style="margin: 20px auto; border: 1px solid #ddd; border-radius: 8px; overflow: hidden;">
          <!-- Header and Logo -->
          <tr>
            <td align="center" style="padding: 20px;">
              <img src="https://ecommstorageaccount1.blob.core.windows.net/container1/logo1.png" alt="Best in Gems" width="200" style="display: block; margin: 0 auto 20px;" />
              <table cellpadding="0" cellspacing="0" width="100%">
                <tr align="center">
                  <td><a href="https://bestingems.com" style="font-size: 14px; font-weight: 500; color: #000; text-decoration: none; padding: 10px 15px; display: inline-block;">Gemstones</a></td>
                  <td><a href="https://bestingems.com/about" style="font-size: 14px; font-weight: 500; color: #000; text-decoration: none; padding: 10px 15px; display: inline-block;">Jewelry</a></td>
                  <td><a href="https://bestingems.com/contact" style="font-size: 14px; font-weight: 500; color: #000; text-decoration: none; padding: 10px 15px; display: inline-block;">Semi-Mounts</a></td>
                  <td><a href="https://bestingems.com/shop" style="font-size: 14px; font-weight: 500; color: #000; text-decoration: none; padding: 10px 15px; display: inline-block;">Drops & Beads</a></td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Hero Image -->
          <tr>
            <td align="center">
              <img src="https://ecommstorageaccount1.blob.core.windows.net/container1/WhatsApp%20Image%202025-05-22%20at%2016.01.28_9faadd1c.jpg" alt="Welcome" width="100%" style="max-width: 600px; height: auto; display: block;" />
            </td>
          </tr>

          <!-- Divider -->
          <tr><td><hr style="border:0; border-top:1px solid #000; margin:20px auto; width:90%;"/></td></tr>

          <!-- Discount Section -->
          <tr>
            <td align="center" style="padding: 20px;">
              <p style="font-size: 24px; font-weight: 400; color: #0a0a3c; margin: 0;">15% Discount</p>
              <p style="font-size: 24px; font-weight: 400; color: #0a0a3c; margin: 10px 0 20px;">
                Use Coupon Code: <strong>WELCOME15</strong>
              </p>
              <a href="https://bestingems.com/cart" 
                style="background: #0a0a3c; color: #fff; padding: 16px 40px; text-decoration: none; font-size: 18px; border-radius: 4px; display: inline-block;">
                Claim Now
              </a>
            </td>
          </tr>

          <!-- Divider -->
          <tr><td><hr style="border:0; border-top:1px solid #000; margin:20px auto; width:90%;"/></td></tr>

          <!-- Collection Image -->
          <tr>
            <td align="center">
              <img src="https://ecommstorageaccount1.blob.core.windows.net/container1/WhatsApp%20Image%202025-05-22%20at%2016.01.29_6d54ddae.jpg" alt="Our Collection" width="100%" style="max-width: 600px; height: auto; display: block;" />
            </td>
          </tr>

          <!-- Divider -->
          <tr><td><hr style="border:0; border-top:1px solid #000; margin:20px auto; width:90%;"/></td></tr>

          <!-- Varieties Section -->
          <tr>
            <td align="center" style="padding: 20px;">
              <h2 style="font-size: 24px; font-weight: bold; color: #0a0a3c; margin: 0 0 20px;">Explore our large Varieties</h2>
              <table cellpadding="10" cellspacing="10" align="center">
                <tr align="center">
                  <td style="background:#0a0a3c; color:#fff; border-radius:4px;">Pendants</td>
                  <td style="background:#0a0a3c; color:#fff; border-radius:4px;">Rings</td>
                  <td style="background:#0a0a3c; color:#fff; border-radius:4px;">Earrings</td>
                </tr>
                <tr align="center">
                  <td style="background:#0a0a3c; color:#fff; border-radius:4px;">Gemstones</td>
                  <td style="background:#0a0a3c; color:#fff; border-radius:4px;">Semi-Mounts</td>
                  <td style="background:#0a0a3c; color:#fff; border-radius:4px;">Drops & Beads</td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Divider -->
          <tr><td><hr style="border:0; border-top:1px solid #000; margin:20px auto; width:90%;"/></td></tr>

          <!-- Footer -->
          <tr>
            <td align="center" style="font-size:12px; color:#777; padding: 20px;">
              <p style="margin:0;">&copy; 2025 BestinGems. All rights reserved.</p>
              <p style="margin: 5px 0;">
                <a href="#" style="color:#777; text-decoration:none;">Privacy Policy</a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`,
  };
};
