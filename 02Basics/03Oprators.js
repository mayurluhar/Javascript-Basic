var sellingPrice = 199;
var ListingPrice = 899;


var discountPrice = ((ListingPrice - sellingPrice)/ListingPrice) * 100;

console.log("discount percentage is:", discountPrice);
console.log(Math.round(discountPrice) + "% OFF");


