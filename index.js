var kittens = ["Milo", "Otis", "Garfield"];
var name = "Ralph";

function destructivelyAppendKitten (name) {
  return kittens.push(name);
}

function destructivelyPrependKitten (name) {
  return kittens.unshift(name);
}

