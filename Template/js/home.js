import {url} from "./urls.js";

let coverProducts = [
    // {
    //     img: "imgs/cover-product-1.jpeg",
    //     name: "iPhone 14 Series",
    //     marketLine: "Up to 10% off Voucher"
    // },
    // {
    //     img: "imgs/cover-product-2.jpeg",
    //     name: "DUMMY Product Name",
    //     marketLine: "DUMMY Market Line"
    // },
    // {
    //     img: "imgs/cover-product-2.jpeg",
    //     name: "DUMMY Product Name",
    //     marketLine: "DUMMY Market Line"
    // },
];
let categories = [];
let exploreProducts = [];
let filledStar = `<svg width="16" class="me-1" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M14.673 7.17173C15.7437 6.36184 15.1709 4.65517 13.8284 4.65517H11.3992C10.7853 4.65517 10.243 4.25521 10.0617 3.66868L9.33754 1.32637C8.9309 0.0110567 7.0691 0.0110564 6.66246 1.32637L5.93832 3.66868C5.75699 4.25521 5.21469 4.65517 4.60078 4.65517H2.12961C0.791419 4.65517 0.215919 6.35274 1.27822 7.16654L3.39469 8.78792C3.85885 9.1435 4.05314 9.75008 3.88196 10.3092L3.11296 12.8207C2.71416 14.1232 4.22167 15.1704 5.30301 14.342L7.14861 12.9281C7.65097 12.5432 8.34903 12.5432 8.85139 12.9281L10.6807 14.3295C11.7636 15.159 13.2725 14.1079 12.8696 12.8046L12.09 10.2827C11.9159 9.71975 12.113 9.10809 12.5829 8.75263L14.673 7.17173Z" fill="#FFAD33"/>
                                                </svg> `;
let halfFilledStar = `<svg width="16" class="me-1 height="15" viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg">
                                                    <defs>
                                                      <linearGradient id="half-fill" x1="0%" y1="0%" x2="100%" y2="0%">
                                                        <stop offset="50%" stop-color="#FFAD33"/>
                                                        <stop offset="50%" stop-color="white"/>
                                                      </linearGradient>
                                                    </defs>
                                                    <path d="M14.673 7.17173C15.7437 6.36184 15.1709 4.65517 13.8284 4.65517H11.3992C10.7853 4.65517 10.243 4.25521 10.0617 3.66868L9.33754 1.32637C8.9309 0.0110567 7.0691 0.0110564 6.66246 1.32637L5.93832 3.66868C5.75699 4.25521 5.21469 4.65517 4.60078 4.65517H2.12961C0.791419 4.65517 0.215919 6.35274 1.27822 7.16654L3.39469 8.78792C3.85885 9.1435 4.05314 9.75008 3.88196 10.3092L3.11296 12.8207C2.71416 14.1232 4.22167 15.1704 5.30301 14.342L7.14861 12.9281C7.65097 12.5432 8.34903 12.5432 8.85139 12.9281L10.6807 14.3295C11.7636 15.159 13.2725 14.1079 12.8696 12.8046L12.09 10.2827C11.9159 9.71975 12.113 9.10809 12.5829 8.75263L14.673 7.17173Z" 
                                                          fill="url(#half-fill)" 
                                                          stroke="#FFAD33" 
                                                          stroke-width="1" />
                                                </svg> `;
let emptyStar = `<svg width="16" class="me-1 height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path opacity="0.25" d="M14.673 7.17173C15.7437 6.36184 15.1709 4.65517 13.8284 4.65517H11.3992C10.7853 4.65517 10.243 4.25521 10.0617 3.66868L9.33754 1.32637C8.9309 0.0110567 7.0691 0.0110564 6.66246 1.32637L5.93832 3.66868C5.75699 4.25521 5.21469 4.65517 4.60078 4.65517H2.12961C0.791419 4.65517 0.215919 6.35274 1.27822 7.16654L3.39469 8.78792C3.85885 9.1435 4.05314 9.75008 3.88196 10.3092L3.11296 12.8207C2.71416 14.1232 4.22167 15.1704 5.30301 14.342L7.14861 12.9281C7.65097 12.5432 8.34903 12.5432 8.85139 12.9281L10.6807 14.3295C11.7636 15.159 13.2725 14.1079 12.8696 12.8046L12.09 10.2827C11.9159 9.71975 12.113 9.10809 12.5829 8.75263L14.673 7.17173Z" fill="black"/>
                                                </svg> `;
// Abdelrahman Scope
(
    function(){
        let perpage = 8;
        let coverProductsCount = coverProducts.length;
        let currentCoverProduct;
        let layoutProductImg = document.querySelector(".layout .layoutimg img");
        let layoutProductName = document.querySelector(".layout .layouttext p");
        let layoutMarketingLine = document.querySelector(".layout .layouttext h1");
        let layoutTrackersList = document.querySelector(".layout .layouttrackers ul");
        let layoutTrackersPoints;
        let categoriesCount = categories.length;
        let categoriesCardContainer = document.querySelector(".browse-by-category-section .cards");
        let categoryCards;
        let currentCategoryCard = 0;
        let categoryCardsStartIndex = 0;
        let categoryCardsEndIndex = 7;
        let categoriesLeftArrow = document.querySelector(".browse-by-category-section .controlicons .leftarrow");
        let categoriesRightArrow = document.querySelector(".browse-by-category-section .controlicons .rightarrow");
        let exploreProductsCardsContainer = document.querySelector(".explore-products-section .cards");
        let exploreProductsCardLeftArrow = document.querySelector(".explore-products-section .controlicons .leftarrow");
        let exploreProductsCardRightArrow = document.querySelector(".explore-products-section .controlicons .rightarrow");
        let exploreProductCards;
        let exploreProductsCount = exploreProducts.length;
        let currentExploreProductCard = 0;
        let currentExploreProductCardsPage = 1;
        let exploreProductsCardsStartIndex = (currentExploreProductCardsPage - 1) * perpage;
        let exploreProductsCardsEndIndex = currentExploreProductCardsPage * perpage - 1;

        async function getCategories(){
            try {
                let res = await fetch(`http://${url}/api/category`,{
                    headers: {
                        "Content-Type": "application/json",
                      },
                    method: "GET",
                });
                let data = await res.json();
                categories = data.data;
                categoriesCount = categories.length;
            } catch (error) {
                
            }
        }

        async function getExploreProducts(){
            try {
                let res = await fetch(`http://${url}/api/products?page=${currentExploreProductCardsPage}&per_page=8`,{
                    headers: {
                        "Content-Type": "application/json",
                      },
                    method: "GET",
                });
                let data = await res.json();
                exploreProducts.push(...data.data);
                exploreProductsCount = exploreProducts.length;
            } catch (error) {
                console.log(error);
            }
        }

        async function nextExploreProductCard(){
            if(exploreProductsCardsEndIndex + perpage > exploreProducts.length){
                currentExploreProductCardsPage++;
                await getExploreProducts(currentExploreProductCardsPage);
                exploreProductsCardsStartIndex = exploreProductsCardsEndIndex + 1;
                exploreProductsCardsEndIndex += perpage;
                exploreProductCardsDisplay();
            }
            else {
                exploreProductsCardsStartIndex = exploreProductsCardsEndIndex + 1;
                exploreProductsCardsEndIndex += perpage;
                exploreProductCardsDisplay();
            }
            // exploreProductCards[currentExploreProductCard].classList.remove("activeexploreproductcard");
            // currentExploreProductCard++;
            // if (currentExploreProductCard >= (exploreProductsCount)) {
            //     currentExploreProductCard = 0;
            // }
            // exploreProductCards[currentExploreProductCard].classList.add("activeexploreproductcard");
        }

        function prevExploreProductCard(){
            if(exploreProductsCardsStartIndex - perpage >= 0){
                exploreProductsCardsEndIndex -= perpage;
                exploreProductsCardsStartIndex -= perpage;
                exploreProductCardsDisplay();
            }
            // exploreProductCards[currentExploreProductCard].classList.remove("activeexploreproductcard");
            // currentExploreProductCard--;
            // if (currentExploreProductCard < 0) {
            //     currentExploreProductCard = exploreProductsCount - 1;
            // }
            // exploreProductCards[currentExploreProductCard].classList.add("activeexploreproductcard");
        }

        function nextCoverProduct(){
            if (coverProductsCount > 1) layoutTrackersPoints[currentCoverProduct-1].classList.remove("activetrackerpoint");
            currentCoverProduct++;
            if (currentCoverProduct == coverProductsCount + 1) {
                currentCoverProduct = 1;
            }
            layoutTrackersPoints[currentCoverProduct-1].classList.add("activetrackerpoint");
            layoutProductImg.src = coverProducts[currentCoverProduct-1].image; 
            layoutProductName.innerHTML = coverProducts[currentCoverProduct-1].product_name;
            let description = (((coverProducts[currentCoverProduct-1].description).split(" ")).slice(0,7)).join(" ");
            layoutMarketingLine.innerHTML = description;
        }

        function coverLayoutDisplay(){
            coverProducts = exploreProducts.slice(0,3);
            coverProductsCount = coverProducts.length;
            currentCoverProduct = Math.ceil(coverProductsCount / 2);
            for (let j = 0; j < coverProductsCount; j++) {
                if (j+1 == currentCoverProduct) layoutTrackersList.innerHTML += `<li class="bg-secondary rounded-5 mx-1 activetrackerpoint"></li>`;
                else layoutTrackersList.innerHTML += `<li class="bg-secondary rounded-5 mx-1"></li>`;
            }
            layoutTrackersPoints = document.querySelectorAll(".layout .layouttrackers ul li");
                setInterval(()=> {
                    nextCoverProduct();
                },5000)
        }

        function categoriesDisplay(){
            for (let i = 1; i <= categoriesCount; i++) {
                categoriesCardContainer.innerHTML += ` <div class="col-md-2 px-3">
                                                            <div class="card d-flex flex-column align-items-center py-5">
                                                                <div class="categoryicon">
                                                                    ${categories[i-1].icon}                                              
                                                                </div>
                                                                <div class="categoryname">
                                                                    <p class="m-0 fw-bold">${categories[i-1].category_name}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                `;
            }
            categoryCards = document.querySelectorAll(".browse-by-category-section .cards .col-md-2 .card");
            if(categoriesCount > 1) currentCategoryCard = Math.ceil(categoryCards.length / 2);
            categoryCards[currentCategoryCard].classList.add("activecard");
            setInterval(()=> {
                // nextCategoryCard();
            },5000)
        }

        function nextCategoriesCards(currentEnd,Range) {
            if(categories[currentEnd+Range+Range-1]){
                categoriesDisplay(currentEnd+Range - 1,currentEnd+Range+Range-1);
            }
            else {
                categoriesDisplay(0,8);
            }
        }
        
        function getratingstars(rating){
            let element = ``;
            for (let i = 0; i < Math.floor(rating); i++) {
                element += filledStar;
            }
            if (rating < Math.round(rating)) {
                element += halfFilledStar;
                rating = Math.ceil(rating);
            }
            while (rating < 5) {
                element += emptyStar;
                rating++;
            }
            return element;
        }
        
        function exploreProductCardsDisplay(){
            exploreProductsCardsContainer.innerHTML = "";
            for (let i = exploreProductsCardsStartIndex; i <= exploreProductsCardsEndIndex; i++) {
                exploreProductsCardsContainer.innerHTML += `<div class="col-md-3 px-3">
                                                                <div class="card border-0 position-relative">
                                                                    <div class="cardimg d-flex justify-content-center py-5 rounded-1 position-relative">
                                                                        <img src="${exploreProducts[i].image}" alt="Product Image">
                                                                        <button type="button" class="btn bg-black text-white opacity-0 w-100 position-absolute bottom-0 fs-5 rounded-top-0">Add To Cart</button>
                                                                    </div>
                                                                    <div class="cardtext my-3">
                                                                        <p class="fw-bold my-1">${exploreProducts[i].product_name}</p>
                                                                        <div class="productdetails d-flex">
                                                                            <span class="price fw-bold text-danger me-2">$${exploreProducts[i].price}</span>
                                                                            <span class="ratingstars d-flex align-items-center">
                                                                                ${getratingstars(4.3)}
                                                                            </span>
                                                                            <span class="raters ms-2 text-secondary fw-bold">(${50})</span>
                                                                        </div>
                                                                        <div class="icons">
                                                                            <svg width="34" height="34" class="mb-1" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <circle cx="17" cy="17" r="17" fill="white"/>
                                                                                <path d="M13 10C10.7912 10 9 11.7396 9 13.8859C9 15.6185 9.7 19.7305 16.5904 23.8873C16.7138 23.961 16.8555 24 17 24C17.1445 24 17.2862 23.961 17.4096 23.8873C24.3 19.7305 25 15.6185 25 13.8859C25 11.7396 23.2088 10 21 10C18.7912 10 17 12.3551 17 12.3551C17 12.3551 15.2088 10 13 10Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                                            </svg>
                                                                            <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                <circle cx="17" cy="17" r="17" fill="white"/>
                                                                                <path d="M26.257 15.962C26.731 16.582 26.731 17.419 26.257 18.038C24.764 19.987 21.182 24 17 24C12.818 24 9.23601 19.987 7.74301 18.038C7.51239 17.7411 7.38721 17.3759 7.38721 17C7.38721 16.6241 7.51239 16.2589 7.74301 15.962C9.23601 14.013 12.818 10 17 10C21.182 10 24.764 14.013 26.257 15.962V15.962Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                                                <path d="M17 20C18.6569 20 20 18.6569 20 17C20 15.3431 18.6569 14 17 14C15.3431 14 14 15.3431 14 17C14 18.6569 15.3431 20 17 20Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                                            </svg>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>`;
                                                            // ${getratingstars(exploreProducts[i].rating)}
                                                            // ${exploreProducts[i].raters}
            }
            let exploreProductCardsIcons = document.querySelectorAll(".explore-products-section .cards .col-md-3 .card .icons svg");
            for (let i = 0; i < exploreProductCardsIcons.length; i++) {
                if(i % 2 == 0) exploreProductCardsIcons[i].addEventListener("click", function(){
                    exploreProductCardsIcons[i].classList.toggle("clickedIcon");
                });
                else exploreProductCardsIcons[i].addEventListener("click",function(){
                    exploreProductCardsIcons[i].classList.toggle("clickedIcon");
                });
            }
        }

        async function categoryCardManager(){
            await getCategories();
            categoriesDisplay();
        }

        async function exploreProductCardsManager(){
            await getExploreProducts();
            exploreProductCardsDisplay();
        }

        async function blabla(){
            await exploreProductCardsManager();
            coverLayoutDisplay();
            categoryCardManager();
        }

        // categoriesLeftArrow.addEventListener("click", function(){
        //     prevCategoryCard();
        // });

        // categoriesRightArrow.addEventListener("click", function(){
        //     nextCategoryCard();
        // });

        exploreProductsCardLeftArrow.addEventListener("click", function(){
            prevExploreProductCard();
        });

        exploreProductsCardRightArrow.addEventListener("click", async function(){
            await nextExploreProductCard();
        });

        blabla();
    }
)();


/*
    function nextCategoryCard(){
            categoryCards[currentCategoryCard].classList.remove("activecard");
            currentCategoryCard++;
            if (currentCategoryCard >= (categoriesCount)) {
                currentCategoryCard = 0;
            }
            categoryCards[currentCategoryCard].classList.add("activecard");
        }

    function prevCategoryCard(){
        categoryCards[currentCategoryCard].classList.remove("activecard");
        currentCategoryCard--;
        if (currentCategoryCard < 0) {
            currentCategoryCard = categoriesCount - 1;
        }
        categoryCards[currentCategoryCard].classList.add("activecard");
    }

    function nextExploreProductCard(){
            exploreProductCards[currentExploreProductCard].classList.remove("activeexploreproductcard");
            currentExploreProductCard++;
            if (currentExploreProductCard >= (exploreProductsCount)) {
                currentExploreProductCard = 0;
            }
            exploreProductCards[currentExploreProductCard].classList.add("activeexploreproductcard");
        }

    function prevExploreProductCard(){
        exploreProductCards[currentExploreProductCard].classList.remove("activeexploreproductcard");
        currentExploreProductCard--;
        if (currentExploreProductCard < 0) {
            currentExploreProductCard = exploreProductsCount - 1;
        }
        exploreProductCards[currentExploreProductCard].classList.add("activeexploreproductcard");
    }
*/