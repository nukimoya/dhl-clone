let trackingIds = ['ABC123', 'DEF456', 'GHI789']
// let trackingId = document.getElementById("trackingId")
let trackingNo =  Math.floor(Math.random() * (9999999999 - 1000000000 + 1)) + 1000000000;
function track()
{

    const input = document.querySelector("#trackingId");
    const inputval = input.value.trim();
    const notFound = !products.some(product =>{
        product.trackingId === inputval;
    })

    const products = [
        {
            productid: "1",
            handler: "DHL Express",
            openTime: "June, 04 2024 12:23",
            deliverTime: "",
            openLocation: "Surulere, Lagos",
            deliveryLocation: "California, USA",
            desc: "a nice bag",
            trackingId: "133914"
        },
        {
            productid: "2",
            desc: "a nice cloth",
            trackingId: "133915"
        },
        {
            productid: "3",
            desc: "a nice show",
            trackingId: "133916"
        }
    ]
        products.forEach(product =>{
            if(product.trackingId === inputval)
            {                
                document.getElementById('myTrackingNumber').innerHtml = '';
                document.getElementById('myHandler').innerText = product.handler;
                document.getElementById('openingTime').innerText = product.openTime;
                document.getElementById('openingLocation').innerText = product.openLocation;
                document.getElementById('deliverLocation').innerText = product.deliveryLocation;


                console.log(product.productid, product.desc);
            }
        }
        )
}

function showLaodingAnimation()
{
    document.querySelector('.express_track_divv').style.height="300px"; 
    document.getElementById('displayLoad').style.display='block';
    document.querySelector('.loaded').style.marginTop = '20%';
    setTimeout(hideLoadingAnimation, 500);
}
function hideLoadingAnimation()
{
    document.querySelector('.express_track_divv').style.height="150px";
    document.getElementById('displayLoad').style.display='none';
    document.querySelector('.loaded').style.marginTop = '0px';
    setTimeout(informationDisplayer, 200);
}
function informationDisplayer()
{
    document.getElementById('informationDisplay').style.display='contents';
}


// function checkTrackingId(trackingId)
// {
//     if (trackingIds.includes(trackingId))
//     {
//         return true; //Tracking Id exists in the database
//     }
//     else{
//         return false; //Tracking Id does not exist in the database
//     }
// }

// function checkDeliveryProgress(trackingId)
// {
//     let progressStatus = "Out for delivery";
//     return progressStatus;
// }

// function checkProgress()
// {
//     let progress = checkDeliveryProgress(trackingId);
//     let progressStatusElement = document.getElementById("Progress Status");

//     if (progress)
//     {
//         progressStatusElement.innerText = 'Tracking ID: ${trackingId}: ${progress}';
//     }
//     else
//     {
//         progressStatusElement.innerText = 'Tracking ID: ${trackingId} not found}'
//     }
// }

// checkProgress();