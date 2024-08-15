let coverProducts = [];

// Abdelrahman Scope
(
    function(){
        let layoutProductImg = document.querySelector(".layout .layoutimg img");
        let layoutProductName = document.querySelector(".layout .layouttext p");
        let layoutMarketingLine = document.querySelector(".layout .layouttext h1");
        let layoutTrackersList = document.querySelector(".layout .layouttrackers ul")
        let coverImagesCount = 1;
        
        async function getCoverProducts(){
            try {
                let res = await fetch();
                let data = await res.json();
                coverProducts = data.coverProducts;
                coverImagesCount = coverProducts.length;
            } catch (error) {
                
            }
        }

        function layoutDisplay(){
            let i = Math.ceil(coverImagesCount / 2);
            for (let j = 0; j < coverImagesCount; j++) {
                if (j+1 == i) layoutTrackersList.innerHTML += `<li class="bg-secondary rounded-5 mx-1 activetrackerpoint"></li>`;
                else layoutTrackersList.innerHTML += `<li class="bg-secondary rounded-5 mx-1"></li>`;
                
            }
            let layoutTrackersPoints = document.querySelectorAll(".layout .layouttrackers ul li");
                setInterval(()=> {
                    console.log(i);
                    console.log(layoutTrackersPoints[i-1]);
                    layoutTrackersPoints[i-1].classList.add("activetrackerpoint");
                    //coverProducts[i].img ? coverProducts[i].img : 
                    layoutProductImg.src = `imgs/cover-product-${i}.jpeg`;
                    //coverProducts[i].name ? coverProducts[i].name :
                    layoutProductName.innerHTML =  `iPhone 14 Series`;
                    //coverProducts[i].marketLine ? coverProducts[i].marketLine :
                    layoutMarketingLine.innerHTML =  `Up to 10% off Voucher`;
                    i++;
                    if (i == coverImagesCount + 1) {
                        i = 1;
                    }
                    console.log(layoutTrackersPoints[i-1]);
                    if (coverImagesCount > 1) layoutTrackersPoints[i-1].classList.remove("activetrackerpoint");
                },5000)
        }
        layoutDisplay();
    }


)();
