<script data-info="hacks-body">
// Store the initial value of '.price-salle' on page load
let initialPriceSalle = Number($('.price-salle').text().replace(/[^0-9.-]+/g, "").replace(',', '.'));

// Function to update the prices and total sum for traiteur-1
const updateTraiteur1PricesAndTotal = () => {
  // declare sum variables for each category
  let sumSpecialite1 = 0;
  let sumSpecialite2 = 0;
  let sumSpecialite3 = 0;
  let sumPetitdejeuner1 = 0;
  let sumPetitdejeuner2 = 0;
  let sumDejeuner1 = 0;
  let sumDejeuner2 = 0;
  let sumDejeuner3 = 0;
  let sumDejeuner4 = 0;
  let sumPause = 0;
  let sumDiner1 = 0;
  let sumDiner2 = 0;
  let sumDiner3 = 0;

  // Get the number of persons entered for each category for traiteur-1
  const numberOfPersonsSpecialite1 = Number($('.specialite-number-1').val());
  const numberOfPersonsSpecialite2 = Number($('.specialite-number-2').val());
  const numberOfPersonsSpecialite3 = Number($('.specialite-number-3').val());
  const numberOfPersonsPetitdejeuner1 = Number($('.petit-dejeuner-number-1').val());
  const numberOfPersonsPetitdejeuner2 = Number($('.petit-dejeuner-number-2').val());
  const numberOfPersonsDejeuner1 = Number($('.dejeuner-number-1').val());
  const numberOfPersonsDejeuner2 = Number($('.dejeuner-number-2').val());
  const numberOfPersonsDejeuner3 = Number($('.dejeuner-number-3').val());
  const numberOfPersonsDejeuner4 = Number($('.dejeuner-number-4').val());
  const numberOfPersonsPause = Number($('.pause-aprem-number-1').val());
  const numberOfPersonsDiner1 = Number($('.diner-number-1').val());
  const numberOfPersonsDiner2 = Number($('.diner-number-2').val());
  const numberOfPersonsDiner3 = Number($('.diner-number-3').val());

  // calculate the sum of each category for traiteur-1
  sumSpecialite1 = calculateCategorySum('checkbox-devis-specialite-1', numberOfPersonsSpecialite1);
  sumSpecialite2 = calculateCategorySum('checkbox-devis-specialite-2', numberOfPersonsSpecialite2);
  sumSpecialite3 = calculateCategorySum('checkbox-devis-specialite-3', numberOfPersonsSpecialite3);
  sumPetitdejeuner1 = calculateCategorySum('checkbox-devis-petitdejeuner-1', numberOfPersonsPetitdejeuner1);
  sumPetitdejeuner2 = calculateCategorySum('checkbox-devis-petitdejeuner-2', numberOfPersonsPetitdejeuner2);
  sumDejeuner1 = calculateCategorySum('checkbox-devis-dejeuner-1', numberOfPersonsDejeuner1);
  sumDejeuner2 = calculateCategorySum('checkbox-devis-dejeuner-2', numberOfPersonsDejeuner2);
  sumDejeuner3 = calculateCategorySum('checkbox-devis-dejeuner-3', numberOfPersonsDejeuner3);
  sumDejeuner4 = calculateCategorySum('checkbox-devis-dejeuner-4', numberOfPersonsDejeuner4);
  sumPause = calculateCategorySum('checkbox-devis-pause', numberOfPersonsPause);
  sumDiner1 = calculateCategorySum('checkbox-devis-diner-1', numberOfPersonsDiner1);
  sumDiner2 = calculateCategorySum('checkbox-devis-diner-2', numberOfPersonsDiner2);
  sumDiner3 = calculateCategorySum('checkbox-devis-diner-3', numberOfPersonsDiner3);

  // Update each sum display with its respective category sum for traiteur-1
  updateSumDisplay('price-specialite', sumSpecialite1 + sumSpecialite2 + sumSpecialite3);
  updateSumDisplay('price-petitdejeuner', sumPetitdejeuner1 + sumPetitdejeuner2);
  updateSumDisplay('price-dejeuner', sumDejeuner1 + sumDejeuner2 + sumDejeuner3 + sumDejeuner4);
  updateSumDisplay('price-pause', sumPause);
  updateSumDisplay('price-diner', sumDiner1 + sumDiner2 + sumDiner3);

  // Get the value of '.price-salle'
  const priceSalleValue = Number($('.price-salle').text().replace(/[^0-9.-]+/g, "").replace(',', '.')); // remove any non-numeric characters

  // calculate the total sum for all checkboxes and add '.price-salle' value for traiteur-1
  const totalSum = sumSpecialite1 + sumSpecialite2 + sumSpecialite3 + sumPetitdejeuner1 + sumPetitdejeuner2 + sumDejeuner1 + sumDejeuner2 + sumDejeuner3 + sumDejeuner4 + sumPause + sumDiner1 + sumDiner2 + sumDiner3 + priceSalleValue;

  // calculate the TVA (20%) for traiteur-1
  const tvaValue = totalSum * 0.2; // 20% TVA

  // calculate the sum with TVA and without TVA for traiteur-1
  const totalHT = totalSum;
  const totalTTC = totalSum + tvaValue;

  // format sums without '€' symbol
  const formattedTotalHT = new Intl.NumberFormat('fr-FR', { style: 'decimal' }).format(totalHT);
  const formattedTotalTTC = new Intl.NumberFormat('fr-FR', { style: 'decimal' }).format(totalTTC);
  const formattedTVA = new Intl.NumberFormat('fr-FR', { style: 'decimal' }).format(tvaValue);

  // update the elements with the calculated values for traiteur-1
  $('.total-ht').text(formattedTotalHT);
  $('.total-ttc').text(formattedTotalTTC);
  $('.price-tva').text(formattedTVA);

  // add the sum value to the hidden input (if you have one) for traiteur-1
  $('.hack42-send-value').val(formattedTotalHT);
};

// Function to update the prices and total sum for traiteur-2
const updateTraiteur2PricesAndTotal = () => {
  // declare sum variables for each category
  let sumSpecialite1Tab2 = 0;
  let sumSpecialite2Tab2 = 0;
  let sumSpecialite3Tab2 = 0;
  let sumPetitdejeuner1Tab2 = 0;
  let sumPetitdejeuner2Tab2 = 0;
  let sumDejeuner1Tab2 = 0;
  let sumDejeuner2Tab2 = 0;
  let sumDejeuner3Tab2 = 0;
  let sumDejeuner4Tab2 = 0;
  let sumPauseTab2 = 0;
  let sumDiner1Tab2 = 0;
  let sumDiner2Tab2 = 0;
  let sumDiner3Tab2 = 0;

  // Get the number of persons entered for each category for traiteur-2
  const numberOfPersonsSpecialite1Tab2 = Number($('.specialite-number-1-tab-2').val());
  const numberOfPersonsSpecialite2Tab2 = Number($('.specialite-number-2-tab-2').val());
  const numberOfPersonsSpecialite3Tab2 = Number($('.specialite-number-3-tab-2').val());
  const numberOfPersonsPetitdejeuner1Tab2 = Number($('.petit-dejeuner-number-1-tab-2').val());
  const numberOfPersonsPetitdejeuner2Tab2 = Number($('.petit-dejeuner-number-2-tab-2').val());
  const numberOfPersonsDejeuner1Tab2 = Number($('.dejeuner-number-1-tab-2').val());
  const numberOfPersonsDejeuner2Tab2 = Number($('.dejeuner-number-2-tab-2').val());
  const numberOfPersonsDejeuner3Tab2 = Number($('.dejeuner-number-3-tab-2').val());
  const numberOfPersonsDejeuner4Tab2 = Number($('.dejeuner-number-4-tab-2').val());
  const numberOfPersonsPauseTab2 = Number($('.pause-aprem-number-1-tab-2').val());
  const numberOfPersonsDiner1Tab2 = Number($('.diner-number-1-tab-2').val());
  const numberOfPersonsDiner2Tab2 = Number($('.diner-number-2-tab-2').val());
  const numberOfPersonsDiner3Tab2 = Number($('.diner-number-3-tab-2').val());

  // calculate the sum of each category for traiteur-2
  sumSpecialite1Tab2 = calculateCategorySum('checkbox-devis-specialite-1-tab-2', numberOfPersonsSpecialite1Tab2);
  sumSpecialite2Tab2 = calculateCategorySum('checkbox-devis-specialite-2-tab-2', numberOfPersonsSpecialite2Tab2);
  sumSpecialite3Tab2 = calculateCategorySum('checkbox-devis-specialite-3-tab-2', numberOfPersonsSpecialite3Tab2);
  sumPetitdejeuner1Tab2 = calculateCategorySum('checkbox-devis-petitdejeuner-1-tab-2', numberOfPersonsPetitdejeuner1Tab2);
  sumPetitdejeuner2Tab2 = calculateCategorySum('checkbox-devis-petitdejeuner-2-tab-2', numberOfPersonsPetitdejeuner2Tab2);
  sumDejeuner1Tab2 = calculateCategorySum('checkbox-devis-dejeuner-1-tab-2', numberOfPersonsDejeuner1Tab2);
  sumDejeuner2Tab2 = calculateCategorySum('checkbox-devis-dejeuner-2-tab-2', numberOfPersonsDejeuner2Tab2);
  sumDejeuner3Tab2 = calculateCategorySum('checkbox-devis-dejeuner-3-tab-2', numberOfPersonsDejeuner3Tab2);
  sumDejeuner4Tab2 = calculateCategorySum('checkbox-devis-dejeuner-4-tab-2', numberOfPersonsDejeuner4Tab2);
  sumPauseTab2 = calculateCategorySum('checkbox-devis-pause-tab-2', numberOfPersonsPauseTab2);
  sumDiner1Tab2 = calculateCategorySum('checkbox-devis-diner-1-tab-2', numberOfPersonsDiner1Tab2);
  sumDiner2Tab2 = calculateCategorySum('checkbox-devis-diner-2-tab-2', numberOfPersonsDiner2Tab2);
  sumDiner3Tab2 = calculateCategorySum('checkbox-devis-diner-3-tab-2', numberOfPersonsDiner3Tab2);

  // Update each sum display with its respective category sum for traiteur-2
  updateSumDisplay('price-specialite', sumSpecialite1Tab2 + sumSpecialite2Tab2 + sumSpecialite3Tab2);
  updateSumDisplay('price-petitdejeuner', sumPetitdejeuner1Tab2 + sumPetitdejeuner2Tab2);
  updateSumDisplay('price-dejeuner', sumDejeuner1Tab2 + sumDejeuner2Tab2 + sumDejeuner3Tab2 + sumDejeuner4Tab2);
  updateSumDisplay('price-pause', sumPauseTab2);
  updateSumDisplay('price-diner', sumDiner1Tab2 + sumDiner2Tab2 + sumDiner3Tab2);

  // Get the value of '.price-salle'
  const priceSalleValue = Number($('.price-salle').text().replace(/[^0-9.-]+/g, "").replace(',', '.')); // remove any non-numeric characters

  // calculate the total sum for all checkboxes and add '.price-salle' value for traiteur-2
  const totalSum = sumSpecialite1Tab2 + sumSpecialite2Tab2 + sumSpecialite3Tab2 + sumPetitdejeuner1Tab2 + sumPetitdejeuner2Tab2 + sumDejeuner1Tab2 + sumDejeuner2Tab2 + sumDejeuner3Tab2 + sumDejeuner4Tab2 + sumPauseTab2 + sumDiner1Tab2 + sumDiner2Tab2 + sumDiner3Tab2 + priceSalleValue;

  // calculate the TVA (20%) for traiteur-2
  const tvaValue = totalSum * 0.2; // 20% TVA

  // calculate the sum with TVA and without TVA for traiteur-2
  const totalHT = totalSum;
  const totalTTC = totalSum + tvaValue;

  // format sums without '€' symbol
  const formattedTotalHT = new Intl.NumberFormat('fr-FR', { style: 'decimal' }).format(totalHT);
  const formattedTotalTTC = new Intl.NumberFormat('fr-FR', { style: 'decimal' }).format(totalTTC);
  const formattedTVA = new Intl.NumberFormat('fr-FR', { style: 'decimal' }).format(tvaValue);

  // update the elements with the calculated values for traiteur-2
  $('.total-ht').text(formattedTotalHT);
  $('.total-ttc').text(formattedTotalTTC);
  $('.price-tva').text(formattedTVA);

  // add the sum value to the hidden input (if you have one) for traiteur-2
  $('.hack42-send-value').val(formattedTotalHT);
};

// Function to update the prices and total sum for traiteur-3
const updateTraiteur3PricesAndTotal = () => {
  // declare sum variables for each category
  let sumSpecialite1Tab3 = 0;
  let sumSpecialite2Tab3 = 0;
  let sumSpecialite3Tab3 = 0;
  let sumPetitdejeuner1Tab3 = 0;
  let sumPetitdejeuner2Tab3 = 0;
  let sumDejeuner1Tab3 = 0;
  let sumDejeuner2Tab3 = 0;
  let sumDejeuner3Tab3 = 0;
  let sumDejeuner4Tab3 = 0;
  let sumPauseTab3 = 0;
  let sumDiner1Tab3 = 0;
  let sumDiner2Tab3 = 0;
  let sumDiner3Tab3 = 0;

  // Get the number of persons entered for each category for traiteur-3
  const numberOfPersonsSpecialite1Tab3 = Number($('.specialite-number-1-tab-3').val());
  const numberOfPersonsSpecialite2Tab3 = Number($('.specialite-number-2-tab-3').val());
  const numberOfPersonsSpecialite3Tab3 = Number($('.specialite-number-3-tab-3').val());
  const numberOfPersonsPetitdejeuner1Tab3 = Number($('.petit-dejeuner-number-1-tab-3').val());
  const numberOfPersonsPetitdejeuner2Tab3 = Number($('.petit-dejeuner-number-2-tab-3').val());
  const numberOfPersonsDejeuner1Tab3 = Number($('.dejeuner-number-1-tab-3').val());
  const numberOfPersonsDejeuner2Tab3 = Number($('.dejeuner-number-2-tab-3').val());
  const numberOfPersonsDejeuner3Tab3 = Number($('.dejeuner-number-3-tab-3').val());
  const numberOfPersonsDejeuner4Tab3 = Number($('.dejeuner-number-4-tab-3').val());
  const numberOfPersonsPauseTab3 = Number($('.pause-aprem-number-1-tab-3').val());
  const numberOfPersonsDiner1Tab3 = Number($('.diner-number-1-tab-3').val());
  const numberOfPersonsDiner2Tab3 = Number($('.diner-number-2-tab-3').val());
  const numberOfPersonsDiner3Tab3 = Number($('.diner-number-3-tab-3').val());

  // calculate the sum of each category for traiteur-3
  sumSpecialite1Tab3 = calculateCategorySum('checkbox-devis-specialite-1-tab-3', numberOfPersonsSpecialite1Tab3);
  sumSpecialite2Tab3 = calculateCategorySum('checkbox-devis-specialite-2-tab-3', numberOfPersonsSpecialite2Tab3);
  sumSpecialite3Tab3 = calculateCategorySum('checkbox-devis-specialite-3-tab-3', numberOfPersonsSpecialite3Tab3);
  sumPetitdejeuner1Tab3 = calculateCategorySum('checkbox-devis-petitdejeuner-1-tab-3', numberOfPersonsPetitdejeuner1Tab3);
  sumPetitdejeuner2Tab3 = calculateCategorySum('checkbox-devis-petitdejeuner-2-tab-3', numberOfPersonsPetitdejeuner2Tab3);
  sumDejeuner1Tab3 = calculateCategorySum('checkbox-devis-dejeuner-1-tab-3', numberOfPersonsDejeuner1Tab3);
  sumDejeuner2Tab3 = calculateCategorySum('checkbox-devis-dejeuner-2-tab-3', numberOfPersonsDejeuner2Tab3);
  sumDejeuner3Tab3 = calculateCategorySum('checkbox-devis-dejeuner-3-tab-3', numberOfPersonsDejeuner3Tab3);
  sumDejeuner4Tab3 = calculateCategorySum('checkbox-devis-dejeuner-4-tab-3', numberOfPersonsDejeuner4Tab3);
  sumPauseTab3 = calculateCategorySum('checkbox-devis-pause-tab-3', numberOfPersonsPauseTab3);
  sumDiner1Tab3 = calculateCategorySum('checkbox-devis-diner-1-tab-3', numberOfPersonsDiner1Tab3);
  sumDiner2Tab3 = calculateCategorySum('checkbox-devis-diner-2-tab-3', numberOfPersonsDiner2Tab3);
  sumDiner3Tab3 = calculateCategorySum('checkbox-devis-diner-3-tab-3', numberOfPersonsDiner3Tab3);

  // Update each sum display with its respective category sum for traiteur-3
  updateSumDisplay('price-specialite', sumSpecialite1Tab3 + sumSpecialite2Tab3 + sumSpecialite3Tab3);
  updateSumDisplay('price-petitdejeuner', sumPetitdejeuner1Tab3 + sumPetitdejeuner2Tab3);
  updateSumDisplay('price-dejeuner', sumDejeuner1Tab3 + sumDejeuner2Tab3 + sumDejeuner3Tab3 + sumDejeuner4Tab3);
  updateSumDisplay('price-pause', sumPauseTab3);
  updateSumDisplay('price-diner', sumDiner1Tab3 + sumDiner2Tab3 + sumDiner3Tab3);

  // Get the value of '.price-salle'
  const priceSalleValue = Number($('.price-salle').text().replace(/[^0-9.-]+/g, "").replace(',', '.')); // remove any non-numeric characters

  // calculate the total sum for all checkboxes and add '.price-salle' value for traiteur-3
  const totalSum = sumSpecialite1Tab3 + sumSpecialite2Tab3 + sumSpecialite3Tab3 + sumPetitdejeuner1Tab3 + sumPetitdejeuner2Tab3 + sumDejeuner1Tab3 + sumDejeuner2Tab3 + sumDejeuner3Tab3 + sumDejeuner4Tab3 + sumPauseTab3 + sumDiner1Tab3 + sumDiner2Tab3 + sumDiner3Tab3 + priceSalleValue;

  // calculate the TVA (20%) for traiteur-3
  const tvaValue = totalSum * 0.2; // 20% TVA

  // calculate the sum with TVA and without TVA for traiteur-3
  const totalHT = totalSum;
  const totalTTC = totalSum + tvaValue;

  // format sums without '€' symbol
  const formattedTotalHT = new Intl.NumberFormat('fr-FR', { style: 'decimal' }).format(totalHT);
  const formattedTotalTTC = new Intl.NumberFormat('fr-FR', { style: 'decimal' }).format(totalTTC);
  const formattedTVA = new Intl.NumberFormat('fr-FR', { style: 'decimal' }).format(tvaValue);

  // update the elements with the calculated values for traiteur-3
  $('.total-ht').text(formattedTotalHT);
  $('.total-ttc').text(formattedTotalTTC);
  $('.price-tva').text(formattedTVA);

  // add the sum value to the hidden input (if you have one) for traiteur-3
  $('.hack42-send-value').val(formattedTotalHT);
};

// Rest of the code remains the same
// ...

// Add click event listeners to the buttons to update calculations for each tab
$('.traiteur-1').click(function() {
  updateTraiteur1PricesAndTotal();
});

$('.traiteur-2').click(function() {
  updateTraiteur2PricesAndTotal();
});

$('.traiteur-3').click(function() {
  updateTraiteur3PricesAndTotal();
});

$('.traiteur-perso, .pas-de-traiteur').click(function() {
  resetPricingCalculator();
});

// Function to handle changes in the '.nb-personnes-traiteur' field
$('.specialite-number-1, .specialite-number-2, .specialite-number-3, .petit-dejeuner-number-1, .petit-dejeuner-number-2, .dejeuner-number-1, .dejeuner-number-2, .dejeuner-number-3, .dejeuner-number-4, .pause-aprem-number-1, .diner-number-1, .diner-number-2, .diner-number-3').on('change keyup', function() {
  updatePricesAndTotal();
});
</script>

