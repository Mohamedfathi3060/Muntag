let coverProducts = [];

// Abdelrahman Scope
(
    function(){
        let layoutProductImg = document.querySelector(".layout .layoutimg img");
        let layoutProductName = document.querySelector(".layout .layouttext p");
        let layoutMarketingLine = document.querySelector(".layout .layouttext h1");
        let layoutTrackersList = document.querySelector(".layout .layouttrackers ul")
        let cards = document.querySelectorAll(".cards .col-md-2 .card");
        let coverImagesCount = 1;
        let cardscount = cards.length;
        let currentCard = Math.ceil(cards.length / 2);
        let browsebycategorysection = document.querySelector(".browsebycategorysection");
        let categoriesLeftArrow = document.querySelector(".browsebycategorysection .controlicons .leftarrow");
        let categoriesRightArrow = document.querySelector(".browsebycategorysection .controlicons .rightarrow");
        const isInViewport = function(element) {
            const rect = element.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        };


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
                    if (coverImagesCount > 1) layoutTrackersPoints[i-1].classList.remove("activetrackerpoint");
                },5000)
        }

        function nextCategoryCard(){
            cards[currentCard].classList.remove("activecard");
            currentCard++;
            if (currentCard == cardscount - 1) {
                currentCard = 0;
            }
            cards[currentCard].classList.add("activecard");
        }

        function prevCategoryCard(){
            cards[currentCard].classList.remove("activecard");
            currentCard--;
            if (currentCard < 0) {
                currentCard = cardscount - 1;
            }
            cards[currentCard].classList.add("activecard");
        }

        function categoryManager(){
            cards[currentCard].classList.add("activecard");
            setInterval(()=> {
                nextCategoryCard();
            },5000)
        }

        categoriesLeftArrow.addEventListener("click", function(){
            prevCategoryCard();
        });

        categoriesRightArrow.addEventListener("click", function(){
            nextCategoryCard();
        });

        document.addEventListener("keydown", function(e){
            if (e.code == "ArrowLeft" && isInViewport(browsebycategorysection))
                 prevCategoryCard();
        });

        document.addEventListener("keydown", function(e){
            if (e.code == "ArrowRight" && isInViewport(browsebycategorysection))
                nextCategoryCard();
        });

        layoutDisplay();
        categoryManager();
    }
)();
