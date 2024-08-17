document.addEventListener('DOMContentLoaded', function() {
    const ticketForm = document.getElementById('ticket-form');
    const totalPriceElement = document.getElementById('total-price');
    const adultTicketPrice = 20;
    const adultQuantityInput = document.getElementById('adult-quantity');
  
    // Function to update the total price
    function updateTotalPrice() {
      const adultQuantity = parseInt(adultQuantityInput.value) || 0;
      const totalPrice = adultQuantity * adultTicketPrice;
      totalPriceElement.textContent = `$${totalPrice.toFixed(2)}`;
    }
  
    // Event listener for form submission
    ticketForm.addEventListener('submit', (event) => {
      event.preventDefault(); // Prevent default form submission 
      // Hide the form and show the confirmation
      ticketForm.style.display = 'none'; 
      document.getElementById('confirmation').style.display = 'block';
    });
  
    // Event listeners for quantity buttons 
    document.getElementById('decrement-adult').addEventListener('click', () => {
      const currentValue = parseInt(adultQuantityInput.value);
      if (currentValue > 1) { 
        adultQuantityInput.value = currentValue - 1;
        updateTotalPrice();
      }
    });
  
    document.getElementById('increment-adult').addEventListener('click', () => {
      const currentValue = parseInt(adultQuantityInput.value);
      adultQuantityInput.value = currentValue + 1;
      updateTotalPrice();
    });
  
    // Initial price update
    updateTotalPrice();
  });