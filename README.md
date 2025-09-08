# 🛍️ Modern E-Commerce Website

Welcome to the Modern E-Commerce Website, a comprehensive online shopping platform designed for a seamless user experience. This project features robust backend authentication with JWT, full CRUD operations for product items with advanced filtering, and a persistent shopping cart. On the frontend, users can easily sign up, log in, browse a filtered list of products, and manage their cart with item persistence across sessions. Built with modern web technologies, this application provides a scalable and intuitive solution for online retail.

## 🚀 Project Repository

Explore the project's source code and development progress here: [Modern-ECommerce-Website](https://github.com/Ayush-silicon/E-Comm-Assignment.git)

## ✨ Features

- 🔑 User Authentication with JWT for secure access.
- 🛒 Comprehensive Product Management (CRUD operations) with advanced filtering by price and categories.
- ➕ Seamless Add to Cart functionality.
- 🚪 Secure User Signup and Login pages.
- 🛍️ Dynamic Product Listing page with intuitive filters.
- 🗑️ Interactive Shopping Cart page with options to add and remove items.
- ✨ Persistent Cart Items, ensuring your selections remain even after logging out.

## 🛠️ Tech Stack

**Frontend:** React.js, JavaScript, CSS
**Backend:** Node.js, JavaScript
**Data Format:** JSON

## ⚙️ Installation

To get this project up and running on your local machine, follow these steps:

1.  Clone the repository:

    ```bash
    git clone https://github.com/Ayush-silicon/E-Comm-Assignment.git
    cd E-Comm-Assignment
    ```

2.  Navigate to the backend directory and install dependencies:

    ```bash
    cd backend
    npm install
    ```

3.  Start the backend server:

    ```bash
    npm start
    ```

4.  Navigate to the frontend directory and install dependencies:

    ```bash
    cd ../frontend
    npm install
    ```

5.  Start the frontend development server:

    ```bash
    npm start
    ```

### Environment Variables

Create a `.env` file in both `backend` and `frontend` directories based on `_PLACEHOLDER_.env` examples and populate with necessary API keys and database credentials.

## 📸 Screenshots

_Add screenshots here_

## 💡 Usage / How it Works

Once both the backend and frontend servers are running, navigate to the frontend application in your browser. You can register a new account or log in with existing credentials. Browse through the product listings, apply filters to find specific items, and add them to your cart. Your cart contents will be saved across sessions. Proceed to the cart page to review your selections before checkout (checkout functionality is for future development). This application showcases a complete user flow for an e-commerce platform from authentication to product browsing and cart management.

## 📂 Folder Structure

```
ecommerce-app/
├── backend/
│   ├── config/
│   │   └── database.js
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── itemController.js
│   │   └── cartController.js
│   ├── middleware/
│   │   └── auth.js
│   ├── models/
│   │   ├── User.js
│   │   ├── Item.js
│   │   └── Cart.js
│   ├── routes/
│   │   ├── auth.js
│   │   ├── items.js
│   │   └── cart.js
│   ├── .env
│   ├── package.json
│   └── server.js
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── Auth/
│   │   │   │   ├── Login.js
│   │   │   │   └── Signup.js
│   │   │   ├── Items/
│   │   │   │   ├── ItemList.js
│   │   │   │   ├── ItemCard.js
│   │   │   │   └── Filters.js
│   │   │   ├── Cart/
│   │   │   │   ├── Cart.js
│   │   │   │   └── CartItem.js
│   │   │   └── Layout/
│   │   │       ├── Header.js
│   │   │       └── ProtectedRoute.js
│   │   ├── context/
│   │   │   ├── AuthContext.js
│   │   │   └── CartContext.js
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── App.js
│   │   ├── App.css
│   │   └── index.js
│   ├── package.json
│   └── .env
└── README.md
```

## 🤝 Contributions

We welcome contributions to enhance this project! To contribute, please follow these steps:

1.  Fork the repository
2.  Clone your fork
3.  Create a new branch
4.  Make your changes
5.  Submit a pull request

## 🔜 Upcoming Features

- 💳 Payment Gateway Integration for seamless checkout.
- 📦 Order Management and Tracking system.
- ⭐ Product Ratings and Reviews.
- 🔍 Advanced Search functionality.
- 📧 Email Notifications for order confirmations and updates.
- 📱 Responsive design for all devices.

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📧 Contact

Ayush Singh
[LinkedIn Profile](https://www.linkedin.com/in/ayush-singh-a67498270/)

