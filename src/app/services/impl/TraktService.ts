// var trakt = require('traktapi2');
// import {trakt} from Trakt

// let Trakt = require("traktapi2");

class TraktService extends BaseService {
  public kind: ServiceKind;
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

  public add(serviceRequest: ServiceRequest): boolean {
    throw new Error("Method not implemented.");
  }

  public update(serviceRequest: ServiceRequest): boolean {
    throw new Error("Method not implemented.");
  }

  public list(query: string): ServiceResponse {
    throw new Error("Method not implemented.");
  }

  public delete(serviceRequest: ServiceRequest): boolean {
    throw new Error("Method not implemented.");
  }

  public baseApi(): string {
    // return 'https://api.trakt.tv';
    return "https://api-staging.trakt.tv";
  }

  public callApi(): void {
    throw new Error("Method not implemented.");
  }

  public authorization(): boolean {
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

  public verifyCredentials(): boolean {
    throw new Error("Method not implemented.");
  }
}
function newFunction() {
  return ("traktapi2");
}
