/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Country } from './Country';
import type { User } from './User';

export type Address = {
    id?: string;
    firstName?: string;
    lastName?: string;
    postCode?: string;
    city?: string;
    name?: string;
    companyName?: string;
    extraInfo?: string;
    phoneNumber?: string;
    latitude?: number;
    longitude?: number;
    country?: Country;
    user?: User;
    createdBy?: User;
    legacyId?: number;
    createdAt?: string;
    updatedAt?: string;
    readonly _links?: any;
};

