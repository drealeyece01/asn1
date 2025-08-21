/**
Author: Desmond Thompson
Date:   August 03, 2025
ID:     R2409D18577488
Course: LJMU-7505-COMP
Code:   7505
*/

  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
       function increaseQuantity(btn) {
            const input = btn.previousElementSibling;
            input.value = parseInt(input.value) + 1;
            updatePrice();
        }

        function decreaseQuantity(btn) {
            const input = btn.nextElementSibling;
            if (parseInt(input.value) > 1) {
                input.value = parseInt(input.value) - 1;
                updatePrice();
            }
        }

        function removeItem(btn) {
            const cartItem = btn.closest('.cart-item');
            cartItem.remove();
            updatePrice();
        }

        function updatePrice() {
            // Simple price calculation logic
            const items = document.querySelectorAll('.cart-item');
            let total = 0;
            items.forEach(item => {
                const price = parseInt(item.querySelector('.item-price').textContent.replace('$', ''));
                const quantity = parseInt(item.querySelector('.quantity-input').value);
                total += price * quantity;
            });
            
            document.querySelector('.summary-row:first-child span:last-child').textContent = '$' + total;
            document.querySelector('.summary-total span:last-child').textContent = '$' + total;
        }
               // Contact form submission
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const firstName = formData.get('firstName');
            const lastName = formData.get('lastName');
            const email = formData.get('email');
            const subject = formData.get('subject');
            const message = formData.get('message');
            
            // Basic validation
            if (!firstName || !lastName || !email || !subject || !message) {
                alert('Please fill in all required fields.');
                return;
            }
            
            // Simulate form submission
            const submitBtn = this.querySelector('.submit-btn');
            submitBtn.innerHTML = 'Sending...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                alert(`Thank you ${firstName}! Your message has been sent successfully. We'll get back to you within 24 hours.`);
                this.reset();
                submitBtn.innerHTML = 'Send Message';
                submitBtn.disabled = false;
            }, 1500);
        });

        // FAQ accordion functionality
        document.querySelectorAll('.faq-question').forEach(question => {
            question.addEventListener('click', function() {
                const faqItem = this.parentElement;
                const answer = faqItem.querySelector('.faq-answer');
                const isActive = this.classList.contains('active');
                
                // Close all other FAQ items
                document.querySelectorAll('.faq-question').forEach(q => {
                    q.classList.remove('active');
                    q.parentElement.querySelector('.faq-answer').classList.remove('active');
                });
                
                // Toggle current FAQ item
                if (!isActive) {
                    this.classList.add('active');
                    answer.classList.add('active');
                }
            });
        });
            // Filter functionality
        document.querySelector('.filter-select').addEventListener('change', function() {
            const filterValue = this.value;
            console.log('Filtering orders for:', filterValue);
            // In a real application, this would filter the orders based on the selected timeframe
        });

        // Add click handlers for order rows
        document.querySelectorAll('.table-row').forEach(row => {
            row.addEventListener('click', function() {
                const orderNumber = this.querySelector('.order-number').textContent;
                console.log('Clicked on order:', orderNumber);
                // In a real application, this would show order details or navigate to order detail page
            });
        });
               function changeImage(thumbnail) {
            const mainImage = document.getElementById('mainImage');
            const thumbnails = document.querySelectorAll('.thumbnail');
            
            // Remove active class from all thumbnails
            thumbnails.forEach(thumb => thumb.classList.remove('active'));
            
            // Add active class to clicked thumbnail
            thumbnail.classList.add('active');
            
            // Change main image source
            mainImage.src = thumbnail.src.replace('w=150&h=180', 'w=500&h=600');
        }

        function changeQuantity(change) {
            const quantityInput = document.getElementById('quantity');
            let currentValue = parseInt(quantityInput.value);
            let newValue = currentValue + change;
            
            if (newValue >= 1) {
                quantityInput.value = newValue;
                updatePrice();
            }
        }

        function updatePrice() {
            const quantity = parseInt(document.getElementById('quantity').value);
            const basePrice = 188;
            const totalPrice = basePrice * quantity;
            const addToCartBtn = document.querySelector('.add-to-cart-btn');
            addToCartBtn.textContent = `Add to Cart - $${totalPrice}`;
        }

        function addToCart() {
            const size = document.querySelector('.size-btn.active').dataset.size;
            const color = document.querySelector('.color-btn.active').dataset.color;
            const quantity = document.getElementById('quantity').value;
            
            alert(`Added to cart: ${quantity}x Riley High-Waist Leggings (Size: ${size}, Color: ${color})`);
            
            // Update cart count
            const cartCount = document.querySelector('.cart-count');
            cartCount.textContent = parseInt(cartCount.textContent) + parseInt(quantity);
        }

        // Size selection
        document.querySelectorAll('.size-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
                this.classList.add('active');
            });
        });

        // Color selection
        document.querySelectorAll('.color-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                document.querySelectorAll('.color-btn').forEach(b => b.classList.remove('active'));
                this.classList.add('active');
            });
        });