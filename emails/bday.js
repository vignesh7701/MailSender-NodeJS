// https://ecommstorageaccount1.blob.core.windows.net/container1/birthdaybanner.png

module.exports = function getBirthdayEmailTemplate() {
  return {
    subject: `🎉 Happy Birthday, Vignesh! Here's a Gift for You!`,
    text: `Happy Birthday, Vignesh! Enjoy 20% off with code BDAYSPARKLE20.`,
    html: `
      <!DOCTYPE html>
  <html>
  <head>
    <meta charset="UTF-8">
    <title>Happy Birthday from BestinGems!</title>
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
                    <td><a href="https://bestingems.com" style="font-size: 14px; font-weight: 500; color: #000; text-decoration: none; padding: 10px 15px;">Gemstones</a></td>
                    <td><a href="https://bestingems.com/about" style="font-size: 14px; font-weight: 500; color: #000; text-decoration: none; padding: 10px 15px;">Jewelry</a></td>
                    <td><a href="https://bestingems.com/contact" style="font-size: 14px; font-weight: 500; color: #000; text-decoration: none; padding: 10px 15px;">Semi-Mounts</a></td>
                    <td><a href="https://bestingems.com/shop" style="font-size: 14px; font-weight: 500; color: #000; text-decoration: none; padding: 10px 15px;">Drops & Beads</a></td>
                  </tr>
                </table>
              </td>
            </tr>
  
            <!-- Birthday Banner -->
            <tr>
              <td align="center">
                <img src="https://ecommstorageaccount1.blob.core.windows.net/container1/birthdaybanner.png" alt="Happy Birthday Banner" width="100%" style="max-width: 600px; height: auto; display: block;" />
              </td>
            </tr>
  
            <!-- Discount Section -->
            <tr>
         <tr>
                <td align="left" style="padding: 30px 20px; font-family: Arial, sans-serif; color: #333;">
                <p style="font-size: 16px; margin-bottom: 15px;">
                    Dear Vignesh,
                </p>
                <p style="font-size: 16px; margin-bottom: 15px;">
                    Happy Birthday! To make your day extra special, here’s a gift from us:<br>
                    🎁 <strong>20% OFF</strong>
                </p>

                <p style="font-size: 20px; font-weight: bold; color: #444; text-align:center; margin: 10px 0 5px;">
                    Use code: <span style="color: #D6336C;">BDAYSPARKLE20</span>
                </p>
                <p style="font-size: 14px; color: #555; text-align:center; margin: 0 0 15px;">
                    📅 Valid Until: 06/30/2025
                </p>

                <p style="font-size: 16px; margin-bottom: 20px;">
                    Treat yourself to something dazzling—be it a timeless gemstone or a beautiful keepsake.
                </p>

                <div style="text-align: center; margin: 20px 0;">
                    <a href="https://bestingems.com/shop" 
                        style="color: #ffb400; text-decoration: underline; font-weight: bold; font-size: 18px;">
                        Shop Now
                    </a>
                </div>

                <p style="font-size: 16px; margin-top: 20px;">
                    Wishing you a day filled with love and joy!
                </p>
                <p style="font-size: 16px;">
                    Warm regards,<br>
                    Team BestinGems
                </p>
                </td>
                </tr>

          </table>
        </td>
      </tr>
    </table>
  </body>
  </html>
  `,
  };
};
  
