const convertButton = document.querySelector(".button-converter")
const currencySelect = document.querySelector(".currency-select")

function convertValues() {
     const inputValue = document.querySelector(".input-value").value;
     const moneyValue = document.querySelector(".money-value");
     const convertedMoneyValue = document.querySelector(".converted-money-value");


     console.log(currencySelect.value)

     const dollarToday = 4.9;

     const euroToday = 6.2;

     const libraToday = 6.1;

     const bitCoin = 139.226;

     if (currencySelect.value == "dolar") {
          convertedMoneyValue.innerHTML = new Intl.NumberFormat("en-US", {
               style: "currency",
               currency: "USD",
          }).format(inputValue / dollarToday);

     } if (currencySelect.value == "euro") {
          convertedMoneyValue.innerHTML = new Intl.NumberFormat("de-DE", {
               style: "currency",
               currency: "EUR"
          }).format(inputValue / euroToday)

     } if (currencySelect.value == "libra") {
               convertedMoneyValue.innerHTML = new Intl.NumberFormat("en-UK", {
                    style: "currency",
                    currency: "GBP"
               }).format(inputValue / libraToday)
     } if (currencySelect.value == "bitcoin") {
          convertedMoneyValue.innerHTML = new Intl.NumberFormat("hd-IN", {
               style:"currency",
               currency: "BTC"
          }).format(inputValue / bitCoin)
     }
     
     moneyValue.innerHTML = new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
     }).format(inputValue);

 }

function changeCurrency () {
   const moneyName = document.getElementById("money-name")
   const moneyImage = document.querySelector(".money-dolar")
   
   if (currencySelect.value == "dolar") {
     moneyName.innerHTML = "Dólar americano"
     moneyImage.src = "./assets/dolar.png"
   }

   if (currencySelect.value == "euro") {
     moneyName.innerHTML = "Euro"
     moneyImage.src = "./assets/euro.png"
   }

   if (currencySelect.value == "libra") {
     moneyName.innerHTML = "Libra"
     moneyImage.src = "./assets/libra.png"
   }

   if (currencySelect.value == "bitcoin") {
     moneyName.innerHTML = "Bitcoin"
     moneyImage.src = "./assets/bitcoin.png"
   }
   
   
   convertValues()
}    
currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues);
