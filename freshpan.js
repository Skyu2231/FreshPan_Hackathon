document.addEventListener('DOMContentLoaded', function() {
    const customerBtn = document.getElementById('customerBtn');
    const sellerBtn = document.getElementById('sellerBtn');
    
    function loadCustomerPage() {
        document.body.innerHTML = `
            <div class="container customer-portal">
                <h1>FreshPan Customer</h1>
                <p>Welcome to the customer portal!</p>
                <div class="button-container">
                    <button onclick="window.location.reload()" class="big-button back-button">
                        Back to Home
                    </button>
                </div>
            </div>
        `;
    }

    function loadSellerPage() {
        document.body.innerHTML = `
            <div class="container seller-portal">
                <h1>FreshPan Seller</h1>
                <p>Welcome to the seller portal!</p>
                <div class="button-container">
                    <button onclick="window.location.reload()" class="big-button back-button">
                        Back to Home
                    </button>
                </div>
            </div>
        `;
    }

    customerBtn.addEventListener('click', loadCustomerPage);
    sellerBtn.addEventListener('click', loadSellerPage);
});
