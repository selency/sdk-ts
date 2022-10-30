/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Asset } from './Asset';
import type { Commission } from './Commission';
import type { Dimension } from './Dimension';
import type { LocalizedProduct } from './LocalizedProduct';
import type { Pricing } from './Pricing';
import type { Shop } from './Shop';
import type { User } from './User';

export type Product = {
    mainPicture?: Asset;
    i18n?: LocalizedProduct;
    title?: string;
    description?: string;
    slug?: string;
    seller?: User;
    id?: string;
    sku?: string;
    shop?: Shop;
    pricing?: Pricing;
    commission?: Commission;
    dimensions?: Array<Dimension>;
    quantity?: number;
    status?: string;
    isNegotiable?: boolean;
    threadId?: string;
    flags?: any;
    legacyId?: string;
    createdAt?: string;
    updatedAt?: string;
    readonly _links?: any;
};

