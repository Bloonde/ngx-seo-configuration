import { ApiConfigHelper } from '../../../../bloonde-ngx-template/src/api/api-config.helper';
export class ApiRoutesHelper {

  public static getSeoElementListURL(): string {
    return ApiConfigHelper.getAPIURL() + 'seo-elements';
  }

  public static getSeoElementURL(fk_id: any, type: any): string {
    return ApiConfigHelper.getAPIURL() + 'seo-elements/' + type + '/' + fk_id;
  }
  public static getSeoElementStoreURL(): string {
    return ApiConfigHelper.getAPIURL() + 'seo-elements';
  }
  public static getSeoElementUpdateURL(id: number): string {
    return ApiConfigHelper.getAPIURL() + 'seo-elements/' + id;
  }

}
