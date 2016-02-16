import {Component, OnInit} from 'angular2/core';
import {Title} from 'angular2/platform/browser';
import {Company} from '../models/company';
import {CompanyService} from '../services/company-service';

@Component({
    selector: 'app-start',
    template: `
        <h1>{{title}}</h1>
        <ul>
            <li *ngFor="#company of companies">
                {{company.id}} - {{company.name}}
            </li>
        </ul>
        `,
    providers: [CompanyService],
    viewProviders: [Title]
})
export class CompanyComponent implements OnInit {
    public title = 'Company List';
    public companies: Company[];

    ngOnInit() {
        this.getCompanies();
    }

    constructor(title: Title, private _companyService: CompanyService) {
        title.setTitle('Angular 2 Starter Project');
    }

    getCompanies() {
        this._companyService.getCompanies()
            .then(companies => this.companies = companies);
    }
}