import type { AuditedEntityDto } from '@abp/ng.core';

export interface CreatePassengerDto {
  firstName: string;
  lastName: string;
}

export interface PassengerDto extends AuditedEntityDto<number> {
  firstName: string;
  lastName: string;
}

export interface UpdatePassengerDto {
  firstName: string;
  lastName: string;
}
