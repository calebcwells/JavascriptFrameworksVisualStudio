import {COMPANIES} from '../data/mock-companies';
import {Injectable} from 'angular2/core';

@Injectable()
export class CompanyService {
    getCompanies() {
        return Promise.resolve(COMPANIES);
    }
}