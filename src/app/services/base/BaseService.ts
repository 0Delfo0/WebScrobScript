abstract class BaseService {
  // base Props
  protected kind: ServiceKind;
  // base CRUD
  abstract add(serviceRequest: ServiceRequest): boolean;
  abstract update(serviceRequest: ServiceRequest): boolean;
  abstract list(query: string): ServiceResponse;
  abstract delete(serviceRequest: ServiceRequest): boolean;
  // API
  abstract baseApi(): string;
  abstract callApi(): void;
  // Authorization
  abstract authorization(): boolean
  abstract verifyCredentials(): boolean
}

enum ServiceKind {
  JSON,
  XML
}