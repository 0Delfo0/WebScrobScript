abstract class BaseService implements ApiHelper, AuthHelper {
  kind: ServiceKind;
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