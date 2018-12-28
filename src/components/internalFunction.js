// let testedObj1 = {'k1': 'abc', 'k2': 'cdsdss', 'k3': 'cccq'};
// let testedObj2 = {'k1': 'z', 'k2': 's'};


function someCompareObj (objFind, objForFind) {
    let keysFind = Object.keys(objFind);
    let keysForFind = Object.keys(objForFind);
    let compCase = [];
    let indexKes;
    let findItem;
    let forFindItem;
    let compIndex;
    console.log("data keys keysFind: ", objFind);
    console.log("data keys keysFind: ", keysFind);
    console.log("data keys keysForFind: ", objForFind);
    console.log("data keys keysForFind: ", keysForFind);
    for (indexKes = 0; indexKes < keysFind.length; indexKes++) {
        if (keysForFind.indexOf(keysFind[indexKes]) !== -1) {
            console.log(keysFind[indexKes]);
            compCase.push(keysFind[indexKes]);
        }
    }
    console.log(compCase);
    for (compIndex = 0; compIndex < compCase.length; compIndex++) {
        forFindItem = String(objForFind[compCase[compIndex]]).toLowerCase();
        findItem = String(objFind[compCase[compIndex]]).toLowerCase();
        console.log("Res f1: ", forFindItem);
        console.log("Res f2: ", findItem);
        console.log("Res fin: ", forFindItem.indexOf(findItem));
        if (String(objForFind[compCase[compIndex]]).toLowerCase().indexOf(String(objFind[compCase[compIndex]]).toLowerCase()) === -1)  {
            console.log("FAIL");
            return false
            // break;
        }
    }
    return true
}

export {someCompareObj};