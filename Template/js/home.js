let coverProducts = [];

// Abdelrahman Scope
(
    function(){
        let layoutProductImg = document.querySelector(".layout .layoutimg img");
        let layoutProductName = document.querySelector(".layout .layouttext p");
        let layoutMarketingLine = document.querySelector(".layout .layouttext h1");
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
            console.log("hello");
            let i = Math.ceil(coverImagesCount / 2);
                setInterval(()=> {
                    console.log(i);
                    layoutProductImg.src = coverProducts[i].img ? coverProducts[i].img : `imgs/cover-product-${i}.jpeg`;
                    layoutProductName.innerHTML = coverProducts[i].name ? coverProducts[i].name : `iPhone 14 Series`;
                    layoutMarketingLine.innerHTML = coverProducts[i].marketLine ? coverProducts[i].marketLine : `Up to 10% off Voucher`;
                    i++;
                    if (i == coverImagesCount + 1) {
                        i = 1;
                    }
                },5000)
        }
        layoutDisplay();
    }


)();
