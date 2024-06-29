document.addEventListener('DOMContentLoaded', () =>{
    bringjsondata();
});
var wholeproperties = '';
var hpfeatures = '';

function bringjsondata(){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", './assets/js/homes.json', true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function(data) {
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            wholeproperties = JSON.parse(xhr.responseText);
            shuffleArray(wholeproperties)
            hpfeatures = wholeproperties.slice(0, 10)
            showfeatures()
        }
    }
    xhr.send();
}


function showfeatures(){
    let output = '';
    for (let i = 0; i < hpfeatures.length; i++) {
        let fthome = hpfeatures[i].fthome;
        let ftlocation = hpfeatures[i].ftlocation;
        let ftbed = hpfeatures[i].ftbed;
        let ftbath = hpfeatures[i].ftbath;
        let ftgarage = hpfeatures[i].ftgarage;
        let ftamount = hpfeatures[i].ftamount;
        let ftimage = hpfeatures[i].ftimage;
       
        output += `
        <div class="property-box-5 p-box">
                    <div class="row">
                        <div class="col-lg-5 col-md-12 col-pad">
                            <div class="property-thumbnail">
                                <a href="javascript:;" class="property-img">
                                    <div class="listing-badges">
                                        <span class="featured">For Sale</span>
                                    </div>
                                    <!--<div class="tag-for">For Rent</div>-->
                                    <div class="price-ratings-box">
                                        <p class="price">
                                            ${ftamount}
                                        </p>
                                        <div class="ratings">
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star"></i>
                                            <i class="fa fa-star-o"></i>
                                        </div>
                                    </div>
                                    <img src="assets/img/h3114237/${ftimage}" alt="property-box-5" class="img-fluid">
                                </a>
                                <div class="property-overlay">
                                    
                                    <div class="property-magnify-gallery">
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-7 col-md-12 align-self-center col-pad">
                            <div class="detail">
                                <!-- title -->
                                <h1 class="title">
                                    <a href="javascript:;">${fthome}</a>
                                </h1>
                                <!-- Location -->
                                <div class="location">
                                    <a href="properties-details.html">
                                        <i class="fa fa-map-marker"></i>${ftlocation}
                                    </a>
                                </div>
                                <!-- Paragraph -->
                                <p> </p>
                                <!--  Facilities list -->
                                <ul class="facilities-list clearfix">
                                    <li>
                                        <i class="flaticon-bed"></i> ${ftbed} Beds
                                    </li>
                                    <li>
                                        <i class="flaticon-bath"></i> ${ftbath} Baths
                                    </li>
                                    <li>
                                        <i class="fa fa-car"></i> ${ftgarage} Cars
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
        `;
    }
    document.getElementById('featuresProducts').innerHTML = output;
}



function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}