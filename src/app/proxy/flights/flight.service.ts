import type { CreateFlightDto, FlightDto, UpdateFlightDto } from './models';
import { RestService, Rest } from '@abp/ng.core';
import type { PagedAndSortedResultRequestDto, PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FlightService {
  apiName = 'Default';
  

  create = (input: CreateFlightDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, FlightDto>({
      method: 'POST',
      url: '/api/app/flight',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  delete = (id: number, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/flight/${id}`,
    },
    { apiName: this.apiName,...config });
  

  get = (id: number, config?: Partial<Rest.Config>) =>
    this.restService.request<any, FlightDto>({
      method: 'GET',
      url: `/api/app/flight/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getList = (input: PagedAndSortedResultRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<FlightDto>>({
      method: 'GET',
      url: '/api/app/flight',
      params: { sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  update = (id: number, input: UpdateFlightDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, FlightDto>({
      method: 'PUT',
      url: `/api/app/flight/${id}`,
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
