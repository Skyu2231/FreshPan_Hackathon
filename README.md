#  FreshPan – Decentralized Food Ordering dApp

FreshPan is a WEB3 enabled ordering application built using HTML, CSS, JavaScript, Solidity(not-enabled as of now) and Viem for blockchain interaction. It allows food sellers(especially housewives) to upload dishes (on-demand or pre-cooked) and customers to order healthy homemade food using cryptocurrency (ETH) at very cheap-cost, with options for self-pickup or fast delivery.

---
## 💡 Project Concept

**FreshPan** is a WEB3-powered food marketplace built to empower individuals—especially housewives—by turning their cooking skills into a source of passive income. 

In many households, surplus food often goes to waste. At the same time, students, working professionals, and health-conscious individuals are actively seeking affordable, home-cooked, hygienic meals nearby. **FreshPan bridges this gap.**

Through this platform (currently a working prototype), housewives and home chefs can:

-  Upload extra food items they’ve prepared
-  Accept on-demand orders if they’re available to cook
-  Earn income by selling fresh, homemade food to people in their local area

Consumers benefit by:

-  Getting healthy, affordable, home-style meals
-  Finding food options nearby, reducing wait time and delivery costs
-  Supporting their local community directly

FreshPan promotes **local food sustainability**, **women empowerment**, and a **decentralized peer-to-peer food network (still working)** where both sellers and buyers benefit from trustless, wallet-based crypto transactions.

This is more than a food ordering app — it’s a mission to **reduce food waste**, **support home-based earners**, and **build decentralized micro-economies**.

##  Features

-  **Sellers** can:
  - Upload food dishes (name, price, image, wallet address)
  - Store dish data on-chain (via smart contracts)
  - Remove their own uploaded dishes

-  **Customers** can:
  - Choose between **SELF** and **FAST** delivery
  - Browse nearby dishes
  - Pay using MetaMask (ETH based on USD price via Chainlink Oracle)
  - Pay an **optional $0.30 delivery fee** when choosing FAST

-  **Decentralized**:
  - I am working on decentralization.. Will be completely decentralized soon.
  - Uses Chainlink-PriceFeeds for real-time ETH/USD pricing

---

## Here's How it looks like:

![Screenshot (11) - Copy](https://github.com/user-attachments/assets/cdad7d83-b636-4902-900b-decf59b45acb)



## ⚙️ How It Works

1. 🍽️ **Seller uploads a dish**  
   - The seller navigates to `seller.html` and submits a dish with image, name, price, and wallet address.

2. 💾 **Dish data is stored **  
   - The dish information is stored in the browser’s `localStorage` (temporary, non-decentralized yet storage).

3. 📋 **Dishes displayed on foods.html**  
   - On `foods.html`, all static and uploaded dishes are listed with prices, images, and descriptions.

4. 🛒 **User selects a dish**  
   - Clicking "BUY" on a dish redirects the user to `transaction.html` with the selected food and price passed in the URL.

5. 🔗 **MetaMask connection + ETH/USD conversion**  
   - On `transaction.html`, the user connects their MetaMask wallet.  
   - ETH equivalent of the dish’s USD price is fetched using the Chainlink ETH/USD Price Feed on Sepolia Testnet.

6. 💸 **Payment is sent to the seller**  
   - Once the user clicks "Buy", ETH is transferred directly to the seller’s wallet using the Viem library.




## Improvements on which I am working:

-  **Store Images on IPFS**  
  Use [IPFS](https://ipfs.tech/) to store dish images in a decentralized and tamper-proof way instead of relying on base64 or centralized URLs.

-  **Use The Graph to Index Dishes**  
  Integrate [The Graph Protocol](https://thegraph.com/) to create a powerful, queryable API for all dishes listed on-chain, making the frontend faster and more reliable.

-  **Add Rating System**  
  Allow buyers to rate dishes and sellers after purchase. Ratings will be recorded on-chain or stored via decentralized reputation systems.

-  **Enable Chat Between Buyer and Seller**  
  Integrate a decentralized messaging protocol like [XMTP](https://xmtp.org/) or [Waku](https://waku.org/) to facilitate direct, secure communication between users.

-  **Use Decentralized Identity (DID) for Login**  
  Implement DID authentication using protocols like [Ceramic](https://ceramic.network/) or [Ethereum Name Service (ENS)](https://ens.domains/) to provide identity-based login without relying on centralized accounts.

 **Enable Full Decentralization via Blockchain Deployment**  
  Deploy all critical logic—including dish storage, payments, seller registration, and order status—on the Ethereum blockchain (or compatible networks like Polygon or Arbitrum). Use Solidity smart contracts to manage this logic transparently and securely.

