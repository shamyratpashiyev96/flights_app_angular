import type { AuditedEntityDto } from '@abp/ng.core';
import type { AirportDto } from '../airports/models';

export interface CreateFlightDto {
  originId: number;
  destinationId: number;
  departureDate: string;
  arrivalDate: string;
}

export interface FlightDto extends AuditedEntityDto<number> {
  id: number;
  originId: number;
  origin: AirportDto;
  destinationId: number;
  destination: AirportDto;
  departureDate: string;
  arrivalDate: string;
}

export interface UpdateFlightDto {
  originId: number;
  destinationId: number;
  departureDate: string;
  arrivalDate: string;
}
