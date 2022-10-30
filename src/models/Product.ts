/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Asset } from './Asset';
import type { Authenticity } from './Authenticity';
import type { Category } from './Category';
import type { Color } from './Color';
import type { Commission } from './Commission';
import type { Designer } from './Designer';
import type { Dimension } from './Dimension';
import type { LocalizedProduct } from './LocalizedProduct';
import type { Material } from './Material';
import type { Pricing } from './Pricing';
import type { Shop } from './Shop';
import type { Style } from './Style';
import type { User } from './User';

export type Product = {
    mainPicture?: Asset;
    media?: any;
    i18n?: LocalizedProduct;
    title?: string;
    description?: string;
    slug?: string;
    seller?: User;
    id?: string;
    sku?: string;
    status?: string;
    qualityLevel?: number;
    shop?: Shop;
    pricing?: Pricing;
    color?: Color;
    material?: Material;
    style?: Style;
    designer?: Designer;
    category?: Category;
    commission?: Commission;
    authenticity?: Authenticity;
    dimensions?: Array<Dimension>;
    quantity?: number;
    batch?: number;
    threadId?: string;
    flags?: any;
    legacyId?: string;
    createdAt?: string;
    updatedAt?: string;
    readonly _links?: any;
};

