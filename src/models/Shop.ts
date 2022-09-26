/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Commission } from './Commission';
import type { User } from './User';

export type Shop = {
    id?: string;
    commissions?: Commission;
    user?: User;
    legacyId?: string;
};

