 let loader = document.querySelector(".loadPage");
 let container = document.querySelector(".container");
 let cards = document.querySelectorAll(".card");

 // index.js

document.addEventListener('DOMContentLoaded', function () {
  const customerForm = document.getElementById('customerForm');

  customerForm.addEventListener('submit', function (event) {
      event.preventDefault();

      // Fetch values from the form
      const customerName = document.getElementById('customerName').value;
      const customerId = document.getElementById('customerId').value;
      const customerAddress = document.getElementById('customerAddress').value;
      const customerPhone = document.getElementById('customerPhone').value;
      const milkType = document.querySelector('input[name="milkType"]:checked').value;

      // Do something with the form data, e.g., send it to a server or display it
      console.log('Customer Name:', customerName);
      console.log('Customer ID:', customerId);
      console.log('Address:', customerAddress);
      console.log('Phone Number:', customerPhone);
      console.log('Milk Type:', milkType);

      // You can add further logic based on the selected milk type
      if (milkType === 'Buffalo Milk') {
          // Handle buffalo milk specific actions
          console.log('Buffalo Milk selected');
      } else if (milkType === 'Cow Milk') {
          // Handle cow milk specific actions
          console.log('Cow Milk selected');
      }
      // Reset the form after submission
      customerForm.reset();
  });
});


 cards.forEach(function(card){
   card.addEventListener("click", function(){
      console.log(card);
      document.querySelector("body").appendChild(div)
   })
 })

//  loading effect
 container.style.display="none";

   setInterval(function(){
      container.style.display="block";
     
         loader.style.display="none"
      },2000)

 