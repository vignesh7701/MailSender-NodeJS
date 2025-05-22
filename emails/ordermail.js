module.exports = function getOrderConfirmationTemplate() {
  const dummyOrder = {
    orderNo: "ORD123456",
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
        description: "1.50 ct. Diamond Ring",
        qty: 1,
        unitPrice: 150.0,
        certificate: "GIA-123456",
      },
      {
        image:
          "https://ecommstorageaccount1.blob.core.windows.net/container1/placeholder.png",
        description: "Gold Pendant",
        qty: 2,
        unitPrice: 25.0,
        certificate: "IGI-789012",
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
  const finalTotal = subTotal + 30; // Dummy shipping/tax

  const rowsHtml = data.items
    .map(
      (item, i) => `
      <tr>
        <td>${i + 1}</td>
        <td><img src="${
          item.image
        }" onerror="this.src='https://ecommstorageaccount1.blob.core.windows.net/container1/placeholder.png';" alt="product" /></td>
        <td>${item.description}</td>
        <td>${item.qty}</td>
        <td>$${item.unitPrice.toFixed(2)}</td>
        <td>${item.certificate || ""}</td>
        <td>$${(item.qty * item.unitPrice).toFixed(2)}</td>
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
  <meta charset="UTF-8" />
  <title>Order Confirmation</title>
  <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #f2f2f2;
            margin: 0;
            padding: 0;
          }
          .email-container {
            max-width: 700px;
            background-color: #ffffff;
            margin: 20px auto;
            padding: 20px 5px;
            border-radius: 5px;
          }
          .header {
            display: flex; 
            justify-content: space-between;
            align-items: center; 
            padding-bottom: 10px;
          }
          .logo img {
            max-height: 50px;
            margin-right: 10px;
          }
          .right-section {
            margin-top: 10px;
            text-align: right;
            width: 100%;
          }
          .right-section a {
            color: blue;
            text-decoration: none;
            font-size: 14px;
          }
          .order-number {
            font-size: 16px;
            padding: 5px 0;
            border-top: 1px solid #000000;
            font-weight: bold;
            margin-top: 5px;
          }
          .content {
            margin-top: 20px;
          }
          .order-details {  
            border: 1px solid #2964ED;
            margin-top: 20px;
          }
          .summary {
            font-weight: bold; 
            display: inline-block; /* Ensures proper spacing */
          }

          .coupon-discount {
            display: block; /* Moves the coupon code to a new line */
            font-style: italic;
            color: #555;
            margin-top: 5px; /* Adds some space above the coupon code */
            font-size: 12px; /* Adjusted to match the reference */
            margin-left: 100px; 
          }

           table.summary-table {
            width: 100%;
            border-collapse: collapse;
            table-layout: fixed;
            font-size: 13px;
          }

          .summary-table th,
          .summary-table td {
            padding: 6px 5px;
            text-align: left;
            word-wrap: break-word;
            overflow-wrap: break-word;
            border: 1px solid #cccccc;
            vertical-align: top;
          }

          .summary-table th {
            background-color: #2964ED;
            color: #ffffff;
            font-weight: bold;
            font-size: 13px;
            border: 1px solid #ffffff;
          }

          .summary-table img {
            max-width: 40px;
            height: auto;
            display: block;
            margin: 0 auto;
          }

          /* Mobile-specific styling */
          @media only screen and (max-width: 600px) {
            .summary-table {
              font-size: 11px !important;
            }

            .summary-table th,
            .summary-table td {
              padding: 4px 3px !important;
            }

            .summary-table th {
              font-size: 11px !important;
            }

            .summary-table td img {
              max-width: 30px !important;
            }
          }

          .total-section {
            text-align: right;
            margin-top: 10px;
            padding: 10px 10px;
          }
          .grand-total { 
            background-color: #2964ED;
            color: #ffffff;
            padding: 20px ; 
            width: 250px;
            text-align: right;
            font-size: 18px;
            font-weight: bold;
            margin-left: auto;
          }
          .containerInfo {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            font-size: small;
            width: 100%;
          }

          .containerInfo > div {
            width: 50%;
          }

          .containerInfo > div:first-child {
            flex: 1;
          }

          .containerInfo > div:last-child {
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: flex-end; /* <-- Important */
            text-align: right;
          }
          .coupon-discount {
            color: red;
            font-size: 12px;
            font-style: italic;
          }
        </style>
</head>
<body>
  <div class="email-container">
    <div class="header">
      <div class="logo">
              <img src="https://ecommstorageaccount1.blob.core.windows.net/container1/logo1.png"  onerror="this.src='https://ecommstorageaccount1.blob.core.windows.net/container1/placeholder.png';" alt="Best in Gems">
            </div>
            <div class="right-section">
              <a href="https://www.bestingems.com/" target="_blank">Bestingems.com</a>
              <div class="order-number">Order Confirmation</div>
              <a href="#">Order #: ${data?.orderNo}</a>
            </div>
    </div>
       <div class="content">

    <p>Dear ${data?.customerName ?? "User"},</p>
    <p>Thank you for your purchase from BestinGems! Your data has been successfully placed and is now being processed. We are thrilled to have you as a valued customer and look forward to providing you with high quality products.</p>
    <h3>Order Summary</h3>

    <hr />
    <p>Order #: ${data.orderNo}</p>
    <p>Order Date: ${formattedDate}</p>
    <div class="containerInfo">
    <div>
     <h4>Billing Address</h4>
                
                 <p>${data.customerName}</p>
                <p>${data.shippingAddr.addr1 || data.shippingAddr.addr2}, ${
      data.shippingAddr.city
    }, ${data.shippingAddr.state} ${data.shippingAddr.zip}</p>
                <p>Ph: ${data.shippingAddr.phone}</p>
                <p>${data.customerEmail}</p>
              </div>
              <div> 
              <h4>Shipping Address</h4>
                 <p>${data.customerName}</p>
                <p>${data.shippingAddr.addr1 || data.shippingAddr.addr2}, ${
      data.shippingAddr.city
    }, ${data.shippingAddr.state} ${data.shippingAddr.zip}</p>
                <p>Ph: ${data.shippingAddr.phone}</p>
                <p>${data.customerEmail}</p>
              </div>
            </div>
<div class="data-details">
    <table class="summary-table">
      <thead>
        <tr>
          <th style="width: 8%;">S.No.</th>
          <th style="width: 15%;">Image</th>
          <th style="width: 35%;">Description</th>
          <th style="width: 8%;">Qty</th>
          <th style="width: 12%;">Unit Price</th>
          <th style="width: 10%;">Certificate</th>
          <th style="width: 12%;">Total</th>
        </tr>

      </thead>
      <tbody>
        ${rowsHtml}
      </tbody>
    </table>

    <div class="total-section">

    <p>SubTotal: <span class="summary"> $${subTotal}</span></p>
              <p>
                Coupon Discount:
                <span class="summary">
                  $
                  ${
                    data?.orderCoupon?.couponValue
                      ? data.orderCoupon.couponValue
                      : "0.00"
                  }
                </span>
              </p>  
              <p class="coupon-discount">
                ${
                  data?.orderCoupon?.couponCode
                    ? data.orderCoupon.couponCode
                    : ""
                }
              </p>

                <p>Credits: <span class="summary"> $${
                  data?.creditUnit
                }</span></p>
                <p>Shipping: <span class="summary"> $${
                  data?.shippingAmount
                }</span></p>

    </div>

    <div class="grand-total">Grand Total: <span class="summary"> $${finalTotal}</span></div>

    </div>
</div>
    <p>If you have any questions or need assistance, feel free to reach out to us at <a href="https://www.bestingems.com/" target="_blank">Bestingems.com</a>. We’ll keep you updated with the shipping details as soon as your order is dispatched.</p>
          <p>Thank you for choosing BestinGems! We hope you love your purchase as much as we enjoyed crafting it for you.</p>
          <p>Warm regards,<br> BestinGems Team</p>
  </div>
</body>
  </html>`,
  };
};
