

        const colcircle = document.querySelectorAll(".col-circle");
        const boxArr = Array.from(colcircle);
        const btn = document.querySelector("button")
        
        //更改box的順序
        boxArr.sort((a,b)=>{
            return parseInt(a.id)-parseInt(b.id) //為甚麼gpt寫這個沒有加return`,甚麼時候要加return
        })

        // 將圖片依序分配到方塊
        const images = [
        "goldenColor/77.svg",
        "goldenColor/apple.svg",
        "goldenColor/bell.svg",
        "goldenColor/cheers.svg",
        "goldenColor/excellence.svg",
        "goldenColor/bell.svg",
        "goldenColor/apple.svg",
        "goldenColor/excellence.svg"
        ];

        boxArr.forEach((box, index) => {
            const imgIndex = index % images.length;
            const img = document.createElement("img");
            img.src = images[imgIndex];
            box.appendChild(img);
        });

        function start() {
            let maxRounds = 1;
            let interval = 50; 
            let currentRound = 0;
            // let delay = 100;
            // let maxDelay = 500; //~~~如何做出delay漸慢效果??

            boxArr.forEach((box,index)=>{
                box.classList.remove("selectedBox");
            })

            btn.disabled = true;

            // 定義動畫函式
            function runAnimation() {
                boxArr.forEach((box, index) => {
                    setTimeout(() => {
                        box.classList.add("selectedBox");
                    }, interval * index);
                    setTimeout(() => {
                        box.classList.remove("selectedBox");
                    }, interval * (index + 1));
                });
            }  

            // 立即執行第一輪動畫
            runAnimation();
            currentRound++;

            // 設定後續週期性動畫
            const intervalId = setInterval(() => {
                runAnimation();
                currentRound++;

                if (currentRound >= maxRounds) {
                clearInterval(intervalId);// 停止 setInterval

                    let array = boxArr.slice(0,Math.floor(Math.random() * boxArr.length));
                    array.forEach((box, index) => {
                    setTimeout(() => {
                        box.classList.add("selectedBox");
                    }, interval *( index + boxArr.length));
                    setTimeout(() => {
                        box.classList.remove("selectedBox");
                    }, interval * (index + 1 + boxArr.length));
                });
            
                setTimeout(() => {
                    const lastBox = array[array.length - 1];
                    if (lastBox) {
                        lastBox.classList.add("selectedBox");
                    }
                    btn.disabled = false; // 恢復按鈕可用
                }, interval * (array.length + boxArr.length));
                }  
                
            }, interval * boxArr.length);
            
        }
       
        const targetId = button.getAttribute("data-target");
        const targetElement = document.getElementById(targetId);
        const spanChips = document.querySelector(".spanChips");
        const spanMoney = document.querySelector(".spanMoney");

        let remainingChips = 30;
        spanChips.textContent = `您的籌碼剩餘 : ${remainingChips} 枚`;
        

        document.querySelectorAll(".chips-btn").forEach((button)=>{
            button.addEventListener("click", () =>{
                if (remainingChips > 0) {
                remainingChips -= 1;
                spanChips.textContent = `您的籌碼剩餘 : ${remainingChips} 枚`;
            }
                if(targetElement){
                    let currentValue = parseInt(targetElement.textContent);
                    targetElement.textContent = currentValue+1;
                }
            })
        })
    
       


      
        
