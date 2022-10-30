#### What's New
---

##### `GET` /currency-rates

> Get a Currency rates list based on Currency::EUR.


##### `GET` /pricing/{id}

> Get a Pricing by id.


##### `POST` /products/{id}/pricing


#### What's Deleted
---

##### `GET` /prices/{id}

> Get a Price by id.


##### `POST` /products/{sku}/prices


#### What's Changed
---

##### `GET` /commissions


###### Return Type:

Changed response : **200 OK**
> Return Commission.


* Changed content type : `application/json`

    Changed items (object):

    * Deleted property `value` (integer)

##### `POST` /commissions


###### Return Type:

Changed response : **200 OK**
> Create a Commission


* Changed content type : `application/json`

    * Deleted property `value` (integer)

##### `GET` /products/{id}


###### Return Type:

Changed response : **200 OK**
> Return a product


* Changed content type : `application/json`

    * Added property `seller` (object)

        * Property `id` (string)

        * Property `firstname` (string)

        * Property `lastname` (string)

        * Property `email` (string)

        * Property `legacyId` (string)

    * Added property `pricing` (object)

        * Property `currency` (string)

        * Property `id` (string)

        * Property `price` (integer)

        * Property `reservedPrice` (integer)

        * Property `specialPrice` (integer)

        * Property `proDiscount` (integer)

        * Property `commission` (object)

            * Property `id` (string)

            * Property `label` (string)

            * Property `description` (string)

            * Property `type` (string)

            * Property `locale` (string)

            * Property `platform` (string)

            * Property `isRetail` (boolean)

            * Property `isSpecialOperation` (boolean)

            * Property `startedAt` (string)

            * Property `finishedAt` (string)

    * Added property `dimensions` (array)

        Items (object):

        * Property `type` (string)

        * Property `value` (number)

    * Added property `_links` (object)

        * Property `seller` (object)

            * Property `href` (string)

    * Deleted property `price` (object)

    * Changed property `shop` (object)

        * Added property `user` (object)

    * Changed property `commission` (object)

        * Deleted property `value` (integer)

##### `GET` /products


###### Return Type:

Changed response : **200 OK**
> Return a list of products


* Changed content type : `application/json`

    Changed items (object):

    * Added property `seller` (object)

    * Added property `pricing` (object)

    * Added property `dimensions` (array)

    * Added property `_links` (object)

    * Deleted property `price` (object)

    * Changed property `shop` (object)

        * Added property `user` (object)

    * Changed property `commission` (object)

        * Deleted property `value` (integer)

##### `POST` /products


###### Return Type:

Changed response : **202 Accepted**
> Return the product content sent async


* Changed content type : `application/json`

    Changed items (object):

    * Added property `seller` (object)

    * Added property `pricing` (object)

    * Added property `dimensions` (array)

    * Added property `_links` (object)

    * Deleted property `price` (object)

    * Changed property `shop` (object)

        * Added property `user` (object)

    * Changed property `commission` (object)

        * Deleted property `value` (integer)

##### `GET` /shops/{id}


###### Return Type:

Changed response : **200 OK**
> Return a Shop


* Changed content type : `application/json`

    Changed items (object):

    * Added property `user` (object)

    * Changed property `commissions` (object)

        * Deleted property `value` (integer)

##### `GET` /movements


###### Return Type:

Changed response : **200 OK**
> Return a list of Stock Movements.


* Changed content type : `application/json`

    Changed items (object):

    * Changed property `user` (object)

        * Added property `firstname` (string)

        * Added property `lastname` (string)

        * Added property `email` (string)

##### `POST` /movements


###### Return Type:

Changed response : **200 OK**
> Create a StockMovement


* Changed content type : `application/json`

    * Changed property `user` (object)

        * Added property `firstname` (string)

        * Added property `lastname` (string)

        * Added property `email` (string)

