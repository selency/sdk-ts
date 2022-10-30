/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Asset } from './Asset';
import type { Commission } from './Commission';
import type { LocalizedProduct } from './LocalizedProduct';
import type { Price } from './Price';
import type { Shop } from './Shop';

export type Product = {
    mainPicture?: Asset;
    i18n?: LocalizedProduct;
    title?: string;
    description?: string;
    slug?: string;
    id?: string;
    sku?: string;
    shop?: Shop;
    price?: Price;
    commission?: Commission;
    quantity?: number;
    status?: string;
    isNegotiable?: boolean;
    threadId?: string;
    flags?: any;
    legacyId?: string;
    createdAt?: string;
    updatedAt?: string;
};

