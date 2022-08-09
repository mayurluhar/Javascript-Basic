var mobile = {
  modelName: "MI",
  modelNumber: 23432,
  space: "32GB",
  ram: "8GB",
  cameraPixel: "12MP",
  gps: true,
  MobileModelList: [],
  buyMobileList: function (mobileModelName) {
    this.MobileModelList.push(mobileModelName);
  },
  getMobileCount: function () {
    return `${this.modelName} Total MI purchased is ${this.MobileModelList.length}`;
  },
  getInfo: function () {
    return `INFORMATION
Brand: ${this.modelName}
Moblie Models: ${this.MobileModelList}
Total Mobile Has Been Sold: ${this.MobileModelList.length}
`;
  },
};

var MobileList = true;
console.log(mobile.getMobileCount());
mobile.buyMobileList("MI");
mobile.buyMobileList("Redmi note 4");
mobile.buyMobileList("Redmi note 5");
mobile.buyMobileList("Redmi note 6");
console.log(mobile.getMobileCount());
console.log(mobile.getInfo());
