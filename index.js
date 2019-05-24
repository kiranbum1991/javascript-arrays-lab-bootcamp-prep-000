var kittens = ["Milo", "Otis", "Garfield"];
var name = "Ralph";

function destructivelyAppendKitten (name) {
  return kittens.push(name);
}

function destructivelyPrependKitten (name) {
  return kittens.unshift(name);
}

function destructivelyRemoveLastKitten (name) {
  return kittens.pop(name);
}

function destructivelyRemoveFirstKitten (name) {
  return kittens.shift(name);
}

function appendKitten (name) {
  return kittens.concat(name);
}

function prependKitten (name) {
  kittens.slice(0, 2);
  return kittens.unshift(name);
}