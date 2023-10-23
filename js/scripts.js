function handleForm(event){
  event.preventDefault();

  const userInput = document.querySelector("input[name=sentence]").value;
  const userSelectionsArray = userInput.split(' ');
  const filteredWords = userSelectionsArray.filter(word => word.length >= 3);
  const final = filteredWords.reverse();

  const resultsHeading = document.createElement("h2");
  resultsHeading.append("Goofed Version:");
  document.body.append(resultsHeading);

  const resultParagraph = document.createElement("p");
  resultParagraph.append(final);
  document.body.append(resultParagraph);
}

window.addEventListener("load", function(){
  document.querySelector("form#sentence1").addEventListener("submit", handleForm);
});