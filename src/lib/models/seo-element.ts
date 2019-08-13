
export class SeoElement {
  id: any;
  fk_id: any;
  type: any;
  title: string;
  description: string;

  constructor() {
    this.id = null;
    this.fk_id = null;
    this.type = null;
    this.title = null;
    this.description = null;
  }

  public static copy(model: any) {
    let aux = new SeoElement();
    aux.id = model.id;
    aux.fk_id = model.fk_id;
    aux.type = model.type;
    aux.title = model.title;
    aux.description = model.description;

    return aux;
  }
}
