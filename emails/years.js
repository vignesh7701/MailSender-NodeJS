// https://ecommstorageaccount1.blob.core.windows.net/container1/yearsbanner.png


module.exports = function getYearsEmailTemplate() {
  return {
    subject: `🎉 Thank You for 3 Sparkling Years, Vignesh!`,
    text: `Celebrate 3 years with us, Vignesh! Enjoy 20% off your next order with code LOYALTY20.`,
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
      
                        <tr>
                <td align="center" style="padding: 0;">
                    <img src="https://ecommstorageaccount1.blob.core.windows.net/container1/yearsbanner.png" 
                        alt="Thank You" width="100%" style="max-width: 600px; display: block;">
                </td>
                </tr>

                <tr>
                <td align="left" style="padding: 30px 20px; font-family: Arial, sans-serif; color: #333;">
                    <p style="font-size: 16px; margin-bottom: 15px;">
                    Dear Vignesh,
                    </p>

                    <p style="font-size: 16px; margin-bottom: 10px;">
                    <strong>Thank You for 3 Years of Sparkle and Trust! 🎉</strong>
                    </p>

                    <p style="font-size: 16px; margin-bottom: 15px;">
                    It's been an incredible 3 years since you joined the BestinGems family.<br>
                    We’re so grateful for your loyalty and trust in us over the years!<br>
                    As a token of our appreciation, here’s a 🎁 <strong>20% OFF</strong> on your next jewelry order!
                    </p>

                    <p style="font-size: 20px; font-weight: bold; color: #444; text-align:center; margin: 10px 0 5px;">
                    Use code: <span style="color: #D6336C;">LOYALTY20</span>
                    </p>
                    <p style="font-size: 14px; color: #555; text-align:center; margin: 0 0 20px;">
                    📅 Valid Until: 06/30/2025
                    </p>

                    <div style="text-align: center; margin: 10px 0 25px;">
                    <a href="https://bestingems.com/redeem-loyalty" 
                        style="background-color: #333333; color: #ffffff; text-decoration: none; padding: 10px 20px; font-size: 16px; border-radius: 4px; font-weight: bold;">
                        Claim Now
                    </a>
                    </div>

                    <p style="font-size: 16px; margin-bottom: 20px;">
                    Thank you for being part of our journey. We can’t wait to create more beautiful memories with you in the years ahead.
                    </p>

                    <div style="text-align: center; margin-bottom: 30px;">
                    <a href="https://bestingems.com/shop" 
                        style="color: #ffb400; text-decoration: none; font-weight: bold; font-size: 18px;">
                        Shop Now
                    </a>
                    </div>

                    <p style="font-size: 16px; margin-top: 10px;">
                    Wishing you endless love and joy!
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