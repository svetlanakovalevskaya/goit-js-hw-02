const logItems = function(array) {
  for (let i = 0, j = 1; i < array.length && j <= array.length; i += 1, j += 1) {
    console.log(`${j} - ${array[i]}`);
  }
};

logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);
logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);