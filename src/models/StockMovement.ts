/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Order } from './Order';
import type { User } from './User';

export type StockMovement = {
    id?: string;
    sku?: string;
    quantity?: number;
    type?: string;
    order?: Order;
    user?: User;
    createdAt?: string;
};

