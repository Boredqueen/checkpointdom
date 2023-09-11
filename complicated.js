document.addEventListener("DOMContentLoaded", function () {
    const quantityInputs = document.querySelectorAll(".quantity-input");
    const increaseButtons = document.querySelectorAll(".increase");
    const decreaseButtons = document.querySelectorAll(".decrease");
    const removeButtons = document.querySelectorAll(".remove");
    const subtotalElements = document.querySelectorAll(".subtotal");
    const totalElement = document.getElementById("total");
    const likebutton  = document.getElementsByClassName("fa-heart")
  
  
    // Function to update subtotal and total
    function updateSubtotal(itemIndex) {
        const quantity = parseInt(quantityInputs[itemIndex].value);
        const price = 20.00; // Replace with the actual price of the product
        const subtotal = quantity * price;
        subtotalElements[itemIndex].textContent = `$${subtotal.toFixed(2)}`;
        calculateTotal();
    }

    // Function to calculate the total
    function calculateTotal() {
        let total = 0;
        subtotalElements.forEach(subtotalElement => {
            total += parseFloat(subtotalElement.textContent.replace("$", ""));
        });
        totalElement.textContent = `Total: $${total.toFixed(2)}`;
    }

    // Event listeners for increase and decrease buttons
    increaseButtons.forEach((button, index) => {
        button.addEventListener("click", () => {
            quantityInputs[index].value++;
            updateSubtotal(index);
        });
    });

    decreaseButtons.forEach((button, index) => {
        button.addEventListener("click", () => {
            if (quantityInputs[index].value > 1) {
                quantityInputs[index].value--;
                updateSubtotal(index);
            }
        });
    });

    // Event listener for remove button
    removeButtons.forEach((button, index) => {
        button.addEventListener("click", () => {
            // Remove the corresponding cart item
            const cartItem = button.closest(".cart-item");
            
            cartItem.remove();
            // Recalculate the total after removing
            calculateTotal();
        });
    });

// Event listener for remove button
remove-allButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        // Remove the corresponding cart item
        const CartItems = button.closest(".Cart-Items");
        
        CartItems.remove();
        // Recalculate the total after removing
        calculateTotal();
    });
});




    // Event listener for input change
    quantityInputs.forEach((input, index) => {
        input.addEventListener("input", () => {
            updateSubtotal(index);
        });
    });

    // Initial calculation
    calculateTotal();
});
    likebutton.forEach((button,index) => {
    button.addEventListener("click", () => {
        index.style.color ="red"
        
    });
});
//likebutton.addEventListener("click", aimer );
//function aimer(){
    likebutton.style.color="red"

//}
   

   
    
    




