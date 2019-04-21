function billTotal(subtotal) {
  // YOUR CODE HERE
  return Number((1.245 * subtotal).toFixed(2))
}

billTotal(10.00); // => 12.45