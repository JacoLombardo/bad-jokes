export function formatJoke(joke: string) {
  let formattedJoke: string;
  if (joke.includes("Q:")) {
    formattedJoke = joke.replace("Q: ", "").replace("A: ", "");
  } else {
    formattedJoke = joke;
  }
  return formattedJoke;
}
