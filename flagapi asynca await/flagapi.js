

function get_val(cuurTag){

    console.log(cuurTag.innerHTML);
    var firstLetter = cuurTag.innerHTML
    getDataWithLetter(firstLetter)
}


async function getDataWithLetter(countname){

    const productContainer = document.getElementById('product-container');
    productContainer.innerHTML = ''; 


    try{
        var response = await fetch(`https://restcountries.com/v3.1/name/${countname}`);
        var result = await response.json();
        console.log(result);

        const filteredCountries = result.filter((country) =>
            country.name.common.startsWith(countname)
        );
        
        filteredCountries.forEach((obj)=>{

            const card = document.createElement('div');
                card.classList.add('col-12', 'col-sm-6', 'col-md-4', 'col-lg-3', 'mb-4'); 

                card.innerHTML = `
                    <div class="card h-100">
                        <img src="${obj.flags.png}" class="card-img-top" alt="img">
                        <div class="card-body">
                            <h5 class="card-title">${obj.name.common}</h5>
                            
                        </div>
                    </div>
                `;
                
                productContainer.appendChild(card);
        })

    }
    catch(error){
        console.log('ERROR:', error);
    }  
}


async function getAllData() {

    const productContainer = document.getElementById('product-container');
    productContainer.innerHTML = ''; 

    try{
        var response = await fetch(`https://restcountries.com/v3.1/all`);
        var result = await response.json();
        console.log(result);

        result.forEach((obj)=>{
            var card = document.createElement('div');
            card.classList.add('col-12', 'col-sm-6', 'col-md-4', 'col-lg-3', 'mb-4'); 

                card.innerHTML = `
                    <div class="card h-100">
                        <img src="${obj.flags.png}" class="card-img-top" alt="img">
                        <div class="card-body">
                            <h5 class="card-title">${obj.name.common}</h5>
                            
                        </div>
                    </div>
                `;
                
            productContainer.appendChild(card);
        })

    }
    catch(error){

    }
}

document.getElementById('allCountries').onclick = function(ev){
    ev.preventDefault();

    getAllData()
}

document.getElementById('search').onclick = function(ev){
    ev.preventDefault();

    var txtdata = document.getElementById('countryName').value;
    console.log(txtdata);

    getDataWithName(txtdata);
    document.getElementById('countryName').value = '';
}

async function getDataWithName(countname) {
    const productContainer = document.getElementById('product-container');
    productContainer.innerHTML = ''; 


    try{
        var response = await fetch(`https://restcountries.com/v3.1/name/${countname}`);
        var result = await response.json();
        console.log(result);

        result.forEach((obj)=>{

            const card = document.createElement('div');
                card.classList.add('col-12', 'col-sm-6', 'col-md-4', 'col-lg-3', 'mb-4'); 

                card.innerHTML = `
                    <div class="card h-100">
                        <img src="${obj.flags.png}" class="card-img-top" alt="img">
                        <div class="card-body">
                            <h5 class="card-title">${obj.name.common}</h5>
                            
                        </div>
                    </div>
                `;
                
                productContainer.appendChild(card);
        })

    }
    catch(error){
        console.log('ERROR:', error);
    }  
}