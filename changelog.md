# [v1.0.9](https://github.com/selency/api/releases/tag/v1.0.9)
---
#### What's New
---

##### `GET` /addresses/{id}


##### `GET` /cms/color-themes/latest


##### `GET` /cms/banners/latest


##### `GET` /categories/{id}

> Get a Category by id.


##### `GET` /commissions/current


##### `GET` /products/{id}/commission


##### `POST` /notifications


##### `GET` /users/{id}/addresses


##### `GET` /users/{id}


#### What's Changed
---

##### `POST` /commissions


###### Return Type:

New response : **201 Created**
> Create a Commission

Deleted response : **200 OK**
> Create a Commission

##### `GET` /commissions


###### Parameters:

Added: `shopId` in `query`
> Id of shop


Added: `value` in `query`
> Value of commission


Changed: `platform` in `query`
> Platform type


###### Return Type:

Changed response : **200 OK**
> Return a list of commissions


* Changed content type : `application/json`

    Changed items (object):

    * Deleted property `type` (string)

    * Deleted property `locale` (string)

    * Deleted property `platform` (string)

##### `GET` /products/metadata/colors


###### Return Type:

Changed response : **200 OK**
> Return a list of colors


* Changed content type : `application/json`

    Changed items (object):

    * Added property `id` (string)

##### `GET` /pricing/{id}


###### Return Type:

Changed response : **200 OK**
> Return a pricing


* Changed content type : `application/json`

    * Added property `isNegotiable` (boolean)

    * Changed property `commission` (object)

        * Deleted property `type` (string)

        * Deleted property `locale` (string)

        * Deleted property `platform` (string)

##### `POST` /products/{id}/pricing


###### Parameters:

Deleted: `reference` in `query`

Deleted: `value` in `query`
> The initial price, always in cent


Deleted: `locale` in `query`

Deleted: `currency` in `query`

Deleted: `special_price` in `query`
> The special price, always in cent


Deleted: `reserved_price` in `query`
> The reserved price, always in cent


Deleted: `pro_discount` in `query`
> The discount percent apply for the pro


###### Return Type:

New response : **404 Not Found**
> Product not found

Changed response : **200 OK**
> created price


* Changed content type : `application/json`

    * Added property `isNegotiable` (boolean)

    * Changed property `commission` (object)

        * Deleted property `type` (string)

        * Deleted property `locale` (string)

        * Deleted property `platform` (string)

##### `GET` /products/{id}


###### Return Type:

Changed response : **200 OK**
> Return a product


* Changed content type : `application/json`

    * Added property `media` (object)

    * Added property `qualityLevel` (integer)

    * Added property `color` (object)

        * Property `id` (string)

        * Property `name` (string)

        * Property `slug` (string)

        * Property `rgba` (string)

    * Added property `material` (object)

        * Property `id` (string)

        * Property `name` (string)

        * Property `slug` (string)

    * Added property `style` (object)

        * Property `id` (string)

        * Property `name` (string)

        * Property `slug` (string)

        * Property `description` (string)

    * Added property `designer` (object)

    * Added property `category` (object)

        * Property `id` (string)

        * Property `name` (string)

        * Property `slug` (string)

        * Property `level` (integer)

        * Property `legacyId` (string)

        * Property `createdAt` (string)

        * Property `updatedAt` (string)

    * Added property `authenticity` (object)

        * Property `isAskedFor` (boolean)

        * Property `isApproved` (boolean)

    * Added property `batch` (integer)

    * Deleted property `isNegotiable` (boolean)

    * Changed property `_links` (object)

        * Added property `category` (object)

            * Property `href` (string)

        * Added property `shop` (object)

    * Changed property `mainPicture` (object)

        * Deleted property `role` (string)

    * Changed property `i18n` (object)

        * Deleted property `locale` (string)

        * Deleted property `language` (string)

        * Deleted property `titleSrc` (string)

        * Deleted property `descriptionSrc` (string)

    * Changed property `pricing` (object)

        * Added property `isNegotiable` (boolean)

    * Changed property `commission` (object)

        * Deleted property `type` (string)

        * Deleted property `locale` (string)

        * Deleted property `platform` (string)

##### `GET` /products


###### Return Type:

Changed response : **200 OK**
> Return a list of products


* Changed content type : `application/json`

    Changed items (object):

    * Added property `media` (object)

    * Added property `qualityLevel` (integer)

    * Added property `color` (object)

    * Added property `material` (object)

    * Added property `style` (object)

    * Added property `designer` (object)

    * Added property `category` (object)

    * Added property `authenticity` (object)

    * Added property `batch` (integer)

    * Deleted property `isNegotiable` (boolean)

    * Changed property `_links` (object)

        * Added property `category` (object)

        * Added property `shop` (object)

    * Changed property `mainPicture` (object)

        * Deleted property `role` (string)

    * Changed property `i18n` (object)

        * Deleted property `locale` (string)

        * Deleted property `language` (string)

        * Deleted property `titleSrc` (string)

        * Deleted property `descriptionSrc` (string)

    * Changed property `pricing` (object)

        * Added property `isNegotiable` (boolean)

    * Changed property `commission` (object)

        * Deleted property `type` (string)

        * Deleted property `locale` (string)

        * Deleted property `platform` (string)

##### `POST` /products


###### Return Type:

Changed response : **202 Accepted**
> Return the product content sent async


* Changed content type : `application/json`

    Changed items (object):

    * Added property `media` (object)

    * Added property `qualityLevel` (integer)

    * Added property `color` (object)

    * Added property `material` (object)

    * Added property `style` (object)

    * Added property `designer` (object)

    * Added property `category` (object)

    * Added property `authenticity` (object)

    * Added property `batch` (integer)

    * Deleted property `isNegotiable` (boolean)

    * Changed property `_links` (object)

        * Added property `category` (object)

        * Added property `shop` (object)

    * Changed property `mainPicture` (object)

        * Deleted property `role` (string)

    * Changed property `i18n` (object)

        * Deleted property `locale` (string)

        * Deleted property `language` (string)

        * Deleted property `titleSrc` (string)

        * Deleted property `descriptionSrc` (string)

    * Changed property `pricing` (object)

        * Added property `isNegotiable` (boolean)

    * Changed property `commission` (object)

        * Deleted property `type` (string)

        * Deleted property `locale` (string)

        * Deleted property `platform` (string)

##### `GET` /shops/{id}


###### Return Type:

Changed response : **200 OK**
> Return a Shop


* Changed content type : `application/json`

    Changed items (object):

    * Changed property `commissions` (object)

        * Deleted property `type` (string)

        * Deleted property `locale` (string)

        * Deleted property `platform` (string)

# [v1.0.6](https://github.com/selency/api/releases/tag/v1.0.6)
---
# [v1.0.4](https://github.com/selency/api/releases/tag/v1.0.4)
---
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

# [v1.0.2](https://github.com/selency/api/releases/tag/v1.0.2)
---
# [v1.0.1](https://github.com/selency/api/releases/tag/v1.0.1)
---
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

