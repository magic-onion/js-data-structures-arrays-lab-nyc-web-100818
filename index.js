// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name) {
  drivers.push(name);
}

function destructivelyPrependDriver(name) {
  drivers.unshift(name);
}

function destructivelyRemoveLastDriver() {
  drivers.pop()
}

function destructivelyRemoveFirstDriver() {
  drivers.shift();
}

function appendDriver(name) {
  return [drivers[0], drivers[1], drivers[2], name];
}

function prependDriver(name) {
  return [name, drivers[0], drivers[1], drivers[2]]
}

function removeLastDriver() {
  return [drivers[0], drivers[1]];
}

function removeFirstDriver() {
  return [drivers[1], drivers[2]];
}
