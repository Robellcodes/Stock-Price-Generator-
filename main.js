$(document).ready(function() {
  $('#searchstock').on('click', function() {
      let requestData = $('#search').val();
      // Make request to rest API
      $.ajax({
          url: 'https://www.alphavantage.co/query?function=BATCH_STOCK_QUOTES&symbols=' + requestData + '&apikey=SB1CZMKQ6Q5283QZ',
          method: 'get',
          dataType: 'json',
          success: function(data) {
              var table = '<th>Symbol</th><th>Price</th>';
              for (let i = 0; i < data['Stock Quotes'].length; i++) 
              {
                  var symbol = '<td>' + data['Stock Quotes'][i]['1. symbol'] + '</td>';
                  let price = '<td>' + data['Stock Quotes'][i]['2. price'] + '</td>';
                  
                  table += '<tr>' + symbol + price +  '</tr>';
                  
              }
              document.getElementById('stockList').innerHTML = table;
          }
      });
  });
});