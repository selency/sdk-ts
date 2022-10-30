/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Commission } from './Commission';

export type Price = {
    id?: string;
    value?: number;
    currency?: string;
    reservedPrice?: number;
    specialPrice?: number;
    proDiscount?: number;
    commission?: Commission;
};

