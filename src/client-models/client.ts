export class Client {
  static allAttrs = [
    'id',
    'name',
    'personalIdentNumber',
    'email'
  ];

  attributesForCopy = Client.allAttrs;

  constructor(
    public id: number | null,
    public name: string,
    public personalIdentNumber: string,
    public email: string) { }

  update(client: Client | any) {
    for (let attr of this.attributesForCopy) {
      this[attr] = client[attr];
    }
  }

  static constructFromObj(obj: any): Client {
    let client = new Client(null, '', '', '');
    client.update(obj);
    return client
  }
}
