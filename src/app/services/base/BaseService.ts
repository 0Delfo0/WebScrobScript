abstract class BaseService implements IServiceApi, IServiceAuth {
  public kind: ServiceKind;
  // base CRUD
  public abstract add(serviceRequest: ServiceRequest): boolean;
  public abstract update(serviceRequest: ServiceRequest): boolean;
  public abstract list(query: string): ServiceResponse;
  public abstract delete(serviceRequest: ServiceRequest): boolean;
  // API
  public abstract baseApi(): string;
  public abstract callApi(): void;
  // Authorization
  public abstract authorization(): boolean;
  public abstract verifyCredentials(): boolean;
}
