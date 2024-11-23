# Assignment 2 - Bike Store API

This is a **TypeScript** based **Node.js** project that uses **Express.js** for server-side API development and **MongoDB** with **Mongoose** as the database solution. The API supports operations for managing bikes and orders, with features for calculating revenue, handling orders, and managing inventory.

## Features

- **Bike Management**: 
  - Create, retrieve, update, and delete bikes.
  - Manage bike inventory with quantity tracking.
  - Search and filter bikes by name, brand, or category.
  
- **Order Management**:
  - Place orders for bikes.
  - Calculate total revenue from all orders.

- **TypeScript**:
  - Type-safe development for better reliability.
  
- **Express.js**:
  - Lightweight and flexible web framework for building APIs.

- **MongoDB**:
  - Store bike and order data securely.

- **Mongoose**:
  - Object Data Modeling (ODM) for MongoDB.

- **Validation**:
  - Bike and order data are validated using **Zod** for type safety.

- **Environment Variables**:
  - Securely manage configurations like MongoDB connection strings using **dotenv**.


## Getting Started

Follow these instructions to set up the project locally.

### Prerequisites

Before running the project, make sure you have the following installed:

- **Node.js** (>= v18.x)
- **npm** or **yarn**
- **MongoDB** (or use a cloud-based service like MongoDB Atlas)

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd assignment-2
   npm i cors dotenv express  mongoose "ts-node-dev zod...
   
### Bike API:
    **GET**,**POST**= https://assignment-2-nine-omega.vercel.app/api/bike
    **DELETE**,**UPDATE**=https://assignment-2-nine-omega.vercel.app/api/bike/:bikeId
    **Query GET**= https://assignment-2-nine-omega.vercel.app/api/bike?searchTerm=name or brand or category


### Orders API:
**POST** https://assignment-2-nine-omega.vercel.app/api/orders
**GET** https://assignment-2-nine-omega.vercel.app/api/orders/revenue
 
 
