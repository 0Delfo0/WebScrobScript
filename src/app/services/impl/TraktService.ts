//var trakt = require('traktapi2');


class TraktService extends BaseService  {
  kind: ServiceKind;
  //  private Trakt = require('traktapi2');

  private trakt: any;

  //  private trakt: new Trakt({
  //   client_id: '',
  //   client_secret: '',
  //   redirect_uri: null, // Defaults to urn:ietf:wg:oauth:2.0:oob,
  //   user_agent: 'TraktClientNr1', // Defaults to url for this repository
  //   endpoint: 'http://staging.api.trakt.tv' // Defaults to https://api-v2launch.trakt.tv
  // });

  constructor() {
    super();
    this.kind = ServiceKind.JSON;
  }

  add(serviceRequest: ServiceRequest): boolean {
    throw new Error("Method not implemented.");
  }

  update(serviceRequest: ServiceRequest): boolean {
    throw new Error("Method not implemented.");
  }

  list(query: string): ServiceResponse {
    throw new Error("Method not implemented.");
  }

  delete(serviceRequest: ServiceRequest): boolean {
    throw new Error("Method not implemented.");
  }

  baseApi(): string {
    // return 'https://api.trakt.tv';    
    return 'https://api-staging.trakt.tv';
  }

  callApi(): void {
    throw new Error("Method not implemented.");
  }

  authorization(): boolean {
    return false;
    // try {
    //   this.trakt = new Trakt({
    //     client_id: '',
    //     client_secret: '',
    //     redirect_uri: null, // Defaults to urn:ietf:wg:oauth:2.0:oob,
    //     user_agent: Constants.USER_AGENT,
    //     endpoint: this.baseApi()
    //   });
    //   return true;
    // } catch (error) {
    //   console.error(error);
    //   return false;
    // }
  }

  verifyCredentials(): boolean {
    throw new Error("Method not implemented.");
  }
}