window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount();
});

const functionAPI = '';

const getVisitCount = () => {
    let count = 0;
    fetch(functionAPI).then(response => {
        return response.json();
    }).then(response => {
        console.log("Website called function API.");
        count = response.count;
        document.getElementById("count").innerHTML = count;
    }).catch(err => {
        console.log(err);
    });
    return count;
}