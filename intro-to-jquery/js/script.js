// // the "document ready" approach 
// $(document).ready(function() {
//     // all of your app's js goes within this function
//     alert("Everything is ready, let's do this");
//   });
  
//   // or, the shortcut version
//   $(function(){
//     // all of your app's js goes within this function
//     alert("Everything is ready, let's do this");
//   })

$('#addHome').removeClass('btn-danger').addClass('btn-success');

$('h1').addClass('text-center');

// returns a jQuery set of new DOM elements
var $newLink = $( '<br><br><a id="zillowLink" href="http://www.zillow.com" target="_blank">Visit Zillow.com</a>' );
$('body').append($newLink);

$('#zillowLink').attr( "target", "_blank" );
console.log($('#zillowLink').attr("href"))


// //only add home button
// $('#addHome').on('click', function(evt) {
//     console.log(evt);
// });


// both are the same
//   $('#addHome').click(function(evt){
//     console.log(evt, this);
//   });

// //remove buttons
// $('#homes tbody').on('click', 'button', function() {
//     console.log(this);
//     $(this).closest('tr').remove();
// });

const removedARR = []
$('#homes tbody').on('click', 'button', function() {
    $(this).closest('tr').fadeOut(500, function() {
      // now that the tr is hidden, let's completely remove it from the DOM
      let $removed = $(this).show().remove()
      removedARR.push($removed)
    });
});

var newHomes = [
    {address: "27569 Cedarwood Drive", sf: "2,535", bedrooms: 3, baths: 2.5, price: "$496,500"},
    {address: "316 Annandale Drive", sf: "1,326", bedrooms: 4, baths: 2, price: "$275,000"},
    {address: "251 Grandview Road", sf: "3,800", bedrooms: 3, baths: 2, price: "$699,900"},
    {address: "28571 Manitoba", sf: "2,960", bedrooms: 4, baths: 3.5, price: "$775,000"}
];
//did not work
// works
// const button = `<td><button class="btn btn-xs btn-danger">Remove</button></td>`
$('#addHome').on('click', function(event) {
    if (newHomes.length !== 0){
        const $button = $('<td><button class="btn btn-xs btn-danger">Remove</button></td>')
        let $trAdd = $('<tr></tr>')
        let objZ = newHomes.shift()
        // console.log($trAdd)
        for (let key in objZ){
            let value = objZ[key].toString()
            let insert = $("<td>"+value+"</td>")
            $trAdd.append(insert)
        }
        $trAdd.append($button)
        console.log($trAdd);
        $("#homes tbody").append($trAdd)
    }
});

var $newButt = $( `<br><button id="restore" type:"reset" class="btn-light" >Restore</button></br>`);
$('body').append($newButt);
$('#restore').on('click', function() {
    console.log(removedARR[0])
    for (removed of removedARR){
        $('#homes tbody').append(removed)
    }
    newHomes = []
})

console.log(removedARR)