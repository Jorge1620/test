import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HttpService {	

	configUrl = 'https://jsonplaceholder.typicode.com';

  	constructor(private http: HttpClient) { }

  	//get url web service
  	getUrl()
  	{
  		return this.configUrl;
  	}
}
