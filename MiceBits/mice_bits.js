
var isGettingBits = false;

function startClicked() {
    isGettingBits = true;
    console.log('starting');
}

function stopClicked() {
    isGettingBits = false;
    console.log('stopping');
}


var myDiv = document.createElement("div");
myDiv.innerHTML = "<h3 style='color: #fff; margin: 3px;'>::Mice Bits</h3><button style='background-color:#fff; margin: 2px 5px; width:80%;' onclick='startClicked()'>Start</button><button style='background-color: #fff; margin: 2px 5px; width:80%;' onclick='stopClicked()'>Stop</button><p style='color: #eee; font-style:italic; padding-left: 3px;'>View data in console</p>";
myDiv.style.width = "150px";
myDiv.style.height = "110px";
myDiv.style.top="50%";
myDiv.style.right="0px";
myDiv.style.position = "fixed";
myDiv.style.backgroundColor = "orange";
document.getElementsByTagName("body")[0].appendChild(myDiv);


var nums = [];
var hexNums = [];
document.getElementsByTagName("body")[0].onmousemove = function() {
    if(!isGettingBits) {
        return;
    }
    var currentTime = Date.now();
    var lastDigit = currentTime.toString().slice(-1);
    nums.push(lastDigit);
    if(nums.length > 10) {
        var hexNumInt = parseInt(nums.join(""));
        var hexNum = hexNumInt.toString(16);
        var hexNumExcludeFirstVal = hexNum.slice(1);
        var bitNumStr = parseInt(hexNumExcludeFirstVal, 16);
        var bitNum = bitNumStr.toString(2);
        hexNums.push(hexNumExcludeFirstVal);
        nums = [];
        console.log("Hex digits: " + (hexNums[hexNums.length - 1] || '') + " - bits: " + (bitNum || '')); 
    } 
};


