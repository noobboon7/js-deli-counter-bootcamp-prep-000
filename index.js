var num = 7;

function takeANumber(people){
  num++ 
  people.push(num);
  return `Welcome, . You are number ${num} in line.`;
} 

function nowServing(katzDeliLine){
  let i = 0;
  while (i < katzDeliLine.length){
    i++;
  }
  
  if (katzDeliLine.length === 0)
  return "There is nobody waiting to be served!";
  
  else
  return (`Currently serving ${katzDeliLine.shift()}.`);
}

var newline = [];

function currentLine(line){
 let i = 0;
  while (i < line.length){
    newline.push(' ' + [i + 1] + '. ' + line[i]);
    i++;
  }
  
  if (line.length === 0){
    return "The line is currently empty.";
  }
  
  else
  return ('The line is currently:' + newline);
}