function handleForm(event){
  event.preventDefault();

  const userInput = document.querySelector("input[name=sentence]").value;
  const userSelectionsArray = userInput.split(' ');
  const filteredWords = userSelectionsArray.filter(word => word.length >= 3);
  const Final = filteredWords.reverse();

  const resultsHeading = document.createElement("h2");
  resultsHeading.append("Goofed Version:");
  document.body.append(resultsHeading);

  const resultParagraph = document.createElement("p");
  resultParagraph.append(resultString);
  document.body.append(resultParagraph);
}

window.addEventListener("load", function(){
  document.querySelector("form#sentence1").addEventListener("submit", handleForm);
});