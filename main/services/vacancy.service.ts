import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class VacancyAPI{

    constructor(private httpclient:HttpClient){ }

    getvacancy():Observable<any>{

        return this.httpclient.get('https://jsonplaceholder.typicode.com/posts/1/comments')
    
    }
}