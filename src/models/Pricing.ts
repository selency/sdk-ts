/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Commission } from './Commission';

export type Pricing = {
    currency?: string;
    id?: string;
    price?: number;
    reservedPrice?: number;
    specialPrice?: number;
    proDiscount?: number;
    commission?: Commission;
};

