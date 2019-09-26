const https = require('https');
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('c14b1336e4de4bf481a4975b5924d313');

console.log("Please select the number of your prefered source:\n");
console.log(" 1. CBS News \n 2. BuzzFeed \n 3. ESPN \n 4. Vice News");

process.stdin.once('data', (chosen)=>{
   var chosen = Number(chosen);
    // console.log( chosen);
    
    function newsnews()
    {
    const source = {
        un: "cbs-news",
        deux: "buzzfeed",
        trois: "espn",
        quatre: "vice-news"
      }

    if (chosen===1)
    {
        console.log("Welcome!!\n CBS News: dedicated to providing the best in journalism under standards it pioneered at the dawn of radio and television and continue in the digital age.\n Our 10 Top Stories;");
        const url = 'https://newsapi.org/v2/top-headlines?sources=cbs-news&apiKey=c14b1336e4de4bf481a4975b5924d313';
        
        https.get(url, response => {
            var data = "";
            response.on("data", news => {
            data += news;});
  
          response.on("end", () => {
              res = JSON.parse(data);
              console.log("Res", res);});
            })
  
          .on("error", err => {
            error = err;
            console.log("Error", err);}) 
        //https.get(url,
        //Response=>{
        //     let data = "";
        //     Response.on(data)
        //     {
        //         data.forEach(source=>{
        //             console.log(source.title);
        //         })
        //     }
        // });
        //console.log(data);

    }

    else if (chosen === 2)
    {
        console.log("Welcome!!\n BuzzFeed is a cross-platform, global network for news and entertainment that generates seven billion views each month.\n Our 10 Top Stories;");
        const url = 'https://newsapi.org/v2/top-headlines?sources=buzzfeed&apiKey=c14b1336e4de4bf481a4975b5924d313';
        https.get(url, response => {
          var data = "";
          response.on("data", news => {
          data += news;});

        response.on("end", () => {
            res = JSON.parse(data);
            console.log("Res", res);});
          })

        .on("error", err => {
          error = err;
          console.log("Error", err);})  
    }

    else if (chosen === 3)
    {
        console.log("Welcome!!\n ESPN has up-to-the-minute sports news coverage, scores, highlights and commentary for NFL, MLB, NBA, College Football, NCAA Basketball and more.\n Our 10 Top Stories;");
        const url = 'https://newsapi.org/v2/top-headlines?sources=espn&apiKey=c14b1336e4de4bf481a4975b5924d313';
        https.get(url, response => {
          var data = "";
          response.on("data", news => {
          data += news;});

        response.on("end", () => {
            res = JSON.parse(data);
            console.log("Res", res);});
          })

        .on("error", err => {
          error = err;
          console.log("Error", err);}) 
    }
    
    else if (chosen === 4)
    {
        console.log(" Welcome!!\n Vice News is Vice Media, Inc.'s current affairs channel, producing daily documentary essays and video through its website and YouTube channel. It promotes itself on its coverage of \"under - reported stories\".\n Our 10 Top Stories;");
        const url = 'https://newsapi.org/v2/top-headlines?sources=vice-news&apiKey=c14b1336e4de4bf481a4975b5924d313';
        https.get(url, response => {
          var data = "";
          response.on("data", news => {
          data += news;});

        response.on("end", () => {
            res = JSON.parse(data);
            console.log("Res", res);});
          })

        .on("error", err => {
          error = err;
          console.log("Error", err);}) 
    }
    
    else
    {
        console.log("Please pick one of the above")
    }
}
    console.log(newsnews());
})