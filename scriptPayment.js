function selectPayment(method) {
  let paymentDetails = document.getElementById('selected-method');

  switch (method) {
      case 'UPI':
          paymentDetails.innerHTML = `
              <h3>UPI Payment</h3>
              <p>Enter your UPI ID:</p>
              <input type="text" placeholder="example@upi">
              <button type="button">Pay Now</button>
          `;
          break;
      case 'Paytm':
          paymentDetails.innerHTML = `
              <h3>Paytm Payment</h3>
              <p>Enter your Paytm number:</p>
              <input type="text" placeholder="Mobile Number">
              <button type="button">Pay Now</button>
          `;
          break;
      case 'Google Pay':
          paymentDetails.innerHTML = `
              <h3>Google Pay</h3>
              <p>Enter your Google Pay number:</p>
              <input type="text" placeholder="Mobile Number">
              <button type="button">Pay Now</button>
          `;
          break;
      case 'Card':
          paymentDetails.innerHTML = `
              <div class="payment-box">
                  <h3>Card Payment</h3>

                  <form action="#" method="POST">
                      <label for="name">Full Name:</label>
                      <input type="text" id="name" name="name" required>

                      <label for="email">Email:</label>
                      <input type="email" id="email" name="email" required>

                      <label for="card">Card Number:</label>
                      <input type="text" id="card" name="card" required>

                      <label for="expiry">Expiry Date:</label>
                      <input type="text" id="expiry" name="expiry" placeholder="MM/YY" required>

                      <label for="cvv">CVV:</label>
                      <input type="text" id="cvv" name="cvv" required>

                      <button type="submit">Pay Now</button>
                  </form>
              </div>
          `;
          break;
      default:
          paymentDetails.innerHTML = `<p>Select a payment method to proceed.</p>`;
  }
}
