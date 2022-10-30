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

