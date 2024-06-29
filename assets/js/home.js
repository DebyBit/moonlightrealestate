document.addEventListener('DOMContentLoaded', () =>{
    bringjsondata();
});
var wholeproperties = '';
var hpfeatures = '';
var bestpropertyvalue = '';
var oneproperty = '';

function bringjsondata(){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", './assets/js/homes.json', true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function(data) {
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            wholeproperties = JSON.parse(xhr.responseText);
            shuffleArray(wholeproperties)
            hpfeatures = wholeproperties.slice(0, 6)
            bestpropertyvalue = wholeproperties.slice(6, 10)
            oneproperty = wholeproperties[9]
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
        <div class="col-lg-4 col-md-6 col-sm-12 filtr-item" data-category="3, 2">
                    <div class="property-box-7">
                        <div class="property-thumbnail">
                            <a href="javascript:;" class="property-img">
                                <div class="tag-2">For Sale</div>
                                <div class="price-box"><span>${ftamount}</span></div>
                                <img src="assets/img/h3114237/${ftimage}" alt="property-box-7" class="img-fluid">
                            </a>
                        </div>
                        <div class="detail">
                            <h1 class="title">
                                <a href="javascript:;">${fthome}</a>
                            </h1>
                            <div class="location">
                                <a href="javascript:;">
                                    <i class="flaticon-facebook-placeholder-for-locate-places-on-maps"></i>${ftlocation}
                                </a>
                            </div>
                        </div>
                        <ul class="facilities-list clearfix">
                            <li>
                                <span>Beds</span> ${ftbed}
                            </li>
                            <li>
                                <span>Baths</span> ${ftbath}
                            </li>
                            <li>
                                <span>Cars</span> ${ftgarage}
                            </li>
                        </ul>
                        <div class="footer clearfix">
                            
                        </div>
                    </div>
                </div>
        `;
    }
    document.getElementById('featuresProducts').innerHTML = output;
    showbestpropt()
}

function showbestpropt(){
    let output = '';
    for (let i = 0; i < bestpropertyvalue.length; i++) {
        let fthome = bestpropertyvalue[i].fthome;
        let ftlocation = bestpropertyvalue[i].ftlocation;
        let ftbed = bestpropertyvalue[i].ftbed;
        let ftbath = bestpropertyvalue[i].ftbath;
        let ftgarage = bestpropertyvalue[i].ftgarage;
        let ftamount = bestpropertyvalue[i].ftamount;
        let ftimage = bestpropertyvalue[i].ftimage;
        

        output += `
        <div class="col-lg-3 col-md-6 col-sm-12 wow fadeInLeft delay-04s">
                <div class="property-box-8">
                    <div class="photo-thumbnail">
                        <div class="photo">
                            <img src="assets/img/h3114237/${ftimage}" alt="property-box-8" class="img-fluid">
                            <a href="javascript:;">
                                <span class="blog-one__plus"></span>
                            </a>
                        </div>
                        <div class="tag-for">For Sale</div>
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
                    </div>
                    <div class="detail">
                        <div class="heading">
                            <h3>
                                <a href="javascript:;">${fthome}</a>
                            </h3>
                            <div class="location">
                                <a href="javascript:;">
                                    <i class="flaticon-facebook-placeholder-for-locate-places-on-maps"></i>${ftlocation}
                                </a>
                            </div>
                        </div>
                        <div class="properties-listing">
                            <span>${ftbed} Beds</span>
                            <span>${ftbath} Baths</span>
                            <span>${ftgarage} Cars</span>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
    document.getElementById('forSaleProperties').innerHTML = output;
}


function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}