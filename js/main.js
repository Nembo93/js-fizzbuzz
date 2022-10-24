// Elabora ciclo che stampi in console numeri da 1 a 100
// Inserire funzioni che determinino se il numero è multiplo di 3, 5 o 15
// Modificare l'algoritmo affinchè quando individua un multiplo stapi una stringa al suo posto. Il primo calcolo deve determinare se si tratta di un multiplo di 15 altrimenti individuanzdolo prima come multiplo di 3 o 5 non riesce mai ad individuarlo.
const container = document.getElementById(`#conatinerId`);

let i = 0;
for (let i = 1; i <= 100; i++ ){
    // Crea elementi in html corrispondenti al volore del contatore
    let box = document.createElement(`div`);
    // box.classList.add(`.box`);
    let textI = document.createTextNode(i);
    box.appendChild(textI);
    document.getElementById(`containerId`).appendChild(box);

    if (((i % 3) == 0) && ((i % 5) == 0)){
        console.log(`fizzbuzz`);
    }
    else if ((i % 3) == 0){
        console.log(`fizz`);
    } 
    else if ((i % 5) == 0){
        console.log(`buzz`);
    }
     
    else {
        console.log (i);
    }
}

