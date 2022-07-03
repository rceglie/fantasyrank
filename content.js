window.addEventListener("load", function(){
    fetch('http://localhost:5000/baseball')
        .then(response => {
            response.json()
            .then(data => {
                var opp = [].slice.call(document.getElementsByClassName("pro-team-abbrev"));
                opp.forEach(e => {
                    if (e != undefined){
                        var rank = data[e.innerText.replace(/\@/g, "")];
                        if (rank <= 10){
                            e.style.color = "red";
                        } else if (rank >= 20) {
                            e.style.color = "green";
                        } else {
                            e.style.color = "GoldenRod";
                        }
                        e.innerText = e.innerText + " (" + rank + ")";
                    }
                });
            });
        });
});