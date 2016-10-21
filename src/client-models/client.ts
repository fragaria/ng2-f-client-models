export class Client {
  attributesForCopy = [
    'id',
    'name',
    'personalIdentNumber',
    'email'
  ];

  constructor(
    public id: number | null,
    public name: string,
    public personalIdentNumber: string,
    public email: string) { }

  update(client:Client) {
    for (let attr of this.attributesForCopy) {
      this[attr] = client[attr]
    }
  }
}
