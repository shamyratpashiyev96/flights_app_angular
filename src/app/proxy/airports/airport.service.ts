import type { AirportDto, CreateAirportDto, UpdateAirportDto } from './models';
import { RestService, Rest } from '@abp/ng.core';
import type { PagedAndSortedResultRequestDto, PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AirportService {
  apiName = 'Default';
  

  create = (input: CreateAirportDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, AirportDto>({
      method: 'POST',
      url: '/api/app/airport',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  delete = (id: number, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/airport/${id}`,
    },
    { apiName: this.apiName,...config });
  

  get = (id: number, config?: Partial<Rest.Config>) =>
    this.restService.request<any, AirportDto>({
      method: 'GET',
      url: `/api/app/airport/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getList = (input: PagedAndSortedResultRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<AirportDto>>({
      method: 'GET',
      url: '/api/app/airport',
      params: { sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  update = (id: number, input: UpdateAirportDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, AirportDto>({
      method: 'PUT',
      url: `/api/app/airport/${id}`,
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
