import type { AuditedEntityDto } from '@abp/ng.core';

export interface AirportDto extends AuditedEntityDto<number> {
  city: string;
  code: string;
}

export interface CreateAirportDto {
  city: string;
  code: string;
}

export interface UpdateAirportDto {
  city: string;
  code: string;
}
