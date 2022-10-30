#### What's New
---

##### `GET` /users/{id}/order-products


##### `GET` /order-products/{id}


##### `GET` /prices/{id}

> Get a Price by id.


##### `POST` /products/{sku}/prices


#### What's Deleted
---

##### `GET` /addresses/{id}


##### `POST` /auth/login


##### `GET` /cms/color-themes/latest


##### `GET` /cms/banners/latest


##### `GET` /categories/{id}


##### `GET` /commissions/current


##### `GET` /pickings/{id}


##### `POST` /notifications


##### `GET` /orders/{id}


##### `GET` /currency-rates

> Get a Currency rates list based on Currency::EUR.


##### `GET` /pricing/{id}


##### `POST` /products/{id}/pricing


##### `GET` /products/metadata/colors/{id}


##### `GET` /products/metadata/designers/{id}


##### `GET` /products/metadata/materials/{id}


##### `GET` /products/metadata/styles/{id}


##### `GET` /products/{id}/commission


##### `GET` /shops/{id}/commission


##### `GET` /users/{id}/addresses


##### `GET` /users/{id}/orders


##### `GET` /users/{id}


#### What's Changed
---

##### `GET` /addresses/countries

> Get a Countries list.


##### `POST` /commissions


###### Return Type:

New response : **200 OK**
> Create a Commission

Deleted response : **201 Created**
> Create a Commission

##### `GET` /commissions


###### Parameters:

Deleted: `shopId` in `query`
> Id of shop


Deleted: `value` in `query`
> Value of commission


Changed: `platform` in `query`
> Web or mobile


###### Return Type:

Changed response : **200 OK**
> Return Commission.


* Changed content type : `application/json`

    Changed items (object):

    * Added property `value` (integer)

    * Added property `type` (string)

    * Added property `locale` (string)

    * Added property `platform` (string)

##### `GET` /products/metadata/colors

> Get a Color list.


###### Return Type:

Changed response : **200 OK**
> Return a list of colors


* Changed content type : `application/json`

    Changed items (object):

    * Deleted property `id` (string)

##### `GET` /products/metadata/materials

> Get a Material list.


##### `GET` /products/metadata/styles

> Get a Style list.


##### `GET` /shops/{id}/reviews

> Get feedback of a shop by id.


##### `GET` /shops/{id}/statistics


###### Return Type:

Changed response : **200 OK**
> Return stats of the shop


* Changed content type : `application/json`

    Changed items (object):

    * Deleted property `display` (boolean)

##### `GET` /products/{id}

> Get a Product by sku.


###### Parameters:

Added: `sku` in `path`
> The sku of the product


Changed: `id` in `path`

###### Return Type:

Changed response : **200 OK**
> Return a product


* Changed content type : `application/json`

    * Added property `price` (object)

        * Property `id` (string)

        * Property `value` (integer)

        * Property `currency` (string)

        * Property `reservedPrice` (integer)

        * Property `specialPrice` (integer)

        * Property `proDiscount` (integer)

        * Property `commission` (object)

            * Property `id` (string)

            * Property `value` (integer)

            * Property `label` (string)

            * Property `description` (string)

            * Property `type` (string)

            * Property `locale` (string)

            * Property `platform` (string)

            * Property `isRetail` (boolean)

            * Property `isSpecialOperation` (boolean)

            * Property `startedAt` (string)

            * Property `finishedAt` (string)

    * Added property `isNegotiable` (boolean)

    * Deleted property `media` (object)

    * Deleted property `seller` (object)

    * Deleted property `qualityLevel` (integer)

    * Deleted property `pricing` (object)

    * Deleted property `color` (object)

    * Deleted property `material` (object)

    * Deleted property `style` (object)

    * Deleted property `designer` (object)

    * Deleted property `category` (object)

    * Deleted property `picking` (object)

    * Deleted property `authenticity` (object)

    * Deleted property `dimensions` (array)

    * Deleted property `publishedAt` (string)

    * Deleted property `batch` (integer)

    * Deleted property `_links` (object)

    * Changed property `mainPicture` (object)

        * Added property `role` (string)

    * Changed property `i18n` (object)

        * Added property `locale` (string)

        * Added property `language` (string)

        * Added property `titleSrc` (string)

        * Added property `descriptionSrc` (string)

    * Changed property `shop` (object)

        * Deleted property `user` (object)

    * Changed property `commission` (object)

        * Added property `value` (integer)

        * Added property `type` (string)

        * Added property `locale` (string)

        * Added property `platform` (string)

##### `GET` /products


###### Return Type:

Changed response : **200 OK**
> Return a list of products


* Changed content type : `application/json`

    Changed items (object):

    * Added property `price` (object)

    * Added property `isNegotiable` (boolean)

    * Deleted property `media` (object)

    * Deleted property `seller` (object)

    * Deleted property `qualityLevel` (integer)

    * Deleted property `pricing` (object)

    * Deleted property `color` (object)

    * Deleted property `material` (object)

    * Deleted property `style` (object)

    * Deleted property `designer` (object)

    * Deleted property `category` (object)

    * Deleted property `picking` (object)

    * Deleted property `authenticity` (object)

    * Deleted property `dimensions` (array)

    * Deleted property `publishedAt` (string)

    * Deleted property `batch` (integer)

    * Deleted property `_links` (object)

    * Changed property `mainPicture` (object)

        * Added property `role` (string)

    * Changed property `i18n` (object)

        * Added property `locale` (string)

        * Added property `language` (string)

        * Added property `titleSrc` (string)

        * Added property `descriptionSrc` (string)

    * Changed property `shop` (object)

        * Deleted property `user` (object)

    * Changed property `commission` (object)

        * Added property `value` (integer)

        * Added property `type` (string)

        * Added property `locale` (string)

        * Added property `platform` (string)

##### `POST` /products


###### Return Type:

Changed response : **202 Accepted**
> Return the product content sent async


* Changed content type : `application/json`

    Changed items (object):

    * Added property `price` (object)

    * Added property `isNegotiable` (boolean)

    * Deleted property `media` (object)

    * Deleted property `seller` (object)

    * Deleted property `qualityLevel` (integer)

    * Deleted property `pricing` (object)

    * Deleted property `color` (object)

    * Deleted property `material` (object)

    * Deleted property `style` (object)

    * Deleted property `designer` (object)

    * Deleted property `category` (object)

    * Deleted property `picking` (object)

    * Deleted property `authenticity` (object)

    * Deleted property `dimensions` (array)

    * Deleted property `publishedAt` (string)

    * Deleted property `batch` (integer)

    * Deleted property `_links` (object)

    * Changed property `mainPicture` (object)

        * Added property `role` (string)

    * Changed property `i18n` (object)

        * Added property `locale` (string)

        * Added property `language` (string)

        * Added property `titleSrc` (string)

        * Added property `descriptionSrc` (string)

    * Changed property `shop` (object)

        * Deleted property `user` (object)

    * Changed property `commission` (object)

        * Added property `value` (integer)

        * Added property `type` (string)

        * Added property `locale` (string)

        * Added property `platform` (string)

##### `GET` /shops/{id}


###### Return Type:

Changed response : **200 OK**
> Return a Shop


* Changed content type : `application/json`

    Changed items (object):

    * Deleted property `user` (object)

    * Changed property `commissions` (object)

        * Added property `value` (integer)

        * Added property `type` (string)

        * Added property `locale` (string)

        * Added property `platform` (string)

##### `GET` /movements


###### Return Type:

Changed response : **200 OK**
> Return a list of Stock Movements.


* Changed content type : `application/json`

    Changed items (object):

    * Changed property `order` (object)

        * Deleted property `reference` (string)

        * Deleted property `status` (string)

        * Deleted property `orderEntries` (array)

        * Deleted property `user` (object)

        * Deleted property `createdAt` (string)

        * Deleted property `updatedAt` (string)

        * Changed property `id` (object -> string)

    * Changed property `user` (object)

        * Deleted property `firstname` (string)

        * Deleted property `lastname` (string)

        * Deleted property `email` (string)

##### `POST` /movements


###### Return Type:

Changed response : **200 OK**
> Create a StockMovement


* Changed content type : `application/json`

    * Changed property `order` (object)

        * Deleted property `reference` (string)

        * Deleted property `status` (string)

        * Deleted property `orderEntries` (array)

        * Deleted property `user` (object)

        * Deleted property `createdAt` (string)

        * Deleted property `updatedAt` (string)

        * Changed property `id` (object -> string)

    * Changed property `user` (object)

        * Deleted property `firstname` (string)

        * Deleted property `lastname` (string)

        * Deleted property `email` (string)

