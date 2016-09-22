# Journal app API documentation

**Table of Contents** 

- [**Get Item**](#get-item)
- [**Item Categories**](#item-categories)
- [**Purchase Item**](#buy-item)
- [**Sell item**](#sell-item)
- [**See Item Status**](#status)
- [**Update Item Details**](#update-item)
- [**Remove Item**](#remove)



**Item**
----
  Get Item by ID
  Delete Item by ID

* **URL**

  /items/:id

* **Method:**
  
  `GET`,
  `DELETE`
  
*  **URL Params**

   id: Integer

*  **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ not yet defined }`
 
* **Error Response:**

  * **Code:** 404  <br />
    **Content:** `{ error : "Item does not exist" }`

  OR

  * **Code:** 404 <br />
    **Content:** `{ error : "No id parameter supplied" }`

* **Sample Call:**

  ```javascript
    fetch('http://localhost:9009/items/:id', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })
  ```

**Item Categories**
----
  Returns categories of items

* **URL**

  /items/categories

* **Method:**
  
  `GET`
  
*  **URL Params**

   None

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `[ String: Categories ]`
 
* **Error Response:**

  * **Code:** 404  <br />

* **Sample Call:**

  ```javascript
    fetch('http://localhost:9009/items/categories', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })
  ```
  
**Purchase Item**
----
  Purchase an item

* **URL**

  /items/:id/buy

* **Method:**
  
  `POST`
  
*  **Request Headers**

  
*  **URL Params**

  id: Integer

* **Data Params**

  userId

* **Success Response:**

  * **Code:** 200 <br />
 
* **Error Response:**

  * **Code:** 404  <br />
  **Content:** `{ error: 'item not found'}`

* **Sample Call:**

  ```javascript
    fetch('http://localhost:9009/items/:id/buy', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
  ```
  
**Sell item**
----
  Sell an item

* **URL**

  /item/:id/sell

* **Method:**
  
  `POST`
  
*  **URL Params**

   id: Integer
   
*  **Request Headers**

  None

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
 
* **Error Response:**

  * **Code:** 404  <br />

* **Sample Call:**

  ```javascript
    fetch('http://localhost:3000/items/:id/sell', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: {
        'something':'something'
      }
    })
  ```

**See Item Status**
----
  See the status of an item that has been purchased

* **URL**

  /item/:id/shipped

* **Method:**
  
  `GET`
  
*  **URL Params**

   id: Integer
   
*  **Request Headers**

  None

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
 
* **Error Response:**

  * **Code:** 404  <br />

* **Sample Call:**

  ```javascript
    fetch('http://localhost:3000/items/:id/shipped', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })
  ```

**Update Item Details**
----
  Update an item's selling details
  such as price or location

* **URL**

  /item/:id/update

* **Method:**
  
  `PUT`
  
*  **URL Params**

   id:Integer
   
*  **Request Headers**

  None

* **Data Params**

  Details that need to be changed

* **Success Response:**

  * **Code:** 200 <br />
 
* **Error Response:**

  * **Code:** 404  <br />

* **Sample Call:**

  ```javascript
    fetch('http://localhost:3000/items/:id/update', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: {
        'something':'something'
      }
    })
  ```