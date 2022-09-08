// https://www.omnicalculator.com/finance/gross-rent-multiplier

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const grossrentmultiplierRadio = document.getElementById('grossrentmultiplierRadio');
const propertypriceRadio = document.getElementById('propertypriceRadio');
const grossrentalincomeRadio = document.getElementById('grossrentalincomeRadio');

let grossrentmultiplier;
let propertyprice = v1;
let grossrentalincome = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

grossrentmultiplierRadio.addEventListener('click', function() {
  variable1.textContent = 'Property price';
  variable2.textContent = 'Gross rental income';
  propertyprice = v1;
  grossrentalincome = v2;
  result.textContent = '';
});

propertypriceRadio.addEventListener('click', function() {
  variable1.textContent = 'Gross rent multiplier';
  variable2.textContent = 'Gross rental income';
  grossrentmultiplier = v1;
  grossrentalincome = v2;
  result.textContent = '';
});

grossrentalincomeRadio.addEventListener('click', function() {
  variable1.textContent = 'Gross rent multiplier';
  variable2.textContent = 'Property price';
  grossrentmultiplier = v1;
  propertyprice = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(grossrentmultiplierRadio.checked)
    result.textContent = `Gross rent multiplier = ${computegrossrentmultiplier().toFixed(2)}`;

  else if(propertypriceRadio.checked)
    result.textContent = `Property price = ${computepropertyprice().toFixed(2)}`;

  else if(grossrentalincomeRadio.checked)
    result.textContent = `Gross rental income = ${computegrossrentalincome().toFixed(2)}`;
})

// calculation

function computegrossrentmultiplier() {
  return Number(propertyprice.value) / Number(grossrentalincome.value);
}

function computepropertyprice() {
  return Number(grossrentmultiplier.value) * Number(grossrentalincome.value);
}

function computegrossrentalincome() {
  return Number(propertyprice.value) / Number(grossrentmultiplier.value);
}