/* tslint:disable */

declare var Object: any;
export interface PlataformaDigitalInterface {
  "nome"?: string;
  "id"?: number;
}

export class PlataformaDigital implements PlataformaDigitalInterface {
  "nome": string;
  "id": number;
  constructor(data?: PlataformaDigitalInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `PlataformaDigital`.
   */
  public static getModelName() {
    return "PlataformaDigital";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of PlataformaDigital for dynamic purposes.
  **/
  public static factory(data: PlataformaDigitalInterface): PlataformaDigital{
    return new PlataformaDigital(data);
  }
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'PlataformaDigital',
      plural: 'PlataformaDigitals',
      path: 'PlataformaDigitals',
      idName: 'id',
      properties: {
        "nome": {
          name: 'nome',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'number'
        },
      },
      relations: {
      }
    }
  }
}
