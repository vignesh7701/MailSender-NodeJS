module.exports = function getOrderConfirmationTemplate() {
  const dummyOrder = {
    orderNo: "BG-21523",
    orderDate: new Date().toISOString(),
    customerName: "Vignesh",
    customerEmail: "vignesh@example.com",
    shippingAddr: {
      addr1: "123 Diamond Street",
      addr2: "Suite 101",
      city: "Gem City",
      state: "California",
      country: "USA",
      zip: "123456",
      phone: "+1-555-1234",
    },
    creditUnit: 14.0,
    shippingAmount: 5.0,
    items: [
      {
        image:
          "https://ecommstorageaccount1.blob.core.windows.net/container1/placeholder.png",
        description:
          "Larimar Cab Round 11mm Matching Pair Approximately 10 Carat.",
        qty: 1,
        unitPrice: 150.0,
        sku: "SKU123456",
        certificate: "$75.00",
      },
      {
        image:
          "https://ecommstorageaccount1.blob.core.windows.net/container1/placeholder.png",
        description: "Gold Pendant",
        qty: 2,
        unitPrice: 25.0,
        sku: "SKU654321",
        certificate: "$15.00",
      },
    ],
  };

  const data = {
    ...dummyOrder,
    items: dummyOrder.items,
  };

  const formattedDate = new Date(data.orderDate).toLocaleDateString();

  const subTotal = data.items.reduce(
    (sum, item) => sum + item.qty * item.unitPrice,
    0
  );

  const finalTotal = subTotal + 30; 

  const rowsHtml = data.items
    .map(
      (item, i) => `
      <tr style="border-bottom: 1px solid #e0e0e0;">
        <td style="padding: 12px 8px; font-size: 12px; color: #333333;">${
          i + 1
        }</td>
        
        <td style="padding: 12px 8px; font-size: 12px; color: #333333;">
          <table role="presentation" cellspacing="0" cellpadding="0" border="0">
            <tr>
              <td style="padding-right: 8px;">
                <img src="${
                  item.image
                }" onerror="this.src='https://ecommstorageaccount1.blob.core.windows.net/container1/placeholder.png';"
                     alt="product" style="width: 30px; height: 30px; vertical-align: middle;" />
              </td>
              <td style="font-size: 12px; color: #333333;">
                ${item.description}<br>
                <small style="color: #666666;">${item.sku || ""}</small>
              </td>
            </tr>
          </table>
        </td>

        <td style="padding: 12px 8px; text-align: center; font-size: 12px; color: #333333;">${
          item.qty
        }</td>
        <td style="padding: 12px 8px; text-align: right; font-size: 12px; color: #333333;">$${item.unitPrice.toFixed(
          2
        )}</td>
        <td style="padding: 12px 8px; text-align: right; font-size: 12px; color: #e74c3c;">${
          item.discount ? `$${item.discount.toFixed(2)}` : "$0.00"
        }</td>
        <td style="padding: 12px 8px; text-align: right; font-size: 12px; color: #e74c3c;">${
          item.certificate || ""
        }</td>
        <td style="padding: 12px 8px; text-align: right; font-size: 12px; color: #333333; font-weight: bold;">$${(
          item.qty * item.unitPrice
        ).toFixed(2)}</td>
      </tr>`
    )
    .join("");


  return {
    subject: `Order Confirmation - ${data.orderNo}`,
    text: `Hi ${data.customerName}, your order #${data.orderNo} has been confirmed.`,
    html: `
  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Order Confirmation - BestinGems</title>
    <style>
        /* Reset styles */
        body, table, td, p, a, li, blockquote {
             font-family: Roboto, Arial, sans-serif;
            -webkit-text-size-adjust: 100%;
            -ms-text-size-adjust: 100%;
        }
        table, td {
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
        }
        .logo img {
          max-height: 40px;
          margin-right: 5px;
        }
        img {
            -ms-interpolation-mode: bicubic;
            border: 0;
            height: auto;
            line-height: 100%;
            outline: none;
            text-decoration: none;
        }
        
        /* Responsive styles */
        @media only screen and (max-width: 600px) {
            .container {
                width: 100% !important;
                max-width: 100% !important;
            }
            .mobile-padding {
                padding: 10px !important;
            }
            .mobile-text {
                font-size: 14px !important;
            }
            .mobile-header {
                font-size: 18px !important;
            }
            .product-table {
                font-size: 12px !important;
            }
            .product-table td {
                padding: 5px 2px !important;
            }
            .total-section {
                font-size: 14px !important;
            }
            .grand-total {
                width: 30% !important;
                font-size: 18px !important;
            }
        }
        
        @media only screen and (max-width: 480px) {
            .mobile-text {
                font-size: 12px !important;
            }
            .mobile-header {
                font-size: 16px !important;
            }
            .product-table {
                font-size: 10px !important;
            } 
        }
    </style>
</head>
<body style="margin: 0; padding: 0; background-color: #f5f5f5; font-family: Arial, sans-serif;">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #f5f5f5;">
        <tr>
            <td align="center" style="padding: 20px 0;">
                <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="700" class="container" style="background-color: #ffffff; max-width: 700px; margin: 0 auto;">
                    <!-- Header -->
                    <tr>
                        <td style="padding: 20px 30px; border-bottom: 2px solid #333333; margin: 10px 0 10px 0;" class="mobile-padding">
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                                <tr>
                                    <td>
                                      <div class="logo">
                                        <img src="https://ecommstorageaccount1.blob.core.windows.net/container1/logo1.png"  onerror="this.src='https://ecommstorageaccount1.blob.core.windows.net/container1/placeholder.png';" alt="Best in Gems">
                                      </div>
                                        <p style="margin: 5px 0 0 0; font-size: 14px; color: #666666;">www.bestingems.com</p>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    
                    <!-- Content -->
                    <tr>
                      <td align="right">
                          <div style="text-align: right; margin: 0 30px;">
                              <h2 style="margin: 0; font-size: 16px; color: #333333; font-weight: bold;">Order Confirmation</h2>
                              <p style="margin: 5px 0 0 0; font-size: 14px; color: #4a90e2;">
                                  <a href="#" style="color: #4a90e2; text-decoration: underline;">Order #: BG-21523</a>
                              </p>
                          </div>
                      </td> 
                    </tr>

                    <tr>
                        <td style="padding: 30px;" class="mobile-padding">
                            <p style="margin: 0 0 20px 0; font-size: 16px; color: #333333; line-height: 1.5;" class="mobile-text">
                               Dear ${data.customerName}, 

                            </p>
                            
                            <p style="margin: 0 0 30px 0; font-size: 15px; color: #333333; line-height: 1.5;" class="mobile-text">
                                Thank you for your purchase from BestinGems! Your order has been successfully placed and is now being processed. We are thrilled to have you as a valued customer and look forward to providing you with exquisite gemstones.
                            </p>
                            
                            <!-- Order Summary -->
                            <h2 style="margin: 0 0 20px 0; font-size: 20px; color: #333333; font-weight: bold;" class="mobile-header">Order Summary</h2>
                            <hr style="border: 0; border-top: 2px solid #cccccc; margin: 3px 0;">
                            <p style="margin: 0 0 10px 0; font-size: 14px; color: #333333;" class="mobile-text">
                                <strong>Order #:</strong> ${data.orderNo}
                            </p>
                            <p style="margin: 0 0 20px 0; font-size: 14px; color: #333333;" class="mobile-text">
                                <strong>Order Date:</strong> ${formattedDate}
                            </p>
                            
                            <!-- Billing and Shipping -->
                         <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin-bottom: 30px;"> 
                              <tr>
                                <td width="50%" style="vertical-align: top; padding-right: 15px;">
                                  <div style="border: 1px solid #cccccc; padding: 15px; height: 100%;">
                                    <h3 style="margin: 0 0 15px 0; font-size: 15px; color: #333333; font-weight: bold; background-color: #f2f2f2; padding: 10px;" class="mobile-text">
                                      BILLING ADDRESS
                                    </h3>
                                    <p style="margin: 0; font-size: 14px; color: #333333; line-height: 1.4;" class="mobile-text">
                                      ${data?.customerName}<br>
                                      ${data?.shippingAddr.addr1}<br>
                                      ${data?.shippingAddr.addr2}<br>
                                      ${data?.shippingAddr.city}, ${data?.shippingAddr.state}, ${data?.shippingAddr.zip}<br>
                                      Ph: ${data?.shippingAddr.phone}<br>
                                      ${data?.customerEmail}<br>
                                    </p>
                                  </div>
                                </td>

                                <td width="50%" style="vertical-align: top; padding-left: 15px;">
                                  <div style="border: 1px solid #cccccc; padding: 15px; height: 100%;">
                                    <h3 style="margin: 0 0 15px 0; font-size: 15px; color: #333333; font-weight: bold; background-color: #f2f2f2; padding: 10px;" class="mobile-text">
                                      SHIPPING INFO
                                    </h3>
                                    <p style="margin: 0; font-size: 14px; color: #333333; line-height: 1.4;" class="mobile-text">
                                      ${data?.customerName}<br>
                                      ${data?.shippingAddr.addr1}<br>
                                      ${data?.shippingAddr.addr2}<br>
                                      ${data?.shippingAddr.city}, ${data?.shippingAddr.state}, ${data?.shippingAddr.zip}<br>
                                      Ph: ${data?.shippingAddr.phone}<br>
                                      ${data?.customerEmail}<br>
                                    </p>
                                  </div>
                                </td>
                              </tr>
                            </table>
                            
                            <!-- Product Table -->
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="border-collapse: collapse; margin-bottom: 20px;" class="product-table">
                                <tr style="background-color: #2964ED; color: white;">
                                    <th style="padding: 12px 8px; text-align: left; font-size: 12px; font-weight: bold;">Sno.</th>
                                    <th style="padding: 12px 2px; text-align: left; font-size: 12px; font-weight: bold;">Product Description</th>
                                    <th style="padding: 12px 8px; text-align: center; font-size: 12px; font-weight: bold;">Qty</th>
                                       <th style="padding: 12px 8px; text-align: left; font-size: 12px; font-weight: bold;">Unit Price</th>
                                    <th style="padding: 12px 8px; text-align: right; font-size: 12px; font-weight: bold;">Discount</th>
                                    <th style="padding: 12px 8px; text-align: right; font-size: 12px; font-weight: bold;">Certificate</th>
                                    <th style="padding: 12px 8px; text-align: right; font-size: 12px; font-weight: bold;">Total</th>
                                </tr>
                                
                                 ${rowsHtml}
                            </table>
                            
                            <!-- Total Section -->
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" class="total-section">
                                <tr>
                                    <td width="60%"></td>
                                    <td width="40%">
                                        <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
                                            <tr>
                                                <td style="padding: 5px 0; text-align: right; font-size: 13px; color: #333333;">Total</td>
                                                <td style="padding: 5px 0; text-align: right; font-size: 13px; color: #333333; font-weight: bold; width: 80px;">$60.00</td>
                                            </tr>
                                            <tr>
                                                <td style="padding: 5px 0; text-align: right; font-size: 13px; color: #333333;">
                                                    Coupon Discount<br>
                                                    <small style="color: #e74c3c;">NEWYEAR</small>
                                                </td>
                                                <td style="padding: 5px 0; text-align: right; font-size: 13px; color: #e74c3c; font-weight: bold;">-$11.00</td>
                                            </tr>
                                            <tr>
                                                <td style="padding: 5px 0; text-align: right; font-size: 13px; color: #333333;">Credits</td>
                                                <td style="padding: 5px 0; text-align: right; font-size: 13px; color: #333333; font-weight: bold;">$2.00</td>
                                            </tr>
                                            <tr>
                                                <td style="padding: 5px 0; text-align: right; font-size: 13px; color: #333333;">Certificate Cost</td>
                                                <td style="padding: 5px 0; text-align: right; font-size: 13px; color: #333333; font-weight: bold;">$0.00</td>
                                            </tr>
                                            <tr>
                                                <td style="padding: 5px 0; text-align: right; font-size: 13px; color: #333333;">SubTotal</td>
                                                <td style="padding: 5px 0; text-align: right; font-size: 13px; color: #333333; font-weight: bold;">$47.00</td>
                                            </tr>
                                            <tr>
                                                <td style="padding: 5px 0; text-align: right; font-size: 13px; color: #333333;">Shipping</td>
                                                <td style="padding: 5px 0; text-align: right; font-size: 13px; color: #333333; font-weight: bold;">$0.00</td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                            
                            <!-- Grand Total -->
                          <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin-top: 20px;">
                            <tr>
                              <td align="right">
                                <table role="presentation" cellspacing="0" cellpadding="0" border="0" style="background-color: #2964ED; min-width: 220px;">
                                  <tr>
                                    <td style="padding: 12px 20px; text-align: right; color: white; font-size: 16px; font-weight: bold;">
                                      Grand Total &nbsp;&nbsp; $47.00
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </table>

                            
                            <!-- Footer Content -->
                            <p style="margin: 30px 0 10px 0; font-size: 14px; color: #333333; line-height: 1.5;" class="mobile-text">
                                If you have any questions or need assistance, feel free to reach out to us at 
                                <a href="mailto:support@bestingems.com" style="color: #4a90e2; text-decoration: underline;">Bestingems.com</a>. 
                                We'll keep you updated with the shipping details as soon as your order is dispatched.
                            </p>
                            
                            <p style="margin: 0 0 10px 0; font-size: 14px; color: #333333; line-height: 1.5;" class="mobile-text">
                                Thank you for choosing BestinGems!<br>
                                We hope you love your purchase as much as we enjoyed crafting it for you.
                            </p>
                            
                            <p style="margin: 20px 0 0 0; font-size: 14px; color: #333333; line-height: 1.5;" class="mobile-text">
                                Warm regards,<br>
                                The BestinGems Team
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
