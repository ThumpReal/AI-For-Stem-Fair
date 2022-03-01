var skipping = [0.0012658247357649982,0.3439207500188578,0.2185680536400935,0.03260997374738552,-0.08538353116863201,0.3294504120079525,0.04279935489924854,-0.02766593006515363,-0.16904804903875967,-0.41529191590938325,-0.44910365523393614,0.24395404458310604,0.42698250129989496,-0.18586511302341935,-0.2853840128008778,0.47551104343088013,-0.1848000997867171,-0.3292601128815268,-0.275598825994778,-0.01826162464844951,-0.47232662592277086,-0.509748209445956,-0.4334576227376406,-0.02371540873944874,-0.03371914470420459,0.09640544742867763,-0.08385345120927158,-0.39505970191602463,-0.03377620170928768,-0.22765723879296962,0.42746298036719743,0.3393847866606029,-0.39485236955397374,-0.47656571488192423,-0.33998301394584507,-0.029404177392011555,0.05896632610633406,0.006302434552724238,0.0921396311044743,0.006827213396350685];
var running = [0.18834910252749903,-0.42210118210117537,-0.282405069062347,-0.18779796377809643,0.35392962793905547,0.08652163281465311,-0.1683227913757347,0.27437336159984244,-0.15736460024327373,0.14172118611462192,-0.4330814082625428,0.28958751579459086,-0.2359942212566043,0.3178187768335743,0.13653278898043975,-0.45054794905994267,-0.06280852816771779,-0.3340736301275634,-0.1783600329925001,0.17661413127755907,-0.4968709401087665,-0.04941657163272649,0.0806457051422557,-0.10155357399245674,0.007063353032232954,-0.4223661866478451,-0.2831760111970353,0.3557805746944544,0.25778944810578747,0.24074724355018923,0.47785061674252083,0.2546941475880225,-0.2816248228446361,0.0388214927192042,0.39670983755588035,-0.08301800688060372,-0.05630540145803672,-0.09999896706725496,-0.008475885592672955,0.039582396033190456];

if(location.search == "" || location.search == "?skipping"){
	var trainedWeights = skipping;
	var runType = "skipping";
	el("switch").innerHTML = "Switch to running";

}else if(location.search == "?running"){
	var trainedWeights = running;
	var runType = "running";
	el("switch").innerHTML = "Switch to skipping";

}else{
	location.search = "";
}


el("header").innerHTML = "Bob the Running AI ("+runType+")";
el("start").innerHTML = "Start "+runType;

function switchRunType(){
	if(runType == "skipping"){
		location.search = "?running";
	}else{
		location.search = "?skipping";
	}
}


function el(id){ return document.getElementById(id)};