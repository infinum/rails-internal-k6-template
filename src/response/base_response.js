export class BaseResponse {
  constructor(response) {
    this.response = response;
  }

  nextPageUrl() {
    return this.response.json().links.next;
  }

  collectionAttributes(attribute) {
    return this.response.json().data.map((item) => item.attributes[attribute]);
  }

  itemRelationshipId(relationship) {
    return this.response.json().data.relationships[relationship].data.id;
  }
}
