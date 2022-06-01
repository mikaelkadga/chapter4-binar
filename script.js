const para1 = document.getElementsByClassName("para1")[0]
        const btn = document.getElementsByClassName("btn")[0]
        let yellow = true;
        let p = 1;
        btn.onclick = function () {
            // yellow = !yellow
            // if(yellow) {
            //     para1.style.backgroundColor = "yellow"
            // } else {
            //     para1.style.backgroundColor = "white"
            // }  
            p++
            const parent = document.getElementById('wrapper')
            let clonedElement = para1.cloneNode(true)
            clonedElement.id = `p${p}`
            parent.append(clonedElement)

        }