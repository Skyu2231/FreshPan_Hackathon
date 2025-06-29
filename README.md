# 🍽️ FreshPan – Decentralized Food Ordering dApp

FreshPan is a WEB3 enabled ordering application built using HTML, CSS, JavaScript, Solidity(not-enabled as of now) and Viem for blockchain interaction. It allows food sellers(especially housewives) to upload dishes (on-demand or pre-cooked) and customers to order healthy homemade food using cryptocurrency (ETH) at very cheap-cost, with options for self-pickup or fast delivery.

---

## 🧩 Features

- 👩‍🍳 **Sellers** can:
  - Upload food dishes (name, price, image, wallet address)
  - Store dish data on-chain (via smart contracts)
  - Remove their own uploaded dishes

- 🛍️ **Customers** can:
  - Choose between **SELF** and **FAST** delivery
  - Browse nearby dishes
  - Pay using MetaMask (ETH based on USD price via Chainlink Oracle)
  - Pay an **optional $0.30 delivery fee** when choosing FAST

- 🔒 **Decentralized**:
  - I am working on decentralization.. Will be completely decentralized soon.
  - Uses Chainlink-PriceFeeds for real-time ETH/USD pricing

---

## 📁 Project Structure
freshpan/
├── index.html
├── customer.html
├── seller.html
├── foods.html
├── transaction.html
├── styles/
│ ├── seller.css
│ ├── foods.css
│ ├── transaction.css
├── scripts/
│ ├── transaction.js
├── contracts/
│ └── FreshPan.sol
├── README.md

