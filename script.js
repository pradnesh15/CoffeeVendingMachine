let totalNotes = 0;

        // Initialize an empty cart and total
        let cart = [];
        let total = 0;

        // Function to add an item to the cart
        function addToCart(productName, price) {
            // Check if the product is already in the cart
            const existingItem = cart.find(item => item.name === productName);
            
            if (existingItem) {
                // If it exists, increment the quantity
                existingItem.quantity += 1;
            } else {
                // If not, add it to the cart with a quantity of 1
                cart.push({ name: productName, price: price, quantity: 1 });
            }
            alert('Item Added to the cart');
            updateCart();
            calculateTotal();
        }

        // Function to update the cart display
        function updateCart() {
            const cartList = document.getElementById("cart");
            cartList.innerHTML = "";

            for (const item of cart) {
                const li = document.createElement("li");
                li.textContent = `${item.name} x${item.quantity} - ₹${(item.price * item.quantity).toFixed(2)}`;
                cartList.appendChild(li);
            }
        }

        // Function to calculate the total price
        function calculateTotal() {
            total = 0;
            for (const item of cart) {
                total += item.price * item.quantity;
            }
            document.getElementById("total").textContent = total.toFixed(2);
        }

     

        function addNote(noteValue) {
            totalNotes += noteValue;
            updateNotesDisplay();
        }

        function updateNotesDisplay() {
            const notesDisplay = document.getElementById("amt");
            notesDisplay.textContent = `Total Value: ₹${totalNotes.toFixed(2)}`;
        }

        function calculateChange() {
            const totalAmountInput = total; // Use the cart total as the total amount
            const totalNotesAmt = totalNotes;
            const changeDiv = document.getElementById("change");

            // Calculate the change amount
            const changeAmount = totalNotesAmt - totalAmountInput;

            if (totalNotesAmt < totalAmountInput) {
                changeDiv.textContent = "Insufficient amount to cover the total cost.";
            } else {
                changeDiv.textContent = `Please Collect your change: ₹${changeAmount.toFixed(2)}`;
            }
        }

        function startProgress() {
            const progressBar = document.getElementById("progress-bar");

            let width = 0;
            const interval = setInterval(function () {
                if (width >= 100) {
                    clearInterval(interval);
                    
                } else {
                    width++;
                    progressBar.style.width = width + "%";
                    progressBar.innerHTML = width + "%";
                }
            }, 50); // Change the interval time to control the speed of progress
        }