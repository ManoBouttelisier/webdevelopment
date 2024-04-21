// Dit is dezelfde valideringscode als in de form opgave.// Verwijderde functionaliteit :// - load event listener// - proficiat popupconst valideer = () => {	let checker = 0;	checker += valideerVoornaam();	checker += valideerFamilienaam();	checker += valideerGeboorteDatum();	checker += valideerEmail();	checker += valideerAantalKinderen();	return checker;};const valideerVoornaam = () => {	let checker = 0;	let txtVoornaam = document.getElementById("txtVoornaam");	let voornaam = txtVoornaam.value.trim();	if (voornaam.length > 30) {		reportError(txtVoornaam, "max. 30 karakters");		checker++;	} else {		clearError(txtVoornaam);	}	return checker;};const valideerFamilienaam = () => {	let checker = 0;	let txtFamilienaam = document.getElementById("txtFamilienaam");	let familienaam = txtFamilienaam.value.trim();	if (familienaam.length == 0) {		reportError(txtFamilienaam, "verplicht veld");		checker++;	} else if (familienaam.length > 50) {		reportError(txtFamilienaam, "max. 50 karakters");		checker++;	} else {		clearError(txtFamilienaam);	}	return checker;};const valideerGeboorteDatum = () => {	let checker = 0;	let txtGeboorteDatum = document.getElementById("txtGeboorteDatum");	let geboorteDatum = txtGeboorteDatum.value.trim();	// correcte lengte?	if (geboorteDatum.length!=10) {		reportError(txtGeboorteDatum, "verplicht veld");		checker++;	} else {		let formatCorrect=true;		// streepjes op juiste plaats?		if (formatCorrect && !(geboorteDatum.charAt(4)=='-' && geboorteDatum.charAt(7)=='-') ) {			formatCorrect=false;		}		// jaar gedeelte een getal?		if (formatCorrect) {			// year			let yearText=geboorteDatum.substring(0,4);			if (!isPositiveNonZeroNumber(yearText)) {				formatCorrect=false;			}		}		// maand gedeelte een getal?		if (formatCorrect) {			// month			let monthText=geboorteDatum.substring(5,7);			if (!isPositiveNonZeroNumber(monthText)) {				formatCorrect=false;			}		}		// dag gedeelte een getal?		if (formatCorrect) {			// day			let dayText=geboorteDatum.substring(8,11);			if (!isPositiveNonZeroNumber(dayText)) {				formatCorrect=false;			}		}			if (formatCorrect) {			clearError(txtGeboorteDatum);		} else {			reportError(txtGeboorteDatum, "formaat is niet jjjj-mm-dd");			checker++		}	}	return checker;};const valideerEmail = () => {	let checker = 0;	let txtEmail = document.getElementById("txtEmail");	let email = txtEmail.value.trim();	if (email.length==0) {		reportError(txtEmail, "verplicht veld");		checker++;	} else {		let formatCorrect=true;		let idx=email.indexOf("@");				if (idx<1 || idx==email.length-1) {			// @ teken komt niet voor, of helemaal vooraan of helemaal achteraan de tekst			formatCorrect=false;		}		idx=email.indexOf("@", idx+1);		if (formatCorrect && idx!=-1) {			// @-teken komt meermaals voor			formatCorrect=false;		}		if (formatCorrect) {			clearError(txtEmail);		} else {			reportError(txtEmail, "geen geldig email adres");			checker++;		}	}	return checker;};const valideerAantalKinderen = () => {	let checker = 0;	let txtAantalKinderen = document.getElementById("txtAantalKinderen");	let aantalKinderenText = txtAantalKinderen.value.trim();	if (aantalKinderenText.length==0) {		reportError(txtAantalKinderen, "verplicht veld");		checker++;	} else if (!isPositiveNumber(aantalKinderenText)) {		reportError(txtAantalKinderen, "is geen positief getal");		checker++;	} else {		let aantal=parseInt(aantalKinderenText);		if (aantal>=99) {			reportError(txtAantalKinderen, "te vruchtbaar");			checker++;		} else {			clearError(txtAantalKinderen);		}	}	return checker;};const isPositiveNumber = (text) => {	let number=parseInt(text, 10);	return !isNaN(number) && number>=0;	// merk op dat een tekst als "34m" ook aanvaard wordt, wat eigenlijk niet de bedoeling is	// een betere oplossing zou bv. een reguliere expressie gebruiken};const isPositiveNonZeroNumber = (text) => {	let number=parseInt(text, 10);	return !isNaN(number) && number>0;	// merk op dat een tekst als "34m" ook aanvaard wordt, wat eigenlijk niet de bedoeling is	// een betere oplossing zou bv. een reguliere expressie gebruiken};const reportError = (element, message) => {	let elementId=element.getAttribute("id"); // bv. txtVoornaam	let errElementId="err"+elementId.substring(3, elementId.length); // bv. errVoornaam	let errElement=document.getElementById(errElementId);	element.className="invalid";	errElement.innerHTML = message;};const clearError = (element) => {	let elementId=element.getAttribute("id"); // bv. txtVoornaam	let errElementId="err"+elementId.substring(3, elementId.length); // bv. errVoornaam	let errElement=document.getElementById(errElementId);	element.className="";	errElement.innerHTML = "";};const clearAllErrors = () => {	let fieldIds=["txtVoornaam", "txtFamilienaam", "txtGeboorteDatum", "txtEmail", "txtAantalKinderen"];	for (let i=0;i<fieldIds.length;i++) {		clearError( document.getElementById(fieldIds[i]) );	}}