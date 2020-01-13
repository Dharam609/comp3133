function firstLetterUpper(){
    let allLowerStr = "the quick brown fox";
    let allLowerArr = allLowerStr.split(" ");
    let result = "";
    for(let i=0; i < allLowerArr.length; i++){
        allLowerArr[i]= allLowerArr[i].charAt(0).toUpperCase() + allLowerArr[i].slice(1);
        result = result + allLowerArr[i] + ' ';
    }
    result.trim();
    console.log(result);
}

function largestNum(arr){    
    let large = arr[0];    
    for(let i = 1; i < arr.length; i++){
        if (large < arr[i]){
            large = arr[i];
        }
    }
    console.log(large)
}

function lastThreePlusRest(str){
    if (str.length<3){
        console.log("Your string has less than 3 characters.");
    }
    let breakPoint = str.length -3;
    let lastThree = str.slice(breakPoint);
    let rest = str.slice(0,breakPoint);
    console.log(lastThree+rest);
}

function angleDef(value){
    let type ="";

    if (value < 90 && value > 0){
        type="Actue Angle";        
    }
    else if (value == 90){
        type="Right Angle";
    }
    else if (value > 90 && value < 180){
        type="Obtuse Angle";
    }
    else if(value == 180){
        type="Straight Angle";
    }
    else{
        type ="Not a value for angle";
    }

    console.log(type);
}

function largeSum(arr,k){
    let end;
    let largeSum = 0;
    for (let i = 0; i<arr.length; i++){
        end = i + k;
        let sum = 0;
        if(end <= arr.length){            
            for(let j = i; j < end; j++){
                sum = sum + arr[j];
            }            
        }
        if(largeSum < sum){
            largeSum = sum;
        }
    }
    console.log(largeSum);
}

firstLetterUpper();
largestNum([500,60,70,800]);
lastThreePlusRest("Programming");
angleDef(180);
largeSum([1,2,3,4,5,6,7],5);