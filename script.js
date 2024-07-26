
let arr = [
  [{a: {price: 20}}],
  [{a: {price: 35}}],
  [{a: {price: 44}}]
];

console.log(arr[0].at(0).a.price +  arr[1].at(0).a.price + arr[2].at(0).a.price);