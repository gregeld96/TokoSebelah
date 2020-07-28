**E-Commerce CMS App**
----
> E-Commerce CMS

* **URL**

  >To Login into the app <br />
  `/login`

* **Method:**

  `POST`

* **Data Params**

  **Required:**
 
   `email = [string]`<br />
   `password = [string]`

* **Success Response:**
  
  **Code:** 200 OK <br />
  **Content:** 
    ```json
    {
      "token": "string",
      "msg": "User successfully logined!"
    }
    ```
 
* **Error Response:**

  * **Code:** 400 Bad Request<br />
    **Content:**
    ```json
      {
        "msg": "email and password required for login"
      }
    ```
    OR
    ```json
      {
        "msg": "Username or Password Invalid"
      }
    ```

<br />

* **URL**

  >To register a user <br />
  `/register`

* **Method:**

  `POST`

* **Data Params**

  **Required:**
 
   `name = [string]`<br />
   `email = [string]`<br />
   `password = [string]`

* **Success Response:**
  
  **Code:** 201 Created <br />
  **Content:** 
    ```json
    {
      "msg": [register.name] "successfully registered!"
    }
    ```
 
* **Error Response:**

  * **Code:** 400 Bad Request<br />
    **Content:**
    ```json
      {
        "msg": "Name cannot be empty,Email cannot be empty,Please use the right email format,Password cannot be empty"
      }

      OR

      {
        "msg": "Email already exist!"
      }
    ```

<br />

* **URL**

  > To get all product list <br />
  `/products`

* **Method:**

  `GET`

* **Request Header:**

  ```json
    {
      "access_token": < user token >
    }
    ```

* **Success Response:**

  * **Code:** 200 OK <br />
    **Content:** 
    ```json
    [
        {
            "id": 2,
            "name": "Laptop Lenovo",
            "image_url": "https://asset.kompas.com/crops/VUGKN7mQL1-GXZugeEdKwqn_gMY=/57x0:732x450/750x500/data/photo/2019/05/17/1624224850.png",
            "price": 5000000,
            "stock": 25,
            "categoryId": 1,
            "createdAt": "2020-07-22T03:57:13.605Z",
            "updatedAt": "2020-07-22T03:57:13.605Z"
        }
    ]
    ```
 
* **Error Response:**

    * **Code:** 400 BAD REQUEST <br />
    **Content:** 
    ```json
    {
      "msg": "token invalid!"
    }
    ```

    OR

    * **Code:** 500 INTERNAL SERVER ERROR<br />
    **Content:** `{ msg }`

<br />

* **URL**

  > To add a product <br />
  `/products/add`

* **Method:**

  `POST`

* **Request Header:**

  ```json
    {
      "access_token": < user token >
    }
    ```

* **Data Params**

  **Required:**
 
    `name: string,` <br>
    `image_url: string,` <br>
    `price: integer,` <br>
    `stock: integer,` <br>
    `categoryId: integer,`

* **Success Response:**
  
  **Code:** 201 Created <br />
  **Content:** 
    ```json
    {
        "data": {
            "id": 3,
            "name": "Laptop TUF Gaming",
            "price": 5000000,
            "stock": 25,
            "image_url": "https://asset.kompas.com/crops/VUGKN7mQL1-GXZugeEdKwqn_gMY=/57x0:732x450/750x500/data/photo/2019/05/17/1624224850.png",
            "categoryId": 1,
            "updatedAt": "2020-07-22T03:59:26.955Z",
            "createdAt": "2020-07-22T03:59:26.955Z"
        },
        "msg": "Laptop TUF Gaming successfully added!"
    }
    ```
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** 
    ```json
    {
      "msg": "Must be in positive number and more than 0,Name cannot be empty,Image cannot be empty,Image must be url,Price must in number,Price cannot be empty,Category cannot be empty"
    }

    OR

    {
      "msg": "token invalid!"
    }
    ```

  OR

  * **Code:** 500 INTERNAL SERVER ERROR<br />
    **Content:** `{ msg }`

<br />

* **URL**

  >To update the specific product <br />
  `/products/:id`

* **Method:**

  `PUT`

*  **URL Params** 

   **Required:**
 
   `id = integer`

* **Request Header:**

  ```json
    {
      "access_token": < user token >
    }
  ```

* **Data Params**

  **Required:**
 
    `name: string,` <br>
    `image_url: string,` <br>
    `price: integer,` <br>
    `stock: integer,` <br>
    `categoryId: integer,`

* **Success Response:**
  
  **Code:** 200 OK <br />
  **Content:** 
    ```json
    {
    "product": {
        "id": "2",
        "name": "Laptop ASUS",
        "price": "5000000",
        "stock": "5",
        "image_url": "https://asset.kompas.com/crops/VUGKN7mQL1-GXZugeEdKwqn_gMY=/57x0:732x450/750x500/data/photo/2019/05/17/1624224850.png",
        "categoryId": 1
    },
    "msg": "Product edited!"
    }
    ```
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** 
    ```json
    {
      "msg": "Must be in positive number and more than 0,Name cannot be empty,Image cannot be empty,Image must be url,Price must in number,Price cannot be empty,Category cannot be empty"
    }

    OR

    {
      "msg": "token invalid!"
    }
    ```

    OR

  * **Code:** 403 Forbidden<br />
    **Content:**
    ```json
      {
        "msg": "You are not Authorized!"
      }
    ```

    OR
  
  * **Code:** 404 Not Found<br />
    **Content:**
    ```json
      {
        "msg": "Data not found"
      }
    ```

    OR

  * **Code:** 500 INTERNAL SERVER ERROR<br />
    **Content:** `{ msg }`

<br />

* **URL**

  >To delete the specific product <br />
  `/products/:id`

* **Method:**

  `DELETE`

*  **URL Params** 

   **Required:**
 
   `id=[integer]`

* **Request Header:**

  ```json
    {
      "access_token": < user token >
    }
    ```

* **Success Response:**
  
  **Code:** 200 OK <br />
  **Content:** 
    ```json
      "Product deleted"
    ```
 
* **Error Response:**

  * **Code:** 400 Bad Request<br />
    **Content:**
    ```json
      {
        "msg": "token invalid!"
      }
    ```
    
  * **Code:** 403 Forbidden<br />
    **Content:**
    ```json
      {
        "msg": "You are not Authorized!"
      }
    ```

  OR

  * **Code:** 404 Not Found<br />
    **Content:**
    ```json
      {
        "msg": "Data not found"
      }
    ```
  
  OR
  
  * **Code:** 500 INTERNAL SERVER ERROR<br />
    **Content:** `{ msg }`

<br />

* **URL**

  > To get all the category <br />
  `/categories`

* **Method:**

  `GET`

* **Request Header:**

  ```json
    {
      "access_token": < user token >
    }
    ```

* **Success Response:**

  * **Code:** 200 OK <br />
    **Content:** 
    ```json
   [
        {
          "id": [integer],
          "name": [string],
          "createdAt": [date],
          "updatedAt": [date]
        }
    ]

    ```
 
* **Error Response:**

    * **Code:** 400 BAD REQUEST <br />
    **Content:** 
    ```json
    {
      "msg": "token invalid!"
    }
    ```

    OR

    * **Code:** 500 INTERNAL SERVER ERROR<br />
    **Content:** `{ msg }`

<br />

* **URL**

  > To add a category <br />
  `/categories/add`

* **Method:**

  `POST`

* **Request Header:**

  ```json
    {
      "access_token": < user token >
    }
    ```

* **Data Params**

  **Required:**
 
   `name = [string]`

* **Success Response:**
  
  **Code:** 201 Created <br />
  **Content:** 
    ```json
    {
      "data": [
        {
          "id": [integer],
          "name": [string],
          "createdAt": [date],
          "updatedAt": [date]
        }
      ]
    }
    ```
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** 
    ```json
    {
      "msg": "Name cannot be empty"
    }

    OR

    {
      "msg": "token invalid!"
    }
    ```

  OR

  * **Code:** 500 INTERNAL SERVER ERROR<br />
    **Content:** `{ msg }`

<br />

* **URL**

  >To delete the specific category <br />
  `/categories/:id`

* **Method:**

  `DELETE`

*  **URL Params** 

   **Required:**
 
   `id=[integer]`

* **Request Header:**

  ```json
    {
      "access_token": < user token >
    }
    ```

* **Success Response:**
  
  **Code:** 200 OK <br />
  **Content:** 
    ```json
      "Category deleted!"
    ```
 
* **Error Response:**

  * **Code:** 400 Bad Request<br />
    **Content:**
    ```json
      {
        "msg": "token invalid!"
      }
    ```
    
  * **Code:** 403 Forbidden<br />
    **Content:**
    ```json
      {
        "msg": "You are not Authorized!"
      }
    ```

  OR

  * **Code:** 404 Not Found<br />
    **Content:**
    ```json
      {
        "msg": "Data not found"
      }
    ```
  
  OR
  
  * **Code:** 500 INTERNAL SERVER ERROR<br />
    **Content:** `{ msg }`

<br />

* **URL**

  > To get specific category <br />
  `/categories/:name`

* **Method:**

  `GET`

* **Request Header:**

  ```json
    {
      "access_token": < user token >
    }
    ```

* **Data Params**

  **Required:**
 
   `name = [string]`

* **Success Response:**

  * **Code:** 200 OK <br />
    **Content:** 
    ```json
   {
        "data": {
        "id": 1,
        "name": "Electronics",
        "createdAt": "2020-07-22T03:48:58.002Z",
        "updatedAt": "2020-07-22T03:48:58.002Z",
        "Products": [
            {
                "id": 2,
                "name": "Laptop Lenovo",
                "image_url": "https://asset.kompas.com/crops/VUGKN7mQL1-GXZugeEdKwqn_gMY=/57x0:732x450/750x500/data/photo/2019/05/17/1624224850.png",
                "price": 5000000,
                "stock": 25,
                "categoryId": 1,
                "createdAt": "2020-07-22T03:57:13.605Z",
                "updatedAt": "2020-07-22T03:57:13.605Z"
            },
            {
                "id": 3,
                "name": "Laptop TUF Gaming",
                "image_url": "https://asset.kompas.com/crops/VUGKN7mQL1-GXZugeEdKwqn_gMY=/57x0:732x450/750x500/data/photo/2019/05/17/1624224850.png",
                "price": 5000000,
                "stock": 25,
                "categoryId": 1,
                "createdAt": "2020-07-22T03:59:26.955Z",
                "updatedAt": "2020-07-22T03:59:26.955Z"
            }
        ]
        }
    }
    ```
 
* **Error Response:**

    * **Code:** 400 BAD REQUEST <br />
    **Content:** 
    ```json
    {
      "msg": "token invalid!"
    }
    ```
    
    OR

  * **Code:** 404 Not Found<br />
    **Content:**
    ```json
      {
        "msg": "Data not found"
      }
    ```

    OR

    * **Code:** 500 INTERNAL SERVER ERROR<br />
    **Content:** `{ msg }`

<br />

* **URL**

  > To get specific category <br />
  `/customers/category/:name`

* **Method:**

  `GET`

* **Data Params**

  **Required:**
 
   `name = [string]`

* **Success Response:**

  * **Code:** 200 OK <br />
    **Content:** 
    ```json
   {
        "data": {
        "id": 1,
        "name": "Electronics",
        "createdAt": "2020-07-22T03:48:58.002Z",
        "updatedAt": "2020-07-22T03:48:58.002Z",
        "Products": [
            {
                "id": 2,
                "name": "Laptop Lenovo",
                "image_url": "https://asset.kompas.com/crops/VUGKN7mQL1-GXZugeEdKwqn_gMY=/57x0:732x450/750x500/data/photo/2019/05/17/1624224850.png",
                "price": 5000000,
                "stock": 25,
                "categoryId": 1,
                "createdAt": "2020-07-22T03:57:13.605Z",
                "updatedAt": "2020-07-22T03:57:13.605Z"
            },
            {
                "id": 3,
                "name": "Laptop TUF Gaming",
                "image_url": "https://asset.kompas.com/crops/VUGKN7mQL1-GXZugeEdKwqn_gMY=/57x0:732x450/750x500/data/photo/2019/05/17/1624224850.png",
                "price": 5000000,
                "stock": 25,
                "categoryId": 1,
                "createdAt": "2020-07-22T03:59:26.955Z",
                "updatedAt": "2020-07-22T03:59:26.955Z"
            }
        ]
        }
    }
    ```
 
* **Error Response:**

  * **Code:** 404 Not Found<br />
    **Content:**
    ```json
      {
        "msg": "Data not found"
      }
    ```

    OR

    * **Code:** 500 INTERNAL SERVER ERROR<br />
    **Content:** `{ msg }`

<br />

* **URL**

  > To get all product list <br />
  `/customers/product`

* **Method:**

  `GET`

* **Success Response:**

  * **Code:** 200 OK <br />
    **Content:** 
    ```json
    [
        {
            "id": 2,
            "name": "Laptop Lenovo",
            "image_url": "https://asset.kompas.com/crops/VUGKN7mQL1-GXZugeEdKwqn_gMY=/57x0:732x450/750x500/data/photo/2019/05/17/1624224850.png",
            "price": 5000000,
            "stock": 25,
            "categoryId": 1,
            "createdAt": "2020-07-22T03:57:13.605Z",
            "updatedAt": "2020-07-22T03:57:13.605Z"
        }
    ]
    ```
 
* **Error Response:**

    * **Code:** 500 INTERNAL SERVER ERROR<br />
    **Content:** `{ msg }`

<br />

* **URL**

  > To get all product list on User Cart <br />
  `/customers/`

* **Method:**

  `GET`

* **Request Header:**

  ```json
    {
      "access_token": < user token >
    }
    ```

* **Success Response:**

  * **Code:** 200 OK <br />
    **Content:** 
    ```json
    [
      {
        "id": 5,
        "productId": 4,
        "productQty": 3,
        "checkOut": false,
        "userId": 3,
        "createdAt": "2020-07-28T12:24:05.670Z",
        "updatedAt": "2020-07-28T12:48:45.441Z",
        "Product": {
          "id": 4,
          "name": "Harry Potter Next Hermonie",
          "image_url": "https://m.media-amazon.com/images/M/MV5BMjIyZGU4YzUtNDkzYi00ZDRhLTljYzctYTMxMDQ4M2E0Y2YxXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_UY1200_CR85,0,630,1200_AL_.jpg",
          "price": 500000,
          "stock": 10,
          "categoryId": 2,
          "createdAt": "2020-07-28T10:16:12.475Z",
          "updatedAt": "2020-07-28T10:16:12.475Z"
        }
      },
      {
        "id": 6,
        "productId": 3,
        "productQty": 3,
        "checkOut": false,
        "userId": 3,
        "createdAt": "2020-07-28T12:25:49.141Z",
        "updatedAt": "2020-07-28T12:48:45.441Z",
        "Product": {
          "id": 3,
          "name": "Laptop MSI",
          "image_url": "https://d2pa5gi5n2e1an.cloudfront.net/global/images/product/laptops/MSI_GS70_2QE_STEALTH_PRO/MSI_GS70_2QE_STEALTH_PRO_L_1.jpg",
          "price": 25000000,
          "stock": 5,
          "categoryId": 1,
          "createdAt": "2020-07-28T10:15:53.597Z",
          "updatedAt": "2020-07-28T10:15:53.597Z"
        }
      }
    ]
    ```

    OR

    ```json
    {}
    ```
 
* **Error Response:**

    * **Code:** 400 BAD REQUEST <br />
    **Content:** 
    ```json
    {
      "msg": "token invalid!"
    }
    ```
    
    OR

    * **Code:** 500 INTERNAL SERVER ERROR<br />
    **Content:** `{ msg }`

<br />

* **URL**

  > To  add a product to User Cart <br />
  `/customers/:id`

* **Method:**

  `POST`

* **Request Header:**

  ```json
    {
      "access_token": < user token >
    }
    ```

*  **URL Params** 

   **Required:**
 
   `id=[integer]`
  
* **Data Params**

  **Required:**
  
  ```json
  {
    "productQty": "integer"
  }
  ```
  
* **Success Response:**

  * **Code:** 201 Created <br />
    **Content:** 
    ```json
    {
      "data": {
        "id": 8,
        "productId": 5,
        "productQty": 1,
        "checkOut": false,
        "userId": 3,
        "updatedAt": "2020-07-28T13:11:31.254Z",
        "createdAt": "2020-07-28T13:11:31.254Z"
      },
      "msg": "Product added to cart"
    }
    ```

    OR

    ```json
    {
      "data": [
        "Index Array on the cart"
      ],
      "msg": "Product added to cart"
    }
    ```
 
* **Error Response:**

    * **Code:** 400 BAD REQUEST <br />
    **Content:** 
    ```json
    "Sorry please take the right amount"
    ```

    OR

    ```json
    {
      "msg": "token invalid!"
    }
    ```
    
    OR

    ```json
    "Sorry your order exceed the stock"
    ```

    OR

    * **Code:** 500 INTERNAL SERVER ERROR<br />
    **Content:** `{ msg }`

<br />

* **URL**

  > To  edit a product to User Cart <br />
  `/customers/:id`

* **Method:**

  `PUT`

* **Request Header:**

  ```json
    {
      "access_token": < user token >
    }
    ```

*  **URL Params** 

   **Required:**
 
   `id=[integer] (id of the product)` 
  
* **Data Params**

  **Required:**
  
  ```json
  {
    "productQty": "integer"
  }
  ```
  
* **Success Response:**

  * **Code:** 200 OK <br />
    **Content:** 
    ```json
    {
      "data": [
        "Index Array on the cart"
      ],
      "msg": "Successfully edit"
    }
    ```
 
* **Error Response:**

    * **Code:** 400 BAD REQUEST <br />
    **Content:** 
    ```json
    "Sorry your order exceed the stock"
    ```

    OR

    ```json
    {
      "msg": "token invalid!"
    }
    ```
    
    OR

    * **Code:** 404 Not Found <br />
    **Content:** 
    ```json
    "Data not found"
    ```

    OR

    * **Code:** 500 INTERNAL SERVER ERROR<br />
    **Content:** `{ msg }`

<br />

* **URL**

  >To delete the specific cart list <br />
  `/customers/:id`

* **Method:**

  `DELETE`

*  **URL Params** 

   **Required:**
 
   `id=[integer] (cart Id)`

* **Request Header:**

  ```json
    {
      "access_token": < user token >
    }
    ```

* **Success Response:**
  
  **Code:** 200 OK <br />
  **Content:** 
    ```json
      "Product removed from cart"
    ```
 
* **Error Response:**

  * **Code:** 400 Bad Request<br />
    **Content:**
    ```json
      {
        "msg": "token invalid!"
      }
    ```
    
  * **Code:** 403 Forbidden<br />
    **Content:**
    ```json
      {
        "msg": "You are not Authorized!"
      }
    ```

  OR

  * **Code:** 404 Not Found<br />
    **Content:**
    ```json
      {
        "msg": "Data not found"
      }
    ```
  
  OR
  
  * **Code:** 500 INTERNAL SERVER ERROR<br />
    **Content:** `{ msg }`